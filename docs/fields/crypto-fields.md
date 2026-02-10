# Crypto Fields Reference

Complete reference for all 3,108 cryptocurrency fields available in the CryptoScreener.

## Overview

The CryptoField enum provides **3,108 total fields** with full parity to the Python `tvscreener` library. These fields cover:

- **Price & Volume Metrics**: 136 fields for current and historical price/volume data
- **Technical Indicators**: 2,400+ fields including Moving Averages, RSI, MACD, Bollinger Bands, Stochastic, ADX, and more
- **Candlestick Patterns**: 270 boolean fields for pattern recognition
- **Pivot Points**: 310 fields for Camarilla and other pivot calculations
- **Recommendations**: 63 fields for technical ratings and signals
- **Fundamental Data**: Market cap, supply metrics, and asset information
- **Metadata**: Names, descriptions, sectors, and exchange information

### Key Capabilities

- **2,673 fields** support time intervals (1m, 5m, 15m, 30m, 1h, 4h, 1D, 1W, 1M)
- **839 fields** support historical data via `.withHistory()`
- **11 data formats**: float, percent, bool, rating, text, currency, date, and more

---

## Field Categories

### 1. Price & Volume (136 Fields)

Core OHLCV data and 24-hour metrics.

#### Basic Price Data

```typescript
CryptoField.PRICE                    // Current price (close)
CryptoField.OPEN                     // Open price
CryptoField.HIGH                     // High price
CryptoField.LOW                      // Low price
CryptoField.VOLUME                   // Trading volume
```

#### 24-Hour Metrics

```typescript
CryptoField.CHANGE_PERCENT           // 24h price change %
CryptoField.CHANGE                   // 24h price change (absolute)
CryptoField.VOLUME_24H_IN_USD        // 24h volume in USD
CryptoField.VOLUME_24H_CHANGE_PERCENT // 24h volume change %
CryptoField.N24H_VOL_TO_MARKET_CAP   // Volume to market cap ratio
```

#### Multi-Timeframe Changes

```typescript
CryptoField.CHANGE_1MIN_PERCENT      // 1 minute change %
CryptoField.CHANGE_5MIN_PERCENT      // 5 minute change %
CryptoField.CHANGE_15MIN_PERCENT     // 15 minute change %
CryptoField.CHANGE_1H_PERCENT        // 1 hour change %
CryptoField.CHANGE_4H_PERCENT        // 4 hour change %
CryptoField.CHANGE_1W_PERCENT        // 1 week change %
CryptoField.CHANGE_1M_PERCENT        // 1 month change %
```

#### Historical Price Levels

```typescript
CryptoField.WEEK_HIGH_52             // 52-week high
CryptoField.WEEK_LOW_52              // 52-week low
CryptoField.PRICE_52_WEEK_HIGH_DATE  // Date of 52-week high
CryptoField.PRICE_52_WEEK_LOW_DATE   // Date of 52-week low
```

---

### 2. Technical Indicators (2,400+ Fields)

Comprehensive technical analysis indicators with interval and historical support.

#### Moving Averages (630 Fields)

Simple, Exponential, and Volume-Weighted Moving Averages.

**Simple Moving Average (SMA)**
```typescript
CryptoField.SIMPLE_MOVING_AVERAGE_10  // SMA(10)
CryptoField.SIMPLE_MOVING_AVERAGE_20  // SMA(20)
CryptoField.SIMPLE_MOVING_AVERAGE_50  // SMA(50)
CryptoField.SIMPLE_MOVING_AVERAGE_100 // SMA(100)
CryptoField.SIMPLE_MOVING_AVERAGE_200 // SMA(200)
```

**Exponential Moving Average (EMA)**
```typescript
CryptoField.EXPONENTIAL_MOVING_AVERAGE_10  // EMA(10)
CryptoField.EXPONENTIAL_MOVING_AVERAGE_20  // EMA(20)
CryptoField.EXPONENTIAL_MOVING_AVERAGE_50  // EMA(50)
CryptoField.EXPONENTIAL_MOVING_AVERAGE_100 // EMA(100)
CryptoField.EXPONENTIAL_MOVING_AVERAGE_200 // EMA(200)
```

**Volume-Weighted Moving Average (VWMA)**
```typescript
CryptoField.VOLUME_WEIGHTED_MOVING_AVERAGE_20 // VWMA(20)
```

**With Time Intervals**
```typescript
// 1-minute timeframe
CryptoField.EMA100_1                 // EMA(100) on 1m chart
CryptoField.SMA200_1                 // SMA(200) on 1m chart

// 1-hour timeframe
CryptoField.EMA100_60                // EMA(100) on 1h chart
CryptoField.SMA200_60                // SMA(200) on 1h chart

// Daily timeframe
CryptoField.EMA100_1D                // EMA(100) on daily chart
```

#### RSI - Relative Strength Index (250 Fields)

RSI with multiple periods and historical data support.

```typescript
CryptoField.RELATIVE_STRENGTH_INDEX_14 // RSI(14) - default
CryptoField.RSI10                      // RSI(10)
CryptoField.RSI7                       // RSI(7)

// Historical RSI values
CryptoField.RSI10_1                    // RSI(10) 1 bar ago
CryptoField.RSI10_2                    // RSI(10) 2 bars ago

// With time intervals
CryptoField.RSI10_60                   // RSI(10) on 1h chart
CryptoField.RSI10_1_60                 // RSI(10)[1] on 1h chart
```

#### MACD (30 Fields)

Moving Average Convergence Divergence indicator.

```typescript
CryptoField.MACD_LEVEL_12_26          // MACD line
CryptoField.MACD_SIGNAL_12_26         // MACD signal line
CryptoField.MACD_HIST                 // MACD histogram

// With intervals
CryptoField.MACD_HIST_1               // MACD histogram on 1m
CryptoField.MACD_HIST_60              // MACD histogram on 1h
CryptoField.MACD_HIST_1D              // MACD histogram on daily
```

#### Bollinger Bands (80 Fields)

Standard Bollinger Bands with 20-period and 50-period variants.

```typescript
CryptoField.BOLLINGER_UPPER_BAND_20   // Upper band (20)
CryptoField.BB_BASIS                  // Middle band / SMA(20)
CryptoField.BOLLINGER_LOWER_BAND_20   // Lower band (20)

// BB(50)
CryptoField.BB_BASIS_50               // 50-period basis
CryptoField.BB_LOWER_50               // 50-period lower band
CryptoField.BB_UPPER_50               // 50-period upper band

// With intervals
CryptoField.BB_UPPER_50_60            // 50-period upper on 1h
CryptoField.BB_BASIS_50_1D            // 50-period basis on daily
```

#### Stochastic (230 Fields)

Stochastic oscillator and Stochastic RSI.

```typescript
CryptoField.STOCHASTIC_PERCENTK_14_3_3  // Stochastic %K (14,3,3)
CryptoField.STOCHASTIC_PERCENTD_14_3_3  // Stochastic %D (14,3,3)
CryptoField.REC_STOCH_RSI               // Stoch RSI recommendation

// With intervals
CryptoField.STOCH_K_1_60              // %K[1] on 1h chart
CryptoField.STOCH_D_1_1D              // %D[1] on daily chart
```

#### ADX - Average Directional Index (250 Fields)

Trend strength and directional movement indicators.

```typescript
CryptoField.AVERAGE_DIRECTIONAL_INDEX_14          // ADX(14)
CryptoField.POSITIVE_DIRECTIONAL_INDICATOR_14     // +DI(14)
CryptoField.NEGATIVE_DIRECTIONAL_INDICATOR_14     // -DI(14)

// Historical values
CryptoField.ADX_PLUS_DI_1             // +DI 1 bar ago
CryptoField.ADX_MINUS_DI_1            // -DI 1 bar ago

// With intervals
CryptoField.ADX_PLUS_DI_1_60          // +DI[1] on 1h chart
```

#### Other Technical Indicators (200+ Fields)

Additional momentum, volatility, and trend indicators.

**Average True Range (ATR)**
```typescript
CryptoField.AVERAGE_DAY_RANGE_14      // ADR(14)
CryptoField.ADRP                      // ADR Percentage
```

**Awesome Oscillator (AO)**
```typescript
CryptoField.AWESOME_OSCILLATOR        // Awesome Oscillator
CryptoField.AO_1                      // AO 1 bar ago
CryptoField.AO_2                      // AO 2 bars ago
```

**Momentum**
```typescript
CryptoField.MOMENTUM_10               // Momentum(10)
```

**Commodity Channel Index**
```typescript
CryptoField.COMMODITY_CHANNEL_INDEX_20  // CCI(20)
CryptoField.CCI20_1                     // CCI(20) 1 bar ago
```

**Williams %R**
```typescript
CryptoField.WILLIAMS_PERCENT_RANGE_14 // Williams %R (14)
```

**Ichimoku Cloud**
```typescript
CryptoField.ICHIMOKU_CONVERSION_LINE_9_26_52_26  // Tenkan-sen (9,26,52,26)
CryptoField.ICHIMOKU_BASE_LINE_9_26_52_26        // Kijun-sen (9,26,52,26)
```

**Ultimate Oscillator**
```typescript
CryptoField.ULTIMATE_OSCILLATOR_7_14_28  // UO (7,14,28)
```

**Parabolic SAR**
```typescript
CryptoField.PARABOLIC_SAR             // P.SAR
CryptoField.P_SAR_1                   // P.SAR on 1m
CryptoField.P_SAR_60                  // P.SAR on 1h
```

---

### 3. Candlestick Patterns (270 Fields)

Boolean fields indicating the presence of candlestick patterns.

```typescript
// Bearish Patterns
CryptoField.CANDLE_3BLACKCROWS        // Three Black Crows
CryptoField.CANDLE_SHOOTINGSTAR       // Shooting Star
CryptoField.CANDLE_HANGINGMAN         // Hanging Man
CryptoField.CANDLE_EVENINGSTAR        // Evening Star
CryptoField.CANDLE_DARKCLOUDCOVER     // Dark Cloud Cover

// Bullish Patterns
CryptoField.CANDLE_3WHITESOLDIERS     // Three White Soldiers
CryptoField.CANDLE_HAMMER             // Hammer
CryptoField.CANDLE_INVERTEDHAMMER     // Inverted Hammer
CryptoField.CANDLE_MORNINGSTAR        // Morning Star
CryptoField.CANDLE_PIERCINGLINE       // Piercing Line

// Reversal Patterns
CryptoField.CANDLE_DOJI               // Doji
CryptoField.CANDLE_DRAGONFLYDOJI      // Dragonfly Doji
CryptoField.CANDLE_GRAVESTONEDOJI     // Gravestone Doji
CryptoField.CANDLE_ENGULFING_BEARISH  // Bearish Engulfing
CryptoField.CANDLE_ENGULFING_BULLISH  // Bullish Engulfing

// With time intervals
CryptoField.CANDLE_HAMMER_60          // Hammer on 1h chart
CryptoField.CANDLE_DOJI_1D            // Doji on daily chart
```

**Usage Example:**
```typescript
screener
  .where(CryptoField.CANDLE_HAMMER.eq(true))
  .where(CryptoField.RSI10.lt(30))
  .select(CryptoField.NAME, CryptoField.PRICE, CryptoField.RSI10);
```

---

### 4. Pivot Points (310 Fields)

Camarilla and standard pivot point calculations.

```typescript
// Camarilla Pivots
CryptoField.PIVOT_CAMARILLA_P         // Camarilla pivot point
CryptoField.PIVOT_CAMARILLA_R1        // Resistance 1
CryptoField.PIVOT_CAMARILLA_R2        // Resistance 2
CryptoField.PIVOT_CAMARILLA_R3        // Resistance 3
CryptoField.PIVOT_CAMARILLA_S1        // Support 1
CryptoField.PIVOT_CAMARILLA_S2        // Support 2
CryptoField.PIVOT_CAMARILLA_S3        // Support 3

// With time intervals
CryptoField.PIVOT_M_CAMARILLA_MIDDLE_60   // Camarilla P on 1h
CryptoField.PIVOT_M_CAMARILLA_R1_1D       // Camarilla R1 on daily
```

---

### 5. Recommendations & Ratings (63 Fields)

Technical analysis recommendations and rating signals.

```typescript
CryptoField.TECHNICAL_RATING          // Overall technical rating
CryptoField.MOVING_AVERAGES_RATING    // MA rating
CryptoField.OSCILLATORS_RATING        // Oscillator rating

// Individual indicator recommendations
CryptoField.RELATIVE_STRENGTH_INDEX_14   // RSI recommendation
CryptoField.EXPONENTIAL_MOVING_AVERAGE_10 // EMA(10) recommendation
CryptoField.SIMPLE_MOVING_AVERAGE_20     // SMA(20) recommendation
CryptoField.MACD_LEVEL_12_26            // MACD recommendation
CryptoField.AVERAGE_DIRECTIONAL_INDEX_14 // ADX recommendation

// With intervals
CryptoField.RECOMMEND_ALL_60          // Technical rating on 1h
CryptoField.RECOMMEND_MA_1D           // MA rating on daily
```

**Rating Values:**
- Strong Buy: `1.0` to `0.5`
- Buy: `0.5` to `0.1`
- Neutral: `0.1` to `-0.1`
- Sell: `-0.1` to `-0.5`
- Strong Sell: `-0.5` to `-1.0`

---

### 6. Fundamental Data

Market capitalization, supply metrics, and asset information.

#### Market Cap & Supply

```typescript
CryptoField.MARKET_CAPITALIZATION     // Total market cap
CryptoField.FULLY_DILUTED_MARKET_CAP  // Fully diluted market cap
CryptoField.CIRCULATING_SUPPLY        // Circulating supply
CryptoField.TOTAL_SUPPLY              // Total supply
CryptoField.MAX_SUPPLY                // Maximum supply
CryptoField.CIRCULATING_TO_MAX_SUPPLY_RATIO // Circ/max ratio
```

#### Volume & Liquidity

```typescript
CryptoField.VOLUME_24H_IN_USD         // 24h volume
CryptoField.N24H_VOL_TO_MARKET_CAP    // Volume/Market cap ratio
CryptoField.MARKET_CAP_TO_TVL         // Market cap to TVL ratio
```

#### Metadata

```typescript
CryptoField.NAME                      // Cryptocurrency name
CryptoField.DESCRIPTION               // Asset description
CryptoField.SECTOR                    // Sector classification
CryptoField.TYPE                      // Asset type
CryptoField.SUBTYPE                   // Asset subtype
CryptoField.LOGOID                    // Logo identifier
```

---

## Time Intervals

**2,673 fields** support time intervals, allowing you to analyze data across different timeframes.

### Available Intervals

| Interval | Suffix | Description |
|----------|--------|-------------|
| 1 minute | `_1` or `\|1` | 1-minute chart |
| 5 minutes | `_5` or `\|5` | 5-minute chart |
| 15 minutes | `_15` or `\|15` | 15-minute chart |
| 30 minutes | `_30` or `\|30` | 30-minute chart |
| 1 hour | `_60` or `\|60` | 1-hour chart |
| 2 hours | `_120` or `\|120` | 2-hour chart |
| 4 hours | `_240` or `\|240` | 4-hour chart |
| 1 day | `_1D` or `\|1D` | Daily chart (default) |
| 1 week | `_1W` or `\|1W` | Weekly chart |
| 1 month | `_1M` or `\|1M` | Monthly chart |

### Field Naming Pattern

Fields with interval support follow this pattern:
```
BASE_NAME + INTERVAL_SUFFIX
```

**Examples:**
```typescript
// RSI on different timeframes
CryptoField.RSI10                // Daily (default)
CryptoField.RSI10_1              // 1-minute
CryptoField.RSI10_5              // 5-minute
CryptoField.RSI10_60             // 1-hour
CryptoField.RSI10_240            // 4-hour
CryptoField.RSI10_1W             // Weekly

// EMA on different timeframes
CryptoField.EMA100               // Daily
CryptoField.EMA100_15            // 15-minute
CryptoField.EMA100_60            // 1-hour
CryptoField.EMA100_1D            // Daily (explicit)
CryptoField.EMA100_1M            // Monthly

// Bollinger Bands
CryptoField.BB_UPPER             // Daily
CryptoField.BB_UPPER_5           // 5-minute
CryptoField.BB_UPPER_60          // 1-hour
```

### Multi-Timeframe Analysis

Combine indicators from different timeframes:

```typescript
screener
  // Bullish on daily
  .where(CryptoField.RSI10.lt(30))
  .where(CryptoField.RECOMMEND_ALL.gt(0))

  // Strong momentum on 1-hour
  .where(CryptoField.RSI10_60.gt(60))
  .where(CryptoField.MACD_HIST_60.gt(0))

  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.RSI10,      // Daily RSI
    CryptoField.RSI10_60    // 1-hour RSI
  );
```

---

## Historical Data

**839 fields** support historical data via the `.withHistory()` method.

### How Historical Data Works

Historical data allows you to access indicator values from previous bars/candles:

```typescript
// Current value
CryptoField.RSI10                // RSI now

// Historical values
CryptoField.RSI10_1              // RSI 1 bar ago
CryptoField.RSI10_2              // RSI 2 bars ago
```

### Fields with Historical Support

- **RSI**: All RSI variants (218 fields)
- **Stochastic**: Stochastic and Stoch RSI (229 fields)
- **ADX**: +DI and -DI indicators (266 fields)
- **Other**: Selected momentum and trend indicators (126 fields)

### Historical Data Examples

**RSI Crossover Detection:**
```typescript
screener
  .where(CryptoField.RSI10.gt(50))      // Current RSI above 50
  .where(CryptoField.RSI10_1.lt(50))    // Previous RSI below 50
  .select(
    CryptoField.NAME,
    CryptoField.RSI10,
    CryptoField.RSI10_1
  );
// Finds cryptos where RSI just crossed above 50
```

**Stochastic Signal:**
```typescript
screener
  .where(CryptoField.STOCHASTIC_PERCENTK_14_3_3.gt(
    CryptoField.STOCHASTIC_PERCENTD_14_3_3
  ))
  .where(CryptoField.STOCH_K_1.lt(CryptoField.STOCH_D_1))
  .select(
    CryptoField.NAME,
    CryptoField.STOCHASTIC_PERCENTK_14_3_3,
    CryptoField.STOCHASTIC_PERCENTD_14_3_3
  );
// Stochastic %K crossing above %D
```

**ADX Trend Strength:**
```typescript
screener
  .where(CryptoField.ADX_PLUS_DI.gt(CryptoField.ADX_MINUS_DI))
  .where(CryptoField.ADX_PLUS_DI_1.lt(CryptoField.ADX_MINUS_DI_1))
  .select(CryptoField.NAME, CryptoField.ADX_PLUS_DI, CryptoField.ADX_MINUS_DI);
// +DI crossing above -DI
```

**Multi-Timeframe Historical Analysis:**
```typescript
screener
  // 1-hour chart: RSI was oversold, now recovering
  .where(CryptoField.RSI10_60.gt(35))
  .where(CryptoField.RSI10_1_60.lt(30))

  // Daily chart: Still in uptrend
  .where(CryptoField.EXPONENTIAL_MOVING_AVERAGE_50.gt(
    CryptoField.EXPONENTIAL_MOVING_AVERAGE_200
  ))

  .select(
    CryptoField.NAME,
    CryptoField.RSI10_60,      // Current 1h RSI
    CryptoField.RSI10_1_60     // Previous 1h RSI
  );
```

---

## Complete Field Count by Format

| Format | Count | Description | Example Fields |
|--------|-------|-------------|----------------|
| `float` | 2,306 | Numeric values | RSI, EMA, ADX, MACD |
| `bool` | 270 | Boolean flags | Candlestick patterns |
| `number_group` | 147 | Large numbers with grouping | Volume, Market Cap |
| `percent` | 134 | Percentage values | Change %, Volume Change % |
| `rating` | 100 | Technical ratings (-1 to 1) | Recommendations |
| `round` | 42 | Rounded numeric values | Price changes |
| `computed_recommendation` | 28 | Indicator recommendations | SMA, EMA, RSI signals |
| `text` | 16 | Text strings | Name, Description, Sector |
| `date` | 55 | Date values | 52-week high date |
| `missing` | 6 | Unavailable data | Some market cap fields |
| `recommendation` | 4 | Overall recommendations | Buy/Sell/Neutral |
| **Total** | **3,108** | | |

---

## Field Naming Conventions

Understanding field naming patterns helps you find the right field.

### Pattern 1: Base Indicators

Standard indicators without suffixes (use default/daily timeframe):
```typescript
CryptoField.RSI10                // RSI(10) on daily
CryptoField.EMA50                // EMA(50) on daily
CryptoField.MACD_HIST            // MACD histogram on daily
```

### Pattern 2: Interval Suffix

Indicators with `|N` or `_N` suffixes specify timeframes:
```typescript
CryptoField.RSI10_60             // RSI(10) on 1-hour
CryptoField.EMA50_15             // EMA(50) on 15-minute
CryptoField.MACD_HIST_240        // MACD histogram on 4-hour
```

### Pattern 3: Historical Suffix

Indicators with `[N]` specify historical bars:
```typescript
CryptoField.RSI10_1              // RSI(10) 1 bar ago
CryptoField.ADX_PLUS_DI_1        // +DI 1 bar ago
```

### Pattern 4: Combined Suffixes

Historical data on specific timeframes:
```typescript
CryptoField.RSI10_1_60           // RSI(10)[1] on 1-hour
CryptoField.ADX_PLUS_DI_1_240    // +DI[1] on 4-hour
```

### Pattern 5: Boolean Patterns

Candlestick patterns use dot notation:
```typescript
CryptoField.CANDLE_HAMMER        // Hammer pattern (daily)
CryptoField.CANDLE_HAMMER_60     // Hammer pattern on 1-hour
```

### Pattern 6: Dot-Separated Components

Multi-part indicators use dots:
```typescript
CryptoField.BB_UPPER             // BB.upper (Bollinger upper band)
CryptoField.MACD_HIST            // MACD.hist (MACD histogram)
CryptoField.RECOMMEND_ALL        // Recommend.All (overall rating)
```

### Constant Name Transformations

Field names are transformed to TypeScript constant names:

| Pattern | Field Name | Constant Name |
|---------|------------|---------------|
| Dots | `BB.upper` | `BB_UPPER` |
| Pipes | `RSI10\|60` | `RSI10_60` |
| Brackets | `RSI10[1]` | `RSI10_1` |
| Hyphens | `24h-vol` | `N24H_VOL` |
| Spaces | `Market Cap` | `MARKET_CAP` |
| Starting digit | `24h_vol` | `N24H_VOL` |

---

## Usage Examples

### Example 1: Top Gainers with High Volume

```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

const screener = new CryptoScreener();

screener
  .where(CryptoField.CHANGE_PERCENT.gt(10))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(50_000_000))
  .where(CryptoField.MARKET_CAPITALIZATION.gt(100_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT,
    CryptoField.VOLUME_24H_IN_USD,
    CryptoField.MARKET_CAPITALIZATION
  )
  .sortBy(CryptoField.CHANGE_PERCENT, false);

const results = await screener.get();
```

### Example 2: Oversold RSI with Bullish MA Crossover

```typescript
screener
  .where(CryptoField.RSI10.lt(30))                                        // Oversold RSI
  .where(CryptoField.EXPONENTIAL_MOVING_AVERAGE_50.gt(
    CryptoField.EXPONENTIAL_MOVING_AVERAGE_200
  ))    // Golden cross
  .where(CryptoField.VOLUME_24H_IN_USD.gte(10_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.RSI10,
    CryptoField.EXPONENTIAL_MOVING_AVERAGE_50,
    CryptoField.EXPONENTIAL_MOVING_AVERAGE_200
  )
  .sortBy(CryptoField.RSI10);
```

### Example 3: Multi-Timeframe Momentum

```typescript
screener
  // Daily: Uptrend
  .where(CryptoField.EXPONENTIAL_MOVING_AVERAGE_50.gt(
    CryptoField.EXPONENTIAL_MOVING_AVERAGE_200
  ))
  .where(CryptoField.TECHNICAL_RATING.gt(0))

  // 1-hour: Recent oversold recovery
  .where(CryptoField.RSI10_60.between(35, 50))
  .where(CryptoField.RSI10_1_60.lt(30))

  // Volume confirmation
  .where(CryptoField.VOLUME_24H_IN_USD.gte(25_000_000))

  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.RSI10,           // Daily RSI
    CryptoField.RSI10_60,        // 1h RSI current
    CryptoField.RSI10_1_60,      // 1h RSI previous
    CryptoField.TECHNICAL_RATING
  );
```

### Example 4: Bollinger Band Squeeze

```typescript
screener
  .where(CryptoField.PRICE.gt(CryptoField.BOLLINGER_UPPER_BAND_20))
  .where(CryptoField.RSI10.gt(70))
  .where(CryptoField.VOLUME_24H_CHANGE_PERCENT.gt(20))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.BOLLINGER_UPPER_BAND_20,
    CryptoField.BB_BASIS,
    CryptoField.BOLLINGER_LOWER_BAND_20,
    CryptoField.RSI10
  )
  .sortBy(CryptoField.VOLUME_24H_CHANGE_PERCENT, false);
```

### Example 5: Candlestick Pattern Scanner

```typescript
screener
  .where(CryptoField.CANDLE_HAMMER.eq(true))
  .where(CryptoField.RSI10.lt(35))
  .where(CryptoField.TECHNICAL_RATING.lt(0))
  .where(CryptoField.MARKET_CAPITALIZATION.gt(50_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT,
    CryptoField.RSI10,
    CryptoField.CANDLE_HAMMER
  );
```

### Example 6: MACD Crossover

```typescript
screener
  .where(CryptoField.MACD_HIST.gt(0))                // MACD above signal
  .where(CryptoField.MACD_HIST_1.lt(0))              // Was below (crossover)
  .where(CryptoField.VOLUME_24H_IN_USD.gte(15_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.MACD_LEVEL_12_26,
    CryptoField.MACD_SIGNAL_12_26,
    CryptoField.MACD_HIST
  )
  .sortBy(CryptoField.MACD_HIST, false);
```

### Example 7: Strong Trend with ADX

```typescript
screener
  .where(CryptoField.AVERAGE_DIRECTIONAL_INDEX_14.gt(25))        // Strong trend
  .where(CryptoField.POSITIVE_DIRECTIONAL_INDICATOR_14.gt(
    CryptoField.NEGATIVE_DIRECTIONAL_INDICATOR_14
  ))  // Uptrend
  .where(CryptoField.RSI10.between(50, 70))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.AVERAGE_DIRECTIONAL_INDEX_14,
    CryptoField.POSITIVE_DIRECTIONAL_INDICATOR_14,
    CryptoField.NEGATIVE_DIRECTIONAL_INDICATOR_14,
    CryptoField.RSI10
  );
```

### Example 8: High Technical Rating

```typescript
screener
  .where(CryptoField.TECHNICAL_RATING.gte(0.5))          // Strong Buy
  .where(CryptoField.MOVING_AVERAGES_RATING.gte(0.5))    // MA confirms
  .where(CryptoField.OSCILLATORS_RATING.gte(0.1))        // Oscillators agree
  .where(CryptoField.VOLUME_24H_IN_USD.gte(20_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.TECHNICAL_RATING,
    CryptoField.MOVING_AVERAGES_RATING,
    CryptoField.OSCILLATORS_RATING,
    CryptoField.CHANGE_PERCENT
  )
  .sortBy(CryptoField.TECHNICAL_RATING, false);
```

---

## Working with Results

### Accessing Field Values

Field values are accessed using the `fieldName` property:

```typescript
const results = await screener.get();

results.data.forEach(crypto => {
  // Simple field names
  console.log(`${crypto.name}: $${crypto.close}`);
  console.log(`Change: ${crypto.change}%`);

  // Fields with special characters need bracket notation
  console.log(`Volume: $${crypto['24h_vol|5']}`);
  console.log(`RSI: ${crypto.RSI10}`);
  console.log(`RSI 1h: ${crypto['RSI10|60']}`);

  // Dot notation for sub-properties
  console.log(`BB Upper: ${crypto['BB.upper']}`);
  console.log(`MACD Hist: ${crypto['MACD.hist']}`);
});
```

### Field Name Mapping Reference

| Constant | fieldName | Access |
|----------|-----------|--------|
| `NAME` | `name` | `row.name` |
| `PRICE` | `close` | `row.close` |
| `CHANGE_PERCENT` | `change` | `row.change` |
| `VOLUME_24H_IN_USD` | `24h_vol\|5` | `row['24h_vol\|5']` |
| `RSI10` | `RSI10` | `row.RSI10` |
| `RSI10_60` | `RSI10\|60` | `row['RSI10\|60']` |
| `RSI10_1` | `RSI10[1]` | `row['RSI10[1]']` |
| `BB_UPPER` | `BB.upper` | `row['BB.upper']` |
| `MACD_HIST` | `MACD.hist` | `row['MACD.hist']` |
| `CANDLE_HAMMER` | `Candle.Hammer` | `row['Candle.Hammer']` |

---

## Finding Fields

### Method 1: Search the Generated Types

The `CryptoField` enum is fully typed with all 3,108 fields. Use TypeScript autocomplete:

```typescript
CryptoField.  // Autocomplete shows all available fields
```

### Method 2: Check the JSON Reference

All field definitions are available in `/tmp/python_crypto_fields.json` with complete metadata:

```json
{
  "constantName": "RSI10_60",
  "label": "RSI 10|60",
  "fieldName": "RSI10|60",
  "format": "float",
  "interval": true,
  "historical": true
}
```

### Method 3: Pattern Matching

Use naming conventions to find fields:
- Moving averages: `SMA*`, `EMA*`, `VWMA*`
- RSI: `RSI*`, `RELATIVE_STRENGTH_INDEX*`
- MACD: `MACD*`
- Bollinger: `BB*`, `BOLLINGER*`
- Candlestick: `CANDLE_*`
- Recommendations: `RECOMMEND*`, `TECHNICAL_RATING*`

---

## Next Steps

- [Crypto Screener Guide](../screeners/crypto.md) - Complete guide to using CryptoScreener
- [Filter Operations](../filtering/operations.md) - All comparison operators
- [Complex Queries](../filtering/complex-queries.md) - Building advanced queries
