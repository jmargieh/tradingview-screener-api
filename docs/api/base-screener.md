# BaseScreener API Reference

Complete API reference for the `BaseScreener` class and all screener types.

## Class Hierarchy

```
BaseScreener (abstract)
├── StockScreener
├── CryptoScreener
├── ForexScreener
├── BondScreener
├── FuturesScreener
└── CoinScreener
```

## BaseScreener

Abstract base class for all screener types. Provides core filtering, sorting, and querying functionality.

### Constructor

```typescript
constructor()
```

**Example:**
```typescript
const screener = new StockScreener();
```

## Methods

### `where(condition)`

Add a filter condition to the query.

**Signature:**
```typescript
where(condition: FieldCondition): this
```

**Parameters:**
- `condition` - A field condition created using comparison operators

**Returns:** `this` (for method chaining)

**Example:**
```typescript
screener
  .where(StockField.PRICE.gt(100))
  .where(StockField.VOLUME.gte(1_000_000));
```

**See Also:**
- [Filter Operations](../filtering/operations.md)
- [Field Conditions](../filtering/field-conditions.md)

---

### `select(...fields)`

Specify which fields to include in results.

**Signature:**
```typescript
select(...fields: BaseField[]): this
```

**Parameters:**
- `...fields` - Variable number of field objects

**Returns:** `this` (for method chaining)

**Example:**
```typescript
screener.select(
  StockField.NAME,
  StockField.PRICE,
  StockField.MARKET_CAPITALIZATION,
  StockField.VOLUME
);
```

**Default Behavior:**
If `select()` is not called, default fields are returned:
- Stock: NAME, PRICE, CHANGE, CHANGE_PERCENT, VOLUME, MARKET_CAPITALIZATION
- Crypto: NAME, PRICE, CHANGE_PERCENT, VOLUME_24H_IN_USD, MARKET_CAP

---

### `selectAll()`

Select all available fields for the screener type.

**Signature:**
```typescript
selectAll(): this
```

**Returns:** `this` (for method chaining)

**Example:**
```typescript
screener.selectAll();
const results = await screener.get();
// results.data[0] will have all available fields
```

**Warning:** This returns 15+ fields and may impact performance.

---

### `sortBy(field, ascending?)`

Sort results by a field.

**Signature:**
```typescript
sortBy(field: BaseField, ascending?: boolean): this
```

**Parameters:**
- `field` - The field to sort by
- `ascending` - Sort direction (default: `true`)
  - `true` - Ascending (A-Z, 0-9, smallest to largest)
  - `false` - Descending (Z-A, 9-0, largest to smallest)

**Returns:** `this` (for method chaining)

**Example:**
```typescript
// Sort by market cap (largest first)
screener.sortBy(StockField.MARKET_CAPITALIZATION, false);

// Sort by name (alphabetically)
screener.sortBy(StockField.NAME, true);

// Sort by P/E ratio (lowest first)
screener.sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true);
```

---

### `setRange(from, to)`

Set the range of results to return (pagination).

**Signature:**
```typescript
setRange(from?: number, to?: number): this
```

**Parameters:**
- `from` - Start index (default: `0`)
- `to` - End index (default: `150`)

**Returns:** `this` (for method chaining)

**Example:**
```typescript
// Get first 50 results
screener.setRange(0, 50);

// Get next 50 results
screener.setRange(50, 100);

// Get results 100-200
screener.setRange(100, 200);
```

**Notes:**
- TradingView limits the maximum range
- Use pagination for large result sets
- Default range is 0-150

---

### `setIndex(...indexSymbols)`

Filter results to only include constituents of specified indices.

**Signature:**
```typescript
setIndex(...indexSymbols: string[]): this
```

**Parameters:**
- `...indexSymbols` - Variable number of index symbols

**Returns:** `this` (for method chaining)

**Example:**
```typescript
// S&P 500 constituents only
screener.setIndex('SP:SPX');

// Multiple indices
screener.setIndex('SP:SPX', 'NASDAQ:NDX');
```

**Common Indices:**
- `'SP:SPX'` - S&P 500
- `'NASDAQ:NDX'` - NASDAQ 100
- `'DJ:DJI'` - Dow Jones Industrial Average
- `'RUSSELL:RUT'` - Russell 2000

---

### `get(printRequest?)`

Execute the query and return results.

**Signature:**
```typescript
async get(printRequest?: boolean): Promise<ScreenerResult>
```

**Parameters:**
- `printRequest` - If `true`, prints request details to console (default: `false`)

**Returns:** `Promise<ScreenerResult>`

**ScreenerResult Type:**
```typescript
interface ScreenerResult {
  data: ScreenerRow[];
  totalCount: number;
}

interface ScreenerRow {
  symbol: string;
  [key: string]: any;
}
```

**Example:**
```typescript
const results = await screener.get();

console.log(`Total matches: ${results.totalCount}`);
console.log(`Returned: ${results.data.length}`);

results.data.forEach(stock => {
  console.log(`${stock.symbol}: $${stock.close}`);
});
```

**Debug Mode:**
```typescript
// Print request payload
const results = await screener.get(true);
// Outputs:
// Request: https://scanner.tradingview.com/america/scan
// Payload:
// {
//   "filter": [...],
//   "columns": [...],
//   ...
// }
```

**Throws:**
- `MalformedRequestException` - API returns error
- `Error` - Network or other errors

---

### `stream(options?)`

Stream real-time data updates.

**Signature:**
```typescript
async *stream(options?: StreamOptions): AsyncGenerator<ScreenerResult | null>
```

**Parameters:**
- `options` - Streaming options (optional)

**StreamOptions Type:**
```typescript
interface StreamOptions {
  interval?: number;      // Update interval in ms (default: 5000, min: 1000)
  maxIterations?: number; // Max updates (default: unlimited)
}
```

**Returns:** `AsyncGenerator<ScreenerResult | null>`
- Yields `ScreenerResult` on success
- Yields `null` on error (continues streaming)

**Example:**
```typescript
// Stream updates every 5 seconds
for await (const data of screener.stream({ interval: 5000 })) {
  if (data) {
    console.clear();
    console.log('Updated:', new Date().toLocaleTimeString());
    console.table(data.data);
  }
}

// Stream with maximum iterations
for await (const data of screener.stream({
  interval: 10000,
  maxIterations: 10
})) {
  console.log('Update received');
}
// Stops after 10 updates
```

**Notes:**
- Minimum interval is 1000ms (enforced)
- Errors are logged but don't stop the stream
- Use Ctrl+C to stop infinite streams

---

## Properties

### Protected Properties

These properties are managed internally but can be accessed in subclasses:

```typescript
protected filters: Filter[]                   // Applied filters
protected sort: SortConfig | null             // Sort configuration
protected range: [number, number]             // Result range
protected options: Record<string, any>        // API options
protected symbols: SymbolsConfig | null       // Symbol filtering
protected specificFields: BaseField[] | null  // Selected fields
```

## Screener-Specific Classes

### StockScreener

```typescript
class StockScreener extends BaseScreener
```

**Endpoint:** `https://scanner.tradingview.com/america/scan`

**Default Fields:** NAME, PRICE, CHANGE, CHANGE_PERCENT, VOLUME, MARKET_CAPITALIZATION

**Field Type:** `StockField`

**Example:**
```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(StockField.NAME, StockField.PRICE);
```

---

### CryptoScreener

```typescript
class CryptoScreener extends BaseScreener
```

**Endpoint:** `https://scanner.tradingview.com/crypto/scan`

**Default Fields:** NAME, PRICE, CHANGE_PERCENT, VOLUME_24H_IN_USD, MARKET_CAP

**Field Type:** `CryptoField`

**Example:**
```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

const screener = new CryptoScreener();
screener
  .where(CryptoField.MARKET_CAP.gt(1e9))
  .select(CryptoField.NAME, CryptoField.PRICE);
```

---

### ForexScreener

```typescript
class ForexScreener extends BaseScreener
```

**Endpoint:** `https://scanner.tradingview.com/forex/scan`

**Field Type:** `ForexField`

---

### BondScreener

```typescript
class BondScreener extends BaseScreener
```

**Endpoint:** `https://scanner.tradingview.com/bond/scan`

**Field Type:** `BondField`

---

### FuturesScreener

```typescript
class FuturesScreener extends BaseScreener
```

**Endpoint:** `https://scanner.tradingview.com/futures/scan`

**Field Type:** `FuturesField`

---

### CoinScreener

```typescript
class CoinScreener extends BaseScreener
```

**Endpoint:** `https://scanner.tradingview.com/coin/scan`

**Field Type:** `CoinField`

---

## Method Chaining

All methods return `this` to enable fluent method chaining:

```typescript
const results = await new StockScreener()
  .where(StockField.PRICE.gt(10))
  .where(StockField.VOLUME.gte(100_000))
  .select(StockField.NAME, StockField.PRICE)
  .sortBy(StockField.VOLUME, false)
  .setRange(0, 50)
  .get();
```

## Type Safety

All methods and properties are fully typed:

```typescript
// TypeScript autocomplete for fields
screener.select(StockField.  // <-- Shows all stock fields

// TypeScript autocomplete for operators
StockField.PRICE.  // <-- Shows all comparison operators

// Typed results
const results = await screener.get();
results.data.forEach(row => {
  row.symbol  // ✓ Type-safe access
  row.close   // ✓ Type-safe access
});
```

## Error Handling

```typescript
import { MalformedRequestException } from 'tradingview-screener';

try {
  const results = await screener.get();
  console.table(results.data);
} catch (error) {
  if (error instanceof MalformedRequestException) {
    console.error(`API Error ${error.code}: ${error.responseMsg}`);
    console.error('URL:', error.url);
    console.error('Payload:', error.payload);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Examples

### Basic Query

```typescript
const screener = new StockScreener();

const results = await screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.PRICE.between(10, 500))
  .select(StockField.NAME, StockField.PRICE, StockField.VOLUME)
  .sortBy(StockField.VOLUME, false)
  .setRange(0, 20)
  .get();

console.table(results.data);
```

### Reusable Screener

```typescript
const baseScreener = new StockScreener()
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.VOLUME.gte(100_000));

// Query 1
const largeVolume = await baseScreener
  .sortBy(StockField.VOLUME, false)
  .get();

// Query 2
const highPrice = await baseScreener
  .where(StockField.PRICE.gt(500))
  .get();
```

### Streaming

```typescript
const screener = new StockScreener()
  .where(StockField.CHANGE_PERCENT.gt(5))
  .select(StockField.NAME, StockField.PRICE, StockField.CHANGE_PERCENT)
  .sortBy(StockField.CHANGE_PERCENT, false)
  .setRange(0, 10);

for await (const data of screener.stream({ interval: 10000 })) {
  if (data) {
    console.log('Top Gainers Updated!');
    console.table(data.data);
  }
}
```

## See Also

- [Filter Operations](../filtering/operations.md) - All comparison operators
- [Field Reference](../fields/stock-fields.md) - Available fields
- [Examples](../examples/value-investing.md) - Real-world examples
- [Streaming Guide](../advanced/streaming.md) - Streaming documentation
