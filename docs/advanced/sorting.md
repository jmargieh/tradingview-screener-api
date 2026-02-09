# Sorting

Custom sort orders for screener results.

## Overview

The `sortBy()` method controls the order of results.

```typescript
screener.sortBy(field, ascending);
```

## Basic Usage

### Ascending Order

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

// Sort by price (lowest first)
screener.sortBy(StockField.PRICE, true);

// Sort alphabetically by name
screener.sortBy(StockField.NAME, true);
```

### Descending Order

```typescript
// Sort by market cap (largest first)
screener.sortBy(StockField.MARKET_CAPITALIZATION, false);

// Sort by volume (highest first)
screener.sortBy(StockField.VOLUME, false);

// Sort by change percent (biggest gainers first)
screener.sortBy(StockField.CHANGE_PERCENT, false);
```

## Default Sorting

Each screener has a default sort order:

```typescript
// StockScreener: Sorted by MARKET_CAPITALIZATION descending
const stock = new StockScreener();
// Results are sorted by market cap (largest first)

// CryptoScreener: Sorted by VOLUME_24H_IN_USD descending
const crypto = new CryptoScreener();
// Results are sorted by 24h volume (highest first)

// ForexScreener: Sorted by NAME ascending
const forex = new ForexScreener();
// Results are sorted alphabetically
```

## Sort by Different Fields

### By Price

```typescript
// Cheapest stocks
screener.sortBy(StockField.PRICE, true);

// Most expensive stocks
screener.sortBy(StockField.PRICE, false);
```

### By Volume

```typescript
// Highest volume (most liquid)
screener.sortBy(StockField.VOLUME, false);

// Lowest volume
screener.sortBy(StockField.VOLUME, true);
```

### By Market Cap

```typescript
// Largest companies (blue chips)
screener.sortBy(StockField.MARKET_CAPITALIZATION, false);

// Smallest companies
screener.sortBy(StockField.MARKET_CAPITALIZATION, true);
```

### By Change

```typescript
// Biggest gainers
screener.sortBy(StockField.CHANGE_PERCENT, false);

// Biggest losers
screener.sortBy(StockField.CHANGE_PERCENT, true);
```

### By Valuation

```typescript
// Lowest P/E ratio (cheapest valuation)
screener.sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true);

// Highest P/E ratio
screener.sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, false);
```

### By Dividend

```typescript
// Highest dividend yield
screener.sortBy(StockField.DIVIDEND_YIELD_FWD, false);

// Lowest dividend yield
screener.sortBy(StockField.DIVIDEND_YIELD_FWD, true);
```

## Common Sorting Patterns

### Top Gainers

```typescript
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.CHANGE_PERCENT.gt(0))
  .select(StockField.NAME, StockField.PRICE, StockField.CHANGE_PERCENT)
  .sortBy(StockField.CHANGE_PERCENT, false)  // Biggest gainers first
  .setRange(0, 20);
```

### Top Losers

```typescript
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.CHANGE_PERCENT.lt(0))
  .select(StockField.NAME, StockField.PRICE, StockField.CHANGE_PERCENT)
  .sortBy(StockField.CHANGE_PERCENT, true)  // Biggest losers first
  .setRange(0, 20);
```

### Most Active

```typescript
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(StockField.NAME, StockField.VOLUME)
  .sortBy(StockField.VOLUME, false)  // Highest volume first
  .setRange(0, 50);
```

### Best Value

```typescript
screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.gt(0))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(StockField.NAME, StockField.PRICE_TO_EARNINGS_RATIO_TTM)
  .sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true)  // Lowest P/E first
  .setRange(0, 50);
```

### Highest Yield

```typescript
screener
  .where(StockField.DIVIDEND_YIELD_FWD.gt(0))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(StockField.NAME, StockField.DIVIDEND_YIELD_FWD)
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false)  // Highest yield first
  .setRange(0, 50);
```

## Crypto Sorting

```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

const crypto = new CryptoScreener();

// By market cap
crypto.sortBy(CryptoField.MARKET_CAP, false);

// By volume
crypto.sortBy(CryptoField.VOLUME_24H_IN_USD, false);

// By change
crypto.sortBy(CryptoField.CHANGE_PERCENT, false);

// By price
crypto.sortBy(CryptoField.PRICE, false);
```

## Multiple Sort Criteria

TradingView API supports single sort field. For multiple sorts, sort in JavaScript:

```typescript
const results = await screener
  .sortBy(StockField.MARKET_CAPITALIZATION, false)
  .get();

// Secondary sort in JavaScript
results.data.sort((a, b) => {
  // Primary: Market cap (already sorted)
  // Secondary: Sort by volume within same market cap
  if (a.market_cap_basic === b.market_cap_basic) {
    return b.volume - a.volume;  // Descending volume
  }
  return 0;
});
```

## Changing Sort Order

```typescript
const screener = new StockScreener();

screener.select(StockField.NAME, StockField.PRICE);

// First query: sorted by price
screener.sortBy(StockField.PRICE, true);
const byPrice = await screener.get();

// Second query: sorted by volume
screener.sortBy(StockField.VOLUME, false);
const byVolume = await screener.get();
```

## Sorting with Pagination

```typescript
// Sort applies to entire result set, not just current page
screener
  .sortBy(StockField.MARKET_CAPITALIZATION, false)
  .setRange(0, 50);

const page1 = await screener.get();  // Top 50 by market cap

screener.setRange(50, 100);
const page2 = await screener.get();  // Next 50 by market cap
```

## Best Practices

### 1. Sort by Filtered Fields

```typescript
// Good: Sort by a field you're filtering/selecting
screener
  .where(StockField.VOLUME.gte(100_000))
  .select(StockField.NAME, StockField.VOLUME)
  .sortBy(StockField.VOLUME, false);

// Works but less intuitive
screener
  .where(StockField.VOLUME.gte(100_000))
  .sortBy(StockField.MARKET_CAPITALIZATION, false);  // Sort by different field
```

### 2. Use Descending for Top N

```typescript
// Good: Get top performers
screener
  .sortBy(StockField.CHANGE_PERCENT, false)  // Descending
  .setRange(0, 10);

// Less common: Bottom performers
screener
  .sortBy(StockField.CHANGE_PERCENT, true)   // Ascending
  .setRange(0, 10);
```

### 3. Combine with Appropriate Filters

```typescript
// Good: Filter then sort
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))  // Filter first
  .where(StockField.VOLUME.gte(100_000))
  .sortBy(StockField.CHANGE_PERCENT, false);        // Then sort

// Works but may be slow
screener
  .sortBy(StockField.CHANGE_PERCENT, false);  // Sort entire dataset
```

## Sort Direction Quick Reference

| Use Case | Field | Ascending | Descending |
|----------|-------|-----------|------------|
| Cheapest stocks | PRICE | ✅ | |
| Most expensive | PRICE | | ✅ |
| Highest volume | VOLUME | | ✅ |
| Largest companies | MARKET_CAPITALIZATION | | ✅ |
| Smallest companies | MARKET_CAPITALIZATION | ✅ | |
| Biggest gainers | CHANGE_PERCENT | | ✅ |
| Biggest losers | CHANGE_PERCENT | ✅ | |
| Highest yield | DIVIDEND_YIELD_FWD | | ✅ |
| Lowest P/E | PRICE_TO_EARNINGS_RATIO_TTM | ✅ | |
| Alphabetical | NAME | ✅ | |

## Next Steps

- [Pagination](pagination.md) - Working with large result sets
- [Performance Tips](performance.md) - Optimizing queries
- [Basic Usage](../basic-usage.md) - Core concepts
