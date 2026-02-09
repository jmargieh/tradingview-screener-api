# Technical Analysis

Using technical indicators and momentum for trading decisions.

## Overview

Technical analysis uses price patterns, indicators, and momentum to identify trading opportunities.

## RSI Strategy

### Oversold Stocks

Find oversold stocks ready for bounce:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.RSI.lt(30))  // Oversold
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.VOLUME.gte(500_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.RSI,
    StockField.CHANGE_PERCENT
  )
  .sortBy(StockField.RSI, true);

const results = await screener.get();
```

### RSI Sweet Spot

RSI between 50-70 (bullish but not overbought):

```typescript
screener
  .where(StockField.RSI.between(50, 70))
  .where(StockField.PRICE.above(StockField.MOVING_AVERAGE_50))
  .where(StockField.VOLUME.gte(1_000_000))
  .sortBy(StockField.CHANGE_PERCENT, false);
```

## Moving Average Strategies

### Golden Cross

Price above both 50-day and 200-day MA:

```typescript
const screener = new StockScreener();

screener
  .where(StockField.PRICE.above(StockField.MOVING_AVERAGE_50))
  .where(StockField.PRICE.above(StockField.MOVING_AVERAGE_200))
  .where(StockField.MOVING_AVERAGE_50.above(StockField.MOVING_AVERAGE_200))
  .where(StockField.VOLUME.gte(500_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.MOVING_AVERAGE_50,
    StockField.MOVING_AVERAGE_200,
    StockField.CHANGE_PERCENT
  )
  .sortBy(StockField.CHANGE_PERCENT, false);
```

### Pullback to MA

Price pulling back to moving average (buying opportunity):

```typescript
screener
  .where(StockField.PRICE.above(StockField.MOVING_AVERAGE_200))
  .where(StockField.PRICE.near(StockField.MOVING_AVERAGE_50, 0.02))  // Within 2%
  .where(StockField.RSI.between(40, 60))
  .sortBy(StockField.VOLUME, false);
```

## Momentum Screening

### Strong Momentum

Stocks with powerful upward momentum:

```typescript
const screener = new StockScreener();

screener
  .where(StockField.CHANGE_PERCENT.gt(3))  // Today
  .where(StockField.CHANGE_PERCENT_1W.gt(7))  // 1 week
  .where(StockField.CHANGE_PERCENT_1M.gt(15))  // 1 month
  .where(StockField.VOLUME.gte(1_000_000))
  .where(StockField.RSI.lt(70))  // Not overbought yet
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE_PERCENT,
    StockField.CHANGE_PERCENT_1W,
    StockField.CHANGE_PERCENT_1M,
    StockField.RSI
  )
  .sortBy(StockField.CHANGE_PERCENT_1M, false);
```

### Volume Breakout

High volume with price increase:

```typescript
screener
  .where(StockField.CHANGE_PERCENT.gt(2))
  .where(StockField.VOLUME.gte(StockField.AVERAGE_VOLUME_10D.multiply(2)))  // 2x avg volume
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))
  .sortBy(StockField.VOLUME, false);
```

## MACD Strategy

### MACD Crossover

Bullish MACD crossover:

```typescript
const screener = new StockScreener();

screener
  .where(StockField.MACD_LEVEL.above(StockField.MACD_SIGNAL))
  .where(StockField.MACD_LEVEL.gt(0))
  .where(StockField.PRICE.above(StockField.MOVING_AVERAGE_50))
  .where(StockField.VOLUME.gte(500_000))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.MACD_LEVEL,
    StockField.MACD_SIGNAL,
    StockField.CHANGE_PERCENT
  )
  .sortBy(StockField.CHANGE_PERCENT, false);
```

## Bollinger Bands

### Bollinger Squeeze

Low volatility, potential breakout:

```typescript
screener
  .where(StockField.BOLLINGER_BAND_WIDTH.lt(0.05))  // Tight bands
  .where(StockField.PRICE.between(
    StockField.BOLLINGER_LOWER,
    StockField.BOLLINGER_UPPER
  ))
  .where(StockField.VOLUME.gte(500_000))
  .sortBy(StockField.BOLLINGER_BAND_WIDTH, true);
```

### Bollinger Bounce

Price at lower band (oversold):

```typescript
screener
  .where(StockField.PRICE.near(StockField.BOLLINGER_LOWER, 0.01))
  .where(StockField.RSI.lt(40))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .sortBy(StockField.RSI, true);
```

## Combined Technical Screen

Multiple technical indicators:

```typescript
async function comprehensiveTechnicalScreen() {
  const screener = new StockScreener();

  screener
    // Trend
    .where(StockField.PRICE.above(StockField.MOVING_AVERAGE_50))
    .where(StockField.MOVING_AVERAGE_50.above(StockField.MOVING_AVERAGE_200))

    // Momentum
    .where(StockField.RSI.between(50, 70))
    .where(StockField.CHANGE_PERCENT_1M.gt(10))

    // MACD
    .where(StockField.MACD_LEVEL.above(StockField.MACD_SIGNAL))

    // Volume
    .where(StockField.VOLUME.gte(500_000))
    .where(StockField.RELATIVE_VOLUME_10D.gt(1.2))  // Above average

    // Size
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.RSI,
      StockField.MACD_LEVEL,
      StockField.CHANGE_PERCENT_1M,
      StockField.RELATIVE_VOLUME_10D
    )
    .sortBy(StockField.CHANGE_PERCENT_1M, false);

  return await screener.get();
}
```

## Breakout Scanner

### New 52-Week Highs

```typescript
screener
  .where(StockField.PRICE.gte(StockField.PRICE_52W_HIGH.multiply(0.98)))  // Within 2% of high
  .where(StockField.VOLUME.gte(StockField.AVERAGE_VOLUME_10D.multiply(1.5)))
  .where(StockField.RSI.lt(75))
  .sortBy(StockField.CHANGE_PERCENT, false);
```

### Support Breakout

Price breaking above resistance:

```typescript
screener
  .where(StockField.PRICE.above(StockField.MOVING_AVERAGE_200))
  .where(StockField.CHANGE_PERCENT.gt(5))
  .where(StockField.VOLUME.gte(StockField.AVERAGE_VOLUME_10D.multiply(2)))
  .where(StockField.ATR.gt(0))  // Volatility present
  .sortBy(StockField.VOLUME, false);
```

## Swing Trading Setup

### Setup Scanner

```typescript
async function swingTradingSetup() {
  const screener = new StockScreener();

  screener
    // Uptrend
    .where(StockField.PRICE.above(StockField.MOVING_AVERAGE_50))
    .where(StockField.MOVING_AVERAGE_50.above(StockField.MOVING_AVERAGE_200))

    // Pullback
    .where(StockField.CHANGE_PERCENT.between(-3, 0))

    // Technical support
    .where(StockField.RSI.between(35, 50))
    .where(StockField.PRICE.near(StockField.MOVING_AVERAGE_20, 0.03))

    // Volume confirmation
    .where(StockField.VOLUME.gte(500_000))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.RSI,
      StockField.CHANGE_PERCENT,
      StockField.MOVING_AVERAGE_50
    )
    .sortBy(StockField.RSI, true);

  return await screener.get();
}
```

## Day Trading Scanner

### Gap and Go

Stocks gapping up with volume:

```typescript
screener
  .where(StockField.GAP_PERCENT.gt(3))
  .where(StockField.VOLUME.gte(1_000_000))
  .where(StockField.PRICE.between(5, 50))
  .where(StockField.RELATIVE_VOLUME_10D.gt(2))
  .sortBy(StockField.GAP_PERCENT, false);
```

### Intraday Momentum

```typescript
screener
  .where(StockField.CHANGE_PERCENT.gt(5))
  .where(StockField.VOLUME.gte(StockField.AVERAGE_VOLUME_10D.multiply(3)))
  .where(StockField.RSI.between(60, 80))
  .where(StockField.PRICE.gt(10))
  .sortBy(StockField.RELATIVE_VOLUME_10D, false);
```

## Real-Time Technical Monitor

```typescript
async function liveT echnicalMonitor() {
  const screener = new StockScreener();

  screener
    .where(StockField.RSI.between(50, 70))
    .where(StockField.PRICE.above(StockField.MOVING_AVERAGE_50))
    .where(StockField.VOLUME.gte(1_000_000))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.RSI,
      StockField.CHANGE_PERCENT,
      StockField.VOLUME
    )
    .sortBy(StockField.CHANGE_PERCENT, false)
    .setRange(0, 15);

  for await (const data of screener.stream({ interval: 30000 })) {
    if (data) {
      console.clear();
      console.log('=== Technical Screener ===');
      console.log(`${new Date().toLocaleTimeString()}\n`);

      data.data.forEach((stock, i) => {
        const signal = stock.rsi > 65 ? '🔥' : stock.rsi > 55 ? '📈' : '✓';
        console.log(
          `${signal} ${(i + 1).toString().padStart(2)}. ` +
          `${stock.name.padEnd(25)} ` +
          `$${stock.close.toFixed(2).padStart(7)} ` +
          `RSI: ${stock.rsi.toFixed(1).padStart(5)} ` +
          `Change: ${stock.change_abs > 0 ? '+' : ''}${stock.change_abs.toFixed(2)}%`
        );
      });
    }
  }
}
```

## Best Practices

1. **Multiple Confirmations**: Use 2-3 indicators together
2. **Volume Verification**: Always check volume
3. **Risk Management**: Set stop losses based on ATR
4. **Timeframe Alignment**: Check multiple timeframes
5. **Market Context**: Consider overall market trend

## Next Steps

- [Value Investing](value-investing.md) - Fundamental analysis
- [Growth Stocks](growth-stocks.md) - High-growth companies
- [Market Scanning](market-scanning.md) - Daily scans
