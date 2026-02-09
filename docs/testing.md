# Testing

Guide for running and writing tests.

## Running Tests

### All Tests

```bash
npm test
```

### Specific Test File

```bash
npm test -- src/fields/BaseField.test.ts
```

### Watch Mode

```bash
npm run test:watch
```

### Coverage Report

```bash
npm run test:coverage
```

Opens HTML coverage report in browser.

### Type Checking

```bash
npm run type-check
```

## Test Structure

### Directory Layout

```
tests/
├── unit/
│   ├── fields.test.ts
│   ├── filters.test.ts
│   ├── fieldConditions.test.ts
│   ├── formatters.test.ts
│   ├── columns.test.ts
│   ├── beautify.test.ts
│   └── exceptions.test.ts
└── integration/
    ├── stockScreener.test.ts
    ├── cryptoScreener.test.ts
    └── otherScreeners.test.ts
```

## Writing Unit Tests

### Basic Test

```typescript
import { describe, it, expect } from 'vitest';
import { BaseField } from '../src/fields/BaseField';

describe('BaseField', () => {
  it('should create field with metadata', () => {
    const field = new BaseField('TEST', {
      label: 'Test Field',
      fieldName: 'test_field',
      format: 'float',
      interval: false,
      historical: false,
    });

    expect(field.name).toBe('TEST');
    expect(field.metadata.label).toBe('Test Field');
  });
});
```

### Testing Comparison Operators

```typescript
describe('Comparison Operators', () => {
  const field = new BaseField('PRICE', metadata);

  it('should create gt condition', () => {
    const condition = field.gt(100);

    expect(condition.field).toBe(field);
    expect(condition.operation).toBe(FilterOperator.GREATER);
    expect(condition.value).toBe(100);
  });

  it('should create between condition', () => {
    const condition = field.between(10, 500);

    expect(condition.operation).toBe(FilterOperator.IN_RANGE);
    expect(condition.value).toEqual([10, 500]);
  });
});
```

### Testing Field Modifiers

```typescript
describe('Field Modifiers', () => {
  it('should create field with interval', () => {
    const field = new BaseField('PRICE', metadata);
    const modified = field.withInterval('1W');

    expect(modified).toBeInstanceOf(FieldWithInterval);
    expect(modified.interval).toBe('1W');
    expect(modified.baseField).toBe(field);
  });

  it('should create field with history', () => {
    const field = new BaseField('PRICE', metadata);
    const modified = field.withHistory(30);

    expect(modified).toBeInstanceOf(FieldWithHistory);
    expect(modified.bars).toBe(30);
  });
});
```

### Testing Filters

```typescript
describe('Filter', () => {
  it('should convert to dict', () => {
    const filter = new Filter('close', FilterOperator.GREATER, 100);
    const dict = filter.toDict();

    expect(dict).toEqual({
      left: 'close',
      operation: 'greater',
      right: 100,
    });
  });

  it('should handle range filters', () => {
    const filter = new Filter(
      'market_cap_basic',
      FilterOperator.IN_RANGE,
      [1e9, 10e9]
    );
    const dict = filter.toDict();

    expect(dict.right).toEqual([1e9, 10e9]);
  });
});
```

### Testing Formatters

```typescript
describe('Formatters', () => {
  describe('millify', () => {
    it('should format thousands', () => {
      expect(millify(1000)).toBe('1K');
      expect(millify(1500)).toBe('1.5K');
    });

    it('should format millions', () => {
      expect(millify(1_000_000)).toBe('1M');
      expect(millify(1_234_567)).toBe('1.23M');
    });

    it('should format billions', () => {
      expect(millify(1_000_000_000)).toBe('1B');
    });

    it('should handle negative numbers', () => {
      expect(millify(-1_500_000)).toBe('-1.5M');
    });
  });

  describe('formatCurrency', () => {
    it('should format with default symbol', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });

    it('should format with custom symbol', () => {
      expect(formatCurrency(1234.56, '€')).toBe('€1,234.56');
    });
  });
});
```

## Writing Integration Tests

### Mock HTTP Requests

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { StockScreener, StockField } from '../src';

describe('StockScreener Integration', () => {
  let screener: StockScreener;

  beforeEach(() => {
    screener = new StockScreener();
  });

  it('should fetch stock data', async () => {
    const mockData = {
      data: [
        {
          symbol: 'AAPL',
          name: 'Apple Inc.',
          close: 150.25,
          volume: 50_000_000,
        },
      ],
      totalCount: 1,
    };

    // Mock the HTTP request
    vi.spyOn(screener as any, '_makeRequest').mockResolvedValue(mockData);

    screener
      .where(StockField.PRICE.gt(100))
      .select(StockField.NAME, StockField.PRICE, StockField.VOLUME);

    const results = await screener.get();

    expect(results.data).toEqual(mockData.data);
    expect(results.totalCount).toBe(1);
  });

  it('should handle errors', async () => {
    const mockError = new MalformedRequestException(
      400,
      'Invalid request',
      'https://api.example.com',
      '{}'
    );

    vi.spyOn(screener as any, '_makeRequest').mockRejectedValue(mockError);

    await expect(screener.get()).rejects.toThrow(MalformedRequestException);
  });
});
```

### Testing Multiple Screeners

```typescript
describe('All Screeners', () => {
  it('should work with StockScreener', async () => {
    const screener = new StockScreener();
    vi.spyOn(screener as any, '_makeRequest').mockResolvedValue({
      data: [],
      totalCount: 0,
    });

    const results = await screener.get();
    expect(results).toHaveProperty('data');
  });

  it('should work with CryptoScreener', async () => {
    const screener = new CryptoScreener();
    vi.spyOn(screener as any, '_makeRequest').mockResolvedValue({
      data: [],
      totalCount: 0,
    });

    const results = await screener.get();
    expect(results).toHaveProperty('data');
  });
});
```

## Testing Async Code

### Testing Promises

```typescript
it('should fetch data asynchronously', async () => {
  const screener = new StockScreener();

  const promise = screener.get();

  await expect(promise).resolves.toHaveProperty('data');
  await expect(promise).resolves.toHaveProperty('totalCount');
});
```

### Testing Async Generators

```typescript
it('should stream data', async () => {
  const screener = new StockScreener();

  vi.spyOn(screener as any, '_makeRequest').mockResolvedValue({
    data: [{ symbol: 'AAPL', close: 150 }],
    totalCount: 1,
  });

  const results = [];
  let count = 0;

  for await (const data of screener.stream({ maxIterations: 3 })) {
    if (data) {
      results.push(data);
    }
    count++;
    if (count >= 3) break;
  }

  expect(results.length).toBeGreaterThan(0);
});
```

## Test Utilities

### Setup and Teardown

```typescript
describe('Screener Tests', () => {
  let screener: StockScreener;

  beforeEach(() => {
    // Setup before each test
    screener = new StockScreener();
  });

  afterEach(() => {
    // Cleanup after each test
    vi.clearAllMocks();
  });

  it('should run test', () => {
    // Test code
  });
});
```

### Shared Test Data

```typescript
const mockStockData = {
  symbol: 'AAPL',
  name: 'Apple Inc.',
  close: 150.25,
  volume: 50_000_000,
  market_cap_basic: 2_500_000_000_000,
};

const mockFieldMetadata: FieldMetadata = {
  label: 'Test Field',
  fieldName: 'test_field',
  format: 'float',
  interval: false,
  historical: false,
};

describe('Tests', () => {
  it('should use mock data', () => {
    expect(mockStockData.symbol).toBe('AAPL');
  });
});
```

## Testing Edge Cases

### Boundary Values

```typescript
describe('Edge Cases', () => {
  it('should handle zero', () => {
    expect(millify(0)).toBe('0');
  });

  it('should handle very large numbers', () => {
    expect(millify(1_234_567_890_123)).toBe('1.23T');
  });

  it('should handle very small numbers', () => {
    expect(formatFloat(0.001, 3)).toBe('0.001');
  });

  it('should handle negative numbers', () => {
    expect(millify(-1_500_000)).toBe('-1.5M');
  });
});
```

### Error Conditions

```typescript
describe('Error Handling', () => {
  it('should throw on invalid field', () => {
    expect(() => {
      new BaseField('', metadata);
    }).toThrow();
  });

  it('should validate field-to-field comparison', () => {
    const field1 = new BaseField('PRICE', metadata);
    const field2 = new BaseField('VOLUME', metadata);

    expect(() => {
      new FieldCondition(field1, FilterOperator.GREATER, field2);
    }).toThrow('Field-to-field comparisons are not supported');
  });
});
```

### Null/Undefined Values

```typescript
describe('Null Handling', () => {
  it('should handle null gracefully', () => {
    const result = formatValue(null);
    expect(result).toBe('N/A');
  });

  it('should handle undefined', () => {
    const result = formatValue(undefined);
    expect(result).toBe('N/A');
  });
});
```

## Snapshot Testing

```typescript
describe('Snapshot Tests', () => {
  it('should match filter snapshot', () => {
    const filter = new Filter('close', FilterOperator.GREATER, 100);
    expect(filter.toDict()).toMatchSnapshot();
  });

  it('should match formatted output', () => {
    const formatted = formatCurrency(1234.56);
    expect(formatted).toMatchSnapshot();
  });
});
```

## Performance Testing

```typescript
describe('Performance', () => {
  it('should complete within time limit', () => {
    const start = Date.now();

    // Perform operation
    for (let i = 0; i < 10000; i++) {
      millify(i * 1000);
    }

    const duration = Date.now() - start;
    expect(duration).toBeLessThan(1000);  // Should complete in < 1 second
  });
});
```

## Coverage Goals

### Minimum Coverage

- **Statements**: 80%
- **Branches**: 75%
- **Functions**: 80%
- **Lines**: 80%

### View Coverage Report

```bash
npm run test:coverage
```

Opens HTML report showing:
- Covered/uncovered lines
- Branch coverage
- Function coverage
- File-by-file breakdown

### Coverage by File

```
File                  | % Stmts | % Branch | % Funcs | % Lines
----------------------|---------|----------|---------|--------
BaseField.ts          |   95.23 |    91.67 |  100.00 |   95.00
Filter.ts             |   98.41 |    95.83 |  100.00 |   98.21
BaseScreener.ts       |   88.57 |    78.26 |   92.31 |   88.24
formatters.ts         |   96.55 |    93.75 |  100.00 |   96.43
```

## Continuous Integration

Tests run automatically on:
- Pull requests
- Commits to main
- Release tags

### CI Configuration

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18

      - run: npm install
      - run: npm run type-check
      - run: npm test
      - run: npm run test:coverage
```

## Best Practices

1. **Test Behavior, Not Implementation**: Test what code does, not how
2. **One Assertion Per Test**: Keep tests focused
3. **Use Descriptive Names**: `it('should format currency with symbol')`
4. **Mock External Dependencies**: Don't call real APIs in tests
5. **Test Edge Cases**: Zero, null, negative, very large values
6. **Keep Tests Fast**: Unit tests should run in milliseconds
7. **Maintain Test Coverage**: Aim for 80%+ coverage
8. **Update Tests with Code**: Keep tests in sync with changes

## Next Steps

- [Contributing Guide](contributing.md) - Contribution guidelines
- [Architecture](architecture.md) - Project structure
- [Architecture](architecture.md) - Project structure
