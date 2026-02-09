# Stock Fields Reference

Complete reference of available stock fields.

## Field Categories

### Price & Volume Fields

```typescript
StockField.PRICE                    // Current stock price
StockField.CHANGE                   // Absolute price change
StockField.CHANGE_PERCENT           // Percentage price change
StockField.VOLUME                   // Trading volume
```

### Company Information

```typescript
StockField.NAME                     // Company name
StockField.DESCRIPTION              // Company description
```

### Valuation Ratios

```typescript
StockField.PRICE_TO_EARNINGS_RATIO_TTM         // P/E ratio (TTM)
StockField.PRICE_TO_BOOK_MRQ                   // P/B ratio
StockField.ENTERPRISE_VALUE_EBITDA_TTM         // EV/EBITDA ratio
```

### Fundamental Metrics

```typescript
StockField.MARKET_CAPITALIZATION               // Market cap
StockField.REVENUE_TTM                         // Total revenue (TTM)
StockField.NET_INCOME_TTM                      // Net income (TTM)
StockField.EARNINGS_PER_SHARE_DILUTED_TTM      // EPS diluted (TTM)
```

### Dividend Fields

```typescript
StockField.DIVIDEND_YIELD_FWD                  // Forward dividend yield
```

### Technical Indicators

```typescript
StockField.RSI                                 // Relative Strength Index
StockField.ATR                                 // Average True Range
```

## Field Details

### PRICE
- **Type**: Number (currency)
- **Format**: `currency`
- **Supports Interval**: Yes
- **Field Name**: `close`

Example:
```typescript
StockField.PRICE.gt(100)
StockField.PRICE.between(10, 500)
```

### MARKET_CAPITALIZATION
- **Type**: Number (currency)
- **Format**: `currency`
- **Field Name**: `market_cap_basic`

Example:
```typescript
StockField.MARKET_CAPITALIZATION.between(1e9, 100e9)  // 1B to 100B
```

### VOLUME
- **Type**: Number
- **Format**: `number_group`
- **Field Name**: `volume`

Example:
```typescript
StockField.VOLUME.gte(1_000_000)  // At least 1M volume
```

### PRICE_TO_EARNINGS_RATIO_TTM
- **Type**: Number (float)
- **Format**: `float`
- **Field Name**: `price_earnings_ttm`

Example:
```typescript
StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(10, 20)  // P/E 10-20
```

### DIVIDEND_YIELD_FWD
- **Type**: Number (percent)
- **Format**: `percent`
- **Field Name**: `dividend_yield_forward`

Example:
```typescript
StockField.DIVIDEND_YIELD_FWD.gte(3)  // At least 3% yield
```

### RSI
- **Type**: Number (float)
- **Format**: `float`
- **Supports Interval**: Yes
- **Field Name**: `RSI`

Example:
```typescript
StockField.RSI.between(40, 60)  // Not overbought/oversold
```

## Usage Examples

### Basic Query

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.PRICE.gt(10))
  .where(StockField.VOLUME.gte(100_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.VOLUME,
    StockField.MARKET_CAPITALIZATION
  );

const results = await screener.get();
```

### Value Screening

```typescript
screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(3))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(2))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.DIVIDEND_YIELD_FWD
  );
```

### Technical Analysis

```typescript
screener
  .where(StockField.RSI.between(40, 60))
  .where(StockField.VOLUME.gte(500_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.RSI,
    StockField.ATR
  );
```

## Field Name Mapping

When accessing results, use the `fieldName`:

| Field Constant | fieldName | Access |
|----------------|-----------|--------|
| `PRICE` | `close` | `row.close` |
| `NAME` | `name` | `row.name` |
| `VOLUME` | `volume` | `row.volume` |
| `MARKET_CAPITALIZATION` | `market_cap_basic` | `row.market_cap_basic` |
| `PRICE_TO_EARNINGS_RATIO_TTM` | `price_earnings_ttm` | `row.price_earnings_ttm` |
| `DIVIDEND_YIELD_FWD` | `dividend_yield_forward` | `row.dividend_yield_forward` |

## Searching Fields

```typescript
import { BaseField, StockField } from 'tradingview-screener';

// Find all fields containing "price"
const priceFields = BaseField.search(StockField, 'price');

// Find currency fields
const currencyFields = BaseField.byFormat(StockField, 'currency');

// Find technical indicators
const indicators = BaseField.technicals(StockField);
```

## Note on Field Generation

The current implementation includes 15+ essential stock fields as placeholders. The full set of 4,000+ stock fields can be generated using the code generation system. See the [Code Generation Guide](../codegen.md) for details.

## Next Steps

- [Field System Overview](overview.md) - Understanding fields
- [Field Search](search.md) - Finding fields programmatically
- [Stock Screener Guide](../screeners/stock.md) - Using stock fields in queries
