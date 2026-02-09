import { describe, it, expect } from 'vitest';
import { BaseField } from '../../src/fields/BaseField.js';
import { FilterOperator } from '../../src/enums/FilterOperator.js';

describe('Field Conditions', () => {
  const testField = new BaseField('TEST_FIELD', {
    label: 'Test Field',
    fieldName: 'test_field',
    format: 'float',
    interval: false,
    historical: false,
  });

  it('should create gt condition', () => {
    const condition = testField.gt(100);
    expect(condition.field).toBe(testField);
    expect(condition.operation).toBe(FilterOperator.GREATER);
    expect(condition.value).toBe(100);
  });

  it('should create gte condition', () => {
    const condition = testField.gte(100);
    expect(condition.field).toBe(testField);
    expect(condition.operation).toBe(FilterOperator.GREATER_OR_EQUAL);
    expect(condition.value).toBe(100);
  });

  it('should create lt condition', () => {
    const condition = testField.lt(100);
    expect(condition.field).toBe(testField);
    expect(condition.operation).toBe(FilterOperator.LESS);
    expect(condition.value).toBe(100);
  });

  it('should create lte condition', () => {
    const condition = testField.lte(100);
    expect(condition.field).toBe(testField);
    expect(condition.operation).toBe(FilterOperator.LESS_OR_EQUAL);
    expect(condition.value).toBe(100);
  });

  it('should create eq condition', () => {
    const condition = testField.eq(100);
    expect(condition.field).toBe(testField);
    expect(condition.operation).toBe(FilterOperator.EQUAL);
    expect(condition.value).toBe(100);
  });

  it('should create ne condition', () => {
    const condition = testField.ne(100);
    expect(condition.field).toBe(testField);
    expect(condition.operation).toBe(FilterOperator.NOT_EQUAL);
    expect(condition.value).toBe(100);
  });

  it('should create between condition', () => {
    const condition = testField.between(10, 100);
    expect(condition.field).toBe(testField);
    expect(condition.operation).toBe(FilterOperator.IN_RANGE);
    expect(condition.value).toEqual([10, 100]);
  });

  it('should create notBetween condition', () => {
    const condition = testField.notBetween(10, 100);
    expect(condition.field).toBe(testField);
    expect(condition.operation).toBe(FilterOperator.NOT_IN_RANGE);
    expect(condition.value).toEqual([10, 100]);
  });

  it('should create isin condition', () => {
    const condition = testField.isin([1, 2, 3]);
    expect(condition.field).toBe(testField);
    expect(condition.operation).toBe(FilterOperator.IN);
    expect(condition.value).toEqual([1, 2, 3]);
  });

  it('should create notIn condition', () => {
    const condition = testField.notIn([1, 2, 3]);
    expect(condition.field).toBe(testField);
    expect(condition.operation).toBe(FilterOperator.NOT_IN);
    expect(condition.value).toEqual([1, 2, 3]);
  });

  it('should throw error for field-to-field comparison', () => {
    const otherField = new BaseField('OTHER_FIELD', {
      label: 'Other Field',
      fieldName: 'other_field',
      format: 'float',
      interval: false,
      historical: false,
    });

    expect(() => {
      // This should throw because we're comparing two fields
      testField.gt(otherField as any);
    }).toThrow(/Field-to-field comparisons are not supported/);
  });

  it('should convert condition to filter', () => {
    const condition = testField.gt(100);
    const filter = condition.toFilter();

    expect(filter.left).toBe('test_field');
    expect(filter.operation).toBe(FilterOperator.GREATER);
    expect(filter.right).toBe(100);
  });
});
