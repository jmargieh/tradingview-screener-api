# Growth Stocks

Finding high-growth companies with strong momentum and profitability.

## Overview

Growth investing focuses on companies with above-average revenue and earnings growth, typically trading at premium valuations. This guide leverages the **3,522 available fields** in the TradingView Screener API to identify growth opportunities using metrics like revenue growth, margins, returns, and cash flow.

## High-Quality Growth Screen

Companies with strong growth, profitability, and returns:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  // Strong revenue growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(25))

  // Excellent profitability
  .where(StockField.RETURN_ON_EQUITY_FY.gt(18))
  .where(StockField.OPERATING_MARGIN_FY.gt(15))
  .where(StockField.NET_MARGIN_FY.gt(10))

  // Positive cash flow
  .where(StockField.FREE_CASH_FLOW_TTM.gt(0))

  // Financial health
  .where(StockField.DEBT_TO_EQUITY_FY.lt(0.75))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.RETURN_ON_EQUITY_FY,
    StockField.OPERATING_MARGIN_FY,
    StockField.FREE_CASH_FLOW_TTM,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false)
  .setRange(0, 50);

const results = await screener.get();
console.table(results.data);
```

## GARP Strategy (Growth at Reasonable Price)

Find high-growth stocks with reasonable valuations:

```typescript
async function garpScreen() {
  const screener = new StockScreener();

  screener
    // Strong growth
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))

    // Reasonable valuation
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(30))
    .where(StockField.PRICE_EARNINGS_GROWTH_TTM.lt(1.5))  // PEG < 1.5
    .where(StockField.PRICE_TO_FREE_CASH_FLOW_TTM.lt(35))

    // Strong profitability
    .where(StockField.RETURN_ON_EQUITY_FY.gt(15))
    .where(StockField.OPERATING_MARGIN_FY.gt(12))

    // Positive cash generation
    .where(StockField.FREE_CASH_FLOW_TTM.gt(0))

    // Size
    .where(StockField.MARKET_CAPITALIZATION.gt(2e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.PRICE_EARNINGS_GROWTH_TTM,
      StockField.RETURN_ON_EQUITY_FY,
      StockField.OPERATING_MARGIN_FY
    )
    .sortBy(StockField.PRICE_EARNINGS_GROWTH_TTM, true);

  return await screener.get();
}

// Usage
const garpStocks = await garpScreen();
console.table(garpStocks.data);
```

## Cash Flow Growth

Focus on companies with strong and growing free cash flow:

```typescript
const screener = new StockScreener();

screener
  // Strong FCF growth
  .where(StockField.FREE_CASH_FLOW_TTM_YOY_GROWTH.gt(20))

  // Strong current FCF
  .where(StockField.FREE_CASH_FLOW_TTM.gt(100e6))

  // Good FCF margin
  .where(StockField.FREE_CASH_FLOW_MARGIN_TTM.gt(10))

  // Revenue growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(15))

  // Profitability
  .where(StockField.NET_INCOME_TTM.gt(0))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.FREE_CASH_FLOW_TTM_YOY_GROWTH,
    StockField.FREE_CASH_FLOW_MARGIN_TTM,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.NET_INCOME_TTM
  )
  .sortBy(StockField.FREE_CASH_FLOW_TTM_YOY_GROWTH, false);
```

## High-Efficiency Growth

Companies with exceptional asset efficiency and returns:

```typescript
const screener = new StockScreener();

screener
  // Exceptional returns
  .where(StockField.RETURN_ON_EQUITY_FY.gt(25))
  .where(StockField.RETURN_ON_INVESTED_CAPITAL_FY.gt(20))
  .where(StockField.ASSET_TURNOVER_FY.gt(1))

  // Strong growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(15))

  // Strong margins
  .where(StockField.OPERATING_MARGIN_FY.gt(15))
  .where(StockField.GROSS_MARGIN_FY.gt(40))

  // Liquidity
  .where(StockField.VOLUME.gte(100_000))

  // Not penny stocks
  .where(StockField.PRICE.gt(5))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.RETURN_ON_EQUITY_FY,
    StockField.RETURN_ON_INVESTED_CAPITAL_FY,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.OPERATING_MARGIN_FY,
    StockField.VOLUME
  )
  .sortBy(StockField.RETURN_ON_EQUITY_FY, false);
```

## Growth with Profitability

Companies with strong growth and profitability:

```typescript
async function profitableGrowthScreen() {
  const screener = new StockScreener();

  screener
    // Current growth
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(25))

    // Strong profitability
    .where(StockField.NET_INCOME_TTM.gt(100e6))
    .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(2))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.NET_INCOME_TTM,
      StockField.EARNINGS_PER_SHARE_DILUTED_TTM
    )
    .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);

  return await screener.get();
}
```

## Profitable Growth

Growth companies with strong profitability:

```typescript
const screener = new StockScreener();

screener
  // Growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))

  // Profitability
  .where(StockField.NET_INCOME_TTM.gt(0))
  .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(1))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gt(5e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.NET_INCOME_TTM,
    StockField.EARNINGS_PER_SHARE_DILUTED_TTM
  )
  .sortBy(StockField.NET_INCOME_TTM, false);
```

## High Revenue Companies

Companies with strong revenue:

```typescript
async function highRevenueScreen() {
  const screener = new StockScreener();

  screener
    // High growth
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(30))

    // Strong revenue base
    .where(StockField.REVENUE_TTM.gt(500e6))

    // Market size
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.REVENUE_TTM,
      StockField.PRICE_SALES_CURRENT
    )
    .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);

  return await screener.get();
}
```

## Large Cap Growth

High-growth large companies:

```typescript
const screener = new StockScreener();

screener
  // Strong growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(20))

  // Minimum revenue
  .where(StockField.REVENUE_TTM.gt(100e6))

  // Size range
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 50e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.REVENUE_TTM,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);
```

## Momentum Growth

Combining growth with technical momentum:

```typescript
const screener = new StockScreener();

screener
  // Fundamental growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(25))

  // Technical strength
  .where(StockField.RSI.between(50, 70))
  .where(StockField.CHANGE_PERCENT.gt(0))  // Positive daily change

  // Volume confirmation
  .where(StockField.VOLUME.gte(500_000))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.CHANGE_PERCENT,
    StockField.RSI
  )
  .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);
```

## Emerging Growth

Early-stage high-growth companies:

```typescript
async function emergingGrowthScreen() {
  const screener = new StockScreener();

  screener
    // Small to mid-cap
    .where(StockField.MARKET_CAPITALIZATION.between(500e6, 5e9))

    // Explosive revenue growth
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(50))

    // Minimum scale
    .where(StockField.REVENUE_TTM.gt(100e6))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.MARKET_CAPITALIZATION,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.REVENUE_TTM
    )
    .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);

  return await screener.get();
}
```

## Strong Revenue Growth

Companies with sustained revenue growth:

```typescript
const screener = new StockScreener();

screener
  // Strong current growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(15))

  // Profitability
  .where(StockField.NET_INCOME_TTM.gt(0))

  // Established but growing
  .where(StockField.MARKET_CAPITALIZATION.gt(5e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.REVENUE_TTM,
    StockField.NET_INCOME_TTM
  )
  .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false);
```

## Growth Score System

Comprehensive growth scoring using multiple metrics:

```typescript
async function growthScoreScreen() {
  const screener = new StockScreener();

  screener
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(15))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.NET_INCOME_TTM,
      StockField.PRICE_EARNINGS_GROWTH_TTM,
      StockField.RETURN_ON_EQUITY_FY,
      StockField.OPERATING_MARGIN_FY,
      StockField.FREE_CASH_FLOW_TTM_YOY_GROWTH,
      StockField.DEBT_TO_EQUITY_FY,
      StockField.CHANGE_PERCENT
    );

  const results = await screener.get();

  // Calculate comprehensive growth score
  const scored = results.data.map(stock => {
    let score = 0;

    // Revenue growth (0-4 points)
    if (stock.revenue_ttm_yoy_growth > 40) score += 4;
    else if (stock.revenue_ttm_yoy_growth > 30) score += 3;
    else if (stock.revenue_ttm_yoy_growth > 20) score += 2;
    else if (stock.revenue_ttm_yoy_growth > 15) score += 1;

    // Profitability (0-3 points)
    if (stock.net_income_ttm > 500e6) score += 3;
    else if (stock.net_income_ttm > 100e6) score += 2;
    else if (stock.net_income_ttm > 0) score += 1;

    // Returns (0-3 points)
    if (stock.return_on_equity_fy > 25) score += 3;
    else if (stock.return_on_equity_fy > 18) score += 2;
    else if (stock.return_on_equity_fy > 12) score += 1;

    // Margins (0-2 points)
    if (stock.operating_margin_fy > 20) score += 2;
    else if (stock.operating_margin_fy > 15) score += 1;

    // Valuation - PEG ratio (0-2 points)
    if (stock.peg_ratio_ttm && stock.peg_ratio_ttm < 1) score += 2;
    else if (stock.peg_ratio_ttm && stock.peg_ratio_ttm < 1.5) score += 1;

    // Cash flow growth (0-2 points)
    if (stock.free_cash_flow_ttm_yoy_growth > 30) score += 2;
    else if (stock.free_cash_flow_ttm_yoy_growth > 15) score += 1;

    // Financial health (0-2 points)
    if (stock.debt_to_equity_fy < 0.3) score += 2;
    else if (stock.debt_to_equity_fy < 0.75) score += 1;

    // Price momentum (0-2 points)
    if (stock.change_abs > 2) score += 2;
    else if (stock.change_abs > 0) score += 1;

    return { ...stock, growthScore: score };
  });

  // Sort by score
  scored.sort((a, b) => b.growthScore - a.growthScore);

  return scored;
}

// Usage
const topGrowth = await growthScoreScreen();
console.log('Top growth stocks by score:');
console.table(topGrowth.slice(0, 20));
```

## Growth Monitor

Track growth stocks over time:

```typescript
async function monitorGrowthStocks() {
  const screener = new StockScreener();

  screener
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(25))
    .where(StockField.MARKET_CAPITALIZATION.gt(2e9))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.CHANGE_PERCENT
    )
    .sortBy(StockField.REVENUE_TTM_YOY_GROWTH, false)
    .setRange(0, 20);

  for await (const data of screener.stream({ interval: 60000 })) {
    if (data) {
      console.clear();
      console.log('=== Growth Stocks Monitor ===');
      console.log(`Updated: ${new Date().toLocaleTimeString()}\n`);

      data.data.forEach((stock, i) => {
        const change = stock.change_abs > 0 ? `+${stock.change_abs}%` : `${stock.change_abs}%`;
        console.log(
          `${i + 1}. ${stock.name.padEnd(30)} ` +
          `$${stock.close.toFixed(2).padStart(8)} ` +
          `Growth: ${stock.revenue_ttm_yoy_growth}% ` +
          `Today: ${change}`
        );
      });
    }
  }
}
```

## Best Practices

1. **Balance Growth & Valuation**: Use PEG ratio and P/FCF to avoid overpaying
2. **Quality Matters**: Focus on ROE, ROIC, and operating margins
3. **Cash Flow Focus**: Free cash flow growth is more sustainable than earnings growth
4. **Margin Expansion**: Look for improving operating and net margins
5. **Financial Health**: Check debt-to-equity and current ratios
6. **Size Considerations**: Different market caps have different risk/reward profiles
7. **Efficiency Metrics**: Use ROE, ROA, ROIC, and asset turnover to find efficient growers
8. **Revenue Quality**: Focus on companies with strong revenue bases and healthy margins

## Available Growth Fields Summary

**Growth Metrics:**
- `REVENUE_TTM_YOY_GROWTH`, `FREE_CASH_FLOW_TTM_YOY_GROWTH`

**Profitability & Returns:**
- `RETURN_ON_EQUITY_FY`, `RETURN_ON_ASSETS_FY`, `RETURN_ON_INVESTED_CAPITAL_FY`
- `OPERATING_MARGIN_FY`, `NET_MARGIN_FY`, `GROSS_MARGIN_FY`
- `FREE_CASH_FLOW_MARGIN_TTM`, `ASSET_TURNOVER_FY`

**Valuation:**
- `PRICE_TO_EARNINGS_RATIO_TTM`, `PRICE_EARNINGS_GROWTH_TTM`
- `PRICE_TO_FREE_CASH_FLOW_TTM`, `PRICE_SALES_CURRENT`

**Cash Flow:**
- `FREE_CASH_FLOW_TTM`, `CASH_F_OPERATING_ACTIVITIES_FY`

**Financial Health:**
- `DEBT_TO_EQUITY_FY`, `CURRENT_RATIO_FQ`

**Fundamentals:**
- `REVENUE_TTM`, `NET_INCOME_TTM`
- `EARNINGS_PER_SHARE_DILUTED_TTM`, `MARKET_CAPITALIZATION`

With 3,522 total fields available, you can create highly sophisticated growth screens that identify the best opportunities.

## Next Steps

- [Value Investing](value-investing.md) - Finding undervalued stocks
- [Technical Analysis](technical-analysis.md) - Momentum indicators
- [Market Scanning](market-scanning.md) - Daily scans
