import type { FieldMetadata, FieldFormat, FieldSearchOptions } from '../types/index.js';
import { FilterOperator } from '../enums/FilterOperator.js';
import { FieldCondition } from '../filters/FieldCondition.js';

/**
 * Base field class representing a TradingView field/column
 */
export class BaseField {
  public readonly name: string;
  public readonly metadata: FieldMetadata;

  constructor(name: string, metadata: FieldMetadata) {
    this.name = name;
    this.metadata = metadata;
  }

  /**
   * Get the field name used in API requests
   */
  get fieldName(): string {
    return this.metadata.fieldName;
  }

  /**
   * Get the display label
   */
  get label(): string {
    return this.metadata.label;
  }

  /**
   * Get the format type
   */
  get format(): FieldFormat {
    return this.metadata.format;
  }

  /**
   * Check if field supports intervals
   */
  get supportsInterval(): boolean {
    return this.metadata.interval;
  }

  /**
   * Check if field supports historical data
   */
  get supportsHistory(): boolean {
    return this.metadata.historical;
  }

  // Comparison operators

  /**
   * Greater than (>)
   */
  gt(value: number): FieldCondition {
    return new FieldCondition(this, FilterOperator.GREATER, value);
  }

  /**
   * Greater than or equal (>=)
   */
  gte(value: number): FieldCondition {
    return new FieldCondition(this, FilterOperator.GREATER_OR_EQUAL, value);
  }

  /**
   * Less than (<)
   */
  lt(value: number): FieldCondition {
    return new FieldCondition(this, FilterOperator.LESS, value);
  }

  /**
   * Less than or equal (<=)
   */
  lte(value: number): FieldCondition {
    return new FieldCondition(this, FilterOperator.LESS_OR_EQUAL, value);
  }

  /**
   * Equal (==)
   */
  eq(value: any): FieldCondition {
    return new FieldCondition(this, FilterOperator.EQUAL, value);
  }

  /**
   * Not equal (!=)
   */
  ne(value: any): FieldCondition {
    return new FieldCondition(this, FilterOperator.NOT_EQUAL, value);
  }

  // Helper methods

  /**
   * Between two values (inclusive)
   */
  between(min: number, max: number): FieldCondition {
    return new FieldCondition(this, FilterOperator.IN_RANGE, [min, max]);
  }

  /**
   * Not between two values
   */
  notBetween(min: number, max: number): FieldCondition {
    return new FieldCondition(this, FilterOperator.NOT_IN_RANGE, [min, max]);
  }

  /**
   * In list of values
   */
  isin(values: any[]): FieldCondition {
    return new FieldCondition(this, FilterOperator.IN, values);
  }

  /**
   * Not in list of values
   */
  notIn(values: any[]): FieldCondition {
    return new FieldCondition(this, FilterOperator.NOT_IN, values);
  }

  /**
   * Text match (regex)
   */
  match(pattern: string): FieldCondition {
    return new FieldCondition(this, FilterOperator.MATCH, pattern);
  }

  /**
   * Text not match (regex)
   */
  notMatch(pattern: string): FieldCondition {
    return new FieldCondition(this, FilterOperator.NOT_MATCH, pattern);
  }

  /**
   * Has any of (for arrays)
   */
  has(values: any[]): FieldCondition {
    return new FieldCondition(this, FilterOperator.HAS, values);
  }

  /**
   * Has none of (for arrays)
   */
  hasNoneOf(values: any[]): FieldCondition {
    return new FieldCondition(this, FilterOperator.HAS_NONE_OF, values);
  }

  /**
   * Above another value
   */
  above(value: number): FieldCondition {
    return new FieldCondition(this, FilterOperator.ABOVE, value);
  }

  /**
   * Below another value
   */
  below(value: number): FieldCondition {
    return new FieldCondition(this, FilterOperator.BELOW, value);
  }

  /**
   * Crosses another value
   */
  crosses(value: number): FieldCondition {
    return new FieldCondition(this, FilterOperator.CROSSES, value);
  }

  /**
   * Crosses above another value
   */
  crossesAbove(value: number): FieldCondition {
    return new FieldCondition(this, FilterOperator.CROSSES_ABOVE, value);
  }

  /**
   * Crosses below another value
   */
  crossesBelow(value: number): FieldCondition {
    return new FieldCondition(this, FilterOperator.CROSSES_BELOW, value);
  }

  /**
   * String representation
   */
  toString(): string {
    return `${this.name} (${this.fieldName})`;
  }

  // Static helper methods for field collections

  /**
   * Search fields by name or label
   */
  static search(fields: Record<string, BaseField>, query: string, options?: FieldSearchOptions): BaseField[] {
    const lowerQuery = query.toLowerCase();
    const results: BaseField[] = [];

    for (const field of Object.values(fields)) {
      const nameMatch = field.name.toLowerCase().includes(lowerQuery);
      const labelMatch = field.label.toLowerCase().includes(lowerQuery);

      if (nameMatch || labelMatch) {
        // Apply filters if provided
        if (options?.format && field.format !== options.format) continue;
        if (options?.interval !== undefined && field.supportsInterval !== options.interval) continue;
        if (options?.historical !== undefined && field.supportsHistory !== options.historical) continue;

        results.push(field);
      }
    }

    return results;
  }

  /**
   * Get fields by format
   */
  static byFormat(fields: Record<string, BaseField>, format: FieldFormat): BaseField[] {
    return Object.values(fields).filter(field => field.format === format);
  }

  /**
   * Get technical indicator fields
   */
  static technicals(fields: Record<string, BaseField>): BaseField[] {
    return Object.values(fields).filter(field =>
      field.name.includes('INDICATOR') ||
      field.label.toLowerCase().includes('rsi') ||
      field.label.toLowerCase().includes('macd') ||
      field.label.toLowerCase().includes('moving average') ||
      field.label.toLowerCase().includes('bollinger')
    );
  }

  /**
   * Get recommendation fields
   */
  static recommendations(fields: Record<string, BaseField>): BaseField[] {
    return Object.values(fields).filter(field =>
      field.format === 'recommendation' ||
      field.format === 'computed_recommendation' ||
      field.label.toLowerCase().includes('recommendation')
    );
  }
}
