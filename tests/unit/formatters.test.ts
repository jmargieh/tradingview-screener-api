import { describe, it, expect } from 'vitest';
import {
  millify,
  formatCurrency,
  formatPercent,
  formatFloat,
  formatRound,
  formatBoolean,
  formatNumberGroup,
} from '../../src/utils/formatters.js';

describe('Formatters', () => {
  describe('millify', () => {
    it('should format thousands', () => {
      expect(millify(1500)).toBe('1.50K');
      expect(millify(999)).toBe('999.00');
    });

    it('should format millions', () => {
      expect(millify(1_500_000)).toBe('1.50M');
      expect(millify(42_000_000)).toBe('42.00M');
    });

    it('should format billions', () => {
      expect(millify(1_500_000_000)).toBe('1.50B');
      expect(millify(99_000_000_000)).toBe('99.00B');
    });

    it('should format trillions', () => {
      expect(millify(1_500_000_000_000)).toBe('1.50T');
    });

    it('should handle negative numbers', () => {
      expect(millify(-1_500_000)).toBe('-1.50M');
    });

    it('should handle null/undefined', () => {
      expect(millify(null)).toBe('—');
      expect(millify(undefined)).toBe('—');
    });
  });

  describe('formatCurrency', () => {
    it('should format currency', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
      expect(formatCurrency(1000000)).toBe('$1,000,000.00');
    });

    it('should handle null/undefined', () => {
      expect(formatCurrency(null)).toBe('—');
      expect(formatCurrency(undefined)).toBe('—');
    });
  });

  describe('formatPercent', () => {
    it('should format percentage', () => {
      expect(formatPercent(12.34)).toBe('12.34%');
      expect(formatPercent(-5.67)).toBe('-5.67%');
    });

    it('should handle null/undefined', () => {
      expect(formatPercent(null)).toBe('—');
      expect(formatPercent(undefined)).toBe('—');
    });
  });

  describe('formatFloat', () => {
    it('should format float', () => {
      expect(formatFloat(12.345)).toBe('12.35');
      expect(formatFloat(10)).toBe('10.00');
    });

    it('should handle null/undefined', () => {
      expect(formatFloat(null)).toBe('—');
      expect(formatFloat(undefined)).toBe('—');
    });
  });

  describe('formatRound', () => {
    it('should round to integer', () => {
      expect(formatRound(12.5)).toBe('13');
      expect(formatRound(12.4)).toBe('12');
    });

    it('should handle null/undefined', () => {
      expect(formatRound(null)).toBe('—');
      expect(formatRound(undefined)).toBe('—');
    });
  });

  describe('formatBoolean', () => {
    it('should format boolean', () => {
      expect(formatBoolean(true)).toBe('Yes');
      expect(formatBoolean(false)).toBe('No');
    });

    it('should handle null/undefined', () => {
      expect(formatBoolean(null)).toBe('—');
      expect(formatBoolean(undefined)).toBe('—');
    });
  });

  describe('formatNumberGroup', () => {
    it('should format with thousand separators', () => {
      expect(formatNumberGroup(1234567)).toBe('1,234,567');
      expect(formatNumberGroup(1000)).toBe('1,000');
    });

    it('should handle decimals', () => {
      expect(formatNumberGroup(1234.56)).toBe('1,234.56');
    });

    it('should handle null/undefined', () => {
      expect(formatNumberGroup(null)).toBe('—');
      expect(formatNumberGroup(undefined)).toBe('—');
    });
  });
});
