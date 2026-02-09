# Field Modifiers

Using intervals and historical data with fields.

## Overview

Some fields support modifiers that change how they're queried:
- **Intervals** - Query field with specific time period
- **History** - Access historical field values

## Field Intervals

### What are Intervals?

Intervals allow you to query a field for a specific time period (e.g., daily, weekly, monthly).

### Creating Fields with Intervals

```typescript
import { FieldWithInterval } from 'tradingview-screener';
import { StockField } from 'tradingview-screener';

// Create price field with 1-day interval
const priceDaily = new FieldWithInterval(StockField.PRICE, '1D');

// Create price field with 1-week interval
const priceWeekly = new FieldWithInterval(StockField.PRICE, '1W');

// Create price field with 1-month interval
const priceMonthly = new FieldWithInterval(StockField.PRICE, '1M');
```

### Using Interval Fields

```typescript
const screener = new StockScreener();

// Use daily price in filter
screener.where(priceDaily.gt(100));

// Use weekly price in selection
screener.select(priceWeekly);
```

### Complete Example

```typescript
import { StockScreener, StockField } from 'tradingview-screener';
import { FieldWithInterval } from 'tradingview-screener';

const priceDaily = new FieldWithInterval(StockField.PRICE, '1D');
const priceWeekly = new FieldWithInterval(StockField.PRICE, '1W');

const screener = new StockScreener();

screener
  .where(priceDaily.gt(50))
  .where(priceWeekly.gt(45))  // Weekly price higher than daily
  .select(
    StockField.NAME,
    priceDaily,
    priceWeekly
  );

const results = await screener.get();
```

### Common Intervals

```typescript
'1D'   // 1 day
'1W'   // 1 week
'1M'   // 1 month
```

### Field Name Format

Interval fields append the interval to the field name:

```typescript
const priceDaily = new FieldWithInterval(StockField.PRICE, '1D');
console.log(priceDaily.fieldName);
// Output: "close|1D"
```

### Checking Interval Support

```typescript
// Check if field supports intervals
if (StockField.PRICE.supportsInterval) {
  const withInterval = new FieldWithInterval(StockField.PRICE, '1D');
  // Use withInterval in queries
}
```

## Historical Data

### What is Historical Data?

Historical data allows you to access past values of a field (e.g., yesterday's volume, last week's price).

### Creating Fields with History

```typescript
import { FieldWithHistory } from 'tradingview-screener';
import { StockField } from 'tradingview-screener';

// Create volume field for yesterday
const volumeYesterday = new FieldWithHistory(StockField.VOLUME, 1);

// Create volume field for 2 days ago
const volumeTwoDaysAgo = new FieldWithHistory(StockField.VOLUME, 2);

// Create price field for 5 days ago
const priceFiveDaysAgo = new FieldWithHistory(StockField.PRICE, 5);
```

### Using Historical Fields

```typescript
const screener = new StockScreener();

// Compare today's volume to yesterday's
screener
  .where(StockField.VOLUME.gt(1_000_000))
  .where(volumeYesterday.gt(500_000));
```

### Complete Example

```typescript
import { StockScreener, StockField } from 'tradingview-screener';
import { FieldWithHistory } from 'tradingview-screener';

const volumeYesterday = new FieldWithHistory(StockField.VOLUME, 1);
const volumeTwoDaysAgo = new FieldWithHistory(StockField.VOLUME, 2);

const screener = new StockScreener();

screener
  .where(StockField.VOLUME.gte(volumeYesterday))  // Today >= yesterday
  .where(volumeYesterday.gte(volumeTwoDaysAgo))   // Yesterday >= 2 days ago
  .select(
    StockField.NAME,
    StockField.VOLUME,
    volumeYesterday,
    volumeTwoDaysAgo
  );

const results = await screener.get();
```

### Field Name Format

Historical fields append the history index to the field name:

```typescript
const volumeYesterday = new FieldWithHistory(StockField.VOLUME, 1);
console.log(volumeYesterday.fieldName);
// Output: "volume[1]"
```

### Checking Historical Support

```typescript
// Check if field supports historical data
if (StockField.VOLUME.supportsHistory) {
  const historical = new FieldWithHistory(StockField.VOLUME, 1);
  // Use historical in queries
}
```

## Comparison Operators

Both `FieldWithInterval` and `FieldWithHistory` support all comparison operators:

```typescript
const priceDaily = new FieldWithInterval(StockField.PRICE, '1D');
const volumeYesterday = new FieldWithHistory(StockField.VOLUME, 1);

// All operators work
priceDaily.gt(100);
priceDaily.between(50, 200);
priceDaily.isin([100, 150, 200]);

volumeYesterday.gt(1_000_000);
volumeYesterday.between(500_000, 2_000_000);
```

## Practical Examples

### Volume Momentum

```typescript
import { StockScreener, StockField } from 'tradingview-screener';
import { FieldWithHistory } from 'tradingview-screener';

// Find stocks with increasing volume
const volumeYesterday = new FieldWithHistory(StockField.VOLUME, 1);

const screener = new StockScreener();

screener
  .where(StockField.VOLUME.gt(1_000_000))
  .where(StockField.VOLUME.gt(volumeYesterday))  // Today > yesterday
  .select(
    StockField.NAME,
    StockField.VOLUME,
    volumeYesterday
  );
```

### Multi-Timeframe Analysis

```typescript
import { FieldWithInterval } from 'tradingview-screener';

const priceDaily = new FieldWithInterval(StockField.PRICE, '1D');
const priceWeekly = new FieldWithInterval(StockField.PRICE, '1W');

screener
  .where(priceDaily.gt(100))
  .where(priceWeekly.gt(95))
  .select(StockField.NAME, priceDaily, priceWeekly);
```

### Trend Detection

```typescript
const volumeToday = StockField.VOLUME;
const volumeYesterday = new FieldWithHistory(StockField.VOLUME, 1);
const volumeTwoDaysAgo = new FieldWithHistory(StockField.VOLUME, 2);

// Find stocks with consecutive volume increases
screener
  .where(volumeToday.gt(volumeYesterday))
  .where(volumeYesterday.gt(volumeTwoDaysAgo));
```

## Field Properties

Modified fields inherit properties from the base field:

```typescript
const priceDaily = new FieldWithInterval(StockField.PRICE, '1D');

console.log(priceDaily.name);          // "PRICE"
console.log(priceDaily.label);         // "Price"
console.log(priceDaily.format);        // "currency"
console.log(priceDaily.baseField);     // StockField.PRICE
console.log(priceDaily.interval);      // "1D"

const volumeYesterday = new FieldWithHistory(StockField.VOLUME, 1);

console.log(volumeYesterday.name);          // "VOLUME"
console.log(volumeYesterday.label);         // "Volume"
console.log(volumeYesterday.baseField);     // StockField.VOLUME
console.log(volumeYesterday.historyIndex);  // 1
```

## String Representation

```typescript
const priceDaily = new FieldWithInterval(StockField.PRICE, '1D');
console.log(priceDaily.toString());
// Output: "PRICE[1D]"

const volumeYesterday = new FieldWithHistory(StockField.VOLUME, 1);
console.log(volumeYesterday.toString());
// Output: "VOLUME[hist:1]"
```

## Type Safety

Modified fields are properly typed:

```typescript
// TypeScript knows the types
const priceDaily: FieldWithInterval = new FieldWithInterval(StockField.PRICE, '1D');
const volumeYesterday: FieldWithHistory = new FieldWithHistory(StockField.VOLUME, 1);

// Autocomplete works
priceDaily.  // <-- Shows all comparison methods

// Type checking
priceDaily.gt(100);      // ✓ Valid
priceDaily.gt('high');   // ✗ Type error
```

## Best Practices

### 1. Check Field Capabilities

```typescript
// Good: Check before creating modified field
if (field.supportsInterval) {
  const withInterval = new FieldWithInterval(field, '1D');
}

// Avoid: Creating modified fields without checking
const withInterval = new FieldWithInterval(field, '1D');  // May not be supported
```

### 2. Use Meaningful Variable Names

```typescript
// Good: Clear names
const priceDaily = new FieldWithInterval(StockField.PRICE, '1D');
const volumeYesterday = new FieldWithHistory(StockField.VOLUME, 1);

// Avoid: Unclear names
const field1 = new FieldWithInterval(StockField.PRICE, '1D');
const f2 = new FieldWithHistory(StockField.VOLUME, 1);
```

### 3. Document Interval Choices

```typescript
// Good: Comment on interval choice
// Using weekly interval to smooth out daily volatility
const priceWeekly = new FieldWithInterval(StockField.PRICE, '1W');
```

## Limitations

### Field-to-Field Comparisons

Direct field-to-field comparisons in filters may not be supported:

```typescript
// May not work
screener.where(StockField.PRICE.gt(volumeYesterday));

// Workaround: Use in selection and filter in JavaScript
screener.select(StockField.PRICE, volumeYesterday);
const results = await screener.get();
const filtered = results.data.filter(row => row.close > row.volume_1);
```

## Next Steps

- [Field System Overview](overview.md) - Understanding fields
- [Stock Fields Reference](stock-fields.md) - Available stock fields
- [Filter Operations](../filtering/operations.md) - All operators
