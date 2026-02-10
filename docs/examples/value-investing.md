# Value Investing

Finding undervalued stocks using comprehensive fundamental analysis.

## Overview

Value investing focuses on finding stocks trading below their intrinsic value based on fundamental metrics. This guide leverages the **3,522 available fields** in the TradingView Screener API to perform deep fundamental analysis with metrics like return on equity, debt ratios, operating margins, and more.

## Available Value Metrics

With 3,522 available fields, you can perform comprehensive fundamental analysis including:

**Valuation Ratios:**
- `PRICE_TO_EARNINGS_RATIO_TTM` - P/E ratio
- `PRICE_EARNINGS_GROWTH_TTM` - PEG ratio
- `PRICE_SALES_CURRENT` - Price to Sales ratio
- `PRICE_TO_BOOK_MRQ` - Price to Book ratio
- `ENTERPRISE_VALUE_EBITDA_TTM` - EV/EBITDA ratio
- `PRICE_TO_FREE_CASH_FLOW_TTM` - Price to Free Cash Flow

**Profitability & Efficiency:**
- `RETURN_ON_EQUITY_FY` - Return on equity (annual)
- `RETURN_ON_ASSETS_FY` - Return on assets (annual)
- `RETURN_ON_INVESTED_CAPITAL_FY` - Return on invested capital
- `OPERATING_MARGIN_FY` - Operating profit margin
- `NET_MARGIN_FY` - Net profit margin
- `GROSS_MARGIN_FY` - Gross profit margin
- `ASSET_TURNOVER_FY` - Asset efficiency

**Financial Health:**
- `DEBT_TO_EQUITY_FY` - Debt to equity ratio
- `CURRENT_RATIO_FQ` - Current ratio (liquidity)
- `FREE_CASH_FLOW_FY` - Free cash flow
- `CASH_F_OPERATING_ACTIVITIES_FY` - Operating cash flow

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
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.PRICE_TO_BOOK_MRQ, true);

const results = await screener.get();
```

## Growth at Reasonable Price (GARP)

Using PEG ratio to find growth stocks at fair value:

```typescript
const screener = new StockScreener();

screener
  // PEG ratio below 1 (growth at reasonable price)
  .where(StockField.PRICE_EARNINGS_GROWTH_TTM.between(0.5, 1))

  // Revenue growth
  .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(15))

  // Positive earnings
  .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(0))

  // Market cap filter
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_EARNINGS_GROWTH_TTM,
    StockField.REVENUE_TTM_YOY_GROWTH,
    StockField.EARNINGS_PER_SHARE_DILUTED_TTM
  )
  .sortBy(StockField.PRICE_EARNINGS_GROWTH_TTM, true);

const results = await screener.get();
console.table(results.data);
```

## Quality Value Screen

Finding high-quality undervalued companies with strong fundamentals:

```typescript
const screener = new StockScreener();

screener
  // Attractive valuations
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(5, 15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))
  .where(StockField.PRICE_TO_FREE_CASH_FLOW_TTM.lt(20))

  // Strong profitability
  .where(StockField.RETURN_ON_EQUITY_FY.gt(15))
  .where(StockField.OPERATING_MARGIN_FY.gt(10))
  .where(StockField.NET_MARGIN_FY.gt(5))

  // Financial health
  .where(StockField.DEBT_TO_EQUITY_FY.lt(1))
  .where(StockField.CURRENT_RATIO_FQ.gt(1.5))

  // Profitability
  .where(StockField.NET_INCOME_TTM.gt(0))
  .where(StockField.FREE_CASH_FLOW_FY.gt(0))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM,
    StockField.RETURN_ON_EQUITY_FY,
    StockField.DEBT_TO_EQUITY_FY,
    StockField.OPERATING_MARGIN_FY,
    StockField.MARKET_CAPITALIZATION
  )
  .sortBy(StockField.RETURN_ON_EQUITY_FY, false);

const results = await screener.get();
console.table(results.data);
```

## High-Quality Profitability Screen

Focus on companies with exceptional returns and margins:

```typescript
const screener = new StockScreener();

screener
  // Exceptional returns
  .where(StockField.RETURN_ON_EQUITY_FY.gt(20))
  .where(StockField.RETURN_ON_ASSETS_FY.gt(10))
  .where(StockField.RETURN_ON_INVESTED_CAPITAL_FY.gt(15))

  // Strong margins
  .where(StockField.OPERATING_MARGIN_FY.gt(15))
  .where(StockField.GROSS_MARGIN_FY.gt(40))

  // Reasonable valuation
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(25))

  // Size
  .where(StockField.MARKET_CAPITALIZATION.gt(2e9))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.RETURN_ON_EQUITY_FY,
    StockField.RETURN_ON_ASSETS_FY,
    StockField.OPERATING_MARGIN_FY,
    StockField.PRICE_TO_EARNINGS_RATIO_TTM
  )
  .sortBy(StockField.RETURN_ON_EQUITY_FY, false);

const results = await screener.get();
```

## Financial Health Screen

Companies with strong balance sheets and low debt:

```typescript
const screener = new StockScreener();

screener
  // Low debt
  .where(StockField.DEBT_TO_EQUITY_FY.lt(0.5))

  // Strong liquidity
  .where(StockField.CURRENT_RATIO_FQ.gt(2))

  // Positive cash flow
  .where(StockField.FREE_CASH_FLOW_FY.gt(0))
  .where(StockField.CASH_F_OPERATING_ACTIVITIES_FY.gt(0))

  // Profitability
  .where(StockField.RETURN_ON_EQUITY_FY.gt(12))
  .where(StockField.NET_MARGIN_FY.gt(5))

  // Value
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(3))

  // Size requirement
  .where(StockField.MARKET_CAPITALIZATION.gt(500e6))

  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.DEBT_TO_EQUITY_FY,
    StockField.CURRENT_RATIO_FQ,
    StockField.FREE_CASH_FLOW_FY,
    StockField.RETURN_ON_EQUITY_FY
  )
  .sortBy(StockField.RETURN_ON_EQUITY_FY, false);

const results = await screener.get();
```

## Multi-Metric Value Screen

Combining multiple valuation and quality metrics:

```typescript
async function comprehensiveValueScreen() {
  const screener = new StockScreener();

  screener
    // Multiple valuation metrics
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(5, 15))
    .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))
    .where(StockField.PRICE_SALES_CURRENT.lt(1.5))
    .where(StockField.ENTERPRISE_VALUE_EBITDA_TTM.lt(10))

    // Quality metrics
    .where(StockField.RETURN_ON_EQUITY_FY.gt(15))
    .where(StockField.RETURN_ON_ASSETS_FY.gt(8))
    .where(StockField.OPERATING_MARGIN_FY.gt(10))

    // Financial health
    .where(StockField.DEBT_TO_EQUITY_FY.lt(1))
    .where(StockField.CURRENT_RATIO_FQ.gt(1.5))

    // Growth (even value stocks should grow)
    .where(StockField.REVENUE_TTM_YOY_GROWTH.gt(0))

    // Profitability
    .where(StockField.NET_INCOME_TTM.gt(0))
    .where(StockField.EARNINGS_PER_SHARE_DILUTED_TTM.gt(0))

    // Size and liquidity
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .where(StockField.VOLUME.gte(200_000))

    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM,
      StockField.PRICE_TO_BOOK_MRQ,
      StockField.RETURN_ON_EQUITY_FY,
      StockField.DEBT_TO_EQUITY_FY,
      StockField.OPERATING_MARGIN_FY,
      StockField.REVENUE_TTM_YOY_GROWTH,
      StockField.MARKET_CAPITALIZATION
    )
    .sortBy(StockField.RETURN_ON_EQUITY_FY, false);

  const results = await screener.get();

  // Score each stock based on valuation and quality metrics
  const scored = results.data.map(stock => {
    let score = 0;

    // Valuation score
    if (stock.price_earnings_ttm < 10) score += 2;
    if (stock.price_book_fq < 1) score += 2;
    if (stock.price_sales_current < 1) score += 1;
    if (stock.enterprise_value_ebitda_ttm < 8) score += 1;

    // Quality score
    if (stock.return_on_equity_fy > 20) score += 3;
    else if (stock.return_on_equity_fy > 15) score += 2;
    if (stock.operating_margin_fy > 15) score += 2;
    if (stock.debt_to_equity_fy < 0.5) score += 2;

    // Growth score
    if (stock.total_revenue_yoy_growth_ttm > 10) score += 2;

    return { ...stock, valueScore: score };
  });

  // Sort by value score
  scored.sort((a, b) => b.valueScore - a.valueScore);

  return scored;
}

// Usage
const topValue = await comprehensiveValueScreen();
console.log('Top value stocks by score:');
console.table(topValue.slice(0, 20));
```

## Streaming Value Updates

Monitor value stocks in real-time:

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

async function monitorValueStocks() {
  const screener = new StockScreener();

  screener
    .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
    .where(StockField.PRICE_TO_BOOK_MRQ.lt(2))
    .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.CHANGE_PERCENT,
      StockField.PRICE_TO_EARNINGS_RATIO_TTM
    )
    .sortBy(StockField.CHANGE_PERCENT, false)
    .setRange(0, 20);

  // Stream updates every 5 seconds
  for await (const data of screener.stream({ interval: 5000, maxIterations: 10 })) {
    if (data) {
      console.clear();
      console.log(`Updated: ${new Date().toLocaleTimeString()}`);
      console.table(data.data);
    }
  }
}

// Run the monitor
monitorValueStocks();
```

## Best Practices

1. **Multiple Metrics**: Use several valuation ratios together (P/E, P/B, P/S, EV/EBITDA, P/FCF)
2. **Quality Matters**: Focus on ROE, ROA, and ROIC to identify efficient companies
3. **Margin Analysis**: Strong operating and net margins indicate pricing power
4. **Financial Health**: Check debt ratios and liquidity ratios (current ratio)
5. **Growth Context**: Even value stocks should show revenue growth
6. **Profitability**: Filter for positive earnings and cash flow
7. **Size Matters**: Use market cap filters to avoid illiquid stocks
8. **Avoid Value Traps**: Combine value metrics with quality indicators

## Available Fields Summary

**Valuation Ratios:**
- `PRICE_TO_EARNINGS_RATIO_TTM`, `PRICE_EARNINGS_GROWTH_TTM`
- `PRICE_SALES_CURRENT`, `PRICE_TO_BOOK_MRQ`
- `ENTERPRISE_VALUE_EBITDA_TTM`, `PRICE_TO_FREE_CASH_FLOW_TTM`

**Profitability & Returns:**
- `RETURN_ON_EQUITY_FY`, `RETURN_ON_ASSETS_FY`, `RETURN_ON_INVESTED_CAPITAL_FY`
- `OPERATING_MARGIN_FY`, `NET_MARGIN_FY`, `GROSS_MARGIN_FY`
- `ASSET_TURNOVER_FY`

**Financial Health:**
- `DEBT_TO_EQUITY_FY`, `CURRENT_RATIO_FQ`
- `FREE_CASH_FLOW_FY`, `CASH_F_OPERATING_ACTIVITIES_FY`

**Fundamentals:**
- `REVENUE_TTM`, `REVENUE_TTM_YOY_GROWTH`
- `NET_INCOME_TTM`, `EARNINGS_PER_SHARE_DILUTED_TTM`
- `MARKET_CAPITALIZATION`

**Price & Volume:**
- `PRICE`, `CHANGE`, `CHANGE_PERCENT`, `VOLUME`

With 3,522 total fields available, you can create highly sophisticated value investing screens tailored to your specific strategy.

## Next Steps

- [Growth Stocks](growth-stocks.md) - High-growth screening
- [Dividend Investing](dividend-investing.md) - Income strategies
- [Technical Analysis](technical-analysis.md) - Momentum indicators
- [Stock Fields Reference](../fields/stock-fields.md) - Complete field list
