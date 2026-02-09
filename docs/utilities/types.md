# Type System

TypeScript types and interfaces reference.

## Overview

Complete TypeScript type definitions for the TradingView Screener API library.

## Core Types

### FieldMetadata

Metadata for screener fields.

```typescript
export interface FieldMetadata {
  label: string;        // Human-readable label
  fieldName: string;    // Internal API field name
  format: FieldFormat;  // How to format the value
  interval: boolean;    // Supports time intervals
  historical: boolean;  // Supports historical data
}
```

#### Example

```typescript
const priceMetadata: FieldMetadata = {
  label: 'Price',
  fieldName: 'close',
  format: 'currency',
  interval: true,
  historical: false,
};
```

### FieldFormat

Format types for field values.

```typescript
export type FieldFormat =
  | 'currency'              // $1,234.56
  | 'percent'               // 12.34%
  | 'float'                 // 123.46
  | 'round'                 // 123
  | 'number_group'          // 1,234,567
  | 'text'                  // Raw text
  | 'date'                  // Date string
  | 'bool'                  // true/false
  | 'rating'                // Strong Buy, Buy, Hold, Sell, Strong Sell
  | 'recommendation'        // Similar to rating
  | 'computed_recommendation'; // Technical recommendation
```

#### Usage

```typescript
function formatValue(value: any, format: FieldFormat): string {
  switch (format) {
    case 'currency':
      return formatCurrency(value);
    case 'percent':
      return formatPercent(value);
    case 'float':
      return formatFloat(value);
    // ... other cases
  }
}
```

## Query Types

### QueryPayload

Complete API request payload.

```typescript
export interface QueryPayload {
  filter: FilterDict[];             // Filter conditions
  options: Record<string, any>;     // Query options
  symbols: SymbolsConfig;           // Symbol configuration
  sort?: SortConfig;                // Sort configuration
  range: [number, number];          // Result range [from, to]
  columns: string[];                // Fields to return
}
```

#### Example

```typescript
const payload: QueryPayload = {
  filter: [
    { left: 'close', operation: 'greater', right: 100 },
  ],
  options: { lang: 'en' },
  symbols: { query: { types: [] }, tickers: [] },
  sort: { sortBy: 'market_cap_basic', sortOrder: 'desc' },
  range: [0, 50],
  columns: ['name', 'close', 'volume'],
};
```

### FilterDict

Internal filter representation.

```typescript
export interface FilterDict {
  left: string;           // Field name
  operation: string;      // FilterOperator value
  right: any;            // Comparison value(s)
}
```

#### Example

```typescript
const filter: FilterDict = {
  left: 'close',
  operation: 'greater',
  right: 100,
};
```

### SortConfig

Sort configuration.

```typescript
export interface SortConfig {
  sortBy: string;         // Field name to sort by
  sortOrder: 'asc' | 'desc'; // Sort direction
}
```

#### Example

```typescript
const sort: SortConfig = {
  sortBy: 'market_cap_basic',
  sortOrder: 'desc',
};
```

### SymbolsConfig

Symbol filtering configuration.

```typescript
export interface SymbolsConfig {
  query: {
    types: string[];      // Symbol types to include
  };
  tickers?: string[];     // Specific ticker symbols
}
```

#### Example

```typescript
const symbols: SymbolsConfig = {
  query: {
    types: ['stock', 'dr'],
  },
  tickers: ['AAPL', 'GOOGL'],
};
```

## Result Types

### ScreenerResult

Query result with data and metadata.

```typescript
export interface ScreenerResult<T = any> {
  data: T[];              // Array of result rows
  totalCount: number;     // Total matching results
}
```

#### Generic Usage

```typescript
interface StockRow {
  name: string;
  close: number;
  volume: number;
  market_cap_basic: number;
}

const results: ScreenerResult<StockRow> = await screener.get();

results.data.forEach((row: StockRow) => {
  console.log(row.name, row.close);
});
```

### ScreenerRow

Individual result row (dynamic fields).

```typescript
export interface ScreenerRow {
  symbol: string;         // Ticker symbol (always present)
  [key: string]: any;     // Dynamic fields based on select()
}
```

#### Example

```typescript
const row: ScreenerRow = {
  symbol: 'AAPL',
  name: 'Apple Inc.',
  close: 150.25,
  volume: 50_000_000,
  market_cap_basic: 2_500_000_000_000,
};
```

## Stream Types

### StreamOptions

Options for streaming data.

```typescript
export interface StreamOptions {
  interval?: number;      // Update interval in ms (min: 1000, default: 5000)
  maxIterations?: number; // Max updates before stopping (default: unlimited)
}
```

#### Example

```typescript
const options: StreamOptions = {
  interval: 10000,        // Update every 10 seconds
  maxIterations: 100,     // Stop after 100 updates
};

for await (const data of screener.stream(options)) {
  // Process data
}
```

## Filter Types

### FilterOperator

Available filter operations.

```typescript
export enum FilterOperator {
  GREATER = 'greater',
  GREATER_OR_EQUAL = 'egreater',
  LESS = 'less',
  LESS_OR_EQUAL = 'eless',
  EQUAL = 'equal',
  NOT_EQUAL = 'nequal',
  IN_RANGE = 'in_range',
  NOT_IN_RANGE = 'not_in_range',
  IN = 'in',
  NOT_IN = 'not_in',
  MATCH = 'match',
  NOT_MATCH = 'nmatch',
  HAS = 'has',
  HAS_NONE_OF = 'has_none_of',
  ABOVE = 'above',
  BELOW = 'below',
  CROSSES = 'crosses',
  CROSSES_ABOVE = 'crosses_above',
  CROSSES_BELOW = 'crosses_below',
}
```

## Field Types

### BaseField

Base field class with comparison operators.

```typescript
export class BaseField {
  name: string;
  metadata: FieldMetadata;

  // Comparison operators
  gt(value: number): FieldCondition;
  gte(value: number): FieldCondition;
  lt(value: number): FieldCondition;
  lte(value: number): FieldCondition;
  eq(value: any): FieldCondition;
  ne(value: any): FieldCondition;

  // Range operators
  between(min: number, max: number): FieldCondition;
  notBetween(min: number, max: number): FieldCondition;

  // List operators
  isin(values: any[]): FieldCondition;
  notIn(values: any[]): FieldCondition;

  // Text operators
  match(pattern: string): FieldCondition;
  notMatch(pattern: string): FieldCondition;

  // Array operators
  has(values: any[]): FieldCondition;
  hasNoneOf(values: any[]): FieldCondition;

  // Time modifiers
  withInterval(interval: string): FieldWithInterval;
  withHistory(bars: number): FieldWithHistory;

  // Static methods
  static search(query: string): BaseField[];
  static byFormat(format: FieldFormat): BaseField[];
  static technicals(): BaseField[];
  static recommendations(): BaseField[];
}
```

### FieldCondition

Wrapper for field comparisons.

```typescript
export class FieldCondition {
  field: BaseField;
  operation: FilterOperator;
  value: any;

  constructor(field: BaseField, operation: FilterOperator, value: any);

  toFilter(): Filter;
}
```

### FieldWithInterval

Field with time interval modifier.

```typescript
export class FieldWithInterval extends BaseField {
  baseField: BaseField;
  interval: string;      // e.g., '1D', '1W', '1M'

  // Inherits all comparison operators
}
```

#### Example

```typescript
const rsi14_1W: FieldWithInterval = StockField.RSI.withInterval('1W');

screener.where(rsi14_1W.between(30, 70));
```

### FieldWithHistory

Field with historical data.

```typescript
export class FieldWithHistory extends BaseField {
  baseField: BaseField;
  bars: number;          // Number of historical bars

  // Inherits all comparison operators
}
```

#### Example

```typescript
const price5bars: FieldWithHistory = StockField.PRICE.withHistory(5);

screener.where(price5bars.gt(100));
```

## Enum Types

### Market

Market types.

```typescript
export enum Market {
  AMERICA = 'america',
  UK = 'uk',
  AUSTRALIA = 'australia',
  CANADA = 'canada',
  GERMANY = 'germany',
  // ... 50+ more markets
}
```

### Country

Country codes (ISO 3166-1 alpha-2).

```typescript
export enum Country {
  US = 'US',
  GB = 'GB',
  DE = 'DE',
  FR = 'FR',
  JP = 'JP',
  CN = 'CN',
  // ... 150+ more countries
}
```

### Exchange

Stock exchanges.

```typescript
export enum Exchange {
  NASDAQ = 'NASDAQ',
  NYSE = 'NYSE',
  LSE = 'LSE',
  TSE = 'TSE',
  // ... 100+ exchanges
}
```

### Sector

Industry sectors.

```typescript
export enum Sector {
  TECHNOLOGY = 'Technology',
  HEALTHCARE = 'Healthcare',
  FINANCIAL = 'Financial',
  CONSUMER_CYCLICAL = 'Consumer Cyclical',
  INDUSTRIALS = 'Industrials',
  // ... more sectors
}
```

### Industry

Detailed industries.

```typescript
export enum Industry {
  SOFTWARE_APPLICATION = 'Software—Application',
  SEMICONDUCTORS = 'Semiconductors',
  BIOTECHNOLOGY = 'Biotechnology',
  BANKS_REGIONAL = 'Banks—Regional',
  // ... 100+ industries
}
```

### Rating

Analyst ratings.

```typescript
export enum Rating {
  STRONG_BUY = 'Strong Buy',
  BUY = 'Buy',
  HOLD = 'Hold',
  SELL = 'Sell',
  STRONG_SELL = 'Strong Sell',
}
```

### SymbolType

Symbol/asset types.

```typescript
export enum SymbolType {
  STOCK = 'stock',
  DR = 'dr',
  FUND = 'fund',
  BOND = 'bond',
  CRYPTO = 'crypto',
  FOREX = 'forex',
  FUTURES = 'futures',
  INDEX = 'index',
  // ... more types
}
```

## Exception Types

### MalformedRequestException

API error exception.

```typescript
export class MalformedRequestException extends Error {
  code: number;           // HTTP status code
  responseMsg: string;    // Error message from API
  url: string;           // Request URL
  payload: string;       // Request payload (JSON string)

  constructor(
    code: number,
    responseMsg: string,
    url: string,
    payload: string
  );
}
```

#### Usage

```typescript
try {
  const results = await screener.get();
} catch (error) {
  if (error instanceof MalformedRequestException) {
    console.error('API Error:', error.responseMsg);
    console.error('Status Code:', error.code);
    console.error('URL:', error.url);
  }
}
```

## Type Guards

### Type Checking Functions

```typescript
// Check if value is MalformedRequestException
function isMalformedRequestException(
  error: unknown
): error is MalformedRequestException {
  return error instanceof MalformedRequestException;
}

// Check if value is BaseField
function isBaseField(value: unknown): value is BaseField {
  return value instanceof BaseField;
}

// Check if value is FieldCondition
function isFieldCondition(value: unknown): value is FieldCondition {
  return value instanceof FieldCondition;
}
```

#### Usage

```typescript
if (isMalformedRequestException(error)) {
  console.error('API error:', error.responseMsg);
}

if (isBaseField(value)) {
  console.log('Field name:', value.name);
}
```

## Generic Screener Type

### Type-Safe Screener

```typescript
// Define custom result type
interface StockResult {
  symbol: string;
  name: string;
  close: number;
  volume: number;
  market_cap_basic: number;
}

// Use with screener
async function getTypedResults(): Promise<ScreenerResult<StockResult>> {
  const screener = new StockScreener();

  screener
    .select(
      StockField.NAME,
      StockField.PRICE,
      StockField.VOLUME,
      StockField.MARKET_CAPITALIZATION
    )
    .setRange(0, 50);

  return await screener.get();
}

// Type-safe usage
const results = await getTypedResults();

results.data.forEach((row: StockResult) => {
  console.log(row.name, row.close); // Type-checked
  // row.invalidField // Error: Property doesn't exist
});
```

## Utility Types

### Partial Types

```typescript
// Partial field metadata
type PartialFieldMetadata = Partial<FieldMetadata>;

// Partial query payload
type PartialQueryPayload = Partial<QueryPayload>;
```

### Readonly Types

```typescript
// Immutable field metadata
type ReadonlyFieldMetadata = Readonly<FieldMetadata>;

// Immutable query payload
type ReadonlyQueryPayload = Readonly<QueryPayload>;
```

### Required Types

```typescript
// All fields required
type RequiredFieldMetadata = Required<FieldMetadata>;
```

## Type Inference

### Inferred Return Types

```typescript
// TypeScript infers return type
const results = await screener.get(); // Type: ScreenerResult<any>

// Explicit type annotation
const typedResults: ScreenerResult<StockResult> = await screener.get();
```

### Inferred Parameter Types

```typescript
// TypeScript infers parameter types
screener.where(StockField.PRICE.gt(100)); // Type: FieldCondition

// Explicit type
const condition: FieldCondition = StockField.PRICE.gt(100);
```

## Best Practices

### 1. Use Specific Types

```typescript
// Good: Specific type
const results: ScreenerResult<StockResult> = await screener.get();

// Less specific: Generic any
const results: ScreenerResult = await screener.get();
```

### 2. Define Custom Interfaces

```typescript
// Good: Custom interface for your data
interface MyStockData {
  symbol: string;
  name: string;
  price: number;
}

const results: ScreenerResult<MyStockData> = await screener.get();

// Less maintainable: Inline types
const results: ScreenerResult<{ symbol: string; name: string }> = ...
```

### 3. Use Type Guards

```typescript
// Good: Type guard
if (isMalformedRequestException(error)) {
  handleApiError(error);
}

// Less safe: Type assertion
const apiError = error as MalformedRequestException;
```

### 4. Leverage Type Inference

```typescript
// Good: Let TypeScript infer
const condition = StockField.PRICE.gt(100);

// Unnecessary: Explicit type
const condition: FieldCondition = StockField.PRICE.gt(100);
```

## Advanced Types

### Conditional Types

```typescript
type FormatType<T extends FieldFormat> =
  T extends 'currency' ? number :
  T extends 'percent' ? number :
  T extends 'text' ? string :
  any;

// Usage
type CurrencyValue = FormatType<'currency'>; // number
type TextValue = FormatType<'text'>;         // string
```

### Mapped Types

```typescript
type FieldValues<T extends Record<string, BaseField>> = {
  [K in keyof T]: T[K] extends BaseField ? any : never;
};

// Usage
interface StockFields {
  PRICE: BaseField;
  VOLUME: BaseField;
}

type StockValues = FieldValues<StockFields>;
```

## Next Steps

- [Formatting](formatting.md) - Number formatting utilities
- [Beautification](beautify.md) - Terminal styling
- [API Reference](../api/base-screener.md) - Complete API
