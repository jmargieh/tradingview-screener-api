# Field System Overview

Understanding fields and how to use them in the TradingView Screener.

## What are Fields?

Fields represent data columns you can:
1. **Filter on** - Use in `where()` conditions
2. **Retrieve** - Use in `select()` to get values
3. **Sort by** - Use in `sortBy()` for ordering

## Field Structure

Every field is a `BaseField` object with metadata:

```typescript
import { StockField } from 'tradingview-screener';

const priceField = StockField.PRICE;

console.log(priceField.name);         // "PRICE"
console.log(priceField.label);        // "Price"
console.log(priceField.fieldName);    // "close"
console.log(priceField.format);       // "currency"
console.log(priceField.supportsInterval);   // true
console.log(priceField.supportsHistory);    // false
```

### Field Properties

- **name** - Constant name (e.g., `"PRICE"`)
- **label** - Human-readable label (e.g., `"Price"`)
- **fieldName** - API field name (e.g., `"close"`)
- **format** - Data format type (e.g., `"currency"`, `"percent"`)
- **supportsInterval** - Can use time intervals
- **supportsHistory** - Can access historical values

## Field Types by Screener

Each screener has its own field enum:

```typescript
import {
  StockField,     // For StockScreener
  CryptoField,    // For CryptoScreener
  ForexField,     // For ForexScreener
  BondField,      // For BondScreener
  FuturesField,   // For FuturesScreener
  CoinField       // For CoinScreener
} from 'tradingview-screener';
```

## Using Fields

### In Filters

Fields have comparison methods:

```typescript
// Greater than
StockField.PRICE.gt(100)

// Between range
StockField.MARKET_CAPITALIZATION.between(1e9, 100e9)

// In list
StockField.SECTOR.isin(['Technology', 'Healthcare'])
```

### In Selection

```typescript
screener.select(
  StockField.NAME,
  StockField.PRICE,
  StockField.VOLUME
);
```

### In Sorting

```typescript
screener.sortBy(StockField.MARKET_CAPITALIZATION, false);
```

## Comparison Operators

All fields support these operators:

```typescript
field.gt(value)          // Greater than
field.gte(value)         // Greater than or equal
field.lt(value)          // Less than
field.lte(value)         // Less than or equal
field.eq(value)          // Equal
field.ne(value)          // Not equal
field.between(min, max)  // Between (inclusive)
field.notBetween(min, max) // Not between
field.isin(values)       // In list
field.notIn(values)      // Not in list
field.match(pattern)     // Regex match
field.notMatch(pattern)  // Regex not match
field.has(values)        // Has any of (for arrays)
field.hasNoneOf(values)  // Has none of (for arrays)
```

## Field Formats

Fields have different format types that determine how values are displayed:

### Numeric Formats

```typescript
'currency'      // Monetary values: $1,234.56
'percent'       // Percentages: 12.34%
'float'         // Floating point: 12.34
'round'         // Integers: 1234
'number_group'  // Grouped numbers: 1,234,567
```

### Other Formats

```typescript
'text'          // Text strings
'date'          // Dates
'bool'          // Boolean values
'rating'        // Analyst ratings
'recommendation' // Recommendations
'computed_recommendation' // Computed recommendations
```

## Field Name Mapping

In results, use the `fieldName` property:

```typescript
screener.select(StockField.PRICE);
// StockField.PRICE.fieldName = "close"

const results = await screener.get();
console.log(results.data[0].close);  // Access as "close"
```

Common mappings:

| Field | fieldName | Access In Results |
|-------|-----------|-------------------|
| StockField.PRICE | `close` | `row.close` |
| StockField.NAME | `name` | `row.name` |
| StockField.VOLUME | `volume` | `row.volume` |
| StockField.MARKET_CAPITALIZATION | `market_cap_basic` | `row.market_cap_basic` |

## Field Categories

### Stock Fields

- **Price & Volume** - PRICE, VOLUME, CHANGE, etc.
- **Fundamentals** - REVENUE_TTM, NET_INCOME_TTM, etc.
- **Valuation** - PRICE_TO_EARNINGS_RATIO_TTM, etc.
- **Dividends** - DIVIDEND_YIELD_FWD, etc.
- **Technical** - RSI, MACD, etc.

### Crypto Fields

- **Market Data** - PRICE, MARKET_CAP, etc.
- **Volume** - VOLUME_24H_IN_USD
- **Change** - CHANGE_PERCENT

### Other Asset Types

Forex, Bond, Futures, and Coin screeners have simplified field sets.

## Working with Field Metadata

### Searching Fields

```typescript
import { BaseField, StockField } from 'tradingview-screener';

// Search by name or label
const results = BaseField.search(StockField, 'price');
// Returns: [PRICE, PRICE_TO_EARNINGS_RATIO_TTM, ...]

// Search with filters
const currencyFields = BaseField.search(StockField, '', {
  format: 'currency'
});

// Get fields by format
const percentFields = BaseField.byFormat(StockField, 'percent');

// Get technical indicators
const technicals = BaseField.technicals(StockField);

// Get recommendation fields
const recommendations = BaseField.recommendations(StockField);
```

### Field Inspection

```typescript
// Check field capabilities
if (StockField.PRICE.supportsInterval) {
  // Can use with intervals
}

if (StockField.VOLUME.supportsHistory) {
  // Can access historical data
}

// Get field information
console.log(StockField.PRICE.toString());
// Output: "PRICE (close)"
```

## Field Modifiers

### With Interval

For fields that support intervals:

```typescript
import { FieldWithInterval } from 'tradingview-screener';

// Create field with interval
const priceDaily = new FieldWithInterval(StockField.PRICE, '1D');
const priceWeekly = new FieldWithInterval(StockField.PRICE, '1W');

// Use in queries
screener.where(priceDaily.gt(100));
```

### With History

For fields that support historical data:

```typescript
import { FieldWithHistory } from 'tradingview-screener';

// Create field with history
const volumeYesterday = new FieldWithHistory(StockField.VOLUME, 1);
const volumeTwoDaysAgo = new FieldWithHistory(StockField.VOLUME, 2);

// Use in queries
screener.where(volumeYesterday.gt(1_000_000));
```

See [Field Modifiers](modifiers.md) for detailed information.

## Type Safety

Fields are fully typed in TypeScript:

```typescript
// TypeScript knows the field type
const field: BaseField = StockField.PRICE;

// Autocomplete works
StockField.  // <-- IDE shows all stock fields

// Type checking
StockField.PRICE.gt(100);      // ✓ Valid
StockField.PRICE.gt('high');   // ✗ Type error
```

## Best Practices

### 1. Use Field Constants

```typescript
// Good: Use field constants
screener.select(StockField.PRICE);

// Avoid: String literals
// No direct string access available
```

### 2. Check Field Capabilities

```typescript
// Check before using intervals
if (field.supportsInterval) {
  const withInterval = new FieldWithInterval(field, '1D');
}
```

### 3. Use Appropriate Fields

```typescript
// Good: Use screener-specific fields
const stockScreener = new StockScreener();
stockScreener.where(StockField.PRICE.gt(100));

// Avoid: Mixing field types
const cryptoScreener = new CryptoScreener();
// Don't use StockField with CryptoScreener
```

## Next Steps

- [Stock Fields Reference](stock-fields.md) - All stock fields
- [Crypto Fields Reference](crypto-fields.md) - All crypto fields
- [Field Search](search.md) - Finding fields
- [Field Modifiers](modifiers.md) - Intervals and history
