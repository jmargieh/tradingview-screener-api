# Dividend Investing

Income strategies using dividend-paying stocks.

## Overview

Dividend investing focuses on generating passive income through regular dividend payments while maintaining capital appreciation potential.

## High Dividend Yield

### Basic Dividend Screen

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.DIVIDEND_YIELD_FWD.gte(4))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lte(70))  // Sustainable
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.DIVIDEND_PAYOUT_RATIO_TTM
  )
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

const results = await screener.get();
console.table(results.data);
```

## Dividend Aristocrats

Companies with long dividend growth history:

```typescript
async function dividendAristocrats() {
  const screener = new StockScreener();

  screener
    // Strong yield
    .where(StockField.DIVIDEND_YIELD_FWD.gte(2.5))

    // Consistent growth
    .where(StockField.DIVIDEND_GROWTH_RATE_5Y.gt(5))

    // Sustainable payout
    .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.between(30, 65))

    // Financial strength
    .where(StockField.CURRENT_RATIO_MRQ.gt(1.5))
    .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(1))

    // Profitability
    .where(StockField.NET_INCOME_TTM.gt(0))
    .where(StockField.RETURN_ON_EQUITY_TTM.gt(12))

    // Size
    .where(StockField.MARKET_CAPITALIZATION.gt(5e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.DIVIDEND_GROWTH_RATE_5Y,
      StockField.DIVIDEND_PAYOUT_RATIO_TTM,
      StockField.CURRENT_RATIO_MRQ
    )
    .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

  return await screener.get();
}
```

## Dividend Growth

### High Growth Dividends

```typescript
screener
  .where(StockField.DIVIDEND_YIELD_FWD.gte(2))
  .where(StockField.DIVIDEND_GROWTH_RATE_5Y.gt(10))
  .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lt(60))
  .where(StockField.EARNINGS_GROWTH_TTM.gt(5))
  .select(
    StockField.NAME,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.DIVIDEND_GROWTH_RATE_5Y,
    StockField.DIVIDEND_PAYOUT_RATIO_TTM
  )
  .sortBy(StockField.DIVIDEND_GROWTH_RATE_5Y, false);
```

## Safe Dividends

Financial strength and sustainability:

```typescript
async function safeDividendScreen() {
  const screener = new StockScreener();

  screener
    // Attractive yield
    .where(StockField.DIVIDEND_YIELD_FWD.between(3, 8))

    // Conservative payout
    .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lte(60))

    // Strong balance sheet
    .where(StockField.CURRENT_RATIO_MRQ.gt(1.5))
    .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(1))
    .where(StockField.INTEREST_COVERAGE_TTM.gt(3))

    // Profitable
    .where(StockField.NET_INCOME_TTM.gt(0))
    .where(StockField.OPERATING_MARGIN_TTM.gt(10))

    // Positive cash flow
    .where(StockField.FREE_CASH_FLOW_TTM.gt(0))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.DIVIDEND_PAYOUT_RATIO_TTM,
      StockField.DEBT_TO_EQUITY_RATIO_MRQ,
      StockField.FREE_CASH_FLOW_TTM
    )
    .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

  return await screener.get();
}
```

## Monthly Dividend Payers

```typescript
screener
  .where(StockField.DIVIDEND_FREQUENCY.eq('Monthly'))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(5))
  .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lte(80))
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false);
```

## Sector-Specific Dividend Strategies

### REIT Income

Real Estate Investment Trusts:

```typescript
screener
  .where(StockField.SECTOR.eq('Real Estate'))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(4))
  .where(StockField.FUNDS_FROM_OPERATIONS_TTM.gt(0))
  .where(StockField.PAYOUT_RATIO_FFO.lte(85))
  .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(2))
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false);
```

### Utility Dividends

```typescript
screener
  .where(StockField.SECTOR.eq('Utilities'))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(3.5))
  .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lte(70))
  .where(StockField.CURRENT_RATIO_MRQ.gt(1))
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false);
```

## Dividend Value Combo

Combining dividends with value metrics:

```typescript
async function dividendValueScreen() {
  const screener = new StockScreener();

  screener
    // Dividend
    .where(StockField.DIVIDEND_YIELD_FWD.gte(3))
    .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lte(65))

    // Value
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
    .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))

    // Quality
    .where(StockField.RETURN_ON_EQUITY_TTM.gt(12))
    .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(1))

    // Size
    .where(StockField.MARKET_CAPITALIZATION.gt(2e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.RETURN_ON_EQUITY_TTM
    )
    .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

  const results = await screener.get();

  // Calculate dividend score
  const scored = results.data.map(stock => {
    let score = 0;

    if (stock.dividend_yield_fwd > 4) score += 2;
    if (stock.price_earnings_ttm < 12) score += 2;
    if (stock.return_on_equity_ttm > 15) score += 2;

    return { ...stock, dividendScore: score };
  });

  return scored.sort((a, b) => b.dividendScore - a.dividendScore);
}
```

## Dividend Portfolio Builder

```typescript
async function buildDividendPortfolio(targetYield: number = 4) {
  const screener = new StockScreener();

  screener
    .where(StockField.DIVIDEND_YIELD_FWD.gte(targetYield))
    .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lte(70))
    .where(StockField.CURRENT_RATIO_MRQ.gt(1.2))
    .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(1.5))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .select(
      StockField.NAME,
      StockField.SECTOR,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.DIVIDEND_PAYOUT_RATIO_TTM,
      StockField.MARKET_CAPITALIZATION
    )
    .sortBy(StockField.DIVIDEND_YIELD_FWD, false)
    .setRange(0, 100);

  const results = await screener.get();

  // Diversify by sector
  const bySector = new Map<string, any[]>();

  results.data.forEach(stock => {
    const sector = stock.sector;
    if (!bySector.has(sector)) {
      bySector.set(sector, []);
    }
    bySector.get(sector)!.push(stock);
  });

  // Select top 2 from each sector
  const portfolio = [];
  for (const [sector, stocks] of bySector.entries()) {
    portfolio.push(...stocks.slice(0, 2));
  }

  // Calculate portfolio yield
  const avgYield = portfolio.reduce((sum, s) => sum + s.dividend_yield_fwd, 0) / portfolio.length;

  return {
    stocks: portfolio,
    count: portfolio.length,
    averageYield: avgYield.toFixed(2) + '%',
    sectors: bySector.size,
  };
}

// Usage
const portfolio = await buildDividendPortfolio(4);
console.log(`Portfolio: ${portfolio.count} stocks`);
console.log(`Average Yield: ${portfolio.averageYield}`);
console.log(`Sectors: ${portfolio.sectors}`);
console.table(portfolio.stocks);
```

## Ex-Dividend Calendar

Find stocks going ex-dividend soon:

```typescript
async function upcomingExDividend() {
  const screener = new StockScreener();

  screener
    .where(StockField.DIVIDEND_YIELD_FWD.gte(3))
    .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lte(75))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.DIVIDEND_AMOUNT_RECENT,
      StockField.EX_DIVIDEND_DATE
    )
    .sortBy(StockField.EX_DIVIDEND_DATE, true);

  const results = await screener.get();

  // Filter for next 30 days
  const upcoming = results.data.filter(stock => {
    const exDate = new Date(stock.ex_dividend_date);
    const today = new Date();
    const diff = (exDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 && diff <= 30;
  });

  return upcoming;
}
```

## Dividend Monitor

Track dividend portfolio:

```typescript
async function monitorDividendStocks(symbols: string[]) {
  const screener = new StockScreener();

  screener
    .where(StockField.SYMBOL.isin(symbols))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.CHANGE_PERCENT,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.EX_DIVIDEND_DATE
    );

  for await (const data of screener.stream({ interval: 60000 })) {
    if (data) {
      console.clear();
      console.log('=== Dividend Portfolio Monitor ===');
      console.log(`Updated: ${new Date().toLocaleTimeString()}\n`);

      let totalValue = 0;
      let totalYield = 0;

      data.data.forEach((stock, i) => {
        const change = stock.change_abs > 0 ? `+${stock.change_abs}%` : `${stock.change_abs}%`;
        console.log(
          `${(i + 1).toString().padStart(2)}. ${stock.name.padEnd(25)} ` +
          `$${stock.close.toFixed(2).padStart(7)} ` +
          `${change.padStart(7)} ` +
          `Yield: ${stock.dividend_yield_fwd.toFixed(2)}%`
        );

        totalValue += stock.close;
        totalYield += stock.dividend_yield_fwd;
      });

      console.log(`\nAverage Yield: ${(totalYield / data.data.length).toFixed(2)}%`);
    }
  }
}

// Usage
await monitorDividendStocks(['JNJ', 'PG', 'KO', 'PEP', 'MCD']);
```

## Best Practices

1. **Diversification**: Spread across sectors
2. **Payout Ratio**: Keep below 70% for safety
3. **Growth Rate**: Look for growing dividends
4. **Financial Health**: Check debt and cash flow
5. **Yield Trap**: Avoid extremely high yields (>10%)
6. **Reinvestment**: Consider DRIP programs

## Next Steps

- [Value Investing](value-investing.md) - Finding undervalued stocks
- [Market Scanning](market-scanning.md) - Daily scans
- [Basic Usage](../basic-usage.md) - Core concepts
