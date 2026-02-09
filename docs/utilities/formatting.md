# Formatting

Number and value formatting utilities.

## Overview

The `formatters` module provides functions to format numbers, currencies, percentages, and other values for display.

## Basic Functions

### millify()

Convert large numbers to abbreviated format with K, M, B, T suffixes.

```typescript
import { millify } from 'tradingview-screener';

millify(1000);        // "1K"
millify(1500);        // "1.5K"
millify(1_000_000);   // "1M"
millify(1_234_567);   // "1.23M"
millify(1_000_000_000); // "1B"
millify(1_234_567_890_123); // "1.23T"
```

#### Parameters

```typescript
millify(value: number, precision?: number): string
```

- `value` - Number to format
- `precision` - Decimal places (default: 2)

#### Examples

```typescript
// Default precision (2 decimals)
millify(1234567);        // "1.23M"

// Custom precision
millify(1234567, 0);     // "1M"
millify(1234567, 1);     // "1.2M"
millify(1234567, 3);     // "1.235M"

// Small numbers
millify(999);            // "999"
millify(1000);           // "1K"

// Negative numbers
millify(-1500000);       // "-1.5M"

// Zero
millify(0);              // "0"
```

### formatCurrency()

Format numbers as currency with appropriate precision.

```typescript
import { formatCurrency } from 'tradingview-screener';

formatCurrency(1234.56);      // "$1,234.56"
formatCurrency(1000000);      // "$1,000,000.00"
formatCurrency(0.99);         // "$0.99"
formatCurrency(-500.25);      // "-$500.25"
```

#### Parameters

```typescript
formatCurrency(value: number, symbol?: string, decimals?: number): string
```

- `value` - Number to format
- `symbol` - Currency symbol (default: "$")
- `decimals` - Decimal places (default: 2)

#### Examples

```typescript
// Default (USD)
formatCurrency(1234.56);              // "$1,234.56"

// Custom currency
formatCurrency(1234.56, '€');         // "€1,234.56"
formatCurrency(1234.56, '£');         // "£1,234.56"
formatCurrency(1234.56, '¥');         // "¥1,234.56"

// Custom decimals
formatCurrency(1234.5, '$', 0);       // "$1,235"
formatCurrency(1234.567, '$', 3);     // "$1,234.567"

// Large numbers
formatCurrency(1_000_000);            // "$1,000,000.00"
formatCurrency(1_234_567.89);         // "$1,234,567.89"
```

### formatPercent()

Format numbers as percentages.

```typescript
import { formatPercent } from 'tradingview-screener';

formatPercent(0.1234);        // "12.34%"
formatPercent(0.05);          // "5.00%"
formatPercent(1.5);           // "150.00%"
formatPercent(-0.025);        // "-2.50%"
```

#### Parameters

```typescript
formatPercent(value: number, decimals?: number, multiply?: boolean): string
```

- `value` - Number to format
- `decimals` - Decimal places (default: 2)
- `multiply` - Whether to multiply by 100 (default: true)

#### Examples

```typescript
// Default (multiply by 100)
formatPercent(0.1234);                  // "12.34%"
formatPercent(0.05);                    // "5.00%"

// Already in percent format
formatPercent(12.34, 2, false);         // "12.34%"
formatPercent(5, 2, false);             // "5.00%"

// Custom decimals
formatPercent(0.12345, 0);              // "12%"
formatPercent(0.12345, 1);              // "12.3%"
formatPercent(0.12345, 3);              // "12.345%"

// Large percentages
formatPercent(2.5);                     // "250.00%"

// Negative percentages
formatPercent(-0.1234);                 // "-12.34%"
```

### formatFloat()

Format floating-point numbers with fixed precision.

```typescript
import { formatFloat } from 'tradingview-screener';

formatFloat(123.456789);              // "123.46"
formatFloat(123.456789, 0);           // "123"
formatFloat(123.456789, 4);           // "123.4568"
formatFloat(0.000123);                // "0.00"
```

#### Parameters

```typescript
formatFloat(value: number, decimals?: number): string
```

- `value` - Number to format
- `decimals` - Decimal places (default: 2)

#### Examples

```typescript
// Default precision (2 decimals)
formatFloat(123.456);                 // "123.46"
formatFloat(123.4);                   // "123.40"

// Custom precision
formatFloat(123.456789, 0);           // "123"
formatFloat(123.456789, 1);           // "123.5"
formatFloat(123.456789, 4);           // "123.4568"

// Very small numbers
formatFloat(0.001);                   // "0.00"
formatFloat(0.001, 3);                // "0.001"
formatFloat(0.001, 4);                // "0.0010"

// Scientific notation handling
formatFloat(1.23e-5, 6);              // "0.000012"
```

### formatNumber()

Format numbers with thousands separators.

```typescript
import { formatNumber } from 'tradingview-screener';

formatNumber(1234567);                // "1,234,567"
formatNumber(1000);                   // "1,000"
formatNumber(123.45);                 // "123.45"
formatNumber(-9876543);               // "-9,876,543"
```

#### Parameters

```typescript
formatNumber(value: number, decimals?: number): string
```

- `value` - Number to format
- `decimals` - Decimal places (default: auto)

#### Examples

```typescript
// Integers
formatNumber(1234567);                // "1,234,567"
formatNumber(1000);                   // "1,000"

// Decimals
formatNumber(1234.56);                // "1,234.56"
formatNumber(1234.56, 1);             // "1,234.6"
formatNumber(1234.5678, 2);           // "1,234.57"

// Small numbers
formatNumber(123);                    // "123"
formatNumber(12.34);                  // "12.34"

// Negative numbers
formatNumber(-1234567);               // "-1,234,567"
```

## Field-Specific Formatting

### formatByFieldType()

Format values based on field metadata format type.

```typescript
import { formatByFieldType } from 'tradingview-screener';
import { StockField } from 'tradingview-screener';

// Currency fields
const price = StockField.PRICE;
formatByFieldType(123.45, price.format);  // "$123.45"

// Percent fields
const change = StockField.CHANGE_PERCENT;
formatByFieldType(5.67, change.format);   // "5.67%"

// Number fields
const volume = StockField.VOLUME;
formatByFieldType(1234567, volume.format); // "1,234,567"
```

### Format Types

The library supports these format types:

```typescript
type FieldFormat =
  | 'currency'           // $1,234.56
  | 'percent'            // 12.34%
  | 'float'              // 123.46
  | 'round'              // 123
  | 'number_group'       // 1,234,567
  | 'text'               // Raw text
  | 'date'               // Date string
  | 'bool'               // true/false
  | 'rating'             // Strong Buy, Buy, Hold, Sell, Strong Sell
  | 'recommendation'     // Similar to rating
  | 'computed_recommendation'; // Technical recommendation
```

## Practical Examples

### Format Screener Results

```typescript
const results = await screener.get();

results.data.forEach(row => {
  console.log({
    name: row.name,
    price: formatCurrency(row.close),
    volume: millify(row.volume),
    marketCap: millify(row.market_cap_basic),
    change: formatPercent(row.change_abs / 100),
  });
});
```

### Create Formatted Table

```typescript
const results = await screener
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.VOLUME,
    StockField.MARKET_CAPITALIZATION,
    StockField.CHANGE_PERCENT
  )
  .get();

const formatted = results.data.map(row => ({
  Name: row.name,
  Price: formatCurrency(row.close),
  Volume: millify(row.volume),
  'Market Cap': millify(row.market_cap_basic),
  'Change %': formatPercent(row.change_abs / 100),
}));

console.table(formatted);
```

### Format for Export

```typescript
function formatForCSV(results: ScreenerResult): string {
  const headers = ['Name', 'Price', 'Volume', 'Market Cap', 'Change %'];

  const rows = results.data.map(row => [
    row.name,
    formatCurrency(row.close),
    millify(row.volume),
    millify(row.market_cap_basic),
    formatPercent(row.change_abs / 100),
  ]);

  return [
    headers.join(','),
    ...rows.map(row => row.join(',')),
  ].join('\n');
}

// Usage
const csv = formatForCSV(results);
fs.writeFileSync('stocks.csv', csv);
```

### Custom Formatting Function

```typescript
function formatStockData(data: any) {
  return {
    name: data.name,
    price: formatCurrency(data.close),
    priceChange: formatPercent(data.change_abs / 100),
    volume: millify(data.volume),
    avgVolume: millify(data.average_volume_10d_calc),
    marketCap: millify(data.market_cap_basic),
    peRatio: formatFloat(data.price_earnings_ttm),
    dividendYield: formatPercent(data.dividend_yield_recent),
  };
}

// Usage
const formatted = results.data.map(formatStockData);
```

## Number Abbreviations

### Abbreviation Thresholds

```typescript
millify(999);             // "999"     (< 1K)
millify(1_000);           // "1K"      (>= 1K)
millify(999_999);         // "1000K"   (< 1M)
millify(1_000_000);       // "1M"      (>= 1M)
millify(999_999_999);     // "1000M"   (< 1B)
millify(1_000_000_000);   // "1B"      (>= 1B)
millify(1_000_000_000_000); // "1T"    (>= 1T)
```

### Custom Abbreviation

```typescript
function customAbbreviate(value: number): string {
  const abs = Math.abs(value);
  const sign = value < 0 ? '-' : '';

  if (abs >= 1e12) return sign + (abs / 1e12).toFixed(2) + 'T';
  if (abs >= 1e9)  return sign + (abs / 1e9).toFixed(2) + 'B';
  if (abs >= 1e6)  return sign + (abs / 1e6).toFixed(2) + 'M';
  if (abs >= 1e3)  return sign + (abs / 1e3).toFixed(2) + 'K';

  return value.toString();
}
```

## Locale Support

### Default Locale (US)

```typescript
// US format
formatCurrency(1234.56);      // "$1,234.56"
formatNumber(1234567);         // "1,234,567"
formatPercent(0.1234);         // "12.34%"
```

### Custom Locale

```typescript
function formatCurrencyEU(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}

formatCurrencyEU(1234.56);     // "1.234,56 €"
```

## Date Formatting

### Format Timestamps

```typescript
function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString();
}

function formatDateTime(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString();
}

// Usage
formatDate(1609459200);         // "1/1/2021"
formatDateTime(1609459200);     // "1/1/2021, 12:00:00 AM"
```

### Format Time Ago

```typescript
function timeAgo(timestamp: number): string {
  const seconds = Math.floor(Date.now() / 1000 - timestamp);

  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;

  return `${Math.floor(seconds / 86400)}d ago`;
}

// Usage
timeAgo(Date.now() / 1000 - 30);    // "30s ago"
timeAgo(Date.now() / 1000 - 300);   // "5m ago"
```

## Boolean Formatting

### Format Boolean Values

```typescript
function formatBoolean(value: boolean): string {
  return value ? '✓' : '✗';
}

function formatBooleanText(value: boolean): string {
  return value ? 'Yes' : 'No';
}

// Usage
formatBoolean(true);           // "✓"
formatBoolean(false);          // "✗"
formatBooleanText(true);       // "Yes"
```

## Best Practices

### 1. Use Appropriate Precision

```typescript
// Good: Appropriate precision
formatCurrency(123.45);        // "$123.45"
formatPercent(0.1234, 2);      // "12.34%"

// Avoid: Too much precision
formatFloat(123.456789, 10);   // "123.4567890000"
```

### 2. Handle Edge Cases

```typescript
function safeFormat(value: number | null | undefined): string {
  if (value === null || value === undefined) return 'N/A';
  if (isNaN(value)) return 'Invalid';
  if (!isFinite(value)) return value > 0 ? '∞' : '-∞';

  return formatFloat(value);
}
```

### 3. Consistent Formatting

```typescript
// Good: Consistent throughout
const formatted = {
  price: formatCurrency(price),
  volume: millify(volume),
  change: formatPercent(change / 100),
};

// Inconsistent: Mixed formats
const mixed = {
  price: `$${price.toFixed(2)}`,
  volume: volume.toString(),
  change: change + '%',
};
```

### 4. Performance Considerations

```typescript
// Cache formatters for repeated use
const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

// Reuse formatter
results.data.forEach(row => {
  console.log(currencyFormatter.format(row.close));
});
```

## Next Steps

- [Beautification](beautify.md) - Terminal styling
- [Type System](types.md) - TypeScript types
- [Basic Usage](../basic-usage.md) - Core concepts
