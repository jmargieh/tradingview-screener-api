# Dividend Investing

Income strategies using dividend-paying stocks with comprehensive analysis.

## Overview

Dividend investing focuses on generating passive income through regular dividend payments while maintaining capital appreciation potential. This guide leverages the **3,522 available fields** in the TradingView Screener API to analyze dividend sustainability, payout ratios, growth history, and financial strength.

## Sustainable High-Yield Screen

Find high-yield dividends with strong sustainability metrics:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  // Strong yield
  .where(StockField.DIVIDEND_YIELD_FWD.gte(4))

  // Sustainable payout ratio
  .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.between(25, 75))

  // Profitability
  .where(StockField.NET_INCOME_TTM.gt(0))
  .where(StockField.RETURN_ON_EQUITY_FY.gt(10))

  // Cash flow coverage
  .where(StockField.FREE_CASH_FLOW_TTM.gt(0))

  // Financial health
  .where(StockField.DEBT_TO_EQUITY_FY.lt(1.5))
  .where(StockField.CURRENT_RATIO_FQ.gt(1.2))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM,
    StockField.DIVIDEND_PAYOUT_RATIO_TTM,
    StockField.RETURN_ON_EQUITY_FY,
    StockField.DEBT_TO_EQUITY_FY,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

const results = await screener.get();
console.table(results.data);
```

## Dividend Growth Aristocrats

Companies with strong dividend growth and continuous payments:

```typescript
async function dividendGrowthScreen() {
  const screener = new StockScreener();

  screener
    // Attractive but sustainable yield
    .where(StockField.DIVIDEND_YIELD_FWD.between(2.5, 6))

    // Continuous dividend growth
    .where(StockField.CONTINUOUS_DIVIDEND_GROWTH.gte(10))

    // Reasonable payout ratio (room to grow)
    .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lt(70))

    // Strong profitability
    .where(StockField.RETURN_ON_EQUITY_FY.gt(12))
    .where(StockField.NET_MARGIN_FY.gt(8))

    // Positive revenue growth
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(0))

    // Size and liquidity
    .where(StockField.MARKET_CAPITALIZATION.gt(5e9))
    .where(StockField.VOLUME.gt(500000))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.CONTINUOUS_DIVIDEND_GROWTH,
      StockField.DIVIDEND_PAYOUT_RATIO_TTM,
      StockField.RETURN_ON_EQUITY_FY,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.MARKET_CAPITALIZATION
    )
    .sortBy(StockField.CONTINUOUS_DIVIDEND_GROWTH, false);

  return await screener.get();
}
```

## Safe Dividends with Quality

Financial strength and dividend sustainability:

```typescript
async function safeDividendScreen() {
  const screener = new StockScreener();

  screener
    // Attractive yield
    .where(StockField.DIVIDEND_YIELD_FWD.between(3, 8))

    // Safe payout ratio
    .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lt(80))

    // Strong profitability
    .where(StockField.NET_INCOME_TTM.gt(0))
    .where(StockField.RETURN_ON_EQUITY_FY.gt(12))
    .where(StockField.OPERATING_MARGIN_FY.gt(10))

    // Strong free cash flow
    .where(StockField.FREE_CASH_FLOW_TTM.gt(0))
    .where(StockField.FREE_CASH_FLOW_MARGIN_TTM.gt(8))

    // Low debt
    .where(StockField.DEBT_TO_EQUITY_FY.lt(1))

    // Good liquidity
    .where(StockField.CURRENT_RATIO_FQ.gt(1.5))

    // Positive revenue growth
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(-5))

    // Large cap for stability
    .where(StockField.MARKET_CAPITALIZATION.gt(2e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.DIVIDEND_PAYOUT_RATIO_TTM,
      StockField.RETURN_ON_EQUITY_FY,
      StockField.FREE_CASH_FLOW_MARGIN_TTM,
      StockField.DEBT_TO_EQUITY_FY,
      StockField.CURRENT_RATIO_FQ
    )
    .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

  return await screener.get();
}
```

## Dividend Value Combo

Combining dividends with value and quality metrics:

```typescript
async function dividendValueScreen() {
  const screener = new StockScreener();

  screener
    // Dividend
    .where(StockField.DIVIDEND_YIELD_FWD.gte(3))
    .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lt(75))

    // Value
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
    .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))
    .where(StockField.PRICE_TO_FREE_CASH_FLOW_TTM.lt(18))

    // Quality and profitability
    .where(StockField.RETURN_ON_EQUITY_FY.gt(12))
    .where(StockField.OPERATING_MARGIN_FY.gt(10))
    .where(StockField.NET_INCOME_TTM.gt(0))

    // Financial health
    .where(StockField.DEBT_TO_EQUITY_FY.lt(1))
    .where(StockField.CURRENT_RATIO_FQ.gt(1.5))

    // Size
    .where(StockField.MARKET_CAPITALIZATION.gt(2e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.DIVIDEND_PAYOUT_RATIO_TTM,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.RETURN_ON_EQUITY_FY,
      StockField.OPERATING_MARGIN_FY,
      StockField.DEBT_TO_EQUITY_FY
    )
    .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

  const results = await screener.get();

  // Calculate comprehensive dividend score
  const scored = results.data.map(stock => {
    let score = 0;

    // Dividend yield (0-3 points)
    if (stock.dividend_yield_fwd > 5) score += 3;
    else if (stock.dividend_yield_fwd > 4) score += 2;
    else if (stock.dividend_yield_fwd > 3) score += 1;

    // Valuation (0-3 points)
    if (stock.price_earnings_ttm < 10) score += 2;
    else if (stock.price_earnings_ttm < 12) score += 1;
    if (stock.price_book_mrq < 1.5) score += 1;

    // Profitability (0-3 points)
    if (stock.return_on_equity_fy > 18) score += 2;
    else if (stock.return_on_equity_fy > 12) score += 1;
    if (stock.operating_margin_fy > 15) score += 1;

    // Financial health (0-2 points)
    if (stock.debt_to_equity_fy < 0.5) score += 2;
    else if (stock.debt_to_equity_fy < 1) score += 1;

    // Payout sustainability (0-2 points)
    if (stock.dividend_payout_ratio_ttm < 50) score += 2;
    else if (stock.dividend_payout_ratio_ttm < 65) score += 1;

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
    .where(StockField.NET_INCOME_TTM.gt(0))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .where(StockField.VOLUME.gt(200000))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM,
      StockField.MARKET_CAPITALIZATION
    )
    .sortBy(StockField.DIVIDEND_YIELD_FWD, false)
    .setRange(0, 50);

  const results = await screener.get();

  // Calculate portfolio yield
  const avgYield = results.data.reduce((sum, s) => sum + s.dividend_yield_fwd, 0) / results.data.length;

  return {
    stocks: results.data,
    count: results.data.length,
    averageYield: avgYield.toFixed(2) + '%',
  };
}

// Usage
const portfolio = await buildDividendPortfolio(4);
console.log(`Portfolio: ${portfolio.count} stocks`);
console.log(`Average Yield: ${portfolio.averageYield}`);
console.table(portfolio.stocks);
```

## Dividend Screening by Yield

Screen stocks by dividend yield ranges:

```typescript
async function screenByDividendYield() {
  const screener = new StockScreener();

  screener
    .where(StockField.DIVIDEND_YIELD_FWD.gte(3))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .where(StockField.NET_INCOME_TTM.gt(0))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.DIVIDEND_YIELD_FWD,
      StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM,
      StockField.DIVIDENDS_YIELD_FY
    )
    .sortBy(StockField.DIVIDEND_YIELD_FWD, false);

  const results = await screener.get();

  // Categorize by yield
  const categories = {
    moderate: results.data.filter(s => s.dividend_yield_fwd >= 3 && s.dividend_yield_fwd < 5),
    high: results.data.filter(s => s.dividend_yield_fwd >= 5 && s.dividend_yield_fwd < 8),
    veryHigh: results.data.filter(s => s.dividend_yield_fwd >= 8),
  };

  return categories;
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
      StockField.DPS_COMMON_STOCK_PRIM_ISSUE_TTM
    );

  for await (const data of screener.stream({ interval: 60000 })) {
    if (data) {
      console.clear();
      console.log('=== Dividend Portfolio Monitor ===');
      console.log(`Updated: ${new Date().toLocaleTimeString()}\n`);

      let totalValue = 0;
      let totalYield = 0;

      data.data.forEach((stock, i) => {
        const change = stock.change_percent > 0 ? `+${stock.change_percent}%` : `${stock.change_percent}%`;
        console.log(
          `${(i + 1).toString().padStart(2)}. ${stock.name.padEnd(25)} ` +
          `$${stock.price.toFixed(2).padStart(7)} ` +
          `${change.padStart(7)} ` +
          `Yield: ${stock.dividend_yield_fwd.toFixed(2)}%`
        );

        totalValue += stock.price;
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

1. **Diversification**: Spread across sectors and companies
2. **Yield Analysis**: Compare forward yield (DIVIDEND_YIELD_FWD) with fiscal year yield (DIVIDENDS_YIELD_FY)
3. **Payout Ratio**: Use DIVIDEND_PAYOUT_RATIO_TTM to assess sustainability (< 75% is safer)
4. **Dividend Growth**: Look for CONTINUOUS_DIVIDEND_GROWTH to identify aristocrats
5. **Cash Flow Coverage**: Verify FREE_CASH_FLOW_TTM covers dividend payments
6. **Financial Health**: Check DEBT_TO_EQUITY_FY and CURRENT_RATIO_FQ
7. **Profitability**: Verify positive ROE, operating margin, and net margin
8. **Yield Trap Avoidance**: Avoid extremely high yields (>10%) without thorough research
9. **Size Matters**: Focus on larger cap companies for dividend stability

## Available Dividend Fields Summary

**Dividend Metrics:**
- `DIVIDEND_YIELD_FWD` - Forward dividend yield
- `DIVIDENDS_YIELD_FY` - Fiscal year dividend yield
- `DPS_COMMON_STOCK_PRIM_ISSUE_TTM` - Dividend per share
- `DIVIDEND_PAYOUT_RATIO_TTM` - Payout ratio (sustainability)
- `DIVIDEND_PAYOUT_RATIO_FY` - Annual payout ratio
- `CONTINUOUS_DIVIDEND_GROWTH` - Years of consecutive dividend growth

**Profitability & Returns:**
- `RETURN_ON_EQUITY_FY`, `RETURN_ON_ASSETS_FY`
- `OPERATING_MARGIN_FY`, `NET_MARGIN_FY`, `GROSS_MARGIN_FY`

**Cash Flow:**
- `FREE_CASH_FLOW_TTM`, `FREE_CASH_FLOW_MARGIN_TTM`
- `CASH_F_OPERATING_ACTIVITIES_FY`

**Financial Health:**
- `DEBT_TO_EQUITY_FY`, `CURRENT_RATIO_FQ`

**Valuation:**
- `PRICE_TO_EARNINGS_RATIO_TTM`, `PRICE_TO_BOOK_MRQ`
- `PRICE_TO_FREE_CASH_FLOW_TTM`

**Fundamentals:**
- `REVENUE_TTM`, `REVENUE_TTM_YOY_GROWTH`
- `NET_INCOME_TTM`, `EARNINGS_PER_SHARE_DILUTED_TTM`
- `MARKET_CAPITALIZATION`

With 3,522 total fields available, you can perform comprehensive dividend analysis and build highly optimized income portfolios.

## Next Steps

- [Value Investing](value-investing.md) - Finding undervalued stocks
- [Market Scanning](market-scanning.md) - Daily scans
- [Basic Usage](../basic-usage.md) - Core concepts
