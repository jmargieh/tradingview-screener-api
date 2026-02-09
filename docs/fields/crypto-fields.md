# Crypto Fields Reference

Complete reference of available cryptocurrency fields.

## Available Fields

### Basic Fields

```typescript
CryptoField.NAME                // Cryptocurrency name
CryptoField.PRICE               // Current price
CryptoField.CHANGE_PERCENT      // 24-hour percentage change
CryptoField.VOLUME_24H_IN_USD   // 24-hour trading volume in USD
CryptoField.MARKET_CAP          // Market capitalization
```

## Field Details

### NAME
- **Type**: String (text)
- **Format**: `text`
- **Field Name**: `name`

Example:
```typescript
CryptoField.NAME.match('.*bitcoin.*')
```

### PRICE
- **Type**: Number (currency)
- **Format**: `currency`
- **Supports Interval**: Yes
- **Field Name**: `close`

Example:
```typescript
CryptoField.PRICE.gt(1000)
CryptoField.PRICE.between(0.01, 100)
```

### CHANGE_PERCENT
- **Type**: Number (percent)
- **Format**: `percent`
- **Field Name**: `change`

Example:
```typescript
CryptoField.CHANGE_PERCENT.gt(10)      // Top gainers
CryptoField.CHANGE_PERCENT.lt(-10)     // Top losers
```

### VOLUME_24H_IN_USD
- **Type**: Number (currency)
- **Format**: `currency`
- **Field Name**: `Value.Traded`

Example:
```typescript
CryptoField.VOLUME_24H_IN_USD.gte(100_000_000)  // At least $100M volume
```

### MARKET_CAP
- **Type**: Number (currency)
- **Format**: `currency`
- **Field Name**: `market_cap_calc`

Example:
```typescript
CryptoField.MARKET_CAP.gt(1_000_000_000)       // At least $1B market cap
CryptoField.MARKET_CAP.between(1e9, 50e9)      // Between $1B and $50B
```

## Usage Examples

### Large Cap Cryptos

```typescript
import { CryptoScreener, CryptoField } from 'tradingview-screener';

const screener = new CryptoScreener();

screener
  .where(CryptoField.MARKET_CAP.gt(1_000_000_000))
  .where(CryptoField.VOLUME_24H_IN_USD.gte(100_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.MARKET_CAP,
    CryptoField.VOLUME_24H_IN_USD
  )
  .sortBy(CryptoField.MARKET_CAP, false);

const results = await screener.get();
```

### Top Gainers

```typescript
screener
  .where(CryptoField.CHANGE_PERCENT.gt(10))
  .where(CryptoField.MARKET_CAP.gt(100_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT
  )
  .sortBy(CryptoField.CHANGE_PERCENT, false);
```

### High Volume

```typescript
screener
  .where(CryptoField.VOLUME_24H_IN_USD.gte(500_000_000))
  .select(
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.VOLUME_24H_IN_USD
  )
  .sortBy(CryptoField.VOLUME_24H_IN_USD, false);
```

## Field Name Mapping

| Field Constant | fieldName | Access |
|----------------|-----------|--------|
| `NAME` | `name` | `row.name` |
| `PRICE` | `close` | `row.close` |
| `CHANGE_PERCENT` | `change` | `row.change` |
| `VOLUME_24H_IN_USD` | `Value.Traded` | `row['Value.Traded']` |
| `MARKET_CAP` | `market_cap_calc` | `row.market_cap_calc` |

## Working with Results

```typescript
const results = await screener.get();

results.data.forEach(crypto => {
  console.log(`${crypto.name}: $${crypto.close}`);
  console.log(`24h Change: ${crypto.change}%`);
  console.log(`Market Cap: $${crypto.market_cap_calc}`);
  console.log(`Volume: $${crypto['Value.Traded']}`);
});
```

## Next Steps

- [Crypto Screener Guide](../screeners/crypto.md) - Using crypto fields in queries
- [Field System Overview](overview.md) - Understanding fields
- [Filter Operations](../filtering/operations.md) - All comparison operators
