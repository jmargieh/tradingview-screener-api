import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { StockScreener } from '../../src/screeners/StockScreener.js';
import { StockField } from '../../src/fields/StockField.js';
import * as http from '../../src/utils/http.js';

describe('StockScreener Integration', () => {
  let mockPost: any;

  beforeEach(() => {
    // Mock the http.post function
    mockPost = vi.spyOn(http, 'post');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('get()', () => {
    it('should fetch and transform stock data', async () => {
      const mockResponse = {
        data: [
          {
            s: 'AAPL',
            d: ['Apple Inc.', 150.25, 2.5, 1.69, 50000000, 2500000000000],
          },
          {
            s: 'MSFT',
            d: ['Microsoft Corp.', 320.50, 5.2, 1.65, 30000000, 2300000000000],
          },
        ],
        totalCount: 2,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      screener
        .where(StockField.MARKET_CAPITALIZATION.gt(1e9))
        .select(
          StockField.NAME,
          StockField.PRICE,
          StockField.CHANGE,
          StockField.CHANGE_PERCENT,
          StockField.VOLUME,
          StockField.MARKET_CAPITALIZATION
        );

      const results = await screener.get();

      expect(results.totalCount).toBe(2);
      expect(results.data).toHaveLength(2);
      expect(results.data[0].symbol).toBe('AAPL');
      expect(results.data[1].symbol).toBe('MSFT');
    });

    it('should send correct payload', async () => {
      const mockResponse = {
        data: [],
        totalCount: 0,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      screener
        .where(StockField.PRICE.gt(100))
        .where(StockField.VOLUME.gte(1000000))
        .select(StockField.NAME, StockField.PRICE);

      await screener.get();

      expect(mockPost).toHaveBeenCalledTimes(1);

      const [url, payload] = mockPost.mock.calls[0];

      expect(url).toBe('https://scanner.tradingview.com/america/scan');
      expect(payload.filter).toHaveLength(2);
      expect(payload.filter[0].left).toBe('close');
      expect(payload.filter[0].operation).toBe('greater');
      expect(payload.filter[0].right).toBe(100);
      expect(payload.filter[1].left).toBe('volume');
      expect(payload.filter[1].operation).toBe('egreater');
      expect(payload.filter[1].right).toBe(1000000);
      expect(payload.columns).toContain('name');
      expect(payload.columns).toContain('close');
    });

    it('should handle sorting', async () => {
      const mockResponse = {
        data: [],
        totalCount: 0,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      screener
        .select(StockField.NAME)
        .sortBy(StockField.MARKET_CAPITALIZATION, false);

      await screener.get();

      const [, payload] = mockPost.mock.calls[0];

      expect(payload.sort).toEqual({
        sortBy: 'market_cap_basic',
        sortOrder: 'desc',
      });
    });

    it('should handle range', async () => {
      const mockResponse = {
        data: [],
        totalCount: 0,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      screener.select(StockField.NAME).setRange(10, 50);

      await screener.get();

      const [, payload] = mockPost.mock.calls[0];

      expect(payload.range).toEqual([10, 50]);
    });

    it('should use default range', async () => {
      const mockResponse = {
        data: [],
        totalCount: 0,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      screener.select(StockField.NAME);

      await screener.get();

      const [, payload] = mockPost.mock.calls[0];

      expect(payload.range).toEqual([0, 150]);
    });

    it('should handle empty results', async () => {
      const mockResponse = {
        data: [],
        totalCount: 0,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      screener.select(StockField.NAME);

      const results = await screener.get();

      expect(results.totalCount).toBe(0);
      expect(results.data).toHaveLength(0);
    });

    it('should handle network errors', async () => {
      mockPost.mockRejectedValue(new Error('Network error'));

      const screener = new StockScreener();
      screener.select(StockField.NAME);

      await expect(screener.get()).rejects.toThrow('Network error');
    });
  });

  describe('where() chaining', () => {
    it('should support multiple where clauses', async () => {
      const mockResponse = {
        data: [],
        totalCount: 0,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      screener
        .where(StockField.PRICE.gt(10))
        .where(StockField.PRICE.lt(500))
        .where(StockField.VOLUME.gte(100000))
        .select(StockField.NAME);

      await screener.get();

      const [, payload] = mockPost.mock.calls[0];

      expect(payload.filter).toHaveLength(3);
    });

    it('should support between operator', async () => {
      const mockResponse = {
        data: [],
        totalCount: 0,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      screener
        .where(StockField.MARKET_CAPITALIZATION.between(1e9, 100e9))
        .select(StockField.NAME);

      await screener.get();

      const [, payload] = mockPost.mock.calls[0];

      expect(payload.filter[0].operation).toBe('in_range');
      expect(payload.filter[0].right).toEqual([1e9, 100e9]);
    });

    it('should support isin operator', async () => {
      const mockResponse = {
        data: [],
        totalCount: 0,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      screener
        .where(StockField.PRICE.isin([10, 20, 30]))
        .select(StockField.NAME);

      await screener.get();

      const [, payload] = mockPost.mock.calls[0];

      expect(payload.filter[0].operation).toBe('in');
      expect(payload.filter[0].right).toEqual([10, 20, 30]);
    });
  });

  describe('select() variants', () => {
    it('should use default fields when select is not called', async () => {
      const mockResponse = {
        data: [],
        totalCount: 0,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      await screener.get();

      const [, payload] = mockPost.mock.calls[0];

      // Should have default fields
      expect(payload.columns.length).toBeGreaterThan(0);
      expect(payload.columns).toContain('name');
      expect(payload.columns).toContain('close');
    });

    it('should use specified fields when select is called', async () => {
      const mockResponse = {
        data: [],
        totalCount: 0,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      screener.select(StockField.NAME, StockField.PRICE);

      await screener.get();

      const [, payload] = mockPost.mock.calls[0];

      expect(payload.columns).toContain('name');
      expect(payload.columns).toContain('close');
      expect(payload.columns.length).toBe(2);
    });

    it('should select all fields when selectAll is called', async () => {
      const mockResponse = {
        data: [],
        totalCount: 0,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      screener.selectAll();

      await screener.get();

      const [, payload] = mockPost.mock.calls[0];

      // Should have all available fields
      expect(payload.columns.length).toBeGreaterThan(10);
    });
  });

  describe('method chaining', () => {
    it('should support full method chaining', async () => {
      const mockResponse = {
        data: [],
        totalCount: 0,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener()
        .where(StockField.PRICE.gt(10))
        .where(StockField.VOLUME.gte(100000))
        .select(StockField.NAME, StockField.PRICE)
        .sortBy(StockField.PRICE, false)
        .setRange(0, 50);

      await screener.get();

      expect(mockPost).toHaveBeenCalledTimes(1);

      const [, payload] = mockPost.mock.calls[0];

      expect(payload.filter).toHaveLength(2);
      expect(payload.columns).toHaveLength(2);
      expect(payload.sort).toBeDefined();
      expect(payload.range).toEqual([0, 50]);
    });

    it('should allow multiple calls to same method', async () => {
      const mockResponse = {
        data: [],
        totalCount: 0,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      screener
        .where(StockField.PRICE.gt(10))
        .where(StockField.PRICE.lt(500))
        .where(StockField.VOLUME.gte(100000));

      await screener.get();

      const [, payload] = mockPost.mock.calls[0];

      expect(payload.filter).toHaveLength(3);
    });
  });

  describe('stream()', () => {
    it('should stream data multiple times', async () => {
      const mockResponse = {
        data: [
          { s: 'AAPL', d: ['Apple Inc.', 150.25] },
        ],
        totalCount: 1,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new StockScreener();
      screener.select(StockField.NAME, StockField.PRICE);

      const results: any[] = [];
      let count = 0;

      for await (const data of screener.stream({ interval: 10, maxIterations: 3 })) {
        results.push(data);
        count++;
        if (count >= 3) break;
      }

      expect(results).toHaveLength(3);
      expect(mockPost).toHaveBeenCalledTimes(3);
    });

    it('should handle stream errors gracefully', async () => {
      mockPost
        .mockResolvedValueOnce({ data: [{ s: 'AAPL', d: [] }], totalCount: 1 })
        .mockRejectedValueOnce(new Error('Network error'))
        .mockResolvedValueOnce({ data: [{ s: 'MSFT', d: [] }], totalCount: 1 });

      const screener = new StockScreener();
      screener.select(StockField.NAME);

      const results: any[] = [];

      for await (const data of screener.stream({ interval: 10, maxIterations: 3 })) {
        results.push(data);
      }

      expect(results).toHaveLength(3);
      expect(results[0]).toBeDefined();
      expect(results[1]).toBeNull(); // Error result
      expect(results[2]).toBeDefined();
    });
  });
});
