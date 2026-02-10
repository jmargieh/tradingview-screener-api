# Stock Screener

Complete guide to screening stock market data with the Stock Screener.

## Overview

The `StockScreener` class provides access to TradingView's stock market data with **3,522 fields**, including:

- **15,000+ US stocks** (NYSE, NASDAQ, AMEX)
- **Global markets** (50+ countries)
- **280+ Technical Indicators** with multiple timeframe intervals (1m, 5m, 15m, 30m, 1h, 2h, 4h, 1D, 1W, 1M)
- **640+ Moving Averages** - SMA, EMA, WMA, HMA, VWMA across all timeframes
- **520+ Oscillators** - RSI, Stochastic, CCI, ROC, Williams %R, Aroon, Ultimate Oscillator
- **27 Candlestick Patterns** - Doji, Hammer, Engulfing, Morning/Evening Star, and more
- **Fundamentals** - Revenue, earnings, cash flow, balance sheet metrics (254 fields)
- **Valuation** - P/E, P/B, P/S, EV/EBITDA, PEG ratios
- **Dividends** - Yield, payout ratio, growth, frequency (48 fields)
- **Volume Indicators** - OBV, MFI, VWAP, Chaikin Money Flow
- **Volatility** - ATR, Bollinger Bands, Standard Deviation
- **Recommendations** - Analyst ratings and computed recommendations

This library provides **full parity with the Python tvscreener library**, offering access to all available TradingView stock fields.

## Basic Usage

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.MARKET_CAPITALIZATION
  );

const results = await screener.get();
console.table(results.data);
```

## Common Use Cases

### Large Cap Stocks

```typescript
screener
  .where(StockField.MARKET_CAPITALIZATION.between(10e9, 500e9))
  .where(StockField.VOLUME.gte(1_000_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.MARKET_CAPITALIZATION,
    StockField.VOLUME
  )
  .sortBy(StockField.MARKET_CAPITALIZATION, false);
```

### Value Stocks

```typescript
screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(3))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(2))
  .where(StockField.MARKET_CAPITALIZATION.gte(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.PRICE_TO_BOOK_MRQ,
    StockField.DIVIDEND_YIELD_FWD
  );
```

### Growth Stocks

```typescript
screener
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 50e9))
  .select(
    StockField.NAME,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.PRICE_EARNINGS_GROWTH_TTM
  );
```

### High Dividend Stocks

```typescript
screener
  .where(StockField.DIVIDEND_YIELD_FWD.gte(4))
  .where(StockField.MARKET_CAPITALIZATION.gte(5e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM
  )
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false);
```

### Technical Momentum

```typescript
screener
  .where(StockField.RSI.between(40, 70))
  .where(StockField.CHANGE_PERCENT.gt(2))
  .where(StockField.VOLUME.gte(500_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE_PERCENT,
    StockField.RSI,
    StockField.VOLUME
  )
  .sortBy(StockField.CHANGE_PERCENT, false);
```

### Multi-Timeframe Technical Analysis

```typescript
// Screen stocks using multiple timeframes
screener
  .where(StockField.RSI.gt(50))           // Daily RSI
  .where(StockField.RSI_1H.gt(50))        // 1-hour RSI
  .where(StockField.EMA20.gt(StockField.SMA50))  // Daily EMA/SMA cross
  .where(StockField.MACD_HIST.gt(0))      // Daily MACD histogram positive
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.RSI,
    StockField.RSI_1H,
    StockField.EMA20,
    StockField.SMA50
  );
```

### Bollinger Band Squeeze

```typescript
// Find stocks in Bollinger Band squeeze (low volatility)
screener
  .where(StockField.BB_UPPER.minus(StockField.BB_LOWER).div(StockField.BB_BASIS).lt(0.1))
  .where(StockField.MARKET_CAPITALIZATION.gte(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.BB_UPPER,
    StockField.BB_LOWER,
    StockField.BB_BASIS
  );
```

### Candlestick Pattern Detection

```typescript
// Find bullish reversal patterns
screener
  .where(StockField.CANDLE_HAMMER.eq(1))
  .where(StockField.RSI.lt(40))
  .where(StockField.MARKET_CAPITALIZATION.gte(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CANDLE_HAMMER,
    StockField.RSI,
    StockField.CHANGE_PERCENT
  );
```

## Field Categories

The Stock Screener provides access to 3,522 fields organized into the following categories:

### Price & Volume (242 fields)
- `PRICE` / `CLOSE` - Current/closing price
- `OPEN` - Opening price
- `HIGH` - High price
- `LOW` - Low price
- `CHANGE` - Absolute price change
- `CHANGE_PERCENT` - Percentage change
- `VOLUME` - Trading volume
- `RELATIVE_VOLUME` - Volume relative to average
- `AVERAGE_VOLUME` - Average trading volume
- `PREMARKET_VOLUME` - Pre-market volume
- `POSTMARKET_VOLUME` - Post-market volume
- `GAP` - Gap from previous close
- `PRICE_52_WEEK_HIGH` - 52-week high
- `PRICE_52_WEEK_LOW` - 52-week low

### Market Data (33 fields)
- `MARKET_CAPITALIZATION` - Market cap
- `NAME` - Company name
- `DESCRIPTION` - Company description
- `SECTOR` - Business sector
- `INDUSTRY` - Industry classification
- `COUNTRY` - Country of incorporation
- `EXCHANGE` - Stock exchange
- `CURRENCY` - Trading currency
- `TYPE` - Security type

### Moving Averages (640 fields)
Multiple timeframe variations (1m, 5m, 15m, 30m, 1h, 2h, 4h, 1D, 1W, 1M) for:
- `SMA5`, `SMA10`, `SMA20`, `SMA50`, `SMA100`, `SMA200` - Simple Moving Averages
- `EMA5`, `EMA10`, `EMA12`, `EMA20`, `EMA26`, `EMA50`, `EMA100`, `EMA200` - Exponential Moving Averages
- `WMA` - Weighted Moving Average
- `HMA` - Hull Moving Average
- `VWMA` - Volume Weighted Moving Average

### Oscillators (520 fields)
Available across multiple timeframes:
- `RSI`, `RSI7`, `RSI14` - Relative Strength Index
- `STOCH_K`, `STOCH_D` - Stochastic Oscillator
- `CCI20` - Commodity Channel Index
- `ROC` - Rate of Change
- `WILLIAMS_R` - Williams %R
- `UO` - Ultimate Oscillator
- `AROON_UP`, `AROON_DOWN` - Aroon Indicator

### MACD Indicators (with timeframe variations)
- `MACD_MACD` - MACD line
- `MACD_SIGNAL` - Signal line
- `MACD_HIST` - MACD histogram

### Volatility Indicators (103 fields)
- `ATR` - Average True Range
- `ATRP` - ATR Percentage
- `BB_UPPER` - Bollinger Band Upper
- `BB_LOWER` - Bollinger Band Lower
- `BB_BASIS` - Bollinger Band Middle
- `VOLATILITY_D` - Daily volatility
- `VOLATILITY_W` - Weekly volatility
- `VOLATILITY_M` - Monthly volatility
- `ADR` - Average Daily Range

### Volume Indicators (96 fields)
- `OBV` - On Balance Volume
- `MFI` - Money Flow Index
- `VWAP` - Volume Weighted Average Price
- `CHAIKIN_MONEY_FLOW` - Chaikin Money Flow

### Momentum Indicators (with timeframe variations)
- `ADX` - Average Directional Index
- `ADX_PLUS_DI` - +DI (Positive Directional Indicator)
- `ADX_MINUS_DI` - -DI (Negative Directional Indicator)
- `MOM` - Momentum
- `AO` - Awesome Oscillator

### Advanced Technical Indicators
- `ICHIMOKU_BASE` - Ichimoku Base Line
- `ICHIMOKU_CONVERSION` - Ichimoku Conversion Line
- `ICHIMOKU_LEAD1` - Ichimoku Leading Span A
- `ICHIMOKU_LEAD2` - Ichimoku Leading Span B
- `PIVOT_M_CLASSIC_*` - Monthly Classic Pivot Points
- `PIVOT_M_FIBONACCI_*` - Monthly Fibonacci Pivot Points
- `PIVOT_M_CAMARILLA_*` - Monthly Camarilla Pivot Points

### Candlestick Patterns (27 patterns × 10 timeframes = 270 fields)
All patterns available across timeframes (1m, 5m, 15m, 30m, 1h, 2h, 4h, 1D, 1W, 1M):

**Reversal Patterns:**
- `CANDLE_HAMMER` - Hammer
- `CANDLE_INVERTED_HAMMER` - Inverted Hammer
- `CANDLE_HANGING_MAN` - Hanging Man
- `CANDLE_SHOOTING_STAR` - Shooting Star
- `CANDLE_ENGULFING_BULLISH` - Bullish Engulfing
- `CANDLE_ENGULFING_BEARISH` - Bearish Engulfing
- `CANDLE_HARAMI_BULLISH` - Bullish Harami
- `CANDLE_HARAMI_BEARISH` - Bearish Harami

**Star Patterns:**
- `CANDLE_MORNING_STAR` - Morning Star
- `CANDLE_EVENING_STAR` - Evening Star
- `CANDLE_ABANDONED_BABY_BULLISH` - Bullish Abandoned Baby
- `CANDLE_ABANDONED_BABY_BEARISH` - Bearish Abandoned Baby
- `CANDLE_TRISTAR_BULLISH` - Bullish Tri-Star
- `CANDLE_TRISTAR_BEARISH` - Bearish Tri-Star

**Doji Patterns:**
- `CANDLE_DOJI` - Doji
- `CANDLE_DOJI_DRAGONFLY` - Dragonfly Doji
- `CANDLE_DOJI_GRAVESTONE` - Gravestone Doji

**Multi-Candle Patterns:**
- `CANDLE_3_BLACK_CROWS` - Three Black Crows
- `CANDLE_3_WHITE_SOLDIERS` - Three White Soldiers

**Other Patterns:**
- `CANDLE_MARUBOZU_WHITE` - White Marubozu
- `CANDLE_MARUBOZU_BLACK` - Black Marubozu
- `CANDLE_SPINNING_TOP_WHITE` - White Spinning Top
- `CANDLE_SPINNING_TOP_BLACK` - Black Spinning Top
- `CANDLE_LONG_SHADOW_LOWER` - Long Lower Shadow
- `CANDLE_LONG_SHADOW_UPPER` - Long Upper Shadow
- `CANDLE_KICKING_BULLISH` - Bullish Kicking
- `CANDLE_KICKING_BEARISH` - Bearish Kicking

### Valuation Ratios (26 fields)
- `PRICE_TO_EARNINGS_RATIO_TTM` / `PE_TTM` - P/E ratio (trailing 12 months)
- `PRICE_TO_BOOK_MRQ` / `PB_MRQ` - P/B ratio (most recent quarter)
- `PRICE_SALES_CURRENT` / `PS` - P/S ratio
- `ENTERPRISE_VALUE_EBITDA_TTM` / `EV_EBITDA_TTM` - EV/EBITDA
- `PRICE_EARNINGS_GROWTH_TTM` / `PEG_TTM` - PEG ratio
- `PRICE_TO_FREE_CASH_FLOW` - P/FCF ratio

### Income Statement (254 fields total in Fundamentals)
- `REVENUE_TTM` - Total revenue (trailing 12 months)
- `REVENUE_FY` - Revenue (fiscal year)
- `REVENUE_FQ` - Revenue (fiscal quarter)
- `REVENUE_TTM_YOY_GROWTH` - Revenue growth rate
- `NET_INCOME_TTM` - Net income
- `NET_INCOME_FY` - Net income (fiscal year)
- `EBITDA_TTM` - EBITDA
- `OPERATING_INCOME_TTM` - Operating income
- `GROSS_PROFIT_TTM` - Gross profit
- `GROSS_PROFIT_MARGIN_TTM` - Gross profit margin

### Balance Sheet
- `TOTAL_ASSETS_FQ` - Total assets
- `TOTAL_ASSETS_FY` - Total assets (fiscal year)
- `TOTAL_DEBT_FQ` - Total debt
- `CASH_N_EQUIVALENTS_FQ` - Cash and equivalents
- `TOTAL_EQUITY_FQ` - Total equity
- `WORKING_CAPITAL_FQ` - Working capital

### Cash Flow
- `FREE_CASH_FLOW_TTM` - Free cash flow
- `OPERATING_CASH_FLOW_TTM` - Operating cash flow
- `CAPEX_TTM` - Capital expenditures

### Dividends (48 fields)
- `DIVIDEND_YIELD_FWD` - Forward dividend yield
- `DIVIDENDS_YIELD_FY` - Annual dividend yield (fiscal year)
- `DPS_COMMON_STOCK_PRIM_ISSUE_TTM` - Dividends per share (TTM)
- `DIVIDEND_PAYOUT_RATIO_TTM` - Payout ratio
- `CONTINUOUS_DIVIDEND_GROWTH` - Years of consecutive dividend growth
- `DIVIDENDS_FREQUENCY` - Dividend payment frequency

### Per Share Metrics
- `EARNINGS_PER_SHARE_DILUTED_TTM` / `EPS_DILUTED_TTM` - EPS (diluted)
- `EARNINGS_PER_SHARE_BASIC_TTM` - EPS (basic)
- `BOOK_VALUE_PER_SHARE_FQ` - Book value per share
- `SALES_PER_SHARE_TTM` - Sales per share
- `CASH_PER_SHARE_FQ` - Cash per share

### Financial Ratios
- `ROE_TTM` - Return on Equity
- `ROA_TTM` - Return on Assets
- `ROIC_TTM` - Return on Invested Capital
- `DEBT_TO_EQUITY_FQ` - Debt to Equity ratio
- `CURRENT_RATIO_FQ` - Current ratio
- `QUICK_RATIO_FQ` - Quick ratio

### Recommendations (30 fields)
- `RECOMMEND_ALL` - Overall recommendation
- `RECOMMEND_MA` - Moving Average recommendation
- `RECOMMEND_OTHER` - Other indicators recommendation
- `RATING_STRONG_BUY` - Strong Buy rating count
- `RATING_BUY` - Buy rating count
- `RATING_HOLD` - Hold rating count
- `RATING_SELL` - Sell rating count
- `RATING_STRONG_SELL` - Strong Sell rating count

All recommendations available with timeframe variations (1m, 5m, 15m, 30m, 1h, 2h, 4h, 1D, 1W, 1M).

## Technical Indicators with Timeframe Intervals

Most technical indicators are available across multiple timeframes, allowing for sophisticated multi-timeframe analysis. The available intervals are:

- **Intraday**: `1m`, `5m`, `15m`, `30m`, `1h` (`60m`), `2h` (`120m`), `4h` (`240m`)
- **Daily and above**: `1D` (daily, default), `1W` (weekly), `1M` (monthly)

### Interval Notation

Fields use the pipe `|` notation to specify intervals:
- `RSI|15` - RSI on 15-minute chart
- `EMA20|1h` - 20-period EMA on 1-hour chart
- `MACD.hist|1W` - MACD histogram on weekly chart
- `BB.upper|240` - Bollinger Band upper on 4-hour chart (240 minutes)

### Available Indicators with Intervals

**Moving Averages**: SMA, EMA, WMA, HMA, VWMA (with various periods: 5, 10, 12, 20, 26, 30, 50, 100, 200)

**Oscillators**: RSI, Stochastic (K, D), CCI, Williams %R, Ultimate Oscillator, ROC, Aroon

**Trend Indicators**: MACD (line, signal, histogram), ADX, +DI, -DI, Parabolic SAR

**Volatility**: ATR, ATRP, Bollinger Bands (upper, lower, basis), Standard Deviation

**Volume**: OBV, MFI, VWAP, Chaikin Money Flow

**Momentum**: Momentum, Awesome Oscillator, Bull/Bear Power

**Recommendations**: Recommend.All, Recommend.MA, Recommend.Other

### Multi-Timeframe Analysis Examples

#### Triple Timeframe Confirmation

```typescript
// Find stocks showing bullish signals across multiple timeframes
screener
  .where(StockField.RSI_1D.gt(50))        // Daily RSI bullish
  .where(StockField.RSI_1H.gt(50))        // 1-hour RSI bullish
  .where(StockField.RSI_15M.gt(50))       // 15-min RSI bullish
  .where(StockField.EMA20_1D.gt(StockField.SMA50_1D))  // Daily golden cross
  .where(StockField.MARKET_CAPITALIZATION.gte(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.RSI_1D,
    StockField.RSI_1H,
    StockField.RSI_15M
  );
```

#### Intraday Breakout Detection

```typescript
// Find intraday breakouts with volume confirmation
screener
  .where(StockField.PRICE.gt(StockField.BB_UPPER_15M))  // Price above 15-min upper BB
  .where(StockField.RSI_15M.between(60, 80))            // Strong but not overbought
  .where(StockField.VOLUME_15M.gt(StockField.AVERAGE_VOLUME.mul(1.5)))
  .where(StockField.MACD_HIST_15M.gt(0))                // Positive momentum
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.RSI_15M,
    StockField.BB_UPPER_15M,
    StockField.VOLUME_15M
  );
```

#### Weekly Trend with Daily Entry

```typescript
// Find stocks in weekly uptrend with daily pullback (swing trading setup)
screener
  .where(StockField.EMA20_1W.gt(StockField.SMA50_1W))   // Weekly uptrend
  .where(StockField.RSI_1W.gt(50))                      // Weekly momentum positive
  .where(StockField.RSI_1D.between(30, 45))             // Daily oversold pullback
  .where(StockField.MACD_HIST_1D.gt(0))                 // Daily momentum turning up
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.RSI_1W,
    StockField.RSI_1D,
    StockField.EMA20_1W,
    StockField.SMA50_1W
  );
```

#### Scalping Setup (1-minute and 5-minute)

```typescript
// Ultra-short-term trading setup
screener
  .where(StockField.RSI_1M.gt(60))                      // 1-min RSI strong
  .where(StockField.RSI_5M.gt(55))                      // 5-min RSI confirming
  .where(StockField.EMA12_1M.gt(StockField.EMA26_1M))   // 1-min MACD crossover
  .where(StockField.VOLUME_1M.gt(StockField.AVERAGE_VOLUME.mul(2)))  // High volume
  .where(StockField.MARKET_CAPITALIZATION.gte(1e9))     // Liquid stocks only
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.RSI_1M,
    StockField.RSI_5M,
    StockField.VOLUME_1M
  )
  .sortBy(StockField.VOLUME_1M, false);
```

## Candlestick Pattern Recognition

The screener includes 27 candlestick patterns, each available across 10 timeframes for comprehensive pattern detection.

### Available Patterns

**Reversal Patterns**:
- Hammer, Inverted Hammer, Hanging Man, Shooting Star
- Engulfing (Bullish/Bearish), Harami (Bullish/Bearish)
- Morning Star, Evening Star
- Abandoned Baby (Bullish/Bearish)

**Continuation Patterns**:
- Doji, Dragonfly Doji, Gravestone Doji
- Marubozu (White/Black), Spinning Top (White/Black)

**Multi-Candle Patterns**:
- Three Black Crows, Three White Soldiers
- Tri-Star (Bullish/Bearish)

**Other Patterns**:
- Long Shadow (Upper/Lower), Kicking (Bullish/Bearish)

### Pattern Detection Examples

#### Daily Bullish Reversal Patterns

```typescript
// Find stocks showing bullish reversal signals
screener
  .where(StockField.CANDLE_HAMMER_1D.eq(1))
  .or(StockField.CANDLE_MORNING_STAR_1D.eq(1))
  .or(StockField.CANDLE_ENGULFING_BULLISH_1D.eq(1))
  .where(StockField.RSI_1D.lt(40))                      // Oversold
  .where(StockField.MARKET_CAPITALIZATION.gte(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CANDLE_HAMMER_1D,
    StockField.CANDLE_MORNING_STAR_1D,
    StockField.RSI_1D
  );
```

#### Intraday Pattern Recognition

```typescript
// Find 15-minute chart patterns for day trading
screener
  .where(StockField.CANDLE_DOJI_15M.eq(1))              // Doji indecision
  .where(StockField.RSI_15M.between(45, 55))            // Near neutral
  .where(StockField.VOLUME_15M.gt(StockField.AVERAGE_VOLUME.mul(1.2)))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CANDLE_DOJI_15M,
    StockField.RSI_15M,
    StockField.VOLUME_15M
  );
```

#### Pattern Confluence

```typescript
// Find stocks with pattern confluence across timeframes
screener
  .where(StockField.CANDLE_HAMMER_1D.eq(1))             // Daily hammer
  .where(StockField.CANDLE_ENGULFING_BULLISH_1H.eq(1))  // 1-hour bullish engulfing
  .where(StockField.RSI_1D.lt(35))                      // Oversold on daily
  .where(StockField.MARKET_CAPITALIZATION.gte(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CANDLE_HAMMER_1D,
    StockField.CANDLE_ENGULFING_BULLISH_1H,
    StockField.RSI_1D
  );
```

#### Bearish Pattern Screening

```typescript
// Identify potential bearish reversal patterns
screener
  .where(StockField.CANDLE_SHOOTING_STAR_1D.eq(1))
  .or(StockField.CANDLE_EVENING_STAR_1D.eq(1))
  .or(StockField.CANDLE_ENGULFING_BEARISH_1D.eq(1))
  .where(StockField.RSI_1D.gt(70))                      // Overbought
  .where(StockField.PRICE.near(StockField.PRICE_52_WEEK_HIGH, 0.05))  // Near 52-week high
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CANDLE_SHOOTING_STAR_1D,
    StockField.RSI_1D,
    StockField.PRICE_52_WEEK_HIGH
  );
```

## Filtering Examples

### Multiple Conditions

```typescript
// Large cap stocks with strong fundamentals
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(50e9))
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(15));
```

### Range Filters

```typescript
// Mid-cap stocks with moderate valuation
screener
  .where(StockField.MARKET_CAPITALIZATION.between(2e9, 10e9))
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(10, 20))
  .where(StockField.PRICE_TO_BOOK_MRQ.between(1, 3));
```

### List Filters

```typescript
// Filter by sector
screener
  .where(StockField.SECTOR.in(['Technology', 'Healthcare', 'Finance']));

// Filter by country
screener
  .where(StockField.COUNTRY.in(['US', 'GB', 'CA']));

// Filter by exchange
screener
  .where(StockField.EXCHANGE.in(['NASDAQ', 'NYSE']));
```

## Sorting

```typescript
// Sort by market cap (largest first)
screener.sortBy(StockField.MARKET_CAPITALIZATION, false);

// Sort by dividend yield (highest first)
screener.sortBy(StockField.DIVIDEND_YIELD_FWD, false);

// Sort by P/E ratio (lowest first)
screener.sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true);

// Sort alphabetically by name
screener.sortBy(StockField.NAME, true);
```

## Pagination

```typescript
// Get first 100 results
screener.setRange(0, 100);
const page1 = await screener.get();

// Get next 100 results
screener.setRange(100, 200);
const page2 = await screener.get();

// Get specific page
const pageSize = 50;
const pageNumber = 3;
screener.setRange(pageNumber * pageSize, (pageNumber + 1) * pageSize);
```

## Field Selection

### Default Fields

By default, the screener returns common fields:

```typescript
// Default selection (if select() not called)
const results = await screener.get();
// Returns: NAME, PRICE, CHANGE, CHANGE_PERCENT, VOLUME, MARKET_CAPITALIZATION
```

### Custom Selection

```typescript
// Select specific fields
screener.select(
  StockField.NAME,
  StockField.PRICE,
  StockField.PRICE_TO_EARNINGS_RATIO_TTM,
  StockField.DIVIDEND_YIELD_FWD
);
```

### Select All Fields

```typescript
// Get all available fields
screener.selectAll();

const results = await screener.get();
// Results will have all 3,522 available stock fields
```

## Working with Results

```typescript
const results = await screener.get();

// Total count
console.log(`Found ${results.totalCount} stocks`);

// Iterate results
results.data.forEach(stock => {
  console.log(`${stock.name}: $${stock.close}`);
});

// Filter results
const highVolume = results.data.filter(stock => stock.volume > 1_000_000);

// Map results
const prices = results.data.map(stock => stock.close);

// Find specific stock
const apple = results.data.find(stock => stock.symbol === 'NASDAQ:AAPL');
```

## Real-Time Streaming

```typescript
// Stream top 10 stocks by volume
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(StockField.NAME, StockField.PRICE, StockField.CHANGE_PERCENT)
  .sortBy(StockField.VOLUME, false)
  .setRange(0, 10);

// Update every 5 seconds
for await (const data of screener.stream({ interval: 5000 })) {
  if (data) {
    console.clear();
    console.log('Top 10 by Volume:', new Date().toLocaleTimeString());
    console.table(data.data);
  }
}
```

## Market-Specific Queries

### US Markets Only

```typescript
// Default is US markets
const screener = new StockScreener();

// Or explicitly filter by country
screener.where(StockField.COUNTRY.eq('US'));
```

### Specific Exchange

```typescript
// Filter by exchange
screener.where(StockField.EXCHANGE.eq('NASDAQ'));

// Multiple exchanges
screener.where(StockField.EXCHANGE.in(['NASDAQ', 'NYSE']));
```

### Multiple Countries

```typescript
// Screen European markets
screener.where(StockField.COUNTRY.in(['GB', 'DE', 'FR', 'IT', 'ES']));

// Screen Asian markets
screener.where(StockField.COUNTRY.in(['JP', 'CN', 'HK', 'SG', 'KR']));

// Combine with other filters
screener
  .where(StockField.COUNTRY.in(['GB', 'DE']))
  .where(StockField.MARKET_CAPITALIZATION.gte(5e9))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(3));
```

## Advanced Techniques

### Screen Pre-Market Movers

```typescript
screener
  .where(StockField.CHANGE_PERCENT.gt(5))
  .where(StockField.VOLUME.gte(1_000_000))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE_PERCENT,
    StockField.VOLUME
  )
  .sortBy(StockField.CHANGE_PERCENT, false);
```

### Find Undervalued Stocks

```typescript
screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))
  .where(StockField.MARKET_CAPITALIZATION.gte(1e9));
```

### Quality Growth Stocks

```typescript
screener
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 50e9));
```

## Performance Tips

1. **Select Only Needed Fields** - With 3,522 available fields, avoid `selectAll()` unless necessary. Select specific fields to improve performance and reduce data transfer.
2. **Use Appropriate Ranges** - Limit results with `setRange()` for faster queries
3. **Filter Before Sorting** - Reduce dataset size first with filters, then sort
4. **Cache Results** - Store results to avoid repeated API calls
5. **Use Timeframe-Specific Fields** - When analyzing specific timeframes, use the corresponding interval fields (e.g., `RSI_15M` for 15-minute analysis)
6. **Combine Filters Efficiently** - Group related conditions together for optimal query performance

## Python Library Parity

This TypeScript/JavaScript library provides **full parity with the Python tvscreener library**. All 3,522 stock fields available in the Python library are accessible in this implementation, including:

- All technical indicators with timeframe intervals
- All candlestick patterns across multiple timeframes
- Complete fundamental data (income statement, balance sheet, cash flow)
- All valuation metrics and financial ratios
- Comprehensive market data and company information
- Analyst recommendations across timeframes

Whether you're migrating from Python or building new applications, you have access to the complete TradingView stock screener dataset with the same field names and functionality.

## Next Steps

- [Crypto Screener](crypto.md) - Screen cryptocurrencies
- [Filter Operations](../filtering/operations.md) - All filter operators
- [Stock Fields Reference](../fields/stock-fields.md) - Complete field list
- [Examples](../examples/value-investing.md) - More examples
