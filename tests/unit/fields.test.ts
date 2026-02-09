import { describe, it, expect } from 'vitest';
import { BaseField } from '../../src/fields/BaseField.js';
import { FieldWithInterval } from '../../src/fields/FieldWithInterval.js';
import { FieldWithHistory } from '../../src/fields/FieldWithHistory.js';

describe('BaseField', () => {
  const testField = new BaseField('TEST_FIELD', {
    label: 'Test Field',
    fieldName: 'test_field',
    format: 'float',
    interval: true,
    historical: true,
  });

  it('should create a field with metadata', () => {
    expect(testField.name).toBe('TEST_FIELD');
    expect(testField.label).toBe('Test Field');
    expect(testField.fieldName).toBe('test_field');
    expect(testField.format).toBe('float');
    expect(testField.supportsInterval).toBe(true);
    expect(testField.supportsHistory).toBe(true);
  });

  it('should get metadata properties', () => {
    expect(testField.fieldName).toBe('test_field');
    expect(testField.label).toBe('Test Field');
    expect(testField.format).toBe('float');
  });

  it('should convert to string', () => {
    const str = testField.toString();
    expect(str).toBe('TEST_FIELD (test_field)');
  });

  describe('search', () => {
    const fields = {
      PRICE: new BaseField('PRICE', {
        label: 'Price',
        fieldName: 'close',
        format: 'currency',
        interval: true,
        historical: false,
      }),
      VOLUME: new BaseField('VOLUME', {
        label: 'Volume',
        fieldName: 'volume',
        format: 'number_group',
        interval: false,
        historical: false,
      }),
      RSI: new BaseField('RSI', {
        label: 'RSI Indicator',
        fieldName: 'RSI',
        format: 'float',
        interval: true,
        historical: false,
      }),
    };

    it('should search by name', () => {
      const results = BaseField.search(fields, 'price');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('PRICE');
    });

    it('should search by label', () => {
      const results = BaseField.search(fields, 'indicator');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('RSI');
    });

    it('should search case-insensitively', () => {
      const results = BaseField.search(fields, 'VOLUME');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('VOLUME');
    });

    it('should filter by format', () => {
      const results = BaseField.search(fields, '', { format: 'currency' });
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('PRICE');
    });

    it('should filter by interval support', () => {
      const results = BaseField.search(fields, '', { interval: true });
      expect(results.length).toBe(2);
    });

    it('should return empty array for no matches', () => {
      const results = BaseField.search(fields, 'nonexistent');
      expect(results.length).toBe(0);
    });
  });

  describe('byFormat', () => {
    const fields = {
      PRICE: new BaseField('PRICE', {
        label: 'Price',
        fieldName: 'close',
        format: 'currency',
        interval: true,
        historical: false,
      }),
      VOLUME: new BaseField('VOLUME', {
        label: 'Volume',
        fieldName: 'volume',
        format: 'number_group',
        interval: false,
        historical: false,
      }),
      MARKET_CAP: new BaseField('MARKET_CAP', {
        label: 'Market Cap',
        fieldName: 'market_cap',
        format: 'currency',
        interval: false,
        historical: false,
      }),
    };

    it('should filter fields by format', () => {
      const results = BaseField.byFormat(fields, 'currency');
      expect(results.length).toBe(2);
      expect(results.map(f => f.name)).toContain('PRICE');
      expect(results.map(f => f.name)).toContain('MARKET_CAP');
    });

    it('should return empty array for no matches', () => {
      const results = BaseField.byFormat(fields, 'date');
      expect(results.length).toBe(0);
    });
  });

  describe('technicals', () => {
    const fields = {
      PRICE: new BaseField('PRICE', {
        label: 'Price',
        fieldName: 'close',
        format: 'currency',
        interval: true,
        historical: false,
      }),
      RSI: new BaseField('RSI', {
        label: 'RSI',
        fieldName: 'RSI',
        format: 'float',
        interval: true,
        historical: false,
      }),
      MACD: new BaseField('MACD', {
        label: 'MACD',
        fieldName: 'MACD.macd',
        format: 'float',
        interval: true,
        historical: false,
      }),
    };

    it('should find technical indicator fields', () => {
      const results = BaseField.technicals(fields);
      expect(results.length).toBe(2);
      expect(results.map(f => f.name)).toContain('RSI');
      expect(results.map(f => f.name)).toContain('MACD');
    });
  });

  describe('recommendations', () => {
    const fields = {
      PRICE: new BaseField('PRICE', {
        label: 'Price',
        fieldName: 'close',
        format: 'currency',
        interval: true,
        historical: false,
      }),
      ANALYST_REC: new BaseField('ANALYST_REC', {
        label: 'Analyst Recommendation',
        fieldName: 'Recommend.All',
        format: 'recommendation',
        interval: false,
        historical: false,
      }),
    };

    it('should find recommendation fields', () => {
      const results = BaseField.recommendations(fields);
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('ANALYST_REC');
    });
  });
});

describe('FieldWithInterval', () => {
  const baseField = new BaseField('PRICE', {
    label: 'Price',
    fieldName: 'close',
    format: 'currency',
    interval: true,
    historical: false,
  });

  it('should create field with interval', () => {
    const field = new FieldWithInterval(baseField, '1D');
    expect(field.baseField).toBe(baseField);
    expect(field.interval).toBe('1D');
    expect(field.name).toBe('PRICE');
    expect(field.label).toBe('Price');
  });

  it('should return field name with interval suffix', () => {
    const field = new FieldWithInterval(baseField, '1W');
    expect(field.fieldName).toBe('close|1W');
  });

  it('should convert to string with interval', () => {
    const field = new FieldWithInterval(baseField, '1M');
    expect(field.toString()).toBe('PRICE[1M]');
  });

  it('should preserve comparison operators', () => {
    const field = new FieldWithInterval(baseField, '1D');
    const condition = field.gt(100);

    expect(condition.field).toBe(field);
    expect(condition.value).toBe(100);
  });
});

describe('FieldWithHistory', () => {
  const baseField = new BaseField('VOLUME', {
    label: 'Volume',
    fieldName: 'volume',
    format: 'number_group',
    interval: false,
    historical: true,
  });

  it('should create field with history', () => {
    const field = new FieldWithHistory(baseField, 1);
    expect(field.baseField).toBe(baseField);
    expect(field.historyIndex).toBe(1);
    expect(field.name).toBe('VOLUME');
  });

  it('should return field name with history index', () => {
    const field = new FieldWithHistory(baseField, 2);
    expect(field.fieldName).toBe('volume[2]');
  });

  it('should convert to string with history index', () => {
    const field = new FieldWithHistory(baseField, 3);
    expect(field.toString()).toBe('VOLUME[hist:3]');
  });

  it('should preserve comparison operators', () => {
    const field = new FieldWithHistory(baseField, 1);
    const condition = field.gt(1000000);

    expect(condition.field).toBe(field);
    expect(condition.value).toBe(1000000);
  });
});
