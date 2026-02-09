import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ForexScreener } from '../../src/screeners/ForexScreener.js';
import { BondScreener } from '../../src/screeners/BondScreener.js';
import { FuturesScreener } from '../../src/screeners/FuturesScreener.js';
import { CoinScreener } from '../../src/screeners/CoinScreener.js';
import { ForexField } from '../../src/fields/ForexField.js';
import { BondField } from '../../src/fields/BondField.js';
import { FuturesField } from '../../src/fields/FuturesField.js';
import { CoinField } from '../../src/fields/CoinField.js';
import * as http from '../../src/utils/http.js';

describe('Other Screeners Integration', () => {
  let mockPost: any;

  beforeEach(() => {
    mockPost = vi.spyOn(http, 'post');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('ForexScreener', () => {
    it('should use correct endpoint', async () => {
      const mockResponse = { data: [], totalCount: 0 };
      mockPost.mockResolvedValue(mockResponse);

      const screener = new ForexScreener();
      screener.select(ForexField.NAME);
      await screener.get();

      const [url] = mockPost.mock.calls[0];
      expect(url).toBe('https://scanner.tradingview.com/forex/scan');
    });

    it('should fetch forex data', async () => {
      const mockResponse = {
        data: [
          { s: 'FX:EURUSD', d: ['EUR/USD', 1.0850, 0.15] },
          { s: 'FX:GBPUSD', d: ['GBP/USD', 1.2650, -0.25] },
        ],
        totalCount: 2,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new ForexScreener();
      screener.select(ForexField.NAME, ForexField.PRICE, ForexField.CHANGE_PERCENT);

      const results = await screener.get();

      expect(results.totalCount).toBe(2);
      expect(results.data[0].symbol).toBe('FX:EURUSD');
      expect(results.data[1].symbol).toBe('FX:GBPUSD');
    });

    it('should support forex filtering', async () => {
      const mockResponse = { data: [], totalCount: 0 };
      mockPost.mockResolvedValue(mockResponse);

      const screener = new ForexScreener();
      screener
        .where(ForexField.PRICE.gt(1))
        .select(ForexField.NAME);

      await screener.get();

      const [, payload] = mockPost.mock.calls[0];
      expect(payload.filter).toHaveLength(1);
      expect(payload.filter[0].left).toBe('close');
    });
  });

  describe('BondScreener', () => {
    it('should use correct endpoint', async () => {
      const mockResponse = { data: [], totalCount: 0 };
      mockPost.mockResolvedValue(mockResponse);

      const screener = new BondScreener();
      screener.select(BondField.NAME);
      await screener.get();

      const [url] = mockPost.mock.calls[0];
      expect(url).toBe('https://scanner.tradingview.com/bond/scan');
    });

    it('should fetch bond data', async () => {
      const mockResponse = {
        data: [
          { s: 'US10Y', d: ['US 10Y Treasury', 4.25] },
          { s: 'US2Y', d: ['US 2Y Treasury', 4.85] },
        ],
        totalCount: 2,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new BondScreener();
      screener.select(BondField.NAME, BondField.PRICE);

      const results = await screener.get();

      expect(results.totalCount).toBe(2);
      expect(results.data[0].symbol).toBe('US10Y');
    });
  });

  describe('FuturesScreener', () => {
    it('should use correct endpoint', async () => {
      const mockResponse = { data: [], totalCount: 0 };
      mockPost.mockResolvedValue(mockResponse);

      const screener = new FuturesScreener();
      screener.select(FuturesField.NAME);
      await screener.get();

      const [url] = mockPost.mock.calls[0];
      expect(url).toBe('https://scanner.tradingview.com/futures/scan');
    });

    it('should fetch futures data', async () => {
      const mockResponse = {
        data: [
          { s: 'CME:ES1!', d: ['E-mini S&P 500', 4500.25] },
          { s: 'CME:NQ1!', d: ['E-mini Nasdaq', 15000.50] },
        ],
        totalCount: 2,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new FuturesScreener();
      screener.select(FuturesField.NAME, FuturesField.PRICE);

      const results = await screener.get();

      expect(results.totalCount).toBe(2);
      expect(results.data[0].symbol).toBe('CME:ES1!');
    });
  });

  describe('CoinScreener', () => {
    it('should use correct endpoint', async () => {
      const mockResponse = { data: [], totalCount: 0 };
      mockPost.mockResolvedValue(mockResponse);

      const screener = new CoinScreener();
      screener.select(CoinField.NAME);
      await screener.get();

      const [url] = mockPost.mock.calls[0];
      expect(url).toBe('https://scanner.tradingview.com/coin/scan');
    });

    it('should fetch coin data', async () => {
      const mockResponse = {
        data: [
          { s: 'DOGE', d: ['Dogecoin', 0.15] },
          { s: 'SHIB', d: ['Shiba Inu', 0.000025] },
        ],
        totalCount: 2,
      };

      mockPost.mockResolvedValue(mockResponse);

      const screener = new CoinScreener();
      screener.select(CoinField.NAME, CoinField.PRICE);

      const results = await screener.get();

      expect(results.totalCount).toBe(2);
      expect(results.data[0].symbol).toBe('DOGE');
    });
  });

  describe('Cross-Screener Consistency', () => {
    it('all screeners should support basic operations', async () => {
      const mockResponse = { data: [], totalCount: 0 };
      mockPost.mockResolvedValue(mockResponse);

      const screeners = [
        new ForexScreener(),
        new BondScreener(),
        new FuturesScreener(),
        new CoinScreener(),
      ];

      for (const screener of screeners) {
        // Should support where()
        const withWhere = screener.where;
        expect(withWhere).toBeDefined();

        // Should support select()
        const withSelect = screener.select;
        expect(withSelect).toBeDefined();

        // Should support sortBy()
        const withSort = screener.sortBy;
        expect(withSort).toBeDefined();

        // Should support setRange()
        const withRange = screener.setRange;
        expect(withRange).toBeDefined();

        // Should support get()
        const withGet = screener.get;
        expect(withGet).toBeDefined();

        // Should support stream()
        const withStream = screener.stream;
        expect(withStream).toBeDefined();
      }
    });

    it('all screeners should return consistent result structure', async () => {
      const mockResponse = {
        data: [{ s: 'TEST', d: ['Test', 100] }],
        totalCount: 1,
      };

      const screeners = [
        new ForexScreener(),
        new BondScreener(),
        new FuturesScreener(),
        new CoinScreener(),
      ];

      for (const screener of screeners) {
        mockPost.mockResolvedValue(mockResponse);

        const results = await screener.get();

        expect(results).toHaveProperty('data');
        expect(results).toHaveProperty('totalCount');
        expect(Array.isArray(results.data)).toBe(true);
        expect(typeof results.totalCount).toBe('number');
        expect(results.data[0]).toHaveProperty('symbol');
      }
    });
  });
});
