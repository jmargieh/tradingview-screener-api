import { describe, it, expect } from 'vitest';
import {
  supportsColor,
  colorizeNumber,
  colorizePercent,
  colorizeRating,
  colorizeRecommendation,
  bold,
  gray,
  beautifyValue,
} from '../../src/utils/beautify.js';

describe('beautify', () => {
  describe('supportsColor', () => {
    it('should check color support', () => {
      const result = supportsColor();
      // Result depends on environment (may be undefined in test env)
      expect([true, false, undefined]).toContain(result);
    });
  });

  describe('colorizeNumber', () => {
    it('should return formatted string for positive numbers', () => {
      const result = colorizeNumber(10, '+10');
      expect(result).toContain('10');
    });

    it('should return formatted string for negative numbers', () => {
      const result = colorizeNumber(-5, '-5');
      expect(result).toContain('5');
    });

    it('should return formatted string for zero', () => {
      const result = colorizeNumber(0, '0');
      expect(result).toBe('0');
    });

    it('should handle null/undefined', () => {
      expect(colorizeNumber(null, '—')).toBe('—');
      expect(colorizeNumber(undefined, '—')).toBe('—');
    });

    it('should handle NaN', () => {
      expect(colorizeNumber(NaN, '—')).toBe('—');
    });
  });

  describe('colorizePercent', () => {
    it('should colorize positive percentage', () => {
      const result = colorizePercent(5.5, '5.50%');
      expect(result).toContain('5.50%');
    });

    it('should colorize negative percentage', () => {
      const result = colorizePercent(-3.2, '-3.20%');
      expect(result).toContain('3.20%');
    });

    it('should handle null/undefined', () => {
      expect(colorizePercent(null, '—')).toBe('—');
      expect(colorizePercent(undefined, '—')).toBe('—');
    });
  });

  describe('colorizeRating', () => {
    it('should colorize buy ratings', () => {
      const result = colorizeRating('Strong Buy');
      expect(result).toContain('Strong Buy');
    });

    it('should colorize sell ratings', () => {
      const result = colorizeRating('Sell');
      expect(result).toContain('Sell');
    });

    it('should colorize neutral ratings', () => {
      const result = colorizeRating('Neutral');
      expect(result).toContain('Neutral');
    });

    it('should handle hold ratings', () => {
      const result = colorizeRating('Hold');
      expect(result).toContain('Hold');
    });

    it('should handle null/undefined', () => {
      expect(colorizeRating(null)).toBe('—');
      expect(colorizeRating(undefined)).toBe('—');
    });

    it('should handle unknown ratings', () => {
      const result = colorizeRating('Unknown');
      expect(result).toBe('Unknown');
    });
  });

  describe('colorizeRecommendation', () => {
    it('should colorize strong buy (5)', () => {
      const result = colorizeRecommendation(5, '5');
      expect(result).toContain('5');
    });

    it('should colorize buy (4)', () => {
      const result = colorizeRecommendation(4, '4');
      expect(result).toContain('4');
    });

    it('should colorize neutral (3)', () => {
      const result = colorizeRecommendation(3, '3');
      expect(result).toContain('3');
    });

    it('should colorize sell (2)', () => {
      const result = colorizeRecommendation(2, '2');
      expect(result).toContain('2');
    });

    it('should colorize strong sell (1)', () => {
      const result = colorizeRecommendation(1, '1');
      expect(result).toContain('1');
    });

    it('should handle null/undefined', () => {
      expect(colorizeRecommendation(null, '—')).toBe('—');
      expect(colorizeRecommendation(undefined, '—')).toBe('—');
    });

    it('should handle NaN', () => {
      expect(colorizeRecommendation(NaN, '—')).toBe('—');
    });
  });

  describe('bold', () => {
    it('should return text', () => {
      const result = bold('test');
      expect(result).toContain('test');
    });
  });

  describe('gray', () => {
    it('should return text', () => {
      const result = gray('test');
      expect(result).toContain('test');
    });
  });

  describe('beautifyValue', () => {
    it('should beautify percent values', () => {
      const result = beautifyValue(5.5, 'percent');
      expect(result).toContain('5.50%');
    });

    it('should beautify rating values', () => {
      const result = beautifyValue('Buy', 'rating');
      expect(result).toContain('Buy');
    });

    it('should beautify recommendation values', () => {
      const result = beautifyValue(4, 'recommendation');
      expect(result).toContain('4');
    });

    it('should beautify computed recommendation values', () => {
      const result = beautifyValue(5, 'computed_recommendation');
      expect(result).toContain('5');
    });

    it('should handle null values', () => {
      const result = beautifyValue(null, 'percent');
      expect(result).toContain('—');
    });

    it('should handle undefined values', () => {
      const result = beautifyValue(undefined, 'currency');
      expect(result).toContain('—');
    });

    it('should handle unknown formats', () => {
      const result = beautifyValue('test', 'unknown');
      expect(result).toBe('test');
    });
  });
});
