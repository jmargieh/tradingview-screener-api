# Crypto Screener

Complete guide to screening cryptocurrency data with the Crypto Screener.

## Overview

The `CryptoScreener` provides access to cryptocurrency market data from TradingView with over 3,108 technical fields including candlestick patterns, technical indicators across multiple timeframes, pivot points, and fundamental data. This implementation provides full parity with the Python tvscreener library.

```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

const screener = new CryptoScreener();
```

## Basic Usage

```typescript
screener
  .where(CryptoField.MARKET_CAP.gt(1_000_000_000))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(100_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT,
    CryptoField.MARKET_CAP
  )
  .sortBy(CryptoField.MARKET_CAP, false);

const results = await screener.get();
console.table(results.data);
```

## Available Fields

The Crypto Screener provides access to **3,108 fields** across multiple categories, with support for 9 different timeframes (1min, 5min, 15min, 30min, 1hr, 2hr, 4hr, 1day, 1week, 1month).

### Field Categories

- **Basic Data**: Price, volume, market cap, OHLC values
- **Technical Indicators**: RSI, MACD, Stochastic, ADX, CCI, momentum indicators
- **Moving Averages**: SMA, EMA, WMA, VWMA, Hull MA with various periods
- **Volatility Indicators**: ATR, Bollinger Bands, Keltner Channels, Donchian Channels
- **Oscillators**: Awesome Oscillator, Williams %R, Ultimate Oscillator, Chaikin Money Flow
- **Trend Analysis**: Ichimoku, Aroon, Parabolic SAR, ADX
- **Candlestick Patterns**: 17 different patterns (Doji, Engulfing, Hammer, etc.)
- **Pivot Points**: Fibonacci, Camarilla, Woodie, Classic, DM pivots
- **Recommendations**: Technical ratings based on various indicators

### Basic Fields

```typescript
CryptoField.NAME                 // Cryptocurrency name
CryptoField.PRICE                // Current price (close)
CryptoField.OPEN                 // Open price
CryptoField.HIGH                 // High price
CryptoField.LOW                  // Low price
CryptoField.VOLUME               // Trading volume
CryptoField.CHANGE_PERCENT       // 24h change percentage
CryptoField.VOLUME_24H_IN_USD    // 24-hour trading volume in USD
CryptoField.MARKET_CAP           // Market capitalization
CryptoField.VOLUME_24H_CHANGE_PERCENT  // 24h volume change percentage
```

### Technical Indicators

#### RSI (Relative Strength Index)
```typescript
CryptoField.RELATIVE_STRENGTH_INDEX_14  // RSI(14) - default timeframe
CryptoField.RSI10                       // RSI(10)
CryptoField.RSI10_1                     // RSI(10) - 1 minute
CryptoField.RSI10_5                     // RSI(10) - 5 minutes
CryptoField.RSI10_15                    // RSI(10) - 15 minutes
CryptoField.RSI10_30                    // RSI(10) - 30 minutes
CryptoField.RSI10_60                    // RSI(10) - 1 hour
CryptoField.RSI10_120                   // RSI(10) - 2 hours
CryptoField.RSI10_240                   // RSI(10) - 4 hours
CryptoField.RSI10_1W                    // RSI(10) - 1 week
CryptoField.RSI10_1M                    // RSI(10) - 1 month
```

#### MACD
```typescript
CryptoField.MACD_LEVEL_12_26      // MACD line (12, 26, 9)
CryptoField.MACD_SIGNAL_12_26     // MACD signal line
CryptoField.MACD_HIST             // MACD histogram - default
CryptoField.MACD_HIST_1           // MACD histogram - 1 minute
CryptoField.MACD_HIST_5           // MACD histogram - 5 minutes
CryptoField.MACD_HIST_15          // MACD histogram - 15 minutes
CryptoField.MACD_HIST_60          // MACD histogram - 1 hour
```

#### Stochastic
```typescript
CryptoField.STOCHASTIC_PERCENTD_14_3_3  // Stochastic %D (14, 3, 3)
CryptoField.STOCH_D_14_1_3              // Stochastic D line
CryptoField.STOCH_K_14_1_3              // Stochastic K line
```

#### ADX (Average Directional Index)
```typescript
CryptoField.AVERAGE_DIRECTIONAL_INDEX_14          // ADX(14)
CryptoField.POSITIVE_DIRECTIONAL_INDICATOR_14     // +DI(14)
CryptoField.NEGATIVE_DIRECTIONAL_INDICATOR_14     // -DI(14)
CryptoField.ADX_PLUS_DI_1                         // +DI[1] - previous value
CryptoField.ADX_MINUS_DI_1                        // -DI[1] - previous value
```

#### CCI (Commodity Channel Index)
```typescript
CryptoField.COMMODITY_CHANNEL_INDEX_20   // CCI(20)
CryptoField.CCI20_1                      // CCI(20)[1] - previous value
```

### Moving Averages

#### Exponential Moving Average (EMA)
```typescript
CryptoField.EXPONENTIAL_MOVING_AVERAGE_10   // EMA(10)
CryptoField.EXPONENTIAL_MOVING_AVERAGE_20   // EMA(20)
CryptoField.EXPONENTIAL_MOVING_AVERAGE_30   // EMA(30)
CryptoField.EXPONENTIAL_MOVING_AVERAGE_50   // EMA(50)
CryptoField.EXPONENTIAL_MOVING_AVERAGE_100  // EMA(100)
CryptoField.EXPONENTIAL_MOVING_AVERAGE_200  // EMA(200)
CryptoField.EMA12                           // EMA(12)
CryptoField.EMA26                           // EMA(26)

// With timeframes
CryptoField.EMA100_1    // EMA(100) - 1 minute
CryptoField.EMA100_5    // EMA(100) - 5 minutes
CryptoField.EMA100_15   // EMA(100) - 15 minutes
CryptoField.EMA100_60   // EMA(100) - 1 hour
CryptoField.EMA100_1W   // EMA(100) - 1 week
```

#### Simple Moving Average (SMA)
```typescript
CryptoField.SIMPLE_MOVING_AVERAGE_10    // SMA(10)
CryptoField.SIMPLE_MOVING_AVERAGE_20    // SMA(20)
CryptoField.SIMPLE_MOVING_AVERAGE_50    // SMA(50)
CryptoField.SIMPLE_MOVING_AVERAGE_100   // SMA(100)
CryptoField.SIMPLE_MOVING_AVERAGE_200   // SMA(200)
```

#### Other Moving Averages
```typescript
CryptoField.VOLUME_WEIGHTED_MOVING_AVERAGE_20  // VWMA(20)
CryptoField.HULL_MOVING_AVERAGE_9              // Hull MA(9)
CryptoField.HULLMA20                           // Hull MA(20)
CryptoField.HULLMA200                          // Hull MA(200)
```

### Volatility Indicators

#### Bollinger Bands
```typescript
CryptoField.BOLLINGER_UPPER_BAND_20   // BB Upper (20, 2)
CryptoField.BOLLINGER_LOWER_BAND_20   // BB Lower (20, 2)
CryptoField.BB_BASIS                  // BB Middle line
CryptoField.BB_UPPER_50               // BB Upper (50, 2)
CryptoField.BB_LOWER_50               // BB Lower (50, 2)
```

#### ATR (Average True Range)
```typescript
CryptoField.AVERAGE_TRUE_RANGE_14   // ATR(14)
CryptoField.ATRP                    // ATR as percentage - default
CryptoField.ATRP_1                  // ATR% - 1 minute
CryptoField.ATRP_5                  // ATR% - 5 minutes
CryptoField.ATRP_15                 // ATR% - 15 minutes
CryptoField.ATRP_60                 // ATR% - 1 hour
```

#### Other Volatility Indicators
```typescript
CryptoField.DONCHIAN_CHANNELS_LOWER_BAND_20  // Donchian Channel Lower (20)
CryptoField.AVERAGE_DAY_RANGE_14             // ADR(14)
```

### Oscillators

```typescript
CryptoField.AWESOME_OSCILLATOR                // Awesome Oscillator
CryptoField.AO_1                              // AO[1] - previous value
CryptoField.WILLIAMS_PERCENT_RANGE_14         // Williams %R(14)
CryptoField.W_R_1                             // Williams %R - 1 minute
CryptoField.MOMENTUM_10                       // Momentum(10)
CryptoField.MOM_1                             // Momentum - 1 minute
CryptoField.CHAIKINMONEYFLOW                  // Chaikin Money Flow
CryptoField.BULL_BEAR_POWER                   // Bull Bear Power
```

### Ichimoku Cloud

```typescript
CryptoField.ICHIMOKU_BASE_LINE_9_26_52_26        // Kijun-sen (Base Line)
CryptoField.ICHIMOKU_CONVERSION_LINE_9_26_52_26  // Tenkan-sen (Conversion Line)
CryptoField.ICHIMOKU_LEADING_SPAN_A_9_26_52_26   // Senkou Span A
CryptoField.ICHIMOKU_BLINE_20_60_120_30          // Alternative base line
```

### Candlestick Patterns

The screener includes 17 candlestick pattern recognition fields, available across all timeframes:

```typescript
// Available patterns (all with timeframe variants):
CryptoField.CANDLE_3BLACKCROWS        // Three Black Crows - default
CryptoField.CANDLE_3BLACKCROWS_1      // Three Black Crows - 1 minute
CryptoField.CANDLE_3BLACKCROWS_5      // Three Black Crows - 5 minutes
CryptoField.CANDLE_3BLACKCROWS_15     // Three Black Crows - 15 minutes
CryptoField.CANDLE_3BLACKCROWS_60     // Three Black Crows - 1 hour
CryptoField.CANDLE_3BLACKCROWS_1W     // Three Black Crows - 1 week

// Other patterns (each available with all timeframes):
// - 3WhiteSoldiers (Three White Soldiers)
// - AbandonedBaby
// - Doji
// - Engulfing (Bullish/Bearish Engulfing)
// - EveningStar
// - Hammer
// - HangingMan
// - Harami
// - InvertedHammer
// - Kicking
// - LongShadow
// - Marubozu
// - MorningStar
// - ShootingStar
// - SpinningTop
// - TriStar
```

### Pivot Points

Multiple pivot point calculation methods with support levels (S1, S2, S3) and resistance levels (R1, R2, R3):

```typescript
// Camarilla Pivots
CryptoField.PIVOT_CAMARILLA_P              // Camarilla Pivot Point
CryptoField.PIVOT_M_CAMARILLA_MIDDLE_1     // Camarilla Middle - 1 min
CryptoField.PIVOT_M_CAMARILLA_MIDDLE_5     // Camarilla Middle - 5 min

// Also available: Fibonacci, Woodie, Classic, and DM pivot methods
```

### Technical Recommendations

```typescript
CryptoField.TECHNICAL_RATING        // Overall technical rating
CryptoField.REC_BBPOWER            // Recommendation: Bull Bear Power
CryptoField.REC_ICHIMOKU           // Recommendation: Ichimoku
CryptoField.REC_STOCH_RSI          // Recommendation: Stochastic RSI
CryptoField.REC_WR                 // Recommendation: Williams %R
CryptoField.REC_HULLMA9            // Recommendation: Hull MA(9)
CryptoField.REC_VWMA               // Recommendation: VWMA
```

## Common Use Cases

### Large Cap Cryptocurrencies

```typescript
screener
  .where(CryptoField.MARKET_CAP.gt(1_000_000_000))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(100_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.MARKET_CAP,
    CryptoField.VOLUME_24H_IN_USD
  )
  .sortBy(CryptoField.MARKET_CAP, false)
  .setRange(0, 50);
```

### High Volume Cryptos

```typescript
screener
  .where(CryptoField.VOLUME_24H_IN_USD.gte(500_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.VOLUME_24H_IN_USD
  )
  .sortBy(CryptoField.VOLUME_24H_IN_USD, false);
```

### Top Gainers

```typescript
screener
  .where(CryptoField.CHANGE_PERCENT.gt(10))
  .where(CryptoField.MARKET_CAP.gt(100_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT
  )
  .sortBy(CryptoField.CHANGE_PERCENT, false);
```

### Market Cap Ranges

```typescript
// Mid-cap cryptos
screener.where(CryptoField.MARKET_CAP.between(100_000_000, 1_000_000_000));

// Large-cap only
screener.where(CryptoField.MARKET_CAP.gt(10_000_000_000));
```

## Filtering Examples

### Price Range

```typescript
screener
  .where(CryptoField.PRICE.between(0.01, 100))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(1_000_000));
```

### Volume Threshold

```typescript
screener
  .where(CryptoField.VOLUME_24H_IN_USD.gte(50_000_000))
  .sortBy(CryptoField.VOLUME_24H_IN_USD, false);
```

### Market Cap Range

```typescript
screener
  .where(CryptoField.MARKET_CAP.between(1e9, 50e9))
  .select(CryptoField.NAME, CryptoField.MARKET_CAP);
```

## Sorting

```typescript
// Sort by market cap (largest first)
screener.sortBy(CryptoField.MARKET_CAP, false);

// Sort by volume (highest first)
screener.sortBy(CryptoField.VOLUME_24H_IN_USD, false);

// Sort by change (biggest gainers first)
screener.sortBy(CryptoField.CHANGE_PERCENT, false);

// Sort by price (lowest first)
screener.sortBy(CryptoField.PRICE, true);
```

## Real-Time Streaming

```typescript
screener
  .where(CryptoField.MARKET_CAP.gt(1e9))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT
  )
  .sortBy(CryptoField.CHANGE_PERCENT, false)
  .setRange(0, 10);

// Stream top 10 gainers
for await (const data of screener.stream({ interval: 5000 })) {
  if (data) {
    console.clear();
    console.log('Top 10 Crypto Gainers');
    console.table(data.data);
  }
}
```

## Working with Results

```typescript
const results = await screener.get();

// Access data
results.data.forEach(crypto => {
  console.log(`${crypto.name}: $${crypto.close}`);
  console.log(`24h Change: ${crypto.change}%`);
  console.log(`Market Cap: $${crypto.market_cap_calc}`);
});

// Filter in JavaScript
const highVolume = results.data.filter(
  c => c['Value.Traded'] > 100_000_000
);
```

## Complete Example

```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

async function findTopCryptos() {
  const screener = new CryptoScreener();

  screener
    .where(CryptoField.MARKET_CAP.gt(500_000_000))
    .where(CryptoField.VOLUME_24H_IN_USD.gte(50_000_000))
    .select(
      CryptoField.NAME,
      CryptoField.PRICE,
      CryptoField.CHANGE_PERCENT,
      CryptoField.VOLUME_24H_IN_USD,
      CryptoField.MARKET_CAP
    )
    .sortBy(CryptoField.MARKET_CAP, false)
    .setRange(0, 20);

  const results = await screener.get();

  console.log(`Found ${results.totalCount} cryptocurrencies`);
  console.table(results.data);
}

findTopCryptos().catch(console.error);
```

## Next Steps

- [Filter Operations](../filtering/operations.md) - All comparison operators
- [Crypto Fields Reference](../fields/crypto-fields.md) - All available fields
- [Streaming Guide](../advanced/streaming.md) - Real-time data
