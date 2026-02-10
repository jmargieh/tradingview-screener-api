# Technical Analysis

Using comprehensive technical indicators and momentum for trading decisions.

## Overview

Technical analysis uses price patterns, indicators, and momentum to identify trading opportunities. This guide leverages the **3,522 available fields** in the TradingView Screener API, including multiple RSI variations, MACD components, Bollinger Bands, Stochastic indicators, ADX, and more.

## Multi-RSI Strategy

Using multiple RSI timeframes for confirmation:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  // Daily RSI (standard 14-period)
  .where(StockField.RSI.between(50, 70))

  // RSI 7-period for short-term momentum
  .where(StockField.RSI7.between(45, 75))

  // Weekly RSI for trend confirmation
  .where(StockField.RSI_1W.between(45, 70))

  // Volume
  .where(StockField.VOLUME.gte(500_000))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.RSI,
    StockField.RSI7,
    StockField.RSI_1W,
    StockField.CHANGE_PERCENT
  )
  .sortBy(StockField.RSI, true);

const results = await screener.get();
```

## MACD Momentum Screen

Using MACD components for trend identification:

```typescript
const screener = new StockScreener();

screener
  // MACD bullish crossover (MACD above signal)
  .where(StockField.MACD_MACD_12_26.gt(StockField.MACD_SIGNAL_12_26))

  // Positive MACD histogram (momentum building)
  .where(StockField.MACD_HIST.gt(0))

  // RSI confirmation
  .where(StockField.RSI.between(50, 70))

  // Volume
  .where(StockField.VOLUME.gte(500_000))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.MACD_MACD_12_26,
    StockField.MACD_SIGNAL_12_26,
    StockField.MACD_HIST,
    StockField.RSI,
    StockField.CHANGE_PERCENT
  )
  .sortBy(StockField.MACD_HIST, false);

const results = await screener.get();
```

## Bollinger Bands Squeeze

Identify volatility contractions (potential breakouts):

```typescript
const screener = new StockScreener();

screener
  // Price near Bollinger Bands basis (middle band)
  .where(StockField.PRICE.between(
    StockField.BB_BASIS.mult(0.98),
    StockField.BB_BASIS.mult(1.02)
  ))

  // ADX showing low volatility (squeeze)
  .where(StockField.ADX.lt(25))

  // Volume confirmation
  .where(StockField.VOLUME.gte(500_000))

  // RSI neutral
  .where(StockField.RSI.between(40, 60))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.BB_LOWER,
    StockField.BB_BASIS,
    StockField.BB_UPPER,
    StockField.ADX,
    StockField.RSI
  )
  .sortBy(StockField.ADX, true);
```

## Stochastic Oscillator Strategy

Using Stochastic %K and %D for overbought/oversold signals:

```typescript
const screener = new StockScreener();

screener
  // Stochastic oversold (bullish setup)
  .where(StockField.STOCH_K.lt(20))
  .where(StockField.STOCH_D.lt(20))

  // Stochastic %K crossing above %D (bullish signal)
  .where(StockField.STOCH_K.gt(StockField.STOCH_D))

  // RSI confirmation
  .where(StockField.RSI.between(30, 50))

  // Volume
  .where(StockField.VOLUME.gte(500_000))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.STOCH_K,
    StockField.STOCH_D,
    StockField.RSI,
    StockField.CHANGE_PERCENT
  )
  .sortBy(StockField.STOCH_K, true);
```

## ADX Trend Strength

Identify strong trends using Average Directional Index:

```typescript
const screener = new StockScreener();

screener
  // Strong trend (ADX > 25)
  .where(StockField.ADX.gt(25))

  // Bullish momentum
  .where(StockField.CHANGE_PERCENT.gt(1))

  // RSI confirming uptrend
  .where(StockField.RSI.between(55, 75))

  // MACD bullish
  .where(StockField.MACD_HIST.gt(0))

  // Volume
  .where(StockField.VOLUME.gte(500_000))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.ADX,
    StockField.RSI,
    StockField.MACD_HIST,
    StockField.CHANGE_PERCENT
  )
  .sortBy(StockField.ADX, false);
```

## Combined Technical Screen

Multiple technical indicators working together:

```typescript
async function comprehensiveTechnicalScreen() {
  const screener = new StockScreener();

  screener
    // RSI momentum (multiple timeframes)
    .where(StockField.RSI.between(50, 70))
    .where(StockField.RSI7.between(50, 75))

    // MACD bullish
    .where(StockField.MACD_MACD_12_26.gt(StockField.MACD_SIGNAL_12_26))
    .where(StockField.MACD_HIST.gt(0))

    // ADX showing trend strength
    .where(StockField.ADX.gt(20))

    // Stochastic not overbought
    .where(StockField.STOCH_K.lt(80))

    // Bollinger Bands position (not at extremes)
    .where(StockField.PRICE.between(
      StockField.BB_LOWER.mult(1.05),
      StockField.BB_UPPER.mult(0.95)
    ))

    // Volatility check
    .where(StockField.ATR.gt(0.5))  // Some volatility for trading

    // Volume
    .where(StockField.VOLUME.gte(500_000))

    // Price movement
    .where(StockField.CHANGE_PERCENT.gt(0))

    // Size
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.RSI,
      StockField.RSI7,
      StockField.MACD_HIST,
      StockField.ADX,
      StockField.STOCH_K,
      StockField.ATR,
      StockField.CHANGE_PERCENT,
      StockField.VOLUME
    )
    .sortBy(StockField.CHANGE_PERCENT, false);

  return await screener.get();
}
```

## Breakout Scanner

Stocks breaking out with multiple confirmations:

```typescript
screener
  // Strong price movement
  .where(StockField.CHANGE_PERCENT.gt(3))

  // Breaking above Bollinger Bands upper band
  .where(StockField.PRICE.gt(StockField.BB_UPPER.mult(0.98)))

  // RSI showing strength but not extreme
  .where(StockField.RSI.between(60, 80))

  // ADX showing trend
  .where(StockField.ADX.gt(25))

  // MACD bullish
  .where(StockField.MACD_HIST.gt(0))

  // Volume surge
  .where(StockField.VOLUME.gte(1_000_000))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE_PERCENT,
    StockField.RSI,
    StockField.ADX,
    StockField.VOLUME
  )
  .sortBy(StockField.CHANGE_PERCENT, false);
```

## Mean Reversion Strategy

Identify oversold conditions with multiple indicators:

```typescript
async function meanReversionScreen() {
  const screener = new StockScreener();

  screener
    // Oversold RSI
    .where(StockField.RSI.lt(30))
    .where(StockField.RSI7.lt(25))

    // Stochastic oversold
    .where(StockField.STOCH_K.lt(20))

    // Price near lower Bollinger Band
    .where(StockField.PRICE.between(
      StockField.BB_LOWER.mult(0.95),
      StockField.BB_LOWER.mult(1.05)
    ))

    // Not in free fall
    .where(StockField.CHANGE_PERCENT.gt(-5))

    // Adequate volume
    .where(StockField.VOLUME.gte(500_000))

    // Quality stocks
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.RSI,
      StockField.RSI7,
      StockField.STOCH_K,
      StockField.BB_LOWER,
      StockField.CHANGE_PERCENT,
      StockField.ATR
    )
    .sortBy(StockField.RSI, true);

  return await screener.get();
}
```

## Momentum Scanner with Confirmation

Strong momentum with multiple indicator confirmations:

```typescript
screener
  // Strong daily move
  .where(StockField.CHANGE_PERCENT.gt(3))

  // High volume
  .where(StockField.VOLUME.gte(1_000_000))

  // RSI showing strength (not overbought)
  .where(StockField.RSI.between(60, 75))

  // MACD bullish momentum
  .where(StockField.MACD_HIST.gt(0))

  // Stochastic confirmation
  .where(StockField.STOCH_K.gt(50))
  .where(StockField.STOCH_K.gt(StockField.STOCH_D))

  // ADX showing trend
  .where(StockField.ADX.gt(20))

  // Not penny stocks
  .where(StockField.PRICE.gt(10))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE_PERCENT,
    StockField.RSI,
    StockField.MACD_HIST,
    StockField.ADX,
    StockField.VOLUME
  )
  .sortBy(StockField.VOLUME, false);
```

## Real-Time Technical Monitor

Monitor multiple indicators in real-time:

```typescript
async function liveTechnicalMonitor() {
  const screener = new StockScreener();

  screener
    .where(StockField.RSI.between(50, 70))
    .where(StockField.MACD_HIST.gt(0))
    .where(StockField.ADX.gt(20))
    .where(StockField.VOLUME.gte(1_000_000))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.RSI,
      StockField.MACD_HIST,
      StockField.ADX,
      StockField.STOCH_K,
      StockField.CHANGE_PERCENT,
      StockField.VOLUME
    )
    .sortBy(StockField.CHANGE_PERCENT, false)
    .setRange(0, 15);

  for await (const data of screener.stream({ interval: 30000 })) {
    if (data) {
      console.clear();
      console.log('=== Multi-Indicator Technical Screener ===');
      console.log(`${new Date().toLocaleTimeString()}\n`);

      data.data.forEach((stock, i) => {
        console.log(
          `${(i + 1).toString().padStart(2)}. ` +
          `${stock.name.padEnd(25)} ` +
          `$${stock.close.toFixed(2).padStart(7)} ` +
          `RSI: ${stock.rsi.toFixed(1).padStart(5)} ` +
          `ADX: ${stock.adx.toFixed(1).padStart(5)} ` +
          `MACD: ${stock.macd_hist.toFixed(2).padStart(6)} ` +
          `Change: ${stock.change_abs > 0 ? '+' : ''}${stock.change_abs.toFixed(2)}%`
        );
      });
    }
  }
}
```

## Best Practices

1. **Multiple Timeframes**: Use RSI, RSI7, RSI_1W for multi-timeframe analysis
2. **Indicator Confirmation**: Combine 3+ indicators (RSI, MACD, Stochastic, ADX)
3. **Trend Identification**: Use ADX to confirm trend strength (ADX > 25 = strong trend)
4. **MACD Analysis**: Watch for histogram crossovers and MACD/signal line crosses
5. **Bollinger Bands**: Use for volatility and potential breakout/breakdown scenarios
6. **Stochastic Oscillator**: Great for overbought/oversold and divergence signals
7. **ATR for Risk**: Use ATR to gauge volatility and set appropriate stop losses
8. **Volume Verification**: Always check volume to confirm price movements
9. **Market Context**: Consider overall market trend and conditions
10. **Risk Management**: Use multiple indicators to reduce false signals

## Available Technical Indicator Fields

**RSI (Relative Strength Index):**
- `RSI` - Standard 14-period RSI
- `RSI7` - 7-period RSI (short-term)
- `RSI10` - 10-period RSI
- `RSI20` - 20-period RSI
- `RSI_1W` - Weekly RSI
- `RSI_1M` - Monthly RSI
- `RSI_120` - 2-hour RSI
- Various other timeframes available

**MACD (Moving Average Convergence Divergence):**
- `MACD_MACD_12_26` - MACD line
- `MACD_SIGNAL_12_26` - Signal line
- `MACD_HIST` - Histogram (MACD - Signal)
- Multiple timeframe variations

**Bollinger Bands:**
- `BB_UPPER` - Upper band
- `BB_BASIS` - Middle band (SMA)
- `BB_LOWER` - Lower band
- `BB_UPPER_50`, `BB_BASIS_50`, `BB_LOWER_50` - 50-period variations

**Stochastic Oscillator:**
- `STOCH_K` - %K line
- `STOCH_D` - %D line (signal)
- `STOCHASTIC_PERCENTK_14_3_3` - Standard settings
- `STOCHASTIC_PERCENTD_14_3_3` - Standard %D
- `STOCHASTIC_RSI_FAST_3_3_14_14` - Stochastic RSI fast
- `STOCHASTIC_RSI_SLOW_3_3_14_14` - Stochastic RSI slow

**ADX (Average Directional Index):**
- `ADX` - Standard ADX
- `ADX_20`, `ADX_50`, `ADX_100` - Different period settings
- `ADX_1W`, `ADX_1M` - Weekly/monthly timeframes

**Volatility:**
- `ATR` - Average True Range
- `ATR_14` - 14-period ATR

**Price & Volume:**
- `PRICE`, `CHANGE`, `CHANGE_PERCENT`
- `VOLUME`, `VOLUME_1W`, `VOLUME_1M`

With 3,522 total fields available, you can create highly sophisticated technical analysis screens using multiple indicators and timeframes.

## Next Steps

- [Value Investing](value-investing.md) - Fundamental analysis
- [Growth Stocks](growth-stocks.md) - High-growth companies
- [Market Scanning](market-scanning.md) - Daily scans
