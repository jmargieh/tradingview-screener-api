# Filter Operations

Complete reference for all filter operations and comparison operators.

## Overview

Filters define the conditions that results must match. The library provides 15+ comparison operators for building complex queries.

## Basic Operators

### Greater Than (`gt`)

```typescript
StockField.PRICE.gt(100)
// SQL equivalent: WHERE price > 100
```

**Use cases:**
- Price above a threshold
- Volume above average
- Market cap above $1B

```typescript
screener
  .where(StockField.PRICE.gt(50))
  .where(StockField.VOLUME.gt(1_000_000))
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9));
```

### Greater Than or Equal (`gte`)

```typescript
StockField.DIVIDEND_YIELD_FWD.gte(3)
// SQL equivalent: WHERE dividend_yield >= 3
```

**Use cases:**
- Minimum dividend yield
- Minimum volume requirement
- Minimum ratings

```typescript
screener
  .where(StockField.DIVIDEND_YIELD_FWD.gte(3))
  .where(StockField.ANALYST_RECOMMENDATION.gte(3)); // 3 = Buy or better
```

### Less Than (`lt`)

```typescript
StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15)
// SQL equivalent: WHERE pe_ratio < 15
```

**Use cases:**
- Maximum P/E ratio
- Maximum price
- Low volatility

```typescript
screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(15))
  .where(StockField.ATR.lt(5)) // Low volatility
  .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(0.5));
```

### Less Than or Equal (`lte`)

```typescript
StockField.PRICE.lte(500)
// SQL equivalent: WHERE price <= 500
```

**Use cases:**
- Maximum price
- Maximum valuation ratios
- Cap on metrics

```typescript
screener
  .where(StockField.PRICE.lte(500))
  .where(StockField.PRICE_TO_BOOK_MRQ.lte(3))
  .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lte(70));
```

### Equal (`eq`)

```typescript
StockField.SECTOR.eq('Technology')
// SQL equivalent: WHERE sector = 'Technology'
```

**Use cases:**
- Exact matches
- Specific sectors/industries
- Binary flags

```typescript
screener
  .where(StockField.SECTOR.eq('Technology'))
  .where(StockField.COUNTRY.eq('US'))
  .where(StockField.EXCHANGE.eq('NASDAQ'));
```

### Not Equal (`ne`)

```typescript
StockField.SECTOR.ne('Financial')
// SQL equivalent: WHERE sector != 'Financial'
```

**Use cases:**
- Exclude sectors
- Exclude specific values
- Filter out nulls

```typescript
screener
  .where(StockField.SECTOR.ne('Financial'))
  .where(StockField.COUNTRY.ne('CN')); // Exclude China
```

## Range Operators

### Between (`between`)

```typescript
StockField.MARKET_CAPITALIZATION.between(1e9, 100e9)
// SQL equivalent: WHERE market_cap BETWEEN 1e9 AND 100e9
```

**Use cases:**
- Market cap ranges (small, mid, large cap)
- Price ranges
- Valuation ratio ranges

```typescript
screener
  // Mid-cap stocks
  .where(StockField.MARKET_CAPITALIZATION.between(2e9, 10e9))
  // Moderate P/E ratio
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(10, 20))
  // Price range
  .where(StockField.PRICE.between(10, 100))
  // RSI not overbought/oversold
  .where(StockField.RSI.between(40, 60));
```

### Not Between (`notBetween`)

```typescript
StockField.RSI.notBetween(30, 70)
// SQL equivalent: WHERE rsi NOT BETWEEN 30 AND 70
```

**Use cases:**
- Exclude mid-range values
- Find extreme values
- Overbought/oversold conditions

```typescript
screener
  // Find overbought or oversold
  .where(StockField.RSI.notBetween(30, 70))
  // Avoid mid-cap
  .where(StockField.MARKET_CAPITALIZATION.notBetween(2e9, 10e9));
```

## List Operators

### In List (`isin`)

```typescript
StockField.SECTOR.isin(['Technology', 'Healthcare', 'Consumer Cyclical'])
// SQL equivalent: WHERE sector IN ('Technology', 'Healthcare', 'Consumer Cyclical')
```

**Use cases:**
- Multiple sectors
- Multiple countries
- Whitelist of values

```typescript
screener
  // Tech, Healthcare, or Consumer
  .where(StockField.SECTOR.isin([
    'Technology',
    'Healthcare',
    'Consumer Cyclical'
  ]))
  // US, Canada, or UK
  .where(StockField.COUNTRY.isin(['US', 'CA', 'GB']))
  // Specific exchanges
  .where(StockField.EXCHANGE.isin(['NASDAQ', 'NYSE']));
```

### Not In List (`notIn`)

```typescript
StockField.SECTOR.notIn(['Financial', 'Real Estate'])
// SQL equivalent: WHERE sector NOT IN ('Financial', 'Real Estate')
```

**Use cases:**
- Exclude sectors
- Blacklist values
- Filter out multiple values

```typescript
screener
  // Exclude cyclical sectors
  .where(StockField.SECTOR.notIn([
    'Financial',
    'Real Estate',
    'Utilities'
  ]))
  // Exclude certain countries
  .where(StockField.COUNTRY.notIn(['CN', 'RU']));
```

## Text Operators

### Match (Regex) (`match`)

```typescript
StockField.NAME.match('.*bank.*')
// SQL equivalent: WHERE name LIKE '%bank%' (roughly)
```

**Use cases:**
- Pattern matching
- Search by keyword
- Fuzzy matching

```typescript
screener
  // Find banks
  .where(StockField.NAME.match('.*bank.*'))
  // Find energy companies
  .where(StockField.NAME.match('.*(energy|oil|gas).*'));
```

### Not Match (`notMatch`)

```typescript
StockField.NAME.notMatch('.*tech.*')
// SQL equivalent: WHERE name NOT LIKE '%tech%'
```

**Use cases:**
- Exclude keywords
- Filter out patterns

```typescript
screener
  .where(StockField.NAME.notMatch('.*acquisition.*'))
  .where(StockField.NAME.notMatch('.*SPAC.*'));
```

## Array Operators

### Has (Contains Any) (`has`)

```typescript
StockField.TAGS.has(['dividend', 'value'])
// Has at least one of the values
```

**Use cases:**
- Tag filtering
- Category matching
- Multi-value fields

```typescript
screener
  .where(StockField.TAGS.has(['dividend', 'growth']))
  .where(StockField.CATEGORIES.has(['ESG', 'sustainable']));
```

### Has None Of (`hasNoneOf`)

```typescript
StockField.TAGS.hasNoneOf(['speculative', 'penny'])
// SQL equivalent: none of the tags match
```

**Use cases:**
- Exclude tags
- Filter out categories

```typescript
screener
  .where(StockField.TAGS.hasNoneOf(['penny', 'otc', 'delisted']));
```

## Technical Analysis Operators

### Above (`above`)

```typescript
StockField.PRICE.above(StockField.MOVING_AVERAGE_200)
// Price above 200-day MA
```

**Note:** Field-to-field comparisons may not be supported by all operators.

### Below (`below`)

```typescript
StockField.PRICE.below(StockField.MOVING_AVERAGE_50)
// Price below 50-day MA
```

### Crosses (`crosses`)

```typescript
StockField.PRICE.crosses(StockField.MOVING_AVERAGE_50)
// Price recently crossed MA
```

### Crosses Above (`crossesAbove`)

```typescript
StockField.PRICE.crossesAbove(StockField.MOVING_AVERAGE_50)
// Price crossed above MA (golden cross when MA is 200)
```

### Crosses Below (`crossesBelow`)

```typescript
StockField.PRICE.crossesBelow(StockField.MOVING_AVERAGE_200)
// Price crossed below MA (death cross)
```

## Combining Operators

### Multiple Conditions (AND)

All `where()` clauses are combined with AND logic:

```typescript
screener
  .where(StockField.PRICE.gt(10))            // AND
  .where(StockField.PRICE.lt(500))           // AND
  .where(StockField.VOLUME.gte(100_000))     // AND
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9));
```

This is equivalent to:
```sql
WHERE price > 10
  AND price < 500
  AND volume >= 100000
  AND market_cap > 1000000000
```

### OR Logic

For OR conditions, use `isin()` or multiple queries:

```typescript
// Option 1: Use isin for OR on same field
screener.where(StockField.SECTOR.isin(['Technology', 'Healthcare']));
// sector = 'Technology' OR sector = 'Healthcare'

// Option 2: Run separate queries and merge
const tech = await screener1.where(StockField.SECTOR.eq('Technology')).get();
const health = await screener2.where(StockField.SECTOR.eq('Healthcare')).get();
const combined = [...tech.data, ...health.data];
```

### Complex Conditions

```typescript
screener
  // Market cap: large cap OR mid cap with high volume
  .where(StockField.MARKET_CAPITALIZATION.gt(2e9))
  .where(StockField.VOLUME.gte(500_000))

  // Price: between $10-500 OR momentum play above $500
  .where(StockField.PRICE.gt(10))

  // Valuation: reasonable P/E
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.lt(30))

  // Quality: profitable with positive growth
  .where(StockField.NET_INCOME_TTM.gt(0))
  .where(StockField.REVENUE_GROWTH_TTM.gt(0));
```

## Operator Precedence

All conditions are evaluated with AND logic. Order doesn't affect results but can affect readability:

```typescript
// Recommended order: most restrictive first
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(10e9))    // Most restrictive
  .where(StockField.SECTOR.eq('Technology'))            // Medium
  .where(StockField.PRICE.gt(10));                      // Least restrictive
```

## Common Patterns

### Value Investing Screen

```typescript
screener
  .where(StockField.PRICE_TO_EARNINGS_RATIO_TTM.between(5, 15))
  .where(StockField.PRICE_TO_BOOK_MRQ.lt(3))
  .where(StockField.DIVIDEND_YIELD_FWD.gte(2))
  .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(1))
  .where(StockField.CURRENT_RATIO_MRQ.gt(1.5));
```

### Growth Investing Screen

```typescript
screener
  .where(StockField.REVENUE_GROWTH_TTM.gt(20))
  .where(StockField.EARNINGS_GROWTH_TTM.gt(15))
  .where(StockField.OPERATING_MARGIN_TTM.gt(15))
  .where(StockField.RETURN_ON_EQUITY_TTM.gt(15));
```

### Momentum Trading Screen

```typescript
screener
  .where(StockField.RSI.between(50, 70))
  .where(StockField.CHANGE_PERCENT.gt(2))
  .where(StockField.VOLUME.gte(StockField.AVERAGE_VOLUME_30D * 1.5))
  .where(StockField.PRICE.above(StockField.MOVING_AVERAGE_50));
```

### Quality Dividend Screen

```typescript
screener
  .where(StockField.DIVIDEND_YIELD_FWD.between(3, 8))
  .where(StockField.DIVIDEND_PAYOUT_RATIO_TTM.lte(60))
  .where(StockField.DIVIDEND_GROWTH_RATE_5Y.gt(5))
  .where(StockField.CURRENT_RATIO_MRQ.gt(1.2))
  .where(StockField.DEBT_TO_EQUITY_RATIO_MRQ.lt(1.5));
```

## Error Handling

### Invalid Comparisons

```typescript
// ❌ Field-to-field comparison (not supported)
try {
  StockField.PRICE.gt(StockField.MOVING_AVERAGE_200);
} catch (error) {
  console.error('Field-to-field comparisons not supported');
}

// ✓ Use value comparison
StockField.PRICE.gt(100);
```

### Type Mismatches

```typescript
// ❌ Wrong type
StockField.PRICE.eq('expensive'); // Error: expects number

// ✓ Correct type
StockField.PRICE.gt(100);
StockField.SECTOR.eq('Technology');
```

## Performance Tips

1. **Most Selective First** - Apply the most restrictive filters first
2. **Use Ranges** - `between()` is more efficient than multiple comparisons
3. **Limit isin()** - Keep array sizes reasonable (< 50 items)
4. **Avoid Regex** - Text matching can be slow on large datasets

## Next Steps

- [Complex Queries](complex-queries.md) - Advanced filtering techniques
- [Field Reference](../fields/stock-fields.md) - All available fields
- [Examples](../examples/value-investing.md) - Real-world screening examples
