# Value Investing

Finding undervalued stocks using fundamental analysis.

## Overview

Value investing focuses on finding stocks trading below their intrinsic value based on fundamental metrics.

## Basic Value Screen

### Low P/E Ratio

Find stocks with attractive price-to-earnings ratios:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(5, 15))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .where(StockField.NET_INCOME_TTM.gt(0))  // Profitable
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true)
  .setRange(0, 50);

const results = await screener.get();
console.table(results.data);
```

### Low Price-to-Book

Find stocks trading below book value:

```typescript
screener
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(1.5))
  .where(StockField.PRICE_TO_BOOK_MRQ.gt(0))  // Positive book value
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_BOOK_MRQ,
    StockField.BOOK_VALUE_PER_SHARE_MRQ
  )
  .sortBy(StockField.PRICE_TO_BOOK_MRQ, true);

const results = await screener.get();
```

## Graham Number Strategy

Benjamin Graham's formula for finding undervalued stocks:

```typescript
async function grahamNumberScreen() {
  const screener = new StockScreener();

  screener
    // P/E ratio below 15
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))

    // P/B ratio below 1.5
    .where(StockField.PRICE_TO_BOOK_MRQ.lt(1.5))

    // Positive earnings
    .where(StockField.EARNINGS_PER_SHARE_BASIC_TTM.gt(0))

    // Positive book value
    .where(StockField.BOOK_VALUE_PER_SHARE_MRQ.gt(0))

    // Market cap over $500M
    .where(StockField.MARKET_CAPITALIZATION.gt(500e6))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.PRICE_TO_BOOK_MRQ,
      StockField.EARNINGS_PER_SHARE_BASIC_TTM,
      StockField.BOOK_VALUE_PER_SHARE_MRQ
    )
    .sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true)
    .setRange(0, 50);

  const results = await screener.get();

  // Calculate Graham Number for each stock
  const enriched = results.data.map(stock => {
    const eps = stock.earnings_per_share_basic_ttm;
    const bvps = stock.book_value_per_share_mrq;
    const grahamNumber = Math.sqrt(22.5 * eps * bvps);
    const margin = ((grahamNumber - stock.close) / stock.close) * 100;

    return {
      ...stock,
      grahamNumber: grahamNumber.toFixed(2),
      marginOfSafety: margin.toFixed(2) + '%',
    };
  });

  return enriched;
}

// Usage
const valueStocks = await grahamNumberScreen();
console.table(valueStocks);
```

## Deep Value Screen

Finding severely undervalued companies:

```typescript
const screener = new StockScreener();

screener
  // Very low P/E
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(10))

  // Trading below book value
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(1))

  // Low price-to-sales
  .where(StockField.PRICE_TO_SALES_TTM.lt(1))

  // Positive earnings
  .where(StockField.NET_INCOME_TTM.gt(0))

  // Not penny stocks
  .where(StockField.PRICE.gt(5))

  // Minimum liquidity
  .where(StockField.VOLUME.gte(100_000))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.PRICE_TO_BOOK_MRQ,
    StockField.PRICE_TO_SALES_TTM,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.PRICE_TO_BOOK_MRQ, true);
```

## Quality Value Stocks

Combining value metrics with quality indicators:

```typescript
async function qualityValueScreen() {
  const screener = new StockScreener();

  screener
    // Value metrics
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(8, 15))
    .where(StockField.PRICE_TO_BOOK_MRQ.between(0.5, 2))

    // Quality metrics
    .where(StockField.RETURN_ON_EQUITY_TTM.gt(15))  // Strong ROE
    .where(StockField.OPERATING_MARGIN_TTM.gt(10))  // Good margins
    .where(StockField.CURRENT_RATIO_MRQ.gt(1.5))    // Financial health

    // Debt management
    .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(1))

    // Size filter
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.PRICE_TO_BOOK_MRQ,
      StockField.RETURN_ON_EQUITY_TTM,
      StockField.OPERATING_MARGIN_TTM,
      StockField.DEBT_TO_EQUITY_RATIO_MRQ
    )
    .sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true);

  return await screener.get();
}
```

## Dividend Value Strategy

Value stocks with income:

```typescript
const screener = new StockScreener();

screener
  // Value metrics
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))

  // Dividend requirements
  .where(StockField.DIVIDEND_YIELD_FWD.gte(3))
  .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lte(60))  // Sustainable

  // Quality
  .where(StockField.NET_INCOME_TTM.gt(0))
  .where(StockField.CURRENT_RATIO_MRQ.gt(1.2))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.DIVIDEND_YIELD_FWD,
    StockField.DIVIDEND_PAYOUT_RATIO_TTM
  )
  .sortBy(StockField.DIVIDEND_YIELD_FWD, false);
```

## Enterprise Value Screening

Using EV/EBITDA for valuation:

```typescript
const screener = new StockScreener();

screener
  // Attractive EV/EBITDA
  .where(StockField.ENTERPRISE_VALUE_EBITDA_TTM.between(5, 10))

  // Positive EBITDA
  .where(StockField.EBITDA_TTM.gt(0))

  // Free cash flow positive
  .where(StockField.FREE_CASH_FLOW_TTM.gt(0))

  // Size requirement
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.ENTERPRISE_VALUE_EBITDA_TTM,
    StockField.EBITDA_TTM,
    StockField.FREE_CASH_FLOW_TTM
  )
  .sortBy(StockField.ENTERPRISE_VALUE_EBITDA_TTM, true);
```

## Buffett-Style Screen

Warren Buffett's value criteria:

```typescript
async function buffettScreen() {
  const screener = new StockScreener();

  screener
    // Strong competitive advantage (high ROE)
    .where(StockField.RETURN_ON_EQUITY_TTM.gt(15))

    // Consistent earnings
    .where(StockField.NET_INCOME_TTM.gt(0))
    .where(StockField.EARNINGS_GROWTH_TTM.gt(0))

    // Low debt
    .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(0.5))

    // Good profit margins
    .where(StockField.NET_MARGIN_TTM.gt(15))

    // Reasonable valuation
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(10, 20))

    // Large, established companies
    .where(StockField.MARKET_CAPITALIZATION.gt(10e9))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.RETURN_ON_EQUITY_TTM,
      StockField.NET_MARGIN_TTM,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.DEBT_TO_EQUITY_RATIO_MRQ
    )
    .sortBy(StockField.RETURN_ON_EQUITY_TTM, false);

  return await screener.get();
}
```

## Sector-Specific Value

Finding value in specific sectors:

```typescript
async function sectorValueScreen(sector: string) {
  const screener = new StockScreener();

  screener
    // Sector filter
    .where(StockField.SECTOR.eq(sector))

    // Value metrics
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
    .where(StockField.PRICE_TO_SALES_TTM.lt(2))

    // Profitability
    .where(StockField.NET_INCOME_TTM.gt(0))
    .where(StockField.OPERATING_MARGIN_TTM.gt(5))

    // Size
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

    .select(
      StockField.NAME,
      StockField.SECTOR,
      StockField.PRICE,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.OPERATING_MARGIN_TTM
    )
    .sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true);

  return await screener.get();
}

// Usage
const techValue = await sectorValueScreen('Technology');
const financialValue = await sectorValueScreen('Financial');
```

## Value Momentum Combo

Combining value and momentum:

```typescript
const screener = new StockScreener();

screener
  // Value
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))

  // Positive momentum
  .where(StockField.CHANGE_PERCENT.gt(0))
  .where(StockField.CHANGE_PERCENT_1M.gt(5))

  // Technical confirmation
  .where(StockField.PRICE.above(StockField.MOVING_AVERAGE_50))

  // Volume
  .where(StockField.VOLUME.gte(500_000))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.CHANGE_PERCENT,
    StockField.CHANGE_PERCENT_1M
  )
  .sortBy(StockField.CHANGE_PERCENT_1M, false);
```

## Comparative Valuation

Compare companies within an industry:

```typescript
async function industryComparison(industry: string) {
  const screener = new StockScreener();

  screener
    .where(StockField.INDUSTRY.eq(industry))
    .where(StockField.MARKET_CAPITALIZATION.gt(500e6))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.PRICE_TO_BOOK_MRQ,
      StockField.PRICE_TO_SALES_TTM,
      StockField.ENTERPRISE_VALUE_EBITDA_TTM
    )
    .sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true);

  const results = await screener.get();

  // Calculate industry averages
  const avgPE = results.data.reduce((sum, s) => sum + s.price_earnings_ttm, 0) / results.data.length;
  const avgPB = results.data.reduce((sum, s) => sum + s.price_book_mrq, 0) / results.data.length;

  // Find stocks below industry average
  const undervalued = results.data.filter(
    s => s.price_earnings_ttm < avgPE && s.price_book_mrq < avgPB
  );

  return {
    industry,
    averages: { pe: avgPE, pb: avgPB },
    undervalued,
  };
}
```

## Complete Value Analysis

Comprehensive value screening:

```typescript
async function comprehensiveValueAnalysis() {
  const screener = new StockScreener();

  screener
    // Multiple valuation metrics
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(5, 15))
    .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))
    .where(StockField.PRICE_TO_SALES_TTM.lt(1.5))
    .where(StockField.ENTERPRISE_VALUE_EBITDA_TTM.lt(10))

    // Quality filters
    .where(StockField.RETURN_ON_EQUITY_TTM.gt(12))
    .where(StockField.RETURN_ON_ASSETS_TTM.gt(5))
    .where(StockField.CURRENT_RATIO_MRQ.gt(1.5))

    // Growth (even value stocks should grow)
    .where(StockField.REVENUE_GROWTH_TTM.gt(0))
    .where(StockField.EARNINGS_GROWTH_TTM.gt(0))

    // Financial health
    .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(1))
    .where(StockField.INTEREST_COVERAGE_TTM.gt(3))

    // Size and liquidity
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .where(StockField.VOLUME.gte(200_000))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.PRICE_TO_BOOK_MRQ,
      StockField.RETURN_ON_EQUITY_TTM,
      StockField.DEBT_TO_EQUITY_RATIO_MRQ,
      StockField.MARKET_CAPITALIZATION
    )
    .sortBy(StockField.PRICE_TO_EARNINGS_RATIO_TTM, true);

  const results = await screener.get();

  // Score each stock
  const scored = results.data.map(stock => {
    let score = 0;

    // Valuation score
    if (stock.price_earnings_ttm < 10) score += 2;
    if (stock.price_book_mrq < 1) score += 2;

    // Quality score
    if (stock.return_on_equity_ttm > 15) score += 2;
    if (stock.debt_to_equity_mrq < 0.5) score += 2;

    return { ...stock, valueScore: score };
  });

  // Sort by score
  scored.sort((a, b) => b.valueScore - a.valueScore);

  return scored;
}

// Usage
const topValue = await comprehensiveValueAnalysis();
console.log('Top value stocks:');
console.table(topValue.slice(0, 20));
```

## Best Practices

1. **Multiple Metrics**: Don't rely on a single valuation metric
2. **Quality Matters**: Combine value with quality indicators
3. **Margin of Safety**: Look for significant undervaluation
4. **Sector Context**: Compare within similar companies
5. **Financial Health**: Check debt levels and liquidity
6. **Avoid Value Traps**: Screen for positive growth

## Next Steps

- [Growth Stocks](growth-stocks.md) - High-growth companies
- [Dividend Investing](dividend-investing.md) - Income strategies
- [Technical Analysis](technical-analysis.md) - Momentum indicators
