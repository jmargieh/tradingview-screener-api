# Pagination

Working with large result sets using pagination.

## Overview

Pagination allows you to retrieve large datasets in manageable chunks using the `setRange()` method.

```typescript
screener.setRange(from, to);
```

## Basic Pagination

### Setting Range

```typescript
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();

// Get first 50 results (0-49)
screener.setRange(0, 50);

// Get next 50 results (50-99)
screener.setRange(50, 100);

// Get results 100-149
screener.setRange(100, 150);
```

### Default Range

If you don't call `setRange()`, the default range is used:

```typescript
// Default: first 150 results
const results = await screener.get();
// Equivalent to: screener.setRange(0, 150)
```

## Page-Based Pagination

### Calculate Page Ranges

```typescript
const pageSize = 50;
const page = 0;  // 0-indexed

screener.setRange(page * pageSize, (page + 1) * pageSize);

// Page 0: 0-50
// Page 1: 50-100
// Page 2: 100-150
```

### Page Function

```typescript
function getPage(screener: StockScreener, page: number, pageSize: number = 50) {
  const start = page * pageSize;
  const end = start + pageSize;
  screener.setRange(start, end);
  return screener.get();
}

// Usage
const page1 = await getPage(screener, 0);  // First page
const page2 = await getPage(screener, 1);  // Second page
const page3 = await getPage(screener, 2);  // Third page
```

## Fetching All Results

### Sequential Fetching

```typescript
async function getAllResults(screener: StockScreener) {
  const pageSize = 150;  // Max recommended page size
  const allResults: any[] = [];
  let page = 0;

  while (true) {
    screener.setRange(page * pageSize, (page + 1) * pageSize);
    const results = await screener.get();

    allResults.push(...results.data);

    // Stop if we got less than a full page
    if (results.data.length < pageSize) {
      break;
    }

    page++;
  }

  return {
    data: allResults,
    totalCount: allResults.length
  };
}

// Usage
const screener = new StockScreener();
screener.where(StockField.MARKET_CAPITALIZATION.gt(1e9));

const allData = await getAllResults(screener);
console.log(`Retrieved ${allData.totalCount} total results`);
```

### With Progress Reporting

```typescript
async function getAllResultsWithProgress(screener: StockScreener) {
  const pageSize = 150;
  const allResults: any[] = [];
  let page = 0;

  while (true) {
    screener.setRange(page * pageSize, (page + 1) * pageSize);
    const results = await screener.get();

    allResults.push(...results.data);

    console.log(`Fetched page ${page + 1}: ${results.data.length} results`);
    console.log(`Total so far: ${allResults.length} of ${results.totalCount}`);

    if (results.data.length < pageSize) {
      console.log('Reached last page');
      break;
    }

    page++;
  }

  return {
    data: allResults,
    totalCount: allResults.length
  };
}
```

## Total Count

Use `totalCount` to determine how many pages exist:

```typescript
const screener = new StockScreener();
screener.where(StockField.MARKET_CAPITALIZATION.gt(1e9));

// Get first page
screener.setRange(0, 50);
const firstPage = await screener.get();

console.log(`Total matches: ${firstPage.totalCount}`);
console.log(`Fetched: ${firstPage.data.length}`);

// Calculate total pages
const pageSize = 50;
const totalPages = Math.ceil(firstPage.totalCount / pageSize);
console.log(`Total pages: ${totalPages}`);
```

## Practical Examples

### Paginated UI

```typescript
class StockPaginator {
  private screener: StockScreener;
  private pageSize: number;
  private currentPage: number = 0;

  constructor(screener: StockScreener, pageSize: number = 50) {
    this.screener = screener;
    this.pageSize = pageSize;
  }

  async getCurrentPage() {
    this.screener.setRange(
      this.currentPage * this.pageSize,
      (this.currentPage + 1) * this.pageSize
    );
    return await this.screener.get();
  }

  async nextPage() {
    this.currentPage++;
    return await this.getCurrentPage();
  }

  async previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
    return await this.getCurrentPage();
  }

  async goToPage(page: number) {
    this.currentPage = Math.max(0, page);
    return await this.getCurrentPage();
  }

  async getTotalPages() {
    const results = await this.getCurrentPage();
    return Math.ceil(results.totalCount / this.pageSize);
  }
}

// Usage
const paginator = new StockPaginator(screener, 50);

// First page
const page1 = await paginator.getCurrentPage();
console.log(`Page 1: ${page1.data.length} results`);

// Next page
const page2 = await paginator.nextPage();
console.log(`Page 2: ${page2.data.length} results`);

// Jump to page 5
const page5 = await paginator.goToPage(5);
```

### Export to CSV

```typescript
async function exportToCSV(screener: StockScreener, filename: string) {
  const pageSize = 150;
  let page = 0;
  const rows: string[] = [];

  // Add header
  rows.push('Symbol,Name,Price,Volume');

  while (true) {
    screener.setRange(page * pageSize, (page + 1) * pageSize);
    const results = await screener.get();

    // Add data rows
    results.data.forEach(row => {
      rows.push(`${row.symbol},${row.name},${row.close},${row.volume}`);
    });

    console.log(`Exported page ${page + 1}...`);

    if (results.data.length < pageSize) {
      break;
    }

    page++;
  }

  // Write to file
  const fs = require('fs');
  fs.writeFileSync(filename, rows.join('\n'));

  console.log(`Exported ${rows.length - 1} results to ${filename}`);
}

// Usage
const screener = new StockScreener();
screener
  .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
  .select(StockField.NAME, StockField.PRICE, StockField.VOLUME);

await exportToCSV(screener, 'stocks.csv');
```

### Parallel Fetching

```typescript
async function fetchPagesInParallel(
  screener: StockScreener,
  startPage: number,
  endPage: number,
  pageSize: number = 50
) {
  const promises = [];

  for (let page = startPage; page <= endPage; page++) {
    const pageScreener = new StockScreener();
    // Copy filters from original screener
    pageScreener.setRange(page * pageSize, (page + 1) * pageSize);
    promises.push(pageScreener.get());
  }

  const results = await Promise.all(promises);

  // Combine all pages
  const allData = results.flatMap(r => r.data);

  return {
    data: allData,
    totalCount: results[0]?.totalCount || 0
  };
}

// Usage: Fetch pages 0-4 in parallel
const results = await fetchPagesInParallel(screener, 0, 4, 50);
console.log(`Fetched ${results.data.length} total results`);
```

## Performance Considerations

### Optimal Page Size

```typescript
// Too small: Many requests
screener.setRange(0, 10);  // Only 10 results

// Good: Balanced
screener.setRange(0, 50);   // 50 results
screener.setRange(0, 100);  // 100 results

// Large: Fewer requests
screener.setRange(0, 150);  // 150 results

// Recommended maximum
screener.setRange(0, 150);  // Don't exceed this
```

### Rate Limiting

Add delays between pages to avoid rate limiting:

```typescript
async function getAllResultsWithDelay(screener: StockScreener) {
  const pageSize = 150;
  const allResults: any[] = [];
  let page = 0;

  while (true) {
    screener.setRange(page * pageSize, (page + 1) * pageSize);
    const results = await screener.get();

    allResults.push(...results.data);

    if (results.data.length < pageSize) {
      break;
    }

    page++;

    // Delay between pages
    if (results.data.length === pageSize) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  return { data: allResults, totalCount: allResults.length };
}
```

## Handling Errors

### Retry Failed Pages

```typescript
async function fetchPageWithRetry(
  screener: StockScreener,
  page: number,
  pageSize: number,
  maxRetries: number = 3
) {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      screener.setRange(page * pageSize, (page + 1) * pageSize);
      return await screener.get();
    } catch (error) {
      retries++;
      console.error(`Page ${page} failed (attempt ${retries}):`, error);

      if (retries === maxRetries) {
        throw error;
      }

      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000 * retries));
    }
  }
}
```

### Partial Results on Error

```typescript
async function getAllResultsWithErrorHandling(screener: StockScreener) {
  const pageSize = 150;
  const allResults: any[] = [];
  let page = 0;
  let consecutiveErrors = 0;

  while (consecutiveErrors < 3) {
    try {
      screener.setRange(page * pageSize, (page + 1) * pageSize);
      const results = await screener.get();

      allResults.push(...results.data);
      consecutiveErrors = 0;  // Reset on success

      if (results.data.length < pageSize) {
        break;
      }

      page++;
    } catch (error) {
      console.error(`Failed to fetch page ${page}:`, error);
      consecutiveErrors++;
      page++;  // Skip failed page and continue
    }
  }

  return {
    data: allResults,
    totalCount: allResults.length,
    hasErrors: consecutiveErrors > 0
  };
}
```

## Memory Management

### Processing Pages Individually

```typescript
// Good: Process each page separately
async function processInPages(screener: StockScreener) {
  const pageSize = 150;
  let page = 0;

  while (true) {
    screener.setRange(page * pageSize, (page + 1) * pageSize);
    const results = await screener.get();

    // Process page
    processPage(results.data);
    // Data is garbage collected after this

    if (results.data.length < pageSize) {
      break;
    }

    page++;
  }
}

// Avoid: Accumulating all data
async function accumulateAll(screener: StockScreener) {
  const allResults = [];  // Grows indefinitely
  let page = 0;

  while (true) {
    screener.setRange(page * pageSize, (page + 1) * pageSize);
    const results = await screener.get();
    allResults.push(...results.data);  // Memory grows
    page++;
  }
}
```

## Cursor-Based Pagination

For very large datasets, implement cursor-based pagination:

```typescript
async function* paginateWithCursor(screener: StockScreener, pageSize: number = 50) {
  let page = 0;

  while (true) {
    screener.setRange(page * pageSize, (page + 1) * pageSize);
    const results = await screener.get();

    if (results.data.length === 0) {
      break;
    }

    yield {
      data: results.data,
      page,
      hasMore: results.data.length === pageSize,
      totalCount: results.totalCount
    };

    if (results.data.length < pageSize) {
      break;
    }

    page++;
  }
}

// Usage with async generator
for await (const page of paginateWithCursor(screener, 50)) {
  console.log(`Page ${page.page}: ${page.data.length} results`);
  console.log(`Has more: ${page.hasMore}`);

  // Process page
  processData(page.data);
}
```

## Best Practices

### 1. Use Reasonable Page Sizes

```typescript
// Good: Standard page sizes
const pageSize = 50;   // Good for UI
const pageSize = 100;  // Good balance
const pageSize = 150;  // Max recommended

// Avoid: Extreme sizes
const pageSize = 10;   // Too small
const pageSize = 1000; // Too large
```

### 2. Check Total Count First

```typescript
// Get first page to check total
const firstPage = await screener.setRange(0, 50).get();

if (firstPage.totalCount > 10000) {
  console.log('Large dataset, consider adding filters');
}
```

### 3. Add Progress Indication

```typescript
async function fetchWithProgress(screener: StockScreener) {
  const pageSize = 150;
  const firstPage = await screener.setRange(0, pageSize).get();
  const totalPages = Math.ceil(firstPage.totalCount / pageSize);

  const allResults = [...firstPage.data];

  for (let page = 1; page < totalPages; page++) {
    screener.setRange(page * pageSize, (page + 1) * pageSize);
    const results = await screener.get();
    allResults.push(...results.data);

    const progress = ((page + 1) / totalPages * 100).toFixed(1);
    console.log(`Progress: ${progress}% (${page + 1}/${totalPages} pages)`);
  }

  return allResults;
}
```

### 4. Handle Empty Results

```typescript
screener.setRange(0, 50);
const results = await screener.get();

if (results.data.length === 0) {
  console.log('No results found');
  return;
}

console.log(`Found ${results.totalCount} total results`);
```

## Next Steps

- [Performance Tips](performance.md) - Optimizing queries
- [Streaming Data](streaming.md) - Real-time updates
- [Error Handling](error-handling.md) - Handling errors
