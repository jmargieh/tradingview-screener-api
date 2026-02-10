# Stock Fields Reference

Complete reference for the TypeScript implementation with full parity to the Python tvscreener library.

## Overview

The TypeScript implementation includes **3,522 stock fields**, providing complete feature parity with the Python tvscreener library. This comprehensive field set enables sophisticated stock screening across all major categories of market data, technical indicators, fundamental metrics, and financial ratios.

All fields are fully typed, support filtering operations, and integrate seamlessly with the TradingView Screener API.

## Field Categories

### Core Information

Basic company identification and classification fields.

```typescript
StockField.NAME                     // Company name
StockField.DESCRIPTION              // Company description
StockField.SECTOR                   // Business sector
StockField.INDUSTRY                 // Industry classification
StockField.COUNTRY                  // Country of incorporation
StockField.TYPE                     // Security type
StockField.SUBTYPE                  // Security subtype
StockField.LOGOID                   // TradingView logo identifier
```

### Price & Volume

Real-time and historical price data with volume metrics.

```typescript
StockField.CLOSE                    // Close price (supports intervals)
StockField.OPEN                     // Open price (supports intervals)
StockField.HIGH                     // High price (supports intervals)
StockField.LOW                      // Low price (supports intervals)
StockField.VOLUME                   // Trading volume (supports intervals)
StockField.CHANGE                   // Absolute price change
StockField.CHANGE_PERCENT           // Percentage price change

// Interval-specific examples
StockField.CLOSE_1                  // Close price on 1-minute chart
StockField.CLOSE_5                  // Close price on 5-minute chart
StockField.CLOSE_1W                 // Close price on weekly chart
StockField.HIGH_1M                  // Monthly high price
StockField.VOLUME_60                // Volume on 60-minute chart
```

### Technical Indicators

Comprehensive technical analysis indicators with multiple timeframe support.

#### Moving Averages
```typescript
StockField.SMA_5                    // Simple Moving Average (5 periods)
StockField.SMA_10                   // Simple Moving Average (10 periods)
StockField.SMA_20                   // Simple Moving Average (20 periods)
StockField.SMA_50                   // Simple Moving Average (50 periods)
StockField.SMA_100                  // Simple Moving Average (100 periods)
StockField.SMA_200                  // Simple Moving Average (200 periods)

StockField.EMA_5                    // Exponential Moving Average (5)
StockField.EMA_10                   // Exponential Moving Average (10)
StockField.EMA_20                   // Exponential Moving Average (20)
StockField.EMA_50                   // Exponential Moving Average (50)
StockField.EMA_100                  // Exponential Moving Average (100)
StockField.EMA_200                  // Exponential Moving Average (200)

StockField.VWMA_20                  // Volume Weighted Moving Average (20)
```

#### Momentum Indicators
```typescript
StockField.RELATIVE_STRENGTH_INDEX_14     // RSI (14) - supports history
StockField.RELATIVE_STRENGTH_INDEX_7      // RSI (7) - supports history
StockField.MOMENTUM_10                     // Momentum (10) - supports history
StockField.COMMODITY_CHANNEL_INDEX_20     // CCI (20) - supports history
StockField.AWESOME_OSCILLATOR              // Awesome Oscillator - supports history
```

#### Trend Indicators
```typescript
StockField.ADX_20                   // Average Directional Index (20)
StockField.ADX_50                   // Average Directional Index (50)
StockField.ADX_100                  // Average Directional Index (100)
StockField.POSITIVE_DIRECTIONAL_INDICATOR_14  // +DI (14) - supports history
StockField.NEGATIVE_DIRECTIONAL_INDICATOR_14  // -DI (14) - supports history

StockField.MACD_LEVEL               // MACD Level
StockField.MACD_SIGNAL              // MACD Signal
```

#### Volatility Indicators
```typescript
StockField.ATR                      // Average True Range
StockField.BB_UPPER                 // Bollinger Bands Upper
StockField.BB_LOWER                 // Bollinger Bands Lower
StockField.BB_BASIS                 // Bollinger Bands Basis (Middle)
```

#### Oscillators
```typescript
StockField.STOCHASTIC_PERCENTK_14_3_3     // Stochastic %K - supports history
StockField.STOCHASTIC_PERCENTD_14_3_3     // Stochastic %D - supports history
StockField.WILLIAMS_PERCENTR              // Williams %R
```

### Fundamental Metrics

Financial performance and earnings data.

```typescript
// Revenue
StockField.TOTAL_REVENUE_TTM              // Total revenue (TTM)
StockField.TOTAL_REVENUE_FY               // Total revenue (FY)
StockField.TOTAL_REVENUE_FQ               // Total revenue (FQ)
StockField.REVENUE_TTM_YOY_GROWTH         // Revenue YoY growth (TTM)

// Earnings
StockField.EARNINGS_PER_SHARE_DILUTED_TTM      // EPS diluted (TTM)
StockField.EARNINGS_PER_SHARE_BASIC_TTM        // EPS basic (TTM)
StockField.EARNINGS_PER_SHARE_DILUTED_FY       // EPS diluted (FY)
StockField.EARNINGS_PER_SHARE_FORECAST_NEXT_FY // EPS forecast next FY

// Profitability
StockField.NET_INCOME_TTM                 // Net income (TTM)
StockField.NET_INCOME_FY                  // Net income (FY)
StockField.OPERATING_INCOME_TTM           // Operating income (TTM)
StockField.EBITDA_TTM                     // EBITDA (TTM)
StockField.EBITDA_FY                      // EBITDA (FY)
StockField.EBITDA_MARGIN_TTM              // EBITDA margin % (TTM)

// Cash Flow
StockField.FREE_CASH_FLOW_TTM             // Free cash flow (TTM)
StockField.OPERATING_CASH_FLOW_TTM        // Operating cash flow (TTM)
```

### Valuation Metrics

Key valuation ratios and enterprise value measures.

```typescript
// P/E Ratios
StockField.PRICE_TO_EARNINGS_RATIO_TTM    // P/E ratio (TTM)
StockField.PRICE_EARNINGS_GROWTH_TTM      // PEG ratio (TTM)

// Price Ratios
StockField.PRICE_TO_BOOK_MRQ              // P/B ratio (MRQ)
StockField.PRICE_TO_BOOK_FY               // P/B ratio (FY)
StockField.PRICE_TO_SALES_FY              // P/S ratio (FY)
StockField.PRICE_SALES_CURRENT            // P/S ratio current

// Enterprise Value
StockField.ENTERPRISE_VALUE_CURRENT       // Enterprise value
StockField.ENTERPRISE_VALUE_MRQ           // Enterprise value (MRQ)
StockField.ENTERPRISE_VALUEEBITDA_TTM     // EV/EBITDA (TTM)
StockField.ENTERPRISE_VALUE_TO_REVENUE_TTM     // EV/Revenue (TTM)
StockField.ENTERPRISE_VALUE_TO_EBIT_TTM        // EV/EBIT (TTM)
StockField.ENTERPRISE_VALUE_TO_GROSS_PROFIT_TTM  // EV/Gross Profit (TTM)

// Market Cap
StockField.MARKET_CAPITALIZATION          // Market capitalization
StockField.MARKET_CAP_CALC                // Market cap calculated
```

### Dividend Metrics

Comprehensive dividend and distribution data.

```typescript
// Dividend Yields
StockField.DIVIDENDS_YIELD                // Dividend yield %
StockField.DIVIDENDS_YIELD_CURRENT        // Dividend yield % (current)
StockField.DIVIDENDS_YIELD_FY             // Dividend yield (FY)
StockField.DIVIDENDS_YIELD_FQ             // Dividend yield (FQ)
StockField.DIVIDEND_YIELD_FWD             // Forward dividend yield

// Dividend Per Share
StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM    // DPS (TTM)
StockField.DIVIDENDS_PER_SHARE_FY             // DPS (FY)
StockField.DIVIDENDS_PER_SHARE_MRQ            // DPS (MRQ)
StockField.DIVIDENDS_PER_SHARE_ANNUAL_YOY_GROWTH  // DPS YoY growth

// Dividend Payments
StockField.DIVIDENDS_PAID_FY                  // Dividends paid (FY)
StockField.DIVIDEND_AMOUNT_RECENT             // Most recent dividend amount
StockField.DIVIDEND_AMOUNT_UPCOMING           // Upcoming dividend amount

// Dividend Dates
StockField.DIVIDEND_EX_DATE_RECENT            // Most recent ex-dividend date
StockField.DIVIDEND_EX_DATE_UPCOMING          // Upcoming ex-dividend date
StockField.DIVIDEND_PAYMENT_DATE_RECENT       // Most recent payment date
StockField.DIVIDEND_PAYMENT_DATE_UPCOMING     // Upcoming payment date

// Dividend Info
StockField.DIVIDENDS_FREQUENCY                // Dividend frequency
StockField.DIVIDEND_FREQUENCY_RECENT          // Recent dividend frequency
StockField.DIVIDEND_PAYOUT_RATIO_FY           // Payout ratio (FY)
StockField.DIVIDEND_PAYOUT_RATIO_PERCENT_FY   // Payout ratio % (FY)
```

### Financial Ratios

Balance sheet strength and efficiency metrics.

```typescript
// Liquidity Ratios
StockField.CURRENT_RATIO_MRQ              // Current ratio (MRQ)
StockField.CURRENT_RATIO_FY               // Current ratio (FY)
StockField.QUICK_RATIO_MRQ                // Quick ratio (MRQ)
StockField.QUICK_RATIO_FY                 // Quick ratio (FY)

// Leverage Ratios
StockField.DEBT_TO_EQUITY_RATIO_MRQ       // Debt to equity (MRQ)
StockField.DEBT_TO_EQUITY_FY              // Debt to equity (FY)
StockField.DEBT_TO_EQUITY_FQ              // Debt to equity (FQ)

// Profitability Margins
StockField.GROSS_MARGIN_PERCENT_TTM       // Gross margin % (TTM)
StockField.GROSS_MARGIN_FY                // Gross margin (FY)
StockField.OPERATING_MARGIN_TTM           // Operating margin % (TTM)
StockField.NET_MARGIN_TTM                 // Net margin % (TTM)
StockField.PRETAX_MARGIN_TTM              // Pretax margin % (TTM)

// Return Ratios
StockField.RETURN_ON_EQUITY_TTM           // ROE (TTM)
StockField.RETURN_ON_EQUITY_FY            // ROE (FY)
StockField.RETURN_ON_ASSETS_TTM           // ROA (TTM)
StockField.RETURN_ON_ASSETS_FY            // ROA (FY)
StockField.RETURN_ON_INVESTED_CAPITAL_TTM // ROIC (TTM)
```

### Performance Metrics

Historical price performance across multiple timeframes.

```typescript
// Absolute Performance
StockField.CHANGE_1MIN                    // 1-minute change
StockField.CHANGE_15MIN                   // 15-minute change
StockField.CHANGE_1H                      // 1-hour change
StockField.CHANGE_4H                      // 4-hour change
StockField.CHANGE_1W                      // 1-week change
StockField.CHANGE_1M                      // 1-month change

// Percentage Performance
StockField.CHANGE_1MIN_PERCENT            // 1-minute change %
StockField.CHANGE_15MIN_PERCENT           // 15-minute change %
StockField.CHANGE_1H_PERCENT              // 1-hour change %
StockField.CHANGE_4H_PERCENT              // 4-hour change %
StockField.CHANGE_1W_PERCENT              // 1-week change %
StockField.CHANGE_1M_PERCENT              // 1-month change %

// Historical Performance
StockField.PERF_1D                        // Performance 1 day
StockField.PERF_5D                        // Performance 5 days
StockField.PERF_1W                        // Performance 1 week
StockField.PERF_1M                        // Performance 1 month
StockField.PERF_3M                        // Performance 3 months
StockField.PERF_6M                        // Performance 6 months
StockField.PERF_1Y                        // Performance 1 year
StockField.PERF_YTD                       // Performance year-to-date
```

### Analyst Ratings

Analyst recommendations and consensus ratings.

```typescript
StockField.RECOMMENDATION_MARK            // Analyst rating (consensus)
StockField.RECOMMENDATION_BUY             // Number of buy ratings
StockField.RECOMMENDATION_HOLD            // Number of hold ratings
StockField.RECOMMENDATION_SELL            // Number of sell ratings
StockField.RECOMMENDATION_OVER            // Number of overweight ratings
StockField.RECOMMENDATION_UNDER           // Number of underweight ratings
StockField.RECOMMENDATION_TOTAL           // Total number of ratings
```

### Technical Recommendations

Automated technical analysis signals across timeframes.

```typescript
// Overall Recommendations
StockField.RECOMMEND_ALL_1                // All signals (1-minute)
StockField.RECOMMEND_ALL_5                // All signals (5-minute)
StockField.RECOMMEND_ALL_15               // All signals (15-minute)
StockField.RECOMMEND_ALL_60               // All signals (60-minute)
StockField.RECOMMEND_ALL_1W               // All signals (weekly)
StockField.RECOMMEND_ALL_1M               // All signals (monthly)

// Moving Average Recommendations
StockField.RECOMMEND_MA_1                 // MA signals (1-minute)
StockField.RECOMMEND_MA_5                 // MA signals (5-minute)
StockField.RECOMMEND_MA_15                // MA signals (15-minute)
StockField.RECOMMEND_MA_60                // MA signals (60-minute)

// Oscillator Recommendations
StockField.RECOMMEND_OTHER_1              // Oscillator signals (1-minute)
StockField.RECOMMEND_OTHER_5              // Oscillator signals (5-minute)
StockField.RECOMMEND_OTHER_15             // Oscillator signals (15-minute)
```

## Time Intervals

Many technical indicators and price fields support multiple timeframe variations. The library includes **9 standard intervals**:

| Interval | Description | Field Suffix |
|----------|-------------|--------------|
| `1` | 1 minute | `_1` or `\|1` |
| `5` | 5 minutes | `_5` or `\|5` |
| `15` | 15 minutes | `_15` or `\|15` |
| `30` | 30 minutes | `_30` or `\|30` |
| `60` | 60 minutes (1 hour) | `_60` or `\|60` |
| `120` | 120 minutes (2 hours) | `_120` or `\|120` |
| `240` | 240 minutes (4 hours) | `_240` or `\|240` |
| `1W` | 1 week | `_1W` or `\|1W` |
| `1M` | 1 month | `_1M` or `\|1M` |

### Using Interval Fields

Fields that support intervals typically have variations for each timeframe:

```typescript
// RSI across different timeframes
StockField.RSI_1                    // RSI on 1-minute chart
StockField.RSI_5                    // RSI on 5-minute chart
StockField.RSI_15                   // RSI on 15-minute chart
StockField.RSI_60                   // RSI on 1-hour chart
StockField.RSI_1W                   // RSI on weekly chart
StockField.RSI_1M                   // RSI on monthly chart

// Bollinger Bands across timeframes
StockField.BB_UPPER_1               // BB Upper on 1-minute chart
StockField.BB_UPPER_60              // BB Upper on 1-hour chart
StockField.BB_UPPER_1W              // BB Upper on weekly chart

// ADX across timeframes
StockField.ADX_20_1                 // ADX(20) on 1-minute chart
StockField.ADX_20_60                // ADX(20) on 1-hour chart
StockField.ADX_20_1W                // ADX(20) on weekly chart
```

## Historical Data

**9 technical indicators** support the `.withHistory()` modifier to retrieve historical values in addition to the current value. This enables time-series analysis and backtesting.

### Supported Historical Fields

```typescript
StockField.AWESOME_OSCILLATOR              // Awesome Oscillator
StockField.COMMODITY_CHANNEL_INDEX_20      // CCI (20)
StockField.MOMENTUM_10                     // Momentum (10)
StockField.NEGATIVE_DIRECTIONAL_INDICATOR_14  // -DI (14)
StockField.POSITIVE_DIRECTIONAL_INDICATOR_14  // +DI (14)
StockField.RELATIVE_STRENGTH_INDEX_14      // RSI (14)
StockField.RELATIVE_STRENGTH_INDEX_7       // RSI (7)
StockField.STOCHASTIC_PERCENTD_14_3_3      // Stochastic %D
StockField.STOCHASTIC_PERCENTK_14_3_3      // Stochastic %K
```

### Using Historical Data

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

// Retrieve current and historical RSI values
screener
  .where(StockField.RELATIVE_STRENGTH_INDEX_14.between(40, 60))
  .select(
    StockField.NAME,
    StockField.RELATIVE_STRENGTH_INDEX_14.withHistory()
  );

const results = await screener.get();

// Access historical data
results.data.forEach(stock => {
  console.log(stock.name);
  console.log('Current RSI:', stock.RSI);
  console.log('Historical RSI:', stock['RSI|history']);
  // RSI|history is an array of historical values
});
```

Note: Historical data is returned as an array under the field name with a `|history` suffix (e.g., `RSI|history`).

## Complete Field Count by Format

The 3,522 fields are distributed across different data formats:

| Format | Count | Description |
|--------|-------|-------------|
| `round` | 2,739 | Rounded numeric values (most technical indicators) |
| `currency` | 319 | Monetary values |
| `percent` | 228 | Percentage values |
| `text` | 80 | Text/string values |
| `date` | 56 | Date values |
| `bool` | 35 | Boolean values |
| `computed_recommendation` | 28 | Technical recommendation signals |
| `number_group` | 11 | Large numbers with grouping |
| `float` | 10 | Floating-point numbers |
| `missing` | 9 | Fields with special handling |
| `recommendation` | 4 | Analyst recommendation types |
| `rating` | 3 | Rating values |

## Usage Examples

### Basic Filtering Query

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.CLOSE.gt(10))
  .where(StockField.VOLUME.gte(1_000_000))
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 100e9))
  .select(
    StockField.NAME,
    StockField.CLOSE,
    StockField.VOLUME,
    StockField.MARKET_CAPITALIZATION,
    StockField.SECTOR
  );

const results = await screener.get();
```

### Value Investing Screen

```typescript
screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(3))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(2))
  .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(0.5))
  .where(StockField.CURRENT_RATIO_MRQ.gte(1.5))
  .select(
    StockField.NAME,
    StockField.SECTOR,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.PRICE_TO_BOOK_MRQ,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.DEBT_TO_EQUITY_RATIO_MRQ
  );
```

### Growth Investing Screen

```typescript
screener
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))
  .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(0))
  .where(StockField.PRICE_EARNINGS_GROWTH_TTM.between(0.5, 1.5))
  .where(StockField.OPERATING_MARGIN_TTM.gte(15))
  .select(
    StockField.NAME,
    StockField.CLOSE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.EARNINGS_PER_SHARE_DILUTED_TTM,
    StockField.PRICE_EARNINGS_GROWTH_TTM,
    StockField.OPERATING_MARGIN_TTM
  );
```

### Technical Analysis Screen

```typescript
screener
  .where(StockField.RELATIVE_STRENGTH_INDEX_14.between(40, 60))
  .where(StockField.CLOSE.above(StockField.SMA_50))
  .where(StockField.SMA_50.above(StockField.SMA_200))
  .where(StockField.ADX_20.gte(25))
  .where(StockField.VOLUME.gte(500_000))
  .select(
    StockField.NAME,
    StockField.CLOSE,
    StockField.RELATIVE_STRENGTH_INDEX_14,
    StockField.ADX_20,
    StockField.SMA_50,
    StockField.SMA_200,
    StockField.VOLUME
  );
```

### Multi-Timeframe Analysis

```typescript
screener
  .where(StockField.RELATIVE_STRENGTH_INDEX_14_60.lt(30))  // RSI oversold on 1-hour
  .where(StockField.RELATIVE_STRENGTH_INDEX_14_1W.gt(50))  // RSI bullish on weekly
  .where(StockField.MACD_LEVEL_60.gt(0))                   // MACD positive on 1-hour
  .select(
    StockField.NAME,
    StockField.CLOSE,
    StockField.RELATIVE_STRENGTH_INDEX_14_60,
    StockField.RELATIVE_STRENGTH_INDEX_14_1W,
    StockField.MACD_LEVEL_60
  );
```

### Dividend Income Screen

```typescript
screener
  .where(StockField.DIVIDENDS_YIELD_FY.gt(4))
  .where(StockField.DIVIDEND_PAYOUT_RATIO_FY.lt(75))
  .where(StockField.DIVIDENDS_PER_SHARE_ANNUAL_YOY_GROWTH.gt(5))
  .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(1))
  .select(
    StockField.NAME,
    StockField.CLOSE,
    StockField.DIVIDENDS_YIELD_FY,
    StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM,
    StockField.DIVIDEND_PAYOUT_RATIO_FY,
    StockField.DIVIDENDS_PER_SHARE_ANNUAL_YOY_GROWTH,
    StockField.DIVIDEND_EX_DATE_UPCOMING
  );
```

### Quality Stocks Screen

```typescript
screener
  .where(StockField.RETURN_ON_EQUITY_TTM.gte(15))
  .where(StockField.RETURN_ON_ASSETS_TTM.gte(10))
  .where(StockField.GROSS_MARGIN_PERCENT_TTM.gte(40))
  .where(StockField.OPERATING_MARGIN_TTM.gte(20))
  .where(StockField.NET_MARGIN_TTM.gte(15))
  .where(StockField.FREE_CASH_FLOW_TTM.gt(0))
  .select(
    StockField.NAME,
    StockField.SECTOR,
    StockField.RETURN_ON_EQUITY_TTM,
    StockField.RETURN_ON_ASSETS_TTM,
    StockField.GROSS_MARGIN_PERCENT_TTM,
    StockField.OPERATING_MARGIN_TTM,
    StockField.NET_MARGIN_TTM,
    StockField.FREE_CASH_FLOW_TTM
  );
```

### Bollinger Bands Squeeze

```typescript
screener
  .where(StockField.CLOSE.near(StockField.BB_BASIS, 0.02))  // Price near middle band
  .where(StockField.BB_UPPER.minus(StockField.BB_LOWER).div(StockField.CLOSE).lt(0.1))  // Narrow bands
  .where(StockField.VOLUME.gte(1_000_000))
  .select(
    StockField.NAME,
    StockField.CLOSE,
    StockField.BB_UPPER,
    StockField.BB_LOWER,
    StockField.BB_BASIS,
    StockField.ATR,
    StockField.VOLUME
  );
```

### Historical RSI Analysis

```typescript
screener
  .where(StockField.RELATIVE_STRENGTH_INDEX_14.between(30, 70))
  .select(
    StockField.NAME,
    StockField.CLOSE,
    StockField.RELATIVE_STRENGTH_INDEX_14.withHistory(),
    StockField.VOLUME
  );

const results = await screener.get();

// Analyze RSI trends
results.data.forEach(stock => {
  const rsiHistory = stock['RSI|history'];
  const rsiIncreasing = rsiHistory[rsiHistory.length - 1] > rsiHistory[0];
  console.log(`${stock.name}: RSI ${rsiIncreasing ? 'increasing' : 'decreasing'}`);
});
```

## Field Naming Conventions

Understanding field naming patterns helps navigate the 3,522 available fields:

### Suffixes
- `_TTM`: Trailing Twelve Months
- `_FY`: Fiscal Year
- `_FQ`: Fiscal Quarter
- `_FH`: Fiscal Half-year
- `_MRQ`: Most Recent Quarter
- `_YOY`: Year-over-Year
- `_GROWTH`: Growth metric
- `_PERCENT`: Percentage format
- `_CURRENT`: Current period

### Interval Notation
- `_1`, `_5`, `_15`, `_30`, `_60`: Minute-based intervals
- `_120`, `_240`: Hour-based intervals (2h, 4h)
- `_1W`: Weekly interval
- `_1M`: Monthly interval
- `|1`, `|5`, etc.: Alternative interval notation

### Examples
```typescript
StockField.TOTAL_REVENUE_TTM              // Revenue for trailing 12 months
StockField.TOTAL_REVENUE_FY               // Revenue for fiscal year
StockField.EARNINGS_PER_SHARE_DILUTED_FQ  // EPS for fiscal quarter
StockField.RSI_60                         // RSI on 60-minute timeframe
StockField.SMA_50_1W                      // 50-period SMA on weekly chart
```

## Field Data Access

After querying, access field data using the original field name:

```typescript
const results = await screener
  .select(
    StockField.NAME,
    StockField.CLOSE,
    StockField.MARKET_CAPITALIZATION,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.RELATIVE_STRENGTH_INDEX_14
  )
  .get();

const firstStock = results.data[0];

// Access using API field names
console.log(firstStock.name);                    // Company name
console.log(firstStock.close);                   // Current price
console.log(firstStock.market_cap_basic);        // Market cap
console.log(firstStock.price_earnings_ttm);      // P/E ratio
console.log(firstStock.RSI);                     // RSI value

// Historical data (if requested)
if (firstStock['RSI|history']) {
  console.log(firstStock['RSI|history']);        // Array of historical RSI
}
```

## Implementation Status

This TypeScript implementation provides:

- **Complete field parity** with Python tvscreener (3,522 fields)
- **All technical indicators** with multi-timeframe support
- **Comprehensive fundamental data** across all reporting periods
- **Full valuation metrics** including all ratio variations
- **Historical data support** for 9 key technical indicators
- **Type safety** for all fields and operations
- **Consistent API** across all field categories

## Related Documentation

- [Filter Operations](../filtering/operations.md) - All comparison operators
- [Complex Queries](../filtering/complex-queries.md) - Advanced filtering techniques
- [Stock Screener Guide](../screeners/stock.md) - Complete screener examples

## Field Exploration

To explore available fields programmatically:

```typescript
import { StockField } from 'tradingview-screener';

// All fields are available as constants on StockField
// TypeScript autocomplete will show all 3,522 fields
const allFields = Object.keys(StockField);
console.log(`Total fields: ${allFields.length}`);

// Example: Find all RSI-related fields
const rsiFields = allFields.filter(f => f.includes('RSI'));
console.log('RSI fields:', rsiFields);

// Example: Find all TTM (Trailing Twelve Months) fields
const ttmFields = allFields.filter(f => f.includes('TTM'));
console.log('TTM fields:', ttmFields);
```

## Notes

- Not all fields may be available for every stock depending on the security type and exchange
- Some fundamental fields may be `null` for companies that don't report certain metrics
- Historical data is limited to the 9 fields that support the `.withHistory()` modifier
- Interval fields provide the most recent value for that timeframe, not historical time-series data
- Field availability may vary by market and security type (stocks vs. ETFs vs. funds)
