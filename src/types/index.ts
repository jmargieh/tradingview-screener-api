/**
 * Core type definitions for TradingView Screener API
 */

export type FieldFormat =
  | 'currency'
  | 'percent'
  | 'float'
  | 'round'
  | 'number_group'
  | 'text'
  | 'date'
  | 'bool'
  | 'rating'
  | 'recommendation'
  | 'computed_recommendation'
  | 'missing';

export interface FieldMetadata {
  label: string;
  fieldName: string;
  format: FieldFormat;
  interval: boolean;
  historical: boolean;
}

export interface FilterDict {
  left: string;
  operation: string;
  right?: any;
}

export interface SortConfig {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export interface SymbolsConfig {
  query?: {
    types?: string[];
  };
  tickers?: string[];
}

export interface QueryPayload {
  filter: FilterDict[];
  options: Record<string, any>;
  symbols: SymbolsConfig;
  sort?: SortConfig;
  range: [number, number];
  columns: string[];
}

export interface ScreenerRow {
  symbol?: string;
  [key: string]: any;
}

export interface ScreenerResult<T = ScreenerRow> {
  data: T[];
  totalCount: number;
}

export interface StreamOptions {
  interval?: number;
  maxIterations?: number;
}

export interface ApiResponse {
  data: any[];
  totalCount: number;
}

export interface FieldSearchOptions {
  format?: FieldFormat;
  interval?: boolean;
  historical?: boolean;
}
