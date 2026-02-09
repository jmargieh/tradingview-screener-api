import { BaseField } from './BaseField.js';
import { FieldCondition } from '../filters/FieldCondition.js';

/**
 * Wrapper for a field with historical data
 */
export class FieldWithHistory extends BaseField {
  constructor(
    public readonly baseField: BaseField,
    public readonly historyIndex: number
  ) {
    super(baseField.name, baseField.metadata);
  }

  /**
   * Get the field name with history suffix
   */
  override get fieldName(): string {
    return `${this.baseField.fieldName}[${this.historyIndex}]`;
  }

  // Override comparison operators to return FieldCondition with modified field name

  override gt(value: number): FieldCondition {
    return new FieldCondition(this, this.baseField.gt(value).operation, value);
  }

  override gte(value: number): FieldCondition {
    return new FieldCondition(this, this.baseField.gte(value).operation, value);
  }

  override lt(value: number): FieldCondition {
    return new FieldCondition(this, this.baseField.lt(value).operation, value);
  }

  override lte(value: number): FieldCondition {
    return new FieldCondition(this, this.baseField.lte(value).operation, value);
  }

  override eq(value: any): FieldCondition {
    return new FieldCondition(this, this.baseField.eq(value).operation, value);
  }

  override ne(value: any): FieldCondition {
    return new FieldCondition(this, this.baseField.ne(value).operation, value);
  }

  override between(min: number, max: number): FieldCondition {
    return new FieldCondition(this, this.baseField.between(min, max).operation, [min, max]);
  }

  override notBetween(min: number, max: number): FieldCondition {
    return new FieldCondition(this, this.baseField.notBetween(min, max).operation, [min, max]);
  }

  override isin(values: any[]): FieldCondition {
    return new FieldCondition(this, this.baseField.isin(values).operation, values);
  }

  override notIn(values: any[]): FieldCondition {
    return new FieldCondition(this, this.baseField.notIn(values).operation, values);
  }

  override match(pattern: string): FieldCondition {
    return new FieldCondition(this, this.baseField.match(pattern).operation, pattern);
  }

  override notMatch(pattern: string): FieldCondition {
    return new FieldCondition(this, this.baseField.notMatch(pattern).operation, pattern);
  }

  override has(values: any[]): FieldCondition {
    return new FieldCondition(this, this.baseField.has(values).operation, values);
  }

  override hasNoneOf(values: any[]): FieldCondition {
    return new FieldCondition(this, this.baseField.hasNoneOf(values).operation, values);
  }

  override above(value: number): FieldCondition {
    return new FieldCondition(this, this.baseField.above(value).operation, value);
  }

  override below(value: number): FieldCondition {
    return new FieldCondition(this, this.baseField.below(value).operation, value);
  }

  override crosses(value: number): FieldCondition {
    return new FieldCondition(this, this.baseField.crosses(value).operation, value);
  }

  override crossesAbove(value: number): FieldCondition {
    return new FieldCondition(this, this.baseField.crossesAbove(value).operation, value);
  }

  override crossesBelow(value: number): FieldCondition {
    return new FieldCondition(this, this.baseField.crossesBelow(value).operation, value);
  }

  override toString(): string {
    return `${this.baseField.name}[hist:${this.historyIndex}]`;
  }
}
