# Field Search

Finding and discovering fields programmatically.

## Overview

The `BaseField` class provides static methods for searching and filtering fields:

```typescript
import { BaseField, StockField } from 'tradingview-screener';
```

## Search by Name or Label

### Basic Search

```typescript
// Search for fields containing "price"
const results = BaseField.search(StockField, 'price');
// Returns: [PRICE, PRICE_TO_EARNINGS_RATIO_TTM, PRICE_TO_BOOK_MRQ, ...]

// Search for "volume"
const volumeFields = BaseField.search(StockField, 'volume');
// Returns: [VOLUME, ...]

// Search for "dividend"
const dividendFields = BaseField.search(StockField, 'dividend');
// Returns: [DIVIDEND_YIELD_FWD, ...]
```

### Case-Insensitive Search

Search is case-insensitive:

```typescript
BaseField.search(StockField, 'PRICE');   // Same as 'price'
BaseField.search(StockField, 'Price');   // Same as 'price'
BaseField.search(StockField, 'price');   // All return same results
```

### Search by Label

Search matches both field names and labels:

```typescript
// Search by field name
BaseField.search(StockField, 'RSI');

// Search by label
BaseField.search(StockField, 'Relative Strength');
```

## Filter by Options

### Filter by Format

```typescript
// Find all currency fields
const currencyFields = BaseField.search(StockField, '', {
  format: 'currency'
});
// Returns: PRICE, MARKET_CAPITALIZATION, REVENUE_TTM, etc.

// Find all percent fields
const percentFields = BaseField.search(StockField, '', {
  format: 'percent'
});
// Returns: CHANGE_PERCENT, DIVIDEND_YIELD_FWD, etc.

// Find float fields
const floatFields = BaseField.search(StockField, '', {
  format: 'float'
});
// Returns: RSI, ATR, PRICE_TO_EARNINGS_RATIO_TTM, etc.
```

### Filter by Interval Support

```typescript
// Find fields that support intervals
const intervalFields = BaseField.search(StockField, '', {
  interval: true
});
// Returns: PRICE, RSI, etc.

// Find fields without interval support
const nonIntervalFields = BaseField.search(StockField, '', {
  interval: false
});
```

### Filter by Historical Support

```typescript
// Find fields that support historical data
const historicalFields = BaseField.search(StockField, '', {
  historical: true
});
```

### Combined Filters

```typescript
// Find currency fields that support intervals
const results = BaseField.search(StockField, '', {
  format: 'currency',
  interval: true
});

// Find percent fields with "yield" in the name
const yieldFields = BaseField.search(StockField, 'yield', {
  format: 'percent'
});
```

## Get Fields by Format

Use `byFormat()` for a more direct approach:

```typescript
// Get all currency fields
const currencyFields = BaseField.byFormat(StockField, 'currency');

// Get all percent fields
const percentFields = BaseField.byFormat(StockField, 'percent');

// Get all text fields
const textFields = BaseField.byFormat(StockField, 'text');

// Get all float fields
const floatFields = BaseField.byFormat(StockField, 'float');
```

### Available Formats

```typescript
'currency'                  // Monetary values
'percent'                   // Percentages
'float'                     // Floating point numbers
'round'                     // Integers
'number_group'             // Grouped numbers
'text'                     // Text strings
'date'                     // Dates
'bool'                     // Booleans
'rating'                   // Analyst ratings
'recommendation'           // Recommendations
'computed_recommendation'  // Computed recommendations
```

## Get Technical Indicators

Find all technical indicator fields:

```typescript
const technicals = BaseField.technicals(StockField);
// Returns: RSI, MACD, ATR, Moving Averages, Bollinger Bands, etc.
```

This searches for fields that:
- Contain "INDICATOR" in the name
- Have labels containing "rsi", "macd", "moving average", or "bollinger"

## Get Recommendation Fields

Find all recommendation-related fields:

```typescript
const recommendations = BaseField.recommendations(StockField);
// Returns: Fields with recommendation or computed_recommendation format
```

## Practical Examples

### Find All Valuation Ratios

```typescript
const valuationFields = BaseField.search(StockField, 'ratio', {
  format: 'float'
});
// Returns: PRICE_TO_EARNINGS_RATIO_TTM, PRICE_TO_BOOK_MRQ, etc.
```

### Find All Dividend Fields

```typescript
const dividendFields = BaseField.search(StockField, 'dividend');
// Returns: All dividend-related fields
```

### Find Crypto Volume Fields

```typescript
import { CryptoField } from 'tradingview-screener';

const volumeFields = BaseField.search(CryptoField, 'volume');
// Returns: VOLUME_24H_IN_USD, etc.
```

### List All Available Fields

```typescript
// Get all fields
const allFields = BaseField.search(StockField, '');

console.log(`Total fields: ${allFields.length}`);

allFields.forEach(field => {
  console.log(`${field.name}: ${field.label} (${field.format})`);
});
```

## Inspecting Field Properties

```typescript
const results = BaseField.search(StockField, 'price');

results.forEach(field => {
  console.log('Name:', field.name);
  console.log('Label:', field.label);
  console.log('Field Name:', field.fieldName);
  console.log('Format:', field.format);
  console.log('Supports Interval:', field.supportsInterval);
  console.log('Supports History:', field.supportsHistory);
  console.log('---');
});
```

## Building Dynamic Queries

Use search results to build dynamic queries:

```typescript
// Find all percent fields
const percentFields = BaseField.byFormat(StockField, 'percent');

// Create screener
const screener = new StockScreener();

// Select all percent fields
screener.select(...percentFields);

const results = await screener.get();
// Results will have all percentage fields
```

## Field Discovery Workflow

### 1. Explore Available Fields

```typescript
// What fields are available?
const allFields = BaseField.search(StockField, '');
console.log(`Found ${allFields.length} fields`);
```

### 2. Search by Topic

```typescript
// Find earnings-related fields
const earningsFields = BaseField.search(StockField, 'earnings');

// Find growth fields
const growthFields = BaseField.search(StockField, 'growth');
```

### 3. Filter by Type

```typescript
// Find numeric earnings fields
const numericEarnings = BaseField.search(StockField, 'earnings', {
  format: 'currency'
});
```

### 4. Use in Query

```typescript
screener
  .select(...numericEarnings)
  .sortBy(numericEarnings[0], false);
```

## TypeScript Type Inference

Search results are properly typed:

```typescript
const results: BaseField[] = BaseField.search(StockField, 'price');

// TypeScript knows the return type
results.forEach(field => {
  field.name;       // ✓ Autocomplete works
  field.label;      // ✓ Autocomplete works
  field.gt(100);    // ✓ Comparison methods available
});
```

## Next Steps

- [Field System Overview](overview.md) - Understanding fields
- [Stock Fields Reference](stock-fields.md) - All stock fields
- [Crypto Fields Reference](crypto-fields.md) - All crypto fields
- [Field Modifiers](modifiers.md) - Intervals and history
