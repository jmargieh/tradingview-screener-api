# Crypto Trading

Cryptocurrency screening strategies.

## Overview

Screen cryptocurrencies by market cap, volume, price movement, and technical indicators.

## Basic Crypto Screening

### Large Cap Crypto

```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

const crypto = new CryptoScreener();

crypto
  .where(CryptoField.MARKET_CAP.gt(1_000_000_000))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(100_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT,
    CryptoField.MARKET_CAP,
    CryptoField.VOLUME_24H_IN_USD
  )
  .sortBy(CryptoField.MARKET_CAP, false);

const results = await crypto.get();
console.table(results.data);
```

## Top Gainers & Losers

### Biggest Gainers

```typescript
crypto
  .where(CryptoField.MARKET_CAP.gt(100_000_000))
  .where(CryptoField.CHANGE_PERCENT.gt(10))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(10_000_000))
  .sortBy(CryptoField.CHANGE_PERCENT, false)
  .setRange(0, 20);
```

### Biggest Losers

```typescript
crypto
  .where(CryptoField.MARKET_CAP.gt(100_000_000))
  .where(CryptoField.CHANGE_PERCENT.lt(-10))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(10_000_000))
  .sortBy(CryptoField.CHANGE_PERCENT, true)
  .setRange(0, 20);
```

## Volume Analysis

### High Volume Breakouts

```typescript
crypto
  .where(CryptoField.VOLUME_24H_IN_USD.gte(50_000_000))
  .where(CryptoField.CHANGE_PERCENT.gt(5))
  .where(CryptoField.MARKET_CAP.gt(500_000_000))
  .sortBy(CryptoField.VOLUME_24H_IN_USD, false);
```

### Volume Surge

Coins with unusual volume:

```typescript
async function volumeSurge() {
  const crypto = new CryptoScreener();

  crypto
    .where(CryptoField.VOLUME_24H_IN_USD.gte(10_000_000))
    .where(CryptoField.MARKET_CAP.gt(100_000_000))
    .select(
      CryptoField.NAME,
      CryptoField.PRICE,
      CryptoField.CHANGE_PERCENT,
      CryptoField.VOLUME_24H_IN_USD
    )
    .sortBy(CryptoField.VOLUME_24H_IN_USD, false);

  return await crypto.get();
}
```

## Market Cap Categories

### Mid-Cap Gems

```typescript
crypto
  .where(CryptoField.MARKET_CAP.between(100_000_000, 1_000_000_000))
  .where(CryptoField.CHANGE_PERCENT_1W.gt(15))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(5_000_000))
  .sortBy(CryptoField.CHANGE_PERCENT_1W, false);
```

### Small-Cap High Risk

```typescript
crypto
  .where(CryptoField.MARKET_CAP.between(10_000_000, 100_000_000))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(1_000_000))
  .where(CryptoField.CHANGE_PERCENT.gt(20))
  .sortBy(CryptoField.CHANGE_PERCENT, false);
```

## Momentum Strategies

### Strong Uptrend

```typescript
async function cryptoMomentum() {
  const crypto = new CryptoScreener();

  crypto
    .where(CryptoField.CHANGE_PERCENT.gt(3))
    .where(CryptoField.CHANGE_PERCENT_1W.gt(10))
    .where(CryptoField.CHANGE_PERCENT_1M.gt(20))
    .where(CryptoField.MARKET_CAP.gt(100_000_000))
    .where(CryptoField.VOLUME_24H_IN_USD.gte(10_000_000))
    .select(
      CryptoField.NAME,
      CryptoField.PRICE,
      CryptoField.CHANGE_PERCENT,
      CryptoField.CHANGE_PERCENT_1W,
      CryptoField.CHANGE_PERCENT_1M
    )
    .sortBy(CryptoField.CHANGE_PERCENT_1M, false);

  return await crypto.get();
}
```

## Oversold/Overbought

### Oversold Cryptos

Potential bounce candidates:

```typescript
crypto
  .where(CryptoField.RSI.lt(30))
  .where(CryptoField.MARKET_CAP.gt(100_000_000))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(5_000_000))
  .sortBy(CryptoField.RSI, true);
```

### Overbought Warning

```typescript
crypto
  .where(CryptoField.RSI.gt(70))
  .where(CryptoField.MARKET_CAP.gt(500_000_000))
  .where(CryptoField.CHANGE_PERCENT.gt(5))
  .sortBy(CryptoField.RSI, false);
```

## Price Action Screening

### Near All-Time Highs

```typescript
crypto
  .where(CryptoField.PRICE.gte(CryptoField.PRICE_ALL_TIME_HIGH.multiply(0.95)))
  .where(CryptoField.MARKET_CAP.gt(100_000_000))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(10_000_000))
  .sortBy(CryptoField.CHANGE_PERCENT, false);
```

### Recovering from Lows

```typescript
crypto
  .where(CryptoField.PRICE.lte(CryptoField.PRICE_52W_LOW.multiply(1.2)))
  .where(CryptoField.CHANGE_PERCENT_1W.gt(10))
  .where(CryptoField.MARKET_CAP.gt(50_000_000))
  .sortBy(CryptoField.CHANGE_PERCENT_1W, false);
```

## DeFi Tokens

```typescript
async function defiScreen() {
  const crypto = new CryptoScreener();

  crypto
    .where(CryptoField.CATEGORY.eq('DeFi'))
    .where(CryptoField.MARKET_CAP.gt(50_000_000))
    .where(CryptoField.VOLUME_24H_IN_USD.gte(5_000_000))
    .select(
      CryptoField.NAME,
      CryptoField.PRICE,
      CryptoField.CHANGE_PERCENT,
      CryptoField.MARKET_CAP,
      CryptoField.VOLUME_24H_IN_USD
    )
    .sortBy(CryptoField.MARKET_CAP, false);

  return await crypto.get();
}
```

## Live Crypto Monitor

Real-time crypto tracking:

```typescript
async function liveCryptoMonitor() {
  const crypto = new CryptoScreener();

  crypto
    .where(CryptoField.MARKET_CAP.gt(1_000_000_000))
    .select(
      CryptoField.NAME,
      CryptoField.PRICE,
      CryptoField.CHANGE_PERCENT,
      CryptoField.VOLUME_24H_IN_USD
    )
    .sortBy(CryptoField.MARKET_CAP, false)
    .setRange(0, 15);

  for await (const data of crypto.stream({ interval: 30000 })) {
    if (data) {
      console.clear();
      console.log('=== Live Crypto Prices ===');
      console.log(`Updated: ${new Date().toLocaleTimeString()}\n`);

      data.data.forEach((coin, i) => {
        const emoji = coin.change_abs > 5 ? '🚀' :
                      coin.change_abs > 0 ? '📈' :
                      coin.change_abs > -5 ? '📉' : '💥';

        const change = coin.change_abs > 0 ? `+${coin.change_abs}%` : `${coin.change_abs}%`;
        const volume = (coin.volume_24h / 1e6).toFixed(1);

        console.log(
          `${emoji} ${(i + 1).toString().padStart(2)}. ` +
          `${coin.name.padEnd(20)} ` +
          `$${coin.close.toFixed(2).padStart(10)} ` +
          `${change.padStart(8)} ` +
          `Vol: $${volume}M`
        );
      });
    }
  }
}
```

## Volatility Screening

### High Volatility

```typescript
crypto
  .where(CryptoField.VOLATILITY_1M.gt(0.5))
  .where(CryptoField.MARKET_CAP.gt(100_000_000))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(10_000_000))
  .sortBy(CryptoField.VOLATILITY_1M, false);
```

### Low Volatility (Stablecoins excluded)

```typescript
crypto
  .where(CryptoField.VOLATILITY_1M.lt(0.2))
  .where(CryptoField.MARKET_CAP.gt(500_000_000))
  .where(CryptoField.CATEGORY.ne('Stablecoin'))
  .sortBy(CryptoField.VOLATILITY_1M, true);
```

## Multi-Timeframe Analysis

```typescript
async function multiTimeframeAnalysis() {
  const crypto = new CryptoScreener();

  crypto
    .where(CryptoField.MARKET_CAP.gt(100_000_000))
    .select(
      CryptoField.NAME,
      CryptoField.PRICE,
      CryptoField.CHANGE_PERCENT,
      CryptoField.CHANGE_PERCENT_1W,
      CryptoField.CHANGE_PERCENT_1M,
      CryptoField.CHANGE_PERCENT_3M
    )
    .sortBy(CryptoField.CHANGE_PERCENT_1M, false);

  const results = await crypto.get();

  // Find consistent performers
  const consistent = results.data.filter(coin =>
    coin.change_percent > 0 &&
    coin.change_percent_1w > 0 &&
    coin.change_percent_1m > 0 &&
    coin.change_percent_3m > 0
  );

  return {
    all: results.data,
    consistent,
  };
}
```

## Crypto Alert System

```typescript
async function cryptoAlerts(thresholds: {
  gainAlert: number;
  lossAlert: number;
}) {
  const crypto = new CryptoScreener();

  crypto
    .where(CryptoField.MARKET_CAP.gt(100_000_000))
    .select(
      CryptoField.NAME,
      CryptoField.PRICE,
      CryptoField.CHANGE_PERCENT,
      CryptoField.VOLUME_24H_IN_USD
    );

  for await (const data of crypto.stream({ interval: 60000 })) {
    if (data) {
      const bigMovers = data.data.filter(
        coin => Math.abs(coin.change_abs) >= thresholds.gainAlert
      );

      if (bigMovers.length > 0) {
        console.log(`\n🚨 ALERT ${new Date().toLocaleTimeString()}`);

        bigMovers.forEach(coin => {
          const direction = coin.change_abs > 0 ? '📈 UP' : '📉 DOWN';
          console.log(
            `${direction}: ${coin.name} ` +
            `${coin.change_abs > 0 ? '+' : ''}${coin.change_abs.toFixed(2)}% ` +
            `@ $${coin.close.toFixed(2)}`
          );
        });
      }
    }
  }
}

// Usage: Alert on 10%+ moves
await cryptoAlerts({ gainAlert: 10, lossAlert: 10 });
```

## Portfolio Tracker

```typescript
async function trackCryptoPortfolio(holdings: Record<string, number>) {
  const symbols = Object.keys(holdings);
  const crypto = new CryptoScreener();

  crypto
    .where(CryptoField.SYMBOL.isin(symbols))
    .select(
      CryptoField.NAME,
      CryptoField.PRICE,
      CryptoField.CHANGE_PERCENT,
      CryptoField.MARKET_CAP
    );

  for await (const data of crypto.stream({ interval: 60000 })) {
    if (data) {
      console.clear();
      console.log('=== Crypto Portfolio ===');
      console.log(`Updated: ${new Date().toLocaleTimeString()}\n`);

      let totalValue = 0;
      let totalChange = 0;

      data.data.forEach(coin => {
        const amount = holdings[coin.symbol];
        const value = coin.close * amount;
        const dayPnL = value * (coin.change_abs / 100);

        totalValue += value;
        totalChange += dayPnL;

        console.log(
          `${coin.name.padEnd(15)} ` +
          `${amount.toString().padStart(8)} @ $${coin.close.toFixed(2).padStart(10)} ` +
          `= $${value.toFixed(2).padStart(12)} ` +
          `(${coin.change_abs > 0 ? '+' : ''}${coin.change_abs.toFixed(2)}%)`
        );
      });

      console.log('\n' + '='.repeat(70));
      console.log(
        `Total Value: $${totalValue.toFixed(2)} ` +
        `Day P/L: ${totalChange > 0 ? '+' : ''}$${totalChange.toFixed(2)} ` +
        `(${(totalChange / totalValue * 100).toFixed(2)}%)`
      );
    }
  }
}

// Usage
await trackCryptoPortfolio({
  'BTC': 0.5,
  'ETH': 5.0,
  'SOL': 100,
});
```

## Best Practices

1. **High Volatility**: Expect large price swings
2. **24/7 Market**: No trading hours, continuous monitoring
3. **Liquidity**: Check 24h volume before trading
4. **Market Cap**: Larger caps are generally safer
5. **Stop Losses**: Essential due to volatility
6. **Diversification**: Don't overconcentrate

## Next Steps

- [Technical Analysis](technical-analysis.md) - Technical indicators
- [Market Scanning](market-scanning.md) - Daily market scans
- [Basic Usage](../basic-usage.md) - Core concepts
