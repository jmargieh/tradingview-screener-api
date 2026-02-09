# Exceptions API Reference

Error classes and exception handling.

## MalformedRequestException

Primary exception for API request failures.

### Constructor

```typescript
class MalformedRequestException extends Error {
  constructor(
    code: number,
    responseMsg: string,
    url: string,
    payload: string
  )
}
```

#### Parameters

- `code` (number): HTTP status code
- `responseMsg` (string): Error message from API
- `url` (string): Request URL
- `payload` (string): Request payload (JSON string)

### Properties

```typescript
class MalformedRequestException extends Error {
  readonly code: number;           // HTTP status code (400, 500, etc.)
  readonly responseMsg: string;    // API error message
  readonly url: string;           // Request URL
  readonly payload: string;       // Request payload
  readonly name: string;          // 'MalformedRequestException'
  readonly message: string;       // Full error message
  readonly stack?: string;        // Stack trace
}
```

### Example Usage

```typescript
import { MalformedRequestException } from 'tradingview-screener';

try {
  const results = await screener.get();
} catch (error) {
  if (error instanceof MalformedRequestException) {
    console.error('API Error:', error.responseMsg);
    console.error('Status Code:', error.code);
    console.error('URL:', error.url);
    console.error('Payload:', error.payload);
  }
}
```

## Error Codes

### HTTP Status Codes

#### 400 Bad Request

Invalid request parameters or filters.

```typescript
try {
  screener.where(StockField.INVALID_FIELD.gt(100));
  await screener.get();
} catch (error) {
  if (error instanceof MalformedRequestException && error.code === 400) {
    console.error('Bad request:', error.responseMsg);
    // Common causes:
    // - Invalid field names
    // - Malformed filter values
    // - Unsupported operations
  }
}
```

#### 429 Too Many Requests

Rate limit exceeded.

```typescript
try {
  await screener.get();
} catch (error) {
  if (error instanceof MalformedRequestException && error.code === 429) {
    console.error('Rate limited');
    // Wait before retrying
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}
```

#### 500 Internal Server Error

Server-side error.

```typescript
try {
  await screener.get();
} catch (error) {
  if (error instanceof MalformedRequestException && error.code === 500) {
    console.error('Server error:', error.responseMsg);
    // Retry with exponential backoff
  }
}
```

#### 503 Service Unavailable

Service temporarily unavailable.

```typescript
try {
  await screener.get();
} catch (error) {
  if (error instanceof MalformedRequestException && error.code === 503) {
    console.error('Service unavailable');
    // Wait and retry
  }
}
```

## Type Guards

### isMalformedRequestException

Type guard to check exception type.

```typescript
function isMalformedRequestException(
  error: unknown
): error is MalformedRequestException {
  return error instanceof MalformedRequestException;
}

// Usage
try {
  await screener.get();
} catch (error) {
  if (isMalformedRequestException(error)) {
    console.error('API error:', error.responseMsg);
  } else {
    console.error('Unknown error:', error);
  }
}
```

### isNetworkError

Check for network-related errors.

```typescript
function isNetworkError(error: unknown): boolean {
  return (
    error instanceof Error &&
    ('code' in error) &&
    ['ECONNREFUSED', 'ETIMEDOUT', 'ENOTFOUND'].includes((error as any).code)
  );
}

// Usage
try {
  await screener.get();
} catch (error) {
  if (isNetworkError(error)) {
    console.error('Network error - check connection');
  }
}
```

## Error Handling Patterns

### Basic Try-Catch

```typescript
try {
  const results = await screener.get();
  console.table(results.data);
} catch (error) {
  console.error('Query failed:', error);
}
```

### Specific Error Handling

```typescript
try {
  const results = await screener.get();
} catch (error) {
  if (error instanceof MalformedRequestException) {
    switch (error.code) {
      case 400:
        console.error('Invalid request parameters');
        break;
      case 429:
        console.error('Rate limit exceeded');
        break;
      case 500:
        console.error('Server error');
        break;
      default:
        console.error('API error:', error.responseMsg);
    }
  } else if (error instanceof TypeError) {
    console.error('Type error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
}
```

### Retry with Backoff

```typescript
async function getWithRetry(
  screener: StockScreener,
  maxRetries: number = 3
): Promise<ScreenerResult> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await screener.get();
    } catch (error) {
      lastError = error as Error;

      if (error instanceof MalformedRequestException) {
        // Don't retry client errors (4xx)
        if (error.code >= 400 && error.code < 500 && error.code !== 429) {
          throw error;
        }
      }

      // Exponential backoff
      const delay = 1000 * Math.pow(2, attempt);
      console.log(`Retry ${attempt + 1}/${maxRetries} after ${delay}ms`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw lastError;
}
```

### Graceful Degradation

```typescript
async function getResultsWithFallback(
  screener: StockScreener
): Promise<ScreenerResult> {
  try {
    return await screener.get();
  } catch (error) {
    console.warn('Primary query failed, using fallback');

    // Try simplified query
    const fallback = new StockScreener();
    fallback
      .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
      .setRange(0, 50);

    return await fallback.get();
  }
}
```

### Error Logging

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
    errorLog['requestPayload'] = error.payload;
  }

  console.error(JSON.stringify(errorLog, null, 2));

  // Send to error tracking service
  // trackError(errorLog);
}

// Usage
try {
  const results = await screener.get();
} catch (error) {
  logError(error as Error, {
    screenerType: 'stock',
    filterCount: screener['filters'].length,
  });
  throw error;
}
```

## Streaming Error Handling

### Auto-Recovery

```typescript
for await (const data of screener.stream({ interval: 5000 })) {
  if (data === null) {
    // Error occurred but stream continues
    console.log('Temporary error, continuing...');
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
      console.error('Too many errors, stopping stream');
      break;
    }
    continue;
  }

  consecutiveErrors = 0;  // Reset on success
  console.table(data.data);
}
```

## Custom Error Classes

### Create Custom Exception

```typescript
class ScreenerConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ScreenerConfigurationError';
  }
}

// Usage
function validateScreener(screener: StockScreener): void {
  if (screener['filters'].length === 0) {
    throw new ScreenerConfigurationError('No filters configured');
  }

  const range = screener['range'];
  if (range[1] - range[0] > 1000) {
    throw new ScreenerConfigurationError('Range too large (max 1000)');
  }
}

try {
  validateScreener(screener);
  const results = await screener.get();
} catch (error) {
  if (error instanceof ScreenerConfigurationError) {
    console.error('Configuration error:', error.message);
  } else if (error instanceof MalformedRequestException) {
    console.error('API error:', error.responseMsg);
  }
}
```

## Error Messages

### Common Error Messages

#### Invalid Field Name

```
Error 400: Unknown column name "invalid_field"
```

**Solution:** Use correct field name from field enums.

#### Malformed Filter

```
Error 400: Invalid filter operation
```

**Solution:** Check filter operator and value types.

#### Rate Limit

```
Error 429: Too many requests
```

**Solution:** Add delays between requests.

#### Timeout

```
Error: Request timeout
```

**Solution:** Reduce result set size or increase timeout.

## Debugging Errors

### Enable Debug Mode

```typescript
const screener = new StockScreener();

// Enable request logging
screener.where(StockField.PRICE.gt(100));

try {
  // Pass true to log request
  const results = await screener.get(true);
} catch (error) {
  console.error('Request failed');
  console.error('Error:', error);
}
```

### Inspect Request Payload

```typescript
try {
  await screener.get();
} catch (error) {
  if (error instanceof MalformedRequestException) {
    console.log('Request URL:', error.url);
    console.log('Request Payload:');
    console.log(JSON.parse(error.payload));
  }
}
```

### Test Filters Individually

```typescript
// Test each filter separately
const filters = [
  StockField.PRICE.gt(100),
  StockField.VOLUME.gte(1_000_000),
  StockField.MARKET_CAPITALIZATION.gt(1e9),
];

for (const filter of filters) {
  try {
    const screener = new StockScreener();
    screener.where(filter);
    await screener.get();
    console.log('Filter OK:', filter);
  } catch (error) {
    console.error('Filter failed:', filter);
    console.error('Error:', error);
  }
}
```

## Best Practices

1. **Always Handle Errors**: Use try-catch for all async operations
2. **Check Error Type**: Use instanceof to identify error types
3. **Log Context**: Include relevant context in error logs
4. **Retry Transient Errors**: Implement retry logic for network/server errors
5. **Validate Early**: Check configuration before making requests
6. **Provide Fallbacks**: Have backup queries or cached data

## Next Steps

- [BaseScreener API](base-screener.md) - Screener class
- [Error Handling Guide](../advanced/error-handling.md) - Detailed error handling
- [Performance Tips](../advanced/performance.md) - Optimization techniques
