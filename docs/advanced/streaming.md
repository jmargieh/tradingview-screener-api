# Streaming Data

Real-time data updates with the streaming API.

## Overview

The `stream()` method provides real-time updates by continuously fetching data at regular intervals.

```typescript
for await (const data of screener.stream()) {
  console.log('Updated data:', data);
}
```

## Basic Usage

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(StockField.NAME, StockField.PRICE, StockField.CHANGE_PERCENT)
  .sortBy(StockField.CHANGE_PERCENT, false)
  .setRange(0, 10);

// Stream top 10 gainers
for await (const data of screener.stream()) {
  if (data) {
    console.clear();
    console.log('Top Gainers:', new Date().toLocaleTimeString());
    console.table(data.data);
  }
}
```

## Stream Options

```typescript
interface StreamOptions {
  interval?: number;      // Update interval in milliseconds (default: 5000)
  maxIterations?: number; // Maximum number of updates (default: unlimited)
}
```

### Setting Update Interval

```typescript
// Update every 5 seconds (default)
for await (const data of screener.stream({ interval: 5000 })) {
  // ...
}

// Update every 10 seconds
for await (const data of screener.stream({ interval: 10000 })) {
  // ...
}

// Update every 30 seconds
for await (const data of screener.stream({ interval: 30000 })) {
  // ...
}
```

**Note**: Minimum interval is 1000ms (1 second) to respect API rate limits.

### Limiting Iterations

```typescript
// Run 10 updates then stop
for await (const data of screener.stream({ maxIterations: 10 })) {
  console.log('Update received');
}
console.log('Stream complete');

// Run 100 updates
for await (const data of screener.stream({ maxIterations: 100 })) {
  // Process data
}
```

### Unlimited Streaming

```typescript
// Stream indefinitely (use Ctrl+C to stop)
for await (const data of screener.stream()) {
  // Continues until manually stopped
}
```

## Error Handling

The stream continues even when errors occur:

```typescript
for await (const data of screener.stream({ interval: 5000 })) {
  if (data === null) {
    console.log('Error occurred, will retry on next iteration');
    continue;
  }

  // Process successful data
  console.table(data.data);
}
```

Errors are logged to console but don't stop the stream:

```
Stream error: Error: Network error
// Stream continues...
```

## Practical Examples

### Live Price Monitor

```typescript
const screener = new StockScreener();

screener
  .where(StockField.MARKET_CAPITALIZATION.gt(10e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE,
    StockField.CHANGE_PERCENT
  )
  .sortBy(StockField.MARKET_CAPITALIZATION, false)
  .setRange(0, 5);

for await (const data of screener.stream({ interval: 5000 })) {
  if (data) {
    console.clear();
    console.log('═══════════════════════════════════════');
    console.log(`  Top 5 Stocks - ${new Date().toLocaleTimeString()}`);
    console.log('═══════════════════════════════════════');
    console.table(data.data);
  }
}
```

### Crypto Market Watch

```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

const crypto = new CryptoScreener();

crypto
  .where(CryptoField.MARKET_CAP.gt(1e9))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT,
    CryptoField.VOLUME_24H_IN_USD
  )
  .sortBy(CryptoField.CHANGE_PERCENT, false)
  .setRange(0, 10);

for await (const data of crypto.stream({ interval: 10000 })) {
  if (data) {
    console.clear();
    console.log('Top 10 Crypto Gainers - Updated:', new Date().toLocaleString());
    console.table(data.data);
  }
}
```

### Alert System

```typescript
const screener = new StockScreener();

screener
  .where(StockField.CHANGE_PERCENT.gt(5))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(StockField.NAME, StockField.PRICE, StockField.CHANGE_PERCENT)
  .sortBy(StockField.CHANGE_PERCENT, false);

console.log('Monitoring for big movers (>5% change)...');

for await (const data of screener.stream({ interval: 60000 })) {
  if (data && data.data.length > 0) {
    console.log(`\n🚨 ALERT: ${data.data.length} stocks moving >5%`);
    data.data.forEach(stock => {
      console.log(`  ${stock.name}: ${stock.change_abs}%`);
    });
  }
}
```

### Timed Monitoring

```typescript
// Monitor for 1 hour (12 updates at 5-minute intervals)
const updatesPerHour = 12;

for await (const data of screener.stream({
  interval: 300000,  // 5 minutes
  maxIterations: updatesPerHour
})) {
  if (data) {
    console.log('Update:', new Date().toLocaleTimeString());
    console.table(data.data.slice(0, 5));
  }
}

console.log('Monitoring session complete');
```

## Stream Control

### Breaking Out of Stream

```typescript
let updateCount = 0;

for await (const data of screener.stream({ interval: 5000 })) {
  if (data) {
    console.log(`Update ${++updateCount}`);
    console.table(data.data);

    // Stop after 10 updates
    if (updateCount >= 10) {
      break;
    }
  }
}
```

### Conditional Streaming

```typescript
let consecutiveErrors = 0;

for await (const data of screener.stream({ interval: 5000 })) {
  if (data === null) {
    consecutiveErrors++;
    if (consecutiveErrors >= 3) {
      console.error('Too many consecutive errors, stopping stream');
      break;
    }
    continue;
  }

  consecutiveErrors = 0;  // Reset on success
  console.table(data.data);
}
```

## Updating Query While Streaming

Each iteration uses the current screener configuration:

```typescript
const screener = new StockScreener();

screener
  .where(StockField.CHANGE_PERCENT.gt(5))
  .select(StockField.NAME, StockField.CHANGE_PERCENT);

// Start streaming
const streamIterator = screener.stream({ interval: 10000 });

// Later, update the threshold
setTimeout(() => {
  screener.where(StockField.CHANGE_PERCENT.gt(10));  // Now requires >10%
}, 30000);
```

## Processing Stream Data

### Collecting Updates

```typescript
const updates: any[] = [];

for await (const data of screener.stream({
  interval: 5000,
  maxIterations: 10
})) {
  if (data) {
    updates.push({
      timestamp: new Date(),
      data: data.data
    });
  }
}

console.log(`Collected ${updates.length} updates`);
```

### Aggregating Data

```typescript
const priceHistory = new Map<string, number[]>();

for await (const data of screener.stream({
  interval: 5000,
  maxIterations: 20
})) {
  if (data) {
    data.data.forEach(stock => {
      if (!priceHistory.has(stock.symbol)) {
        priceHistory.set(stock.symbol, []);
      }
      priceHistory.get(stock.symbol)!.push(stock.close);
    });
  }
}

// Analyze price changes
priceHistory.forEach((prices, symbol) => {
  const start = prices[0];
  const end = prices[prices.length - 1];
  const change = ((end - start) / start) * 100;
  console.log(`${symbol}: ${change.toFixed(2)}% change`);
});
```

## Performance Considerations

### Interval Guidelines

```typescript
// Recommended intervals based on use case:

// Real-time dashboard: 5-10 seconds
screener.stream({ interval: 5000 });

// Regular monitoring: 30-60 seconds
screener.stream({ interval: 30000 });

// Background updates: 5-15 minutes
screener.stream({ interval: 300000 });

// Hourly scans: 1 hour
screener.stream({ interval: 3600000 });
```

### Limiting Results

Keep result sets small for better performance:

```typescript
// Good: Small result set
screener.setRange(0, 10);

// Avoid: Large result set for streaming
screener.setRange(0, 1000);  // Too much data per update
```

### Memory Management

```typescript
// For long-running streams, don't accumulate all data
for await (const data of screener.stream()) {
  if (data) {
    // Process and discard
    processData(data);
    // Don't store: allData.push(data)
  }
}
```

## TypeScript Types

```typescript
// Stream returns AsyncGenerator
const stream: AsyncGenerator<ScreenerResult | null> = screener.stream();

// Iterate with for-await-of
for await (const data of stream) {
  if (data !== null) {
    data.data      // Type: ScreenerRow[]
    data.totalCount // Type: number
  }
}
```

## Comparison with Polling

### Stream API (Recommended)

```typescript
// Automatic interval management
for await (const data of screener.stream({ interval: 5000 })) {
  // Data arrives automatically
}
```

### Manual Polling (Alternative)

```typescript
// Manual implementation
setInterval(async () => {
  const data = await screener.get();
  console.table(data.data);
}, 5000);
```

## Best Practices

### 1. Use Appropriate Intervals

```typescript
// Good: Reasonable interval
screener.stream({ interval: 5000 });

// Avoid: Too frequent
screener.stream({ interval: 100 });  // Will be capped at 1000ms
```

### 2. Handle Errors Gracefully

```typescript
// Good: Check for null
for await (const data of screener.stream()) {
  if (data === null) {
    console.log('Temporary error, continuing...');
    continue;
  }
  processData(data);
}
```

### 3. Limit Long Streams

```typescript
// Good: Set maxIterations for long runs
screener.stream({ maxIterations: 1000 });

// Or: Add manual timeout
setTimeout(() => process.exit(0), 3600000);  // 1 hour
```

### 4. Clean Up Resources

```typescript
// Use try-finally for cleanup
try {
  for await (const data of screener.stream()) {
    // Process data
  }
} finally {
  // Cleanup code
  console.log('Stream ended, cleaning up...');
}
```

## Troubleshooting

### Stream Not Updating

Check your interval:
```typescript
// Interval too short - will be capped
screener.stream({ interval: 500 });  // Becomes 1000

// Use at least 1000ms
screener.stream({ interval: 1000 });
```

### Stream Stops Unexpectedly

Check for unhandled errors:
```typescript
try {
  for await (const data of screener.stream()) {
    // Your code
  }
} catch (error) {
  console.error('Stream error:', error);
}
```

### High Memory Usage

Don't accumulate data:
```typescript
// Bad: Storing all updates
const allData = [];
for await (const data of screener.stream()) {
  allData.push(data);  // Memory grows indefinitely
}

// Good: Process and discard
for await (const data of screener.stream()) {
  processData(data);  // No accumulation
}
```

## Next Steps

- [Error Handling](error-handling.md) - Handling stream errors
- [Performance Tips](performance.md) - Optimizing streams
- [Basic Usage](../basic-usage.md) - Core concepts
