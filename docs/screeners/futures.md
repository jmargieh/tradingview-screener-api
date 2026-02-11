# Futures Screener

Query futures contracts with the Futures Screener.

## Overview

```typescript
import { FuturesScreener, FuturesField } from 'tradingview-screener';

const screener = new FuturesScreener();
```

## Basic Usage

```typescript
screener
  .where(FuturesField.CLOSE.gt(1000))
  .select(FuturesField.NAME, FuturesField.CLOSE);

const results = await screener.get();
console.table(results.data);
```

## Available Fields

```typescript
FuturesField.NAME     // Futures contract name
FuturesField.CLOSE    // Current price
```

## Complete Example

```typescript
import { FuturesScreener, FuturesField } from 'tradingview-screener';

async function findFutures() {
  const screener = new FuturesScreener();

  screener
    .where(FuturesField.CLOSE.gt(100))
    .select(FuturesField.NAME, FuturesField.CLOSE)
    .sortBy(FuturesField.CLOSE, false)
    .setRange(0, 50);

  const results = await screener.get();
  console.table(results.data);
}

findFutures().catch(console.error);
```

## Next Steps

- [Filter Operations](../filtering/operations.md)
- [Basic Usage](../basic-usage.md)
