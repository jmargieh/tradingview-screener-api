# Error Handling

Handling errors and exceptions gracefully.

## Overview

The library provides structured error handling with custom exceptions and recovery strategies.

## MalformedRequestException

The primary exception thrown when API requests fail.

```typescript
import { MalformedRequestException } from 'tradingview-screener';

try {
  const results = await screener.get();
} catch (error) {
  if (error instanceof MalformedRequestException) {
    console.error('API Error:', error.responseMsg);
    console.error('Error Code:', error.code);
    console.error('URL:', error.url);
    console.error('Payload:', error.payload);
  }
}
```

## Exception Properties

```typescript
class MalformedRequestException extends Error {
  code: number;           // HTTP status code
  responseMsg: string;    // Error message from API
  url: string;           // Request URL
  payload: string;       // Request payload (JSON)
}
```

## Common Error Scenarios

### Invalid Field Name

```typescript
try {
  screener.select(StockField.PRICE, 'invalid_field');
  const results = await screener.get();
} catch (error) {
  if (error instanceof MalformedRequestException) {
    console.error('Invalid field name');
    // Error code: 400
  }
}
```

### Invalid Filter Values

```typescript
try {
  // Negative market cap doesn't make sense
  screener.where(StockField.MARKET_CAPITALIZATION.lt(-1000));
  const results = await screener.get();
} catch (error) {
  if (error instanceof MalformedRequestException) {
    console.error('Invalid filter value');
  }
}
```

### Network Errors

```typescript
try {
  const results = await screener.get();
} catch (error) {
  if (error.code === 'ECONNREFUSED') {
    console.error('Cannot connect to TradingView API');
  } else if (error.code === 'ETIMEDOUT') {
    console.error('Request timed out');
  }
}
```

### Rate Limiting

```typescript
try {
  const results = await screener.get();
} catch (error) {
  if (error instanceof MalformedRequestException && error.code === 429) {
    console.error('Rate limit exceeded, please wait before retrying');
    // Wait and retry
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}
```

## Error Recovery Patterns

### Retry with Backoff

```typescript
async function getWithRetry(
  screener: StockScreener,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<ScreenerResult> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await screener.get();
    } catch (error) {
      lastError = error as Error;

      if (error instanceof MalformedRequestException) {
        // Don't retry client errors (4xx)
        if (error.code >= 400 && error.code < 500) {
          throw error;
        }
      }

      // Exponential backoff
      const delay = baseDelay * Math.pow(2, attempt);
      console.log(`Attempt ${attempt + 1} failed, retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw lastError;
}

// Usage
try {
  const results = await getWithRetry(screener);
  console.table(results.data);
} catch (error) {
  console.error('All retry attempts failed:', error);
}
```

### Fallback Values

```typescript
async function getResultsWithFallback(
  screener: StockScreener
): Promise<ScreenerResult> {
  try {
    return await screener.get();
  } catch (error) {
    console.warn('Failed to fetch results, returning empty result set');
    return {
      data: [],
      totalCount: 0,
    };
  }
}
```

### Graceful Degradation

```typescript
async function getResultsWithDegradation(
  screener: StockScreener
): Promise<ScreenerResult> {
  try {
    // Try full query
    return await screener.get();
  } catch (error) {
    console.warn('Full query failed, trying simplified query...');

    try {
      // Remove some filters and try again
      const simplified = new StockScreener();
      simplified
        .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
        .setRange(0, 50);

      return await simplified.get();
    } catch (fallbackError) {
      throw error; // Throw original error
    }
  }
}
```

## Validation Before Request

Validate inputs before making requests to catch errors early:

```typescript
function validateFilters(screener: StockScreener): boolean {
  // Check if any filters are set
  if (screener['filters'].length === 0) {
    console.warn('No filters set, query may return too many results');
  }

  // Validate range
  const range = screener['range'];
  if (range[1] - range[0] > 1000) {
    console.warn('Requesting more than 1000 results may be slow');
  }

  return true;
}

// Usage
if (validateFilters(screener)) {
  const results = await screener.get();
}
```

## Error Logging

### Structured Error Logging

```typescript
function logError(error: Error, context: Record<string, any>): void {
  const errorLog = {
    timestamp: new Date().toISOString(),
    error: error.message,
    stack: error.stack,
    ...context,
  };

  if (error instanceof MalformedRequestException) {
    errorLog['apiCode'] = error.code;
    errorLog['apiMessage'] = error.responseMsg;
    errorLog['requestUrl'] = error.url;
  }

  console.error(JSON.stringify(errorLog, null, 2));
}

// Usage
try {
  const results = await screener.get();
} catch (error) {
  logError(error as Error, {
    screenerType: 'stock',
    filterCount: screener['filters'].length,
  });
}
```

## Streaming Error Handling

### Automatic Recovery

```typescript
for await (const data of screener.stream({ interval: 5000 })) {
  if (data === null) {
    // Error occurred but stream continues
    console.log('Temporary error, waiting for next update...');
    continue;
  }

  console.table(data.data);
}
```

### Manual Error Control

```typescript
let consecutiveErrors = 0;
const maxErrors = 3;

for await (const data of screener.stream({ interval: 5000 })) {
  if (data === null) {
    consecutiveErrors++;
    console.error(`Error ${consecutiveErrors}/${maxErrors}`);

    if (consecutiveErrors >= maxErrors) {
      console.error('Too many consecutive errors, stopping stream');
      break;
    }
    continue;
  }

  // Reset on success
  consecutiveErrors = 0;
  console.table(data.data);
}
```

### Stream Timeout

```typescript
async function streamWithTimeout(
  screener: StockScreener,
  timeout: number = 60000
): Promise<void> {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Stream timeout')), timeout);
  });

  const streamPromise = (async () => {
    for await (const data of screener.stream({ maxIterations: 10 })) {
      if (data) {
        console.table(data.data);
      }
    }
  })();

  try {
    await Promise.race([streamPromise, timeoutPromise]);
  } catch (error) {
    console.error('Stream error:', error);
  }
}
```

## Partial Results on Error

```typescript
async function getAllResultsPartial(
  screener: StockScreener
): Promise<{ data: any[], errors: Error[] }> {
  const pageSize = 150;
  const allResults: any[] = [];
  const errors: Error[] = [];
  let page = 0;

  while (true) {
    try {
      screener.setRange(page * pageSize, (page + 1) * pageSize);
      const results = await screener.get();

      allResults.push(...results.data);

      if (results.data.length < pageSize) {
        break;
      }
    } catch (error) {
      console.error(`Failed to fetch page ${page}:`, error);
      errors.push(error as Error);

      // Continue to next page despite error
      if (errors.length >= 5) {
        console.error('Too many errors, stopping pagination');
        break;
      }
    }

    page++;
  }

  return { data: allResults, errors };
}

// Usage
const { data, errors } = await getAllResultsPartial(screener);
console.log(`Retrieved ${data.length} results with ${errors.length} errors`);
```

## Error Boundary Pattern

```typescript
class ScreenerRunner {
  private screener: StockScreener;

  constructor(screener: StockScreener) {
    this.screener = screener;
  }

  async runSafely<T>(
    operation: (screener: StockScreener) => Promise<T>,
    onError?: (error: Error) => T | null
  ): Promise<T | null> {
    try {
      return await operation(this.screener);
    } catch (error) {
      console.error('Operation failed:', error);

      if (onError) {
        return onError(error as Error);
      }

      return null;
    }
  }
}

// Usage
const runner = new ScreenerRunner(screener);

const results = await runner.runSafely(
  async (s) => await s.get(),
  (error) => {
    console.log('Using cached results...');
    return { data: cachedData, totalCount: cachedData.length };
  }
);
```

## Type Guards

```typescript
function isMalformedRequestException(
  error: unknown
): error is MalformedRequestException {
  return error instanceof MalformedRequestException;
}

function isNetworkError(error: unknown): boolean {
  return (
    error instanceof Error &&
    ('code' in error) &&
    (error as any).code === 'ECONNREFUSED'
  );
}

// Usage
try {
  const results = await screener.get();
} catch (error) {
  if (isMalformedRequestException(error)) {
    console.error('API error:', error.responseMsg);
  } else if (isNetworkError(error)) {
    console.error('Network error');
  } else {
    console.error('Unknown error:', error);
  }
}
```

## Error Recovery Strategies

### Circuit Breaker Pattern

```typescript
class CircuitBreaker {
  private failures = 0;
  private lastFailTime = 0;
  private readonly threshold = 3;
  private readonly timeout = 30000; // 30 seconds

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    // Check if circuit is open
    if (this.failures >= this.threshold) {
      const timeSinceLastFail = Date.now() - this.lastFailTime;

      if (timeSinceLastFail < this.timeout) {
        throw new Error('Circuit breaker is OPEN');
      }

      // Try to close circuit
      this.failures = 0;
    }

    try {
      const result = await fn();
      this.failures = 0; // Reset on success
      return result;
    } catch (error) {
      this.failures++;
      this.lastFailTime = Date.now();
      throw error;
    }
  }
}

// Usage
const breaker = new CircuitBreaker();

async function getResultsSafely() {
  try {
    return await breaker.execute(() => screener.get());
  } catch (error) {
    if (error.message === 'Circuit breaker is OPEN') {
      console.log('Service temporarily unavailable');
      return null;
    }
    throw error;
  }
}
```

## Best Practices

### 1. Always Handle Errors

```typescript
// Good: Explicit error handling
try {
  const results = await screener.get();
  processResults(results);
} catch (error) {
  handleError(error);
}

// Bad: No error handling
const results = await screener.get(); // May crash
```

### 2. Use Specific Error Types

```typescript
// Good: Check error type
if (error instanceof MalformedRequestException) {
  handleApiError(error);
}

// Bad: Generic error handling
console.error('Error:', error);
```

### 3. Log Context

```typescript
// Good: Log context
console.error('Failed to fetch stocks', {
  filters: screener['filters'].length,
  range: screener['range'],
  error: error.message,
});

// Bad: No context
console.error(error);
```

### 4. Don't Swallow Errors

```typescript
// Good: Re-throw or handle
try {
  await screener.get();
} catch (error) {
  console.error('Query failed:', error);
  throw error; // Let caller handle
}

// Bad: Silent failure
try {
  await screener.get();
} catch (error) {
  // Nothing - error is lost
}
```

## Testing Error Handling

```typescript
import { describe, it, expect, vi } from 'vitest';

describe('Error Handling', () => {
  it('should handle API errors', async () => {
    const screener = new StockScreener();

    // Mock HTTP to throw error
    vi.spyOn(screener as any, '_makeRequest').mockRejectedValue(
      new MalformedRequestException(400, 'Invalid request', 'url', '{}')
    );

    await expect(screener.get()).rejects.toThrow(MalformedRequestException);
  });

  it('should retry on network error', async () => {
    const screener = new StockScreener();
    let attempts = 0;

    vi.spyOn(screener as any, '_makeRequest').mockImplementation(() => {
      attempts++;
      if (attempts < 3) {
        throw new Error('Network error');
      }
      return Promise.resolve({ data: [], totalCount: 0 });
    });

    const results = await getWithRetry(screener);
    expect(attempts).toBe(3);
  });
});
```

## Next Steps

- [Performance Tips](performance.md) - Optimize queries
- [Basic Usage](../basic-usage.md) - Core concepts
- [API Reference](../api/base-screener.md) - Complete API
