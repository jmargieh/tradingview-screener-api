import { describe, it, expect } from 'vitest';
import { Filter } from '../../src/filters/Filter.js';
import { FilterOperator } from '../../src/enums/FilterOperator.js';

describe('Filter', () => {
  it('should create a filter', () => {
    const filter = new Filter('test_field', FilterOperator.GREATER, 100);

    expect(filter.left).toBe('test_field');
    expect(filter.operation).toBe(FilterOperator.GREATER);
    expect(filter.right).toBe(100);
  });

  it('should convert to dictionary', () => {
    const filter = new Filter('test_field', FilterOperator.GREATER, 100);
    const dict = filter.toDict();

    expect(dict).toEqual({
      left: 'test_field',
      operation: FilterOperator.GREATER,
      right: 100,
    });
  });

  it('should handle undefined right value', () => {
    const filter = new Filter('test_field', FilterOperator.EQUAL);
    const dict = filter.toDict();

    expect(dict).toEqual({
      left: 'test_field',
      operation: FilterOperator.EQUAL,
    });
  });

  it('should create from dictionary', () => {
    const dict = {
      left: 'test_field',
      operation: FilterOperator.LESS,
      right: 50,
    };

    const filter = Filter.fromDict(dict);

    expect(filter.left).toBe('test_field');
    expect(filter.operation).toBe(FilterOperator.LESS);
    expect(filter.right).toBe(50);
  });
});
