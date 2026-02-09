import { describe, it, expect } from 'vitest';
import { getColumnsToRequest, extractFieldNames, parseInterval, parseHistoryIndex } from '../../src/utils/columns.js';
import { BaseField } from '../../src/fields/BaseField.js';
import { FieldWithInterval } from '../../src/fields/FieldWithInterval.js';
import { FieldWithHistory } from '../../src/fields/FieldWithHistory.js';

describe('columns', () => {
  describe('getColumnsToRequest', () => {
    it('should build columns from regular fields', () => {
      const fields = [
        new BaseField('PRICE', {
          label: 'Price',
          fieldName: 'close',
          format: 'currency',
          interval: false,
          historical: false,
        }),
        new BaseField('VOLUME', {
          label: 'Volume',
          fieldName: 'volume',
          format: 'number_group',
          interval: false,
          historical: false,
        }),
      ];

      const columns = getColumnsToRequest(fields);
      expect(columns).toContain('close');
      expect(columns).toContain('volume');
    });

    it('should handle fields with intervals', () => {
      const baseField = new BaseField('PRICE', {
        label: 'Price',
        fieldName: 'close',
        format: 'currency',
        interval: true,
        historical: false,
      });

      const intervalField = new FieldWithInterval(baseField, '1D');
      const columns = getColumnsToRequest([intervalField]);

      expect(columns).toContain('close|1D');
    });

    it('should handle fields with history', () => {
      const baseField = new BaseField('VOLUME', {
        label: 'Volume',
        fieldName: 'volume',
        format: 'number_group',
        interval: false,
        historical: true,
      });

      const historyField = new FieldWithHistory(baseField, 1);
      const columns = getColumnsToRequest([historyField]);

      expect(columns).toContain('volume[1]');
    });

    it('should handle mixed field types', () => {
      const regularField = new BaseField('NAME', {
        label: 'Name',
        fieldName: 'name',
        format: 'text',
        interval: false,
        historical: false,
      });

      const priceField = new BaseField('PRICE', {
        label: 'Price',
        fieldName: 'close',
        format: 'currency',
        interval: true,
        historical: false,
      });

      const intervalField = new FieldWithInterval(priceField, '1W');

      const columns = getColumnsToRequest([regularField, intervalField]);

      expect(columns).toContain('name');
      expect(columns).toContain('close|1W');
    });

    it('should deduplicate columns', () => {
      const field = new BaseField('PRICE', {
        label: 'Price',
        fieldName: 'close',
        format: 'currency',
        interval: false,
        historical: false,
      });

      const columns = getColumnsToRequest([field, field, field]);
      const closeColumns = columns.filter(c => c === 'close');

      expect(closeColumns.length).toBe(1);
    });
  });

  describe('extractFieldNames', () => {
    it('should extract field names from regular columns', () => {
      const columns = ['close', 'volume', 'name'];
      const fieldNames = extractFieldNames(columns);

      expect(fieldNames).toEqual(['close', 'volume', 'name']);
    });

    it('should extract field names from interval columns', () => {
      const columns = ['close|1D', 'volume|1W'];
      const fieldNames = extractFieldNames(columns);

      expect(fieldNames).toEqual(['close', 'volume']);
    });

    it('should extract field names from history columns', () => {
      const columns = ['close[1]', 'volume[2]'];
      const fieldNames = extractFieldNames(columns);

      expect(fieldNames).toEqual(['close', 'volume']);
    });

    it('should handle mixed column types', () => {
      const columns = ['name', 'close|1D', 'volume[1]'];
      const fieldNames = extractFieldNames(columns);

      expect(fieldNames).toEqual(['name', 'close', 'volume']);
    });
  });

  describe('parseInterval', () => {
    it('should parse interval from field name', () => {
      expect(parseInterval('close|1D')).toBe('1D');
      expect(parseInterval('close|1W')).toBe('1W');
      expect(parseInterval('close|1M')).toBe('1M');
    });

    it('should return null for non-interval fields', () => {
      expect(parseInterval('close')).toBeNull();
      expect(parseInterval('volume')).toBeNull();
    });

    it('should handle edge cases', () => {
      // 'close|' splits to ['close', ''] so returns empty string
      const result1 = parseInterval('close|');
      expect(result1 === '' || result1 === null).toBe(true);
      expect(parseInterval('|1D')).toBe('1D');
    });
  });

  describe('parseHistoryIndex', () => {
    it('should parse history index from field name', () => {
      expect(parseHistoryIndex('close[1]')).toBe(1);
      expect(parseHistoryIndex('volume[2]')).toBe(2);
      expect(parseHistoryIndex('high[10]')).toBe(10);
    });

    it('should return null for non-history fields', () => {
      expect(parseHistoryIndex('close')).toBeNull();
      expect(parseHistoryIndex('volume')).toBeNull();
    });

    it('should handle invalid formats', () => {
      expect(parseHistoryIndex('close[')).toBeNull();
      expect(parseHistoryIndex('close]')).toBeNull();
      expect(parseHistoryIndex('close[abc]')).toBeNull();
    });
  });
});
