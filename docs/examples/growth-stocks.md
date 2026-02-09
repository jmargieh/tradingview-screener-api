# Growth Stocks

Finding high-growth companies with strong momentum.

## Overview

Growth investing focuses on companies with above-average revenue and earnings growth, typically trading at premium valuations.

## Basic Growth Screen

### High Revenue Growth

Find companies with strong revenue expansion:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.REVENUE_GROWTH_TTM.gt(20))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_GROWTH_TTM,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.REVENUE_GROWTH_TTM, false)
  .setRange(0, 50);

const results = await screener.get();
console.table(results.data);
```

### High Earnings Growth

Companies with accelerating earnings:

```typescript
screener
  .where(StockField.EARNINGS_GROWTH_TTM.gt(25))
  .where(StockField.NET_INCOME_TTM.gt(0))  // Profitable
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 50e9))  // Mid-cap
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.EARNINGS_GROWTH_TTM,
    StockField.NET_MARGIN_TTM
  )
  .sortBy(StockField.EARNINGS_GROWTH_TTM, false);
```

## GARP Strategy

Growth at a Reasonable Price:

```typescript
async function garpScreen() {
  const screener = new StockScreener();

  screener
    // Strong growth
    .where(StockField.REVENUE_GROWTH_TTM.gt(15))
    .where(StockField.EARNINGS_GROWTH_TTM.gt(15))

    // Reasonable valuation
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(30))
    .where(StockField.PRICE_TO_EARNINGS_GROWTH_RATIO_TTM.lt(2))  // PEG < 2

    // Quality
    .where(StockField.OPERATING_MARGIN_TTM.gt(10))
    .where(StockField.RETURN_ON_EQUITY_TTM.gt(15))

    // Size
    .where(StockField.MARKET_CAPITALIZATION.gt(2e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_GROWTH_TTM,
      StockField.EARNINGS_GROWTH_TTM,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.PRICE_TO_EARNINGS_GROWTH_RATIO_TTM
    )
    .sortBy(StockField.PRICE_TO_EARNINGS_GROWTH_RATIO_TTM, true);

  return await screener.get();
}

// Usage
const garpStocks = await garpScreen();
console.table(garpStocks.data);
```

## High-Growth Tech

Technology growth companies:

```typescript
const screener = new StockScreener();

screener
  // Sector filter
  .where(StockField.SECTOR.eq('Technology'))

  // Strong growth
  .where(StockField.REVENUE_GROWTH_TTM.gt(30))
  .where(StockField.GROSS_MARGIN_TTM.gt(60))  // Tech margins

  // Profitability improving
  .where(StockField.OPERATING_MARGIN_TTM.gt(5))

  // Innovation metrics
  .where(StockField.RESEARCH_DEVELOPMENT_TTM.gt(0))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_GROWTH_TTM,
    StockField.GROSS_MARGIN_TTM,
    StockField.OPERATING_MARGIN_TTM
  )
  .sortBy(StockField.REVENUE_GROWTH_TTM, false);
```

## Small-Cap Growth

High-growth small companies:

```typescript
const screener = new StockScreener();

screener
  // Small-cap range
  .where(StockField.MARKET_CAPITALIZATION.between(300e6, 2e9))

  // Explosive growth
  .where(StockField.REVENUE_GROWTH_TTM.gt(40))
  .where(StockField.EARNINGS_GROWTH_TTM.gt(30))

  // Momentum
  .where(StockField.CHANGE_PERCENT_1M.gt(10))

  // Liquidity
  .where(StockField.VOLUME.gte(100_000))

  // Not penny stocks
  .where(StockField.PRICE.gt(5))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.MARKET_CAPITALIZATION,
    StockField.REVENUE_GROWTH_TTM,
    StockField.CHANGE_PERCENT_1M
  )
  .sortBy(StockField.REVENUE_GROWTH_TTM, false);
```

## Accelerating Growth

Companies with increasing growth rates:

```typescript
async function acceleratingGrowthScreen() {
  const screener = new StockScreener();

  screener
    // Current growth
    .where(StockField.REVENUE_GROWTH_TTM.gt(25))
    .where(StockField.EARNINGS_GROWTH_TTM.gt(20))

    // Improving margins (sign of operational leverage)
    .where(StockField.OPERATING_MARGIN_TTM.gt(10))
    .where(StockField.NET_MARGIN_TTM.gt(5))

    // Strong ROE (efficient growth)
    .where(StockField.RETURN_ON_EQUITY_TTM.gt(20))

    // Not overleveraged
    .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(1.5))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_GROWTH_TTM,
      StockField.OPERATING_MARGIN_TTM,
      StockField.RETURN_ON_EQUITY_TTM
    )
    .sortBy(StockField.REVENUE_GROWTH_TTM, false);

  const results = await screener.get();

  // Filter for margin expansion
  const expanding = results.data.filter(stock => {
    return stock.operating_margin_ttm > stock.net_margin_ttm * 1.2;
  });

  return expanding;
}
```

## Profitable Growth

Growth companies with strong profitability:

```typescript
const screener = new StockScreener();

screener
  // Growth
  .where(StockField.REVENUE_GROWTH_TTM.gt(20))
  .where(StockField.EARNINGS_PER_SHARE_GROWTH_TTM.gt(20))

  // Profitability
  .where(StockField.NET_MARGIN_TTM.gt(15))
  .where(StockField.RETURN_ON_EQUITY_TTM.gt(20))
  .where(StockField.RETURN_ON_ASSETS_TTM.gt(10))

  // Cash generation
  .where(StockField.FREE_CASH_FLOW_TTM.gt(0))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gt(5e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_GROWTH_TTM,
    StockField.NET_MARGIN_TTM,
    StockField.RETURN_ON_EQUITY_TTM
  )
  .sortBy(StockField.RETURN_ON_EQUITY_TTM, false);
```

## SaaS Growth Screen

Software-as-a-Service growth metrics:

```typescript
async function saasGrowthScreen() {
  const screener = new StockScreener();

  screener
    // Industry
    .where(StockField.INDUSTRY.match('.*Software.*'))

    // High growth
    .where(StockField.REVENUE_GROWTH_TTM.gt(30))

    // SaaS-like margins
    .where(StockField.GROSS_MARGIN_TTM.gt(70))

    // Improving efficiency
    .where(StockField.OPERATING_MARGIN_TTM.gt(-20))  // Path to profitability

    // Market size
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_GROWTH_TTM,
      StockField.GROSS_MARGIN_TTM,
      StockField.OPERATING_MARGIN_TTM,
      StockField.PRICE_TO_SALES_TTM
    )
    .sortBy(StockField.REVENUE_GROWTH_TTM, false);

  return await screener.get();
}
```

## Healthcare Growth

High-growth healthcare companies:

```typescript
const screener = new StockScreener();

screener
  // Sector
  .where(StockField.SECTOR.eq('Healthcare'))

  // Strong growth
  .where(StockField.REVENUE_GROWTH_TTM.gt(20))

  // R&D investment
  .where(StockField.RESEARCH_DEVELOPMENT_TTM.gt(0))

  // Profitability or near profitability
  .where(StockField.OPERATING_MARGIN_TTM.gt(-10))

  // Size range
  .where(StockField.MARKET_CAPITALIZATION.between(1e9, 50e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_GROWTH_TTM,
    StockField.OPERATING_MARGIN_TTM,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.REVENUE_GROWTH_TTM, false);
```

## Momentum Growth

Combining growth with price momentum:

```typescript
const screener = new StockScreener();

screener
  // Fundamental growth
  .where(StockField.REVENUE_GROWTH_TTM.gt(25))
  .where(StockField.EARNINGS_GROWTH_TTM.gt(20))

  // Price momentum
  .where(StockField.CHANGE_PERCENT_1M.gt(15))
  .where(StockField.CHANGE_PERCENT_3M.gt(20))

  // Technical strength
  .where(StockField.RSI.between(50, 70))
  .where(StockField.PRICE.above(StockField.MOVING_AVERAGE_50))

  // Volume confirmation
  .where(StockField.VOLUME.gte(500_000))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_GROWTH_TTM,
    StockField.CHANGE_PERCENT_1M,
    StockField.RSI
  )
  .sortBy(StockField.CHANGE_PERCENT_1M, false);
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
    .where(StockField.REVENUE_GROWTH_TTM.gt(50))

    // Not yet profitable is okay
    .where(StockField.GROSS_MARGIN_TTM.gt(40))

    // Operating leverage improving
    .where(StockField.REVENUE_TTM.gt(100e6))  // Minimum scale

    // Momentum
    .where(StockField.CHANGE_PERCENT_3M.gt(0))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.MARKET_CAPITALIZATION,
      StockField.REVENUE_GROWTH_TTM,
      StockField.GROSS_MARGIN_TTM,
      StockField.OPERATING_MARGIN_TTM
    )
    .sortBy(StockField.REVENUE_GROWTH_TTM, false);

  const results = await screener.get();

  // Calculate Rule of 40 (Growth % + Margin %)
  const enriched = results.data.map(stock => {
    const ruleOf40 = stock.revenue_growth_ttm + stock.operating_margin_ttm;

    return {
      ...stock,
      ruleOf40: ruleOf40.toFixed(1),
    };
  });

  // Filter for Rule of 40 > 40
  return enriched.filter(s => parseFloat(s.ruleOf40) > 40);
}
```

## Consistent Growth

Companies with sustained growth:

```typescript
const screener = new StockScreener();

screener
  // Steady growth
  .where(StockField.REVENUE_GROWTH_TTM.gt(15))
  .where(StockField.REVENUE_GROWTH_3Y.gt(15))
  .where(StockField.REVENUE_GROWTH_5Y.gt(12))

  // Earnings growth
  .where(StockField.EARNINGS_GROWTH_TTM.gt(10))

  // Quality metrics
  .where(StockField.RETURN_ON_EQUITY_TTM.gt(15))
  .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(1))

  // Established but growing
  .where(StockField.MARKET_CAPITALIZATION.gt(5e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.REVENUE_GROWTH_TTM,
    StockField.REVENUE_GROWTH_3Y,
    StockField.REVENUE_GROWTH_5Y
  )
  .sortBy(StockField.REVENUE_GROWTH_5Y, false);
```

## Growth Score System

Comprehensive growth scoring:

```typescript
async function growthScoreScreen() {
  const screener = new StockScreener();

  screener
    .where(StockField.REVENUE_GROWTH_TTM.gt(15))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_GROWTH_TTM,
      StockField.EARNINGS_GROWTH_TTM,
      StockField.OPERATING_MARGIN_TTM,
      StockField.RETURN_ON_EQUITY_TTM,
      StockField.PRICE_TO_EARNINGS_GROWTH_RATIO_TTM,
      StockField.CHANGE_PERCENT_3M
    );

  const results = await screener.get();

  // Calculate growth score
  const scored = results.data.map(stock => {
    let score = 0;

    // Revenue growth
    if (stock.revenue_growth_ttm > 30) score += 3;
    else if (stock.revenue_growth_ttm > 20) score += 2;
    else if (stock.revenue_growth_ttm > 15) score += 1;

    // Earnings growth
    if (stock.earnings_growth_ttm > 25) score += 2;
    else if (stock.earnings_growth_ttm > 15) score += 1;

    // Profitability
    if (stock.operating_margin_ttm > 15) score += 2;
    else if (stock.operating_margin_ttm > 10) score += 1;

    // Efficiency
    if (stock.return_on_equity_ttm > 20) score += 2;
    else if (stock.return_on_equity_ttm > 15) score += 1;

    // Valuation (PEG ratio)
    if (stock.peg_ratio_ttm < 1) score += 2;
    else if (stock.peg_ratio_ttm < 1.5) score += 1;

    // Momentum
    if (stock.change_percent_3m > 20) score += 2;
    else if (stock.change_percent_3m > 10) score += 1;

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
    .where(StockField.REVENUE_GROWTH_TTM.gt(25))
    .where(StockField.MARKET_CAPITALIZATION.gt(2e9))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.REVENUE_GROWTH_TTM,
      StockField.CHANGE_PERCENT
    )
    .sortBy(StockField.REVENUE_GROWTH_TTM, false)
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
          `Growth: ${stock.revenue_growth_ttm}% ` +
          `Today: ${change}`
        );
      });
    }
  }
}
```

## Best Practices

1. **Balance Growth & Valuation**: Use PEG ratio to avoid overpaying
2. **Quality Matters**: Look for margin expansion and ROE
3. **Sustainable Growth**: Check debt levels and cash flow
4. **Sector Trends**: Focus on industries with tailwinds
5. **Momentum Confirmation**: Combine fundamentals with technicals
6. **Position Sizing**: Growth stocks are volatile, manage risk

## Next Steps

- [Value Investing](value-investing.md) - Finding undervalued stocks
- [Technical Analysis](technical-analysis.md) - Momentum indicators
- [Market Scanning](market-scanning.md) - Daily scans
