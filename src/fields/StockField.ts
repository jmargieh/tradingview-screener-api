import { BaseField } from './BaseField.js';

/**
 * Stock field definitions - Complete field set from TradingView API
 *
 * Total fields: 3,522
 * Source: https://github.com/deepentropy/tvscreener
 *
 * Categories:
 * - Price & Volume
 * - Technical Indicators
 * - Fundamentals
 * - Financial Statements
 * - Valuation Metrics
 * - Candlestick Patterns
 * - Performance Metrics
 * - Pivot Points
 * - Oscillators & Momentum
 */

export const StockField = {
  // === Basic Information (8 fields) ===

  COUNTRY: new BaseField('COUNTRY', {
    label: 'Country',
    fieldName: 'country',
    format: 'text',
    interval: false,
    historical: false,
  }),

  DESCRIPTION: new BaseField('DESCRIPTION', {
    label: 'Description',
    fieldName: 'description',
    format: 'text',
    interval: false,
    historical: false,
  }),

  EXCHANGE: new BaseField('EXCHANGE', {
    label: 'Exchange',
    fieldName: 'exchange',
    format: 'text',
    interval: false,
    historical: false,
  }),

  INDUSTRY: new BaseField('INDUSTRY', {
    label: 'Industry',
    fieldName: 'industry',
    format: 'text',
    interval: false,
    historical: false,
  }),

  NAME: new BaseField('NAME', {
    label: 'Name',
    fieldName: 'name',
    format: 'text',
    interval: false,
    historical: false,
  }),

  SECTOR: new BaseField('SECTOR', {
    label: 'Sector',
    fieldName: 'sector',
    format: 'text',
    interval: false,
    historical: false,
  }),

  SUBTYPE: new BaseField('SUBTYPE', {
    label: 'Subtype',
    fieldName: 'subtype',
    format: 'text',
    interval: false,
    historical: false,
  }),

  TYPE: new BaseField('TYPE', {
    label: 'Type',
    fieldName: 'type',
    format: 'text',
    interval: false,
    historical: false,
  }),

  // === Price & Volume (296 fields) ===

  ALL_TIME_HIGH: new BaseField('ALL_TIME_HIGH', {
    label: 'All Time High',
    fieldName: 'High.All',
    format: 'round',
    interval: false,
    historical: false,
  }),

  ALL_TIME_HIGH_2: new BaseField('ALL_TIME_HIGH_2', {
    label: 'All Time High',
    fieldName: 'all_time_high',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  ALL_TIME_HIGH_DAY: new BaseField('ALL_TIME_HIGH_DAY', {
    label: 'All Time High Day',
    fieldName: 'all_time_high_day',
    format: 'date',
    interval: false,
    historical: false,
  }),

  ALL_TIME_LOW: new BaseField('ALL_TIME_LOW', {
    label: 'All Time Low',
    fieldName: 'Low.All',
    format: 'round',
    interval: false,
    historical: false,
  }),

  ALL_TIME_LOW_2: new BaseField('ALL_TIME_LOW_2', {
    label: 'All Time Low',
    fieldName: 'all_time_low',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  ALL_TIME_LOW_DAY: new BaseField('ALL_TIME_LOW_DAY', {
    label: 'All Time Low Day',
    fieldName: 'all_time_low_day',
    format: 'date',
    interval: false,
    historical: false,
  }),

  ALL_TIME_OPEN: new BaseField('ALL_TIME_OPEN', {
    label: 'All Time Open',
    fieldName: 'all_time_open',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME: new BaseField('AVERAGE_VOLUME', {
    label: 'Average Volume',
    fieldName: 'average_volume',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_1: new BaseField('AVERAGE_VOLUME_10D_CALC_1', {
    label: 'Average Volume 10d Calc|1',
    fieldName: 'average_volume_10d_calc|1',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_120: new BaseField('AVERAGE_VOLUME_10D_CALC_120', {
    label: 'Average Volume 10d Calc|120',
    fieldName: 'average_volume_10d_calc|120',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_15: new BaseField('AVERAGE_VOLUME_10D_CALC_15', {
    label: 'Average Volume 10d Calc|15',
    fieldName: 'average_volume_10d_calc|15',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_1M: new BaseField('AVERAGE_VOLUME_10D_CALC_1M', {
    label: 'Average Volume 10d Calc|1m',
    fieldName: 'average_volume_10d_calc|1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_1W: new BaseField('AVERAGE_VOLUME_10D_CALC_1W', {
    label: 'Average Volume 10d Calc|1w',
    fieldName: 'average_volume_10d_calc|1W',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_240: new BaseField('AVERAGE_VOLUME_10D_CALC_240', {
    label: 'Average Volume 10d Calc|240',
    fieldName: 'average_volume_10d_calc|240',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_30: new BaseField('AVERAGE_VOLUME_10D_CALC_30', {
    label: 'Average Volume 10d Calc|30',
    fieldName: 'average_volume_10d_calc|30',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_5: new BaseField('AVERAGE_VOLUME_10D_CALC_5', {
    label: 'Average Volume 10d Calc|5',
    fieldName: 'average_volume_10d_calc|5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10D_CALC_60: new BaseField('AVERAGE_VOLUME_10D_CALC_60', {
    label: 'Average Volume 10d Calc|60',
    fieldName: 'average_volume_10d_calc|60',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_10_DAY: new BaseField('AVERAGE_VOLUME_10_DAY', {
    label: 'Average Volume (10 day)',
    fieldName: 'average_volume_10d_calc',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_1: new BaseField('AVERAGE_VOLUME_30D_CALC_1', {
    label: 'Average Volume 30d Calc|1',
    fieldName: 'average_volume_30d_calc|1',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_120: new BaseField('AVERAGE_VOLUME_30D_CALC_120', {
    label: 'Average Volume 30d Calc|120',
    fieldName: 'average_volume_30d_calc|120',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_15: new BaseField('AVERAGE_VOLUME_30D_CALC_15', {
    label: 'Average Volume 30d Calc|15',
    fieldName: 'average_volume_30d_calc|15',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_1M: new BaseField('AVERAGE_VOLUME_30D_CALC_1M', {
    label: 'Average Volume 30d Calc|1m',
    fieldName: 'average_volume_30d_calc|1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_1W: new BaseField('AVERAGE_VOLUME_30D_CALC_1W', {
    label: 'Average Volume 30d Calc|1w',
    fieldName: 'average_volume_30d_calc|1W',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_240: new BaseField('AVERAGE_VOLUME_30D_CALC_240', {
    label: 'Average Volume 30d Calc|240',
    fieldName: 'average_volume_30d_calc|240',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_30: new BaseField('AVERAGE_VOLUME_30D_CALC_30', {
    label: 'Average Volume 30d Calc|30',
    fieldName: 'average_volume_30d_calc|30',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_5: new BaseField('AVERAGE_VOLUME_30D_CALC_5', {
    label: 'Average Volume 30d Calc|5',
    fieldName: 'average_volume_30d_calc|5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30D_CALC_60: new BaseField('AVERAGE_VOLUME_30D_CALC_60', {
    label: 'Average Volume 30d Calc|60',
    fieldName: 'average_volume_30d_calc|60',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_30_DAY: new BaseField('AVERAGE_VOLUME_30_DAY', {
    label: 'Average Volume (30 day)',
    fieldName: 'average_volume_30d_calc',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_1: new BaseField('AVERAGE_VOLUME_60D_CALC_1', {
    label: 'Average Volume 60d Calc|1',
    fieldName: 'average_volume_60d_calc|1',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_120: new BaseField('AVERAGE_VOLUME_60D_CALC_120', {
    label: 'Average Volume 60d Calc|120',
    fieldName: 'average_volume_60d_calc|120',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_15: new BaseField('AVERAGE_VOLUME_60D_CALC_15', {
    label: 'Average Volume 60d Calc|15',
    fieldName: 'average_volume_60d_calc|15',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_1M: new BaseField('AVERAGE_VOLUME_60D_CALC_1M', {
    label: 'Average Volume 60d Calc|1m',
    fieldName: 'average_volume_60d_calc|1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_1W: new BaseField('AVERAGE_VOLUME_60D_CALC_1W', {
    label: 'Average Volume 60d Calc|1w',
    fieldName: 'average_volume_60d_calc|1W',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_240: new BaseField('AVERAGE_VOLUME_60D_CALC_240', {
    label: 'Average Volume 60d Calc|240',
    fieldName: 'average_volume_60d_calc|240',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_30: new BaseField('AVERAGE_VOLUME_60D_CALC_30', {
    label: 'Average Volume 60d Calc|30',
    fieldName: 'average_volume_60d_calc|30',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_5: new BaseField('AVERAGE_VOLUME_60D_CALC_5', {
    label: 'Average Volume 60d Calc|5',
    fieldName: 'average_volume_60d_calc|5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60D_CALC_60: new BaseField('AVERAGE_VOLUME_60D_CALC_60', {
    label: 'Average Volume 60d Calc|60',
    fieldName: 'average_volume_60d_calc|60',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_60_DAY: new BaseField('AVERAGE_VOLUME_60_DAY', {
    label: 'Average Volume (60 day)',
    fieldName: 'average_volume_60d_calc',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_1: new BaseField('AVERAGE_VOLUME_90D_CALC_1', {
    label: 'Average Volume 90d Calc|1',
    fieldName: 'average_volume_90d_calc|1',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_120: new BaseField('AVERAGE_VOLUME_90D_CALC_120', {
    label: 'Average Volume 90d Calc|120',
    fieldName: 'average_volume_90d_calc|120',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_15: new BaseField('AVERAGE_VOLUME_90D_CALC_15', {
    label: 'Average Volume 90d Calc|15',
    fieldName: 'average_volume_90d_calc|15',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_1M: new BaseField('AVERAGE_VOLUME_90D_CALC_1M', {
    label: 'Average Volume 90d Calc|1m',
    fieldName: 'average_volume_90d_calc|1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_1W: new BaseField('AVERAGE_VOLUME_90D_CALC_1W', {
    label: 'Average Volume 90d Calc|1w',
    fieldName: 'average_volume_90d_calc|1W',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_240: new BaseField('AVERAGE_VOLUME_90D_CALC_240', {
    label: 'Average Volume 90d Calc|240',
    fieldName: 'average_volume_90d_calc|240',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_30: new BaseField('AVERAGE_VOLUME_90D_CALC_30', {
    label: 'Average Volume 90d Calc|30',
    fieldName: 'average_volume_90d_calc|30',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_5: new BaseField('AVERAGE_VOLUME_90D_CALC_5', {
    label: 'Average Volume 90d Calc|5',
    fieldName: 'average_volume_90d_calc|5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90D_CALC_60: new BaseField('AVERAGE_VOLUME_90D_CALC_60', {
    label: 'Average Volume 90d Calc|60',
    fieldName: 'average_volume_90d_calc|60',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVERAGE_VOLUME_90_DAY: new BaseField('AVERAGE_VOLUME_90_DAY', {
    label: 'Average Volume (90 day)',
    fieldName: 'average_volume_90d_calc',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  BB_LOWER_1: new BaseField('BB_LOWER_1', {
    label: 'BB Lower|1',
    fieldName: 'BB.lower|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_120: new BaseField('BB_LOWER_120', {
    label: 'BB Lower|120',
    fieldName: 'BB.lower|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_15: new BaseField('BB_LOWER_15', {
    label: 'BB Lower|15',
    fieldName: 'BB.lower|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_1M: new BaseField('BB_LOWER_1M', {
    label: 'BB Lower|1m',
    fieldName: 'BB.lower|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_1W: new BaseField('BB_LOWER_1W', {
    label: 'BB Lower|1w',
    fieldName: 'BB.lower|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_240: new BaseField('BB_LOWER_240', {
    label: 'BB Lower|240',
    fieldName: 'BB.lower|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_30: new BaseField('BB_LOWER_30', {
    label: 'BB Lower|30',
    fieldName: 'BB.lower|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_5: new BaseField('BB_LOWER_5', {
    label: 'BB Lower|5',
    fieldName: 'BB.lower|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50: new BaseField('BB_LOWER_50', {
    label: 'BB Lower 50',
    fieldName: 'BB.lower_50',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_1: new BaseField('BB_LOWER_50_1', {
    label: 'BB Lower 50|1',
    fieldName: 'BB.lower_50|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_120: new BaseField('BB_LOWER_50_120', {
    label: 'BB Lower 50|120',
    fieldName: 'BB.lower_50|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_15: new BaseField('BB_LOWER_50_15', {
    label: 'BB Lower 50|15',
    fieldName: 'BB.lower_50|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_1M: new BaseField('BB_LOWER_50_1M', {
    label: 'BB Lower 50|1m',
    fieldName: 'BB.lower_50|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_1W: new BaseField('BB_LOWER_50_1W', {
    label: 'BB Lower 50|1w',
    fieldName: 'BB.lower_50|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_240: new BaseField('BB_LOWER_50_240', {
    label: 'BB Lower 50|240',
    fieldName: 'BB.lower_50|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_30: new BaseField('BB_LOWER_50_30', {
    label: 'BB Lower 50|30',
    fieldName: 'BB.lower_50|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_5: new BaseField('BB_LOWER_50_5', {
    label: 'BB Lower 50|5',
    fieldName: 'BB.lower_50|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_50_60: new BaseField('BB_LOWER_50_60', {
    label: 'BB Lower 50|60',
    fieldName: 'BB.lower_50|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_LOWER_60: new BaseField('BB_LOWER_60', {
    label: 'BB Lower|60',
    fieldName: 'BB.lower|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BOLLINGER_LOWER_BAND_20: new BaseField('BOLLINGER_LOWER_BAND_20', {
    label: 'Bollinger Lower Band (20)',
    fieldName: 'BB.lower',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER: new BaseField('CANDLE_LONGSHADOW_LOWER', {
    label: 'Candle.LongShadow.Lower',
    fieldName: 'Candle.LongShadow.Lower',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_1: new BaseField('CANDLE_LONGSHADOW_LOWER_1', {
    label: 'Candle Longshadow Lower|1',
    fieldName: 'Candle.LongShadow.Lower|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_120: new BaseField('CANDLE_LONGSHADOW_LOWER_120', {
    label: 'Candle Longshadow Lower|120',
    fieldName: 'Candle.LongShadow.Lower|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_15: new BaseField('CANDLE_LONGSHADOW_LOWER_15', {
    label: 'Candle Longshadow Lower|15',
    fieldName: 'Candle.LongShadow.Lower|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_1M: new BaseField('CANDLE_LONGSHADOW_LOWER_1M', {
    label: 'Candle Longshadow Lower|1m',
    fieldName: 'Candle.LongShadow.Lower|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_1W: new BaseField('CANDLE_LONGSHADOW_LOWER_1W', {
    label: 'Candle Longshadow Lower|1w',
    fieldName: 'Candle.LongShadow.Lower|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_240: new BaseField('CANDLE_LONGSHADOW_LOWER_240', {
    label: 'Candle Longshadow Lower|240',
    fieldName: 'Candle.LongShadow.Lower|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_30: new BaseField('CANDLE_LONGSHADOW_LOWER_30', {
    label: 'Candle Longshadow Lower|30',
    fieldName: 'Candle.LongShadow.Lower|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_5: new BaseField('CANDLE_LONGSHADOW_LOWER_5', {
    label: 'Candle Longshadow Lower|5',
    fieldName: 'Candle.LongShadow.Lower|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_LOWER_60: new BaseField('CANDLE_LONGSHADOW_LOWER_60', {
    label: 'Candle Longshadow Lower|60',
    fieldName: 'Candle.LongShadow.Lower|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_1: new BaseField('CHAIKINMONEYFLOW_1', {
    label: 'Chaikinmoneyflow|1',
    fieldName: 'ChaikinMoneyFlow|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_120: new BaseField('CHAIKINMONEYFLOW_120', {
    label: 'Chaikinmoneyflow|120',
    fieldName: 'ChaikinMoneyFlow|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_15: new BaseField('CHAIKINMONEYFLOW_15', {
    label: 'Chaikinmoneyflow|15',
    fieldName: 'ChaikinMoneyFlow|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_1M: new BaseField('CHAIKINMONEYFLOW_1M', {
    label: 'Chaikinmoneyflow|1m',
    fieldName: 'ChaikinMoneyFlow|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_1W: new BaseField('CHAIKINMONEYFLOW_1W', {
    label: 'Chaikinmoneyflow|1w',
    fieldName: 'ChaikinMoneyFlow|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_240: new BaseField('CHAIKINMONEYFLOW_240', {
    label: 'Chaikinmoneyflow|240',
    fieldName: 'ChaikinMoneyFlow|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_30: new BaseField('CHAIKINMONEYFLOW_30', {
    label: 'Chaikinmoneyflow|30',
    fieldName: 'ChaikinMoneyFlow|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_5: new BaseField('CHAIKINMONEYFLOW_5', {
    label: 'Chaikinmoneyflow|5',
    fieldName: 'ChaikinMoneyFlow|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CHAIKINMONEYFLOW_60: new BaseField('CHAIKINMONEYFLOW_60', {
    label: 'Chaikinmoneyflow|60',
    fieldName: 'ChaikinMoneyFlow|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CHAIKIN_MONEY_FLOW_20: new BaseField('CHAIKIN_MONEY_FLOW_20', {
    label: 'Chaikin Money Flow (20)',
    fieldName: 'ChaikinMoneyFlow',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CLOSE_1: new BaseField('CLOSE_1', {
    label: 'Close|1',
    fieldName: 'close|1',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CLOSE_120: new BaseField('CLOSE_120', {
    label: 'Close|120',
    fieldName: 'close|120',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CLOSE_15: new BaseField('CLOSE_15', {
    label: 'Close|15',
    fieldName: 'close|15',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CLOSE_1M: new BaseField('CLOSE_1M', {
    label: 'Close|1m',
    fieldName: 'close|1M',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CLOSE_1W: new BaseField('CLOSE_1W', {
    label: 'Close|1w',
    fieldName: 'close|1W',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CLOSE_240: new BaseField('CLOSE_240', {
    label: 'Close|240',
    fieldName: 'close|240',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CLOSE_30: new BaseField('CLOSE_30', {
    label: 'Close|30',
    fieldName: 'close|30',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CLOSE_5: new BaseField('CLOSE_5', {
    label: 'Close|5',
    fieldName: 'close|5',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CLOSE_60: new BaseField('CLOSE_60', {
    label: 'Close|60',
    fieldName: 'close|60',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  DONCHCH20_LOWER_1: new BaseField('DONCHCH20_LOWER_1', {
    label: 'Donchch20 Lower|1',
    fieldName: 'DonchCh20.Lower|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_120: new BaseField('DONCHCH20_LOWER_120', {
    label: 'Donchch20 Lower|120',
    fieldName: 'DonchCh20.Lower|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_15: new BaseField('DONCHCH20_LOWER_15', {
    label: 'Donchch20 Lower|15',
    fieldName: 'DonchCh20.Lower|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_1M: new BaseField('DONCHCH20_LOWER_1M', {
    label: 'Donchch20 Lower|1m',
    fieldName: 'DonchCh20.Lower|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_1W: new BaseField('DONCHCH20_LOWER_1W', {
    label: 'Donchch20 Lower|1w',
    fieldName: 'DonchCh20.Lower|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_240: new BaseField('DONCHCH20_LOWER_240', {
    label: 'Donchch20 Lower|240',
    fieldName: 'DonchCh20.Lower|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_30: new BaseField('DONCHCH20_LOWER_30', {
    label: 'Donchch20 Lower|30',
    fieldName: 'DonchCh20.Lower|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_5: new BaseField('DONCHCH20_LOWER_5', {
    label: 'Donchch20 Lower|5',
    fieldName: 'DonchCh20.Lower|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_LOWER_60: new BaseField('DONCHCH20_LOWER_60', {
    label: 'Donchch20 Lower|60',
    fieldName: 'DonchCh20.Lower|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHIAN_CHANNELS_LOWER_BAND_20: new BaseField('DONCHIAN_CHANNELS_LOWER_BAND_20', {
    label: 'Donchian Channels Lower Band (20)',
    fieldName: 'DonchCh20.Lower',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ENTERPRISE_VALUE_TO_FREE_CASH_FLOW_TTM: new BaseField('ENTERPRISE_VALUE_TO_FREE_CASH_FLOW_TTM', {
    label: 'Enterprise Value to Free Cash Flow TTM',
    fieldName: 'enterprise_value_to_free_cash_flow_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW: new BaseField('FREE_CASH_FLOW', {
    label: 'Free Cash Flow',
    fieldName: 'free_cash_flow',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_ANNUAL_YOY_GROWTH: new BaseField('FREE_CASH_FLOW_ANNUAL_YOY_GROWTH', {
    label: 'Free Cash Flow (Annual YoY Growth)',
    fieldName: 'free_cash_flow_yoy_growth_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_CAGR_5Y: new BaseField('FREE_CASH_FLOW_CAGR_5Y', {
    label: 'Free Cash Flow Cagr 5y',
    fieldName: 'free_cash_flow_cagr_5y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_FH: new BaseField('FREE_CASH_FLOW_FH', {
    label: 'Free Cash Flow Fh',
    fieldName: 'free_cash_flow_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_FQ: new BaseField('FREE_CASH_FLOW_FQ', {
    label: 'Free Cash Flow FQ',
    fieldName: 'free_cash_flow_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_FQ_H: new BaseField('FREE_CASH_FLOW_FQ_H', {
    label: 'Free Cash Flow FQ H',
    fieldName: 'free_cash_flow_fq_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_FY: new BaseField('FREE_CASH_FLOW_FY', {
    label: 'Free Cash Flow (FY)',
    fieldName: 'free_cash_flow_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_FY_H: new BaseField('FREE_CASH_FLOW_FY_H', {
    label: 'Free Cash Flow FY H',
    fieldName: 'free_cash_flow_fy_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_MARGIN_FY: new BaseField('FREE_CASH_FLOW_MARGIN_FY', {
    label: 'Free Cash Flow Margin (FY)',
    fieldName: 'free_cash_flow_margin_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_MARGIN_TTM: new BaseField('FREE_CASH_FLOW_MARGIN_TTM', {
    label: 'Free Cash Flow Margin (TTM)',
    fieldName: 'free_cash_flow_margin_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_PER_EMPLOYEE_FY: new BaseField('FREE_CASH_FLOW_PER_EMPLOYEE_FY', {
    label: 'Free Cash Flow per Employee (FY)',
    fieldName: 'free_cash_flow_per_employee_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_PER_SHARE_CURRENT: new BaseField('FREE_CASH_FLOW_PER_SHARE_CURRENT', {
    label: 'Free Cash Flow per Share Current',
    fieldName: 'free_cash_flow_per_share_current',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_PER_SHARE_FH: new BaseField('FREE_CASH_FLOW_PER_SHARE_FH', {
    label: 'Free Cash Flow per Share Fh',
    fieldName: 'free_cash_flow_per_share_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_PER_SHARE_FQ: new BaseField('FREE_CASH_FLOW_PER_SHARE_FQ', {
    label: 'Free Cash Flow per Share FQ',
    fieldName: 'free_cash_flow_per_share_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_PER_SHARE_FY: new BaseField('FREE_CASH_FLOW_PER_SHARE_FY', {
    label: 'Free Cash Flow per Share FY',
    fieldName: 'free_cash_flow_per_share_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_PER_SHARE_TTM: new BaseField('FREE_CASH_FLOW_PER_SHARE_TTM', {
    label: 'Free Cash Flow per Share (TTM)',
    fieldName: 'free_cash_flow_per_share_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_QUARTERLY_QOQ_GROWTH: new BaseField('FREE_CASH_FLOW_QUARTERLY_QOQ_GROWTH', {
    label: 'Free Cash Flow (Quarterly QoQ Growth)',
    fieldName: 'free_cash_flow_qoq_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_QUARTERLY_YOY_GROWTH: new BaseField('FREE_CASH_FLOW_QUARTERLY_YOY_GROWTH', {
    label: 'Free Cash Flow (Quarterly YoY Growth)',
    fieldName: 'free_cash_flow_yoy_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_TTM: new BaseField('FREE_CASH_FLOW_TTM', {
    label: 'Free Cash Flow (TTM)',
    fieldName: 'free_cash_flow_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_TTM_H: new BaseField('FREE_CASH_FLOW_TTM_H', {
    label: 'Free Cash Flow TTM H',
    fieldName: 'free_cash_flow_ttm_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  FREE_CASH_FLOW_TTM_YOY_GROWTH: new BaseField('FREE_CASH_FLOW_TTM_YOY_GROWTH', {
    label: 'Free Cash Flow (TTM YoY Growth)',
    fieldName: 'free_cash_flow_yoy_growth_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  FUND_FLOWS_1M: new BaseField('FUND_FLOWS_1M', {
    label: 'Fund Flows 1m',
    fieldName: 'fund_flows.1M',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FUND_FLOWS_1Y: new BaseField('FUND_FLOWS_1Y', {
    label: 'Fund Flows 1y',
    fieldName: 'fund_flows.1Y',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FUND_FLOWS_3M: new BaseField('FUND_FLOWS_3M', {
    label: 'Fund Flows 3m',
    fieldName: 'fund_flows.3M',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FUND_FLOWS_3Y: new BaseField('FUND_FLOWS_3Y', {
    label: 'Fund Flows 3y',
    fieldName: 'fund_flows.3Y',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FUND_FLOWS_5Y: new BaseField('FUND_FLOWS_5Y', {
    label: 'Fund Flows 5y',
    fieldName: 'fund_flows.5Y',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  FUND_FLOWS_YTD: new BaseField('FUND_FLOWS_YTD', {
    label: 'Fund Flows Ytd',
    fieldName: 'fund_flows.YTD',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  HIGH: new BaseField('HIGH', {
    label: 'High',
    fieldName: 'high',
    format: 'currency',
    interval: true,
    historical: false,
  }),

  HIGH_1: new BaseField('HIGH_1', {
    label: 'High|1',
    fieldName: 'high|1',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  HIGH_120: new BaseField('HIGH_120', {
    label: 'High|120',
    fieldName: 'high|120',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  HIGH_15: new BaseField('HIGH_15', {
    label: 'High|15',
    fieldName: 'high|15',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  HIGH_1M: new BaseField('HIGH_1M', {
    label: 'High|1m',
    fieldName: 'high|1M',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  HIGH_1M_DATE: new BaseField('HIGH_1M_DATE', {
    label: 'High 1m Date',
    fieldName: 'High.1M.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  HIGH_1W: new BaseField('HIGH_1W', {
    label: 'High|1w',
    fieldName: 'high|1W',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  HIGH_240: new BaseField('HIGH_240', {
    label: 'High|240',
    fieldName: 'high|240',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  HIGH_30: new BaseField('HIGH_30', {
    label: 'High|30',
    fieldName: 'high|30',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  HIGH_3M_DATE: new BaseField('HIGH_3M_DATE', {
    label: 'High 3m Date',
    fieldName: 'High.3M.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  HIGH_5: new BaseField('HIGH_5', {
    label: 'High|5',
    fieldName: 'high|5',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  HIGH_5D: new BaseField('HIGH_5D', {
    label: 'High 5d',
    fieldName: 'High.5D',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HIGH_60: new BaseField('HIGH_60', {
    label: 'High|60',
    fieldName: 'high|60',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  HIGH_6M_DATE: new BaseField('HIGH_6M_DATE', {
    label: 'High 6m Date',
    fieldName: 'High.6M.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  HIGH_ALL_CALC: new BaseField('HIGH_ALL_CALC', {
    label: 'High All Calc',
    fieldName: 'High.All.Calc',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HIGH_ALL_CALC_DATE: new BaseField('HIGH_ALL_CALC_DATE', {
    label: 'High All Calc Date',
    fieldName: 'High.All.Calc.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  HIGH_ALL_DATE: new BaseField('HIGH_ALL_DATE', {
    label: 'High All Date',
    fieldName: 'High.All.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  IPO_MARKET_CAP_USD: new BaseField('IPO_MARKET_CAP_USD', {
    label: 'IPO Market Cap Usd',
    fieldName: 'ipo_market_cap_usd',
    format: 'round',
    interval: false,
    historical: false,
  }),

  IPO_OFFER_PRICE_USD: new BaseField('IPO_OFFER_PRICE_USD', {
    label: 'IPO Offer Price Usd',
    fieldName: 'ipo_offer_price_usd',
    format: 'round',
    interval: false,
    historical: false,
  }),

  IPO_PRICE_RANGE_USD_MAX: new BaseField('IPO_PRICE_RANGE_USD_MAX', {
    label: 'IPO Price Range Usd Max',
    fieldName: 'ipo_price_range_usd_max',
    format: 'round',
    interval: false,
    historical: false,
  }),

  IPO_PRICE_RANGE_USD_MIN: new BaseField('IPO_PRICE_RANGE_USD_MIN', {
    label: 'IPO Price Range Usd Min',
    fieldName: 'ipo_price_range_usd_min',
    format: 'round',
    interval: false,
    historical: false,
  }),

  KELTNER_CHANNELS_LOWER_BAND_20: new BaseField('KELTNER_CHANNELS_LOWER_BAND_20', {
    label: 'Keltner Channels Lower Band (20)',
    fieldName: 'KltChnl.lower',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_1: new BaseField('KLTCHNL_LOWER_1', {
    label: 'Kltchnl Lower|1',
    fieldName: 'KltChnl.lower|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_120: new BaseField('KLTCHNL_LOWER_120', {
    label: 'Kltchnl Lower|120',
    fieldName: 'KltChnl.lower|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_15: new BaseField('KLTCHNL_LOWER_15', {
    label: 'Kltchnl Lower|15',
    fieldName: 'KltChnl.lower|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_1M: new BaseField('KLTCHNL_LOWER_1M', {
    label: 'Kltchnl Lower|1m',
    fieldName: 'KltChnl.lower|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_1W: new BaseField('KLTCHNL_LOWER_1W', {
    label: 'Kltchnl Lower|1w',
    fieldName: 'KltChnl.lower|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_240: new BaseField('KLTCHNL_LOWER_240', {
    label: 'Kltchnl Lower|240',
    fieldName: 'KltChnl.lower|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_30: new BaseField('KLTCHNL_LOWER_30', {
    label: 'Kltchnl Lower|30',
    fieldName: 'KltChnl.lower|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_5: new BaseField('KLTCHNL_LOWER_5', {
    label: 'Kltchnl Lower|5',
    fieldName: 'KltChnl.lower|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_LOWER_60: new BaseField('KLTCHNL_LOWER_60', {
    label: 'Kltchnl Lower|60',
    fieldName: 'KltChnl.lower|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  LOW: new BaseField('LOW', {
    label: 'Low',
    fieldName: 'low',
    format: 'currency',
    interval: true,
    historical: false,
  }),

  LOW_1: new BaseField('LOW_1', {
    label: 'Low|1',
    fieldName: 'low|1',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  LOW_120: new BaseField('LOW_120', {
    label: 'Low|120',
    fieldName: 'low|120',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  LOW_15: new BaseField('LOW_15', {
    label: 'Low|15',
    fieldName: 'low|15',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  LOW_1M: new BaseField('LOW_1M', {
    label: 'Low|1m',
    fieldName: 'low|1M',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  LOW_1M_DATE: new BaseField('LOW_1M_DATE', {
    label: 'Low 1m Date',
    fieldName: 'Low.1M.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  LOW_1W: new BaseField('LOW_1W', {
    label: 'Low|1w',
    fieldName: 'low|1W',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  LOW_240: new BaseField('LOW_240', {
    label: 'Low|240',
    fieldName: 'low|240',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  LOW_30: new BaseField('LOW_30', {
    label: 'Low|30',
    fieldName: 'low|30',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  LOW_3M_DATE: new BaseField('LOW_3M_DATE', {
    label: 'Low 3m Date',
    fieldName: 'Low.3M.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  LOW_5: new BaseField('LOW_5', {
    label: 'Low|5',
    fieldName: 'low|5',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  LOW_5D: new BaseField('LOW_5D', {
    label: 'Low 5d',
    fieldName: 'Low.5D',
    format: 'round',
    interval: true,
    historical: false,
  }),

  LOW_60: new BaseField('LOW_60', {
    label: 'Low|60',
    fieldName: 'low|60',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  LOW_6M_DATE: new BaseField('LOW_6M_DATE', {
    label: 'Low 6m Date',
    fieldName: 'Low.6M.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  LOW_AFTER_HIGH_ALL: new BaseField('LOW_AFTER_HIGH_ALL', {
    label: 'Low After High All',
    fieldName: 'Low.After.High.All',
    format: 'currency',
    interval: true,
    historical: false,
  }),

  LOW_ALL_CALC: new BaseField('LOW_ALL_CALC', {
    label: 'Low All Calc',
    fieldName: 'Low.All.Calc',
    format: 'round',
    interval: true,
    historical: false,
  }),

  LOW_ALL_CALC_DATE: new BaseField('LOW_ALL_CALC_DATE', {
    label: 'Low All Calc Date',
    fieldName: 'Low.All.Calc.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  LOW_ALL_DATE: new BaseField('LOW_ALL_DATE', {
    label: 'Low All Date',
    fieldName: 'Low.All.Date',
    format: 'date',
    interval: true,
    historical: false,
  }),

  MARKET_CAPITALIZATION: new BaseField('MARKET_CAPITALIZATION', {
    label: 'Market Capitalization',
    fieldName: 'market_cap_basic',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  MARKET_CAP_CALC: new BaseField('MARKET_CAP_CALC', {
    label: 'Market Cap Calc',
    fieldName: 'market_cap_calc',
    format: 'round',
    interval: false,
    historical: false,
  }),

  MONEYFLOW_1: new BaseField('MONEYFLOW_1', {
    label: 'Moneyflow|1',
    fieldName: 'MoneyFlow|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_120: new BaseField('MONEYFLOW_120', {
    label: 'Moneyflow|120',
    fieldName: 'MoneyFlow|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_15: new BaseField('MONEYFLOW_15', {
    label: 'Moneyflow|15',
    fieldName: 'MoneyFlow|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_1M: new BaseField('MONEYFLOW_1M', {
    label: 'Moneyflow|1m',
    fieldName: 'MoneyFlow|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_1W: new BaseField('MONEYFLOW_1W', {
    label: 'Moneyflow|1w',
    fieldName: 'MoneyFlow|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_240: new BaseField('MONEYFLOW_240', {
    label: 'Moneyflow|240',
    fieldName: 'MoneyFlow|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_30: new BaseField('MONEYFLOW_30', {
    label: 'Moneyflow|30',
    fieldName: 'MoneyFlow|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_5: new BaseField('MONEYFLOW_5', {
    label: 'Moneyflow|5',
    fieldName: 'MoneyFlow|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MONEYFLOW_60: new BaseField('MONEYFLOW_60', {
    label: 'Moneyflow|60',
    fieldName: 'MoneyFlow|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MONEY_FLOW_14: new BaseField('MONEY_FLOW_14', {
    label: 'Money Flow (14)',
    fieldName: 'MoneyFlow',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MONTH_HIGH_1: new BaseField('MONTH_HIGH_1', {
    label: '1-Month High',
    fieldName: 'High.1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  MONTH_HIGH_3: new BaseField('MONTH_HIGH_3', {
    label: '3-Month High',
    fieldName: 'High.3M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  MONTH_HIGH_6: new BaseField('MONTH_HIGH_6', {
    label: '6-Month High',
    fieldName: 'High.6M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  MONTH_LOW_1: new BaseField('MONTH_LOW_1', {
    label: '1-Month Low',
    fieldName: 'Low.1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  MONTH_LOW_3: new BaseField('MONTH_LOW_3', {
    label: '3-Month Low',
    fieldName: 'Low.3M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  MONTH_LOW_6: new BaseField('MONTH_LOW_6', {
    label: '6-Month Low',
    fieldName: 'Low.6M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NON_GAAP_PRICE_TO_EARNINGS_PER_SHARE_FORECAST_NEXT_FY: new BaseField('NON_GAAP_PRICE_TO_EARNINGS_PER_SHARE_FORECAST_NEXT_FY', {
    label: 'Forward P/E (Non-GAAP)',
    fieldName: 'non_gaap_price_to_earnings_per_share_forecast_next_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  OPEN: new BaseField('OPEN', {
    label: 'Open',
    fieldName: 'open',
    format: 'currency',
    interval: true,
    historical: false,
  }),

  OPEN_1: new BaseField('OPEN_1', {
    label: 'Open|1',
    fieldName: 'open|1',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPEN_120: new BaseField('OPEN_120', {
    label: 'Open|120',
    fieldName: 'open|120',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPEN_15: new BaseField('OPEN_15', {
    label: 'Open|15',
    fieldName: 'open|15',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPEN_1M: new BaseField('OPEN_1M', {
    label: 'Open|1m',
    fieldName: 'open|1M',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPEN_1W: new BaseField('OPEN_1W', {
    label: 'Open|1w',
    fieldName: 'open|1W',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPEN_240: new BaseField('OPEN_240', {
    label: 'Open|240',
    fieldName: 'open|240',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPEN_30: new BaseField('OPEN_30', {
    label: 'Open|30',
    fieldName: 'open|30',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPEN_5: new BaseField('OPEN_5', {
    label: 'Open|5',
    fieldName: 'open|5',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPEN_60: new BaseField('OPEN_60', {
    label: 'Open|60',
    fieldName: 'open|60',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPEN_ALL_CALC: new BaseField('OPEN_ALL_CALC', {
    label: 'Open All Calc',
    fieldName: 'Open.All.Calc',
    format: 'round',
    interval: false,
    historical: false,
  }),

  OPERATING_CASH_FLOW_PER_SHARE_CURRENT: new BaseField('OPERATING_CASH_FLOW_PER_SHARE_CURRENT', {
    label: 'Operating Cash Flow per Share Current',
    fieldName: 'operating_cash_flow_per_share_current',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPERATING_CASH_FLOW_PER_SHARE_FH: new BaseField('OPERATING_CASH_FLOW_PER_SHARE_FH', {
    label: 'Operating Cash Flow per Share Fh',
    fieldName: 'operating_cash_flow_per_share_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPERATING_CASH_FLOW_PER_SHARE_FQ: new BaseField('OPERATING_CASH_FLOW_PER_SHARE_FQ', {
    label: 'Operating Cash Flow per Share FQ',
    fieldName: 'operating_cash_flow_per_share_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPERATING_CASH_FLOW_PER_SHARE_FY: new BaseField('OPERATING_CASH_FLOW_PER_SHARE_FY', {
    label: 'Operating Cash Flow per Share FY',
    fieldName: 'operating_cash_flow_per_share_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPERATING_CASH_FLOW_PER_SHARE_TTM: new BaseField('OPERATING_CASH_FLOW_PER_SHARE_TTM', {
    label: 'Operating Cash Flow per Share (TTM)',
    fieldName: 'operating_cash_flow_per_share_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  POSTMARKET_CLOSE: new BaseField('POSTMARKET_CLOSE', {
    label: 'Post-market Close',
    fieldName: 'postmarket_close',
    format: 'missing',
    interval: false,
    historical: false,
  }),

  POSTMARKET_HIGH: new BaseField('POSTMARKET_HIGH', {
    label: 'Post-market High',
    fieldName: 'postmarket_high',
    format: 'missing',
    interval: false,
    historical: false,
  }),

  POSTMARKET_LOW: new BaseField('POSTMARKET_LOW', {
    label: 'Post-market Low',
    fieldName: 'postmarket_low',
    format: 'missing',
    interval: false,
    historical: false,
  }),

  POSTMARKET_OPEN: new BaseField('POSTMARKET_OPEN', {
    label: 'Post-market Open',
    fieldName: 'postmarket_open',
    format: 'missing',
    interval: false,
    historical: false,
  }),

  POSTMARKET_VOLUME: new BaseField('POSTMARKET_VOLUME', {
    label: 'Post-market Volume',
    fieldName: 'postmarket_volume',
    format: 'missing',
    interval: false,
    historical: false,
  }),

  PREMARKET_CLOSE: new BaseField('PREMARKET_CLOSE', {
    label: 'Pre-market Close',
    fieldName: 'premarket_close',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PREMARKET_HIGH: new BaseField('PREMARKET_HIGH', {
    label: 'Pre-market High',
    fieldName: 'premarket_high',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PREMARKET_LOW: new BaseField('PREMARKET_LOW', {
    label: 'Pre-market Low',
    fieldName: 'premarket_low',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PREMARKET_OPEN: new BaseField('PREMARKET_OPEN', {
    label: 'Pre-market Open',
    fieldName: 'premarket_open',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PREMARKET_VOLUME: new BaseField('PREMARKET_VOLUME', {
    label: 'Pre-market Volume',
    fieldName: 'premarket_volume',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  PRICE: new BaseField('PRICE', {
    label: 'Price',
    fieldName: 'close',
    format: 'currency',
    interval: true,
    historical: false,
  }),

  PRICESCALE: new BaseField('PRICESCALE', {
    label: 'Pricescale',
    fieldName: 'pricescale',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_52_WEEK_HIGH_DATE: new BaseField('PRICE_52_WEEK_HIGH_DATE', {
    label: 'Price 52 Week High Date',
    fieldName: 'price_52_week_high_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  PRICE_52_WEEK_LOW_DATE: new BaseField('PRICE_52_WEEK_LOW_DATE', {
    label: 'Price 52 Week Low Date',
    fieldName: 'price_52_week_low_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  PRICE_ANNUAL_BOOK: new BaseField('PRICE_ANNUAL_BOOK', {
    label: 'Price Annual Book',
    fieldName: 'price_annual_book',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_ANNUAL_SALES: new BaseField('PRICE_ANNUAL_SALES', {
    label: 'Price Annual Sales',
    fieldName: 'price_annual_sales',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_BOOK_CURRENT: new BaseField('PRICE_BOOK_CURRENT', {
    label: 'Price Book Current',
    fieldName: 'price_book_current',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_CASH_FLOW_CURRENT: new BaseField('PRICE_CASH_FLOW_CURRENT', {
    label: 'Price Cash Flow Current',
    fieldName: 'price_cash_flow_current',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_EARNINGS_CURRENT: new BaseField('PRICE_EARNINGS_CURRENT', {
    label: 'Price Earnings Current',
    fieldName: 'price_earnings_current',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_EARNINGS_FORWARD_FY: new BaseField('PRICE_EARNINGS_FORWARD_FY', {
    label: 'Price Earnings Forward FY',
    fieldName: 'price_earnings_forward_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_EARNINGS_GROWTH_TTM: new BaseField('PRICE_EARNINGS_GROWTH_TTM', {
    label: 'PEG Ratio (TTM)',
    fieldName: 'price_earnings_growth_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_FREE_CASH_FLOW_CURRENT: new BaseField('PRICE_FREE_CASH_FLOW_CURRENT', {
    label: 'Price Free Cash Flow Current',
    fieldName: 'price_free_cash_flow_current',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_SALES: new BaseField('PRICE_SALES', {
    label: 'Price Sales',
    fieldName: 'price_sales',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PRICE_SALES_CURRENT: new BaseField('PRICE_SALES_CURRENT', {
    label: 'Price Sales Current',
    fieldName: 'price_sales_current',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_TARGET_1Y: new BaseField('PRICE_TARGET_1Y', {
    label: 'Price Target 1y',
    fieldName: 'price_target_1y',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PRICE_TARGET_1Y_DELTA: new BaseField('PRICE_TARGET_1Y_DELTA', {
    label: 'Price Target 1y Delta',
    fieldName: 'price_target_1y_delta',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRICE_TARGET_AVERAGE: new BaseField('PRICE_TARGET_AVERAGE', {
    label: 'Target Price (Average)',
    fieldName: 'price_target_average',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PRICE_TARGET_HIGH: new BaseField('PRICE_TARGET_HIGH', {
    label: 'Price Target High',
    fieldName: 'price_target_high',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_TARGET_LOW: new BaseField('PRICE_TARGET_LOW', {
    label: 'Price Target Low',
    fieldName: 'price_target_low',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_TARGET_MEDIAN: new BaseField('PRICE_TARGET_MEDIAN', {
    label: 'Price Target Median',
    fieldName: 'price_target_median',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_TO_BOOK_FY: new BaseField('PRICE_TO_BOOK_FY', {
    label: 'Price to Book (FY)',
    fieldName: 'price_book_ratio',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_TO_BOOK_MRQ: new BaseField('PRICE_TO_BOOK_MRQ', {
    label: 'Price to Book (MRQ)',
    fieldName: 'price_book_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_TO_CASH_F_OPERATING_ACTIVITIES_TTM: new BaseField('PRICE_TO_CASH_F_OPERATING_ACTIVITIES_TTM', {
    label: 'Price to Cash Flow (TTM)',
    fieldName: 'price_to_cash_f_operating_activities_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_TO_CASH_RATIO: new BaseField('PRICE_TO_CASH_RATIO', {
    label: 'Price to Cash Ratio',
    fieldName: 'price_to_cash_ratio',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_TO_EARNINGS_RATIO_TTM: new BaseField('PRICE_TO_EARNINGS_RATIO_TTM', {
    label: 'Price to Earnings Ratio (TTM)',
    fieldName: 'price_earnings_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_TO_FREE_CASH_FLOW_TTM: new BaseField('PRICE_TO_FREE_CASH_FLOW_TTM', {
    label: 'Price to Free Cash Flow (TTM)',
    fieldName: 'price_free_cash_flow_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_TO_REVENUE_RATIO_TTM: new BaseField('PRICE_TO_REVENUE_RATIO_TTM', {
    label: 'Price to Revenue Ratio (TTM)',
    fieldName: 'price_revenue_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_TO_SALES_FY: new BaseField('PRICE_TO_SALES_FY', {
    label: 'Price to Sales (FY)',
    fieldName: 'price_sales_ratio',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PRICE_TO_WORKING_CAPITAL_FQ: new BaseField('PRICE_TO_WORKING_CAPITAL_FQ', {
    label: 'Price to Net Working Capital',
    fieldName: 'price_to_working_capital_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME: new BaseField('RELATIVE_VOLUME', {
    label: 'Relative Volume',
    fieldName: 'relative_volume_10d_calc',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_1: new BaseField('RELATIVE_VOLUME_10D_CALC_1', {
    label: 'Relative Volume 10d Calc|1',
    fieldName: 'relative_volume_10d_calc|1',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_120: new BaseField('RELATIVE_VOLUME_10D_CALC_120', {
    label: 'Relative Volume 10d Calc|120',
    fieldName: 'relative_volume_10d_calc|120',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_15: new BaseField('RELATIVE_VOLUME_10D_CALC_15', {
    label: 'Relative Volume 10d Calc|15',
    fieldName: 'relative_volume_10d_calc|15',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_1M: new BaseField('RELATIVE_VOLUME_10D_CALC_1M', {
    label: 'Relative Volume 10d Calc|1m',
    fieldName: 'relative_volume_10d_calc|1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_1W: new BaseField('RELATIVE_VOLUME_10D_CALC_1W', {
    label: 'Relative Volume 10d Calc|1w',
    fieldName: 'relative_volume_10d_calc|1W',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_240: new BaseField('RELATIVE_VOLUME_10D_CALC_240', {
    label: 'Relative Volume 10d Calc|240',
    fieldName: 'relative_volume_10d_calc|240',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_30: new BaseField('RELATIVE_VOLUME_10D_CALC_30', {
    label: 'Relative Volume 10d Calc|30',
    fieldName: 'relative_volume_10d_calc|30',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_5: new BaseField('RELATIVE_VOLUME_10D_CALC_5', {
    label: 'Relative Volume 10d Calc|5',
    fieldName: 'relative_volume_10d_calc|5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_10D_CALC_60: new BaseField('RELATIVE_VOLUME_10D_CALC_60', {
    label: 'Relative Volume 10d Calc|60',
    fieldName: 'relative_volume_10d_calc|60',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_2: new BaseField('RELATIVE_VOLUME_2', {
    label: 'Relative Volume',
    fieldName: 'relative_volume',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_AT_TIME: new BaseField('RELATIVE_VOLUME_AT_TIME', {
    label: 'Relative Volume at Time',
    fieldName: 'relative_volume_intraday.5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RELATIVE_VOLUME_INTRADAY_5: new BaseField('RELATIVE_VOLUME_INTRADAY_5', {
    label: 'Relative Volume Intraday|5',
    fieldName: 'relative_volume_intraday|5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  STOCHASTIC_RSI_SLOW_3_3_14_14: new BaseField('STOCHASTIC_RSI_SLOW_3_3_14_14', {
    label: 'Stochastic RSI Slow (3, 3, 14, 14)',
    fieldName: 'Stoch.RSI.D',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VOLUME: new BaseField('VOLUME', {
    label: 'Volume',
    fieldName: 'volume',
    format: 'number_group',
    interval: true,
    historical: false,
  }),

  VOLUMEXPRICE: new BaseField('VOLUMEXPRICE', {
    label: 'Volume*Price',
    fieldName: 'Value.Traded',
    format: 'number_group',
    interval: true,
    historical: false,
  }),

  VOLUME_1: new BaseField('VOLUME_1', {
    label: 'Volume|1',
    fieldName: 'volume|1',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_120: new BaseField('VOLUME_120', {
    label: 'Volume|120',
    fieldName: 'volume|120',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_15: new BaseField('VOLUME_15', {
    label: 'Volume|15',
    fieldName: 'volume|15',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_1M: new BaseField('VOLUME_1M', {
    label: 'Volume|1m',
    fieldName: 'volume|1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_1W: new BaseField('VOLUME_1W', {
    label: 'Volume|1w',
    fieldName: 'volume|1W',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_240: new BaseField('VOLUME_240', {
    label: 'Volume|240',
    fieldName: 'volume|240',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_30: new BaseField('VOLUME_30', {
    label: 'Volume|30',
    fieldName: 'volume|30',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_5: new BaseField('VOLUME_5', {
    label: 'Volume|5',
    fieldName: 'volume|5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_60: new BaseField('VOLUME_60', {
    label: 'Volume|60',
    fieldName: 'volume|60',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_WEIGHTED_AVERAGE_PRICE: new BaseField('VOLUME_WEIGHTED_AVERAGE_PRICE', {
    label: 'Volume Weighted Average Price',
    fieldName: 'VWAP',
    format: 'float',
    interval: true,
    historical: false,
  }),

  VOLUME_WEIGHTED_MOVING_AVERAGE_20: new BaseField('VOLUME_WEIGHTED_MOVING_AVERAGE_20', {
    label: 'Volume Weighted Moving Average (20)',
    fieldName: 'VWMA',
    format: 'recommendation',
    interval: true,
    historical: false,
  }),

  VWAP_1: new BaseField('VWAP_1', {
    label: 'Vwap|1',
    fieldName: 'VWAP|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWAP_120: new BaseField('VWAP_120', {
    label: 'Vwap|120',
    fieldName: 'VWAP|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWAP_15: new BaseField('VWAP_15', {
    label: 'Vwap|15',
    fieldName: 'VWAP|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWAP_1M: new BaseField('VWAP_1M', {
    label: 'Vwap|1m',
    fieldName: 'VWAP|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWAP_1W: new BaseField('VWAP_1W', {
    label: 'Vwap|1w',
    fieldName: 'VWAP|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWAP_240: new BaseField('VWAP_240', {
    label: 'Vwap|240',
    fieldName: 'VWAP|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWAP_30: new BaseField('VWAP_30', {
    label: 'Vwap|30',
    fieldName: 'VWAP|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWAP_5: new BaseField('VWAP_5', {
    label: 'Vwap|5',
    fieldName: 'VWAP|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWAP_60: new BaseField('VWAP_60', {
    label: 'Vwap|60',
    fieldName: 'VWAP|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  WEEK_HIGH_52: new BaseField('WEEK_HIGH_52', {
    label: '52 Week High',
    fieldName: 'price_52_week_high',
    format: 'round',
    interval: false,
    historical: false,
  }),

  WEEK_LOW_52: new BaseField('WEEK_LOW_52', {
    label: '52 Week Low',
    fieldName: 'price_52_week_low',
    format: 'round',
    interval: false,
    historical: false,
  }),

  // === Technical Indicators - Moving Averages (674 fields) ===

  EMA100_1: new BaseField('EMA100_1', {
    label: 'Ema100|1',
    fieldName: 'EMA100|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA100_120: new BaseField('EMA100_120', {
    label: 'Ema100|120',
    fieldName: 'EMA100|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA100_15: new BaseField('EMA100_15', {
    label: 'Ema100|15',
    fieldName: 'EMA100|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA100_1M: new BaseField('EMA100_1M', {
    label: 'Ema100|1m',
    fieldName: 'EMA100|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA100_1W: new BaseField('EMA100_1W', {
    label: 'Ema100|1w',
    fieldName: 'EMA100|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA100_240: new BaseField('EMA100_240', {
    label: 'Ema100|240',
    fieldName: 'EMA100|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA100_30: new BaseField('EMA100_30', {
    label: 'Ema100|30',
    fieldName: 'EMA100|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA100_5: new BaseField('EMA100_5', {
    label: 'Ema100|5',
    fieldName: 'EMA100|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA100_60: new BaseField('EMA100_60', {
    label: 'Ema100|60',
    fieldName: 'EMA100|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA10_1: new BaseField('EMA10_1', {
    label: 'Ema10|1',
    fieldName: 'EMA10|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA10_120: new BaseField('EMA10_120', {
    label: 'Ema10|120',
    fieldName: 'EMA10|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA10_15: new BaseField('EMA10_15', {
    label: 'Ema10|15',
    fieldName: 'EMA10|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA10_1M: new BaseField('EMA10_1M', {
    label: 'Ema10|1m',
    fieldName: 'EMA10|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA10_1W: new BaseField('EMA10_1W', {
    label: 'Ema10|1w',
    fieldName: 'EMA10|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA10_240: new BaseField('EMA10_240', {
    label: 'Ema10|240',
    fieldName: 'EMA10|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA10_30: new BaseField('EMA10_30', {
    label: 'Ema10|30',
    fieldName: 'EMA10|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA10_5: new BaseField('EMA10_5', {
    label: 'Ema10|5',
    fieldName: 'EMA10|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA10_60: new BaseField('EMA10_60', {
    label: 'Ema10|60',
    fieldName: 'EMA10|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA12: new BaseField('EMA12', {
    label: 'Ema12',
    fieldName: 'EMA12',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA120: new BaseField('EMA120', {
    label: 'Ema120',
    fieldName: 'EMA120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA120_1: new BaseField('EMA120_1', {
    label: 'Ema120|1',
    fieldName: 'EMA120|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA120_120: new BaseField('EMA120_120', {
    label: 'Ema120|120',
    fieldName: 'EMA120|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA120_15: new BaseField('EMA120_15', {
    label: 'Ema120|15',
    fieldName: 'EMA120|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA120_1M: new BaseField('EMA120_1M', {
    label: 'Ema120|1m',
    fieldName: 'EMA120|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA120_1W: new BaseField('EMA120_1W', {
    label: 'Ema120|1w',
    fieldName: 'EMA120|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA120_240: new BaseField('EMA120_240', {
    label: 'Ema120|240',
    fieldName: 'EMA120|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA120_30: new BaseField('EMA120_30', {
    label: 'Ema120|30',
    fieldName: 'EMA120|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA120_5: new BaseField('EMA120_5', {
    label: 'Ema120|5',
    fieldName: 'EMA120|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA120_60: new BaseField('EMA120_60', {
    label: 'Ema120|60',
    fieldName: 'EMA120|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA12_1: new BaseField('EMA12_1', {
    label: 'Ema12|1',
    fieldName: 'EMA12|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA12_120: new BaseField('EMA12_120', {
    label: 'Ema12|120',
    fieldName: 'EMA12|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA12_15: new BaseField('EMA12_15', {
    label: 'Ema12|15',
    fieldName: 'EMA12|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA12_1M: new BaseField('EMA12_1M', {
    label: 'Ema12|1m',
    fieldName: 'EMA12|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA12_1W: new BaseField('EMA12_1W', {
    label: 'Ema12|1w',
    fieldName: 'EMA12|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA12_240: new BaseField('EMA12_240', {
    label: 'Ema12|240',
    fieldName: 'EMA12|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA12_30: new BaseField('EMA12_30', {
    label: 'Ema12|30',
    fieldName: 'EMA12|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA12_5: new BaseField('EMA12_5', {
    label: 'Ema12|5',
    fieldName: 'EMA12|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA12_60: new BaseField('EMA12_60', {
    label: 'Ema12|60',
    fieldName: 'EMA12|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA13: new BaseField('EMA13', {
    label: 'Ema13',
    fieldName: 'EMA13',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA13_1: new BaseField('EMA13_1', {
    label: 'Ema13|1',
    fieldName: 'EMA13|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA13_120: new BaseField('EMA13_120', {
    label: 'Ema13|120',
    fieldName: 'EMA13|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA13_15: new BaseField('EMA13_15', {
    label: 'Ema13|15',
    fieldName: 'EMA13|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA13_1M: new BaseField('EMA13_1M', {
    label: 'Ema13|1m',
    fieldName: 'EMA13|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA13_1W: new BaseField('EMA13_1W', {
    label: 'Ema13|1w',
    fieldName: 'EMA13|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA13_240: new BaseField('EMA13_240', {
    label: 'Ema13|240',
    fieldName: 'EMA13|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA13_30: new BaseField('EMA13_30', {
    label: 'Ema13|30',
    fieldName: 'EMA13|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA13_5: new BaseField('EMA13_5', {
    label: 'Ema13|5',
    fieldName: 'EMA13|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA13_60: new BaseField('EMA13_60', {
    label: 'Ema13|60',
    fieldName: 'EMA13|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA14: new BaseField('EMA14', {
    label: 'Ema14',
    fieldName: 'EMA14',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA144: new BaseField('EMA144', {
    label: 'Ema144',
    fieldName: 'EMA144',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA144_1: new BaseField('EMA144_1', {
    label: 'Ema144|1',
    fieldName: 'EMA144|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA144_120: new BaseField('EMA144_120', {
    label: 'Ema144|120',
    fieldName: 'EMA144|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA144_15: new BaseField('EMA144_15', {
    label: 'Ema144|15',
    fieldName: 'EMA144|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA144_1M: new BaseField('EMA144_1M', {
    label: 'Ema144|1m',
    fieldName: 'EMA144|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA144_1W: new BaseField('EMA144_1W', {
    label: 'Ema144|1w',
    fieldName: 'EMA144|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA144_240: new BaseField('EMA144_240', {
    label: 'Ema144|240',
    fieldName: 'EMA144|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA144_30: new BaseField('EMA144_30', {
    label: 'Ema144|30',
    fieldName: 'EMA144|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA144_5: new BaseField('EMA144_5', {
    label: 'Ema144|5',
    fieldName: 'EMA144|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA144_60: new BaseField('EMA144_60', {
    label: 'Ema144|60',
    fieldName: 'EMA144|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA14_1: new BaseField('EMA14_1', {
    label: 'Ema14|1',
    fieldName: 'EMA14|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA14_120: new BaseField('EMA14_120', {
    label: 'Ema14|120',
    fieldName: 'EMA14|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA14_15: new BaseField('EMA14_15', {
    label: 'Ema14|15',
    fieldName: 'EMA14|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA14_1M: new BaseField('EMA14_1M', {
    label: 'Ema14|1m',
    fieldName: 'EMA14|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA14_1W: new BaseField('EMA14_1W', {
    label: 'Ema14|1w',
    fieldName: 'EMA14|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA14_240: new BaseField('EMA14_240', {
    label: 'Ema14|240',
    fieldName: 'EMA14|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA14_30: new BaseField('EMA14_30', {
    label: 'Ema14|30',
    fieldName: 'EMA14|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA14_5: new BaseField('EMA14_5', {
    label: 'Ema14|5',
    fieldName: 'EMA14|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA14_60: new BaseField('EMA14_60', {
    label: 'Ema14|60',
    fieldName: 'EMA14|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA15: new BaseField('EMA15', {
    label: 'Ema15',
    fieldName: 'EMA15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA150: new BaseField('EMA150', {
    label: 'Ema150',
    fieldName: 'EMA150',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA150_1: new BaseField('EMA150_1', {
    label: 'Ema150|1',
    fieldName: 'EMA150|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA150_120: new BaseField('EMA150_120', {
    label: 'Ema150|120',
    fieldName: 'EMA150|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA150_15: new BaseField('EMA150_15', {
    label: 'Ema150|15',
    fieldName: 'EMA150|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA150_1M: new BaseField('EMA150_1M', {
    label: 'Ema150|1m',
    fieldName: 'EMA150|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA150_1W: new BaseField('EMA150_1W', {
    label: 'Ema150|1w',
    fieldName: 'EMA150|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA150_240: new BaseField('EMA150_240', {
    label: 'Ema150|240',
    fieldName: 'EMA150|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA150_30: new BaseField('EMA150_30', {
    label: 'Ema150|30',
    fieldName: 'EMA150|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA150_5: new BaseField('EMA150_5', {
    label: 'Ema150|5',
    fieldName: 'EMA150|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA150_60: new BaseField('EMA150_60', {
    label: 'Ema150|60',
    fieldName: 'EMA150|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA15_1: new BaseField('EMA15_1', {
    label: 'Ema15|1',
    fieldName: 'EMA15|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA15_120: new BaseField('EMA15_120', {
    label: 'Ema15|120',
    fieldName: 'EMA15|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA15_15: new BaseField('EMA15_15', {
    label: 'Ema15|15',
    fieldName: 'EMA15|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA15_1M: new BaseField('EMA15_1M', {
    label: 'Ema15|1m',
    fieldName: 'EMA15|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA15_1W: new BaseField('EMA15_1W', {
    label: 'Ema15|1w',
    fieldName: 'EMA15|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA15_240: new BaseField('EMA15_240', {
    label: 'Ema15|240',
    fieldName: 'EMA15|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA15_30: new BaseField('EMA15_30', {
    label: 'Ema15|30',
    fieldName: 'EMA15|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA15_5: new BaseField('EMA15_5', {
    label: 'Ema15|5',
    fieldName: 'EMA15|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA15_60: new BaseField('EMA15_60', {
    label: 'Ema15|60',
    fieldName: 'EMA15|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA2: new BaseField('EMA2', {
    label: 'Ema2',
    fieldName: 'EMA2',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA200_1: new BaseField('EMA200_1', {
    label: 'Ema200|1',
    fieldName: 'EMA200|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA200_120: new BaseField('EMA200_120', {
    label: 'Ema200|120',
    fieldName: 'EMA200|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA200_15: new BaseField('EMA200_15', {
    label: 'Ema200|15',
    fieldName: 'EMA200|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA200_1M: new BaseField('EMA200_1M', {
    label: 'Ema200|1m',
    fieldName: 'EMA200|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA200_1W: new BaseField('EMA200_1W', {
    label: 'Ema200|1w',
    fieldName: 'EMA200|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA200_240: new BaseField('EMA200_240', {
    label: 'Ema200|240',
    fieldName: 'EMA200|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA200_30: new BaseField('EMA200_30', {
    label: 'Ema200|30',
    fieldName: 'EMA200|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA200_5: new BaseField('EMA200_5', {
    label: 'Ema200|5',
    fieldName: 'EMA200|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA200_60: new BaseField('EMA200_60', {
    label: 'Ema200|60',
    fieldName: 'EMA200|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA20_1: new BaseField('EMA20_1', {
    label: 'Ema20|1',
    fieldName: 'EMA20|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA20_120: new BaseField('EMA20_120', {
    label: 'Ema20|120',
    fieldName: 'EMA20|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA20_15: new BaseField('EMA20_15', {
    label: 'Ema20|15',
    fieldName: 'EMA20|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA20_1M: new BaseField('EMA20_1M', {
    label: 'Ema20|1m',
    fieldName: 'EMA20|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA20_1W: new BaseField('EMA20_1W', {
    label: 'Ema20|1w',
    fieldName: 'EMA20|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA20_240: new BaseField('EMA20_240', {
    label: 'Ema20|240',
    fieldName: 'EMA20|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA20_30: new BaseField('EMA20_30', {
    label: 'Ema20|30',
    fieldName: 'EMA20|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA20_5: new BaseField('EMA20_5', {
    label: 'Ema20|5',
    fieldName: 'EMA20|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA20_60: new BaseField('EMA20_60', {
    label: 'Ema20|60',
    fieldName: 'EMA20|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA21: new BaseField('EMA21', {
    label: 'Ema21',
    fieldName: 'EMA21',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA21_1: new BaseField('EMA21_1', {
    label: 'Ema21|1',
    fieldName: 'EMA21|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA21_120: new BaseField('EMA21_120', {
    label: 'Ema21|120',
    fieldName: 'EMA21|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA21_15: new BaseField('EMA21_15', {
    label: 'Ema21|15',
    fieldName: 'EMA21|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA21_1M: new BaseField('EMA21_1M', {
    label: 'Ema21|1m',
    fieldName: 'EMA21|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA21_1W: new BaseField('EMA21_1W', {
    label: 'Ema21|1w',
    fieldName: 'EMA21|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA21_240: new BaseField('EMA21_240', {
    label: 'Ema21|240',
    fieldName: 'EMA21|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA21_30: new BaseField('EMA21_30', {
    label: 'Ema21|30',
    fieldName: 'EMA21|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA21_5: new BaseField('EMA21_5', {
    label: 'Ema21|5',
    fieldName: 'EMA21|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA21_60: new BaseField('EMA21_60', {
    label: 'Ema21|60',
    fieldName: 'EMA21|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA25: new BaseField('EMA25', {
    label: 'Ema25',
    fieldName: 'EMA25',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA250: new BaseField('EMA250', {
    label: 'Ema250',
    fieldName: 'EMA250',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA250_1: new BaseField('EMA250_1', {
    label: 'Ema250|1',
    fieldName: 'EMA250|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA250_120: new BaseField('EMA250_120', {
    label: 'Ema250|120',
    fieldName: 'EMA250|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA250_15: new BaseField('EMA250_15', {
    label: 'Ema250|15',
    fieldName: 'EMA250|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA250_1M: new BaseField('EMA250_1M', {
    label: 'Ema250|1m',
    fieldName: 'EMA250|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA250_1W: new BaseField('EMA250_1W', {
    label: 'Ema250|1w',
    fieldName: 'EMA250|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA250_240: new BaseField('EMA250_240', {
    label: 'Ema250|240',
    fieldName: 'EMA250|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA250_30: new BaseField('EMA250_30', {
    label: 'Ema250|30',
    fieldName: 'EMA250|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA250_5: new BaseField('EMA250_5', {
    label: 'Ema250|5',
    fieldName: 'EMA250|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA250_60: new BaseField('EMA250_60', {
    label: 'Ema250|60',
    fieldName: 'EMA250|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA25_1: new BaseField('EMA25_1', {
    label: 'Ema25|1',
    fieldName: 'EMA25|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA25_120: new BaseField('EMA25_120', {
    label: 'Ema25|120',
    fieldName: 'EMA25|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA25_15: new BaseField('EMA25_15', {
    label: 'Ema25|15',
    fieldName: 'EMA25|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA25_1M: new BaseField('EMA25_1M', {
    label: 'Ema25|1m',
    fieldName: 'EMA25|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA25_1W: new BaseField('EMA25_1W', {
    label: 'Ema25|1w',
    fieldName: 'EMA25|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA25_240: new BaseField('EMA25_240', {
    label: 'Ema25|240',
    fieldName: 'EMA25|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA25_30: new BaseField('EMA25_30', {
    label: 'Ema25|30',
    fieldName: 'EMA25|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA25_5: new BaseField('EMA25_5', {
    label: 'Ema25|5',
    fieldName: 'EMA25|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA25_60: new BaseField('EMA25_60', {
    label: 'Ema25|60',
    fieldName: 'EMA25|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA26: new BaseField('EMA26', {
    label: 'Ema26',
    fieldName: 'EMA26',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA26_1: new BaseField('EMA26_1', {
    label: 'Ema26|1',
    fieldName: 'EMA26|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA26_120: new BaseField('EMA26_120', {
    label: 'Ema26|120',
    fieldName: 'EMA26|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA26_15: new BaseField('EMA26_15', {
    label: 'Ema26|15',
    fieldName: 'EMA26|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA26_1M: new BaseField('EMA26_1M', {
    label: 'Ema26|1m',
    fieldName: 'EMA26|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA26_1W: new BaseField('EMA26_1W', {
    label: 'Ema26|1w',
    fieldName: 'EMA26|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA26_240: new BaseField('EMA26_240', {
    label: 'Ema26|240',
    fieldName: 'EMA26|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA26_30: new BaseField('EMA26_30', {
    label: 'Ema26|30',
    fieldName: 'EMA26|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA26_5: new BaseField('EMA26_5', {
    label: 'Ema26|5',
    fieldName: 'EMA26|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA26_60: new BaseField('EMA26_60', {
    label: 'Ema26|60',
    fieldName: 'EMA26|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA2_1: new BaseField('EMA2_1', {
    label: 'Ema2|1',
    fieldName: 'EMA2|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA2_120: new BaseField('EMA2_120', {
    label: 'Ema2|120',
    fieldName: 'EMA2|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA2_15: new BaseField('EMA2_15', {
    label: 'Ema2|15',
    fieldName: 'EMA2|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA2_1M: new BaseField('EMA2_1M', {
    label: 'Ema2|1m',
    fieldName: 'EMA2|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA2_1W: new BaseField('EMA2_1W', {
    label: 'Ema2|1w',
    fieldName: 'EMA2|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA2_240: new BaseField('EMA2_240', {
    label: 'Ema2|240',
    fieldName: 'EMA2|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA2_30: new BaseField('EMA2_30', {
    label: 'Ema2|30',
    fieldName: 'EMA2|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA2_5: new BaseField('EMA2_5', {
    label: 'Ema2|5',
    fieldName: 'EMA2|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA2_60: new BaseField('EMA2_60', {
    label: 'Ema2|60',
    fieldName: 'EMA2|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA3: new BaseField('EMA3', {
    label: 'Ema3',
    fieldName: 'EMA3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA300: new BaseField('EMA300', {
    label: 'Ema300',
    fieldName: 'EMA300',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA300_1: new BaseField('EMA300_1', {
    label: 'Ema300|1',
    fieldName: 'EMA300|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA300_120: new BaseField('EMA300_120', {
    label: 'Ema300|120',
    fieldName: 'EMA300|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA300_15: new BaseField('EMA300_15', {
    label: 'Ema300|15',
    fieldName: 'EMA300|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA300_1M: new BaseField('EMA300_1M', {
    label: 'Ema300|1m',
    fieldName: 'EMA300|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA300_1W: new BaseField('EMA300_1W', {
    label: 'Ema300|1w',
    fieldName: 'EMA300|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA300_240: new BaseField('EMA300_240', {
    label: 'Ema300|240',
    fieldName: 'EMA300|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA300_30: new BaseField('EMA300_30', {
    label: 'Ema300|30',
    fieldName: 'EMA300|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA300_5: new BaseField('EMA300_5', {
    label: 'Ema300|5',
    fieldName: 'EMA300|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA300_60: new BaseField('EMA300_60', {
    label: 'Ema300|60',
    fieldName: 'EMA300|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA30_1: new BaseField('EMA30_1', {
    label: 'Ema30|1',
    fieldName: 'EMA30|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA30_120: new BaseField('EMA30_120', {
    label: 'Ema30|120',
    fieldName: 'EMA30|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA30_15: new BaseField('EMA30_15', {
    label: 'Ema30|15',
    fieldName: 'EMA30|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA30_1M: new BaseField('EMA30_1M', {
    label: 'Ema30|1m',
    fieldName: 'EMA30|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA30_1W: new BaseField('EMA30_1W', {
    label: 'Ema30|1w',
    fieldName: 'EMA30|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA30_240: new BaseField('EMA30_240', {
    label: 'Ema30|240',
    fieldName: 'EMA30|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA30_30: new BaseField('EMA30_30', {
    label: 'Ema30|30',
    fieldName: 'EMA30|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA30_5: new BaseField('EMA30_5', {
    label: 'Ema30|5',
    fieldName: 'EMA30|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA30_60: new BaseField('EMA30_60', {
    label: 'Ema30|60',
    fieldName: 'EMA30|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA34: new BaseField('EMA34', {
    label: 'Ema34',
    fieldName: 'EMA34',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA34_1: new BaseField('EMA34_1', {
    label: 'Ema34|1',
    fieldName: 'EMA34|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA34_120: new BaseField('EMA34_120', {
    label: 'Ema34|120',
    fieldName: 'EMA34|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA34_15: new BaseField('EMA34_15', {
    label: 'Ema34|15',
    fieldName: 'EMA34|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA34_1M: new BaseField('EMA34_1M', {
    label: 'Ema34|1m',
    fieldName: 'EMA34|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA34_1W: new BaseField('EMA34_1W', {
    label: 'Ema34|1w',
    fieldName: 'EMA34|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA34_240: new BaseField('EMA34_240', {
    label: 'Ema34|240',
    fieldName: 'EMA34|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA34_30: new BaseField('EMA34_30', {
    label: 'Ema34|30',
    fieldName: 'EMA34|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA34_5: new BaseField('EMA34_5', {
    label: 'Ema34|5',
    fieldName: 'EMA34|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA34_60: new BaseField('EMA34_60', {
    label: 'Ema34|60',
    fieldName: 'EMA34|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA3_1: new BaseField('EMA3_1', {
    label: 'Ema3|1',
    fieldName: 'EMA3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA3_120: new BaseField('EMA3_120', {
    label: 'Ema3|120',
    fieldName: 'EMA3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA3_15: new BaseField('EMA3_15', {
    label: 'Ema3|15',
    fieldName: 'EMA3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA3_1M: new BaseField('EMA3_1M', {
    label: 'Ema3|1m',
    fieldName: 'EMA3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA3_1W: new BaseField('EMA3_1W', {
    label: 'Ema3|1w',
    fieldName: 'EMA3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA3_240: new BaseField('EMA3_240', {
    label: 'Ema3|240',
    fieldName: 'EMA3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA3_30: new BaseField('EMA3_30', {
    label: 'Ema3|30',
    fieldName: 'EMA3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA3_5: new BaseField('EMA3_5', {
    label: 'Ema3|5',
    fieldName: 'EMA3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA3_60: new BaseField('EMA3_60', {
    label: 'Ema3|60',
    fieldName: 'EMA3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA40: new BaseField('EMA40', {
    label: 'Ema40',
    fieldName: 'EMA40',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA40_1: new BaseField('EMA40_1', {
    label: 'Ema40|1',
    fieldName: 'EMA40|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA40_120: new BaseField('EMA40_120', {
    label: 'Ema40|120',
    fieldName: 'EMA40|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA40_15: new BaseField('EMA40_15', {
    label: 'Ema40|15',
    fieldName: 'EMA40|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA40_1M: new BaseField('EMA40_1M', {
    label: 'Ema40|1m',
    fieldName: 'EMA40|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA40_1W: new BaseField('EMA40_1W', {
    label: 'Ema40|1w',
    fieldName: 'EMA40|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA40_240: new BaseField('EMA40_240', {
    label: 'Ema40|240',
    fieldName: 'EMA40|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA40_30: new BaseField('EMA40_30', {
    label: 'Ema40|30',
    fieldName: 'EMA40|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA40_5: new BaseField('EMA40_5', {
    label: 'Ema40|5',
    fieldName: 'EMA40|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA40_60: new BaseField('EMA40_60', {
    label: 'Ema40|60',
    fieldName: 'EMA40|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA50_1: new BaseField('EMA50_1', {
    label: 'Ema50|1',
    fieldName: 'EMA50|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA50_120: new BaseField('EMA50_120', {
    label: 'Ema50|120',
    fieldName: 'EMA50|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA50_15: new BaseField('EMA50_15', {
    label: 'Ema50|15',
    fieldName: 'EMA50|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA50_1M: new BaseField('EMA50_1M', {
    label: 'Ema50|1m',
    fieldName: 'EMA50|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA50_1W: new BaseField('EMA50_1W', {
    label: 'Ema50|1w',
    fieldName: 'EMA50|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA50_240: new BaseField('EMA50_240', {
    label: 'Ema50|240',
    fieldName: 'EMA50|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA50_30: new BaseField('EMA50_30', {
    label: 'Ema50|30',
    fieldName: 'EMA50|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA50_5: new BaseField('EMA50_5', {
    label: 'Ema50|5',
    fieldName: 'EMA50|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA50_60: new BaseField('EMA50_60', {
    label: 'Ema50|60',
    fieldName: 'EMA50|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA55: new BaseField('EMA55', {
    label: 'Ema55',
    fieldName: 'EMA55',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA55_1: new BaseField('EMA55_1', {
    label: 'Ema55|1',
    fieldName: 'EMA55|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA55_120: new BaseField('EMA55_120', {
    label: 'Ema55|120',
    fieldName: 'EMA55|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA55_15: new BaseField('EMA55_15', {
    label: 'Ema55|15',
    fieldName: 'EMA55|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA55_1M: new BaseField('EMA55_1M', {
    label: 'Ema55|1m',
    fieldName: 'EMA55|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA55_1W: new BaseField('EMA55_1W', {
    label: 'Ema55|1w',
    fieldName: 'EMA55|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA55_240: new BaseField('EMA55_240', {
    label: 'Ema55|240',
    fieldName: 'EMA55|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA55_30: new BaseField('EMA55_30', {
    label: 'Ema55|30',
    fieldName: 'EMA55|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA55_5: new BaseField('EMA55_5', {
    label: 'Ema55|5',
    fieldName: 'EMA55|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA55_60: new BaseField('EMA55_60', {
    label: 'Ema55|60',
    fieldName: 'EMA55|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA5_1: new BaseField('EMA5_1', {
    label: 'Ema5|1',
    fieldName: 'EMA5|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA5_120: new BaseField('EMA5_120', {
    label: 'Ema5|120',
    fieldName: 'EMA5|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA5_15: new BaseField('EMA5_15', {
    label: 'Ema5|15',
    fieldName: 'EMA5|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA5_1M: new BaseField('EMA5_1M', {
    label: 'Ema5|1m',
    fieldName: 'EMA5|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA5_1W: new BaseField('EMA5_1W', {
    label: 'Ema5|1w',
    fieldName: 'EMA5|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA5_240: new BaseField('EMA5_240', {
    label: 'Ema5|240',
    fieldName: 'EMA5|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA5_30: new BaseField('EMA5_30', {
    label: 'Ema5|30',
    fieldName: 'EMA5|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA5_5: new BaseField('EMA5_5', {
    label: 'Ema5|5',
    fieldName: 'EMA5|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA5_60: new BaseField('EMA5_60', {
    label: 'Ema5|60',
    fieldName: 'EMA5|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA6: new BaseField('EMA6', {
    label: 'Ema6',
    fieldName: 'EMA6',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA60: new BaseField('EMA60', {
    label: 'Ema60',
    fieldName: 'EMA60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA60_1: new BaseField('EMA60_1', {
    label: 'Ema60|1',
    fieldName: 'EMA60|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA60_120: new BaseField('EMA60_120', {
    label: 'Ema60|120',
    fieldName: 'EMA60|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA60_15: new BaseField('EMA60_15', {
    label: 'Ema60|15',
    fieldName: 'EMA60|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA60_1M: new BaseField('EMA60_1M', {
    label: 'Ema60|1m',
    fieldName: 'EMA60|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA60_1W: new BaseField('EMA60_1W', {
    label: 'Ema60|1w',
    fieldName: 'EMA60|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA60_240: new BaseField('EMA60_240', {
    label: 'Ema60|240',
    fieldName: 'EMA60|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA60_30: new BaseField('EMA60_30', {
    label: 'Ema60|30',
    fieldName: 'EMA60|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA60_5: new BaseField('EMA60_5', {
    label: 'Ema60|5',
    fieldName: 'EMA60|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA60_60: new BaseField('EMA60_60', {
    label: 'Ema60|60',
    fieldName: 'EMA60|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA6_1: new BaseField('EMA6_1', {
    label: 'Ema6|1',
    fieldName: 'EMA6|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA6_120: new BaseField('EMA6_120', {
    label: 'Ema6|120',
    fieldName: 'EMA6|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA6_15: new BaseField('EMA6_15', {
    label: 'Ema6|15',
    fieldName: 'EMA6|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA6_1M: new BaseField('EMA6_1M', {
    label: 'Ema6|1m',
    fieldName: 'EMA6|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA6_1W: new BaseField('EMA6_1W', {
    label: 'Ema6|1w',
    fieldName: 'EMA6|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA6_240: new BaseField('EMA6_240', {
    label: 'Ema6|240',
    fieldName: 'EMA6|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA6_30: new BaseField('EMA6_30', {
    label: 'Ema6|30',
    fieldName: 'EMA6|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA6_5: new BaseField('EMA6_5', {
    label: 'Ema6|5',
    fieldName: 'EMA6|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA6_60: new BaseField('EMA6_60', {
    label: 'Ema6|60',
    fieldName: 'EMA6|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA7: new BaseField('EMA7', {
    label: 'Ema7',
    fieldName: 'EMA7',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA75: new BaseField('EMA75', {
    label: 'Ema75',
    fieldName: 'EMA75',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA75_1: new BaseField('EMA75_1', {
    label: 'Ema75|1',
    fieldName: 'EMA75|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA75_120: new BaseField('EMA75_120', {
    label: 'Ema75|120',
    fieldName: 'EMA75|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA75_15: new BaseField('EMA75_15', {
    label: 'Ema75|15',
    fieldName: 'EMA75|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA75_1M: new BaseField('EMA75_1M', {
    label: 'Ema75|1m',
    fieldName: 'EMA75|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA75_1W: new BaseField('EMA75_1W', {
    label: 'Ema75|1w',
    fieldName: 'EMA75|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA75_240: new BaseField('EMA75_240', {
    label: 'Ema75|240',
    fieldName: 'EMA75|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA75_30: new BaseField('EMA75_30', {
    label: 'Ema75|30',
    fieldName: 'EMA75|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA75_5: new BaseField('EMA75_5', {
    label: 'Ema75|5',
    fieldName: 'EMA75|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA75_60: new BaseField('EMA75_60', {
    label: 'Ema75|60',
    fieldName: 'EMA75|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA7_1: new BaseField('EMA7_1', {
    label: 'Ema7|1',
    fieldName: 'EMA7|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA7_120: new BaseField('EMA7_120', {
    label: 'Ema7|120',
    fieldName: 'EMA7|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA7_15: new BaseField('EMA7_15', {
    label: 'Ema7|15',
    fieldName: 'EMA7|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA7_1M: new BaseField('EMA7_1M', {
    label: 'Ema7|1m',
    fieldName: 'EMA7|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA7_1W: new BaseField('EMA7_1W', {
    label: 'Ema7|1w',
    fieldName: 'EMA7|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA7_240: new BaseField('EMA7_240', {
    label: 'Ema7|240',
    fieldName: 'EMA7|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA7_30: new BaseField('EMA7_30', {
    label: 'Ema7|30',
    fieldName: 'EMA7|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA7_5: new BaseField('EMA7_5', {
    label: 'Ema7|5',
    fieldName: 'EMA7|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA7_60: new BaseField('EMA7_60', {
    label: 'Ema7|60',
    fieldName: 'EMA7|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA8: new BaseField('EMA8', {
    label: 'Ema8',
    fieldName: 'EMA8',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA89: new BaseField('EMA89', {
    label: 'Ema89',
    fieldName: 'EMA89',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA89_1: new BaseField('EMA89_1', {
    label: 'Ema89|1',
    fieldName: 'EMA89|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA89_120: new BaseField('EMA89_120', {
    label: 'Ema89|120',
    fieldName: 'EMA89|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA89_15: new BaseField('EMA89_15', {
    label: 'Ema89|15',
    fieldName: 'EMA89|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA89_1M: new BaseField('EMA89_1M', {
    label: 'Ema89|1m',
    fieldName: 'EMA89|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA89_1W: new BaseField('EMA89_1W', {
    label: 'Ema89|1w',
    fieldName: 'EMA89|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA89_240: new BaseField('EMA89_240', {
    label: 'Ema89|240',
    fieldName: 'EMA89|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA89_30: new BaseField('EMA89_30', {
    label: 'Ema89|30',
    fieldName: 'EMA89|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA89_5: new BaseField('EMA89_5', {
    label: 'Ema89|5',
    fieldName: 'EMA89|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA89_60: new BaseField('EMA89_60', {
    label: 'Ema89|60',
    fieldName: 'EMA89|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA8_1: new BaseField('EMA8_1', {
    label: 'Ema8|1',
    fieldName: 'EMA8|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA8_120: new BaseField('EMA8_120', {
    label: 'Ema8|120',
    fieldName: 'EMA8|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA8_15: new BaseField('EMA8_15', {
    label: 'Ema8|15',
    fieldName: 'EMA8|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA8_1M: new BaseField('EMA8_1M', {
    label: 'Ema8|1m',
    fieldName: 'EMA8|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA8_1W: new BaseField('EMA8_1W', {
    label: 'Ema8|1w',
    fieldName: 'EMA8|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA8_240: new BaseField('EMA8_240', {
    label: 'Ema8|240',
    fieldName: 'EMA8|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA8_30: new BaseField('EMA8_30', {
    label: 'Ema8|30',
    fieldName: 'EMA8|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA8_5: new BaseField('EMA8_5', {
    label: 'Ema8|5',
    fieldName: 'EMA8|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA8_60: new BaseField('EMA8_60', {
    label: 'Ema8|60',
    fieldName: 'EMA8|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA9: new BaseField('EMA9', {
    label: 'Ema9',
    fieldName: 'EMA9',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA9_1: new BaseField('EMA9_1', {
    label: 'Ema9|1',
    fieldName: 'EMA9|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA9_120: new BaseField('EMA9_120', {
    label: 'Ema9|120',
    fieldName: 'EMA9|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA9_15: new BaseField('EMA9_15', {
    label: 'Ema9|15',
    fieldName: 'EMA9|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA9_1M: new BaseField('EMA9_1M', {
    label: 'Ema9|1m',
    fieldName: 'EMA9|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA9_1W: new BaseField('EMA9_1W', {
    label: 'Ema9|1w',
    fieldName: 'EMA9|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA9_240: new BaseField('EMA9_240', {
    label: 'Ema9|240',
    fieldName: 'EMA9|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA9_30: new BaseField('EMA9_30', {
    label: 'Ema9|30',
    fieldName: 'EMA9|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA9_5: new BaseField('EMA9_5', {
    label: 'Ema9|5',
    fieldName: 'EMA9|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EMA9_60: new BaseField('EMA9_60', {
    label: 'Ema9|60',
    fieldName: 'EMA9|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_10: new BaseField('EXPONENTIAL_MOVING_AVERAGE_10', {
    label: 'Exponential Moving Average (10)',
    fieldName: 'EMA10',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_100: new BaseField('EXPONENTIAL_MOVING_AVERAGE_100', {
    label: 'Exponential Moving Average (100)',
    fieldName: 'EMA100',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_20: new BaseField('EXPONENTIAL_MOVING_AVERAGE_20', {
    label: 'Exponential Moving Average (20)',
    fieldName: 'EMA20',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_200: new BaseField('EXPONENTIAL_MOVING_AVERAGE_200', {
    label: 'Exponential Moving Average (200)',
    fieldName: 'EMA200',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_30: new BaseField('EXPONENTIAL_MOVING_AVERAGE_30', {
    label: 'Exponential Moving Average (30)',
    fieldName: 'EMA30',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_5: new BaseField('EXPONENTIAL_MOVING_AVERAGE_5', {
    label: 'Exponential Moving Average (5)',
    fieldName: 'EMA5',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  EXPONENTIAL_MOVING_AVERAGE_50: new BaseField('EXPONENTIAL_MOVING_AVERAGE_50', {
    label: 'Exponential Moving Average (50)',
    fieldName: 'EMA50',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  HULL_MOVING_AVERAGE_9: new BaseField('HULL_MOVING_AVERAGE_9', {
    label: 'Hull Moving Average (9)',
    fieldName: 'HullMA9',
    format: 'recommendation',
    interval: true,
    historical: false,
  }),

  MOVING_AVERAGES_RATING: new BaseField('MOVING_AVERAGES_RATING', {
    label: 'Moving Averages Rating',
    fieldName: 'Recommend.MA',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_1: new BaseField('PIVOT_M_DEMARK_MIDDLE_1', {
    label: 'Pivot M Demark Middle|1',
    fieldName: 'Pivot.M.Demark.Middle|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_120: new BaseField('PIVOT_M_DEMARK_MIDDLE_120', {
    label: 'Pivot M Demark Middle|120',
    fieldName: 'Pivot.M.Demark.Middle|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_15: new BaseField('PIVOT_M_DEMARK_MIDDLE_15', {
    label: 'Pivot M Demark Middle|15',
    fieldName: 'Pivot.M.Demark.Middle|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_1M: new BaseField('PIVOT_M_DEMARK_MIDDLE_1M', {
    label: 'Pivot M Demark Middle|1m',
    fieldName: 'Pivot.M.Demark.Middle|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_1W: new BaseField('PIVOT_M_DEMARK_MIDDLE_1W', {
    label: 'Pivot M Demark Middle|1w',
    fieldName: 'Pivot.M.Demark.Middle|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_240: new BaseField('PIVOT_M_DEMARK_MIDDLE_240', {
    label: 'Pivot M Demark Middle|240',
    fieldName: 'Pivot.M.Demark.Middle|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_30: new BaseField('PIVOT_M_DEMARK_MIDDLE_30', {
    label: 'Pivot M Demark Middle|30',
    fieldName: 'Pivot.M.Demark.Middle|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_5: new BaseField('PIVOT_M_DEMARK_MIDDLE_5', {
    label: 'Pivot M Demark Middle|5',
    fieldName: 'Pivot.M.Demark.Middle|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_MIDDLE_60: new BaseField('PIVOT_M_DEMARK_MIDDLE_60', {
    label: 'Pivot M Demark Middle|60',
    fieldName: 'Pivot.M.Demark.Middle|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_1: new BaseField('PIVOT_M_DEMARK_R1_1', {
    label: 'Pivot M Demark R1|1',
    fieldName: 'Pivot.M.Demark.R1|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_120: new BaseField('PIVOT_M_DEMARK_R1_120', {
    label: 'Pivot M Demark R1|120',
    fieldName: 'Pivot.M.Demark.R1|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_15: new BaseField('PIVOT_M_DEMARK_R1_15', {
    label: 'Pivot M Demark R1|15',
    fieldName: 'Pivot.M.Demark.R1|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_1M: new BaseField('PIVOT_M_DEMARK_R1_1M', {
    label: 'Pivot M Demark R1|1m',
    fieldName: 'Pivot.M.Demark.R1|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_1W: new BaseField('PIVOT_M_DEMARK_R1_1W', {
    label: 'Pivot M Demark R1|1w',
    fieldName: 'Pivot.M.Demark.R1|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_240: new BaseField('PIVOT_M_DEMARK_R1_240', {
    label: 'Pivot M Demark R1|240',
    fieldName: 'Pivot.M.Demark.R1|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_30: new BaseField('PIVOT_M_DEMARK_R1_30', {
    label: 'Pivot M Demark R1|30',
    fieldName: 'Pivot.M.Demark.R1|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_5: new BaseField('PIVOT_M_DEMARK_R1_5', {
    label: 'Pivot M Demark R1|5',
    fieldName: 'Pivot.M.Demark.R1|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_R1_60: new BaseField('PIVOT_M_DEMARK_R1_60', {
    label: 'Pivot M Demark R1|60',
    fieldName: 'Pivot.M.Demark.R1|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_1: new BaseField('PIVOT_M_DEMARK_S1_1', {
    label: 'Pivot M Demark S1|1',
    fieldName: 'Pivot.M.Demark.S1|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_120: new BaseField('PIVOT_M_DEMARK_S1_120', {
    label: 'Pivot M Demark S1|120',
    fieldName: 'Pivot.M.Demark.S1|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_15: new BaseField('PIVOT_M_DEMARK_S1_15', {
    label: 'Pivot M Demark S1|15',
    fieldName: 'Pivot.M.Demark.S1|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_1M: new BaseField('PIVOT_M_DEMARK_S1_1M', {
    label: 'Pivot M Demark S1|1m',
    fieldName: 'Pivot.M.Demark.S1|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_1W: new BaseField('PIVOT_M_DEMARK_S1_1W', {
    label: 'Pivot M Demark S1|1w',
    fieldName: 'Pivot.M.Demark.S1|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_240: new BaseField('PIVOT_M_DEMARK_S1_240', {
    label: 'Pivot M Demark S1|240',
    fieldName: 'Pivot.M.Demark.S1|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_30: new BaseField('PIVOT_M_DEMARK_S1_30', {
    label: 'Pivot M Demark S1|30',
    fieldName: 'Pivot.M.Demark.S1|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_5: new BaseField('PIVOT_M_DEMARK_S1_5', {
    label: 'Pivot M Demark S1|5',
    fieldName: 'Pivot.M.Demark.S1|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_DEMARK_S1_60: new BaseField('PIVOT_M_DEMARK_S1_60', {
    label: 'Pivot M Demark S1|60',
    fieldName: 'Pivot.M.Demark.S1|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PREMARKET_CHANGE: new BaseField('PREMARKET_CHANGE', {
    label: 'Pre-market Change',
    fieldName: 'premarket_change_abs',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PREMARKET_CHANGE_FROM_OPEN: new BaseField('PREMARKET_CHANGE_FROM_OPEN', {
    label: 'Pre-market Change from Open',
    fieldName: 'premarket_change_from_open_abs',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PREMARKET_CHANGE_FROM_OPEN_PERCENT: new BaseField('PREMARKET_CHANGE_FROM_OPEN_PERCENT', {
    label: 'Pre-market Change from Open %',
    fieldName: 'premarket_change_from_open',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PREMARKET_CHANGE_PERCENT: new BaseField('PREMARKET_CHANGE_PERCENT', {
    label: 'Pre-market Change %',
    fieldName: 'premarket_change',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PREMARKET_GAP_PERCENT: new BaseField('PREMARKET_GAP_PERCENT', {
    label: 'Pre-market Gap %',
    fieldName: 'premarket_gap',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PREMARKET_TIME: new BaseField('PREMARKET_TIME', {
    label: 'Premarket Time',
    fieldName: 'premarket_time',
    format: 'date',
    interval: false,
    historical: false,
  }),

  REC_VWMA: new BaseField('REC_VWMA', {
    label: 'Rec VWMA',
    fieldName: 'Rec.VWMA',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_VWMA_1: new BaseField('REC_VWMA_1', {
    label: 'Rec Vwma|1',
    fieldName: 'Rec.VWMA|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_VWMA_120: new BaseField('REC_VWMA_120', {
    label: 'Rec Vwma|120',
    fieldName: 'Rec.VWMA|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_VWMA_15: new BaseField('REC_VWMA_15', {
    label: 'Rec Vwma|15',
    fieldName: 'Rec.VWMA|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_VWMA_1M: new BaseField('REC_VWMA_1M', {
    label: 'Rec Vwma|1m',
    fieldName: 'Rec.VWMA|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_VWMA_1W: new BaseField('REC_VWMA_1W', {
    label: 'Rec Vwma|1w',
    fieldName: 'Rec.VWMA|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_VWMA_240: new BaseField('REC_VWMA_240', {
    label: 'Rec Vwma|240',
    fieldName: 'Rec.VWMA|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_VWMA_30: new BaseField('REC_VWMA_30', {
    label: 'Rec Vwma|30',
    fieldName: 'Rec.VWMA|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_VWMA_5: new BaseField('REC_VWMA_5', {
    label: 'Rec Vwma|5',
    fieldName: 'Rec.VWMA|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_VWMA_60: new BaseField('REC_VWMA_60', {
    label: 'Rec Vwma|60',
    fieldName: 'Rec.VWMA|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_10: new BaseField('SIMPLE_MOVING_AVERAGE_10', {
    label: 'Simple Moving Average (10)',
    fieldName: 'SMA10',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_100: new BaseField('SIMPLE_MOVING_AVERAGE_100', {
    label: 'Simple Moving Average (100)',
    fieldName: 'SMA100',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_20: new BaseField('SIMPLE_MOVING_AVERAGE_20', {
    label: 'Simple Moving Average (20)',
    fieldName: 'SMA20',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_200: new BaseField('SIMPLE_MOVING_AVERAGE_200', {
    label: 'Simple Moving Average (200)',
    fieldName: 'SMA200',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_30: new BaseField('SIMPLE_MOVING_AVERAGE_30', {
    label: 'Simple Moving Average (30)',
    fieldName: 'SMA30',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_5: new BaseField('SIMPLE_MOVING_AVERAGE_5', {
    label: 'Simple Moving Average (5)',
    fieldName: 'SMA5',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SIMPLE_MOVING_AVERAGE_50: new BaseField('SIMPLE_MOVING_AVERAGE_50', {
    label: 'Simple Moving Average (50)',
    fieldName: 'SMA50',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  SMA100_1: new BaseField('SMA100_1', {
    label: 'Sma100|1',
    fieldName: 'SMA100|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA100_120: new BaseField('SMA100_120', {
    label: 'Sma100|120',
    fieldName: 'SMA100|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA100_15: new BaseField('SMA100_15', {
    label: 'Sma100|15',
    fieldName: 'SMA100|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA100_1M: new BaseField('SMA100_1M', {
    label: 'Sma100|1m',
    fieldName: 'SMA100|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA100_1W: new BaseField('SMA100_1W', {
    label: 'Sma100|1w',
    fieldName: 'SMA100|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA100_240: new BaseField('SMA100_240', {
    label: 'Sma100|240',
    fieldName: 'SMA100|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA100_30: new BaseField('SMA100_30', {
    label: 'Sma100|30',
    fieldName: 'SMA100|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA100_5: new BaseField('SMA100_5', {
    label: 'Sma100|5',
    fieldName: 'SMA100|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA100_60: new BaseField('SMA100_60', {
    label: 'Sma100|60',
    fieldName: 'SMA100|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA10_1: new BaseField('SMA10_1', {
    label: 'Sma10|1',
    fieldName: 'SMA10|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA10_120: new BaseField('SMA10_120', {
    label: 'Sma10|120',
    fieldName: 'SMA10|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA10_15: new BaseField('SMA10_15', {
    label: 'Sma10|15',
    fieldName: 'SMA10|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA10_1M: new BaseField('SMA10_1M', {
    label: 'Sma10|1m',
    fieldName: 'SMA10|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA10_1W: new BaseField('SMA10_1W', {
    label: 'Sma10|1w',
    fieldName: 'SMA10|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA10_240: new BaseField('SMA10_240', {
    label: 'Sma10|240',
    fieldName: 'SMA10|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA10_30: new BaseField('SMA10_30', {
    label: 'Sma10|30',
    fieldName: 'SMA10|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA10_5: new BaseField('SMA10_5', {
    label: 'Sma10|5',
    fieldName: 'SMA10|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA10_60: new BaseField('SMA10_60', {
    label: 'Sma10|60',
    fieldName: 'SMA10|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA12: new BaseField('SMA12', {
    label: 'Sma12',
    fieldName: 'SMA12',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA120: new BaseField('SMA120', {
    label: 'Sma120',
    fieldName: 'SMA120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA120_1: new BaseField('SMA120_1', {
    label: 'Sma120|1',
    fieldName: 'SMA120|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA120_120: new BaseField('SMA120_120', {
    label: 'Sma120|120',
    fieldName: 'SMA120|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA120_15: new BaseField('SMA120_15', {
    label: 'Sma120|15',
    fieldName: 'SMA120|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA120_1M: new BaseField('SMA120_1M', {
    label: 'Sma120|1m',
    fieldName: 'SMA120|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA120_1W: new BaseField('SMA120_1W', {
    label: 'Sma120|1w',
    fieldName: 'SMA120|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA120_240: new BaseField('SMA120_240', {
    label: 'Sma120|240',
    fieldName: 'SMA120|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA120_30: new BaseField('SMA120_30', {
    label: 'Sma120|30',
    fieldName: 'SMA120|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA120_5: new BaseField('SMA120_5', {
    label: 'Sma120|5',
    fieldName: 'SMA120|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA120_60: new BaseField('SMA120_60', {
    label: 'Sma120|60',
    fieldName: 'SMA120|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA12_1: new BaseField('SMA12_1', {
    label: 'Sma12|1',
    fieldName: 'SMA12|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA12_120: new BaseField('SMA12_120', {
    label: 'Sma12|120',
    fieldName: 'SMA12|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA12_15: new BaseField('SMA12_15', {
    label: 'Sma12|15',
    fieldName: 'SMA12|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA12_1M: new BaseField('SMA12_1M', {
    label: 'Sma12|1m',
    fieldName: 'SMA12|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA12_1W: new BaseField('SMA12_1W', {
    label: 'Sma12|1w',
    fieldName: 'SMA12|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA12_240: new BaseField('SMA12_240', {
    label: 'Sma12|240',
    fieldName: 'SMA12|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA12_30: new BaseField('SMA12_30', {
    label: 'Sma12|30',
    fieldName: 'SMA12|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA12_5: new BaseField('SMA12_5', {
    label: 'Sma12|5',
    fieldName: 'SMA12|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA12_60: new BaseField('SMA12_60', {
    label: 'Sma12|60',
    fieldName: 'SMA12|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA13: new BaseField('SMA13', {
    label: 'Sma13',
    fieldName: 'SMA13',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA13_1: new BaseField('SMA13_1', {
    label: 'Sma13|1',
    fieldName: 'SMA13|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA13_120: new BaseField('SMA13_120', {
    label: 'Sma13|120',
    fieldName: 'SMA13|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA13_15: new BaseField('SMA13_15', {
    label: 'Sma13|15',
    fieldName: 'SMA13|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA13_1M: new BaseField('SMA13_1M', {
    label: 'Sma13|1m',
    fieldName: 'SMA13|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA13_1W: new BaseField('SMA13_1W', {
    label: 'Sma13|1w',
    fieldName: 'SMA13|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA13_240: new BaseField('SMA13_240', {
    label: 'Sma13|240',
    fieldName: 'SMA13|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA13_30: new BaseField('SMA13_30', {
    label: 'Sma13|30',
    fieldName: 'SMA13|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA13_5: new BaseField('SMA13_5', {
    label: 'Sma13|5',
    fieldName: 'SMA13|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA13_60: new BaseField('SMA13_60', {
    label: 'Sma13|60',
    fieldName: 'SMA13|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA14: new BaseField('SMA14', {
    label: 'Sma14',
    fieldName: 'SMA14',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA144: new BaseField('SMA144', {
    label: 'Sma144',
    fieldName: 'SMA144',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA144_1: new BaseField('SMA144_1', {
    label: 'Sma144|1',
    fieldName: 'SMA144|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA144_120: new BaseField('SMA144_120', {
    label: 'Sma144|120',
    fieldName: 'SMA144|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA144_15: new BaseField('SMA144_15', {
    label: 'Sma144|15',
    fieldName: 'SMA144|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA144_1M: new BaseField('SMA144_1M', {
    label: 'Sma144|1m',
    fieldName: 'SMA144|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA144_1W: new BaseField('SMA144_1W', {
    label: 'Sma144|1w',
    fieldName: 'SMA144|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA144_240: new BaseField('SMA144_240', {
    label: 'Sma144|240',
    fieldName: 'SMA144|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA144_30: new BaseField('SMA144_30', {
    label: 'Sma144|30',
    fieldName: 'SMA144|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA144_5: new BaseField('SMA144_5', {
    label: 'Sma144|5',
    fieldName: 'SMA144|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA144_60: new BaseField('SMA144_60', {
    label: 'Sma144|60',
    fieldName: 'SMA144|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA14_1: new BaseField('SMA14_1', {
    label: 'Sma14|1',
    fieldName: 'SMA14|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA14_120: new BaseField('SMA14_120', {
    label: 'Sma14|120',
    fieldName: 'SMA14|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA14_15: new BaseField('SMA14_15', {
    label: 'Sma14|15',
    fieldName: 'SMA14|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA14_1M: new BaseField('SMA14_1M', {
    label: 'Sma14|1m',
    fieldName: 'SMA14|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA14_1W: new BaseField('SMA14_1W', {
    label: 'Sma14|1w',
    fieldName: 'SMA14|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA14_240: new BaseField('SMA14_240', {
    label: 'Sma14|240',
    fieldName: 'SMA14|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA14_30: new BaseField('SMA14_30', {
    label: 'Sma14|30',
    fieldName: 'SMA14|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA14_5: new BaseField('SMA14_5', {
    label: 'Sma14|5',
    fieldName: 'SMA14|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA14_60: new BaseField('SMA14_60', {
    label: 'Sma14|60',
    fieldName: 'SMA14|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA15: new BaseField('SMA15', {
    label: 'Sma15',
    fieldName: 'SMA15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA150: new BaseField('SMA150', {
    label: 'Sma150',
    fieldName: 'SMA150',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA150_1: new BaseField('SMA150_1', {
    label: 'Sma150|1',
    fieldName: 'SMA150|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA150_120: new BaseField('SMA150_120', {
    label: 'Sma150|120',
    fieldName: 'SMA150|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA150_15: new BaseField('SMA150_15', {
    label: 'Sma150|15',
    fieldName: 'SMA150|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA150_1M: new BaseField('SMA150_1M', {
    label: 'Sma150|1m',
    fieldName: 'SMA150|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA150_1W: new BaseField('SMA150_1W', {
    label: 'Sma150|1w',
    fieldName: 'SMA150|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA150_240: new BaseField('SMA150_240', {
    label: 'Sma150|240',
    fieldName: 'SMA150|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA150_30: new BaseField('SMA150_30', {
    label: 'Sma150|30',
    fieldName: 'SMA150|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA150_5: new BaseField('SMA150_5', {
    label: 'Sma150|5',
    fieldName: 'SMA150|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA150_60: new BaseField('SMA150_60', {
    label: 'Sma150|60',
    fieldName: 'SMA150|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA15_1: new BaseField('SMA15_1', {
    label: 'Sma15|1',
    fieldName: 'SMA15|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA15_120: new BaseField('SMA15_120', {
    label: 'Sma15|120',
    fieldName: 'SMA15|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA15_15: new BaseField('SMA15_15', {
    label: 'Sma15|15',
    fieldName: 'SMA15|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA15_1M: new BaseField('SMA15_1M', {
    label: 'Sma15|1m',
    fieldName: 'SMA15|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA15_1W: new BaseField('SMA15_1W', {
    label: 'Sma15|1w',
    fieldName: 'SMA15|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA15_240: new BaseField('SMA15_240', {
    label: 'Sma15|240',
    fieldName: 'SMA15|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA15_30: new BaseField('SMA15_30', {
    label: 'Sma15|30',
    fieldName: 'SMA15|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA15_5: new BaseField('SMA15_5', {
    label: 'Sma15|5',
    fieldName: 'SMA15|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA15_60: new BaseField('SMA15_60', {
    label: 'Sma15|60',
    fieldName: 'SMA15|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA2: new BaseField('SMA2', {
    label: 'Sma2',
    fieldName: 'SMA2',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA200_1: new BaseField('SMA200_1', {
    label: 'Sma200|1',
    fieldName: 'SMA200|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA200_120: new BaseField('SMA200_120', {
    label: 'Sma200|120',
    fieldName: 'SMA200|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA200_15: new BaseField('SMA200_15', {
    label: 'Sma200|15',
    fieldName: 'SMA200|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA200_1M: new BaseField('SMA200_1M', {
    label: 'Sma200|1m',
    fieldName: 'SMA200|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA200_1W: new BaseField('SMA200_1W', {
    label: 'Sma200|1w',
    fieldName: 'SMA200|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA200_240: new BaseField('SMA200_240', {
    label: 'Sma200|240',
    fieldName: 'SMA200|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA200_30: new BaseField('SMA200_30', {
    label: 'Sma200|30',
    fieldName: 'SMA200|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA200_5: new BaseField('SMA200_5', {
    label: 'Sma200|5',
    fieldName: 'SMA200|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA200_60: new BaseField('SMA200_60', {
    label: 'Sma200|60',
    fieldName: 'SMA200|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA20_1: new BaseField('SMA20_1', {
    label: 'Sma20|1',
    fieldName: 'SMA20|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA20_120: new BaseField('SMA20_120', {
    label: 'Sma20|120',
    fieldName: 'SMA20|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA20_15: new BaseField('SMA20_15', {
    label: 'Sma20|15',
    fieldName: 'SMA20|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA20_1M: new BaseField('SMA20_1M', {
    label: 'Sma20|1m',
    fieldName: 'SMA20|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA20_1W: new BaseField('SMA20_1W', {
    label: 'Sma20|1w',
    fieldName: 'SMA20|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA20_240: new BaseField('SMA20_240', {
    label: 'Sma20|240',
    fieldName: 'SMA20|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA20_30: new BaseField('SMA20_30', {
    label: 'Sma20|30',
    fieldName: 'SMA20|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA20_5: new BaseField('SMA20_5', {
    label: 'Sma20|5',
    fieldName: 'SMA20|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA20_60: new BaseField('SMA20_60', {
    label: 'Sma20|60',
    fieldName: 'SMA20|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA21: new BaseField('SMA21', {
    label: 'Sma21',
    fieldName: 'SMA21',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA21_1: new BaseField('SMA21_1', {
    label: 'Sma21|1',
    fieldName: 'SMA21|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA21_120: new BaseField('SMA21_120', {
    label: 'Sma21|120',
    fieldName: 'SMA21|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA21_15: new BaseField('SMA21_15', {
    label: 'Sma21|15',
    fieldName: 'SMA21|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA21_1M: new BaseField('SMA21_1M', {
    label: 'Sma21|1m',
    fieldName: 'SMA21|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA21_1W: new BaseField('SMA21_1W', {
    label: 'Sma21|1w',
    fieldName: 'SMA21|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA21_240: new BaseField('SMA21_240', {
    label: 'Sma21|240',
    fieldName: 'SMA21|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA21_30: new BaseField('SMA21_30', {
    label: 'Sma21|30',
    fieldName: 'SMA21|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA21_5: new BaseField('SMA21_5', {
    label: 'Sma21|5',
    fieldName: 'SMA21|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA21_60: new BaseField('SMA21_60', {
    label: 'Sma21|60',
    fieldName: 'SMA21|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA25: new BaseField('SMA25', {
    label: 'Sma25',
    fieldName: 'SMA25',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA250: new BaseField('SMA250', {
    label: 'Sma250',
    fieldName: 'SMA250',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA250_1: new BaseField('SMA250_1', {
    label: 'Sma250|1',
    fieldName: 'SMA250|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA250_120: new BaseField('SMA250_120', {
    label: 'Sma250|120',
    fieldName: 'SMA250|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA250_15: new BaseField('SMA250_15', {
    label: 'Sma250|15',
    fieldName: 'SMA250|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA250_1M: new BaseField('SMA250_1M', {
    label: 'Sma250|1m',
    fieldName: 'SMA250|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA250_1W: new BaseField('SMA250_1W', {
    label: 'Sma250|1w',
    fieldName: 'SMA250|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA250_240: new BaseField('SMA250_240', {
    label: 'Sma250|240',
    fieldName: 'SMA250|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA250_30: new BaseField('SMA250_30', {
    label: 'Sma250|30',
    fieldName: 'SMA250|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA250_5: new BaseField('SMA250_5', {
    label: 'Sma250|5',
    fieldName: 'SMA250|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA250_60: new BaseField('SMA250_60', {
    label: 'Sma250|60',
    fieldName: 'SMA250|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA25_1: new BaseField('SMA25_1', {
    label: 'Sma25|1',
    fieldName: 'SMA25|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA25_120: new BaseField('SMA25_120', {
    label: 'Sma25|120',
    fieldName: 'SMA25|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA25_15: new BaseField('SMA25_15', {
    label: 'Sma25|15',
    fieldName: 'SMA25|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA25_1M: new BaseField('SMA25_1M', {
    label: 'Sma25|1m',
    fieldName: 'SMA25|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA25_1W: new BaseField('SMA25_1W', {
    label: 'Sma25|1w',
    fieldName: 'SMA25|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA25_240: new BaseField('SMA25_240', {
    label: 'Sma25|240',
    fieldName: 'SMA25|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA25_30: new BaseField('SMA25_30', {
    label: 'Sma25|30',
    fieldName: 'SMA25|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA25_5: new BaseField('SMA25_5', {
    label: 'Sma25|5',
    fieldName: 'SMA25|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA25_60: new BaseField('SMA25_60', {
    label: 'Sma25|60',
    fieldName: 'SMA25|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA26: new BaseField('SMA26', {
    label: 'Sma26',
    fieldName: 'SMA26',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA26_1: new BaseField('SMA26_1', {
    label: 'Sma26|1',
    fieldName: 'SMA26|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA26_120: new BaseField('SMA26_120', {
    label: 'Sma26|120',
    fieldName: 'SMA26|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA26_15: new BaseField('SMA26_15', {
    label: 'Sma26|15',
    fieldName: 'SMA26|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA26_1M: new BaseField('SMA26_1M', {
    label: 'Sma26|1m',
    fieldName: 'SMA26|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA26_1W: new BaseField('SMA26_1W', {
    label: 'Sma26|1w',
    fieldName: 'SMA26|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA26_240: new BaseField('SMA26_240', {
    label: 'Sma26|240',
    fieldName: 'SMA26|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA26_30: new BaseField('SMA26_30', {
    label: 'Sma26|30',
    fieldName: 'SMA26|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA26_5: new BaseField('SMA26_5', {
    label: 'Sma26|5',
    fieldName: 'SMA26|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA26_60: new BaseField('SMA26_60', {
    label: 'Sma26|60',
    fieldName: 'SMA26|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA2_1: new BaseField('SMA2_1', {
    label: 'Sma2|1',
    fieldName: 'SMA2|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA2_120: new BaseField('SMA2_120', {
    label: 'Sma2|120',
    fieldName: 'SMA2|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA2_15: new BaseField('SMA2_15', {
    label: 'Sma2|15',
    fieldName: 'SMA2|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA2_1M: new BaseField('SMA2_1M', {
    label: 'Sma2|1m',
    fieldName: 'SMA2|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA2_1W: new BaseField('SMA2_1W', {
    label: 'Sma2|1w',
    fieldName: 'SMA2|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA2_240: new BaseField('SMA2_240', {
    label: 'Sma2|240',
    fieldName: 'SMA2|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA2_30: new BaseField('SMA2_30', {
    label: 'Sma2|30',
    fieldName: 'SMA2|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA2_5: new BaseField('SMA2_5', {
    label: 'Sma2|5',
    fieldName: 'SMA2|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA2_60: new BaseField('SMA2_60', {
    label: 'Sma2|60',
    fieldName: 'SMA2|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA3: new BaseField('SMA3', {
    label: 'Sma3',
    fieldName: 'SMA3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA300: new BaseField('SMA300', {
    label: 'Sma300',
    fieldName: 'SMA300',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA300_1: new BaseField('SMA300_1', {
    label: 'Sma300|1',
    fieldName: 'SMA300|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA300_120: new BaseField('SMA300_120', {
    label: 'Sma300|120',
    fieldName: 'SMA300|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA300_15: new BaseField('SMA300_15', {
    label: 'Sma300|15',
    fieldName: 'SMA300|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA300_1M: new BaseField('SMA300_1M', {
    label: 'Sma300|1m',
    fieldName: 'SMA300|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA300_1W: new BaseField('SMA300_1W', {
    label: 'Sma300|1w',
    fieldName: 'SMA300|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA300_240: new BaseField('SMA300_240', {
    label: 'Sma300|240',
    fieldName: 'SMA300|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA300_30: new BaseField('SMA300_30', {
    label: 'Sma300|30',
    fieldName: 'SMA300|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA300_5: new BaseField('SMA300_5', {
    label: 'Sma300|5',
    fieldName: 'SMA300|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA300_60: new BaseField('SMA300_60', {
    label: 'Sma300|60',
    fieldName: 'SMA300|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA30_1: new BaseField('SMA30_1', {
    label: 'Sma30|1',
    fieldName: 'SMA30|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA30_120: new BaseField('SMA30_120', {
    label: 'Sma30|120',
    fieldName: 'SMA30|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA30_15: new BaseField('SMA30_15', {
    label: 'Sma30|15',
    fieldName: 'SMA30|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA30_1M: new BaseField('SMA30_1M', {
    label: 'Sma30|1m',
    fieldName: 'SMA30|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA30_1W: new BaseField('SMA30_1W', {
    label: 'Sma30|1w',
    fieldName: 'SMA30|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA30_240: new BaseField('SMA30_240', {
    label: 'Sma30|240',
    fieldName: 'SMA30|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA30_30: new BaseField('SMA30_30', {
    label: 'Sma30|30',
    fieldName: 'SMA30|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA30_5: new BaseField('SMA30_5', {
    label: 'Sma30|5',
    fieldName: 'SMA30|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA30_60: new BaseField('SMA30_60', {
    label: 'Sma30|60',
    fieldName: 'SMA30|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA34: new BaseField('SMA34', {
    label: 'Sma34',
    fieldName: 'SMA34',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA34_1: new BaseField('SMA34_1', {
    label: 'Sma34|1',
    fieldName: 'SMA34|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA34_120: new BaseField('SMA34_120', {
    label: 'Sma34|120',
    fieldName: 'SMA34|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA34_15: new BaseField('SMA34_15', {
    label: 'Sma34|15',
    fieldName: 'SMA34|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA34_1M: new BaseField('SMA34_1M', {
    label: 'Sma34|1m',
    fieldName: 'SMA34|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA34_1W: new BaseField('SMA34_1W', {
    label: 'Sma34|1w',
    fieldName: 'SMA34|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA34_240: new BaseField('SMA34_240', {
    label: 'Sma34|240',
    fieldName: 'SMA34|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA34_30: new BaseField('SMA34_30', {
    label: 'Sma34|30',
    fieldName: 'SMA34|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA34_5: new BaseField('SMA34_5', {
    label: 'Sma34|5',
    fieldName: 'SMA34|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA34_60: new BaseField('SMA34_60', {
    label: 'Sma34|60',
    fieldName: 'SMA34|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA3_1: new BaseField('SMA3_1', {
    label: 'Sma3|1',
    fieldName: 'SMA3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA3_120: new BaseField('SMA3_120', {
    label: 'Sma3|120',
    fieldName: 'SMA3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA3_15: new BaseField('SMA3_15', {
    label: 'Sma3|15',
    fieldName: 'SMA3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA3_1M: new BaseField('SMA3_1M', {
    label: 'Sma3|1m',
    fieldName: 'SMA3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA3_1W: new BaseField('SMA3_1W', {
    label: 'Sma3|1w',
    fieldName: 'SMA3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA3_240: new BaseField('SMA3_240', {
    label: 'Sma3|240',
    fieldName: 'SMA3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA3_30: new BaseField('SMA3_30', {
    label: 'Sma3|30',
    fieldName: 'SMA3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA3_5: new BaseField('SMA3_5', {
    label: 'Sma3|5',
    fieldName: 'SMA3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA3_60: new BaseField('SMA3_60', {
    label: 'Sma3|60',
    fieldName: 'SMA3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA40: new BaseField('SMA40', {
    label: 'Sma40',
    fieldName: 'SMA40',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA40_1: new BaseField('SMA40_1', {
    label: 'Sma40|1',
    fieldName: 'SMA40|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA40_120: new BaseField('SMA40_120', {
    label: 'Sma40|120',
    fieldName: 'SMA40|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA40_15: new BaseField('SMA40_15', {
    label: 'Sma40|15',
    fieldName: 'SMA40|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA40_1M: new BaseField('SMA40_1M', {
    label: 'Sma40|1m',
    fieldName: 'SMA40|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA40_1W: new BaseField('SMA40_1W', {
    label: 'Sma40|1w',
    fieldName: 'SMA40|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA40_240: new BaseField('SMA40_240', {
    label: 'Sma40|240',
    fieldName: 'SMA40|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA40_30: new BaseField('SMA40_30', {
    label: 'Sma40|30',
    fieldName: 'SMA40|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA40_5: new BaseField('SMA40_5', {
    label: 'Sma40|5',
    fieldName: 'SMA40|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA40_60: new BaseField('SMA40_60', {
    label: 'Sma40|60',
    fieldName: 'SMA40|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA50_1: new BaseField('SMA50_1', {
    label: 'Sma50|1',
    fieldName: 'SMA50|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA50_120: new BaseField('SMA50_120', {
    label: 'Sma50|120',
    fieldName: 'SMA50|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA50_15: new BaseField('SMA50_15', {
    label: 'Sma50|15',
    fieldName: 'SMA50|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA50_1M: new BaseField('SMA50_1M', {
    label: 'Sma50|1m',
    fieldName: 'SMA50|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA50_1W: new BaseField('SMA50_1W', {
    label: 'Sma50|1w',
    fieldName: 'SMA50|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA50_240: new BaseField('SMA50_240', {
    label: 'Sma50|240',
    fieldName: 'SMA50|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA50_30: new BaseField('SMA50_30', {
    label: 'Sma50|30',
    fieldName: 'SMA50|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA50_5: new BaseField('SMA50_5', {
    label: 'Sma50|5',
    fieldName: 'SMA50|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA50_60: new BaseField('SMA50_60', {
    label: 'Sma50|60',
    fieldName: 'SMA50|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA55: new BaseField('SMA55', {
    label: 'Sma55',
    fieldName: 'SMA55',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA55_1: new BaseField('SMA55_1', {
    label: 'Sma55|1',
    fieldName: 'SMA55|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA55_120: new BaseField('SMA55_120', {
    label: 'Sma55|120',
    fieldName: 'SMA55|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA55_15: new BaseField('SMA55_15', {
    label: 'Sma55|15',
    fieldName: 'SMA55|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA55_1M: new BaseField('SMA55_1M', {
    label: 'Sma55|1m',
    fieldName: 'SMA55|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA55_1W: new BaseField('SMA55_1W', {
    label: 'Sma55|1w',
    fieldName: 'SMA55|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA55_240: new BaseField('SMA55_240', {
    label: 'Sma55|240',
    fieldName: 'SMA55|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA55_30: new BaseField('SMA55_30', {
    label: 'Sma55|30',
    fieldName: 'SMA55|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA55_5: new BaseField('SMA55_5', {
    label: 'Sma55|5',
    fieldName: 'SMA55|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA55_60: new BaseField('SMA55_60', {
    label: 'Sma55|60',
    fieldName: 'SMA55|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA5_1: new BaseField('SMA5_1', {
    label: 'Sma5|1',
    fieldName: 'SMA5|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA5_120: new BaseField('SMA5_120', {
    label: 'Sma5|120',
    fieldName: 'SMA5|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA5_15: new BaseField('SMA5_15', {
    label: 'Sma5|15',
    fieldName: 'SMA5|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA5_1M: new BaseField('SMA5_1M', {
    label: 'Sma5|1m',
    fieldName: 'SMA5|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA5_1W: new BaseField('SMA5_1W', {
    label: 'Sma5|1w',
    fieldName: 'SMA5|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA5_240: new BaseField('SMA5_240', {
    label: 'Sma5|240',
    fieldName: 'SMA5|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA5_30: new BaseField('SMA5_30', {
    label: 'Sma5|30',
    fieldName: 'SMA5|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA5_5: new BaseField('SMA5_5', {
    label: 'Sma5|5',
    fieldName: 'SMA5|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA5_60: new BaseField('SMA5_60', {
    label: 'Sma5|60',
    fieldName: 'SMA5|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA6: new BaseField('SMA6', {
    label: 'Sma6',
    fieldName: 'SMA6',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA60: new BaseField('SMA60', {
    label: 'Sma60',
    fieldName: 'SMA60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA60_1: new BaseField('SMA60_1', {
    label: 'Sma60|1',
    fieldName: 'SMA60|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA60_120: new BaseField('SMA60_120', {
    label: 'Sma60|120',
    fieldName: 'SMA60|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA60_15: new BaseField('SMA60_15', {
    label: 'Sma60|15',
    fieldName: 'SMA60|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA60_1M: new BaseField('SMA60_1M', {
    label: 'Sma60|1m',
    fieldName: 'SMA60|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA60_1W: new BaseField('SMA60_1W', {
    label: 'Sma60|1w',
    fieldName: 'SMA60|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA60_240: new BaseField('SMA60_240', {
    label: 'Sma60|240',
    fieldName: 'SMA60|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA60_30: new BaseField('SMA60_30', {
    label: 'Sma60|30',
    fieldName: 'SMA60|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA60_5: new BaseField('SMA60_5', {
    label: 'Sma60|5',
    fieldName: 'SMA60|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA60_60: new BaseField('SMA60_60', {
    label: 'Sma60|60',
    fieldName: 'SMA60|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA6_1: new BaseField('SMA6_1', {
    label: 'Sma6|1',
    fieldName: 'SMA6|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA6_120: new BaseField('SMA6_120', {
    label: 'Sma6|120',
    fieldName: 'SMA6|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA6_15: new BaseField('SMA6_15', {
    label: 'Sma6|15',
    fieldName: 'SMA6|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA6_1M: new BaseField('SMA6_1M', {
    label: 'Sma6|1m',
    fieldName: 'SMA6|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA6_1W: new BaseField('SMA6_1W', {
    label: 'Sma6|1w',
    fieldName: 'SMA6|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA6_240: new BaseField('SMA6_240', {
    label: 'Sma6|240',
    fieldName: 'SMA6|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA6_30: new BaseField('SMA6_30', {
    label: 'Sma6|30',
    fieldName: 'SMA6|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA6_5: new BaseField('SMA6_5', {
    label: 'Sma6|5',
    fieldName: 'SMA6|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA6_60: new BaseField('SMA6_60', {
    label: 'Sma6|60',
    fieldName: 'SMA6|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA7: new BaseField('SMA7', {
    label: 'Sma7',
    fieldName: 'SMA7',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA75: new BaseField('SMA75', {
    label: 'Sma75',
    fieldName: 'SMA75',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA75_1: new BaseField('SMA75_1', {
    label: 'Sma75|1',
    fieldName: 'SMA75|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA75_120: new BaseField('SMA75_120', {
    label: 'Sma75|120',
    fieldName: 'SMA75|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA75_15: new BaseField('SMA75_15', {
    label: 'Sma75|15',
    fieldName: 'SMA75|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA75_1M: new BaseField('SMA75_1M', {
    label: 'Sma75|1m',
    fieldName: 'SMA75|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA75_1W: new BaseField('SMA75_1W', {
    label: 'Sma75|1w',
    fieldName: 'SMA75|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA75_240: new BaseField('SMA75_240', {
    label: 'Sma75|240',
    fieldName: 'SMA75|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA75_30: new BaseField('SMA75_30', {
    label: 'Sma75|30',
    fieldName: 'SMA75|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA75_5: new BaseField('SMA75_5', {
    label: 'Sma75|5',
    fieldName: 'SMA75|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA75_60: new BaseField('SMA75_60', {
    label: 'Sma75|60',
    fieldName: 'SMA75|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA7_1: new BaseField('SMA7_1', {
    label: 'Sma7|1',
    fieldName: 'SMA7|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA7_120: new BaseField('SMA7_120', {
    label: 'Sma7|120',
    fieldName: 'SMA7|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA7_15: new BaseField('SMA7_15', {
    label: 'Sma7|15',
    fieldName: 'SMA7|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA7_1M: new BaseField('SMA7_1M', {
    label: 'Sma7|1m',
    fieldName: 'SMA7|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA7_1W: new BaseField('SMA7_1W', {
    label: 'Sma7|1w',
    fieldName: 'SMA7|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA7_240: new BaseField('SMA7_240', {
    label: 'Sma7|240',
    fieldName: 'SMA7|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA7_30: new BaseField('SMA7_30', {
    label: 'Sma7|30',
    fieldName: 'SMA7|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA7_5: new BaseField('SMA7_5', {
    label: 'Sma7|5',
    fieldName: 'SMA7|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA7_60: new BaseField('SMA7_60', {
    label: 'Sma7|60',
    fieldName: 'SMA7|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA8: new BaseField('SMA8', {
    label: 'Sma8',
    fieldName: 'SMA8',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA89: new BaseField('SMA89', {
    label: 'Sma89',
    fieldName: 'SMA89',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA89_1: new BaseField('SMA89_1', {
    label: 'Sma89|1',
    fieldName: 'SMA89|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA89_120: new BaseField('SMA89_120', {
    label: 'Sma89|120',
    fieldName: 'SMA89|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA89_15: new BaseField('SMA89_15', {
    label: 'Sma89|15',
    fieldName: 'SMA89|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA89_1M: new BaseField('SMA89_1M', {
    label: 'Sma89|1m',
    fieldName: 'SMA89|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA89_1W: new BaseField('SMA89_1W', {
    label: 'Sma89|1w',
    fieldName: 'SMA89|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA89_240: new BaseField('SMA89_240', {
    label: 'Sma89|240',
    fieldName: 'SMA89|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA89_30: new BaseField('SMA89_30', {
    label: 'Sma89|30',
    fieldName: 'SMA89|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA89_5: new BaseField('SMA89_5', {
    label: 'Sma89|5',
    fieldName: 'SMA89|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA89_60: new BaseField('SMA89_60', {
    label: 'Sma89|60',
    fieldName: 'SMA89|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA8_1: new BaseField('SMA8_1', {
    label: 'Sma8|1',
    fieldName: 'SMA8|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA8_120: new BaseField('SMA8_120', {
    label: 'Sma8|120',
    fieldName: 'SMA8|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA8_15: new BaseField('SMA8_15', {
    label: 'Sma8|15',
    fieldName: 'SMA8|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA8_1M: new BaseField('SMA8_1M', {
    label: 'Sma8|1m',
    fieldName: 'SMA8|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA8_1W: new BaseField('SMA8_1W', {
    label: 'Sma8|1w',
    fieldName: 'SMA8|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA8_240: new BaseField('SMA8_240', {
    label: 'Sma8|240',
    fieldName: 'SMA8|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA8_30: new BaseField('SMA8_30', {
    label: 'Sma8|30',
    fieldName: 'SMA8|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA8_5: new BaseField('SMA8_5', {
    label: 'Sma8|5',
    fieldName: 'SMA8|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA8_60: new BaseField('SMA8_60', {
    label: 'Sma8|60',
    fieldName: 'SMA8|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA9: new BaseField('SMA9', {
    label: 'Sma9',
    fieldName: 'SMA9',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA9_1: new BaseField('SMA9_1', {
    label: 'Sma9|1',
    fieldName: 'SMA9|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA9_120: new BaseField('SMA9_120', {
    label: 'Sma9|120',
    fieldName: 'SMA9|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA9_15: new BaseField('SMA9_15', {
    label: 'Sma9|15',
    fieldName: 'SMA9|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA9_1M: new BaseField('SMA9_1M', {
    label: 'Sma9|1m',
    fieldName: 'SMA9|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA9_1W: new BaseField('SMA9_1W', {
    label: 'Sma9|1w',
    fieldName: 'SMA9|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA9_240: new BaseField('SMA9_240', {
    label: 'Sma9|240',
    fieldName: 'SMA9|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA9_30: new BaseField('SMA9_30', {
    label: 'Sma9|30',
    fieldName: 'SMA9|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA9_5: new BaseField('SMA9_5', {
    label: 'Sma9|5',
    fieldName: 'SMA9|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  SMA9_60: new BaseField('SMA9_60', {
    label: 'Sma9|60',
    fieldName: 'SMA9|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWMA_1: new BaseField('VWMA_1', {
    label: 'Vwma|1',
    fieldName: 'VWMA|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWMA_120: new BaseField('VWMA_120', {
    label: 'Vwma|120',
    fieldName: 'VWMA|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWMA_15: new BaseField('VWMA_15', {
    label: 'Vwma|15',
    fieldName: 'VWMA|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWMA_1M: new BaseField('VWMA_1M', {
    label: 'Vwma|1m',
    fieldName: 'VWMA|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWMA_1W: new BaseField('VWMA_1W', {
    label: 'Vwma|1w',
    fieldName: 'VWMA|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWMA_240: new BaseField('VWMA_240', {
    label: 'Vwma|240',
    fieldName: 'VWMA|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWMA_30: new BaseField('VWMA_30', {
    label: 'Vwma|30',
    fieldName: 'VWMA|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWMA_5: new BaseField('VWMA_5', {
    label: 'Vwma|5',
    fieldName: 'VWMA|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VWMA_60: new BaseField('VWMA_60', {
    label: 'Vwma|60',
    fieldName: 'VWMA|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  // === Technical Indicators - RSI (248 fields) ===

  ICHIMOKU_CONVERSION_LINE_9_26_52_26: new BaseField('ICHIMOKU_CONVERSION_LINE_9_26_52_26', {
    label: 'Ichimoku Conversion Line (9, 26, 52, 26)',
    fieldName: 'Ichimoku.CLine',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_STOCH_RSI: new BaseField('REC_STOCH_RSI', {
    label: 'Rec Stoch RSI',
    fieldName: 'Rec.Stoch.RSI',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_STOCH_RSI_1: new BaseField('REC_STOCH_RSI_1', {
    label: 'Rec Stoch Rsi|1',
    fieldName: 'Rec.Stoch.RSI|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_STOCH_RSI_120: new BaseField('REC_STOCH_RSI_120', {
    label: 'Rec Stoch Rsi|120',
    fieldName: 'Rec.Stoch.RSI|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_STOCH_RSI_15: new BaseField('REC_STOCH_RSI_15', {
    label: 'Rec Stoch Rsi|15',
    fieldName: 'Rec.Stoch.RSI|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_STOCH_RSI_1M: new BaseField('REC_STOCH_RSI_1M', {
    label: 'Rec Stoch Rsi|1m',
    fieldName: 'Rec.Stoch.RSI|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_STOCH_RSI_1W: new BaseField('REC_STOCH_RSI_1W', {
    label: 'Rec Stoch Rsi|1w',
    fieldName: 'Rec.Stoch.RSI|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_STOCH_RSI_240: new BaseField('REC_STOCH_RSI_240', {
    label: 'Rec Stoch Rsi|240',
    fieldName: 'Rec.Stoch.RSI|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_STOCH_RSI_30: new BaseField('REC_STOCH_RSI_30', {
    label: 'Rec Stoch Rsi|30',
    fieldName: 'Rec.Stoch.RSI|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_STOCH_RSI_5: new BaseField('REC_STOCH_RSI_5', {
    label: 'Rec Stoch Rsi|5',
    fieldName: 'Rec.Stoch.RSI|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_STOCH_RSI_60: new BaseField('REC_STOCH_RSI_60', {
    label: 'Rec Stoch Rsi|60',
    fieldName: 'Rec.Stoch.RSI|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10: new BaseField('RSI10', {
    label: 'Rsi10',
    fieldName: 'RSI10',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_1: new BaseField('RSI10_1', {
    label: 'Rsi10|1',
    fieldName: 'RSI10|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_120: new BaseField('RSI10_120', {
    label: 'Rsi10|120',
    fieldName: 'RSI10|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_15: new BaseField('RSI10_15', {
    label: 'Rsi10|15',
    fieldName: 'RSI10|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_1M: new BaseField('RSI10_1M', {
    label: 'Rsi10|1m',
    fieldName: 'RSI10|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_1W: new BaseField('RSI10_1W', {
    label: 'Rsi10|1w',
    fieldName: 'RSI10|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_1_1: new BaseField('RSI10_1_1', {
    label: 'Rsi10[1]|1',
    fieldName: 'RSI10[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_1_120: new BaseField('RSI10_1_120', {
    label: 'Rsi10[1]|120',
    fieldName: 'RSI10[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_1_15: new BaseField('RSI10_1_15', {
    label: 'Rsi10[1]|15',
    fieldName: 'RSI10[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_1_1M: new BaseField('RSI10_1_1M', {
    label: 'Rsi10[1]|1m',
    fieldName: 'RSI10[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_1_1W: new BaseField('RSI10_1_1W', {
    label: 'Rsi10[1]|1w',
    fieldName: 'RSI10[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_1_2: new BaseField('RSI10_1_2', {
    label: 'Rsi10[1]',
    fieldName: 'RSI10[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_1_240: new BaseField('RSI10_1_240', {
    label: 'Rsi10[1]|240',
    fieldName: 'RSI10[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_1_30: new BaseField('RSI10_1_30', {
    label: 'Rsi10[1]|30',
    fieldName: 'RSI10[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_1_5: new BaseField('RSI10_1_5', {
    label: 'Rsi10[1]|5',
    fieldName: 'RSI10[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_1_60: new BaseField('RSI10_1_60', {
    label: 'Rsi10[1]|60',
    fieldName: 'RSI10[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_240: new BaseField('RSI10_240', {
    label: 'Rsi10|240',
    fieldName: 'RSI10|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_30: new BaseField('RSI10_30', {
    label: 'Rsi10|30',
    fieldName: 'RSI10|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_5: new BaseField('RSI10_5', {
    label: 'Rsi10|5',
    fieldName: 'RSI10|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI10_60: new BaseField('RSI10_60', {
    label: 'Rsi10|60',
    fieldName: 'RSI10|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2: new BaseField('RSI2', {
    label: 'Rsi2',
    fieldName: 'RSI2',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20: new BaseField('RSI20', {
    label: 'Rsi20',
    fieldName: 'RSI20',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_1: new BaseField('RSI20_1', {
    label: 'Rsi20|1',
    fieldName: 'RSI20|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_120: new BaseField('RSI20_120', {
    label: 'Rsi20|120',
    fieldName: 'RSI20|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_15: new BaseField('RSI20_15', {
    label: 'Rsi20|15',
    fieldName: 'RSI20|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_1M: new BaseField('RSI20_1M', {
    label: 'Rsi20|1m',
    fieldName: 'RSI20|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_1W: new BaseField('RSI20_1W', {
    label: 'Rsi20|1w',
    fieldName: 'RSI20|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_1_1: new BaseField('RSI20_1_1', {
    label: 'Rsi20[1]|1',
    fieldName: 'RSI20[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_1_120: new BaseField('RSI20_1_120', {
    label: 'Rsi20[1]|120',
    fieldName: 'RSI20[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_1_15: new BaseField('RSI20_1_15', {
    label: 'Rsi20[1]|15',
    fieldName: 'RSI20[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_1_1M: new BaseField('RSI20_1_1M', {
    label: 'Rsi20[1]|1m',
    fieldName: 'RSI20[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_1_1W: new BaseField('RSI20_1_1W', {
    label: 'Rsi20[1]|1w',
    fieldName: 'RSI20[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_1_2: new BaseField('RSI20_1_2', {
    label: 'Rsi20[1]',
    fieldName: 'RSI20[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_1_240: new BaseField('RSI20_1_240', {
    label: 'Rsi20[1]|240',
    fieldName: 'RSI20[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_1_30: new BaseField('RSI20_1_30', {
    label: 'Rsi20[1]|30',
    fieldName: 'RSI20[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_1_5: new BaseField('RSI20_1_5', {
    label: 'Rsi20[1]|5',
    fieldName: 'RSI20[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_1_60: new BaseField('RSI20_1_60', {
    label: 'Rsi20[1]|60',
    fieldName: 'RSI20[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_240: new BaseField('RSI20_240', {
    label: 'Rsi20|240',
    fieldName: 'RSI20|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_30: new BaseField('RSI20_30', {
    label: 'Rsi20|30',
    fieldName: 'RSI20|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_5: new BaseField('RSI20_5', {
    label: 'Rsi20|5',
    fieldName: 'RSI20|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI20_60: new BaseField('RSI20_60', {
    label: 'Rsi20|60',
    fieldName: 'RSI20|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21: new BaseField('RSI21', {
    label: 'Rsi21',
    fieldName: 'RSI21',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_1: new BaseField('RSI21_1', {
    label: 'Rsi21|1',
    fieldName: 'RSI21|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_120: new BaseField('RSI21_120', {
    label: 'Rsi21|120',
    fieldName: 'RSI21|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_15: new BaseField('RSI21_15', {
    label: 'Rsi21|15',
    fieldName: 'RSI21|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_1M: new BaseField('RSI21_1M', {
    label: 'Rsi21|1m',
    fieldName: 'RSI21|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_1W: new BaseField('RSI21_1W', {
    label: 'Rsi21|1w',
    fieldName: 'RSI21|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_1_1: new BaseField('RSI21_1_1', {
    label: 'Rsi21[1]|1',
    fieldName: 'RSI21[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_1_120: new BaseField('RSI21_1_120', {
    label: 'Rsi21[1]|120',
    fieldName: 'RSI21[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_1_15: new BaseField('RSI21_1_15', {
    label: 'Rsi21[1]|15',
    fieldName: 'RSI21[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_1_1M: new BaseField('RSI21_1_1M', {
    label: 'Rsi21[1]|1m',
    fieldName: 'RSI21[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_1_1W: new BaseField('RSI21_1_1W', {
    label: 'Rsi21[1]|1w',
    fieldName: 'RSI21[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_1_2: new BaseField('RSI21_1_2', {
    label: 'Rsi21[1]',
    fieldName: 'RSI21[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_1_240: new BaseField('RSI21_1_240', {
    label: 'Rsi21[1]|240',
    fieldName: 'RSI21[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_1_30: new BaseField('RSI21_1_30', {
    label: 'Rsi21[1]|30',
    fieldName: 'RSI21[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_1_5: new BaseField('RSI21_1_5', {
    label: 'Rsi21[1]|5',
    fieldName: 'RSI21[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_1_60: new BaseField('RSI21_1_60', {
    label: 'Rsi21[1]|60',
    fieldName: 'RSI21[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_240: new BaseField('RSI21_240', {
    label: 'Rsi21|240',
    fieldName: 'RSI21|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_30: new BaseField('RSI21_30', {
    label: 'Rsi21|30',
    fieldName: 'RSI21|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_5: new BaseField('RSI21_5', {
    label: 'Rsi21|5',
    fieldName: 'RSI21|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI21_60: new BaseField('RSI21_60', {
    label: 'Rsi21|60',
    fieldName: 'RSI21|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_1: new BaseField('RSI2_1', {
    label: 'Rsi2[1]',
    fieldName: 'RSI2[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_120: new BaseField('RSI2_120', {
    label: 'Rsi2|120',
    fieldName: 'RSI2|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_15: new BaseField('RSI2_15', {
    label: 'Rsi2|15',
    fieldName: 'RSI2|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_1M: new BaseField('RSI2_1M', {
    label: 'Rsi2|1m',
    fieldName: 'RSI2|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_1W: new BaseField('RSI2_1W', {
    label: 'Rsi2|1w',
    fieldName: 'RSI2|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_1_1: new BaseField('RSI2_1_1', {
    label: 'Rsi2[1]|1',
    fieldName: 'RSI2[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_1_120: new BaseField('RSI2_1_120', {
    label: 'Rsi2[1]|120',
    fieldName: 'RSI2[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_1_15: new BaseField('RSI2_1_15', {
    label: 'Rsi2[1]|15',
    fieldName: 'RSI2[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_1_1M: new BaseField('RSI2_1_1M', {
    label: 'Rsi2[1]|1m',
    fieldName: 'RSI2[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_1_1W: new BaseField('RSI2_1_1W', {
    label: 'Rsi2[1]|1w',
    fieldName: 'RSI2[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_1_2: new BaseField('RSI2_1_2', {
    label: 'Rsi2|1',
    fieldName: 'RSI2|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_1_240: new BaseField('RSI2_1_240', {
    label: 'Rsi2[1]|240',
    fieldName: 'RSI2[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_1_30: new BaseField('RSI2_1_30', {
    label: 'Rsi2[1]|30',
    fieldName: 'RSI2[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_1_5: new BaseField('RSI2_1_5', {
    label: 'Rsi2[1]|5',
    fieldName: 'RSI2[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_1_60: new BaseField('RSI2_1_60', {
    label: 'Rsi2[1]|60',
    fieldName: 'RSI2[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_240: new BaseField('RSI2_240', {
    label: 'Rsi2|240',
    fieldName: 'RSI2|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_30: new BaseField('RSI2_30', {
    label: 'Rsi2|30',
    fieldName: 'RSI2|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_5: new BaseField('RSI2_5', {
    label: 'Rsi2|5',
    fieldName: 'RSI2|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI2_60: new BaseField('RSI2_60', {
    label: 'Rsi2|60',
    fieldName: 'RSI2|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3: new BaseField('RSI3', {
    label: 'Rsi3',
    fieldName: 'RSI3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30: new BaseField('RSI30', {
    label: 'Rsi30',
    fieldName: 'RSI30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_1: new BaseField('RSI30_1', {
    label: 'Rsi30|1',
    fieldName: 'RSI30|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_120: new BaseField('RSI30_120', {
    label: 'Rsi30|120',
    fieldName: 'RSI30|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_15: new BaseField('RSI30_15', {
    label: 'Rsi30|15',
    fieldName: 'RSI30|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_1M: new BaseField('RSI30_1M', {
    label: 'Rsi30|1m',
    fieldName: 'RSI30|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_1W: new BaseField('RSI30_1W', {
    label: 'Rsi30|1w',
    fieldName: 'RSI30|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_1_1: new BaseField('RSI30_1_1', {
    label: 'Rsi30[1]|1',
    fieldName: 'RSI30[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_1_120: new BaseField('RSI30_1_120', {
    label: 'Rsi30[1]|120',
    fieldName: 'RSI30[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_1_15: new BaseField('RSI30_1_15', {
    label: 'Rsi30[1]|15',
    fieldName: 'RSI30[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_1_1M: new BaseField('RSI30_1_1M', {
    label: 'Rsi30[1]|1m',
    fieldName: 'RSI30[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_1_1W: new BaseField('RSI30_1_1W', {
    label: 'Rsi30[1]|1w',
    fieldName: 'RSI30[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_1_2: new BaseField('RSI30_1_2', {
    label: 'Rsi30[1]',
    fieldName: 'RSI30[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_1_240: new BaseField('RSI30_1_240', {
    label: 'Rsi30[1]|240',
    fieldName: 'RSI30[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_1_30: new BaseField('RSI30_1_30', {
    label: 'Rsi30[1]|30',
    fieldName: 'RSI30[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_1_5: new BaseField('RSI30_1_5', {
    label: 'Rsi30[1]|5',
    fieldName: 'RSI30[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_1_60: new BaseField('RSI30_1_60', {
    label: 'Rsi30[1]|60',
    fieldName: 'RSI30[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_240: new BaseField('RSI30_240', {
    label: 'Rsi30|240',
    fieldName: 'RSI30|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_30: new BaseField('RSI30_30', {
    label: 'Rsi30|30',
    fieldName: 'RSI30|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_5: new BaseField('RSI30_5', {
    label: 'Rsi30|5',
    fieldName: 'RSI30|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI30_60: new BaseField('RSI30_60', {
    label: 'Rsi30|60',
    fieldName: 'RSI30|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_1: new BaseField('RSI3_1', {
    label: 'Rsi3|1',
    fieldName: 'RSI3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_120: new BaseField('RSI3_120', {
    label: 'Rsi3|120',
    fieldName: 'RSI3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_15: new BaseField('RSI3_15', {
    label: 'Rsi3|15',
    fieldName: 'RSI3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_1M: new BaseField('RSI3_1M', {
    label: 'Rsi3|1m',
    fieldName: 'RSI3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_1W: new BaseField('RSI3_1W', {
    label: 'Rsi3|1w',
    fieldName: 'RSI3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_1_1: new BaseField('RSI3_1_1', {
    label: 'Rsi3[1]|1',
    fieldName: 'RSI3[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_1_120: new BaseField('RSI3_1_120', {
    label: 'Rsi3[1]|120',
    fieldName: 'RSI3[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_1_15: new BaseField('RSI3_1_15', {
    label: 'Rsi3[1]|15',
    fieldName: 'RSI3[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_1_1M: new BaseField('RSI3_1_1M', {
    label: 'Rsi3[1]|1m',
    fieldName: 'RSI3[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_1_1W: new BaseField('RSI3_1_1W', {
    label: 'Rsi3[1]|1w',
    fieldName: 'RSI3[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_1_2: new BaseField('RSI3_1_2', {
    label: 'Rsi3[1]',
    fieldName: 'RSI3[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_1_240: new BaseField('RSI3_1_240', {
    label: 'Rsi3[1]|240',
    fieldName: 'RSI3[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_1_30: new BaseField('RSI3_1_30', {
    label: 'Rsi3[1]|30',
    fieldName: 'RSI3[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_1_5: new BaseField('RSI3_1_5', {
    label: 'Rsi3[1]|5',
    fieldName: 'RSI3[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_1_60: new BaseField('RSI3_1_60', {
    label: 'Rsi3[1]|60',
    fieldName: 'RSI3[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_240: new BaseField('RSI3_240', {
    label: 'Rsi3|240',
    fieldName: 'RSI3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_30: new BaseField('RSI3_30', {
    label: 'Rsi3|30',
    fieldName: 'RSI3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_5: new BaseField('RSI3_5', {
    label: 'Rsi3|5',
    fieldName: 'RSI3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI3_60: new BaseField('RSI3_60', {
    label: 'Rsi3|60',
    fieldName: 'RSI3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4: new BaseField('RSI4', {
    label: 'Rsi4',
    fieldName: 'RSI4',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_1: new BaseField('RSI4_1', {
    label: 'Rsi4|1',
    fieldName: 'RSI4|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_120: new BaseField('RSI4_120', {
    label: 'Rsi4|120',
    fieldName: 'RSI4|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_15: new BaseField('RSI4_15', {
    label: 'Rsi4|15',
    fieldName: 'RSI4|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_1M: new BaseField('RSI4_1M', {
    label: 'Rsi4|1m',
    fieldName: 'RSI4|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_1W: new BaseField('RSI4_1W', {
    label: 'Rsi4|1w',
    fieldName: 'RSI4|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_1_1: new BaseField('RSI4_1_1', {
    label: 'Rsi4[1]|1',
    fieldName: 'RSI4[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_1_120: new BaseField('RSI4_1_120', {
    label: 'Rsi4[1]|120',
    fieldName: 'RSI4[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_1_15: new BaseField('RSI4_1_15', {
    label: 'Rsi4[1]|15',
    fieldName: 'RSI4[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_1_1M: new BaseField('RSI4_1_1M', {
    label: 'Rsi4[1]|1m',
    fieldName: 'RSI4[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_1_1W: new BaseField('RSI4_1_1W', {
    label: 'Rsi4[1]|1w',
    fieldName: 'RSI4[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_1_2: new BaseField('RSI4_1_2', {
    label: 'Rsi4[1]',
    fieldName: 'RSI4[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_1_240: new BaseField('RSI4_1_240', {
    label: 'Rsi4[1]|240',
    fieldName: 'RSI4[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_1_30: new BaseField('RSI4_1_30', {
    label: 'Rsi4[1]|30',
    fieldName: 'RSI4[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_1_5: new BaseField('RSI4_1_5', {
    label: 'Rsi4[1]|5',
    fieldName: 'RSI4[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_1_60: new BaseField('RSI4_1_60', {
    label: 'Rsi4[1]|60',
    fieldName: 'RSI4[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_240: new BaseField('RSI4_240', {
    label: 'Rsi4|240',
    fieldName: 'RSI4|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_30: new BaseField('RSI4_30', {
    label: 'Rsi4|30',
    fieldName: 'RSI4|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_5: new BaseField('RSI4_5', {
    label: 'Rsi4|5',
    fieldName: 'RSI4|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI4_60: new BaseField('RSI4_60', {
    label: 'Rsi4|60',
    fieldName: 'RSI4|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5: new BaseField('RSI5', {
    label: 'Rsi5',
    fieldName: 'RSI5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_1: new BaseField('RSI5_1', {
    label: 'Rsi5|1',
    fieldName: 'RSI5|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_120: new BaseField('RSI5_120', {
    label: 'Rsi5|120',
    fieldName: 'RSI5|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_15: new BaseField('RSI5_15', {
    label: 'Rsi5|15',
    fieldName: 'RSI5|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_1M: new BaseField('RSI5_1M', {
    label: 'Rsi5|1m',
    fieldName: 'RSI5|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_1W: new BaseField('RSI5_1W', {
    label: 'Rsi5|1w',
    fieldName: 'RSI5|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_1_1: new BaseField('RSI5_1_1', {
    label: 'Rsi5[1]|1',
    fieldName: 'RSI5[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_1_120: new BaseField('RSI5_1_120', {
    label: 'Rsi5[1]|120',
    fieldName: 'RSI5[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_1_15: new BaseField('RSI5_1_15', {
    label: 'Rsi5[1]|15',
    fieldName: 'RSI5[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_1_1M: new BaseField('RSI5_1_1M', {
    label: 'Rsi5[1]|1m',
    fieldName: 'RSI5[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_1_1W: new BaseField('RSI5_1_1W', {
    label: 'Rsi5[1]|1w',
    fieldName: 'RSI5[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_1_2: new BaseField('RSI5_1_2', {
    label: 'Rsi5[1]',
    fieldName: 'RSI5[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_1_240: new BaseField('RSI5_1_240', {
    label: 'Rsi5[1]|240',
    fieldName: 'RSI5[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_1_30: new BaseField('RSI5_1_30', {
    label: 'Rsi5[1]|30',
    fieldName: 'RSI5[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_1_5: new BaseField('RSI5_1_5', {
    label: 'Rsi5[1]|5',
    fieldName: 'RSI5[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_1_60: new BaseField('RSI5_1_60', {
    label: 'Rsi5[1]|60',
    fieldName: 'RSI5[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_240: new BaseField('RSI5_240', {
    label: 'Rsi5|240',
    fieldName: 'RSI5|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_30: new BaseField('RSI5_30', {
    label: 'Rsi5|30',
    fieldName: 'RSI5|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_5: new BaseField('RSI5_5', {
    label: 'Rsi5|5',
    fieldName: 'RSI5|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI5_60: new BaseField('RSI5_60', {
    label: 'Rsi5|60',
    fieldName: 'RSI5|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_1: new BaseField('RSI7_1', {
    label: 'Rsi7|1',
    fieldName: 'RSI7|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_120: new BaseField('RSI7_120', {
    label: 'Rsi7|120',
    fieldName: 'RSI7|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_15: new BaseField('RSI7_15', {
    label: 'Rsi7|15',
    fieldName: 'RSI7|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_1M: new BaseField('RSI7_1M', {
    label: 'Rsi7|1m',
    fieldName: 'RSI7|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_1W: new BaseField('RSI7_1W', {
    label: 'Rsi7|1w',
    fieldName: 'RSI7|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_1_1: new BaseField('RSI7_1_1', {
    label: 'Rsi7[1]|1',
    fieldName: 'RSI7[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_1_120: new BaseField('RSI7_1_120', {
    label: 'Rsi7[1]|120',
    fieldName: 'RSI7[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_1_15: new BaseField('RSI7_1_15', {
    label: 'Rsi7[1]|15',
    fieldName: 'RSI7[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_1_1M: new BaseField('RSI7_1_1M', {
    label: 'Rsi7[1]|1m',
    fieldName: 'RSI7[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_1_1W: new BaseField('RSI7_1_1W', {
    label: 'Rsi7[1]|1w',
    fieldName: 'RSI7[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_1_2: new BaseField('RSI7_1_2', {
    label: 'Rsi7[1]',
    fieldName: 'RSI7[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_1_240: new BaseField('RSI7_1_240', {
    label: 'Rsi7[1]|240',
    fieldName: 'RSI7[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_1_30: new BaseField('RSI7_1_30', {
    label: 'Rsi7[1]|30',
    fieldName: 'RSI7[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_1_5: new BaseField('RSI7_1_5', {
    label: 'Rsi7[1]|5',
    fieldName: 'RSI7[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_1_60: new BaseField('RSI7_1_60', {
    label: 'Rsi7[1]|60',
    fieldName: 'RSI7[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_240: new BaseField('RSI7_240', {
    label: 'Rsi7|240',
    fieldName: 'RSI7|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_30: new BaseField('RSI7_30', {
    label: 'Rsi7|30',
    fieldName: 'RSI7|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_5: new BaseField('RSI7_5', {
    label: 'Rsi7|5',
    fieldName: 'RSI7|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI7_60: new BaseField('RSI7_60', {
    label: 'Rsi7|60',
    fieldName: 'RSI7|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9: new BaseField('RSI9', {
    label: 'Rsi9',
    fieldName: 'RSI9',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_1: new BaseField('RSI9_1', {
    label: 'Rsi9[1]',
    fieldName: 'RSI9[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_120: new BaseField('RSI9_120', {
    label: 'Rsi9|120',
    fieldName: 'RSI9|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_15: new BaseField('RSI9_15', {
    label: 'Rsi9|15',
    fieldName: 'RSI9|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_1M: new BaseField('RSI9_1M', {
    label: 'Rsi9|1m',
    fieldName: 'RSI9|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_1W: new BaseField('RSI9_1W', {
    label: 'Rsi9|1w',
    fieldName: 'RSI9|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_1_1: new BaseField('RSI9_1_1', {
    label: 'Rsi9[1]|1',
    fieldName: 'RSI9[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_1_120: new BaseField('RSI9_1_120', {
    label: 'Rsi9[1]|120',
    fieldName: 'RSI9[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_1_15: new BaseField('RSI9_1_15', {
    label: 'Rsi9[1]|15',
    fieldName: 'RSI9[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_1_1M: new BaseField('RSI9_1_1M', {
    label: 'Rsi9[1]|1m',
    fieldName: 'RSI9[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_1_1W: new BaseField('RSI9_1_1W', {
    label: 'Rsi9[1]|1w',
    fieldName: 'RSI9[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_1_2: new BaseField('RSI9_1_2', {
    label: 'Rsi9|1',
    fieldName: 'RSI9|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_1_240: new BaseField('RSI9_1_240', {
    label: 'Rsi9[1]|240',
    fieldName: 'RSI9[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_1_30: new BaseField('RSI9_1_30', {
    label: 'Rsi9[1]|30',
    fieldName: 'RSI9[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_1_5: new BaseField('RSI9_1_5', {
    label: 'Rsi9[1]|5',
    fieldName: 'RSI9[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_1_60: new BaseField('RSI9_1_60', {
    label: 'Rsi9[1]|60',
    fieldName: 'RSI9[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_240: new BaseField('RSI9_240', {
    label: 'Rsi9|240',
    fieldName: 'RSI9|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_30: new BaseField('RSI9_30', {
    label: 'Rsi9|30',
    fieldName: 'RSI9|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_5: new BaseField('RSI9_5', {
    label: 'Rsi9|5',
    fieldName: 'RSI9|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI9_60: new BaseField('RSI9_60', {
    label: 'Rsi9|60',
    fieldName: 'RSI9|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_1: new BaseField('RSI_1', {
    label: 'Rsi|1',
    fieldName: 'RSI|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_120: new BaseField('RSI_120', {
    label: 'Rsi|120',
    fieldName: 'RSI|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_15: new BaseField('RSI_15', {
    label: 'Rsi|15',
    fieldName: 'RSI|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_1M: new BaseField('RSI_1M', {
    label: 'Rsi|1m',
    fieldName: 'RSI|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_1W: new BaseField('RSI_1W', {
    label: 'Rsi|1w',
    fieldName: 'RSI|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_1_1: new BaseField('RSI_1_1', {
    label: 'Rsi[1]|1',
    fieldName: 'RSI[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_1_120: new BaseField('RSI_1_120', {
    label: 'Rsi[1]|120',
    fieldName: 'RSI[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_1_15: new BaseField('RSI_1_15', {
    label: 'Rsi[1]|15',
    fieldName: 'RSI[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_1_1M: new BaseField('RSI_1_1M', {
    label: 'Rsi[1]|1m',
    fieldName: 'RSI[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_1_1W: new BaseField('RSI_1_1W', {
    label: 'Rsi[1]|1w',
    fieldName: 'RSI[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_1_2: new BaseField('RSI_1_2', {
    label: 'Rsi[1]',
    fieldName: 'RSI[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_1_240: new BaseField('RSI_1_240', {
    label: 'Rsi[1]|240',
    fieldName: 'RSI[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_1_30: new BaseField('RSI_1_30', {
    label: 'Rsi[1]|30',
    fieldName: 'RSI[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_1_5: new BaseField('RSI_1_5', {
    label: 'Rsi[1]|5',
    fieldName: 'RSI[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_1_60: new BaseField('RSI_1_60', {
    label: 'Rsi[1]|60',
    fieldName: 'RSI[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_240: new BaseField('RSI_240', {
    label: 'Rsi|240',
    fieldName: 'RSI|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_30: new BaseField('RSI_30', {
    label: 'Rsi|30',
    fieldName: 'RSI|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_5: new BaseField('RSI_5', {
    label: 'Rsi|5',
    fieldName: 'RSI|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RSI_60: new BaseField('RSI_60', {
    label: 'Rsi|60',
    fieldName: 'RSI|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCHASTIC_RSI_FAST_3_3_14_14: new BaseField('STOCHASTIC_RSI_FAST_3_3_14_14', {
    label: 'Stochastic RSI Fast (3, 3, 14, 14)',
    fieldName: 'Stoch.RSI.K',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_D_1: new BaseField('STOCH_RSI_D_1', {
    label: 'Stoch RSI D|1',
    fieldName: 'Stoch.RSI.D|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_D_120: new BaseField('STOCH_RSI_D_120', {
    label: 'Stoch RSI D|120',
    fieldName: 'Stoch.RSI.D|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_D_15: new BaseField('STOCH_RSI_D_15', {
    label: 'Stoch RSI D|15',
    fieldName: 'Stoch.RSI.D|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_D_1M: new BaseField('STOCH_RSI_D_1M', {
    label: 'Stoch RSI D|1m',
    fieldName: 'Stoch.RSI.D|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_D_1W: new BaseField('STOCH_RSI_D_1W', {
    label: 'Stoch RSI D|1w',
    fieldName: 'Stoch.RSI.D|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_D_240: new BaseField('STOCH_RSI_D_240', {
    label: 'Stoch RSI D|240',
    fieldName: 'Stoch.RSI.D|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_D_30: new BaseField('STOCH_RSI_D_30', {
    label: 'Stoch RSI D|30',
    fieldName: 'Stoch.RSI.D|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_D_5: new BaseField('STOCH_RSI_D_5', {
    label: 'Stoch RSI D|5',
    fieldName: 'Stoch.RSI.D|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_D_60: new BaseField('STOCH_RSI_D_60', {
    label: 'Stoch RSI D|60',
    fieldName: 'Stoch.RSI.D|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_K_1: new BaseField('STOCH_RSI_K_1', {
    label: 'Stoch RSI K|1',
    fieldName: 'Stoch.RSI.K|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_K_120: new BaseField('STOCH_RSI_K_120', {
    label: 'Stoch RSI K|120',
    fieldName: 'Stoch.RSI.K|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_K_15: new BaseField('STOCH_RSI_K_15', {
    label: 'Stoch RSI K|15',
    fieldName: 'Stoch.RSI.K|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_K_1M: new BaseField('STOCH_RSI_K_1M', {
    label: 'Stoch RSI K|1m',
    fieldName: 'Stoch.RSI.K|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_K_1W: new BaseField('STOCH_RSI_K_1W', {
    label: 'Stoch RSI K|1w',
    fieldName: 'Stoch.RSI.K|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_K_240: new BaseField('STOCH_RSI_K_240', {
    label: 'Stoch RSI K|240',
    fieldName: 'Stoch.RSI.K|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_K_30: new BaseField('STOCH_RSI_K_30', {
    label: 'Stoch RSI K|30',
    fieldName: 'Stoch.RSI.K|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_K_5: new BaseField('STOCH_RSI_K_5', {
    label: 'Stoch RSI K|5',
    fieldName: 'Stoch.RSI.K|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_RSI_K_60: new BaseField('STOCH_RSI_K_60', {
    label: 'Stoch RSI K|60',
    fieldName: 'Stoch.RSI.K|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  // === Technical Indicators - MACD (30 fields) ===

  MACD_HIST: new BaseField('MACD_HIST', {
    label: 'MACD Hist',
    fieldName: 'MACD.hist',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_HIST_1: new BaseField('MACD_HIST_1', {
    label: 'MACD Hist|1',
    fieldName: 'MACD.hist|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_HIST_120: new BaseField('MACD_HIST_120', {
    label: 'MACD Hist|120',
    fieldName: 'MACD.hist|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_HIST_15: new BaseField('MACD_HIST_15', {
    label: 'MACD Hist|15',
    fieldName: 'MACD.hist|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_HIST_1M: new BaseField('MACD_HIST_1M', {
    label: 'MACD Hist|1m',
    fieldName: 'MACD.hist|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_HIST_1W: new BaseField('MACD_HIST_1W', {
    label: 'MACD Hist|1w',
    fieldName: 'MACD.hist|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_HIST_240: new BaseField('MACD_HIST_240', {
    label: 'MACD Hist|240',
    fieldName: 'MACD.hist|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_HIST_30: new BaseField('MACD_HIST_30', {
    label: 'MACD Hist|30',
    fieldName: 'MACD.hist|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_HIST_5: new BaseField('MACD_HIST_5', {
    label: 'MACD Hist|5',
    fieldName: 'MACD.hist|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_HIST_60: new BaseField('MACD_HIST_60', {
    label: 'MACD Hist|60',
    fieldName: 'MACD.hist|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_LEVEL_12_26: new BaseField('MACD_LEVEL_12_26', {
    label: 'MACD Level (12, 26)',
    fieldName: 'MACD.macd',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  MACD_MACD_1: new BaseField('MACD_MACD_1', {
    label: 'MACD Macd|1',
    fieldName: 'MACD.macd|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_MACD_120: new BaseField('MACD_MACD_120', {
    label: 'MACD Macd|120',
    fieldName: 'MACD.macd|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_MACD_15: new BaseField('MACD_MACD_15', {
    label: 'MACD Macd|15',
    fieldName: 'MACD.macd|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_MACD_1M: new BaseField('MACD_MACD_1M', {
    label: 'MACD Macd|1m',
    fieldName: 'MACD.macd|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_MACD_1W: new BaseField('MACD_MACD_1W', {
    label: 'MACD Macd|1w',
    fieldName: 'MACD.macd|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_MACD_240: new BaseField('MACD_MACD_240', {
    label: 'MACD Macd|240',
    fieldName: 'MACD.macd|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_MACD_30: new BaseField('MACD_MACD_30', {
    label: 'MACD Macd|30',
    fieldName: 'MACD.macd|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_MACD_5: new BaseField('MACD_MACD_5', {
    label: 'MACD Macd|5',
    fieldName: 'MACD.macd|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_MACD_60: new BaseField('MACD_MACD_60', {
    label: 'MACD Macd|60',
    fieldName: 'MACD.macd|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_1: new BaseField('MACD_SIGNAL_1', {
    label: 'MACD Signal|1',
    fieldName: 'MACD.signal|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_120: new BaseField('MACD_SIGNAL_120', {
    label: 'MACD Signal|120',
    fieldName: 'MACD.signal|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_12_26: new BaseField('MACD_SIGNAL_12_26', {
    label: 'MACD Signal (12, 26)',
    fieldName: 'MACD.signal',
    format: 'float',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_15: new BaseField('MACD_SIGNAL_15', {
    label: 'MACD Signal|15',
    fieldName: 'MACD.signal|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_1M: new BaseField('MACD_SIGNAL_1M', {
    label: 'MACD Signal|1m',
    fieldName: 'MACD.signal|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_1W: new BaseField('MACD_SIGNAL_1W', {
    label: 'MACD Signal|1w',
    fieldName: 'MACD.signal|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_240: new BaseField('MACD_SIGNAL_240', {
    label: 'MACD Signal|240',
    fieldName: 'MACD.signal|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_30: new BaseField('MACD_SIGNAL_30', {
    label: 'MACD Signal|30',
    fieldName: 'MACD.signal|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_5: new BaseField('MACD_SIGNAL_5', {
    label: 'MACD Signal|5',
    fieldName: 'MACD.signal|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MACD_SIGNAL_60: new BaseField('MACD_SIGNAL_60', {
    label: 'MACD Signal|60',
    fieldName: 'MACD.signal|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  // === Technical Indicators - Bollinger Bands (49 fields) ===

  BB_BASIS: new BaseField('BB_BASIS', {
    label: 'BB Basis',
    fieldName: 'BB.basis',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_1: new BaseField('BB_BASIS_1', {
    label: 'BB Basis|1',
    fieldName: 'BB.basis|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_120: new BaseField('BB_BASIS_120', {
    label: 'BB Basis|120',
    fieldName: 'BB.basis|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_15: new BaseField('BB_BASIS_15', {
    label: 'BB Basis|15',
    fieldName: 'BB.basis|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_1M: new BaseField('BB_BASIS_1M', {
    label: 'BB Basis|1m',
    fieldName: 'BB.basis|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_1W: new BaseField('BB_BASIS_1W', {
    label: 'BB Basis|1w',
    fieldName: 'BB.basis|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_240: new BaseField('BB_BASIS_240', {
    label: 'BB Basis|240',
    fieldName: 'BB.basis|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_30: new BaseField('BB_BASIS_30', {
    label: 'BB Basis|30',
    fieldName: 'BB.basis|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_5: new BaseField('BB_BASIS_5', {
    label: 'BB Basis|5',
    fieldName: 'BB.basis|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50: new BaseField('BB_BASIS_50', {
    label: 'BB Basis 50',
    fieldName: 'BB.basis_50',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_1: new BaseField('BB_BASIS_50_1', {
    label: 'BB Basis 50|1',
    fieldName: 'BB.basis_50|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_120: new BaseField('BB_BASIS_50_120', {
    label: 'BB Basis 50|120',
    fieldName: 'BB.basis_50|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_15: new BaseField('BB_BASIS_50_15', {
    label: 'BB Basis 50|15',
    fieldName: 'BB.basis_50|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_1M: new BaseField('BB_BASIS_50_1M', {
    label: 'BB Basis 50|1m',
    fieldName: 'BB.basis_50|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_1W: new BaseField('BB_BASIS_50_1W', {
    label: 'BB Basis 50|1w',
    fieldName: 'BB.basis_50|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_240: new BaseField('BB_BASIS_50_240', {
    label: 'BB Basis 50|240',
    fieldName: 'BB.basis_50|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_30: new BaseField('BB_BASIS_50_30', {
    label: 'BB Basis 50|30',
    fieldName: 'BB.basis_50|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_5: new BaseField('BB_BASIS_50_5', {
    label: 'BB Basis 50|5',
    fieldName: 'BB.basis_50|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_50_60: new BaseField('BB_BASIS_50_60', {
    label: 'BB Basis 50|60',
    fieldName: 'BB.basis_50|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_BASIS_60: new BaseField('BB_BASIS_60', {
    label: 'BB Basis|60',
    fieldName: 'BB.basis|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_1: new BaseField('BB_UPPER_1', {
    label: 'BB Upper|1',
    fieldName: 'BB.upper|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_120: new BaseField('BB_UPPER_120', {
    label: 'BB Upper|120',
    fieldName: 'BB.upper|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_15: new BaseField('BB_UPPER_15', {
    label: 'BB Upper|15',
    fieldName: 'BB.upper|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_1M: new BaseField('BB_UPPER_1M', {
    label: 'BB Upper|1m',
    fieldName: 'BB.upper|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_1W: new BaseField('BB_UPPER_1W', {
    label: 'BB Upper|1w',
    fieldName: 'BB.upper|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_240: new BaseField('BB_UPPER_240', {
    label: 'BB Upper|240',
    fieldName: 'BB.upper|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_30: new BaseField('BB_UPPER_30', {
    label: 'BB Upper|30',
    fieldName: 'BB.upper|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_5: new BaseField('BB_UPPER_5', {
    label: 'BB Upper|5',
    fieldName: 'BB.upper|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50: new BaseField('BB_UPPER_50', {
    label: 'BB Upper 50',
    fieldName: 'BB.upper_50',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_1: new BaseField('BB_UPPER_50_1', {
    label: 'BB Upper 50|1',
    fieldName: 'BB.upper_50|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_120: new BaseField('BB_UPPER_50_120', {
    label: 'BB Upper 50|120',
    fieldName: 'BB.upper_50|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_15: new BaseField('BB_UPPER_50_15', {
    label: 'BB Upper 50|15',
    fieldName: 'BB.upper_50|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_1M: new BaseField('BB_UPPER_50_1M', {
    label: 'BB Upper 50|1m',
    fieldName: 'BB.upper_50|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_1W: new BaseField('BB_UPPER_50_1W', {
    label: 'BB Upper 50|1w',
    fieldName: 'BB.upper_50|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_240: new BaseField('BB_UPPER_50_240', {
    label: 'BB Upper 50|240',
    fieldName: 'BB.upper_50|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_30: new BaseField('BB_UPPER_50_30', {
    label: 'BB Upper 50|30',
    fieldName: 'BB.upper_50|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_5: new BaseField('BB_UPPER_50_5', {
    label: 'BB Upper 50|5',
    fieldName: 'BB.upper_50|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_50_60: new BaseField('BB_UPPER_50_60', {
    label: 'BB Upper 50|60',
    fieldName: 'BB.upper_50|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BB_UPPER_60: new BaseField('BB_UPPER_60', {
    label: 'BB Upper|60',
    fieldName: 'BB.upper|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS: new BaseField('KLTCHNL_BASIS', {
    label: 'Kltchnl Basis',
    fieldName: 'KltChnl.basis',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_1: new BaseField('KLTCHNL_BASIS_1', {
    label: 'Kltchnl Basis|1',
    fieldName: 'KltChnl.basis|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_120: new BaseField('KLTCHNL_BASIS_120', {
    label: 'Kltchnl Basis|120',
    fieldName: 'KltChnl.basis|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_15: new BaseField('KLTCHNL_BASIS_15', {
    label: 'Kltchnl Basis|15',
    fieldName: 'KltChnl.basis|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_1M: new BaseField('KLTCHNL_BASIS_1M', {
    label: 'Kltchnl Basis|1m',
    fieldName: 'KltChnl.basis|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_1W: new BaseField('KLTCHNL_BASIS_1W', {
    label: 'Kltchnl Basis|1w',
    fieldName: 'KltChnl.basis|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_240: new BaseField('KLTCHNL_BASIS_240', {
    label: 'Kltchnl Basis|240',
    fieldName: 'KltChnl.basis|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_30: new BaseField('KLTCHNL_BASIS_30', {
    label: 'Kltchnl Basis|30',
    fieldName: 'KltChnl.basis|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_5: new BaseField('KLTCHNL_BASIS_5', {
    label: 'Kltchnl Basis|5',
    fieldName: 'KltChnl.basis|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_BASIS_60: new BaseField('KLTCHNL_BASIS_60', {
    label: 'Kltchnl Basis|60',
    fieldName: 'KltChnl.basis|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  // === Technical Indicators - Stochastic (200 fields) ===

  STOCHASTIC_PERCENTD_14_3_3: new BaseField('STOCHASTIC_PERCENTD_14_3_3', {
    label: 'Stochastic %D (14, 3, 3)',
    fieldName: 'Stoch.D',
    format: 'round',
    interval: true,
    historical: true,
  }),

  STOCHASTIC_PERCENTK_14_3_3: new BaseField('STOCHASTIC_PERCENTK_14_3_3', {
    label: 'Stochastic %K (14, 3, 3)',
    fieldName: 'Stoch.K',
    format: 'computed_recommendation',
    interval: true,
    historical: true,
  }),

  STOCH_D_1: new BaseField('STOCH_D_1', {
    label: 'Stoch D[1]',
    fieldName: 'Stoch.D[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_120: new BaseField('STOCH_D_120', {
    label: 'Stoch D|120',
    fieldName: 'Stoch.D|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3: new BaseField('STOCH_D_14_1_3', {
    label: 'Stoch D 14 1 3',
    fieldName: 'Stoch.D_14_1_3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_1: new BaseField('STOCH_D_14_1_3_1', {
    label: 'Stoch D 14 1 3[1]',
    fieldName: 'Stoch.D_14_1_3[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_120: new BaseField('STOCH_D_14_1_3_120', {
    label: 'Stoch D 14 1 3|120',
    fieldName: 'Stoch.D_14_1_3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_15: new BaseField('STOCH_D_14_1_3_15', {
    label: 'Stoch D 14 1 3|15',
    fieldName: 'Stoch.D_14_1_3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_1M: new BaseField('STOCH_D_14_1_3_1M', {
    label: 'Stoch D 14 1 3|1m',
    fieldName: 'Stoch.D_14_1_3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_1W: new BaseField('STOCH_D_14_1_3_1W', {
    label: 'Stoch D 14 1 3|1w',
    fieldName: 'Stoch.D_14_1_3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_1_1: new BaseField('STOCH_D_14_1_3_1_1', {
    label: 'Stoch D 14 1 3[1]|1',
    fieldName: 'Stoch.D_14_1_3[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_1_120: new BaseField('STOCH_D_14_1_3_1_120', {
    label: 'Stoch D 14 1 3[1]|120',
    fieldName: 'Stoch.D_14_1_3[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_1_15: new BaseField('STOCH_D_14_1_3_1_15', {
    label: 'Stoch D 14 1 3[1]|15',
    fieldName: 'Stoch.D_14_1_3[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_1_1M: new BaseField('STOCH_D_14_1_3_1_1M', {
    label: 'Stoch D 14 1 3[1]|1m',
    fieldName: 'Stoch.D_14_1_3[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_1_1W: new BaseField('STOCH_D_14_1_3_1_1W', {
    label: 'Stoch D 14 1 3[1]|1w',
    fieldName: 'Stoch.D_14_1_3[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_1_2: new BaseField('STOCH_D_14_1_3_1_2', {
    label: 'Stoch D 14 1 3|1',
    fieldName: 'Stoch.D_14_1_3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_1_240: new BaseField('STOCH_D_14_1_3_1_240', {
    label: 'Stoch D 14 1 3[1]|240',
    fieldName: 'Stoch.D_14_1_3[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_1_30: new BaseField('STOCH_D_14_1_3_1_30', {
    label: 'Stoch D 14 1 3[1]|30',
    fieldName: 'Stoch.D_14_1_3[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_1_5: new BaseField('STOCH_D_14_1_3_1_5', {
    label: 'Stoch D 14 1 3[1]|5',
    fieldName: 'Stoch.D_14_1_3[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_1_60: new BaseField('STOCH_D_14_1_3_1_60', {
    label: 'Stoch D 14 1 3[1]|60',
    fieldName: 'Stoch.D_14_1_3[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_240: new BaseField('STOCH_D_14_1_3_240', {
    label: 'Stoch D 14 1 3|240',
    fieldName: 'Stoch.D_14_1_3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_30: new BaseField('STOCH_D_14_1_3_30', {
    label: 'Stoch D 14 1 3|30',
    fieldName: 'Stoch.D_14_1_3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_5: new BaseField('STOCH_D_14_1_3_5', {
    label: 'Stoch D 14 1 3|5',
    fieldName: 'Stoch.D_14_1_3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_14_1_3_60: new BaseField('STOCH_D_14_1_3_60', {
    label: 'Stoch D 14 1 3|60',
    fieldName: 'Stoch.D_14_1_3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_15: new BaseField('STOCH_D_15', {
    label: 'Stoch D|15',
    fieldName: 'Stoch.D|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_1M: new BaseField('STOCH_D_1M', {
    label: 'Stoch D|1m',
    fieldName: 'Stoch.D|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_1W: new BaseField('STOCH_D_1W', {
    label: 'Stoch D|1w',
    fieldName: 'Stoch.D|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_1_1: new BaseField('STOCH_D_1_1', {
    label: 'Stoch D[1]|1',
    fieldName: 'Stoch.D[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_1_120: new BaseField('STOCH_D_1_120', {
    label: 'Stoch D[1]|120',
    fieldName: 'Stoch.D[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_1_15: new BaseField('STOCH_D_1_15', {
    label: 'Stoch D[1]|15',
    fieldName: 'Stoch.D[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_1_1M: new BaseField('STOCH_D_1_1M', {
    label: 'Stoch D[1]|1m',
    fieldName: 'Stoch.D[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_1_1W: new BaseField('STOCH_D_1_1W', {
    label: 'Stoch D[1]|1w',
    fieldName: 'Stoch.D[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_1_2: new BaseField('STOCH_D_1_2', {
    label: 'Stoch D|1',
    fieldName: 'Stoch.D|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_1_240: new BaseField('STOCH_D_1_240', {
    label: 'Stoch D[1]|240',
    fieldName: 'Stoch.D[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_1_30: new BaseField('STOCH_D_1_30', {
    label: 'Stoch D[1]|30',
    fieldName: 'Stoch.D[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_1_5: new BaseField('STOCH_D_1_5', {
    label: 'Stoch D[1]|5',
    fieldName: 'Stoch.D[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_1_60: new BaseField('STOCH_D_1_60', {
    label: 'Stoch D[1]|60',
    fieldName: 'Stoch.D[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_240: new BaseField('STOCH_D_240', {
    label: 'Stoch D|240',
    fieldName: 'Stoch.D|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_30: new BaseField('STOCH_D_30', {
    label: 'Stoch D|30',
    fieldName: 'Stoch.D|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5: new BaseField('STOCH_D_5', {
    label: 'Stoch D|5',
    fieldName: 'Stoch.D|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3: new BaseField('STOCH_D_5_3_3', {
    label: 'Stoch D 5 3 3',
    fieldName: 'Stoch.D_5_3_3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_1: new BaseField('STOCH_D_5_3_3_1', {
    label: 'Stoch D 5 3 3|1',
    fieldName: 'Stoch.D_5_3_3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_120: new BaseField('STOCH_D_5_3_3_120', {
    label: 'Stoch D 5 3 3|120',
    fieldName: 'Stoch.D_5_3_3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_15: new BaseField('STOCH_D_5_3_3_15', {
    label: 'Stoch D 5 3 3|15',
    fieldName: 'Stoch.D_5_3_3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_1M: new BaseField('STOCH_D_5_3_3_1M', {
    label: 'Stoch D 5 3 3|1m',
    fieldName: 'Stoch.D_5_3_3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_1W: new BaseField('STOCH_D_5_3_3_1W', {
    label: 'Stoch D 5 3 3|1w',
    fieldName: 'Stoch.D_5_3_3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_1_1: new BaseField('STOCH_D_5_3_3_1_1', {
    label: 'Stoch D 5 3 3[1]|1',
    fieldName: 'Stoch.D_5_3_3[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_1_120: new BaseField('STOCH_D_5_3_3_1_120', {
    label: 'Stoch D 5 3 3[1]|120',
    fieldName: 'Stoch.D_5_3_3[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_1_15: new BaseField('STOCH_D_5_3_3_1_15', {
    label: 'Stoch D 5 3 3[1]|15',
    fieldName: 'Stoch.D_5_3_3[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_1_1M: new BaseField('STOCH_D_5_3_3_1_1M', {
    label: 'Stoch D 5 3 3[1]|1m',
    fieldName: 'Stoch.D_5_3_3[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_1_1W: new BaseField('STOCH_D_5_3_3_1_1W', {
    label: 'Stoch D 5 3 3[1]|1w',
    fieldName: 'Stoch.D_5_3_3[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_1_2: new BaseField('STOCH_D_5_3_3_1_2', {
    label: 'Stoch D 5 3 3[1]',
    fieldName: 'Stoch.D_5_3_3[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_1_240: new BaseField('STOCH_D_5_3_3_1_240', {
    label: 'Stoch D 5 3 3[1]|240',
    fieldName: 'Stoch.D_5_3_3[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_1_30: new BaseField('STOCH_D_5_3_3_1_30', {
    label: 'Stoch D 5 3 3[1]|30',
    fieldName: 'Stoch.D_5_3_3[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_1_5: new BaseField('STOCH_D_5_3_3_1_5', {
    label: 'Stoch D 5 3 3[1]|5',
    fieldName: 'Stoch.D_5_3_3[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_1_60: new BaseField('STOCH_D_5_3_3_1_60', {
    label: 'Stoch D 5 3 3[1]|60',
    fieldName: 'Stoch.D_5_3_3[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_240: new BaseField('STOCH_D_5_3_3_240', {
    label: 'Stoch D 5 3 3|240',
    fieldName: 'Stoch.D_5_3_3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_30: new BaseField('STOCH_D_5_3_3_30', {
    label: 'Stoch D 5 3 3|30',
    fieldName: 'Stoch.D_5_3_3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_5: new BaseField('STOCH_D_5_3_3_5', {
    label: 'Stoch D 5 3 3|5',
    fieldName: 'Stoch.D_5_3_3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_5_3_3_60: new BaseField('STOCH_D_5_3_3_60', {
    label: 'Stoch D 5 3 3|60',
    fieldName: 'Stoch.D_5_3_3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_60: new BaseField('STOCH_D_60', {
    label: 'Stoch D|60',
    fieldName: 'Stoch.D|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3: new BaseField('STOCH_D_6_3_3', {
    label: 'Stoch D 6 3 3',
    fieldName: 'Stoch.D_6_3_3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_1: new BaseField('STOCH_D_6_3_3_1', {
    label: 'Stoch D 6 3 3[1]',
    fieldName: 'Stoch.D_6_3_3[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_120: new BaseField('STOCH_D_6_3_3_120', {
    label: 'Stoch D 6 3 3|120',
    fieldName: 'Stoch.D_6_3_3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_15: new BaseField('STOCH_D_6_3_3_15', {
    label: 'Stoch D 6 3 3|15',
    fieldName: 'Stoch.D_6_3_3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_1M: new BaseField('STOCH_D_6_3_3_1M', {
    label: 'Stoch D 6 3 3|1m',
    fieldName: 'Stoch.D_6_3_3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_1W: new BaseField('STOCH_D_6_3_3_1W', {
    label: 'Stoch D 6 3 3|1w',
    fieldName: 'Stoch.D_6_3_3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_1_1: new BaseField('STOCH_D_6_3_3_1_1', {
    label: 'Stoch D 6 3 3[1]|1',
    fieldName: 'Stoch.D_6_3_3[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_1_120: new BaseField('STOCH_D_6_3_3_1_120', {
    label: 'Stoch D 6 3 3[1]|120',
    fieldName: 'Stoch.D_6_3_3[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_1_15: new BaseField('STOCH_D_6_3_3_1_15', {
    label: 'Stoch D 6 3 3[1]|15',
    fieldName: 'Stoch.D_6_3_3[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_1_1M: new BaseField('STOCH_D_6_3_3_1_1M', {
    label: 'Stoch D 6 3 3[1]|1m',
    fieldName: 'Stoch.D_6_3_3[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_1_1W: new BaseField('STOCH_D_6_3_3_1_1W', {
    label: 'Stoch D 6 3 3[1]|1w',
    fieldName: 'Stoch.D_6_3_3[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_1_2: new BaseField('STOCH_D_6_3_3_1_2', {
    label: 'Stoch D 6 3 3|1',
    fieldName: 'Stoch.D_6_3_3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_1_240: new BaseField('STOCH_D_6_3_3_1_240', {
    label: 'Stoch D 6 3 3[1]|240',
    fieldName: 'Stoch.D_6_3_3[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_1_30: new BaseField('STOCH_D_6_3_3_1_30', {
    label: 'Stoch D 6 3 3[1]|30',
    fieldName: 'Stoch.D_6_3_3[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_1_5: new BaseField('STOCH_D_6_3_3_1_5', {
    label: 'Stoch D 6 3 3[1]|5',
    fieldName: 'Stoch.D_6_3_3[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_1_60: new BaseField('STOCH_D_6_3_3_1_60', {
    label: 'Stoch D 6 3 3[1]|60',
    fieldName: 'Stoch.D_6_3_3[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_240: new BaseField('STOCH_D_6_3_3_240', {
    label: 'Stoch D 6 3 3|240',
    fieldName: 'Stoch.D_6_3_3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_30: new BaseField('STOCH_D_6_3_3_30', {
    label: 'Stoch D 6 3 3|30',
    fieldName: 'Stoch.D_6_3_3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_5: new BaseField('STOCH_D_6_3_3_5', {
    label: 'Stoch D 6 3 3|5',
    fieldName: 'Stoch.D_6_3_3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_6_3_3_60: new BaseField('STOCH_D_6_3_3_60', {
    label: 'Stoch D 6 3 3|60',
    fieldName: 'Stoch.D_6_3_3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3: new BaseField('STOCH_D_8_3_3', {
    label: 'Stoch D 8 3 3',
    fieldName: 'Stoch.D_8_3_3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_1: new BaseField('STOCH_D_8_3_3_1', {
    label: 'Stoch D 8 3 3[1]',
    fieldName: 'Stoch.D_8_3_3[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_120: new BaseField('STOCH_D_8_3_3_120', {
    label: 'Stoch D 8 3 3|120',
    fieldName: 'Stoch.D_8_3_3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_15: new BaseField('STOCH_D_8_3_3_15', {
    label: 'Stoch D 8 3 3|15',
    fieldName: 'Stoch.D_8_3_3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_1M: new BaseField('STOCH_D_8_3_3_1M', {
    label: 'Stoch D 8 3 3|1m',
    fieldName: 'Stoch.D_8_3_3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_1W: new BaseField('STOCH_D_8_3_3_1W', {
    label: 'Stoch D 8 3 3|1w',
    fieldName: 'Stoch.D_8_3_3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_1_1: new BaseField('STOCH_D_8_3_3_1_1', {
    label: 'Stoch D 8 3 3[1]|1',
    fieldName: 'Stoch.D_8_3_3[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_1_120: new BaseField('STOCH_D_8_3_3_1_120', {
    label: 'Stoch D 8 3 3[1]|120',
    fieldName: 'Stoch.D_8_3_3[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_1_15: new BaseField('STOCH_D_8_3_3_1_15', {
    label: 'Stoch D 8 3 3[1]|15',
    fieldName: 'Stoch.D_8_3_3[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_1_1M: new BaseField('STOCH_D_8_3_3_1_1M', {
    label: 'Stoch D 8 3 3[1]|1m',
    fieldName: 'Stoch.D_8_3_3[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_1_1W: new BaseField('STOCH_D_8_3_3_1_1W', {
    label: 'Stoch D 8 3 3[1]|1w',
    fieldName: 'Stoch.D_8_3_3[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_1_2: new BaseField('STOCH_D_8_3_3_1_2', {
    label: 'Stoch D 8 3 3|1',
    fieldName: 'Stoch.D_8_3_3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_1_240: new BaseField('STOCH_D_8_3_3_1_240', {
    label: 'Stoch D 8 3 3[1]|240',
    fieldName: 'Stoch.D_8_3_3[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_1_30: new BaseField('STOCH_D_8_3_3_1_30', {
    label: 'Stoch D 8 3 3[1]|30',
    fieldName: 'Stoch.D_8_3_3[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_1_5: new BaseField('STOCH_D_8_3_3_1_5', {
    label: 'Stoch D 8 3 3[1]|5',
    fieldName: 'Stoch.D_8_3_3[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_1_60: new BaseField('STOCH_D_8_3_3_1_60', {
    label: 'Stoch D 8 3 3[1]|60',
    fieldName: 'Stoch.D_8_3_3[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_240: new BaseField('STOCH_D_8_3_3_240', {
    label: 'Stoch D 8 3 3|240',
    fieldName: 'Stoch.D_8_3_3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_30: new BaseField('STOCH_D_8_3_3_30', {
    label: 'Stoch D 8 3 3|30',
    fieldName: 'Stoch.D_8_3_3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_5: new BaseField('STOCH_D_8_3_3_5', {
    label: 'Stoch D 8 3 3|5',
    fieldName: 'Stoch.D_8_3_3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_D_8_3_3_60: new BaseField('STOCH_D_8_3_3_60', {
    label: 'Stoch D 8 3 3|60',
    fieldName: 'Stoch.D_8_3_3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_1: new BaseField('STOCH_K_1', {
    label: 'Stoch K[1]',
    fieldName: 'Stoch.K[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_120: new BaseField('STOCH_K_120', {
    label: 'Stoch K|120',
    fieldName: 'Stoch.K|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3: new BaseField('STOCH_K_14_1_3', {
    label: 'Stoch K 14 1 3',
    fieldName: 'Stoch.K_14_1_3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_1: new BaseField('STOCH_K_14_1_3_1', {
    label: 'Stoch K 14 1 3|1',
    fieldName: 'Stoch.K_14_1_3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_120: new BaseField('STOCH_K_14_1_3_120', {
    label: 'Stoch K 14 1 3|120',
    fieldName: 'Stoch.K_14_1_3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_15: new BaseField('STOCH_K_14_1_3_15', {
    label: 'Stoch K 14 1 3|15',
    fieldName: 'Stoch.K_14_1_3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_1M: new BaseField('STOCH_K_14_1_3_1M', {
    label: 'Stoch K 14 1 3|1m',
    fieldName: 'Stoch.K_14_1_3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_1W: new BaseField('STOCH_K_14_1_3_1W', {
    label: 'Stoch K 14 1 3|1w',
    fieldName: 'Stoch.K_14_1_3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_1_1: new BaseField('STOCH_K_14_1_3_1_1', {
    label: 'Stoch K 14 1 3[1]|1',
    fieldName: 'Stoch.K_14_1_3[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_1_120: new BaseField('STOCH_K_14_1_3_1_120', {
    label: 'Stoch K 14 1 3[1]|120',
    fieldName: 'Stoch.K_14_1_3[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_1_15: new BaseField('STOCH_K_14_1_3_1_15', {
    label: 'Stoch K 14 1 3[1]|15',
    fieldName: 'Stoch.K_14_1_3[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_1_1M: new BaseField('STOCH_K_14_1_3_1_1M', {
    label: 'Stoch K 14 1 3[1]|1m',
    fieldName: 'Stoch.K_14_1_3[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_1_1W: new BaseField('STOCH_K_14_1_3_1_1W', {
    label: 'Stoch K 14 1 3[1]|1w',
    fieldName: 'Stoch.K_14_1_3[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_1_2: new BaseField('STOCH_K_14_1_3_1_2', {
    label: 'Stoch K 14 1 3[1]',
    fieldName: 'Stoch.K_14_1_3[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_1_240: new BaseField('STOCH_K_14_1_3_1_240', {
    label: 'Stoch K 14 1 3[1]|240',
    fieldName: 'Stoch.K_14_1_3[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_1_30: new BaseField('STOCH_K_14_1_3_1_30', {
    label: 'Stoch K 14 1 3[1]|30',
    fieldName: 'Stoch.K_14_1_3[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_1_5: new BaseField('STOCH_K_14_1_3_1_5', {
    label: 'Stoch K 14 1 3[1]|5',
    fieldName: 'Stoch.K_14_1_3[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_1_60: new BaseField('STOCH_K_14_1_3_1_60', {
    label: 'Stoch K 14 1 3[1]|60',
    fieldName: 'Stoch.K_14_1_3[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_240: new BaseField('STOCH_K_14_1_3_240', {
    label: 'Stoch K 14 1 3|240',
    fieldName: 'Stoch.K_14_1_3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_30: new BaseField('STOCH_K_14_1_3_30', {
    label: 'Stoch K 14 1 3|30',
    fieldName: 'Stoch.K_14_1_3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_5: new BaseField('STOCH_K_14_1_3_5', {
    label: 'Stoch K 14 1 3|5',
    fieldName: 'Stoch.K_14_1_3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_14_1_3_60: new BaseField('STOCH_K_14_1_3_60', {
    label: 'Stoch K 14 1 3|60',
    fieldName: 'Stoch.K_14_1_3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_15: new BaseField('STOCH_K_15', {
    label: 'Stoch K|15',
    fieldName: 'Stoch.K|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_1M: new BaseField('STOCH_K_1M', {
    label: 'Stoch K|1m',
    fieldName: 'Stoch.K|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_1W: new BaseField('STOCH_K_1W', {
    label: 'Stoch K|1w',
    fieldName: 'Stoch.K|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_1_1: new BaseField('STOCH_K_1_1', {
    label: 'Stoch K[1]|1',
    fieldName: 'Stoch.K[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_1_120: new BaseField('STOCH_K_1_120', {
    label: 'Stoch K[1]|120',
    fieldName: 'Stoch.K[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_1_15: new BaseField('STOCH_K_1_15', {
    label: 'Stoch K[1]|15',
    fieldName: 'Stoch.K[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_1_1M: new BaseField('STOCH_K_1_1M', {
    label: 'Stoch K[1]|1m',
    fieldName: 'Stoch.K[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_1_1W: new BaseField('STOCH_K_1_1W', {
    label: 'Stoch K[1]|1w',
    fieldName: 'Stoch.K[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_1_2: new BaseField('STOCH_K_1_2', {
    label: 'Stoch K|1',
    fieldName: 'Stoch.K|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_1_240: new BaseField('STOCH_K_1_240', {
    label: 'Stoch K[1]|240',
    fieldName: 'Stoch.K[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_1_30: new BaseField('STOCH_K_1_30', {
    label: 'Stoch K[1]|30',
    fieldName: 'Stoch.K[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_1_5: new BaseField('STOCH_K_1_5', {
    label: 'Stoch K[1]|5',
    fieldName: 'Stoch.K[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_1_60: new BaseField('STOCH_K_1_60', {
    label: 'Stoch K[1]|60',
    fieldName: 'Stoch.K[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_240: new BaseField('STOCH_K_240', {
    label: 'Stoch K|240',
    fieldName: 'Stoch.K|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_30: new BaseField('STOCH_K_30', {
    label: 'Stoch K|30',
    fieldName: 'Stoch.K|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5: new BaseField('STOCH_K_5', {
    label: 'Stoch K|5',
    fieldName: 'Stoch.K|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3: new BaseField('STOCH_K_5_3_3', {
    label: 'Stoch K 5 3 3',
    fieldName: 'Stoch.K_5_3_3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_1: new BaseField('STOCH_K_5_3_3_1', {
    label: 'Stoch K 5 3 3[1]',
    fieldName: 'Stoch.K_5_3_3[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_120: new BaseField('STOCH_K_5_3_3_120', {
    label: 'Stoch K 5 3 3|120',
    fieldName: 'Stoch.K_5_3_3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_15: new BaseField('STOCH_K_5_3_3_15', {
    label: 'Stoch K 5 3 3|15',
    fieldName: 'Stoch.K_5_3_3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_1M: new BaseField('STOCH_K_5_3_3_1M', {
    label: 'Stoch K 5 3 3|1m',
    fieldName: 'Stoch.K_5_3_3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_1W: new BaseField('STOCH_K_5_3_3_1W', {
    label: 'Stoch K 5 3 3|1w',
    fieldName: 'Stoch.K_5_3_3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_1_1: new BaseField('STOCH_K_5_3_3_1_1', {
    label: 'Stoch K 5 3 3[1]|1',
    fieldName: 'Stoch.K_5_3_3[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_1_120: new BaseField('STOCH_K_5_3_3_1_120', {
    label: 'Stoch K 5 3 3[1]|120',
    fieldName: 'Stoch.K_5_3_3[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_1_15: new BaseField('STOCH_K_5_3_3_1_15', {
    label: 'Stoch K 5 3 3[1]|15',
    fieldName: 'Stoch.K_5_3_3[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_1_1M: new BaseField('STOCH_K_5_3_3_1_1M', {
    label: 'Stoch K 5 3 3[1]|1m',
    fieldName: 'Stoch.K_5_3_3[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_1_1W: new BaseField('STOCH_K_5_3_3_1_1W', {
    label: 'Stoch K 5 3 3[1]|1w',
    fieldName: 'Stoch.K_5_3_3[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_1_2: new BaseField('STOCH_K_5_3_3_1_2', {
    label: 'Stoch K 5 3 3|1',
    fieldName: 'Stoch.K_5_3_3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_1_240: new BaseField('STOCH_K_5_3_3_1_240', {
    label: 'Stoch K 5 3 3[1]|240',
    fieldName: 'Stoch.K_5_3_3[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_1_30: new BaseField('STOCH_K_5_3_3_1_30', {
    label: 'Stoch K 5 3 3[1]|30',
    fieldName: 'Stoch.K_5_3_3[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_1_5: new BaseField('STOCH_K_5_3_3_1_5', {
    label: 'Stoch K 5 3 3[1]|5',
    fieldName: 'Stoch.K_5_3_3[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_1_60: new BaseField('STOCH_K_5_3_3_1_60', {
    label: 'Stoch K 5 3 3[1]|60',
    fieldName: 'Stoch.K_5_3_3[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_240: new BaseField('STOCH_K_5_3_3_240', {
    label: 'Stoch K 5 3 3|240',
    fieldName: 'Stoch.K_5_3_3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_30: new BaseField('STOCH_K_5_3_3_30', {
    label: 'Stoch K 5 3 3|30',
    fieldName: 'Stoch.K_5_3_3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_5: new BaseField('STOCH_K_5_3_3_5', {
    label: 'Stoch K 5 3 3|5',
    fieldName: 'Stoch.K_5_3_3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_5_3_3_60: new BaseField('STOCH_K_5_3_3_60', {
    label: 'Stoch K 5 3 3|60',
    fieldName: 'Stoch.K_5_3_3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_60: new BaseField('STOCH_K_60', {
    label: 'Stoch K|60',
    fieldName: 'Stoch.K|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3: new BaseField('STOCH_K_6_3_3', {
    label: 'Stoch K 6 3 3',
    fieldName: 'Stoch.K_6_3_3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_1: new BaseField('STOCH_K_6_3_3_1', {
    label: 'Stoch K 6 3 3[1]',
    fieldName: 'Stoch.K_6_3_3[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_120: new BaseField('STOCH_K_6_3_3_120', {
    label: 'Stoch K 6 3 3|120',
    fieldName: 'Stoch.K_6_3_3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_15: new BaseField('STOCH_K_6_3_3_15', {
    label: 'Stoch K 6 3 3|15',
    fieldName: 'Stoch.K_6_3_3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_1M: new BaseField('STOCH_K_6_3_3_1M', {
    label: 'Stoch K 6 3 3|1m',
    fieldName: 'Stoch.K_6_3_3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_1W: new BaseField('STOCH_K_6_3_3_1W', {
    label: 'Stoch K 6 3 3|1w',
    fieldName: 'Stoch.K_6_3_3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_1_1: new BaseField('STOCH_K_6_3_3_1_1', {
    label: 'Stoch K 6 3 3[1]|1',
    fieldName: 'Stoch.K_6_3_3[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_1_120: new BaseField('STOCH_K_6_3_3_1_120', {
    label: 'Stoch K 6 3 3[1]|120',
    fieldName: 'Stoch.K_6_3_3[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_1_15: new BaseField('STOCH_K_6_3_3_1_15', {
    label: 'Stoch K 6 3 3[1]|15',
    fieldName: 'Stoch.K_6_3_3[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_1_1M: new BaseField('STOCH_K_6_3_3_1_1M', {
    label: 'Stoch K 6 3 3[1]|1m',
    fieldName: 'Stoch.K_6_3_3[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_1_1W: new BaseField('STOCH_K_6_3_3_1_1W', {
    label: 'Stoch K 6 3 3[1]|1w',
    fieldName: 'Stoch.K_6_3_3[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_1_2: new BaseField('STOCH_K_6_3_3_1_2', {
    label: 'Stoch K 6 3 3|1',
    fieldName: 'Stoch.K_6_3_3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_1_240: new BaseField('STOCH_K_6_3_3_1_240', {
    label: 'Stoch K 6 3 3[1]|240',
    fieldName: 'Stoch.K_6_3_3[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_1_30: new BaseField('STOCH_K_6_3_3_1_30', {
    label: 'Stoch K 6 3 3[1]|30',
    fieldName: 'Stoch.K_6_3_3[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_1_5: new BaseField('STOCH_K_6_3_3_1_5', {
    label: 'Stoch K 6 3 3[1]|5',
    fieldName: 'Stoch.K_6_3_3[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_1_60: new BaseField('STOCH_K_6_3_3_1_60', {
    label: 'Stoch K 6 3 3[1]|60',
    fieldName: 'Stoch.K_6_3_3[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_240: new BaseField('STOCH_K_6_3_3_240', {
    label: 'Stoch K 6 3 3|240',
    fieldName: 'Stoch.K_6_3_3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_30: new BaseField('STOCH_K_6_3_3_30', {
    label: 'Stoch K 6 3 3|30',
    fieldName: 'Stoch.K_6_3_3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_5: new BaseField('STOCH_K_6_3_3_5', {
    label: 'Stoch K 6 3 3|5',
    fieldName: 'Stoch.K_6_3_3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_6_3_3_60: new BaseField('STOCH_K_6_3_3_60', {
    label: 'Stoch K 6 3 3|60',
    fieldName: 'Stoch.K_6_3_3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3: new BaseField('STOCH_K_8_3_3', {
    label: 'Stoch K 8 3 3',
    fieldName: 'Stoch.K_8_3_3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_1: new BaseField('STOCH_K_8_3_3_1', {
    label: 'Stoch K 8 3 3|1',
    fieldName: 'Stoch.K_8_3_3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_120: new BaseField('STOCH_K_8_3_3_120', {
    label: 'Stoch K 8 3 3|120',
    fieldName: 'Stoch.K_8_3_3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_15: new BaseField('STOCH_K_8_3_3_15', {
    label: 'Stoch K 8 3 3|15',
    fieldName: 'Stoch.K_8_3_3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_1M: new BaseField('STOCH_K_8_3_3_1M', {
    label: 'Stoch K 8 3 3|1m',
    fieldName: 'Stoch.K_8_3_3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_1W: new BaseField('STOCH_K_8_3_3_1W', {
    label: 'Stoch K 8 3 3|1w',
    fieldName: 'Stoch.K_8_3_3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_1_1: new BaseField('STOCH_K_8_3_3_1_1', {
    label: 'Stoch K 8 3 3[1]|1',
    fieldName: 'Stoch.K_8_3_3[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_1_120: new BaseField('STOCH_K_8_3_3_1_120', {
    label: 'Stoch K 8 3 3[1]|120',
    fieldName: 'Stoch.K_8_3_3[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_1_15: new BaseField('STOCH_K_8_3_3_1_15', {
    label: 'Stoch K 8 3 3[1]|15',
    fieldName: 'Stoch.K_8_3_3[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_1_1M: new BaseField('STOCH_K_8_3_3_1_1M', {
    label: 'Stoch K 8 3 3[1]|1m',
    fieldName: 'Stoch.K_8_3_3[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_1_1W: new BaseField('STOCH_K_8_3_3_1_1W', {
    label: 'Stoch K 8 3 3[1]|1w',
    fieldName: 'Stoch.K_8_3_3[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_1_2: new BaseField('STOCH_K_8_3_3_1_2', {
    label: 'Stoch K 8 3 3[1]',
    fieldName: 'Stoch.K_8_3_3[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_1_240: new BaseField('STOCH_K_8_3_3_1_240', {
    label: 'Stoch K 8 3 3[1]|240',
    fieldName: 'Stoch.K_8_3_3[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_1_30: new BaseField('STOCH_K_8_3_3_1_30', {
    label: 'Stoch K 8 3 3[1]|30',
    fieldName: 'Stoch.K_8_3_3[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_1_5: new BaseField('STOCH_K_8_3_3_1_5', {
    label: 'Stoch K 8 3 3[1]|5',
    fieldName: 'Stoch.K_8_3_3[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_1_60: new BaseField('STOCH_K_8_3_3_1_60', {
    label: 'Stoch K 8 3 3[1]|60',
    fieldName: 'Stoch.K_8_3_3[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_240: new BaseField('STOCH_K_8_3_3_240', {
    label: 'Stoch K 8 3 3|240',
    fieldName: 'Stoch.K_8_3_3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_30: new BaseField('STOCH_K_8_3_3_30', {
    label: 'Stoch K 8 3 3|30',
    fieldName: 'Stoch.K_8_3_3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_5: new BaseField('STOCH_K_8_3_3_5', {
    label: 'Stoch K 8 3 3|5',
    fieldName: 'Stoch.K_8_3_3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  STOCH_K_8_3_3_60: new BaseField('STOCH_K_8_3_3_60', {
    label: 'Stoch K 8 3 3|60',
    fieldName: 'Stoch.K_8_3_3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  // === Technical Indicators - ADX (247 fields) ===

  ADX_1: new BaseField('ADX_1', {
    label: 'Adx|1',
    fieldName: 'ADX|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_100: new BaseField('ADX_100', {
    label: 'ADX 100',
    fieldName: 'ADX_100',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_100_1: new BaseField('ADX_100_1', {
    label: 'ADX 100|1',
    fieldName: 'ADX_100|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_100_120: new BaseField('ADX_100_120', {
    label: 'ADX 100|120',
    fieldName: 'ADX_100|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_100_15: new BaseField('ADX_100_15', {
    label: 'ADX 100|15',
    fieldName: 'ADX_100|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_100_1M: new BaseField('ADX_100_1M', {
    label: 'ADX 100|1m',
    fieldName: 'ADX_100|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_100_1W: new BaseField('ADX_100_1W', {
    label: 'ADX 100|1w',
    fieldName: 'ADX_100|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_100_240: new BaseField('ADX_100_240', {
    label: 'ADX 100|240',
    fieldName: 'ADX_100|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_100_30: new BaseField('ADX_100_30', {
    label: 'ADX 100|30',
    fieldName: 'ADX_100|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_100_5: new BaseField('ADX_100_5', {
    label: 'ADX 100|5',
    fieldName: 'ADX_100|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_100_60: new BaseField('ADX_100_60', {
    label: 'ADX 100|60',
    fieldName: 'ADX_100|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_120: new BaseField('ADX_120', {
    label: 'Adx|120',
    fieldName: 'ADX|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_15: new BaseField('ADX_15', {
    label: 'Adx|15',
    fieldName: 'ADX|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_1M: new BaseField('ADX_1M', {
    label: 'Adx|1m',
    fieldName: 'ADX|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_1W: new BaseField('ADX_1W', {
    label: 'Adx|1w',
    fieldName: 'ADX|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_20: new BaseField('ADX_20', {
    label: 'ADX 20',
    fieldName: 'ADX_20',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_20_1: new BaseField('ADX_20_1', {
    label: 'ADX 20|1',
    fieldName: 'ADX_20|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_20_120: new BaseField('ADX_20_120', {
    label: 'ADX 20|120',
    fieldName: 'ADX_20|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_20_15: new BaseField('ADX_20_15', {
    label: 'ADX 20|15',
    fieldName: 'ADX_20|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_20_1M: new BaseField('ADX_20_1M', {
    label: 'ADX 20|1m',
    fieldName: 'ADX_20|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_20_1W: new BaseField('ADX_20_1W', {
    label: 'ADX 20|1w',
    fieldName: 'ADX_20|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_20_240: new BaseField('ADX_20_240', {
    label: 'ADX 20|240',
    fieldName: 'ADX_20|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_20_30: new BaseField('ADX_20_30', {
    label: 'ADX 20|30',
    fieldName: 'ADX_20|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_20_5: new BaseField('ADX_20_5', {
    label: 'ADX 20|5',
    fieldName: 'ADX_20|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_20_60: new BaseField('ADX_20_60', {
    label: 'ADX 20|60',
    fieldName: 'ADX_20|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_240: new BaseField('ADX_240', {
    label: 'Adx|240',
    fieldName: 'ADX|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_30: new BaseField('ADX_30', {
    label: 'Adx|30',
    fieldName: 'ADX|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_5: new BaseField('ADX_5', {
    label: 'Adx|5',
    fieldName: 'ADX|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_50: new BaseField('ADX_50', {
    label: 'ADX 50',
    fieldName: 'ADX_50',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_50_1: new BaseField('ADX_50_1', {
    label: 'ADX 50|1',
    fieldName: 'ADX_50|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_50_120: new BaseField('ADX_50_120', {
    label: 'ADX 50|120',
    fieldName: 'ADX_50|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_50_15: new BaseField('ADX_50_15', {
    label: 'ADX 50|15',
    fieldName: 'ADX_50|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_50_1M: new BaseField('ADX_50_1M', {
    label: 'ADX 50|1m',
    fieldName: 'ADX_50|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_50_1W: new BaseField('ADX_50_1W', {
    label: 'ADX 50|1w',
    fieldName: 'ADX_50|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_50_240: new BaseField('ADX_50_240', {
    label: 'ADX 50|240',
    fieldName: 'ADX_50|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_50_30: new BaseField('ADX_50_30', {
    label: 'ADX 50|30',
    fieldName: 'ADX_50|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_50_5: new BaseField('ADX_50_5', {
    label: 'ADX 50|5',
    fieldName: 'ADX_50|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_50_60: new BaseField('ADX_50_60', {
    label: 'ADX 50|60',
    fieldName: 'ADX_50|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_60: new BaseField('ADX_60', {
    label: 'Adx|60',
    fieldName: 'ADX|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_9: new BaseField('ADX_9', {
    label: 'ADX 9',
    fieldName: 'ADX_9',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_9_1: new BaseField('ADX_9_1', {
    label: 'ADX 9|1',
    fieldName: 'ADX_9|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_9_120: new BaseField('ADX_9_120', {
    label: 'ADX 9|120',
    fieldName: 'ADX_9|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_9_15: new BaseField('ADX_9_15', {
    label: 'ADX 9|15',
    fieldName: 'ADX_9|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_9_1M: new BaseField('ADX_9_1M', {
    label: 'ADX 9|1m',
    fieldName: 'ADX_9|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_9_1W: new BaseField('ADX_9_1W', {
    label: 'ADX 9|1w',
    fieldName: 'ADX_9|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_9_240: new BaseField('ADX_9_240', {
    label: 'ADX 9|240',
    fieldName: 'ADX_9|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_9_30: new BaseField('ADX_9_30', {
    label: 'ADX 9|30',
    fieldName: 'ADX_9|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_9_5: new BaseField('ADX_9_5', {
    label: 'ADX 9|5',
    fieldName: 'ADX_9|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_9_60: new BaseField('ADX_9_60', {
    label: 'ADX 9|60',
    fieldName: 'ADX_9|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_1: new BaseField('ADX_DI_1', {
    label: 'Adx-di[1]',
    fieldName: 'ADX-DI[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100: new BaseField('ADX_DI_100', {
    label: 'Adx-di 100',
    fieldName: 'ADX-DI_100',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_1: new BaseField('ADX_DI_100_1', {
    label: 'Adx-di 100[1]',
    fieldName: 'ADX-DI_100[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_120: new BaseField('ADX_DI_100_120', {
    label: 'Adx-di 100|120',
    fieldName: 'ADX-DI_100|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_15: new BaseField('ADX_DI_100_15', {
    label: 'Adx-di 100|15',
    fieldName: 'ADX-DI_100|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_1M: new BaseField('ADX_DI_100_1M', {
    label: 'Adx-di 100|1m',
    fieldName: 'ADX-DI_100|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_1W: new BaseField('ADX_DI_100_1W', {
    label: 'Adx-di 100|1w',
    fieldName: 'ADX-DI_100|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_1_1: new BaseField('ADX_DI_100_1_1', {
    label: 'Adx-di 100[1]|1',
    fieldName: 'ADX-DI_100[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_1_120: new BaseField('ADX_DI_100_1_120', {
    label: 'Adx-di 100[1]|120',
    fieldName: 'ADX-DI_100[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_1_15: new BaseField('ADX_DI_100_1_15', {
    label: 'Adx-di 100[1]|15',
    fieldName: 'ADX-DI_100[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_1_1M: new BaseField('ADX_DI_100_1_1M', {
    label: 'Adx-di 100[1]|1m',
    fieldName: 'ADX-DI_100[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_1_1W: new BaseField('ADX_DI_100_1_1W', {
    label: 'Adx-di 100[1]|1w',
    fieldName: 'ADX-DI_100[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_1_2: new BaseField('ADX_DI_100_1_2', {
    label: 'Adx-di 100|1',
    fieldName: 'ADX-DI_100|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_1_240: new BaseField('ADX_DI_100_1_240', {
    label: 'Adx-di 100[1]|240',
    fieldName: 'ADX-DI_100[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_1_30: new BaseField('ADX_DI_100_1_30', {
    label: 'Adx-di 100[1]|30',
    fieldName: 'ADX-DI_100[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_1_5: new BaseField('ADX_DI_100_1_5', {
    label: 'Adx-di 100[1]|5',
    fieldName: 'ADX-DI_100[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_1_60: new BaseField('ADX_DI_100_1_60', {
    label: 'Adx-di 100[1]|60',
    fieldName: 'ADX-DI_100[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_240: new BaseField('ADX_DI_100_240', {
    label: 'Adx-di 100|240',
    fieldName: 'ADX-DI_100|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_30: new BaseField('ADX_DI_100_30', {
    label: 'Adx-di 100|30',
    fieldName: 'ADX-DI_100|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_5: new BaseField('ADX_DI_100_5', {
    label: 'Adx-di 100|5',
    fieldName: 'ADX-DI_100|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_100_60: new BaseField('ADX_DI_100_60', {
    label: 'Adx-di 100|60',
    fieldName: 'ADX-DI_100|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_120: new BaseField('ADX_DI_120', {
    label: 'Adx-di|120',
    fieldName: 'ADX-DI|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_15: new BaseField('ADX_DI_15', {
    label: 'Adx-di|15',
    fieldName: 'ADX-DI|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_1M: new BaseField('ADX_DI_1M', {
    label: 'Adx-di|1m',
    fieldName: 'ADX-DI|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_1W: new BaseField('ADX_DI_1W', {
    label: 'Adx-di|1w',
    fieldName: 'ADX-DI|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_1_1: new BaseField('ADX_DI_1_1', {
    label: 'Adx-di[1]|1',
    fieldName: 'ADX-DI[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_1_120: new BaseField('ADX_DI_1_120', {
    label: 'Adx-di[1]|120',
    fieldName: 'ADX-DI[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_1_15: new BaseField('ADX_DI_1_15', {
    label: 'Adx-di[1]|15',
    fieldName: 'ADX-DI[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_1_1M: new BaseField('ADX_DI_1_1M', {
    label: 'Adx-di[1]|1m',
    fieldName: 'ADX-DI[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_1_1W: new BaseField('ADX_DI_1_1W', {
    label: 'Adx-di[1]|1w',
    fieldName: 'ADX-DI[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_1_2: new BaseField('ADX_DI_1_2', {
    label: 'Adx-di|1',
    fieldName: 'ADX-DI|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_1_240: new BaseField('ADX_DI_1_240', {
    label: 'Adx-di[1]|240',
    fieldName: 'ADX-DI[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_1_30: new BaseField('ADX_DI_1_30', {
    label: 'Adx-di[1]|30',
    fieldName: 'ADX-DI[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_1_5: new BaseField('ADX_DI_1_5', {
    label: 'Adx-di[1]|5',
    fieldName: 'ADX-DI[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_1_60: new BaseField('ADX_DI_1_60', {
    label: 'Adx-di[1]|60',
    fieldName: 'ADX-DI[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20: new BaseField('ADX_DI_20', {
    label: 'Adx-di 20',
    fieldName: 'ADX-DI_20',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_1: new BaseField('ADX_DI_20_1', {
    label: 'Adx-di 20|1',
    fieldName: 'ADX-DI_20|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_120: new BaseField('ADX_DI_20_120', {
    label: 'Adx-di 20|120',
    fieldName: 'ADX-DI_20|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_15: new BaseField('ADX_DI_20_15', {
    label: 'Adx-di 20|15',
    fieldName: 'ADX-DI_20|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_1M: new BaseField('ADX_DI_20_1M', {
    label: 'Adx-di 20|1m',
    fieldName: 'ADX-DI_20|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_1W: new BaseField('ADX_DI_20_1W', {
    label: 'Adx-di 20|1w',
    fieldName: 'ADX-DI_20|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_1_1: new BaseField('ADX_DI_20_1_1', {
    label: 'Adx-di 20[1]|1',
    fieldName: 'ADX-DI_20[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_1_120: new BaseField('ADX_DI_20_1_120', {
    label: 'Adx-di 20[1]|120',
    fieldName: 'ADX-DI_20[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_1_15: new BaseField('ADX_DI_20_1_15', {
    label: 'Adx-di 20[1]|15',
    fieldName: 'ADX-DI_20[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_1_1M: new BaseField('ADX_DI_20_1_1M', {
    label: 'Adx-di 20[1]|1m',
    fieldName: 'ADX-DI_20[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_1_1W: new BaseField('ADX_DI_20_1_1W', {
    label: 'Adx-di 20[1]|1w',
    fieldName: 'ADX-DI_20[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_1_2: new BaseField('ADX_DI_20_1_2', {
    label: 'Adx-di 20[1]',
    fieldName: 'ADX-DI_20[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_1_240: new BaseField('ADX_DI_20_1_240', {
    label: 'Adx-di 20[1]|240',
    fieldName: 'ADX-DI_20[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_1_30: new BaseField('ADX_DI_20_1_30', {
    label: 'Adx-di 20[1]|30',
    fieldName: 'ADX-DI_20[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_1_5: new BaseField('ADX_DI_20_1_5', {
    label: 'Adx-di 20[1]|5',
    fieldName: 'ADX-DI_20[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_1_60: new BaseField('ADX_DI_20_1_60', {
    label: 'Adx-di 20[1]|60',
    fieldName: 'ADX-DI_20[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_240: new BaseField('ADX_DI_20_240', {
    label: 'Adx-di 20|240',
    fieldName: 'ADX-DI_20|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_30: new BaseField('ADX_DI_20_30', {
    label: 'Adx-di 20|30',
    fieldName: 'ADX-DI_20|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_5: new BaseField('ADX_DI_20_5', {
    label: 'Adx-di 20|5',
    fieldName: 'ADX-DI_20|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_20_60: new BaseField('ADX_DI_20_60', {
    label: 'Adx-di 20|60',
    fieldName: 'ADX-DI_20|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_240: new BaseField('ADX_DI_240', {
    label: 'Adx-di|240',
    fieldName: 'ADX-DI|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_30: new BaseField('ADX_DI_30', {
    label: 'Adx-di|30',
    fieldName: 'ADX-DI|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_5: new BaseField('ADX_DI_5', {
    label: 'Adx-di|5',
    fieldName: 'ADX-DI|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50: new BaseField('ADX_DI_50', {
    label: 'Adx-di 50',
    fieldName: 'ADX-DI_50',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_1: new BaseField('ADX_DI_50_1', {
    label: 'Adx-di 50[1]',
    fieldName: 'ADX-DI_50[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_120: new BaseField('ADX_DI_50_120', {
    label: 'Adx-di 50|120',
    fieldName: 'ADX-DI_50|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_15: new BaseField('ADX_DI_50_15', {
    label: 'Adx-di 50|15',
    fieldName: 'ADX-DI_50|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_1M: new BaseField('ADX_DI_50_1M', {
    label: 'Adx-di 50|1m',
    fieldName: 'ADX-DI_50|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_1W: new BaseField('ADX_DI_50_1W', {
    label: 'Adx-di 50|1w',
    fieldName: 'ADX-DI_50|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_1_1: new BaseField('ADX_DI_50_1_1', {
    label: 'Adx-di 50[1]|1',
    fieldName: 'ADX-DI_50[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_1_120: new BaseField('ADX_DI_50_1_120', {
    label: 'Adx-di 50[1]|120',
    fieldName: 'ADX-DI_50[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_1_15: new BaseField('ADX_DI_50_1_15', {
    label: 'Adx-di 50[1]|15',
    fieldName: 'ADX-DI_50[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_1_1M: new BaseField('ADX_DI_50_1_1M', {
    label: 'Adx-di 50[1]|1m',
    fieldName: 'ADX-DI_50[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_1_1W: new BaseField('ADX_DI_50_1_1W', {
    label: 'Adx-di 50[1]|1w',
    fieldName: 'ADX-DI_50[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_1_2: new BaseField('ADX_DI_50_1_2', {
    label: 'Adx-di 50|1',
    fieldName: 'ADX-DI_50|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_1_240: new BaseField('ADX_DI_50_1_240', {
    label: 'Adx-di 50[1]|240',
    fieldName: 'ADX-DI_50[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_1_30: new BaseField('ADX_DI_50_1_30', {
    label: 'Adx-di 50[1]|30',
    fieldName: 'ADX-DI_50[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_1_5: new BaseField('ADX_DI_50_1_5', {
    label: 'Adx-di 50[1]|5',
    fieldName: 'ADX-DI_50[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_1_60: new BaseField('ADX_DI_50_1_60', {
    label: 'Adx-di 50[1]|60',
    fieldName: 'ADX-DI_50[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_240: new BaseField('ADX_DI_50_240', {
    label: 'Adx-di 50|240',
    fieldName: 'ADX-DI_50|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_30: new BaseField('ADX_DI_50_30', {
    label: 'Adx-di 50|30',
    fieldName: 'ADX-DI_50|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_5: new BaseField('ADX_DI_50_5', {
    label: 'Adx-di 50|5',
    fieldName: 'ADX-DI_50|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_50_60: new BaseField('ADX_DI_50_60', {
    label: 'Adx-di 50|60',
    fieldName: 'ADX-DI_50|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_60: new BaseField('ADX_DI_60', {
    label: 'Adx-di|60',
    fieldName: 'ADX-DI|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9: new BaseField('ADX_DI_9', {
    label: 'Adx-di 9',
    fieldName: 'ADX-DI_9',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_1: new BaseField('ADX_DI_9_1', {
    label: 'Adx-di 9|1',
    fieldName: 'ADX-DI_9|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_120: new BaseField('ADX_DI_9_120', {
    label: 'Adx-di 9|120',
    fieldName: 'ADX-DI_9|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_15: new BaseField('ADX_DI_9_15', {
    label: 'Adx-di 9|15',
    fieldName: 'ADX-DI_9|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_1M: new BaseField('ADX_DI_9_1M', {
    label: 'Adx-di 9|1m',
    fieldName: 'ADX-DI_9|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_1W: new BaseField('ADX_DI_9_1W', {
    label: 'Adx-di 9|1w',
    fieldName: 'ADX-DI_9|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_1_1: new BaseField('ADX_DI_9_1_1', {
    label: 'Adx-di 9[1]|1',
    fieldName: 'ADX-DI_9[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_1_120: new BaseField('ADX_DI_9_1_120', {
    label: 'Adx-di 9[1]|120',
    fieldName: 'ADX-DI_9[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_1_15: new BaseField('ADX_DI_9_1_15', {
    label: 'Adx-di 9[1]|15',
    fieldName: 'ADX-DI_9[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_1_1M: new BaseField('ADX_DI_9_1_1M', {
    label: 'Adx-di 9[1]|1m',
    fieldName: 'ADX-DI_9[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_1_1W: new BaseField('ADX_DI_9_1_1W', {
    label: 'Adx-di 9[1]|1w',
    fieldName: 'ADX-DI_9[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_1_2: new BaseField('ADX_DI_9_1_2', {
    label: 'Adx-di 9[1]',
    fieldName: 'ADX-DI_9[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_1_240: new BaseField('ADX_DI_9_1_240', {
    label: 'Adx-di 9[1]|240',
    fieldName: 'ADX-DI_9[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_1_30: new BaseField('ADX_DI_9_1_30', {
    label: 'Adx-di 9[1]|30',
    fieldName: 'ADX-DI_9[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_1_5: new BaseField('ADX_DI_9_1_5', {
    label: 'Adx-di 9[1]|5',
    fieldName: 'ADX-DI_9[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_1_60: new BaseField('ADX_DI_9_1_60', {
    label: 'Adx-di 9[1]|60',
    fieldName: 'ADX-DI_9[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_240: new BaseField('ADX_DI_9_240', {
    label: 'Adx-di 9|240',
    fieldName: 'ADX-DI_9|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_30: new BaseField('ADX_DI_9_30', {
    label: 'Adx-di 9|30',
    fieldName: 'ADX-DI_9|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_5: new BaseField('ADX_DI_9_5', {
    label: 'Adx-di 9|5',
    fieldName: 'ADX-DI_9|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_DI_9_60: new BaseField('ADX_DI_9_60', {
    label: 'Adx-di 9|60',
    fieldName: 'ADX-DI_9|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_1: new BaseField('ADX_PLUS_DI_1', {
    label: 'Adx+di[1]',
    fieldName: 'ADX+DI[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100: new BaseField('ADX_PLUS_DI_100', {
    label: 'Adx+di 100',
    fieldName: 'ADX+DI_100',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_1: new BaseField('ADX_PLUS_DI_100_1', {
    label: 'Adx+di 100|1',
    fieldName: 'ADX+DI_100|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_120: new BaseField('ADX_PLUS_DI_100_120', {
    label: 'Adx+di 100|120',
    fieldName: 'ADX+DI_100|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_15: new BaseField('ADX_PLUS_DI_100_15', {
    label: 'Adx+di 100|15',
    fieldName: 'ADX+DI_100|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_1M: new BaseField('ADX_PLUS_DI_100_1M', {
    label: 'Adx+di 100|1m',
    fieldName: 'ADX+DI_100|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_1W: new BaseField('ADX_PLUS_DI_100_1W', {
    label: 'Adx+di 100|1w',
    fieldName: 'ADX+DI_100|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_1_1: new BaseField('ADX_PLUS_DI_100_1_1', {
    label: 'Adx+di 100[1]|1',
    fieldName: 'ADX+DI_100[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_1_120: new BaseField('ADX_PLUS_DI_100_1_120', {
    label: 'Adx+di 100[1]|120',
    fieldName: 'ADX+DI_100[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_1_15: new BaseField('ADX_PLUS_DI_100_1_15', {
    label: 'Adx+di 100[1]|15',
    fieldName: 'ADX+DI_100[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_1_1M: new BaseField('ADX_PLUS_DI_100_1_1M', {
    label: 'Adx+di 100[1]|1m',
    fieldName: 'ADX+DI_100[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_1_1W: new BaseField('ADX_PLUS_DI_100_1_1W', {
    label: 'Adx+di 100[1]|1w',
    fieldName: 'ADX+DI_100[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_1_2: new BaseField('ADX_PLUS_DI_100_1_2', {
    label: 'Adx+di 100[1]',
    fieldName: 'ADX+DI_100[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_1_240: new BaseField('ADX_PLUS_DI_100_1_240', {
    label: 'Adx+di 100[1]|240',
    fieldName: 'ADX+DI_100[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_1_30: new BaseField('ADX_PLUS_DI_100_1_30', {
    label: 'Adx+di 100[1]|30',
    fieldName: 'ADX+DI_100[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_1_5: new BaseField('ADX_PLUS_DI_100_1_5', {
    label: 'Adx+di 100[1]|5',
    fieldName: 'ADX+DI_100[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_1_60: new BaseField('ADX_PLUS_DI_100_1_60', {
    label: 'Adx+di 100[1]|60',
    fieldName: 'ADX+DI_100[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_240: new BaseField('ADX_PLUS_DI_100_240', {
    label: 'Adx+di 100|240',
    fieldName: 'ADX+DI_100|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_30: new BaseField('ADX_PLUS_DI_100_30', {
    label: 'Adx+di 100|30',
    fieldName: 'ADX+DI_100|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_5: new BaseField('ADX_PLUS_DI_100_5', {
    label: 'Adx+di 100|5',
    fieldName: 'ADX+DI_100|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_100_60: new BaseField('ADX_PLUS_DI_100_60', {
    label: 'Adx+di 100|60',
    fieldName: 'ADX+DI_100|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_120: new BaseField('ADX_PLUS_DI_120', {
    label: 'Adx+di|120',
    fieldName: 'ADX+DI|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_15: new BaseField('ADX_PLUS_DI_15', {
    label: 'Adx+di|15',
    fieldName: 'ADX+DI|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_1M: new BaseField('ADX_PLUS_DI_1M', {
    label: 'Adx+di|1m',
    fieldName: 'ADX+DI|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_1W: new BaseField('ADX_PLUS_DI_1W', {
    label: 'Adx+di|1w',
    fieldName: 'ADX+DI|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_1_1: new BaseField('ADX_PLUS_DI_1_1', {
    label: 'Adx+di[1]|1',
    fieldName: 'ADX+DI[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_1_120: new BaseField('ADX_PLUS_DI_1_120', {
    label: 'Adx+di[1]|120',
    fieldName: 'ADX+DI[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_1_15: new BaseField('ADX_PLUS_DI_1_15', {
    label: 'Adx+di[1]|15',
    fieldName: 'ADX+DI[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_1_1M: new BaseField('ADX_PLUS_DI_1_1M', {
    label: 'Adx+di[1]|1m',
    fieldName: 'ADX+DI[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_1_1W: new BaseField('ADX_PLUS_DI_1_1W', {
    label: 'Adx+di[1]|1w',
    fieldName: 'ADX+DI[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_1_2: new BaseField('ADX_PLUS_DI_1_2', {
    label: 'Adx+di|1',
    fieldName: 'ADX+DI|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_1_240: new BaseField('ADX_PLUS_DI_1_240', {
    label: 'Adx+di[1]|240',
    fieldName: 'ADX+DI[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_1_30: new BaseField('ADX_PLUS_DI_1_30', {
    label: 'Adx+di[1]|30',
    fieldName: 'ADX+DI[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_1_5: new BaseField('ADX_PLUS_DI_1_5', {
    label: 'Adx+di[1]|5',
    fieldName: 'ADX+DI[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_1_60: new BaseField('ADX_PLUS_DI_1_60', {
    label: 'Adx+di[1]|60',
    fieldName: 'ADX+DI[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20: new BaseField('ADX_PLUS_DI_20', {
    label: 'Adx+di 20',
    fieldName: 'ADX+DI_20',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_1: new BaseField('ADX_PLUS_DI_20_1', {
    label: 'Adx+di 20[1]',
    fieldName: 'ADX+DI_20[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_120: new BaseField('ADX_PLUS_DI_20_120', {
    label: 'Adx+di 20|120',
    fieldName: 'ADX+DI_20|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_15: new BaseField('ADX_PLUS_DI_20_15', {
    label: 'Adx+di 20|15',
    fieldName: 'ADX+DI_20|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_1M: new BaseField('ADX_PLUS_DI_20_1M', {
    label: 'Adx+di 20|1m',
    fieldName: 'ADX+DI_20|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_1W: new BaseField('ADX_PLUS_DI_20_1W', {
    label: 'Adx+di 20|1w',
    fieldName: 'ADX+DI_20|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_1_1: new BaseField('ADX_PLUS_DI_20_1_1', {
    label: 'Adx+di 20[1]|1',
    fieldName: 'ADX+DI_20[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_1_120: new BaseField('ADX_PLUS_DI_20_1_120', {
    label: 'Adx+di 20[1]|120',
    fieldName: 'ADX+DI_20[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_1_15: new BaseField('ADX_PLUS_DI_20_1_15', {
    label: 'Adx+di 20[1]|15',
    fieldName: 'ADX+DI_20[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_1_1M: new BaseField('ADX_PLUS_DI_20_1_1M', {
    label: 'Adx+di 20[1]|1m',
    fieldName: 'ADX+DI_20[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_1_1W: new BaseField('ADX_PLUS_DI_20_1_1W', {
    label: 'Adx+di 20[1]|1w',
    fieldName: 'ADX+DI_20[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_1_2: new BaseField('ADX_PLUS_DI_20_1_2', {
    label: 'Adx+di 20|1',
    fieldName: 'ADX+DI_20|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_1_240: new BaseField('ADX_PLUS_DI_20_1_240', {
    label: 'Adx+di 20[1]|240',
    fieldName: 'ADX+DI_20[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_1_30: new BaseField('ADX_PLUS_DI_20_1_30', {
    label: 'Adx+di 20[1]|30',
    fieldName: 'ADX+DI_20[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_1_5: new BaseField('ADX_PLUS_DI_20_1_5', {
    label: 'Adx+di 20[1]|5',
    fieldName: 'ADX+DI_20[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_1_60: new BaseField('ADX_PLUS_DI_20_1_60', {
    label: 'Adx+di 20[1]|60',
    fieldName: 'ADX+DI_20[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_240: new BaseField('ADX_PLUS_DI_20_240', {
    label: 'Adx+di 20|240',
    fieldName: 'ADX+DI_20|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_30: new BaseField('ADX_PLUS_DI_20_30', {
    label: 'Adx+di 20|30',
    fieldName: 'ADX+DI_20|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_5: new BaseField('ADX_PLUS_DI_20_5', {
    label: 'Adx+di 20|5',
    fieldName: 'ADX+DI_20|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_20_60: new BaseField('ADX_PLUS_DI_20_60', {
    label: 'Adx+di 20|60',
    fieldName: 'ADX+DI_20|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_240: new BaseField('ADX_PLUS_DI_240', {
    label: 'Adx+di|240',
    fieldName: 'ADX+DI|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_30: new BaseField('ADX_PLUS_DI_30', {
    label: 'Adx+di|30',
    fieldName: 'ADX+DI|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_5: new BaseField('ADX_PLUS_DI_5', {
    label: 'Adx+di|5',
    fieldName: 'ADX+DI|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50: new BaseField('ADX_PLUS_DI_50', {
    label: 'Adx+di 50',
    fieldName: 'ADX+DI_50',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_1: new BaseField('ADX_PLUS_DI_50_1', {
    label: 'Adx+di 50|1',
    fieldName: 'ADX+DI_50|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_120: new BaseField('ADX_PLUS_DI_50_120', {
    label: 'Adx+di 50|120',
    fieldName: 'ADX+DI_50|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_15: new BaseField('ADX_PLUS_DI_50_15', {
    label: 'Adx+di 50|15',
    fieldName: 'ADX+DI_50|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_1M: new BaseField('ADX_PLUS_DI_50_1M', {
    label: 'Adx+di 50|1m',
    fieldName: 'ADX+DI_50|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_1W: new BaseField('ADX_PLUS_DI_50_1W', {
    label: 'Adx+di 50|1w',
    fieldName: 'ADX+DI_50|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_1_1: new BaseField('ADX_PLUS_DI_50_1_1', {
    label: 'Adx+di 50[1]|1',
    fieldName: 'ADX+DI_50[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_1_120: new BaseField('ADX_PLUS_DI_50_1_120', {
    label: 'Adx+di 50[1]|120',
    fieldName: 'ADX+DI_50[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_1_15: new BaseField('ADX_PLUS_DI_50_1_15', {
    label: 'Adx+di 50[1]|15',
    fieldName: 'ADX+DI_50[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_1_1M: new BaseField('ADX_PLUS_DI_50_1_1M', {
    label: 'Adx+di 50[1]|1m',
    fieldName: 'ADX+DI_50[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_1_1W: new BaseField('ADX_PLUS_DI_50_1_1W', {
    label: 'Adx+di 50[1]|1w',
    fieldName: 'ADX+DI_50[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_1_2: new BaseField('ADX_PLUS_DI_50_1_2', {
    label: 'Adx+di 50[1]',
    fieldName: 'ADX+DI_50[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_1_240: new BaseField('ADX_PLUS_DI_50_1_240', {
    label: 'Adx+di 50[1]|240',
    fieldName: 'ADX+DI_50[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_1_30: new BaseField('ADX_PLUS_DI_50_1_30', {
    label: 'Adx+di 50[1]|30',
    fieldName: 'ADX+DI_50[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_1_5: new BaseField('ADX_PLUS_DI_50_1_5', {
    label: 'Adx+di 50[1]|5',
    fieldName: 'ADX+DI_50[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_1_60: new BaseField('ADX_PLUS_DI_50_1_60', {
    label: 'Adx+di 50[1]|60',
    fieldName: 'ADX+DI_50[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_240: new BaseField('ADX_PLUS_DI_50_240', {
    label: 'Adx+di 50|240',
    fieldName: 'ADX+DI_50|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_30: new BaseField('ADX_PLUS_DI_50_30', {
    label: 'Adx+di 50|30',
    fieldName: 'ADX+DI_50|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_5: new BaseField('ADX_PLUS_DI_50_5', {
    label: 'Adx+di 50|5',
    fieldName: 'ADX+DI_50|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_50_60: new BaseField('ADX_PLUS_DI_50_60', {
    label: 'Adx+di 50|60',
    fieldName: 'ADX+DI_50|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_60: new BaseField('ADX_PLUS_DI_60', {
    label: 'Adx+di|60',
    fieldName: 'ADX+DI|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9: new BaseField('ADX_PLUS_DI_9', {
    label: 'Adx+di 9',
    fieldName: 'ADX+DI_9',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_1: new BaseField('ADX_PLUS_DI_9_1', {
    label: 'Adx+di 9[1]',
    fieldName: 'ADX+DI_9[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_120: new BaseField('ADX_PLUS_DI_9_120', {
    label: 'Adx+di 9|120',
    fieldName: 'ADX+DI_9|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_15: new BaseField('ADX_PLUS_DI_9_15', {
    label: 'Adx+di 9|15',
    fieldName: 'ADX+DI_9|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_1M: new BaseField('ADX_PLUS_DI_9_1M', {
    label: 'Adx+di 9|1m',
    fieldName: 'ADX+DI_9|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_1W: new BaseField('ADX_PLUS_DI_9_1W', {
    label: 'Adx+di 9|1w',
    fieldName: 'ADX+DI_9|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_1_1: new BaseField('ADX_PLUS_DI_9_1_1', {
    label: 'Adx+di 9[1]|1',
    fieldName: 'ADX+DI_9[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_1_120: new BaseField('ADX_PLUS_DI_9_1_120', {
    label: 'Adx+di 9[1]|120',
    fieldName: 'ADX+DI_9[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_1_15: new BaseField('ADX_PLUS_DI_9_1_15', {
    label: 'Adx+di 9[1]|15',
    fieldName: 'ADX+DI_9[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_1_1M: new BaseField('ADX_PLUS_DI_9_1_1M', {
    label: 'Adx+di 9[1]|1m',
    fieldName: 'ADX+DI_9[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_1_1W: new BaseField('ADX_PLUS_DI_9_1_1W', {
    label: 'Adx+di 9[1]|1w',
    fieldName: 'ADX+DI_9[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_1_2: new BaseField('ADX_PLUS_DI_9_1_2', {
    label: 'Adx+di 9|1',
    fieldName: 'ADX+DI_9|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_1_240: new BaseField('ADX_PLUS_DI_9_1_240', {
    label: 'Adx+di 9[1]|240',
    fieldName: 'ADX+DI_9[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_1_30: new BaseField('ADX_PLUS_DI_9_1_30', {
    label: 'Adx+di 9[1]|30',
    fieldName: 'ADX+DI_9[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_1_5: new BaseField('ADX_PLUS_DI_9_1_5', {
    label: 'Adx+di 9[1]|5',
    fieldName: 'ADX+DI_9[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_1_60: new BaseField('ADX_PLUS_DI_9_1_60', {
    label: 'Adx+di 9[1]|60',
    fieldName: 'ADX+DI_9[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_240: new BaseField('ADX_PLUS_DI_9_240', {
    label: 'Adx+di 9|240',
    fieldName: 'ADX+DI_9|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_30: new BaseField('ADX_PLUS_DI_9_30', {
    label: 'Adx+di 9|30',
    fieldName: 'ADX+DI_9|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_5: new BaseField('ADX_PLUS_DI_9_5', {
    label: 'Adx+di 9|5',
    fieldName: 'ADX+DI_9|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADX_PLUS_DI_9_60: new BaseField('ADX_PLUS_DI_9_60', {
    label: 'Adx+di 9|60',
    fieldName: 'ADX+DI_9|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  // === Technical Indicators - Ichimoku (89 fields) ===

  ICHIMOKU_BASE_LINE_9_26_52_26: new BaseField('ICHIMOKU_BASE_LINE_9_26_52_26', {
    label: 'Ichimoku Base Line (9, 26, 52, 26)',
    fieldName: 'Ichimoku.BLine',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_1: new BaseField('ICHIMOKU_BLINE_1', {
    label: 'Ichimoku Bline|1',
    fieldName: 'Ichimoku.BLine|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_120: new BaseField('ICHIMOKU_BLINE_120', {
    label: 'Ichimoku Bline|120',
    fieldName: 'Ichimoku.BLine|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_15: new BaseField('ICHIMOKU_BLINE_15', {
    label: 'Ichimoku Bline|15',
    fieldName: 'Ichimoku.BLine|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_1M: new BaseField('ICHIMOKU_BLINE_1M', {
    label: 'Ichimoku Bline|1m',
    fieldName: 'Ichimoku.BLine|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_1W: new BaseField('ICHIMOKU_BLINE_1W', {
    label: 'Ichimoku Bline|1w',
    fieldName: 'Ichimoku.BLine|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30: new BaseField('ICHIMOKU_BLINE_20_60_120_30', {
    label: 'Ichimoku Bline 20 60 120 30',
    fieldName: 'Ichimoku.BLine_20_60_120_30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_1: new BaseField('ICHIMOKU_BLINE_20_60_120_30_1', {
    label: 'Ichimoku Bline 20 60 120 30|1',
    fieldName: 'Ichimoku.BLine_20_60_120_30|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_120: new BaseField('ICHIMOKU_BLINE_20_60_120_30_120', {
    label: 'Ichimoku Bline 20 60 120 30|120',
    fieldName: 'Ichimoku.BLine_20_60_120_30|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_15: new BaseField('ICHIMOKU_BLINE_20_60_120_30_15', {
    label: 'Ichimoku Bline 20 60 120 30|15',
    fieldName: 'Ichimoku.BLine_20_60_120_30|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_1M: new BaseField('ICHIMOKU_BLINE_20_60_120_30_1M', {
    label: 'Ichimoku Bline 20 60 120 30|1m',
    fieldName: 'Ichimoku.BLine_20_60_120_30|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_1W: new BaseField('ICHIMOKU_BLINE_20_60_120_30_1W', {
    label: 'Ichimoku Bline 20 60 120 30|1w',
    fieldName: 'Ichimoku.BLine_20_60_120_30|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_240: new BaseField('ICHIMOKU_BLINE_20_60_120_30_240', {
    label: 'Ichimoku Bline 20 60 120 30|240',
    fieldName: 'Ichimoku.BLine_20_60_120_30|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_30: new BaseField('ICHIMOKU_BLINE_20_60_120_30_30', {
    label: 'Ichimoku Bline 20 60 120 30|30',
    fieldName: 'Ichimoku.BLine_20_60_120_30|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_5: new BaseField('ICHIMOKU_BLINE_20_60_120_30_5', {
    label: 'Ichimoku Bline 20 60 120 30|5',
    fieldName: 'Ichimoku.BLine_20_60_120_30|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_20_60_120_30_60: new BaseField('ICHIMOKU_BLINE_20_60_120_30_60', {
    label: 'Ichimoku Bline 20 60 120 30|60',
    fieldName: 'Ichimoku.BLine_20_60_120_30|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_240: new BaseField('ICHIMOKU_BLINE_240', {
    label: 'Ichimoku Bline|240',
    fieldName: 'Ichimoku.BLine|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_30: new BaseField('ICHIMOKU_BLINE_30', {
    label: 'Ichimoku Bline|30',
    fieldName: 'Ichimoku.BLine|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_5: new BaseField('ICHIMOKU_BLINE_5', {
    label: 'Ichimoku Bline|5',
    fieldName: 'Ichimoku.BLine|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_BLINE_60: new BaseField('ICHIMOKU_BLINE_60', {
    label: 'Ichimoku Bline|60',
    fieldName: 'Ichimoku.BLine|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_1: new BaseField('ICHIMOKU_CLINE_1', {
    label: 'Ichimoku Cline|1',
    fieldName: 'Ichimoku.CLine|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_120: new BaseField('ICHIMOKU_CLINE_120', {
    label: 'Ichimoku Cline|120',
    fieldName: 'Ichimoku.CLine|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_15: new BaseField('ICHIMOKU_CLINE_15', {
    label: 'Ichimoku Cline|15',
    fieldName: 'Ichimoku.CLine|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_1M: new BaseField('ICHIMOKU_CLINE_1M', {
    label: 'Ichimoku Cline|1m',
    fieldName: 'Ichimoku.CLine|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_1W: new BaseField('ICHIMOKU_CLINE_1W', {
    label: 'Ichimoku Cline|1w',
    fieldName: 'Ichimoku.CLine|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30: new BaseField('ICHIMOKU_CLINE_20_60_120_30', {
    label: 'Ichimoku Cline 20 60 120 30',
    fieldName: 'Ichimoku.CLine_20_60_120_30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_1: new BaseField('ICHIMOKU_CLINE_20_60_120_30_1', {
    label: 'Ichimoku Cline 20 60 120 30|1',
    fieldName: 'Ichimoku.CLine_20_60_120_30|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_120: new BaseField('ICHIMOKU_CLINE_20_60_120_30_120', {
    label: 'Ichimoku Cline 20 60 120 30|120',
    fieldName: 'Ichimoku.CLine_20_60_120_30|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_15: new BaseField('ICHIMOKU_CLINE_20_60_120_30_15', {
    label: 'Ichimoku Cline 20 60 120 30|15',
    fieldName: 'Ichimoku.CLine_20_60_120_30|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_1M: new BaseField('ICHIMOKU_CLINE_20_60_120_30_1M', {
    label: 'Ichimoku Cline 20 60 120 30|1m',
    fieldName: 'Ichimoku.CLine_20_60_120_30|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_1W: new BaseField('ICHIMOKU_CLINE_20_60_120_30_1W', {
    label: 'Ichimoku Cline 20 60 120 30|1w',
    fieldName: 'Ichimoku.CLine_20_60_120_30|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_240: new BaseField('ICHIMOKU_CLINE_20_60_120_30_240', {
    label: 'Ichimoku Cline 20 60 120 30|240',
    fieldName: 'Ichimoku.CLine_20_60_120_30|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_30: new BaseField('ICHIMOKU_CLINE_20_60_120_30_30', {
    label: 'Ichimoku Cline 20 60 120 30|30',
    fieldName: 'Ichimoku.CLine_20_60_120_30|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_5: new BaseField('ICHIMOKU_CLINE_20_60_120_30_5', {
    label: 'Ichimoku Cline 20 60 120 30|5',
    fieldName: 'Ichimoku.CLine_20_60_120_30|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_20_60_120_30_60: new BaseField('ICHIMOKU_CLINE_20_60_120_30_60', {
    label: 'Ichimoku Cline 20 60 120 30|60',
    fieldName: 'Ichimoku.CLine_20_60_120_30|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_240: new BaseField('ICHIMOKU_CLINE_240', {
    label: 'Ichimoku Cline|240',
    fieldName: 'Ichimoku.CLine|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_30: new BaseField('ICHIMOKU_CLINE_30', {
    label: 'Ichimoku Cline|30',
    fieldName: 'Ichimoku.CLine|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_5: new BaseField('ICHIMOKU_CLINE_5', {
    label: 'Ichimoku Cline|5',
    fieldName: 'Ichimoku.CLine|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_CLINE_60: new BaseField('ICHIMOKU_CLINE_60', {
    label: 'Ichimoku Cline|60',
    fieldName: 'Ichimoku.CLine|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_1: new BaseField('ICHIMOKU_LEAD1_1', {
    label: 'Ichimoku Lead1|1',
    fieldName: 'Ichimoku.Lead1|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_120: new BaseField('ICHIMOKU_LEAD1_120', {
    label: 'Ichimoku Lead1|120',
    fieldName: 'Ichimoku.Lead1|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_15: new BaseField('ICHIMOKU_LEAD1_15', {
    label: 'Ichimoku Lead1|15',
    fieldName: 'Ichimoku.Lead1|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_1M: new BaseField('ICHIMOKU_LEAD1_1M', {
    label: 'Ichimoku Lead1|1m',
    fieldName: 'Ichimoku.Lead1|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_1W: new BaseField('ICHIMOKU_LEAD1_1W', {
    label: 'Ichimoku Lead1|1w',
    fieldName: 'Ichimoku.Lead1|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30: new BaseField('ICHIMOKU_LEAD1_20_60_120_30', {
    label: 'Ichimoku Lead1 20 60 120 30',
    fieldName: 'Ichimoku.Lead1_20_60_120_30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_1: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_1', {
    label: 'Ichimoku Lead1 20 60 120 30|1',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_120: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_120', {
    label: 'Ichimoku Lead1 20 60 120 30|120',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_15: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_15', {
    label: 'Ichimoku Lead1 20 60 120 30|15',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_1M: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_1M', {
    label: 'Ichimoku Lead1 20 60 120 30|1m',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_1W: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_1W', {
    label: 'Ichimoku Lead1 20 60 120 30|1w',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_240: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_240', {
    label: 'Ichimoku Lead1 20 60 120 30|240',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_30: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_30', {
    label: 'Ichimoku Lead1 20 60 120 30|30',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_5: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_5', {
    label: 'Ichimoku Lead1 20 60 120 30|5',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_20_60_120_30_60: new BaseField('ICHIMOKU_LEAD1_20_60_120_30_60', {
    label: 'Ichimoku Lead1 20 60 120 30|60',
    fieldName: 'Ichimoku.Lead1_20_60_120_30|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_240: new BaseField('ICHIMOKU_LEAD1_240', {
    label: 'Ichimoku Lead1|240',
    fieldName: 'Ichimoku.Lead1|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_30: new BaseField('ICHIMOKU_LEAD1_30', {
    label: 'Ichimoku Lead1|30',
    fieldName: 'Ichimoku.Lead1|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_5: new BaseField('ICHIMOKU_LEAD1_5', {
    label: 'Ichimoku Lead1|5',
    fieldName: 'Ichimoku.Lead1|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD1_60: new BaseField('ICHIMOKU_LEAD1_60', {
    label: 'Ichimoku Lead1|60',
    fieldName: 'Ichimoku.Lead1|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_1: new BaseField('ICHIMOKU_LEAD2_1', {
    label: 'Ichimoku Lead2|1',
    fieldName: 'Ichimoku.Lead2|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_120: new BaseField('ICHIMOKU_LEAD2_120', {
    label: 'Ichimoku Lead2|120',
    fieldName: 'Ichimoku.Lead2|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_15: new BaseField('ICHIMOKU_LEAD2_15', {
    label: 'Ichimoku Lead2|15',
    fieldName: 'Ichimoku.Lead2|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_1M: new BaseField('ICHIMOKU_LEAD2_1M', {
    label: 'Ichimoku Lead2|1m',
    fieldName: 'Ichimoku.Lead2|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_1W: new BaseField('ICHIMOKU_LEAD2_1W', {
    label: 'Ichimoku Lead2|1w',
    fieldName: 'Ichimoku.Lead2|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30: new BaseField('ICHIMOKU_LEAD2_20_60_120_30', {
    label: 'Ichimoku Lead2 20 60 120 30',
    fieldName: 'Ichimoku.Lead2_20_60_120_30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_1: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_1', {
    label: 'Ichimoku Lead2 20 60 120 30|1',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_120: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_120', {
    label: 'Ichimoku Lead2 20 60 120 30|120',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_15: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_15', {
    label: 'Ichimoku Lead2 20 60 120 30|15',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_1M: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_1M', {
    label: 'Ichimoku Lead2 20 60 120 30|1m',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_1W: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_1W', {
    label: 'Ichimoku Lead2 20 60 120 30|1w',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_240: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_240', {
    label: 'Ichimoku Lead2 20 60 120 30|240',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_30: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_30', {
    label: 'Ichimoku Lead2 20 60 120 30|30',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_5: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_5', {
    label: 'Ichimoku Lead2 20 60 120 30|5',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_20_60_120_30_60: new BaseField('ICHIMOKU_LEAD2_20_60_120_30_60', {
    label: 'Ichimoku Lead2 20 60 120 30|60',
    fieldName: 'Ichimoku.Lead2_20_60_120_30|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_240: new BaseField('ICHIMOKU_LEAD2_240', {
    label: 'Ichimoku Lead2|240',
    fieldName: 'Ichimoku.Lead2|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_30: new BaseField('ICHIMOKU_LEAD2_30', {
    label: 'Ichimoku Lead2|30',
    fieldName: 'Ichimoku.Lead2|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_5: new BaseField('ICHIMOKU_LEAD2_5', {
    label: 'Ichimoku Lead2|5',
    fieldName: 'Ichimoku.Lead2|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEAD2_60: new BaseField('ICHIMOKU_LEAD2_60', {
    label: 'Ichimoku Lead2|60',
    fieldName: 'Ichimoku.Lead2|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEADING_SPAN_A_9_26_52_26: new BaseField('ICHIMOKU_LEADING_SPAN_A_9_26_52_26', {
    label: 'Ichimoku Leading Span A (9, 26, 52, 26)',
    fieldName: 'Ichimoku.Lead1',
    format: 'float',
    interval: true,
    historical: false,
  }),

  ICHIMOKU_LEADING_SPAN_B_9_26_52_26: new BaseField('ICHIMOKU_LEADING_SPAN_B_9_26_52_26', {
    label: 'Ichimoku Leading Span B (9, 26, 52, 26)',
    fieldName: 'Ichimoku.Lead2',
    format: 'float',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU: new BaseField('REC_ICHIMOKU', {
    label: 'Rec Ichimoku',
    fieldName: 'Rec.Ichimoku',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_1: new BaseField('REC_ICHIMOKU_1', {
    label: 'Rec Ichimoku|1',
    fieldName: 'Rec.Ichimoku|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_120: new BaseField('REC_ICHIMOKU_120', {
    label: 'Rec Ichimoku|120',
    fieldName: 'Rec.Ichimoku|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_15: new BaseField('REC_ICHIMOKU_15', {
    label: 'Rec Ichimoku|15',
    fieldName: 'Rec.Ichimoku|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_1M: new BaseField('REC_ICHIMOKU_1M', {
    label: 'Rec Ichimoku|1m',
    fieldName: 'Rec.Ichimoku|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_1W: new BaseField('REC_ICHIMOKU_1W', {
    label: 'Rec Ichimoku|1w',
    fieldName: 'Rec.Ichimoku|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_240: new BaseField('REC_ICHIMOKU_240', {
    label: 'Rec Ichimoku|240',
    fieldName: 'Rec.Ichimoku|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_30: new BaseField('REC_ICHIMOKU_30', {
    label: 'Rec Ichimoku|30',
    fieldName: 'Rec.Ichimoku|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_5: new BaseField('REC_ICHIMOKU_5', {
    label: 'Rec Ichimoku|5',
    fieldName: 'Rec.Ichimoku|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_ICHIMOKU_60: new BaseField('REC_ICHIMOKU_60', {
    label: 'Rec Ichimoku|60',
    fieldName: 'Rec.Ichimoku|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  // === Technical Indicators - Other (296 fields) ===

  AO_1: new BaseField('AO_1', {
    label: 'Ao[1]',
    fieldName: 'AO[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_120: new BaseField('AO_120', {
    label: 'Ao|120',
    fieldName: 'AO|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_15: new BaseField('AO_15', {
    label: 'Ao|15',
    fieldName: 'AO|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_1M: new BaseField('AO_1M', {
    label: 'Ao|1m',
    fieldName: 'AO|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_1W: new BaseField('AO_1W', {
    label: 'Ao|1w',
    fieldName: 'AO|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_1_1: new BaseField('AO_1_1', {
    label: 'Ao[1]|1',
    fieldName: 'AO[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_1_120: new BaseField('AO_1_120', {
    label: 'Ao[1]|120',
    fieldName: 'AO[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_1_15: new BaseField('AO_1_15', {
    label: 'Ao[1]|15',
    fieldName: 'AO[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_1_1M: new BaseField('AO_1_1M', {
    label: 'Ao[1]|1m',
    fieldName: 'AO[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_1_1W: new BaseField('AO_1_1W', {
    label: 'Ao[1]|1w',
    fieldName: 'AO[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_1_2: new BaseField('AO_1_2', {
    label: 'Ao|1',
    fieldName: 'AO|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_1_240: new BaseField('AO_1_240', {
    label: 'Ao[1]|240',
    fieldName: 'AO[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_1_30: new BaseField('AO_1_30', {
    label: 'Ao[1]|30',
    fieldName: 'AO[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_1_5: new BaseField('AO_1_5', {
    label: 'Ao[1]|5',
    fieldName: 'AO[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_1_60: new BaseField('AO_1_60', {
    label: 'Ao[1]|60',
    fieldName: 'AO[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_2: new BaseField('AO_2', {
    label: 'Ao[2]',
    fieldName: 'AO[2]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_240: new BaseField('AO_240', {
    label: 'Ao|240',
    fieldName: 'AO|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_2_1: new BaseField('AO_2_1', {
    label: 'Ao[2]|1',
    fieldName: 'AO[2]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_2_120: new BaseField('AO_2_120', {
    label: 'Ao[2]|120',
    fieldName: 'AO[2]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_2_15: new BaseField('AO_2_15', {
    label: 'Ao[2]|15',
    fieldName: 'AO[2]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_2_1M: new BaseField('AO_2_1M', {
    label: 'Ao[2]|1m',
    fieldName: 'AO[2]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_2_1W: new BaseField('AO_2_1W', {
    label: 'Ao[2]|1w',
    fieldName: 'AO[2]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_2_240: new BaseField('AO_2_240', {
    label: 'Ao[2]|240',
    fieldName: 'AO[2]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_2_30: new BaseField('AO_2_30', {
    label: 'Ao[2]|30',
    fieldName: 'AO[2]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_2_5: new BaseField('AO_2_5', {
    label: 'Ao[2]|5',
    fieldName: 'AO[2]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_2_60: new BaseField('AO_2_60', {
    label: 'Ao[2]|60',
    fieldName: 'AO[2]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_30: new BaseField('AO_30', {
    label: 'Ao|30',
    fieldName: 'AO|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_5: new BaseField('AO_5', {
    label: 'Ao|5',
    fieldName: 'AO|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AO_60: new BaseField('AO_60', {
    label: 'Ao|60',
    fieldName: 'AO|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_1: new BaseField('AROON_DOWN_1', {
    label: 'Aroon Down|1',
    fieldName: 'Aroon.Down|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_120: new BaseField('AROON_DOWN_120', {
    label: 'Aroon Down|120',
    fieldName: 'Aroon.Down|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_14: new BaseField('AROON_DOWN_14', {
    label: 'Aroon Down (14)',
    fieldName: 'Aroon.Down',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_15: new BaseField('AROON_DOWN_15', {
    label: 'Aroon Down|15',
    fieldName: 'Aroon.Down|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_1M: new BaseField('AROON_DOWN_1M', {
    label: 'Aroon Down|1m',
    fieldName: 'Aroon.Down|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_1W: new BaseField('AROON_DOWN_1W', {
    label: 'Aroon Down|1w',
    fieldName: 'Aroon.Down|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_240: new BaseField('AROON_DOWN_240', {
    label: 'Aroon Down|240',
    fieldName: 'Aroon.Down|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_30: new BaseField('AROON_DOWN_30', {
    label: 'Aroon Down|30',
    fieldName: 'Aroon.Down|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_5: new BaseField('AROON_DOWN_5', {
    label: 'Aroon Down|5',
    fieldName: 'Aroon.Down|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_DOWN_60: new BaseField('AROON_DOWN_60', {
    label: 'Aroon Down|60',
    fieldName: 'Aroon.Down|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_UP_1: new BaseField('AROON_UP_1', {
    label: 'Aroon Up|1',
    fieldName: 'Aroon.Up|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_UP_120: new BaseField('AROON_UP_120', {
    label: 'Aroon Up|120',
    fieldName: 'Aroon.Up|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_UP_14: new BaseField('AROON_UP_14', {
    label: 'Aroon Up (14)',
    fieldName: 'Aroon.Up',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_UP_15: new BaseField('AROON_UP_15', {
    label: 'Aroon Up|15',
    fieldName: 'Aroon.Up|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_UP_1M: new BaseField('AROON_UP_1M', {
    label: 'Aroon Up|1m',
    fieldName: 'Aroon.Up|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_UP_1W: new BaseField('AROON_UP_1W', {
    label: 'Aroon Up|1w',
    fieldName: 'Aroon.Up|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_UP_240: new BaseField('AROON_UP_240', {
    label: 'Aroon Up|240',
    fieldName: 'Aroon.Up|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_UP_30: new BaseField('AROON_UP_30', {
    label: 'Aroon Up|30',
    fieldName: 'Aroon.Up|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_UP_5: new BaseField('AROON_UP_5', {
    label: 'Aroon Up|5',
    fieldName: 'Aroon.Up|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AROON_UP_60: new BaseField('AROON_UP_60', {
    label: 'Aroon Up|60',
    fieldName: 'Aroon.Up|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATRP: new BaseField('ATRP', {
    label: 'Average True Range % (14)',
    fieldName: 'ATRP',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  ATRP_1: new BaseField('ATRP_1', {
    label: 'Atrp|1',
    fieldName: 'ATRP|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATRP_120: new BaseField('ATRP_120', {
    label: 'Atrp|120',
    fieldName: 'ATRP|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATRP_15: new BaseField('ATRP_15', {
    label: 'Atrp|15',
    fieldName: 'ATRP|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATRP_1M: new BaseField('ATRP_1M', {
    label: 'Atrp|1m',
    fieldName: 'ATRP|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATRP_1W: new BaseField('ATRP_1W', {
    label: 'Atrp|1w',
    fieldName: 'ATRP|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATRP_240: new BaseField('ATRP_240', {
    label: 'Atrp|240',
    fieldName: 'ATRP|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATRP_30: new BaseField('ATRP_30', {
    label: 'Atrp|30',
    fieldName: 'ATRP|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATRP_5: new BaseField('ATRP_5', {
    label: 'Atrp|5',
    fieldName: 'ATRP|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATRP_60: new BaseField('ATRP_60', {
    label: 'Atrp|60',
    fieldName: 'ATRP|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATR_1: new BaseField('ATR_1', {
    label: 'Atr|1',
    fieldName: 'ATR|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATR_120: new BaseField('ATR_120', {
    label: 'Atr|120',
    fieldName: 'ATR|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATR_15: new BaseField('ATR_15', {
    label: 'Atr|15',
    fieldName: 'ATR|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATR_1M: new BaseField('ATR_1M', {
    label: 'Atr|1m',
    fieldName: 'ATR|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATR_1W: new BaseField('ATR_1W', {
    label: 'Atr|1w',
    fieldName: 'ATR|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATR_240: new BaseField('ATR_240', {
    label: 'Atr|240',
    fieldName: 'ATR|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATR_30: new BaseField('ATR_30', {
    label: 'Atr|30',
    fieldName: 'ATR|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATR_5: new BaseField('ATR_5', {
    label: 'Atr|5',
    fieldName: 'ATR|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ATR_60: new BaseField('ATR_60', {
    label: 'Atr|60',
    fieldName: 'ATR|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_1: new BaseField('CCI20_1', {
    label: 'Cci20[1]',
    fieldName: 'CCI20[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_120: new BaseField('CCI20_120', {
    label: 'Cci20|120',
    fieldName: 'CCI20|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_15: new BaseField('CCI20_15', {
    label: 'Cci20|15',
    fieldName: 'CCI20|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_1M: new BaseField('CCI20_1M', {
    label: 'Cci20|1m',
    fieldName: 'CCI20|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_1W: new BaseField('CCI20_1W', {
    label: 'Cci20|1w',
    fieldName: 'CCI20|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_1_1: new BaseField('CCI20_1_1', {
    label: 'Cci20[1]|1',
    fieldName: 'CCI20[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_1_120: new BaseField('CCI20_1_120', {
    label: 'Cci20[1]|120',
    fieldName: 'CCI20[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_1_15: new BaseField('CCI20_1_15', {
    label: 'Cci20[1]|15',
    fieldName: 'CCI20[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_1_1M: new BaseField('CCI20_1_1M', {
    label: 'Cci20[1]|1m',
    fieldName: 'CCI20[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_1_1W: new BaseField('CCI20_1_1W', {
    label: 'Cci20[1]|1w',
    fieldName: 'CCI20[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_1_2: new BaseField('CCI20_1_2', {
    label: 'Cci20|1',
    fieldName: 'CCI20|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_1_240: new BaseField('CCI20_1_240', {
    label: 'Cci20[1]|240',
    fieldName: 'CCI20[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_1_30: new BaseField('CCI20_1_30', {
    label: 'Cci20[1]|30',
    fieldName: 'CCI20[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_1_5: new BaseField('CCI20_1_5', {
    label: 'Cci20[1]|5',
    fieldName: 'CCI20[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_1_60: new BaseField('CCI20_1_60', {
    label: 'Cci20[1]|60',
    fieldName: 'CCI20[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_240: new BaseField('CCI20_240', {
    label: 'Cci20|240',
    fieldName: 'CCI20|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_30: new BaseField('CCI20_30', {
    label: 'Cci20|30',
    fieldName: 'CCI20|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_5: new BaseField('CCI20_5', {
    label: 'Cci20|5',
    fieldName: 'CCI20|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CCI20_60: new BaseField('CCI20_60', {
    label: 'Cci20|60',
    fieldName: 'CCI20|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CONTINUOUS_DIVIDEND_GROWTH: new BaseField('CONTINUOUS_DIVIDEND_GROWTH', {
    label: 'Continuous Dividend Growth',
    fieldName: 'continuous_dividend_growth',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CONTINUOUS_DIVIDEND_PAYOUT: new BaseField('CONTINUOUS_DIVIDEND_PAYOUT', {
    label: 'Continuous Dividend Payout',
    fieldName: 'continuous_dividend_payout',
    format: 'round',
    interval: false,
    historical: false,
  }),

  DONCHCH20_MIDDLE: new BaseField('DONCHCH20_MIDDLE', {
    label: 'Donchch20 Middle',
    fieldName: 'DonchCh20.Middle',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_1: new BaseField('DONCHCH20_MIDDLE_1', {
    label: 'Donchch20 Middle|1',
    fieldName: 'DonchCh20.Middle|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_120: new BaseField('DONCHCH20_MIDDLE_120', {
    label: 'Donchch20 Middle|120',
    fieldName: 'DonchCh20.Middle|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_15: new BaseField('DONCHCH20_MIDDLE_15', {
    label: 'Donchch20 Middle|15',
    fieldName: 'DonchCh20.Middle|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_1M: new BaseField('DONCHCH20_MIDDLE_1M', {
    label: 'Donchch20 Middle|1m',
    fieldName: 'DonchCh20.Middle|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_1W: new BaseField('DONCHCH20_MIDDLE_1W', {
    label: 'Donchch20 Middle|1w',
    fieldName: 'DonchCh20.Middle|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_240: new BaseField('DONCHCH20_MIDDLE_240', {
    label: 'Donchch20 Middle|240',
    fieldName: 'DonchCh20.Middle|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_30: new BaseField('DONCHCH20_MIDDLE_30', {
    label: 'Donchch20 Middle|30',
    fieldName: 'DonchCh20.Middle|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_5: new BaseField('DONCHCH20_MIDDLE_5', {
    label: 'Donchch20 Middle|5',
    fieldName: 'DonchCh20.Middle|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_MIDDLE_60: new BaseField('DONCHCH20_MIDDLE_60', {
    label: 'Donchch20 Middle|60',
    fieldName: 'DonchCh20.Middle|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_1: new BaseField('DONCHCH20_UPPER_1', {
    label: 'Donchch20 Upper|1',
    fieldName: 'DonchCh20.Upper|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_120: new BaseField('DONCHCH20_UPPER_120', {
    label: 'Donchch20 Upper|120',
    fieldName: 'DonchCh20.Upper|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_15: new BaseField('DONCHCH20_UPPER_15', {
    label: 'Donchch20 Upper|15',
    fieldName: 'DonchCh20.Upper|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_1M: new BaseField('DONCHCH20_UPPER_1M', {
    label: 'Donchch20 Upper|1m',
    fieldName: 'DonchCh20.Upper|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_1W: new BaseField('DONCHCH20_UPPER_1W', {
    label: 'Donchch20 Upper|1w',
    fieldName: 'DonchCh20.Upper|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_240: new BaseField('DONCHCH20_UPPER_240', {
    label: 'Donchch20 Upper|240',
    fieldName: 'DonchCh20.Upper|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_30: new BaseField('DONCHCH20_UPPER_30', {
    label: 'Donchch20 Upper|30',
    fieldName: 'DonchCh20.Upper|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_5: new BaseField('DONCHCH20_UPPER_5', {
    label: 'Donchch20 Upper|5',
    fieldName: 'DonchCh20.Upper|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHCH20_UPPER_60: new BaseField('DONCHCH20_UPPER_60', {
    label: 'Donchch20 Upper|60',
    fieldName: 'DonchCh20.Upper|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  DONCHIAN_CHANNELS_UPPER_BAND_20: new BaseField('DONCHIAN_CHANNELS_UPPER_BAND_20', {
    label: 'Donchian Channels Upper Band (20)',
    fieldName: 'DonchCh20.Upper',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA20: new BaseField('HULLMA20', {
    label: 'Hullma20',
    fieldName: 'HullMA20',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA200: new BaseField('HULLMA200', {
    label: 'Hullma200',
    fieldName: 'HullMA200',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA200_1: new BaseField('HULLMA200_1', {
    label: 'Hullma200|1',
    fieldName: 'HullMA200|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA200_120: new BaseField('HULLMA200_120', {
    label: 'Hullma200|120',
    fieldName: 'HullMA200|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA200_15: new BaseField('HULLMA200_15', {
    label: 'Hullma200|15',
    fieldName: 'HullMA200|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA200_1M: new BaseField('HULLMA200_1M', {
    label: 'Hullma200|1m',
    fieldName: 'HullMA200|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA200_1W: new BaseField('HULLMA200_1W', {
    label: 'Hullma200|1w',
    fieldName: 'HullMA200|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA200_240: new BaseField('HULLMA200_240', {
    label: 'Hullma200|240',
    fieldName: 'HullMA200|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA200_30: new BaseField('HULLMA200_30', {
    label: 'Hullma200|30',
    fieldName: 'HullMA200|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA200_5: new BaseField('HULLMA200_5', {
    label: 'Hullma200|5',
    fieldName: 'HullMA200|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA200_60: new BaseField('HULLMA200_60', {
    label: 'Hullma200|60',
    fieldName: 'HullMA200|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA20_1: new BaseField('HULLMA20_1', {
    label: 'Hullma20|1',
    fieldName: 'HullMA20|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA20_120: new BaseField('HULLMA20_120', {
    label: 'Hullma20|120',
    fieldName: 'HullMA20|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA20_15: new BaseField('HULLMA20_15', {
    label: 'Hullma20|15',
    fieldName: 'HullMA20|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA20_1M: new BaseField('HULLMA20_1M', {
    label: 'Hullma20|1m',
    fieldName: 'HullMA20|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA20_1W: new BaseField('HULLMA20_1W', {
    label: 'Hullma20|1w',
    fieldName: 'HullMA20|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA20_240: new BaseField('HULLMA20_240', {
    label: 'Hullma20|240',
    fieldName: 'HullMA20|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA20_30: new BaseField('HULLMA20_30', {
    label: 'Hullma20|30',
    fieldName: 'HullMA20|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA20_5: new BaseField('HULLMA20_5', {
    label: 'Hullma20|5',
    fieldName: 'HullMA20|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA20_60: new BaseField('HULLMA20_60', {
    label: 'Hullma20|60',
    fieldName: 'HullMA20|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA9_1: new BaseField('HULLMA9_1', {
    label: 'Hullma9|1',
    fieldName: 'HullMA9|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA9_120: new BaseField('HULLMA9_120', {
    label: 'Hullma9|120',
    fieldName: 'HullMA9|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA9_15: new BaseField('HULLMA9_15', {
    label: 'Hullma9|15',
    fieldName: 'HullMA9|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA9_1M: new BaseField('HULLMA9_1M', {
    label: 'Hullma9|1m',
    fieldName: 'HullMA9|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA9_1W: new BaseField('HULLMA9_1W', {
    label: 'Hullma9|1w',
    fieldName: 'HullMA9|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA9_240: new BaseField('HULLMA9_240', {
    label: 'Hullma9|240',
    fieldName: 'HullMA9|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA9_30: new BaseField('HULLMA9_30', {
    label: 'Hullma9|30',
    fieldName: 'HullMA9|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA9_5: new BaseField('HULLMA9_5', {
    label: 'Hullma9|5',
    fieldName: 'HullMA9|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  HULLMA9_60: new BaseField('HULLMA9_60', {
    label: 'Hullma9|60',
    fieldName: 'HullMA9|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_1: new BaseField('KLTCHNL_UPPER_1', {
    label: 'Kltchnl Upper|1',
    fieldName: 'KltChnl.upper|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_120: new BaseField('KLTCHNL_UPPER_120', {
    label: 'Kltchnl Upper|120',
    fieldName: 'KltChnl.upper|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_15: new BaseField('KLTCHNL_UPPER_15', {
    label: 'Kltchnl Upper|15',
    fieldName: 'KltChnl.upper|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_1M: new BaseField('KLTCHNL_UPPER_1M', {
    label: 'Kltchnl Upper|1m',
    fieldName: 'KltChnl.upper|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_1W: new BaseField('KLTCHNL_UPPER_1W', {
    label: 'Kltchnl Upper|1w',
    fieldName: 'KltChnl.upper|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_240: new BaseField('KLTCHNL_UPPER_240', {
    label: 'Kltchnl Upper|240',
    fieldName: 'KltChnl.upper|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_30: new BaseField('KLTCHNL_UPPER_30', {
    label: 'Kltchnl Upper|30',
    fieldName: 'KltChnl.upper|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_5: new BaseField('KLTCHNL_UPPER_5', {
    label: 'Kltchnl Upper|5',
    fieldName: 'KltChnl.upper|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  KLTCHNL_UPPER_60: new BaseField('KLTCHNL_UPPER_60', {
    label: 'Kltchnl Upper|60',
    fieldName: 'KltChnl.upper|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOMENTUM_10: new BaseField('MOMENTUM_10', {
    label: 'Momentum (10)',
    fieldName: 'Mom',
    format: 'computed_recommendation',
    interval: true,
    historical: true,
  }),

  MOM_1: new BaseField('MOM_1', {
    label: 'Mom|1',
    fieldName: 'Mom|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_120: new BaseField('MOM_120', {
    label: 'Mom|120',
    fieldName: 'Mom|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14: new BaseField('MOM_14', {
    label: 'Mom 14',
    fieldName: 'Mom_14',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_1: new BaseField('MOM_14_1', {
    label: 'Mom 14[1]',
    fieldName: 'Mom_14[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_120: new BaseField('MOM_14_120', {
    label: 'Mom 14|120',
    fieldName: 'Mom_14|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_15: new BaseField('MOM_14_15', {
    label: 'Mom 14|15',
    fieldName: 'Mom_14|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_1M: new BaseField('MOM_14_1M', {
    label: 'Mom 14|1m',
    fieldName: 'Mom_14|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_1W: new BaseField('MOM_14_1W', {
    label: 'Mom 14|1w',
    fieldName: 'Mom_14|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_1_1: new BaseField('MOM_14_1_1', {
    label: 'Mom 14[1]|1',
    fieldName: 'Mom_14[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_1_120: new BaseField('MOM_14_1_120', {
    label: 'Mom 14[1]|120',
    fieldName: 'Mom_14[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_1_15: new BaseField('MOM_14_1_15', {
    label: 'Mom 14[1]|15',
    fieldName: 'Mom_14[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_1_1M: new BaseField('MOM_14_1_1M', {
    label: 'Mom 14[1]|1m',
    fieldName: 'Mom_14[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_1_1W: new BaseField('MOM_14_1_1W', {
    label: 'Mom 14[1]|1w',
    fieldName: 'Mom_14[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_1_2: new BaseField('MOM_14_1_2', {
    label: 'Mom 14|1',
    fieldName: 'Mom_14|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_1_240: new BaseField('MOM_14_1_240', {
    label: 'Mom 14[1]|240',
    fieldName: 'Mom_14[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_1_30: new BaseField('MOM_14_1_30', {
    label: 'Mom 14[1]|30',
    fieldName: 'Mom_14[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_1_5: new BaseField('MOM_14_1_5', {
    label: 'Mom 14[1]|5',
    fieldName: 'Mom_14[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_1_60: new BaseField('MOM_14_1_60', {
    label: 'Mom 14[1]|60',
    fieldName: 'Mom_14[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_240: new BaseField('MOM_14_240', {
    label: 'Mom 14|240',
    fieldName: 'Mom_14|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_30: new BaseField('MOM_14_30', {
    label: 'Mom 14|30',
    fieldName: 'Mom_14|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_5: new BaseField('MOM_14_5', {
    label: 'Mom 14|5',
    fieldName: 'Mom_14|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_14_60: new BaseField('MOM_14_60', {
    label: 'Mom 14|60',
    fieldName: 'Mom_14|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_15: new BaseField('MOM_15', {
    label: 'Mom|15',
    fieldName: 'Mom|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_1M: new BaseField('MOM_1M', {
    label: 'Mom|1m',
    fieldName: 'Mom|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_1W: new BaseField('MOM_1W', {
    label: 'Mom|1w',
    fieldName: 'Mom|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_1_1: new BaseField('MOM_1_1', {
    label: 'Mom[1]|1',
    fieldName: 'Mom[1]|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_1_120: new BaseField('MOM_1_120', {
    label: 'Mom[1]|120',
    fieldName: 'Mom[1]|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_1_15: new BaseField('MOM_1_15', {
    label: 'Mom[1]|15',
    fieldName: 'Mom[1]|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_1_1M: new BaseField('MOM_1_1M', {
    label: 'Mom[1]|1m',
    fieldName: 'Mom[1]|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_1_1W: new BaseField('MOM_1_1W', {
    label: 'Mom[1]|1w',
    fieldName: 'Mom[1]|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_1_2: new BaseField('MOM_1_2', {
    label: 'Mom[1]',
    fieldName: 'Mom[1]',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_1_240: new BaseField('MOM_1_240', {
    label: 'Mom[1]|240',
    fieldName: 'Mom[1]|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_1_30: new BaseField('MOM_1_30', {
    label: 'Mom[1]|30',
    fieldName: 'Mom[1]|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_1_5: new BaseField('MOM_1_5', {
    label: 'Mom[1]|5',
    fieldName: 'Mom[1]|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_1_60: new BaseField('MOM_1_60', {
    label: 'Mom[1]|60',
    fieldName: 'Mom[1]|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_240: new BaseField('MOM_240', {
    label: 'Mom|240',
    fieldName: 'Mom|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_30: new BaseField('MOM_30', {
    label: 'Mom|30',
    fieldName: 'Mom|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_5: new BaseField('MOM_5', {
    label: 'Mom|5',
    fieldName: 'Mom|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  MOM_60: new BaseField('MOM_60', {
    label: 'Mom|60',
    fieldName: 'Mom|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_FIBONACCI_P: new BaseField('PIVOT_FIBONACCI_P', {
    label: 'Pivot Fibonacci P',
    fieldName: 'Pivot.M.Fibonacci.Middle',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_FIBONACCI_R1: new BaseField('PIVOT_FIBONACCI_R1', {
    label: 'Pivot Fibonacci R1',
    fieldName: 'Pivot.M.Fibonacci.R1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_FIBONACCI_R2: new BaseField('PIVOT_FIBONACCI_R2', {
    label: 'Pivot Fibonacci R2',
    fieldName: 'Pivot.M.Fibonacci.R2',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_FIBONACCI_R3: new BaseField('PIVOT_FIBONACCI_R3', {
    label: 'Pivot Fibonacci R3',
    fieldName: 'Pivot.M.Fibonacci.R3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_FIBONACCI_S1: new BaseField('PIVOT_FIBONACCI_S1', {
    label: 'Pivot Fibonacci S1',
    fieldName: 'Pivot.M.Fibonacci.S1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_FIBONACCI_S2: new BaseField('PIVOT_FIBONACCI_S2', {
    label: 'Pivot Fibonacci S2',
    fieldName: 'Pivot.M.Fibonacci.S2',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_FIBONACCI_S3: new BaseField('PIVOT_FIBONACCI_S3', {
    label: 'Pivot Fibonacci S3',
    fieldName: 'Pivot.M.Fibonacci.S3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_1: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_1', {
    label: 'Pivot M Fibonacci Middle|1',
    fieldName: 'Pivot.M.Fibonacci.Middle|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_120: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_120', {
    label: 'Pivot M Fibonacci Middle|120',
    fieldName: 'Pivot.M.Fibonacci.Middle|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_15: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_15', {
    label: 'Pivot M Fibonacci Middle|15',
    fieldName: 'Pivot.M.Fibonacci.Middle|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_1M: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_1M', {
    label: 'Pivot M Fibonacci Middle|1m',
    fieldName: 'Pivot.M.Fibonacci.Middle|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_1W: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_1W', {
    label: 'Pivot M Fibonacci Middle|1w',
    fieldName: 'Pivot.M.Fibonacci.Middle|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_240: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_240', {
    label: 'Pivot M Fibonacci Middle|240',
    fieldName: 'Pivot.M.Fibonacci.Middle|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_30: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_30', {
    label: 'Pivot M Fibonacci Middle|30',
    fieldName: 'Pivot.M.Fibonacci.Middle|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_5: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_5', {
    label: 'Pivot M Fibonacci Middle|5',
    fieldName: 'Pivot.M.Fibonacci.Middle|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_MIDDLE_60: new BaseField('PIVOT_M_FIBONACCI_MIDDLE_60', {
    label: 'Pivot M Fibonacci Middle|60',
    fieldName: 'Pivot.M.Fibonacci.Middle|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R1_1: new BaseField('PIVOT_M_FIBONACCI_R1_1', {
    label: 'Pivot M Fibonacci R1|1',
    fieldName: 'Pivot.M.Fibonacci.R1|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R1_120: new BaseField('PIVOT_M_FIBONACCI_R1_120', {
    label: 'Pivot M Fibonacci R1|120',
    fieldName: 'Pivot.M.Fibonacci.R1|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R1_15: new BaseField('PIVOT_M_FIBONACCI_R1_15', {
    label: 'Pivot M Fibonacci R1|15',
    fieldName: 'Pivot.M.Fibonacci.R1|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R1_1M: new BaseField('PIVOT_M_FIBONACCI_R1_1M', {
    label: 'Pivot M Fibonacci R1|1m',
    fieldName: 'Pivot.M.Fibonacci.R1|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R1_1W: new BaseField('PIVOT_M_FIBONACCI_R1_1W', {
    label: 'Pivot M Fibonacci R1|1w',
    fieldName: 'Pivot.M.Fibonacci.R1|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R1_240: new BaseField('PIVOT_M_FIBONACCI_R1_240', {
    label: 'Pivot M Fibonacci R1|240',
    fieldName: 'Pivot.M.Fibonacci.R1|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R1_30: new BaseField('PIVOT_M_FIBONACCI_R1_30', {
    label: 'Pivot M Fibonacci R1|30',
    fieldName: 'Pivot.M.Fibonacci.R1|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R1_5: new BaseField('PIVOT_M_FIBONACCI_R1_5', {
    label: 'Pivot M Fibonacci R1|5',
    fieldName: 'Pivot.M.Fibonacci.R1|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R1_60: new BaseField('PIVOT_M_FIBONACCI_R1_60', {
    label: 'Pivot M Fibonacci R1|60',
    fieldName: 'Pivot.M.Fibonacci.R1|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R2_1: new BaseField('PIVOT_M_FIBONACCI_R2_1', {
    label: 'Pivot M Fibonacci R2|1',
    fieldName: 'Pivot.M.Fibonacci.R2|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R2_120: new BaseField('PIVOT_M_FIBONACCI_R2_120', {
    label: 'Pivot M Fibonacci R2|120',
    fieldName: 'Pivot.M.Fibonacci.R2|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R2_15: new BaseField('PIVOT_M_FIBONACCI_R2_15', {
    label: 'Pivot M Fibonacci R2|15',
    fieldName: 'Pivot.M.Fibonacci.R2|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R2_1M: new BaseField('PIVOT_M_FIBONACCI_R2_1M', {
    label: 'Pivot M Fibonacci R2|1m',
    fieldName: 'Pivot.M.Fibonacci.R2|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R2_1W: new BaseField('PIVOT_M_FIBONACCI_R2_1W', {
    label: 'Pivot M Fibonacci R2|1w',
    fieldName: 'Pivot.M.Fibonacci.R2|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R2_240: new BaseField('PIVOT_M_FIBONACCI_R2_240', {
    label: 'Pivot M Fibonacci R2|240',
    fieldName: 'Pivot.M.Fibonacci.R2|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R2_30: new BaseField('PIVOT_M_FIBONACCI_R2_30', {
    label: 'Pivot M Fibonacci R2|30',
    fieldName: 'Pivot.M.Fibonacci.R2|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R2_5: new BaseField('PIVOT_M_FIBONACCI_R2_5', {
    label: 'Pivot M Fibonacci R2|5',
    fieldName: 'Pivot.M.Fibonacci.R2|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R2_60: new BaseField('PIVOT_M_FIBONACCI_R2_60', {
    label: 'Pivot M Fibonacci R2|60',
    fieldName: 'Pivot.M.Fibonacci.R2|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R3_1: new BaseField('PIVOT_M_FIBONACCI_R3_1', {
    label: 'Pivot M Fibonacci R3|1',
    fieldName: 'Pivot.M.Fibonacci.R3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R3_120: new BaseField('PIVOT_M_FIBONACCI_R3_120', {
    label: 'Pivot M Fibonacci R3|120',
    fieldName: 'Pivot.M.Fibonacci.R3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R3_15: new BaseField('PIVOT_M_FIBONACCI_R3_15', {
    label: 'Pivot M Fibonacci R3|15',
    fieldName: 'Pivot.M.Fibonacci.R3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R3_1M: new BaseField('PIVOT_M_FIBONACCI_R3_1M', {
    label: 'Pivot M Fibonacci R3|1m',
    fieldName: 'Pivot.M.Fibonacci.R3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R3_1W: new BaseField('PIVOT_M_FIBONACCI_R3_1W', {
    label: 'Pivot M Fibonacci R3|1w',
    fieldName: 'Pivot.M.Fibonacci.R3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R3_240: new BaseField('PIVOT_M_FIBONACCI_R3_240', {
    label: 'Pivot M Fibonacci R3|240',
    fieldName: 'Pivot.M.Fibonacci.R3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R3_30: new BaseField('PIVOT_M_FIBONACCI_R3_30', {
    label: 'Pivot M Fibonacci R3|30',
    fieldName: 'Pivot.M.Fibonacci.R3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R3_5: new BaseField('PIVOT_M_FIBONACCI_R3_5', {
    label: 'Pivot M Fibonacci R3|5',
    fieldName: 'Pivot.M.Fibonacci.R3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_R3_60: new BaseField('PIVOT_M_FIBONACCI_R3_60', {
    label: 'Pivot M Fibonacci R3|60',
    fieldName: 'Pivot.M.Fibonacci.R3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S1_1: new BaseField('PIVOT_M_FIBONACCI_S1_1', {
    label: 'Pivot M Fibonacci S1|1',
    fieldName: 'Pivot.M.Fibonacci.S1|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S1_120: new BaseField('PIVOT_M_FIBONACCI_S1_120', {
    label: 'Pivot M Fibonacci S1|120',
    fieldName: 'Pivot.M.Fibonacci.S1|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S1_15: new BaseField('PIVOT_M_FIBONACCI_S1_15', {
    label: 'Pivot M Fibonacci S1|15',
    fieldName: 'Pivot.M.Fibonacci.S1|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S1_1M: new BaseField('PIVOT_M_FIBONACCI_S1_1M', {
    label: 'Pivot M Fibonacci S1|1m',
    fieldName: 'Pivot.M.Fibonacci.S1|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S1_1W: new BaseField('PIVOT_M_FIBONACCI_S1_1W', {
    label: 'Pivot M Fibonacci S1|1w',
    fieldName: 'Pivot.M.Fibonacci.S1|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S1_240: new BaseField('PIVOT_M_FIBONACCI_S1_240', {
    label: 'Pivot M Fibonacci S1|240',
    fieldName: 'Pivot.M.Fibonacci.S1|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S1_30: new BaseField('PIVOT_M_FIBONACCI_S1_30', {
    label: 'Pivot M Fibonacci S1|30',
    fieldName: 'Pivot.M.Fibonacci.S1|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S1_5: new BaseField('PIVOT_M_FIBONACCI_S1_5', {
    label: 'Pivot M Fibonacci S1|5',
    fieldName: 'Pivot.M.Fibonacci.S1|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S1_60: new BaseField('PIVOT_M_FIBONACCI_S1_60', {
    label: 'Pivot M Fibonacci S1|60',
    fieldName: 'Pivot.M.Fibonacci.S1|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S2_1: new BaseField('PIVOT_M_FIBONACCI_S2_1', {
    label: 'Pivot M Fibonacci S2|1',
    fieldName: 'Pivot.M.Fibonacci.S2|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S2_120: new BaseField('PIVOT_M_FIBONACCI_S2_120', {
    label: 'Pivot M Fibonacci S2|120',
    fieldName: 'Pivot.M.Fibonacci.S2|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S2_15: new BaseField('PIVOT_M_FIBONACCI_S2_15', {
    label: 'Pivot M Fibonacci S2|15',
    fieldName: 'Pivot.M.Fibonacci.S2|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S2_1M: new BaseField('PIVOT_M_FIBONACCI_S2_1M', {
    label: 'Pivot M Fibonacci S2|1m',
    fieldName: 'Pivot.M.Fibonacci.S2|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S2_1W: new BaseField('PIVOT_M_FIBONACCI_S2_1W', {
    label: 'Pivot M Fibonacci S2|1w',
    fieldName: 'Pivot.M.Fibonacci.S2|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S2_240: new BaseField('PIVOT_M_FIBONACCI_S2_240', {
    label: 'Pivot M Fibonacci S2|240',
    fieldName: 'Pivot.M.Fibonacci.S2|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S2_30: new BaseField('PIVOT_M_FIBONACCI_S2_30', {
    label: 'Pivot M Fibonacci S2|30',
    fieldName: 'Pivot.M.Fibonacci.S2|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S2_5: new BaseField('PIVOT_M_FIBONACCI_S2_5', {
    label: 'Pivot M Fibonacci S2|5',
    fieldName: 'Pivot.M.Fibonacci.S2|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S2_60: new BaseField('PIVOT_M_FIBONACCI_S2_60', {
    label: 'Pivot M Fibonacci S2|60',
    fieldName: 'Pivot.M.Fibonacci.S2|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S3_1: new BaseField('PIVOT_M_FIBONACCI_S3_1', {
    label: 'Pivot M Fibonacci S3|1',
    fieldName: 'Pivot.M.Fibonacci.S3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S3_120: new BaseField('PIVOT_M_FIBONACCI_S3_120', {
    label: 'Pivot M Fibonacci S3|120',
    fieldName: 'Pivot.M.Fibonacci.S3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S3_15: new BaseField('PIVOT_M_FIBONACCI_S3_15', {
    label: 'Pivot M Fibonacci S3|15',
    fieldName: 'Pivot.M.Fibonacci.S3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S3_1M: new BaseField('PIVOT_M_FIBONACCI_S3_1M', {
    label: 'Pivot M Fibonacci S3|1m',
    fieldName: 'Pivot.M.Fibonacci.S3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S3_1W: new BaseField('PIVOT_M_FIBONACCI_S3_1W', {
    label: 'Pivot M Fibonacci S3|1w',
    fieldName: 'Pivot.M.Fibonacci.S3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S3_240: new BaseField('PIVOT_M_FIBONACCI_S3_240', {
    label: 'Pivot M Fibonacci S3|240',
    fieldName: 'Pivot.M.Fibonacci.S3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S3_30: new BaseField('PIVOT_M_FIBONACCI_S3_30', {
    label: 'Pivot M Fibonacci S3|30',
    fieldName: 'Pivot.M.Fibonacci.S3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S3_5: new BaseField('PIVOT_M_FIBONACCI_S3_5', {
    label: 'Pivot M Fibonacci S3|5',
    fieldName: 'Pivot.M.Fibonacci.S3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_FIBONACCI_S3_60: new BaseField('PIVOT_M_FIBONACCI_S3_60', {
    label: 'Pivot M Fibonacci S3|60',
    fieldName: 'Pivot.M.Fibonacci.S3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9: new BaseField('REC_HULLMA9', {
    label: 'Rec Hullma9',
    fieldName: 'Rec.HullMA9',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_1: new BaseField('REC_HULLMA9_1', {
    label: 'Rec Hullma9|1',
    fieldName: 'Rec.HullMA9|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_120: new BaseField('REC_HULLMA9_120', {
    label: 'Rec Hullma9|120',
    fieldName: 'Rec.HullMA9|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_15: new BaseField('REC_HULLMA9_15', {
    label: 'Rec Hullma9|15',
    fieldName: 'Rec.HullMA9|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_1M: new BaseField('REC_HULLMA9_1M', {
    label: 'Rec Hullma9|1m',
    fieldName: 'Rec.HullMA9|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_1W: new BaseField('REC_HULLMA9_1W', {
    label: 'Rec Hullma9|1w',
    fieldName: 'Rec.HullMA9|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_240: new BaseField('REC_HULLMA9_240', {
    label: 'Rec Hullma9|240',
    fieldName: 'Rec.HullMA9|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_30: new BaseField('REC_HULLMA9_30', {
    label: 'Rec Hullma9|30',
    fieldName: 'Rec.HullMA9|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_5: new BaseField('REC_HULLMA9_5', {
    label: 'Rec Hullma9|5',
    fieldName: 'Rec.HullMA9|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_HULLMA9_60: new BaseField('REC_HULLMA9_60', {
    label: 'Rec Hullma9|60',
    fieldName: 'Rec.HullMA9|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_UO: new BaseField('REC_UO', {
    label: 'Rec UO',
    fieldName: 'Rec.UO',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_UO_1: new BaseField('REC_UO_1', {
    label: 'Rec Uo|1',
    fieldName: 'Rec.UO|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_UO_120: new BaseField('REC_UO_120', {
    label: 'Rec Uo|120',
    fieldName: 'Rec.UO|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_UO_15: new BaseField('REC_UO_15', {
    label: 'Rec Uo|15',
    fieldName: 'Rec.UO|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_UO_1M: new BaseField('REC_UO_1M', {
    label: 'Rec Uo|1m',
    fieldName: 'Rec.UO|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_UO_1W: new BaseField('REC_UO_1W', {
    label: 'Rec Uo|1w',
    fieldName: 'Rec.UO|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_UO_240: new BaseField('REC_UO_240', {
    label: 'Rec Uo|240',
    fieldName: 'Rec.UO|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_UO_30: new BaseField('REC_UO_30', {
    label: 'Rec Uo|30',
    fieldName: 'Rec.UO|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_UO_5: new BaseField('REC_UO_5', {
    label: 'Rec Uo|5',
    fieldName: 'Rec.UO|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_UO_60: new BaseField('REC_UO_60', {
    label: 'Rec Uo|60',
    fieldName: 'Rec.UO|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ROC_1: new BaseField('ROC_1', {
    label: 'Roc|1',
    fieldName: 'ROC|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ROC_120: new BaseField('ROC_120', {
    label: 'Roc|120',
    fieldName: 'ROC|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ROC_15: new BaseField('ROC_15', {
    label: 'Roc|15',
    fieldName: 'ROC|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ROC_1M: new BaseField('ROC_1M', {
    label: 'Roc|1m',
    fieldName: 'ROC|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ROC_1W: new BaseField('ROC_1W', {
    label: 'Roc|1w',
    fieldName: 'ROC|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ROC_240: new BaseField('ROC_240', {
    label: 'Roc|240',
    fieldName: 'ROC|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ROC_30: new BaseField('ROC_30', {
    label: 'Roc|30',
    fieldName: 'ROC|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ROC_5: new BaseField('ROC_5', {
    label: 'Roc|5',
    fieldName: 'ROC|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ROC_60: new BaseField('ROC_60', {
    label: 'Roc|60',
    fieldName: 'ROC|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  UO_1: new BaseField('UO_1', {
    label: 'Uo|1',
    fieldName: 'UO|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  UO_120: new BaseField('UO_120', {
    label: 'Uo|120',
    fieldName: 'UO|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  UO_15: new BaseField('UO_15', {
    label: 'Uo|15',
    fieldName: 'UO|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  UO_1M: new BaseField('UO_1M', {
    label: 'Uo|1m',
    fieldName: 'UO|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  UO_1W: new BaseField('UO_1W', {
    label: 'Uo|1w',
    fieldName: 'UO|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  UO_240: new BaseField('UO_240', {
    label: 'Uo|240',
    fieldName: 'UO|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  UO_30: new BaseField('UO_30', {
    label: 'Uo|30',
    fieldName: 'UO|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  UO_5: new BaseField('UO_5', {
    label: 'Uo|5',
    fieldName: 'UO|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  UO_60: new BaseField('UO_60', {
    label: 'Uo|60',
    fieldName: 'UO|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  WILLIAMS_PERCENT_RANGE_14: new BaseField('WILLIAMS_PERCENT_RANGE_14', {
    label: 'Williams Percent Range (14)',
    fieldName: 'W.R',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  // === Pivot Points (213 fields) ===

  PIVOT_CAMARILLA_P: new BaseField('PIVOT_CAMARILLA_P', {
    label: 'Pivot Camarilla P',
    fieldName: 'Pivot.M.Camarilla.Middle',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_CAMARILLA_R1: new BaseField('PIVOT_CAMARILLA_R1', {
    label: 'Pivot Camarilla R1',
    fieldName: 'Pivot.M.Camarilla.R1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_CAMARILLA_R2: new BaseField('PIVOT_CAMARILLA_R2', {
    label: 'Pivot Camarilla R2',
    fieldName: 'Pivot.M.Camarilla.R2',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_CAMARILLA_R3: new BaseField('PIVOT_CAMARILLA_R3', {
    label: 'Pivot Camarilla R3',
    fieldName: 'Pivot.M.Camarilla.R3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_CAMARILLA_S1: new BaseField('PIVOT_CAMARILLA_S1', {
    label: 'Pivot Camarilla S1',
    fieldName: 'Pivot.M.Camarilla.S1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_CAMARILLA_S2: new BaseField('PIVOT_CAMARILLA_S2', {
    label: 'Pivot Camarilla S2',
    fieldName: 'Pivot.M.Camarilla.S2',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_CAMARILLA_S3: new BaseField('PIVOT_CAMARILLA_S3', {
    label: 'Pivot Camarilla S3',
    fieldName: 'Pivot.M.Camarilla.S3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_P: new BaseField('PIVOT_CLASSIC_P', {
    label: 'Pivot Classic P',
    fieldName: 'Pivot.M.Classic.Middle',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_R1: new BaseField('PIVOT_CLASSIC_R1', {
    label: 'Pivot Classic R1',
    fieldName: 'Pivot.M.Classic.R1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_R2: new BaseField('PIVOT_CLASSIC_R2', {
    label: 'Pivot Classic R2',
    fieldName: 'Pivot.M.Classic.R2',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_R3: new BaseField('PIVOT_CLASSIC_R3', {
    label: 'Pivot Classic R3',
    fieldName: 'Pivot.M.Classic.R3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_S1: new BaseField('PIVOT_CLASSIC_S1', {
    label: 'Pivot Classic S1',
    fieldName: 'Pivot.M.Classic.S1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_S2: new BaseField('PIVOT_CLASSIC_S2', {
    label: 'Pivot Classic S2',
    fieldName: 'Pivot.M.Classic.S2',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_CLASSIC_S3: new BaseField('PIVOT_CLASSIC_S3', {
    label: 'Pivot Classic S3',
    fieldName: 'Pivot.M.Classic.S3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_DM_P: new BaseField('PIVOT_DM_P', {
    label: 'Pivot DM P',
    fieldName: 'Pivot.M.Demark.Middle',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_DM_R1: new BaseField('PIVOT_DM_R1', {
    label: 'Pivot DM R1',
    fieldName: 'Pivot.M.Demark.R1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_DM_S1: new BaseField('PIVOT_DM_S1', {
    label: 'Pivot DM S1',
    fieldName: 'Pivot.M.Demark.S1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_1: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_1', {
    label: 'Pivot M Camarilla Middle|1',
    fieldName: 'Pivot.M.Camarilla.Middle|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_120: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_120', {
    label: 'Pivot M Camarilla Middle|120',
    fieldName: 'Pivot.M.Camarilla.Middle|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_15: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_15', {
    label: 'Pivot M Camarilla Middle|15',
    fieldName: 'Pivot.M.Camarilla.Middle|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_1M: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_1M', {
    label: 'Pivot M Camarilla Middle|1m',
    fieldName: 'Pivot.M.Camarilla.Middle|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_1W: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_1W', {
    label: 'Pivot M Camarilla Middle|1w',
    fieldName: 'Pivot.M.Camarilla.Middle|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_240: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_240', {
    label: 'Pivot M Camarilla Middle|240',
    fieldName: 'Pivot.M.Camarilla.Middle|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_30: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_30', {
    label: 'Pivot M Camarilla Middle|30',
    fieldName: 'Pivot.M.Camarilla.Middle|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_5: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_5', {
    label: 'Pivot M Camarilla Middle|5',
    fieldName: 'Pivot.M.Camarilla.Middle|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_MIDDLE_60: new BaseField('PIVOT_M_CAMARILLA_MIDDLE_60', {
    label: 'Pivot M Camarilla Middle|60',
    fieldName: 'Pivot.M.Camarilla.Middle|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_1: new BaseField('PIVOT_M_CAMARILLA_R1_1', {
    label: 'Pivot M Camarilla R1|1',
    fieldName: 'Pivot.M.Camarilla.R1|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_120: new BaseField('PIVOT_M_CAMARILLA_R1_120', {
    label: 'Pivot M Camarilla R1|120',
    fieldName: 'Pivot.M.Camarilla.R1|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_15: new BaseField('PIVOT_M_CAMARILLA_R1_15', {
    label: 'Pivot M Camarilla R1|15',
    fieldName: 'Pivot.M.Camarilla.R1|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_1M: new BaseField('PIVOT_M_CAMARILLA_R1_1M', {
    label: 'Pivot M Camarilla R1|1m',
    fieldName: 'Pivot.M.Camarilla.R1|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_1W: new BaseField('PIVOT_M_CAMARILLA_R1_1W', {
    label: 'Pivot M Camarilla R1|1w',
    fieldName: 'Pivot.M.Camarilla.R1|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_240: new BaseField('PIVOT_M_CAMARILLA_R1_240', {
    label: 'Pivot M Camarilla R1|240',
    fieldName: 'Pivot.M.Camarilla.R1|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_30: new BaseField('PIVOT_M_CAMARILLA_R1_30', {
    label: 'Pivot M Camarilla R1|30',
    fieldName: 'Pivot.M.Camarilla.R1|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_5: new BaseField('PIVOT_M_CAMARILLA_R1_5', {
    label: 'Pivot M Camarilla R1|5',
    fieldName: 'Pivot.M.Camarilla.R1|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R1_60: new BaseField('PIVOT_M_CAMARILLA_R1_60', {
    label: 'Pivot M Camarilla R1|60',
    fieldName: 'Pivot.M.Camarilla.R1|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_1: new BaseField('PIVOT_M_CAMARILLA_R2_1', {
    label: 'Pivot M Camarilla R2|1',
    fieldName: 'Pivot.M.Camarilla.R2|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_120: new BaseField('PIVOT_M_CAMARILLA_R2_120', {
    label: 'Pivot M Camarilla R2|120',
    fieldName: 'Pivot.M.Camarilla.R2|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_15: new BaseField('PIVOT_M_CAMARILLA_R2_15', {
    label: 'Pivot M Camarilla R2|15',
    fieldName: 'Pivot.M.Camarilla.R2|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_1M: new BaseField('PIVOT_M_CAMARILLA_R2_1M', {
    label: 'Pivot M Camarilla R2|1m',
    fieldName: 'Pivot.M.Camarilla.R2|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_1W: new BaseField('PIVOT_M_CAMARILLA_R2_1W', {
    label: 'Pivot M Camarilla R2|1w',
    fieldName: 'Pivot.M.Camarilla.R2|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_240: new BaseField('PIVOT_M_CAMARILLA_R2_240', {
    label: 'Pivot M Camarilla R2|240',
    fieldName: 'Pivot.M.Camarilla.R2|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_30: new BaseField('PIVOT_M_CAMARILLA_R2_30', {
    label: 'Pivot M Camarilla R2|30',
    fieldName: 'Pivot.M.Camarilla.R2|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_5: new BaseField('PIVOT_M_CAMARILLA_R2_5', {
    label: 'Pivot M Camarilla R2|5',
    fieldName: 'Pivot.M.Camarilla.R2|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R2_60: new BaseField('PIVOT_M_CAMARILLA_R2_60', {
    label: 'Pivot M Camarilla R2|60',
    fieldName: 'Pivot.M.Camarilla.R2|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_1: new BaseField('PIVOT_M_CAMARILLA_R3_1', {
    label: 'Pivot M Camarilla R3|1',
    fieldName: 'Pivot.M.Camarilla.R3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_120: new BaseField('PIVOT_M_CAMARILLA_R3_120', {
    label: 'Pivot M Camarilla R3|120',
    fieldName: 'Pivot.M.Camarilla.R3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_15: new BaseField('PIVOT_M_CAMARILLA_R3_15', {
    label: 'Pivot M Camarilla R3|15',
    fieldName: 'Pivot.M.Camarilla.R3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_1M: new BaseField('PIVOT_M_CAMARILLA_R3_1M', {
    label: 'Pivot M Camarilla R3|1m',
    fieldName: 'Pivot.M.Camarilla.R3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_1W: new BaseField('PIVOT_M_CAMARILLA_R3_1W', {
    label: 'Pivot M Camarilla R3|1w',
    fieldName: 'Pivot.M.Camarilla.R3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_240: new BaseField('PIVOT_M_CAMARILLA_R3_240', {
    label: 'Pivot M Camarilla R3|240',
    fieldName: 'Pivot.M.Camarilla.R3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_30: new BaseField('PIVOT_M_CAMARILLA_R3_30', {
    label: 'Pivot M Camarilla R3|30',
    fieldName: 'Pivot.M.Camarilla.R3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_5: new BaseField('PIVOT_M_CAMARILLA_R3_5', {
    label: 'Pivot M Camarilla R3|5',
    fieldName: 'Pivot.M.Camarilla.R3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_R3_60: new BaseField('PIVOT_M_CAMARILLA_R3_60', {
    label: 'Pivot M Camarilla R3|60',
    fieldName: 'Pivot.M.Camarilla.R3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_1: new BaseField('PIVOT_M_CAMARILLA_S1_1', {
    label: 'Pivot M Camarilla S1|1',
    fieldName: 'Pivot.M.Camarilla.S1|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_120: new BaseField('PIVOT_M_CAMARILLA_S1_120', {
    label: 'Pivot M Camarilla S1|120',
    fieldName: 'Pivot.M.Camarilla.S1|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_15: new BaseField('PIVOT_M_CAMARILLA_S1_15', {
    label: 'Pivot M Camarilla S1|15',
    fieldName: 'Pivot.M.Camarilla.S1|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_1M: new BaseField('PIVOT_M_CAMARILLA_S1_1M', {
    label: 'Pivot M Camarilla S1|1m',
    fieldName: 'Pivot.M.Camarilla.S1|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_1W: new BaseField('PIVOT_M_CAMARILLA_S1_1W', {
    label: 'Pivot M Camarilla S1|1w',
    fieldName: 'Pivot.M.Camarilla.S1|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_240: new BaseField('PIVOT_M_CAMARILLA_S1_240', {
    label: 'Pivot M Camarilla S1|240',
    fieldName: 'Pivot.M.Camarilla.S1|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_30: new BaseField('PIVOT_M_CAMARILLA_S1_30', {
    label: 'Pivot M Camarilla S1|30',
    fieldName: 'Pivot.M.Camarilla.S1|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_5: new BaseField('PIVOT_M_CAMARILLA_S1_5', {
    label: 'Pivot M Camarilla S1|5',
    fieldName: 'Pivot.M.Camarilla.S1|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S1_60: new BaseField('PIVOT_M_CAMARILLA_S1_60', {
    label: 'Pivot M Camarilla S1|60',
    fieldName: 'Pivot.M.Camarilla.S1|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_1: new BaseField('PIVOT_M_CAMARILLA_S2_1', {
    label: 'Pivot M Camarilla S2|1',
    fieldName: 'Pivot.M.Camarilla.S2|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_120: new BaseField('PIVOT_M_CAMARILLA_S2_120', {
    label: 'Pivot M Camarilla S2|120',
    fieldName: 'Pivot.M.Camarilla.S2|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_15: new BaseField('PIVOT_M_CAMARILLA_S2_15', {
    label: 'Pivot M Camarilla S2|15',
    fieldName: 'Pivot.M.Camarilla.S2|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_1M: new BaseField('PIVOT_M_CAMARILLA_S2_1M', {
    label: 'Pivot M Camarilla S2|1m',
    fieldName: 'Pivot.M.Camarilla.S2|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_1W: new BaseField('PIVOT_M_CAMARILLA_S2_1W', {
    label: 'Pivot M Camarilla S2|1w',
    fieldName: 'Pivot.M.Camarilla.S2|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_240: new BaseField('PIVOT_M_CAMARILLA_S2_240', {
    label: 'Pivot M Camarilla S2|240',
    fieldName: 'Pivot.M.Camarilla.S2|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_30: new BaseField('PIVOT_M_CAMARILLA_S2_30', {
    label: 'Pivot M Camarilla S2|30',
    fieldName: 'Pivot.M.Camarilla.S2|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_5: new BaseField('PIVOT_M_CAMARILLA_S2_5', {
    label: 'Pivot M Camarilla S2|5',
    fieldName: 'Pivot.M.Camarilla.S2|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S2_60: new BaseField('PIVOT_M_CAMARILLA_S2_60', {
    label: 'Pivot M Camarilla S2|60',
    fieldName: 'Pivot.M.Camarilla.S2|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_1: new BaseField('PIVOT_M_CAMARILLA_S3_1', {
    label: 'Pivot M Camarilla S3|1',
    fieldName: 'Pivot.M.Camarilla.S3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_120: new BaseField('PIVOT_M_CAMARILLA_S3_120', {
    label: 'Pivot M Camarilla S3|120',
    fieldName: 'Pivot.M.Camarilla.S3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_15: new BaseField('PIVOT_M_CAMARILLA_S3_15', {
    label: 'Pivot M Camarilla S3|15',
    fieldName: 'Pivot.M.Camarilla.S3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_1M: new BaseField('PIVOT_M_CAMARILLA_S3_1M', {
    label: 'Pivot M Camarilla S3|1m',
    fieldName: 'Pivot.M.Camarilla.S3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_1W: new BaseField('PIVOT_M_CAMARILLA_S3_1W', {
    label: 'Pivot M Camarilla S3|1w',
    fieldName: 'Pivot.M.Camarilla.S3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_240: new BaseField('PIVOT_M_CAMARILLA_S3_240', {
    label: 'Pivot M Camarilla S3|240',
    fieldName: 'Pivot.M.Camarilla.S3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_30: new BaseField('PIVOT_M_CAMARILLA_S3_30', {
    label: 'Pivot M Camarilla S3|30',
    fieldName: 'Pivot.M.Camarilla.S3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_5: new BaseField('PIVOT_M_CAMARILLA_S3_5', {
    label: 'Pivot M Camarilla S3|5',
    fieldName: 'Pivot.M.Camarilla.S3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CAMARILLA_S3_60: new BaseField('PIVOT_M_CAMARILLA_S3_60', {
    label: 'Pivot M Camarilla S3|60',
    fieldName: 'Pivot.M.Camarilla.S3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_1: new BaseField('PIVOT_M_CLASSIC_MIDDLE_1', {
    label: 'Pivot M Classic Middle|1',
    fieldName: 'Pivot.M.Classic.Middle|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_120: new BaseField('PIVOT_M_CLASSIC_MIDDLE_120', {
    label: 'Pivot M Classic Middle|120',
    fieldName: 'Pivot.M.Classic.Middle|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_15: new BaseField('PIVOT_M_CLASSIC_MIDDLE_15', {
    label: 'Pivot M Classic Middle|15',
    fieldName: 'Pivot.M.Classic.Middle|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_1M: new BaseField('PIVOT_M_CLASSIC_MIDDLE_1M', {
    label: 'Pivot M Classic Middle|1m',
    fieldName: 'Pivot.M.Classic.Middle|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_1W: new BaseField('PIVOT_M_CLASSIC_MIDDLE_1W', {
    label: 'Pivot M Classic Middle|1w',
    fieldName: 'Pivot.M.Classic.Middle|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_240: new BaseField('PIVOT_M_CLASSIC_MIDDLE_240', {
    label: 'Pivot M Classic Middle|240',
    fieldName: 'Pivot.M.Classic.Middle|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_30: new BaseField('PIVOT_M_CLASSIC_MIDDLE_30', {
    label: 'Pivot M Classic Middle|30',
    fieldName: 'Pivot.M.Classic.Middle|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_5: new BaseField('PIVOT_M_CLASSIC_MIDDLE_5', {
    label: 'Pivot M Classic Middle|5',
    fieldName: 'Pivot.M.Classic.Middle|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_MIDDLE_60: new BaseField('PIVOT_M_CLASSIC_MIDDLE_60', {
    label: 'Pivot M Classic Middle|60',
    fieldName: 'Pivot.M.Classic.Middle|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_1: new BaseField('PIVOT_M_CLASSIC_R1_1', {
    label: 'Pivot M Classic R1|1',
    fieldName: 'Pivot.M.Classic.R1|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_120: new BaseField('PIVOT_M_CLASSIC_R1_120', {
    label: 'Pivot M Classic R1|120',
    fieldName: 'Pivot.M.Classic.R1|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_15: new BaseField('PIVOT_M_CLASSIC_R1_15', {
    label: 'Pivot M Classic R1|15',
    fieldName: 'Pivot.M.Classic.R1|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_1M: new BaseField('PIVOT_M_CLASSIC_R1_1M', {
    label: 'Pivot M Classic R1|1m',
    fieldName: 'Pivot.M.Classic.R1|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_1W: new BaseField('PIVOT_M_CLASSIC_R1_1W', {
    label: 'Pivot M Classic R1|1w',
    fieldName: 'Pivot.M.Classic.R1|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_240: new BaseField('PIVOT_M_CLASSIC_R1_240', {
    label: 'Pivot M Classic R1|240',
    fieldName: 'Pivot.M.Classic.R1|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_30: new BaseField('PIVOT_M_CLASSIC_R1_30', {
    label: 'Pivot M Classic R1|30',
    fieldName: 'Pivot.M.Classic.R1|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_5: new BaseField('PIVOT_M_CLASSIC_R1_5', {
    label: 'Pivot M Classic R1|5',
    fieldName: 'Pivot.M.Classic.R1|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R1_60: new BaseField('PIVOT_M_CLASSIC_R1_60', {
    label: 'Pivot M Classic R1|60',
    fieldName: 'Pivot.M.Classic.R1|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_1: new BaseField('PIVOT_M_CLASSIC_R2_1', {
    label: 'Pivot M Classic R2|1',
    fieldName: 'Pivot.M.Classic.R2|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_120: new BaseField('PIVOT_M_CLASSIC_R2_120', {
    label: 'Pivot M Classic R2|120',
    fieldName: 'Pivot.M.Classic.R2|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_15: new BaseField('PIVOT_M_CLASSIC_R2_15', {
    label: 'Pivot M Classic R2|15',
    fieldName: 'Pivot.M.Classic.R2|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_1M: new BaseField('PIVOT_M_CLASSIC_R2_1M', {
    label: 'Pivot M Classic R2|1m',
    fieldName: 'Pivot.M.Classic.R2|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_1W: new BaseField('PIVOT_M_CLASSIC_R2_1W', {
    label: 'Pivot M Classic R2|1w',
    fieldName: 'Pivot.M.Classic.R2|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_240: new BaseField('PIVOT_M_CLASSIC_R2_240', {
    label: 'Pivot M Classic R2|240',
    fieldName: 'Pivot.M.Classic.R2|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_30: new BaseField('PIVOT_M_CLASSIC_R2_30', {
    label: 'Pivot M Classic R2|30',
    fieldName: 'Pivot.M.Classic.R2|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_5: new BaseField('PIVOT_M_CLASSIC_R2_5', {
    label: 'Pivot M Classic R2|5',
    fieldName: 'Pivot.M.Classic.R2|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R2_60: new BaseField('PIVOT_M_CLASSIC_R2_60', {
    label: 'Pivot M Classic R2|60',
    fieldName: 'Pivot.M.Classic.R2|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_1: new BaseField('PIVOT_M_CLASSIC_R3_1', {
    label: 'Pivot M Classic R3|1',
    fieldName: 'Pivot.M.Classic.R3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_120: new BaseField('PIVOT_M_CLASSIC_R3_120', {
    label: 'Pivot M Classic R3|120',
    fieldName: 'Pivot.M.Classic.R3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_15: new BaseField('PIVOT_M_CLASSIC_R3_15', {
    label: 'Pivot M Classic R3|15',
    fieldName: 'Pivot.M.Classic.R3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_1M: new BaseField('PIVOT_M_CLASSIC_R3_1M', {
    label: 'Pivot M Classic R3|1m',
    fieldName: 'Pivot.M.Classic.R3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_1W: new BaseField('PIVOT_M_CLASSIC_R3_1W', {
    label: 'Pivot M Classic R3|1w',
    fieldName: 'Pivot.M.Classic.R3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_240: new BaseField('PIVOT_M_CLASSIC_R3_240', {
    label: 'Pivot M Classic R3|240',
    fieldName: 'Pivot.M.Classic.R3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_30: new BaseField('PIVOT_M_CLASSIC_R3_30', {
    label: 'Pivot M Classic R3|30',
    fieldName: 'Pivot.M.Classic.R3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_5: new BaseField('PIVOT_M_CLASSIC_R3_5', {
    label: 'Pivot M Classic R3|5',
    fieldName: 'Pivot.M.Classic.R3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_R3_60: new BaseField('PIVOT_M_CLASSIC_R3_60', {
    label: 'Pivot M Classic R3|60',
    fieldName: 'Pivot.M.Classic.R3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_1: new BaseField('PIVOT_M_CLASSIC_S1_1', {
    label: 'Pivot M Classic S1|1',
    fieldName: 'Pivot.M.Classic.S1|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_120: new BaseField('PIVOT_M_CLASSIC_S1_120', {
    label: 'Pivot M Classic S1|120',
    fieldName: 'Pivot.M.Classic.S1|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_15: new BaseField('PIVOT_M_CLASSIC_S1_15', {
    label: 'Pivot M Classic S1|15',
    fieldName: 'Pivot.M.Classic.S1|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_1M: new BaseField('PIVOT_M_CLASSIC_S1_1M', {
    label: 'Pivot M Classic S1|1m',
    fieldName: 'Pivot.M.Classic.S1|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_1W: new BaseField('PIVOT_M_CLASSIC_S1_1W', {
    label: 'Pivot M Classic S1|1w',
    fieldName: 'Pivot.M.Classic.S1|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_240: new BaseField('PIVOT_M_CLASSIC_S1_240', {
    label: 'Pivot M Classic S1|240',
    fieldName: 'Pivot.M.Classic.S1|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_30: new BaseField('PIVOT_M_CLASSIC_S1_30', {
    label: 'Pivot M Classic S1|30',
    fieldName: 'Pivot.M.Classic.S1|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_5: new BaseField('PIVOT_M_CLASSIC_S1_5', {
    label: 'Pivot M Classic S1|5',
    fieldName: 'Pivot.M.Classic.S1|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S1_60: new BaseField('PIVOT_M_CLASSIC_S1_60', {
    label: 'Pivot M Classic S1|60',
    fieldName: 'Pivot.M.Classic.S1|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_1: new BaseField('PIVOT_M_CLASSIC_S2_1', {
    label: 'Pivot M Classic S2|1',
    fieldName: 'Pivot.M.Classic.S2|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_120: new BaseField('PIVOT_M_CLASSIC_S2_120', {
    label: 'Pivot M Classic S2|120',
    fieldName: 'Pivot.M.Classic.S2|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_15: new BaseField('PIVOT_M_CLASSIC_S2_15', {
    label: 'Pivot M Classic S2|15',
    fieldName: 'Pivot.M.Classic.S2|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_1M: new BaseField('PIVOT_M_CLASSIC_S2_1M', {
    label: 'Pivot M Classic S2|1m',
    fieldName: 'Pivot.M.Classic.S2|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_1W: new BaseField('PIVOT_M_CLASSIC_S2_1W', {
    label: 'Pivot M Classic S2|1w',
    fieldName: 'Pivot.M.Classic.S2|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_240: new BaseField('PIVOT_M_CLASSIC_S2_240', {
    label: 'Pivot M Classic S2|240',
    fieldName: 'Pivot.M.Classic.S2|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_30: new BaseField('PIVOT_M_CLASSIC_S2_30', {
    label: 'Pivot M Classic S2|30',
    fieldName: 'Pivot.M.Classic.S2|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_5: new BaseField('PIVOT_M_CLASSIC_S2_5', {
    label: 'Pivot M Classic S2|5',
    fieldName: 'Pivot.M.Classic.S2|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S2_60: new BaseField('PIVOT_M_CLASSIC_S2_60', {
    label: 'Pivot M Classic S2|60',
    fieldName: 'Pivot.M.Classic.S2|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_1: new BaseField('PIVOT_M_CLASSIC_S3_1', {
    label: 'Pivot M Classic S3|1',
    fieldName: 'Pivot.M.Classic.S3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_120: new BaseField('PIVOT_M_CLASSIC_S3_120', {
    label: 'Pivot M Classic S3|120',
    fieldName: 'Pivot.M.Classic.S3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_15: new BaseField('PIVOT_M_CLASSIC_S3_15', {
    label: 'Pivot M Classic S3|15',
    fieldName: 'Pivot.M.Classic.S3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_1M: new BaseField('PIVOT_M_CLASSIC_S3_1M', {
    label: 'Pivot M Classic S3|1m',
    fieldName: 'Pivot.M.Classic.S3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_1W: new BaseField('PIVOT_M_CLASSIC_S3_1W', {
    label: 'Pivot M Classic S3|1w',
    fieldName: 'Pivot.M.Classic.S3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_240: new BaseField('PIVOT_M_CLASSIC_S3_240', {
    label: 'Pivot M Classic S3|240',
    fieldName: 'Pivot.M.Classic.S3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_30: new BaseField('PIVOT_M_CLASSIC_S3_30', {
    label: 'Pivot M Classic S3|30',
    fieldName: 'Pivot.M.Classic.S3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_5: new BaseField('PIVOT_M_CLASSIC_S3_5', {
    label: 'Pivot M Classic S3|5',
    fieldName: 'Pivot.M.Classic.S3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_CLASSIC_S3_60: new BaseField('PIVOT_M_CLASSIC_S3_60', {
    label: 'Pivot M Classic S3|60',
    fieldName: 'Pivot.M.Classic.S3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_1: new BaseField('PIVOT_M_WOODIE_MIDDLE_1', {
    label: 'Pivot M Woodie Middle|1',
    fieldName: 'Pivot.M.Woodie.Middle|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_120: new BaseField('PIVOT_M_WOODIE_MIDDLE_120', {
    label: 'Pivot M Woodie Middle|120',
    fieldName: 'Pivot.M.Woodie.Middle|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_15: new BaseField('PIVOT_M_WOODIE_MIDDLE_15', {
    label: 'Pivot M Woodie Middle|15',
    fieldName: 'Pivot.M.Woodie.Middle|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_1M: new BaseField('PIVOT_M_WOODIE_MIDDLE_1M', {
    label: 'Pivot M Woodie Middle|1m',
    fieldName: 'Pivot.M.Woodie.Middle|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_1W: new BaseField('PIVOT_M_WOODIE_MIDDLE_1W', {
    label: 'Pivot M Woodie Middle|1w',
    fieldName: 'Pivot.M.Woodie.Middle|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_240: new BaseField('PIVOT_M_WOODIE_MIDDLE_240', {
    label: 'Pivot M Woodie Middle|240',
    fieldName: 'Pivot.M.Woodie.Middle|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_30: new BaseField('PIVOT_M_WOODIE_MIDDLE_30', {
    label: 'Pivot M Woodie Middle|30',
    fieldName: 'Pivot.M.Woodie.Middle|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_5: new BaseField('PIVOT_M_WOODIE_MIDDLE_5', {
    label: 'Pivot M Woodie Middle|5',
    fieldName: 'Pivot.M.Woodie.Middle|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_MIDDLE_60: new BaseField('PIVOT_M_WOODIE_MIDDLE_60', {
    label: 'Pivot M Woodie Middle|60',
    fieldName: 'Pivot.M.Woodie.Middle|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_1: new BaseField('PIVOT_M_WOODIE_R1_1', {
    label: 'Pivot M Woodie R1|1',
    fieldName: 'Pivot.M.Woodie.R1|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_120: new BaseField('PIVOT_M_WOODIE_R1_120', {
    label: 'Pivot M Woodie R1|120',
    fieldName: 'Pivot.M.Woodie.R1|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_15: new BaseField('PIVOT_M_WOODIE_R1_15', {
    label: 'Pivot M Woodie R1|15',
    fieldName: 'Pivot.M.Woodie.R1|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_1M: new BaseField('PIVOT_M_WOODIE_R1_1M', {
    label: 'Pivot M Woodie R1|1m',
    fieldName: 'Pivot.M.Woodie.R1|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_1W: new BaseField('PIVOT_M_WOODIE_R1_1W', {
    label: 'Pivot M Woodie R1|1w',
    fieldName: 'Pivot.M.Woodie.R1|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_240: new BaseField('PIVOT_M_WOODIE_R1_240', {
    label: 'Pivot M Woodie R1|240',
    fieldName: 'Pivot.M.Woodie.R1|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_30: new BaseField('PIVOT_M_WOODIE_R1_30', {
    label: 'Pivot M Woodie R1|30',
    fieldName: 'Pivot.M.Woodie.R1|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_5: new BaseField('PIVOT_M_WOODIE_R1_5', {
    label: 'Pivot M Woodie R1|5',
    fieldName: 'Pivot.M.Woodie.R1|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R1_60: new BaseField('PIVOT_M_WOODIE_R1_60', {
    label: 'Pivot M Woodie R1|60',
    fieldName: 'Pivot.M.Woodie.R1|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_1: new BaseField('PIVOT_M_WOODIE_R2_1', {
    label: 'Pivot M Woodie R2|1',
    fieldName: 'Pivot.M.Woodie.R2|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_120: new BaseField('PIVOT_M_WOODIE_R2_120', {
    label: 'Pivot M Woodie R2|120',
    fieldName: 'Pivot.M.Woodie.R2|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_15: new BaseField('PIVOT_M_WOODIE_R2_15', {
    label: 'Pivot M Woodie R2|15',
    fieldName: 'Pivot.M.Woodie.R2|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_1M: new BaseField('PIVOT_M_WOODIE_R2_1M', {
    label: 'Pivot M Woodie R2|1m',
    fieldName: 'Pivot.M.Woodie.R2|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_1W: new BaseField('PIVOT_M_WOODIE_R2_1W', {
    label: 'Pivot M Woodie R2|1w',
    fieldName: 'Pivot.M.Woodie.R2|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_240: new BaseField('PIVOT_M_WOODIE_R2_240', {
    label: 'Pivot M Woodie R2|240',
    fieldName: 'Pivot.M.Woodie.R2|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_30: new BaseField('PIVOT_M_WOODIE_R2_30', {
    label: 'Pivot M Woodie R2|30',
    fieldName: 'Pivot.M.Woodie.R2|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_5: new BaseField('PIVOT_M_WOODIE_R2_5', {
    label: 'Pivot M Woodie R2|5',
    fieldName: 'Pivot.M.Woodie.R2|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R2_60: new BaseField('PIVOT_M_WOODIE_R2_60', {
    label: 'Pivot M Woodie R2|60',
    fieldName: 'Pivot.M.Woodie.R2|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_1: new BaseField('PIVOT_M_WOODIE_R3_1', {
    label: 'Pivot M Woodie R3|1',
    fieldName: 'Pivot.M.Woodie.R3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_120: new BaseField('PIVOT_M_WOODIE_R3_120', {
    label: 'Pivot M Woodie R3|120',
    fieldName: 'Pivot.M.Woodie.R3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_15: new BaseField('PIVOT_M_WOODIE_R3_15', {
    label: 'Pivot M Woodie R3|15',
    fieldName: 'Pivot.M.Woodie.R3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_1M: new BaseField('PIVOT_M_WOODIE_R3_1M', {
    label: 'Pivot M Woodie R3|1m',
    fieldName: 'Pivot.M.Woodie.R3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_1W: new BaseField('PIVOT_M_WOODIE_R3_1W', {
    label: 'Pivot M Woodie R3|1w',
    fieldName: 'Pivot.M.Woodie.R3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_240: new BaseField('PIVOT_M_WOODIE_R3_240', {
    label: 'Pivot M Woodie R3|240',
    fieldName: 'Pivot.M.Woodie.R3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_30: new BaseField('PIVOT_M_WOODIE_R3_30', {
    label: 'Pivot M Woodie R3|30',
    fieldName: 'Pivot.M.Woodie.R3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_5: new BaseField('PIVOT_M_WOODIE_R3_5', {
    label: 'Pivot M Woodie R3|5',
    fieldName: 'Pivot.M.Woodie.R3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_R3_60: new BaseField('PIVOT_M_WOODIE_R3_60', {
    label: 'Pivot M Woodie R3|60',
    fieldName: 'Pivot.M.Woodie.R3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_1: new BaseField('PIVOT_M_WOODIE_S1_1', {
    label: 'Pivot M Woodie S1|1',
    fieldName: 'Pivot.M.Woodie.S1|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_120: new BaseField('PIVOT_M_WOODIE_S1_120', {
    label: 'Pivot M Woodie S1|120',
    fieldName: 'Pivot.M.Woodie.S1|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_15: new BaseField('PIVOT_M_WOODIE_S1_15', {
    label: 'Pivot M Woodie S1|15',
    fieldName: 'Pivot.M.Woodie.S1|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_1M: new BaseField('PIVOT_M_WOODIE_S1_1M', {
    label: 'Pivot M Woodie S1|1m',
    fieldName: 'Pivot.M.Woodie.S1|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_1W: new BaseField('PIVOT_M_WOODIE_S1_1W', {
    label: 'Pivot M Woodie S1|1w',
    fieldName: 'Pivot.M.Woodie.S1|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_240: new BaseField('PIVOT_M_WOODIE_S1_240', {
    label: 'Pivot M Woodie S1|240',
    fieldName: 'Pivot.M.Woodie.S1|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_30: new BaseField('PIVOT_M_WOODIE_S1_30', {
    label: 'Pivot M Woodie S1|30',
    fieldName: 'Pivot.M.Woodie.S1|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_5: new BaseField('PIVOT_M_WOODIE_S1_5', {
    label: 'Pivot M Woodie S1|5',
    fieldName: 'Pivot.M.Woodie.S1|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S1_60: new BaseField('PIVOT_M_WOODIE_S1_60', {
    label: 'Pivot M Woodie S1|60',
    fieldName: 'Pivot.M.Woodie.S1|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_1: new BaseField('PIVOT_M_WOODIE_S2_1', {
    label: 'Pivot M Woodie S2|1',
    fieldName: 'Pivot.M.Woodie.S2|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_120: new BaseField('PIVOT_M_WOODIE_S2_120', {
    label: 'Pivot M Woodie S2|120',
    fieldName: 'Pivot.M.Woodie.S2|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_15: new BaseField('PIVOT_M_WOODIE_S2_15', {
    label: 'Pivot M Woodie S2|15',
    fieldName: 'Pivot.M.Woodie.S2|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_1M: new BaseField('PIVOT_M_WOODIE_S2_1M', {
    label: 'Pivot M Woodie S2|1m',
    fieldName: 'Pivot.M.Woodie.S2|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_1W: new BaseField('PIVOT_M_WOODIE_S2_1W', {
    label: 'Pivot M Woodie S2|1w',
    fieldName: 'Pivot.M.Woodie.S2|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_240: new BaseField('PIVOT_M_WOODIE_S2_240', {
    label: 'Pivot M Woodie S2|240',
    fieldName: 'Pivot.M.Woodie.S2|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_30: new BaseField('PIVOT_M_WOODIE_S2_30', {
    label: 'Pivot M Woodie S2|30',
    fieldName: 'Pivot.M.Woodie.S2|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_5: new BaseField('PIVOT_M_WOODIE_S2_5', {
    label: 'Pivot M Woodie S2|5',
    fieldName: 'Pivot.M.Woodie.S2|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S2_60: new BaseField('PIVOT_M_WOODIE_S2_60', {
    label: 'Pivot M Woodie S2|60',
    fieldName: 'Pivot.M.Woodie.S2|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_1: new BaseField('PIVOT_M_WOODIE_S3_1', {
    label: 'Pivot M Woodie S3|1',
    fieldName: 'Pivot.M.Woodie.S3|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_120: new BaseField('PIVOT_M_WOODIE_S3_120', {
    label: 'Pivot M Woodie S3|120',
    fieldName: 'Pivot.M.Woodie.S3|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_15: new BaseField('PIVOT_M_WOODIE_S3_15', {
    label: 'Pivot M Woodie S3|15',
    fieldName: 'Pivot.M.Woodie.S3|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_1M: new BaseField('PIVOT_M_WOODIE_S3_1M', {
    label: 'Pivot M Woodie S3|1m',
    fieldName: 'Pivot.M.Woodie.S3|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_1W: new BaseField('PIVOT_M_WOODIE_S3_1W', {
    label: 'Pivot M Woodie S3|1w',
    fieldName: 'Pivot.M.Woodie.S3|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_240: new BaseField('PIVOT_M_WOODIE_S3_240', {
    label: 'Pivot M Woodie S3|240',
    fieldName: 'Pivot.M.Woodie.S3|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_30: new BaseField('PIVOT_M_WOODIE_S3_30', {
    label: 'Pivot M Woodie S3|30',
    fieldName: 'Pivot.M.Woodie.S3|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_5: new BaseField('PIVOT_M_WOODIE_S3_5', {
    label: 'Pivot M Woodie S3|5',
    fieldName: 'Pivot.M.Woodie.S3|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_M_WOODIE_S3_60: new BaseField('PIVOT_M_WOODIE_S3_60', {
    label: 'Pivot M Woodie S3|60',
    fieldName: 'Pivot.M.Woodie.S3|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_WOODIE_P: new BaseField('PIVOT_WOODIE_P', {
    label: 'Pivot Woodie P',
    fieldName: 'Pivot.M.Woodie.Middle',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_WOODIE_R1: new BaseField('PIVOT_WOODIE_R1', {
    label: 'Pivot Woodie R1',
    fieldName: 'Pivot.M.Woodie.R1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_WOODIE_R2: new BaseField('PIVOT_WOODIE_R2', {
    label: 'Pivot Woodie R2',
    fieldName: 'Pivot.M.Woodie.R2',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_WOODIE_R3: new BaseField('PIVOT_WOODIE_R3', {
    label: 'Pivot Woodie R3',
    fieldName: 'Pivot.M.Woodie.R3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_WOODIE_S1: new BaseField('PIVOT_WOODIE_S1', {
    label: 'Pivot Woodie S1',
    fieldName: 'Pivot.M.Woodie.S1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_WOODIE_S2: new BaseField('PIVOT_WOODIE_S2', {
    label: 'Pivot Woodie S2',
    fieldName: 'Pivot.M.Woodie.S2',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PIVOT_WOODIE_S3: new BaseField('PIVOT_WOODIE_S3', {
    label: 'Pivot Woodie S3',
    fieldName: 'Pivot.M.Woodie.S3',
    format: 'round',
    interval: true,
    historical: false,
  }),

  // === Candlestick Patterns (260 fields) ===

  CANDLE_3BLACKCROWS: new BaseField('CANDLE_3BLACKCROWS', {
    label: 'Candle.3BlackCrows',
    fieldName: 'Candle.3BlackCrows',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_1: new BaseField('CANDLE_3BLACKCROWS_1', {
    label: 'Candle 3blackcrows|1',
    fieldName: 'Candle.3BlackCrows|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_120: new BaseField('CANDLE_3BLACKCROWS_120', {
    label: 'Candle 3blackcrows|120',
    fieldName: 'Candle.3BlackCrows|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_15: new BaseField('CANDLE_3BLACKCROWS_15', {
    label: 'Candle 3blackcrows|15',
    fieldName: 'Candle.3BlackCrows|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_1M: new BaseField('CANDLE_3BLACKCROWS_1M', {
    label: 'Candle 3blackcrows|1m',
    fieldName: 'Candle.3BlackCrows|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_1W: new BaseField('CANDLE_3BLACKCROWS_1W', {
    label: 'Candle 3blackcrows|1w',
    fieldName: 'Candle.3BlackCrows|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_240: new BaseField('CANDLE_3BLACKCROWS_240', {
    label: 'Candle 3blackcrows|240',
    fieldName: 'Candle.3BlackCrows|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_30: new BaseField('CANDLE_3BLACKCROWS_30', {
    label: 'Candle 3blackcrows|30',
    fieldName: 'Candle.3BlackCrows|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_5: new BaseField('CANDLE_3BLACKCROWS_5', {
    label: 'Candle 3blackcrows|5',
    fieldName: 'Candle.3BlackCrows|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3BLACKCROWS_60: new BaseField('CANDLE_3BLACKCROWS_60', {
    label: 'Candle 3blackcrows|60',
    fieldName: 'Candle.3BlackCrows|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS: new BaseField('CANDLE_3WHITESOLDIERS', {
    label: 'Candle.3WhiteSoldiers',
    fieldName: 'Candle.3WhiteSoldiers',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_1: new BaseField('CANDLE_3WHITESOLDIERS_1', {
    label: 'Candle 3whitesoldiers|1',
    fieldName: 'Candle.3WhiteSoldiers|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_120: new BaseField('CANDLE_3WHITESOLDIERS_120', {
    label: 'Candle 3whitesoldiers|120',
    fieldName: 'Candle.3WhiteSoldiers|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_15: new BaseField('CANDLE_3WHITESOLDIERS_15', {
    label: 'Candle 3whitesoldiers|15',
    fieldName: 'Candle.3WhiteSoldiers|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_1M: new BaseField('CANDLE_3WHITESOLDIERS_1M', {
    label: 'Candle 3whitesoldiers|1m',
    fieldName: 'Candle.3WhiteSoldiers|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_1W: new BaseField('CANDLE_3WHITESOLDIERS_1W', {
    label: 'Candle 3whitesoldiers|1w',
    fieldName: 'Candle.3WhiteSoldiers|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_240: new BaseField('CANDLE_3WHITESOLDIERS_240', {
    label: 'Candle 3whitesoldiers|240',
    fieldName: 'Candle.3WhiteSoldiers|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_30: new BaseField('CANDLE_3WHITESOLDIERS_30', {
    label: 'Candle 3whitesoldiers|30',
    fieldName: 'Candle.3WhiteSoldiers|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_5: new BaseField('CANDLE_3WHITESOLDIERS_5', {
    label: 'Candle 3whitesoldiers|5',
    fieldName: 'Candle.3WhiteSoldiers|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_3WHITESOLDIERS_60: new BaseField('CANDLE_3WHITESOLDIERS_60', {
    label: 'Candle 3whitesoldiers|60',
    fieldName: 'Candle.3WhiteSoldiers|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH: new BaseField('CANDLE_ABANDONEDBABY_BEARISH', {
    label: 'Candle.AbandonedBaby.Bearish',
    fieldName: 'Candle.AbandonedBaby.Bearish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_1: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_1', {
    label: 'Candle Abandonedbaby Bearish|1',
    fieldName: 'Candle.AbandonedBaby.Bearish|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_120: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_120', {
    label: 'Candle Abandonedbaby Bearish|120',
    fieldName: 'Candle.AbandonedBaby.Bearish|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_15: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_15', {
    label: 'Candle Abandonedbaby Bearish|15',
    fieldName: 'Candle.AbandonedBaby.Bearish|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_1M: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_1M', {
    label: 'Candle Abandonedbaby Bearish|1m',
    fieldName: 'Candle.AbandonedBaby.Bearish|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_1W: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_1W', {
    label: 'Candle Abandonedbaby Bearish|1w',
    fieldName: 'Candle.AbandonedBaby.Bearish|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_240: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_240', {
    label: 'Candle Abandonedbaby Bearish|240',
    fieldName: 'Candle.AbandonedBaby.Bearish|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_30: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_30', {
    label: 'Candle Abandonedbaby Bearish|30',
    fieldName: 'Candle.AbandonedBaby.Bearish|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_5: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_5', {
    label: 'Candle Abandonedbaby Bearish|5',
    fieldName: 'Candle.AbandonedBaby.Bearish|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BEARISH_60: new BaseField('CANDLE_ABANDONEDBABY_BEARISH_60', {
    label: 'Candle Abandonedbaby Bearish|60',
    fieldName: 'Candle.AbandonedBaby.Bearish|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH: new BaseField('CANDLE_ABANDONEDBABY_BULLISH', {
    label: 'Candle.AbandonedBaby.Bullish',
    fieldName: 'Candle.AbandonedBaby.Bullish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_1: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_1', {
    label: 'Candle Abandonedbaby Bullish|1',
    fieldName: 'Candle.AbandonedBaby.Bullish|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_120: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_120', {
    label: 'Candle Abandonedbaby Bullish|120',
    fieldName: 'Candle.AbandonedBaby.Bullish|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_15: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_15', {
    label: 'Candle Abandonedbaby Bullish|15',
    fieldName: 'Candle.AbandonedBaby.Bullish|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_1M: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_1M', {
    label: 'Candle Abandonedbaby Bullish|1m',
    fieldName: 'Candle.AbandonedBaby.Bullish|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_1W: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_1W', {
    label: 'Candle Abandonedbaby Bullish|1w',
    fieldName: 'Candle.AbandonedBaby.Bullish|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_240: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_240', {
    label: 'Candle Abandonedbaby Bullish|240',
    fieldName: 'Candle.AbandonedBaby.Bullish|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_30: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_30', {
    label: 'Candle Abandonedbaby Bullish|30',
    fieldName: 'Candle.AbandonedBaby.Bullish|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_5: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_5', {
    label: 'Candle Abandonedbaby Bullish|5',
    fieldName: 'Candle.AbandonedBaby.Bullish|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ABANDONEDBABY_BULLISH_60: new BaseField('CANDLE_ABANDONEDBABY_BULLISH_60', {
    label: 'Candle Abandonedbaby Bullish|60',
    fieldName: 'Candle.AbandonedBaby.Bullish|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI: new BaseField('CANDLE_DOJI', {
    label: 'Candle.Doji',
    fieldName: 'Candle.Doji',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_1: new BaseField('CANDLE_DOJI_1', {
    label: 'Candle Doji|1',
    fieldName: 'Candle.Doji|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_120: new BaseField('CANDLE_DOJI_120', {
    label: 'Candle Doji|120',
    fieldName: 'Candle.Doji|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_15: new BaseField('CANDLE_DOJI_15', {
    label: 'Candle Doji|15',
    fieldName: 'Candle.Doji|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_1M: new BaseField('CANDLE_DOJI_1M', {
    label: 'Candle Doji|1m',
    fieldName: 'Candle.Doji|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_1W: new BaseField('CANDLE_DOJI_1W', {
    label: 'Candle Doji|1w',
    fieldName: 'Candle.Doji|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_240: new BaseField('CANDLE_DOJI_240', {
    label: 'Candle Doji|240',
    fieldName: 'Candle.Doji|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_30: new BaseField('CANDLE_DOJI_30', {
    label: 'Candle Doji|30',
    fieldName: 'Candle.Doji|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_5: new BaseField('CANDLE_DOJI_5', {
    label: 'Candle Doji|5',
    fieldName: 'Candle.Doji|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_60: new BaseField('CANDLE_DOJI_60', {
    label: 'Candle Doji|60',
    fieldName: 'Candle.Doji|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY: new BaseField('CANDLE_DOJI_DRAGONFLY', {
    label: 'Candle.Doji.Dragonfly',
    fieldName: 'Candle.Doji.Dragonfly',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_1: new BaseField('CANDLE_DOJI_DRAGONFLY_1', {
    label: 'Candle Doji Dragonfly|1',
    fieldName: 'Candle.Doji.Dragonfly|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_120: new BaseField('CANDLE_DOJI_DRAGONFLY_120', {
    label: 'Candle Doji Dragonfly|120',
    fieldName: 'Candle.Doji.Dragonfly|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_15: new BaseField('CANDLE_DOJI_DRAGONFLY_15', {
    label: 'Candle Doji Dragonfly|15',
    fieldName: 'Candle.Doji.Dragonfly|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_1M: new BaseField('CANDLE_DOJI_DRAGONFLY_1M', {
    label: 'Candle Doji Dragonfly|1m',
    fieldName: 'Candle.Doji.Dragonfly|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_1W: new BaseField('CANDLE_DOJI_DRAGONFLY_1W', {
    label: 'Candle Doji Dragonfly|1w',
    fieldName: 'Candle.Doji.Dragonfly|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_240: new BaseField('CANDLE_DOJI_DRAGONFLY_240', {
    label: 'Candle Doji Dragonfly|240',
    fieldName: 'Candle.Doji.Dragonfly|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_30: new BaseField('CANDLE_DOJI_DRAGONFLY_30', {
    label: 'Candle Doji Dragonfly|30',
    fieldName: 'Candle.Doji.Dragonfly|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_5: new BaseField('CANDLE_DOJI_DRAGONFLY_5', {
    label: 'Candle Doji Dragonfly|5',
    fieldName: 'Candle.Doji.Dragonfly|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_DRAGONFLY_60: new BaseField('CANDLE_DOJI_DRAGONFLY_60', {
    label: 'Candle Doji Dragonfly|60',
    fieldName: 'Candle.Doji.Dragonfly|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE: new BaseField('CANDLE_DOJI_GRAVESTONE', {
    label: 'Candle.Doji.Gravestone',
    fieldName: 'Candle.Doji.Gravestone',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_1: new BaseField('CANDLE_DOJI_GRAVESTONE_1', {
    label: 'Candle Doji Gravestone|1',
    fieldName: 'Candle.Doji.Gravestone|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_120: new BaseField('CANDLE_DOJI_GRAVESTONE_120', {
    label: 'Candle Doji Gravestone|120',
    fieldName: 'Candle.Doji.Gravestone|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_15: new BaseField('CANDLE_DOJI_GRAVESTONE_15', {
    label: 'Candle Doji Gravestone|15',
    fieldName: 'Candle.Doji.Gravestone|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_1M: new BaseField('CANDLE_DOJI_GRAVESTONE_1M', {
    label: 'Candle Doji Gravestone|1m',
    fieldName: 'Candle.Doji.Gravestone|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_1W: new BaseField('CANDLE_DOJI_GRAVESTONE_1W', {
    label: 'Candle Doji Gravestone|1w',
    fieldName: 'Candle.Doji.Gravestone|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_240: new BaseField('CANDLE_DOJI_GRAVESTONE_240', {
    label: 'Candle Doji Gravestone|240',
    fieldName: 'Candle.Doji.Gravestone|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_30: new BaseField('CANDLE_DOJI_GRAVESTONE_30', {
    label: 'Candle Doji Gravestone|30',
    fieldName: 'Candle.Doji.Gravestone|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_5: new BaseField('CANDLE_DOJI_GRAVESTONE_5', {
    label: 'Candle Doji Gravestone|5',
    fieldName: 'Candle.Doji.Gravestone|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_DOJI_GRAVESTONE_60: new BaseField('CANDLE_DOJI_GRAVESTONE_60', {
    label: 'Candle Doji Gravestone|60',
    fieldName: 'Candle.Doji.Gravestone|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH: new BaseField('CANDLE_ENGULFING_BEARISH', {
    label: 'Candle.Engulfing.Bearish',
    fieldName: 'Candle.Engulfing.Bearish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_1: new BaseField('CANDLE_ENGULFING_BEARISH_1', {
    label: 'Candle Engulfing Bearish|1',
    fieldName: 'Candle.Engulfing.Bearish|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_120: new BaseField('CANDLE_ENGULFING_BEARISH_120', {
    label: 'Candle Engulfing Bearish|120',
    fieldName: 'Candle.Engulfing.Bearish|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_15: new BaseField('CANDLE_ENGULFING_BEARISH_15', {
    label: 'Candle Engulfing Bearish|15',
    fieldName: 'Candle.Engulfing.Bearish|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_1M: new BaseField('CANDLE_ENGULFING_BEARISH_1M', {
    label: 'Candle Engulfing Bearish|1m',
    fieldName: 'Candle.Engulfing.Bearish|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_1W: new BaseField('CANDLE_ENGULFING_BEARISH_1W', {
    label: 'Candle Engulfing Bearish|1w',
    fieldName: 'Candle.Engulfing.Bearish|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_240: new BaseField('CANDLE_ENGULFING_BEARISH_240', {
    label: 'Candle Engulfing Bearish|240',
    fieldName: 'Candle.Engulfing.Bearish|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_30: new BaseField('CANDLE_ENGULFING_BEARISH_30', {
    label: 'Candle Engulfing Bearish|30',
    fieldName: 'Candle.Engulfing.Bearish|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_5: new BaseField('CANDLE_ENGULFING_BEARISH_5', {
    label: 'Candle Engulfing Bearish|5',
    fieldName: 'Candle.Engulfing.Bearish|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BEARISH_60: new BaseField('CANDLE_ENGULFING_BEARISH_60', {
    label: 'Candle Engulfing Bearish|60',
    fieldName: 'Candle.Engulfing.Bearish|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH: new BaseField('CANDLE_ENGULFING_BULLISH', {
    label: 'Candle.Engulfing.Bullish',
    fieldName: 'Candle.Engulfing.Bullish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_1: new BaseField('CANDLE_ENGULFING_BULLISH_1', {
    label: 'Candle Engulfing Bullish|1',
    fieldName: 'Candle.Engulfing.Bullish|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_120: new BaseField('CANDLE_ENGULFING_BULLISH_120', {
    label: 'Candle Engulfing Bullish|120',
    fieldName: 'Candle.Engulfing.Bullish|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_15: new BaseField('CANDLE_ENGULFING_BULLISH_15', {
    label: 'Candle Engulfing Bullish|15',
    fieldName: 'Candle.Engulfing.Bullish|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_1M: new BaseField('CANDLE_ENGULFING_BULLISH_1M', {
    label: 'Candle Engulfing Bullish|1m',
    fieldName: 'Candle.Engulfing.Bullish|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_1W: new BaseField('CANDLE_ENGULFING_BULLISH_1W', {
    label: 'Candle Engulfing Bullish|1w',
    fieldName: 'Candle.Engulfing.Bullish|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_240: new BaseField('CANDLE_ENGULFING_BULLISH_240', {
    label: 'Candle Engulfing Bullish|240',
    fieldName: 'Candle.Engulfing.Bullish|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_30: new BaseField('CANDLE_ENGULFING_BULLISH_30', {
    label: 'Candle Engulfing Bullish|30',
    fieldName: 'Candle.Engulfing.Bullish|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_5: new BaseField('CANDLE_ENGULFING_BULLISH_5', {
    label: 'Candle Engulfing Bullish|5',
    fieldName: 'Candle.Engulfing.Bullish|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_ENGULFING_BULLISH_60: new BaseField('CANDLE_ENGULFING_BULLISH_60', {
    label: 'Candle Engulfing Bullish|60',
    fieldName: 'Candle.Engulfing.Bullish|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR: new BaseField('CANDLE_EVENINGSTAR', {
    label: 'Candle.EveningStar',
    fieldName: 'Candle.EveningStar',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_1: new BaseField('CANDLE_EVENINGSTAR_1', {
    label: 'Candle Eveningstar|1',
    fieldName: 'Candle.EveningStar|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_120: new BaseField('CANDLE_EVENINGSTAR_120', {
    label: 'Candle Eveningstar|120',
    fieldName: 'Candle.EveningStar|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_15: new BaseField('CANDLE_EVENINGSTAR_15', {
    label: 'Candle Eveningstar|15',
    fieldName: 'Candle.EveningStar|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_1M: new BaseField('CANDLE_EVENINGSTAR_1M', {
    label: 'Candle Eveningstar|1m',
    fieldName: 'Candle.EveningStar|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_1W: new BaseField('CANDLE_EVENINGSTAR_1W', {
    label: 'Candle Eveningstar|1w',
    fieldName: 'Candle.EveningStar|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_240: new BaseField('CANDLE_EVENINGSTAR_240', {
    label: 'Candle Eveningstar|240',
    fieldName: 'Candle.EveningStar|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_30: new BaseField('CANDLE_EVENINGSTAR_30', {
    label: 'Candle Eveningstar|30',
    fieldName: 'Candle.EveningStar|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_5: new BaseField('CANDLE_EVENINGSTAR_5', {
    label: 'Candle Eveningstar|5',
    fieldName: 'Candle.EveningStar|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_EVENINGSTAR_60: new BaseField('CANDLE_EVENINGSTAR_60', {
    label: 'Candle Eveningstar|60',
    fieldName: 'Candle.EveningStar|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER: new BaseField('CANDLE_HAMMER', {
    label: 'Candle.Hammer',
    fieldName: 'Candle.Hammer',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_1: new BaseField('CANDLE_HAMMER_1', {
    label: 'Candle Hammer|1',
    fieldName: 'Candle.Hammer|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_120: new BaseField('CANDLE_HAMMER_120', {
    label: 'Candle Hammer|120',
    fieldName: 'Candle.Hammer|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_15: new BaseField('CANDLE_HAMMER_15', {
    label: 'Candle Hammer|15',
    fieldName: 'Candle.Hammer|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_1M: new BaseField('CANDLE_HAMMER_1M', {
    label: 'Candle Hammer|1m',
    fieldName: 'Candle.Hammer|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_1W: new BaseField('CANDLE_HAMMER_1W', {
    label: 'Candle Hammer|1w',
    fieldName: 'Candle.Hammer|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_240: new BaseField('CANDLE_HAMMER_240', {
    label: 'Candle Hammer|240',
    fieldName: 'Candle.Hammer|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_30: new BaseField('CANDLE_HAMMER_30', {
    label: 'Candle Hammer|30',
    fieldName: 'Candle.Hammer|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_5: new BaseField('CANDLE_HAMMER_5', {
    label: 'Candle Hammer|5',
    fieldName: 'Candle.Hammer|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HAMMER_60: new BaseField('CANDLE_HAMMER_60', {
    label: 'Candle Hammer|60',
    fieldName: 'Candle.Hammer|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN: new BaseField('CANDLE_HANGINGMAN', {
    label: 'Candle.HangingMan',
    fieldName: 'Candle.HangingMan',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_1: new BaseField('CANDLE_HANGINGMAN_1', {
    label: 'Candle Hangingman|1',
    fieldName: 'Candle.HangingMan|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_120: new BaseField('CANDLE_HANGINGMAN_120', {
    label: 'Candle Hangingman|120',
    fieldName: 'Candle.HangingMan|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_15: new BaseField('CANDLE_HANGINGMAN_15', {
    label: 'Candle Hangingman|15',
    fieldName: 'Candle.HangingMan|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_1M: new BaseField('CANDLE_HANGINGMAN_1M', {
    label: 'Candle Hangingman|1m',
    fieldName: 'Candle.HangingMan|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_1W: new BaseField('CANDLE_HANGINGMAN_1W', {
    label: 'Candle Hangingman|1w',
    fieldName: 'Candle.HangingMan|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_240: new BaseField('CANDLE_HANGINGMAN_240', {
    label: 'Candle Hangingman|240',
    fieldName: 'Candle.HangingMan|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_30: new BaseField('CANDLE_HANGINGMAN_30', {
    label: 'Candle Hangingman|30',
    fieldName: 'Candle.HangingMan|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_5: new BaseField('CANDLE_HANGINGMAN_5', {
    label: 'Candle Hangingman|5',
    fieldName: 'Candle.HangingMan|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HANGINGMAN_60: new BaseField('CANDLE_HANGINGMAN_60', {
    label: 'Candle Hangingman|60',
    fieldName: 'Candle.HangingMan|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH: new BaseField('CANDLE_HARAMI_BEARISH', {
    label: 'Candle.Harami.Bearish',
    fieldName: 'Candle.Harami.Bearish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_1: new BaseField('CANDLE_HARAMI_BEARISH_1', {
    label: 'Candle Harami Bearish|1',
    fieldName: 'Candle.Harami.Bearish|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_120: new BaseField('CANDLE_HARAMI_BEARISH_120', {
    label: 'Candle Harami Bearish|120',
    fieldName: 'Candle.Harami.Bearish|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_15: new BaseField('CANDLE_HARAMI_BEARISH_15', {
    label: 'Candle Harami Bearish|15',
    fieldName: 'Candle.Harami.Bearish|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_1M: new BaseField('CANDLE_HARAMI_BEARISH_1M', {
    label: 'Candle Harami Bearish|1m',
    fieldName: 'Candle.Harami.Bearish|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_1W: new BaseField('CANDLE_HARAMI_BEARISH_1W', {
    label: 'Candle Harami Bearish|1w',
    fieldName: 'Candle.Harami.Bearish|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_240: new BaseField('CANDLE_HARAMI_BEARISH_240', {
    label: 'Candle Harami Bearish|240',
    fieldName: 'Candle.Harami.Bearish|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_30: new BaseField('CANDLE_HARAMI_BEARISH_30', {
    label: 'Candle Harami Bearish|30',
    fieldName: 'Candle.Harami.Bearish|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_5: new BaseField('CANDLE_HARAMI_BEARISH_5', {
    label: 'Candle Harami Bearish|5',
    fieldName: 'Candle.Harami.Bearish|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BEARISH_60: new BaseField('CANDLE_HARAMI_BEARISH_60', {
    label: 'Candle Harami Bearish|60',
    fieldName: 'Candle.Harami.Bearish|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH: new BaseField('CANDLE_HARAMI_BULLISH', {
    label: 'Candle.Harami.Bullish',
    fieldName: 'Candle.Harami.Bullish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_1: new BaseField('CANDLE_HARAMI_BULLISH_1', {
    label: 'Candle Harami Bullish|1',
    fieldName: 'Candle.Harami.Bullish|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_120: new BaseField('CANDLE_HARAMI_BULLISH_120', {
    label: 'Candle Harami Bullish|120',
    fieldName: 'Candle.Harami.Bullish|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_15: new BaseField('CANDLE_HARAMI_BULLISH_15', {
    label: 'Candle Harami Bullish|15',
    fieldName: 'Candle.Harami.Bullish|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_1M: new BaseField('CANDLE_HARAMI_BULLISH_1M', {
    label: 'Candle Harami Bullish|1m',
    fieldName: 'Candle.Harami.Bullish|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_1W: new BaseField('CANDLE_HARAMI_BULLISH_1W', {
    label: 'Candle Harami Bullish|1w',
    fieldName: 'Candle.Harami.Bullish|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_240: new BaseField('CANDLE_HARAMI_BULLISH_240', {
    label: 'Candle Harami Bullish|240',
    fieldName: 'Candle.Harami.Bullish|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_30: new BaseField('CANDLE_HARAMI_BULLISH_30', {
    label: 'Candle Harami Bullish|30',
    fieldName: 'Candle.Harami.Bullish|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_5: new BaseField('CANDLE_HARAMI_BULLISH_5', {
    label: 'Candle Harami Bullish|5',
    fieldName: 'Candle.Harami.Bullish|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_HARAMI_BULLISH_60: new BaseField('CANDLE_HARAMI_BULLISH_60', {
    label: 'Candle Harami Bullish|60',
    fieldName: 'Candle.Harami.Bullish|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER: new BaseField('CANDLE_INVERTEDHAMMER', {
    label: 'Candle.InvertedHammer',
    fieldName: 'Candle.InvertedHammer',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_1: new BaseField('CANDLE_INVERTEDHAMMER_1', {
    label: 'Candle Invertedhammer|1',
    fieldName: 'Candle.InvertedHammer|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_120: new BaseField('CANDLE_INVERTEDHAMMER_120', {
    label: 'Candle Invertedhammer|120',
    fieldName: 'Candle.InvertedHammer|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_15: new BaseField('CANDLE_INVERTEDHAMMER_15', {
    label: 'Candle Invertedhammer|15',
    fieldName: 'Candle.InvertedHammer|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_1M: new BaseField('CANDLE_INVERTEDHAMMER_1M', {
    label: 'Candle Invertedhammer|1m',
    fieldName: 'Candle.InvertedHammer|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_1W: new BaseField('CANDLE_INVERTEDHAMMER_1W', {
    label: 'Candle Invertedhammer|1w',
    fieldName: 'Candle.InvertedHammer|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_240: new BaseField('CANDLE_INVERTEDHAMMER_240', {
    label: 'Candle Invertedhammer|240',
    fieldName: 'Candle.InvertedHammer|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_30: new BaseField('CANDLE_INVERTEDHAMMER_30', {
    label: 'Candle Invertedhammer|30',
    fieldName: 'Candle.InvertedHammer|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_5: new BaseField('CANDLE_INVERTEDHAMMER_5', {
    label: 'Candle Invertedhammer|5',
    fieldName: 'Candle.InvertedHammer|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_INVERTEDHAMMER_60: new BaseField('CANDLE_INVERTEDHAMMER_60', {
    label: 'Candle Invertedhammer|60',
    fieldName: 'Candle.InvertedHammer|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH: new BaseField('CANDLE_KICKING_BEARISH', {
    label: 'Candle.Kicking.Bearish',
    fieldName: 'Candle.Kicking.Bearish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_1: new BaseField('CANDLE_KICKING_BEARISH_1', {
    label: 'Candle Kicking Bearish|1',
    fieldName: 'Candle.Kicking.Bearish|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_120: new BaseField('CANDLE_KICKING_BEARISH_120', {
    label: 'Candle Kicking Bearish|120',
    fieldName: 'Candle.Kicking.Bearish|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_15: new BaseField('CANDLE_KICKING_BEARISH_15', {
    label: 'Candle Kicking Bearish|15',
    fieldName: 'Candle.Kicking.Bearish|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_1M: new BaseField('CANDLE_KICKING_BEARISH_1M', {
    label: 'Candle Kicking Bearish|1m',
    fieldName: 'Candle.Kicking.Bearish|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_1W: new BaseField('CANDLE_KICKING_BEARISH_1W', {
    label: 'Candle Kicking Bearish|1w',
    fieldName: 'Candle.Kicking.Bearish|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_240: new BaseField('CANDLE_KICKING_BEARISH_240', {
    label: 'Candle Kicking Bearish|240',
    fieldName: 'Candle.Kicking.Bearish|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_30: new BaseField('CANDLE_KICKING_BEARISH_30', {
    label: 'Candle Kicking Bearish|30',
    fieldName: 'Candle.Kicking.Bearish|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_5: new BaseField('CANDLE_KICKING_BEARISH_5', {
    label: 'Candle Kicking Bearish|5',
    fieldName: 'Candle.Kicking.Bearish|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BEARISH_60: new BaseField('CANDLE_KICKING_BEARISH_60', {
    label: 'Candle Kicking Bearish|60',
    fieldName: 'Candle.Kicking.Bearish|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH: new BaseField('CANDLE_KICKING_BULLISH', {
    label: 'Candle.Kicking.Bullish',
    fieldName: 'Candle.Kicking.Bullish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_1: new BaseField('CANDLE_KICKING_BULLISH_1', {
    label: 'Candle Kicking Bullish|1',
    fieldName: 'Candle.Kicking.Bullish|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_120: new BaseField('CANDLE_KICKING_BULLISH_120', {
    label: 'Candle Kicking Bullish|120',
    fieldName: 'Candle.Kicking.Bullish|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_15: new BaseField('CANDLE_KICKING_BULLISH_15', {
    label: 'Candle Kicking Bullish|15',
    fieldName: 'Candle.Kicking.Bullish|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_1M: new BaseField('CANDLE_KICKING_BULLISH_1M', {
    label: 'Candle Kicking Bullish|1m',
    fieldName: 'Candle.Kicking.Bullish|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_1W: new BaseField('CANDLE_KICKING_BULLISH_1W', {
    label: 'Candle Kicking Bullish|1w',
    fieldName: 'Candle.Kicking.Bullish|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_240: new BaseField('CANDLE_KICKING_BULLISH_240', {
    label: 'Candle Kicking Bullish|240',
    fieldName: 'Candle.Kicking.Bullish|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_30: new BaseField('CANDLE_KICKING_BULLISH_30', {
    label: 'Candle Kicking Bullish|30',
    fieldName: 'Candle.Kicking.Bullish|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_5: new BaseField('CANDLE_KICKING_BULLISH_5', {
    label: 'Candle Kicking Bullish|5',
    fieldName: 'Candle.Kicking.Bullish|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_KICKING_BULLISH_60: new BaseField('CANDLE_KICKING_BULLISH_60', {
    label: 'Candle Kicking Bullish|60',
    fieldName: 'Candle.Kicking.Bullish|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER: new BaseField('CANDLE_LONGSHADOW_UPPER', {
    label: 'Candle.LongShadow.Upper',
    fieldName: 'Candle.LongShadow.Upper',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_1: new BaseField('CANDLE_LONGSHADOW_UPPER_1', {
    label: 'Candle Longshadow Upper|1',
    fieldName: 'Candle.LongShadow.Upper|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_120: new BaseField('CANDLE_LONGSHADOW_UPPER_120', {
    label: 'Candle Longshadow Upper|120',
    fieldName: 'Candle.LongShadow.Upper|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_15: new BaseField('CANDLE_LONGSHADOW_UPPER_15', {
    label: 'Candle Longshadow Upper|15',
    fieldName: 'Candle.LongShadow.Upper|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_1M: new BaseField('CANDLE_LONGSHADOW_UPPER_1M', {
    label: 'Candle Longshadow Upper|1m',
    fieldName: 'Candle.LongShadow.Upper|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_1W: new BaseField('CANDLE_LONGSHADOW_UPPER_1W', {
    label: 'Candle Longshadow Upper|1w',
    fieldName: 'Candle.LongShadow.Upper|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_240: new BaseField('CANDLE_LONGSHADOW_UPPER_240', {
    label: 'Candle Longshadow Upper|240',
    fieldName: 'Candle.LongShadow.Upper|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_30: new BaseField('CANDLE_LONGSHADOW_UPPER_30', {
    label: 'Candle Longshadow Upper|30',
    fieldName: 'Candle.LongShadow.Upper|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_5: new BaseField('CANDLE_LONGSHADOW_UPPER_5', {
    label: 'Candle Longshadow Upper|5',
    fieldName: 'Candle.LongShadow.Upper|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_LONGSHADOW_UPPER_60: new BaseField('CANDLE_LONGSHADOW_UPPER_60', {
    label: 'Candle Longshadow Upper|60',
    fieldName: 'Candle.LongShadow.Upper|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK: new BaseField('CANDLE_MARUBOZU_BLACK', {
    label: 'Candle.Marubozu.Black',
    fieldName: 'Candle.Marubozu.Black',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_1: new BaseField('CANDLE_MARUBOZU_BLACK_1', {
    label: 'Candle Marubozu Black|1',
    fieldName: 'Candle.Marubozu.Black|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_120: new BaseField('CANDLE_MARUBOZU_BLACK_120', {
    label: 'Candle Marubozu Black|120',
    fieldName: 'Candle.Marubozu.Black|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_15: new BaseField('CANDLE_MARUBOZU_BLACK_15', {
    label: 'Candle Marubozu Black|15',
    fieldName: 'Candle.Marubozu.Black|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_1M: new BaseField('CANDLE_MARUBOZU_BLACK_1M', {
    label: 'Candle Marubozu Black|1m',
    fieldName: 'Candle.Marubozu.Black|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_1W: new BaseField('CANDLE_MARUBOZU_BLACK_1W', {
    label: 'Candle Marubozu Black|1w',
    fieldName: 'Candle.Marubozu.Black|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_240: new BaseField('CANDLE_MARUBOZU_BLACK_240', {
    label: 'Candle Marubozu Black|240',
    fieldName: 'Candle.Marubozu.Black|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_30: new BaseField('CANDLE_MARUBOZU_BLACK_30', {
    label: 'Candle Marubozu Black|30',
    fieldName: 'Candle.Marubozu.Black|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_5: new BaseField('CANDLE_MARUBOZU_BLACK_5', {
    label: 'Candle Marubozu Black|5',
    fieldName: 'Candle.Marubozu.Black|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_BLACK_60: new BaseField('CANDLE_MARUBOZU_BLACK_60', {
    label: 'Candle Marubozu Black|60',
    fieldName: 'Candle.Marubozu.Black|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE: new BaseField('CANDLE_MARUBOZU_WHITE', {
    label: 'Candle.Marubozu.White',
    fieldName: 'Candle.Marubozu.White',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_1: new BaseField('CANDLE_MARUBOZU_WHITE_1', {
    label: 'Candle Marubozu White|1',
    fieldName: 'Candle.Marubozu.White|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_120: new BaseField('CANDLE_MARUBOZU_WHITE_120', {
    label: 'Candle Marubozu White|120',
    fieldName: 'Candle.Marubozu.White|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_15: new BaseField('CANDLE_MARUBOZU_WHITE_15', {
    label: 'Candle Marubozu White|15',
    fieldName: 'Candle.Marubozu.White|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_1M: new BaseField('CANDLE_MARUBOZU_WHITE_1M', {
    label: 'Candle Marubozu White|1m',
    fieldName: 'Candle.Marubozu.White|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_1W: new BaseField('CANDLE_MARUBOZU_WHITE_1W', {
    label: 'Candle Marubozu White|1w',
    fieldName: 'Candle.Marubozu.White|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_240: new BaseField('CANDLE_MARUBOZU_WHITE_240', {
    label: 'Candle Marubozu White|240',
    fieldName: 'Candle.Marubozu.White|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_30: new BaseField('CANDLE_MARUBOZU_WHITE_30', {
    label: 'Candle Marubozu White|30',
    fieldName: 'Candle.Marubozu.White|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_5: new BaseField('CANDLE_MARUBOZU_WHITE_5', {
    label: 'Candle Marubozu White|5',
    fieldName: 'Candle.Marubozu.White|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MARUBOZU_WHITE_60: new BaseField('CANDLE_MARUBOZU_WHITE_60', {
    label: 'Candle Marubozu White|60',
    fieldName: 'Candle.Marubozu.White|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR: new BaseField('CANDLE_MORNINGSTAR', {
    label: 'Candle.MorningStar',
    fieldName: 'Candle.MorningStar',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_1: new BaseField('CANDLE_MORNINGSTAR_1', {
    label: 'Candle Morningstar|1',
    fieldName: 'Candle.MorningStar|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_120: new BaseField('CANDLE_MORNINGSTAR_120', {
    label: 'Candle Morningstar|120',
    fieldName: 'Candle.MorningStar|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_15: new BaseField('CANDLE_MORNINGSTAR_15', {
    label: 'Candle Morningstar|15',
    fieldName: 'Candle.MorningStar|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_1M: new BaseField('CANDLE_MORNINGSTAR_1M', {
    label: 'Candle Morningstar|1m',
    fieldName: 'Candle.MorningStar|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_1W: new BaseField('CANDLE_MORNINGSTAR_1W', {
    label: 'Candle Morningstar|1w',
    fieldName: 'Candle.MorningStar|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_240: new BaseField('CANDLE_MORNINGSTAR_240', {
    label: 'Candle Morningstar|240',
    fieldName: 'Candle.MorningStar|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_30: new BaseField('CANDLE_MORNINGSTAR_30', {
    label: 'Candle Morningstar|30',
    fieldName: 'Candle.MorningStar|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_5: new BaseField('CANDLE_MORNINGSTAR_5', {
    label: 'Candle Morningstar|5',
    fieldName: 'Candle.MorningStar|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_MORNINGSTAR_60: new BaseField('CANDLE_MORNINGSTAR_60', {
    label: 'Candle Morningstar|60',
    fieldName: 'Candle.MorningStar|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR: new BaseField('CANDLE_SHOOTINGSTAR', {
    label: 'Candle.ShootingStar',
    fieldName: 'Candle.ShootingStar',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_1: new BaseField('CANDLE_SHOOTINGSTAR_1', {
    label: 'Candle Shootingstar|1',
    fieldName: 'Candle.ShootingStar|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_120: new BaseField('CANDLE_SHOOTINGSTAR_120', {
    label: 'Candle Shootingstar|120',
    fieldName: 'Candle.ShootingStar|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_15: new BaseField('CANDLE_SHOOTINGSTAR_15', {
    label: 'Candle Shootingstar|15',
    fieldName: 'Candle.ShootingStar|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_1M: new BaseField('CANDLE_SHOOTINGSTAR_1M', {
    label: 'Candle Shootingstar|1m',
    fieldName: 'Candle.ShootingStar|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_1W: new BaseField('CANDLE_SHOOTINGSTAR_1W', {
    label: 'Candle Shootingstar|1w',
    fieldName: 'Candle.ShootingStar|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_240: new BaseField('CANDLE_SHOOTINGSTAR_240', {
    label: 'Candle Shootingstar|240',
    fieldName: 'Candle.ShootingStar|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_30: new BaseField('CANDLE_SHOOTINGSTAR_30', {
    label: 'Candle Shootingstar|30',
    fieldName: 'Candle.ShootingStar|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_5: new BaseField('CANDLE_SHOOTINGSTAR_5', {
    label: 'Candle Shootingstar|5',
    fieldName: 'Candle.ShootingStar|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SHOOTINGSTAR_60: new BaseField('CANDLE_SHOOTINGSTAR_60', {
    label: 'Candle Shootingstar|60',
    fieldName: 'Candle.ShootingStar|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK: new BaseField('CANDLE_SPINNINGTOP_BLACK', {
    label: 'Candle.SpinningTop.Black',
    fieldName: 'Candle.SpinningTop.Black',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_1: new BaseField('CANDLE_SPINNINGTOP_BLACK_1', {
    label: 'Candle Spinningtop Black|1',
    fieldName: 'Candle.SpinningTop.Black|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_120: new BaseField('CANDLE_SPINNINGTOP_BLACK_120', {
    label: 'Candle Spinningtop Black|120',
    fieldName: 'Candle.SpinningTop.Black|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_15: new BaseField('CANDLE_SPINNINGTOP_BLACK_15', {
    label: 'Candle Spinningtop Black|15',
    fieldName: 'Candle.SpinningTop.Black|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_1M: new BaseField('CANDLE_SPINNINGTOP_BLACK_1M', {
    label: 'Candle Spinningtop Black|1m',
    fieldName: 'Candle.SpinningTop.Black|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_1W: new BaseField('CANDLE_SPINNINGTOP_BLACK_1W', {
    label: 'Candle Spinningtop Black|1w',
    fieldName: 'Candle.SpinningTop.Black|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_240: new BaseField('CANDLE_SPINNINGTOP_BLACK_240', {
    label: 'Candle Spinningtop Black|240',
    fieldName: 'Candle.SpinningTop.Black|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_30: new BaseField('CANDLE_SPINNINGTOP_BLACK_30', {
    label: 'Candle Spinningtop Black|30',
    fieldName: 'Candle.SpinningTop.Black|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_5: new BaseField('CANDLE_SPINNINGTOP_BLACK_5', {
    label: 'Candle Spinningtop Black|5',
    fieldName: 'Candle.SpinningTop.Black|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_BLACK_60: new BaseField('CANDLE_SPINNINGTOP_BLACK_60', {
    label: 'Candle Spinningtop Black|60',
    fieldName: 'Candle.SpinningTop.Black|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE: new BaseField('CANDLE_SPINNINGTOP_WHITE', {
    label: 'Candle.SpinningTop.White',
    fieldName: 'Candle.SpinningTop.White',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_1: new BaseField('CANDLE_SPINNINGTOP_WHITE_1', {
    label: 'Candle Spinningtop White|1',
    fieldName: 'Candle.SpinningTop.White|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_120: new BaseField('CANDLE_SPINNINGTOP_WHITE_120', {
    label: 'Candle Spinningtop White|120',
    fieldName: 'Candle.SpinningTop.White|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_15: new BaseField('CANDLE_SPINNINGTOP_WHITE_15', {
    label: 'Candle Spinningtop White|15',
    fieldName: 'Candle.SpinningTop.White|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_1M: new BaseField('CANDLE_SPINNINGTOP_WHITE_1M', {
    label: 'Candle Spinningtop White|1m',
    fieldName: 'Candle.SpinningTop.White|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_1W: new BaseField('CANDLE_SPINNINGTOP_WHITE_1W', {
    label: 'Candle Spinningtop White|1w',
    fieldName: 'Candle.SpinningTop.White|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_240: new BaseField('CANDLE_SPINNINGTOP_WHITE_240', {
    label: 'Candle Spinningtop White|240',
    fieldName: 'Candle.SpinningTop.White|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_30: new BaseField('CANDLE_SPINNINGTOP_WHITE_30', {
    label: 'Candle Spinningtop White|30',
    fieldName: 'Candle.SpinningTop.White|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_5: new BaseField('CANDLE_SPINNINGTOP_WHITE_5', {
    label: 'Candle Spinningtop White|5',
    fieldName: 'Candle.SpinningTop.White|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_SPINNINGTOP_WHITE_60: new BaseField('CANDLE_SPINNINGTOP_WHITE_60', {
    label: 'Candle Spinningtop White|60',
    fieldName: 'Candle.SpinningTop.White|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH: new BaseField('CANDLE_TRISTAR_BEARISH', {
    label: 'Candle.TriStar.Bearish',
    fieldName: 'Candle.TriStar.Bearish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_1: new BaseField('CANDLE_TRISTAR_BEARISH_1', {
    label: 'Candle Tristar Bearish|1',
    fieldName: 'Candle.TriStar.Bearish|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_120: new BaseField('CANDLE_TRISTAR_BEARISH_120', {
    label: 'Candle Tristar Bearish|120',
    fieldName: 'Candle.TriStar.Bearish|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_15: new BaseField('CANDLE_TRISTAR_BEARISH_15', {
    label: 'Candle Tristar Bearish|15',
    fieldName: 'Candle.TriStar.Bearish|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_1M: new BaseField('CANDLE_TRISTAR_BEARISH_1M', {
    label: 'Candle Tristar Bearish|1m',
    fieldName: 'Candle.TriStar.Bearish|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_1W: new BaseField('CANDLE_TRISTAR_BEARISH_1W', {
    label: 'Candle Tristar Bearish|1w',
    fieldName: 'Candle.TriStar.Bearish|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_240: new BaseField('CANDLE_TRISTAR_BEARISH_240', {
    label: 'Candle Tristar Bearish|240',
    fieldName: 'Candle.TriStar.Bearish|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_30: new BaseField('CANDLE_TRISTAR_BEARISH_30', {
    label: 'Candle Tristar Bearish|30',
    fieldName: 'Candle.TriStar.Bearish|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_5: new BaseField('CANDLE_TRISTAR_BEARISH_5', {
    label: 'Candle Tristar Bearish|5',
    fieldName: 'Candle.TriStar.Bearish|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BEARISH_60: new BaseField('CANDLE_TRISTAR_BEARISH_60', {
    label: 'Candle Tristar Bearish|60',
    fieldName: 'Candle.TriStar.Bearish|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH: new BaseField('CANDLE_TRISTAR_BULLISH', {
    label: 'Candle.TriStar.Bullish',
    fieldName: 'Candle.TriStar.Bullish',
    format: 'bool',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_1: new BaseField('CANDLE_TRISTAR_BULLISH_1', {
    label: 'Candle Tristar Bullish|1',
    fieldName: 'Candle.TriStar.Bullish|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_120: new BaseField('CANDLE_TRISTAR_BULLISH_120', {
    label: 'Candle Tristar Bullish|120',
    fieldName: 'Candle.TriStar.Bullish|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_15: new BaseField('CANDLE_TRISTAR_BULLISH_15', {
    label: 'Candle Tristar Bullish|15',
    fieldName: 'Candle.TriStar.Bullish|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_1M: new BaseField('CANDLE_TRISTAR_BULLISH_1M', {
    label: 'Candle Tristar Bullish|1m',
    fieldName: 'Candle.TriStar.Bullish|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_1W: new BaseField('CANDLE_TRISTAR_BULLISH_1W', {
    label: 'Candle Tristar Bullish|1w',
    fieldName: 'Candle.TriStar.Bullish|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_240: new BaseField('CANDLE_TRISTAR_BULLISH_240', {
    label: 'Candle Tristar Bullish|240',
    fieldName: 'Candle.TriStar.Bullish|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_30: new BaseField('CANDLE_TRISTAR_BULLISH_30', {
    label: 'Candle Tristar Bullish|30',
    fieldName: 'Candle.TriStar.Bullish|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_5: new BaseField('CANDLE_TRISTAR_BULLISH_5', {
    label: 'Candle Tristar Bullish|5',
    fieldName: 'Candle.TriStar.Bullish|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  CANDLE_TRISTAR_BULLISH_60: new BaseField('CANDLE_TRISTAR_BULLISH_60', {
    label: 'Candle Tristar Bullish|60',
    fieldName: 'Candle.TriStar.Bullish|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  // === Recommendations (57 fields) ===

  RECEIVABLES_TURNOVER_FQ: new BaseField('RECEIVABLES_TURNOVER_FQ', {
    label: 'Receivables Turnover FQ',
    fieldName: 'receivables_turnover_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RECEIVABLES_TURNOVER_FY: new BaseField('RECEIVABLES_TURNOVER_FY', {
    label: 'Receivables Turnover (FY)',
    fieldName: 'receivables_turnover_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RECENT_EARNINGS_DATE: new BaseField('RECENT_EARNINGS_DATE', {
    label: 'Recent Earnings Date',
    fieldName: 'earnings_release_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  RECOMMENDATION_BUY: new BaseField('RECOMMENDATION_BUY', {
    label: 'Recommendation Buy',
    fieldName: 'recommendation_buy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RECOMMENDATION_HOLD: new BaseField('RECOMMENDATION_HOLD', {
    label: 'Recommendation Hold',
    fieldName: 'recommendation_hold',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RECOMMENDATION_MARK: new BaseField('RECOMMENDATION_MARK', {
    label: 'Analyst Rating',
    fieldName: 'recommendation_mark',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RECOMMENDATION_OVER: new BaseField('RECOMMENDATION_OVER', {
    label: 'Recommendation Over',
    fieldName: 'recommendation_over',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RECOMMENDATION_SELL: new BaseField('RECOMMENDATION_SELL', {
    label: 'Recommendation Sell',
    fieldName: 'recommendation_sell',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RECOMMENDATION_TOTAL: new BaseField('RECOMMENDATION_TOTAL', {
    label: 'Recommendation Total',
    fieldName: 'recommendation_total',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RECOMMENDATION_UNDER: new BaseField('RECOMMENDATION_UNDER', {
    label: 'Recommendation Under',
    fieldName: 'recommendation_under',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RECOMMEND_ALL_1: new BaseField('RECOMMEND_ALL_1', {
    label: 'Recommend All|1',
    fieldName: 'Recommend.All|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_120: new BaseField('RECOMMEND_ALL_120', {
    label: 'Recommend All|120',
    fieldName: 'Recommend.All|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_15: new BaseField('RECOMMEND_ALL_15', {
    label: 'Recommend All|15',
    fieldName: 'Recommend.All|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_1M: new BaseField('RECOMMEND_ALL_1M', {
    label: 'Recommend All|1m',
    fieldName: 'Recommend.All|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_1W: new BaseField('RECOMMEND_ALL_1W', {
    label: 'Recommend All|1w',
    fieldName: 'Recommend.All|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_240: new BaseField('RECOMMEND_ALL_240', {
    label: 'Recommend All|240',
    fieldName: 'Recommend.All|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_30: new BaseField('RECOMMEND_ALL_30', {
    label: 'Recommend All|30',
    fieldName: 'Recommend.All|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_5: new BaseField('RECOMMEND_ALL_5', {
    label: 'Recommend All|5',
    fieldName: 'Recommend.All|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_ALL_60: new BaseField('RECOMMEND_ALL_60', {
    label: 'Recommend All|60',
    fieldName: 'Recommend.All|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_1: new BaseField('RECOMMEND_MA_1', {
    label: 'Recommend Ma|1',
    fieldName: 'Recommend.MA|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_120: new BaseField('RECOMMEND_MA_120', {
    label: 'Recommend Ma|120',
    fieldName: 'Recommend.MA|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_15: new BaseField('RECOMMEND_MA_15', {
    label: 'Recommend Ma|15',
    fieldName: 'Recommend.MA|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_1M: new BaseField('RECOMMEND_MA_1M', {
    label: 'Recommend Ma|1m',
    fieldName: 'Recommend.MA|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_1W: new BaseField('RECOMMEND_MA_1W', {
    label: 'Recommend Ma|1w',
    fieldName: 'Recommend.MA|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_240: new BaseField('RECOMMEND_MA_240', {
    label: 'Recommend Ma|240',
    fieldName: 'Recommend.MA|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_30: new BaseField('RECOMMEND_MA_30', {
    label: 'Recommend Ma|30',
    fieldName: 'Recommend.MA|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_5: new BaseField('RECOMMEND_MA_5', {
    label: 'Recommend Ma|5',
    fieldName: 'Recommend.MA|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_MA_60: new BaseField('RECOMMEND_MA_60', {
    label: 'Recommend Ma|60',
    fieldName: 'Recommend.MA|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_1: new BaseField('RECOMMEND_OTHER_1', {
    label: 'Recommend Other|1',
    fieldName: 'Recommend.Other|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_120: new BaseField('RECOMMEND_OTHER_120', {
    label: 'Recommend Other|120',
    fieldName: 'Recommend.Other|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_15: new BaseField('RECOMMEND_OTHER_15', {
    label: 'Recommend Other|15',
    fieldName: 'Recommend.Other|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_1M: new BaseField('RECOMMEND_OTHER_1M', {
    label: 'Recommend Other|1m',
    fieldName: 'Recommend.Other|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_1W: new BaseField('RECOMMEND_OTHER_1W', {
    label: 'Recommend Other|1w',
    fieldName: 'Recommend.Other|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_240: new BaseField('RECOMMEND_OTHER_240', {
    label: 'Recommend Other|240',
    fieldName: 'Recommend.Other|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_30: new BaseField('RECOMMEND_OTHER_30', {
    label: 'Recommend Other|30',
    fieldName: 'Recommend.Other|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_5: new BaseField('RECOMMEND_OTHER_5', {
    label: 'Recommend Other|5',
    fieldName: 'Recommend.Other|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RECOMMEND_OTHER_60: new BaseField('RECOMMEND_OTHER_60', {
    label: 'Recommend Other|60',
    fieldName: 'Recommend.Other|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_BBPOWER: new BaseField('REC_BBPOWER', {
    label: 'Rec Bbpower',
    fieldName: 'Rec.BBPower',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_BBPOWER_1: new BaseField('REC_BBPOWER_1', {
    label: 'Rec Bbpower|1',
    fieldName: 'Rec.BBPower|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_BBPOWER_120: new BaseField('REC_BBPOWER_120', {
    label: 'Rec Bbpower|120',
    fieldName: 'Rec.BBPower|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_BBPOWER_15: new BaseField('REC_BBPOWER_15', {
    label: 'Rec Bbpower|15',
    fieldName: 'Rec.BBPower|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_BBPOWER_1M: new BaseField('REC_BBPOWER_1M', {
    label: 'Rec Bbpower|1m',
    fieldName: 'Rec.BBPower|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_BBPOWER_1W: new BaseField('REC_BBPOWER_1W', {
    label: 'Rec Bbpower|1w',
    fieldName: 'Rec.BBPower|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_BBPOWER_240: new BaseField('REC_BBPOWER_240', {
    label: 'Rec Bbpower|240',
    fieldName: 'Rec.BBPower|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_BBPOWER_30: new BaseField('REC_BBPOWER_30', {
    label: 'Rec Bbpower|30',
    fieldName: 'Rec.BBPower|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_BBPOWER_5: new BaseField('REC_BBPOWER_5', {
    label: 'Rec Bbpower|5',
    fieldName: 'Rec.BBPower|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_BBPOWER_60: new BaseField('REC_BBPOWER_60', {
    label: 'Rec Bbpower|60',
    fieldName: 'Rec.BBPower|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  REC_WR: new BaseField('REC_WR', {
    label: 'Rec Wr',
    fieldName: 'Rec.WR',
    format: 'round',
    interval: false,
    historical: false,
  }),

  REC_WR_1: new BaseField('REC_WR_1', {
    label: 'Rec Wr|1',
    fieldName: 'Rec.WR|1',
    format: 'round',
    interval: false,
    historical: false,
  }),

  REC_WR_120: new BaseField('REC_WR_120', {
    label: 'Rec Wr|120',
    fieldName: 'Rec.WR|120',
    format: 'round',
    interval: false,
    historical: false,
  }),

  REC_WR_15: new BaseField('REC_WR_15', {
    label: 'Rec Wr|15',
    fieldName: 'Rec.WR|15',
    format: 'round',
    interval: false,
    historical: false,
  }),

  REC_WR_1M: new BaseField('REC_WR_1M', {
    label: 'Rec Wr|1m',
    fieldName: 'Rec.WR|1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  REC_WR_1W: new BaseField('REC_WR_1W', {
    label: 'Rec Wr|1w',
    fieldName: 'Rec.WR|1W',
    format: 'round',
    interval: false,
    historical: false,
  }),

  REC_WR_240: new BaseField('REC_WR_240', {
    label: 'Rec Wr|240',
    fieldName: 'Rec.WR|240',
    format: 'round',
    interval: false,
    historical: false,
  }),

  REC_WR_30: new BaseField('REC_WR_30', {
    label: 'Rec Wr|30',
    fieldName: 'Rec.WR|30',
    format: 'round',
    interval: false,
    historical: false,
  }),

  REC_WR_5: new BaseField('REC_WR_5', {
    label: 'Rec Wr|5',
    fieldName: 'Rec.WR|5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  REC_WR_60: new BaseField('REC_WR_60', {
    label: 'Rec Wr|60',
    fieldName: 'Rec.WR|60',
    format: 'round',
    interval: false,
    historical: false,
  }),

  // === Performance & Change (193 fields) ===

  ALL_TIME_PERFORMANCE: new BaseField('ALL_TIME_PERFORMANCE', {
    label: 'All Time Performance',
    fieldName: 'Perf.All',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  AUM_PERF_1M: new BaseField('AUM_PERF_1M', {
    label: 'Aum Perf 1m',
    fieldName: 'aum_perf.1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AUM_PERF_1Y: new BaseField('AUM_PERF_1Y', {
    label: 'Aum Perf 1y',
    fieldName: 'aum_perf.1Y',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AUM_PERF_3M: new BaseField('AUM_PERF_3M', {
    label: 'Aum Perf 3m',
    fieldName: 'aum_perf.3M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AUM_PERF_3Y: new BaseField('AUM_PERF_3Y', {
    label: 'Aum Perf 3y',
    fieldName: 'aum_perf.3Y',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AUM_PERF_5Y: new BaseField('AUM_PERF_5Y', {
    label: 'Aum Perf 5y',
    fieldName: 'aum_perf.5Y',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AUM_PERF_YTD: new BaseField('AUM_PERF_YTD', {
    label: 'Aum Perf Ytd',
    fieldName: 'aum_perf.YTD',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CAPITAL_EXPENDITURES_UNCHANGED_FQ_H: new BaseField('CAPITAL_EXPENDITURES_UNCHANGED_FQ_H', {
    label: 'Capital Expenditures Unchanged FQ H',
    fieldName: 'capital_expenditures_unchanged_fq_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CAPITAL_EXPENDITURES_UNCHANGED_FY_H: new BaseField('CAPITAL_EXPENDITURES_UNCHANGED_FY_H', {
    label: 'Capital Expenditures Unchanged FY H',
    fieldName: 'capital_expenditures_unchanged_fy_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CAPITAL_EXPENDITURES_UNCHANGED_TTM_H: new BaseField('CAPITAL_EXPENDITURES_UNCHANGED_TTM_H', {
    label: 'Capital Expenditures Unchanged TTM H',
    fieldName: 'capital_expenditures_unchanged_ttm_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CHANGE: new BaseField('CHANGE', {
    label: 'Change',
    fieldName: 'change_abs',
    format: 'currency',
    interval: true,
    historical: false,
  }),

  CHANGE_1: new BaseField('CHANGE_1', {
    label: 'Change|1',
    fieldName: 'change|1',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_120: new BaseField('CHANGE_120', {
    label: 'Change|120',
    fieldName: 'change|120',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_15: new BaseField('CHANGE_15', {
    label: 'Change|15',
    fieldName: 'change|15',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_15MIN: new BaseField('CHANGE_15MIN', {
    label: 'Change 15m',
    fieldName: 'change_abs.15',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CHANGE_15MIN_PERCENT: new BaseField('CHANGE_15MIN_PERCENT', {
    label: 'Change 15m, %',
    fieldName: 'change.15',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_1H: new BaseField('CHANGE_1H', {
    label: 'Change 1h',
    fieldName: 'change_abs.60',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CHANGE_1H_PERCENT: new BaseField('CHANGE_1H_PERCENT', {
    label: 'Change 1h, %',
    fieldName: 'change.60',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_1M: new BaseField('CHANGE_1M', {
    label: 'Change 1M',
    fieldName: 'change_abs.1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CHANGE_1MIN: new BaseField('CHANGE_1MIN', {
    label: 'Change 1m',
    fieldName: 'change_abs.1',
    format: 'float',
    interval: false,
    historical: false,
  }),

  CHANGE_1MIN_PERCENT: new BaseField('CHANGE_1MIN_PERCENT', {
    label: 'Change 1m, %',
    fieldName: 'change.1',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_1M_2: new BaseField('CHANGE_1M_2', {
    label: 'Change|1m',
    fieldName: 'change|1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_1M_PERCENT: new BaseField('CHANGE_1M_PERCENT', {
    label: 'Change 1M, %',
    fieldName: 'change.1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_1W: new BaseField('CHANGE_1W', {
    label: 'Change 1W',
    fieldName: 'change_abs.1W',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CHANGE_1W_2: new BaseField('CHANGE_1W_2', {
    label: 'Change|1w',
    fieldName: 'change|1W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_1W_PERCENT: new BaseField('CHANGE_1W_PERCENT', {
    label: 'Change 1W, %',
    fieldName: 'change.1W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_240: new BaseField('CHANGE_240', {
    label: 'Change|240',
    fieldName: 'change|240',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_30: new BaseField('CHANGE_30', {
    label: 'Change|30',
    fieldName: 'change|30',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_4H: new BaseField('CHANGE_4H', {
    label: 'Change 4h',
    fieldName: 'change_abs.240',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CHANGE_4H_PERCENT: new BaseField('CHANGE_4H_PERCENT', {
    label: 'Change 4h, %',
    fieldName: 'change.240',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_5: new BaseField('CHANGE_5', {
    label: 'Change|5',
    fieldName: 'change|5',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_5MIN: new BaseField('CHANGE_5MIN', {
    label: 'Change 5m',
    fieldName: 'change_abs.5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CHANGE_5MIN_PERCENT: new BaseField('CHANGE_5MIN_PERCENT', {
    label: 'Change 5m, %',
    fieldName: 'change.5',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_60: new BaseField('CHANGE_60', {
    label: 'Change|60',
    fieldName: 'change|60',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_ABS_1: new BaseField('CHANGE_ABS_1', {
    label: 'Change Abs|1',
    fieldName: 'change_abs|1',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_ABS_120: new BaseField('CHANGE_ABS_120', {
    label: 'Change Abs|120',
    fieldName: 'change_abs|120',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_ABS_15: new BaseField('CHANGE_ABS_15', {
    label: 'Change Abs|15',
    fieldName: 'change_abs|15',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_ABS_1M: new BaseField('CHANGE_ABS_1M', {
    label: 'Change Abs|1m',
    fieldName: 'change_abs|1M',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_ABS_1W: new BaseField('CHANGE_ABS_1W', {
    label: 'Change Abs|1w',
    fieldName: 'change_abs|1W',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_ABS_240: new BaseField('CHANGE_ABS_240', {
    label: 'Change Abs|240',
    fieldName: 'change_abs|240',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_ABS_30: new BaseField('CHANGE_ABS_30', {
    label: 'Change Abs|30',
    fieldName: 'change_abs|30',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_ABS_5: new BaseField('CHANGE_ABS_5', {
    label: 'Change Abs|5',
    fieldName: 'change_abs|5',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_ABS_60: new BaseField('CHANGE_ABS_60', {
    label: 'Change Abs|60',
    fieldName: 'change_abs|60',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN: new BaseField('CHANGE_FROM_OPEN', {
    label: 'Change from Open',
    fieldName: 'change_from_open_abs',
    format: 'currency',
    interval: true,
    historical: false,
  }),

  CHANGE_FROM_OPEN_1: new BaseField('CHANGE_FROM_OPEN_1', {
    label: 'Change From Open|1',
    fieldName: 'change_from_open|1',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_120: new BaseField('CHANGE_FROM_OPEN_120', {
    label: 'Change From Open|120',
    fieldName: 'change_from_open|120',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_15: new BaseField('CHANGE_FROM_OPEN_15', {
    label: 'Change From Open|15',
    fieldName: 'change_from_open|15',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_1M: new BaseField('CHANGE_FROM_OPEN_1M', {
    label: 'Change From Open|1m',
    fieldName: 'change_from_open|1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_1W: new BaseField('CHANGE_FROM_OPEN_1W', {
    label: 'Change From Open|1w',
    fieldName: 'change_from_open|1W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_240: new BaseField('CHANGE_FROM_OPEN_240', {
    label: 'Change From Open|240',
    fieldName: 'change_from_open|240',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_30: new BaseField('CHANGE_FROM_OPEN_30', {
    label: 'Change From Open|30',
    fieldName: 'change_from_open|30',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_5: new BaseField('CHANGE_FROM_OPEN_5', {
    label: 'Change From Open|5',
    fieldName: 'change_from_open|5',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_60: new BaseField('CHANGE_FROM_OPEN_60', {
    label: 'Change From Open|60',
    fieldName: 'change_from_open|60',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_1: new BaseField('CHANGE_FROM_OPEN_ABS_1', {
    label: 'Change From Open Abs|1',
    fieldName: 'change_from_open_abs|1',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_120: new BaseField('CHANGE_FROM_OPEN_ABS_120', {
    label: 'Change From Open Abs|120',
    fieldName: 'change_from_open_abs|120',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_15: new BaseField('CHANGE_FROM_OPEN_ABS_15', {
    label: 'Change From Open Abs|15',
    fieldName: 'change_from_open_abs|15',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_1M: new BaseField('CHANGE_FROM_OPEN_ABS_1M', {
    label: 'Change From Open Abs|1m',
    fieldName: 'change_from_open_abs|1M',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_1W: new BaseField('CHANGE_FROM_OPEN_ABS_1W', {
    label: 'Change From Open Abs|1w',
    fieldName: 'change_from_open_abs|1W',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_240: new BaseField('CHANGE_FROM_OPEN_ABS_240', {
    label: 'Change From Open Abs|240',
    fieldName: 'change_from_open_abs|240',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_30: new BaseField('CHANGE_FROM_OPEN_ABS_30', {
    label: 'Change From Open Abs|30',
    fieldName: 'change_from_open_abs|30',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_5: new BaseField('CHANGE_FROM_OPEN_ABS_5', {
    label: 'Change From Open Abs|5',
    fieldName: 'change_from_open_abs|5',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_ABS_60: new BaseField('CHANGE_FROM_OPEN_ABS_60', {
    label: 'Change From Open Abs|60',
    fieldName: 'change_from_open_abs|60',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CHANGE_FROM_OPEN_PERCENT: new BaseField('CHANGE_FROM_OPEN_PERCENT', {
    label: 'Change from Open %',
    fieldName: 'change_from_open',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  CHANGE_PERCENT: new BaseField('CHANGE_PERCENT', {
    label: 'Change %',
    fieldName: 'change',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  GAP_1: new BaseField('GAP_1', {
    label: 'Gap|1',
    fieldName: 'gap|1',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_120: new BaseField('GAP_120', {
    label: 'Gap|120',
    fieldName: 'gap|120',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_15: new BaseField('GAP_15', {
    label: 'Gap|15',
    fieldName: 'gap|15',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_1M: new BaseField('GAP_1M', {
    label: 'Gap|1m',
    fieldName: 'gap|1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_1W: new BaseField('GAP_1W', {
    label: 'Gap|1w',
    fieldName: 'gap|1W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_240: new BaseField('GAP_240', {
    label: 'Gap|240',
    fieldName: 'gap|240',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_30: new BaseField('GAP_30', {
    label: 'Gap|30',
    fieldName: 'gap|30',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_5: new BaseField('GAP_5', {
    label: 'Gap|5',
    fieldName: 'gap|5',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_60: new BaseField('GAP_60', {
    label: 'Gap|60',
    fieldName: 'gap|60',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_DOWN: new BaseField('GAP_DOWN', {
    label: 'Gap Down',
    fieldName: 'gap_down',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_1: new BaseField('GAP_DOWN_1', {
    label: 'Gap Down|1',
    fieldName: 'gap_down|1',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_120: new BaseField('GAP_DOWN_120', {
    label: 'Gap Down|120',
    fieldName: 'gap_down|120',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_15: new BaseField('GAP_DOWN_15', {
    label: 'Gap Down|15',
    fieldName: 'gap_down|15',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_1M: new BaseField('GAP_DOWN_1M', {
    label: 'Gap Down|1m',
    fieldName: 'gap_down|1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_1W: new BaseField('GAP_DOWN_1W', {
    label: 'Gap Down|1w',
    fieldName: 'gap_down|1W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_240: new BaseField('GAP_DOWN_240', {
    label: 'Gap Down|240',
    fieldName: 'gap_down|240',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_30: new BaseField('GAP_DOWN_30', {
    label: 'Gap Down|30',
    fieldName: 'gap_down|30',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_5: new BaseField('GAP_DOWN_5', {
    label: 'Gap Down|5',
    fieldName: 'gap_down|5',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_60: new BaseField('GAP_DOWN_60', {
    label: 'Gap Down|60',
    fieldName: 'gap_down|60',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_ABS: new BaseField('GAP_DOWN_ABS', {
    label: 'Gap Down Abs',
    fieldName: 'gap_down_abs',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_ABS_1: new BaseField('GAP_DOWN_ABS_1', {
    label: 'Gap Down Abs|1',
    fieldName: 'gap_down_abs|1',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_ABS_120: new BaseField('GAP_DOWN_ABS_120', {
    label: 'Gap Down Abs|120',
    fieldName: 'gap_down_abs|120',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_ABS_15: new BaseField('GAP_DOWN_ABS_15', {
    label: 'Gap Down Abs|15',
    fieldName: 'gap_down_abs|15',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_ABS_1M: new BaseField('GAP_DOWN_ABS_1M', {
    label: 'Gap Down Abs|1m',
    fieldName: 'gap_down_abs|1M',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_ABS_1W: new BaseField('GAP_DOWN_ABS_1W', {
    label: 'Gap Down Abs|1w',
    fieldName: 'gap_down_abs|1W',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_ABS_240: new BaseField('GAP_DOWN_ABS_240', {
    label: 'Gap Down Abs|240',
    fieldName: 'gap_down_abs|240',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_ABS_30: new BaseField('GAP_DOWN_ABS_30', {
    label: 'Gap Down Abs|30',
    fieldName: 'gap_down_abs|30',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_ABS_5: new BaseField('GAP_DOWN_ABS_5', {
    label: 'Gap Down Abs|5',
    fieldName: 'gap_down_abs|5',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_DOWN_ABS_60: new BaseField('GAP_DOWN_ABS_60', {
    label: 'Gap Down Abs|60',
    fieldName: 'gap_down_abs|60',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_PERCENT: new BaseField('GAP_PERCENT', {
    label: 'Gap %',
    fieldName: 'gap',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  GAP_UP: new BaseField('GAP_UP', {
    label: 'Gap Up',
    fieldName: 'gap_up',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_UP_1: new BaseField('GAP_UP_1', {
    label: 'Gap Up|1',
    fieldName: 'gap_up|1',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_UP_120: new BaseField('GAP_UP_120', {
    label: 'Gap Up|120',
    fieldName: 'gap_up|120',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_UP_15: new BaseField('GAP_UP_15', {
    label: 'Gap Up|15',
    fieldName: 'gap_up|15',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_UP_1M: new BaseField('GAP_UP_1M', {
    label: 'Gap Up|1m',
    fieldName: 'gap_up|1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_UP_1W: new BaseField('GAP_UP_1W', {
    label: 'Gap Up|1w',
    fieldName: 'gap_up|1W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_UP_240: new BaseField('GAP_UP_240', {
    label: 'Gap Up|240',
    fieldName: 'gap_up|240',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_UP_30: new BaseField('GAP_UP_30', {
    label: 'Gap Up|30',
    fieldName: 'gap_up|30',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_UP_5: new BaseField('GAP_UP_5', {
    label: 'Gap Up|5',
    fieldName: 'gap_up|5',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_UP_60: new BaseField('GAP_UP_60', {
    label: 'Gap Up|60',
    fieldName: 'gap_up|60',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GAP_UP_ABS: new BaseField('GAP_UP_ABS', {
    label: 'Gap Up Abs',
    fieldName: 'gap_up_abs',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_UP_ABS_1: new BaseField('GAP_UP_ABS_1', {
    label: 'Gap Up Abs|1',
    fieldName: 'gap_up_abs|1',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_UP_ABS_120: new BaseField('GAP_UP_ABS_120', {
    label: 'Gap Up Abs|120',
    fieldName: 'gap_up_abs|120',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_UP_ABS_15: new BaseField('GAP_UP_ABS_15', {
    label: 'Gap Up Abs|15',
    fieldName: 'gap_up_abs|15',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_UP_ABS_1M: new BaseField('GAP_UP_ABS_1M', {
    label: 'Gap Up Abs|1m',
    fieldName: 'gap_up_abs|1M',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_UP_ABS_1W: new BaseField('GAP_UP_ABS_1W', {
    label: 'Gap Up Abs|1w',
    fieldName: 'gap_up_abs|1W',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_UP_ABS_240: new BaseField('GAP_UP_ABS_240', {
    label: 'Gap Up Abs|240',
    fieldName: 'gap_up_abs|240',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_UP_ABS_30: new BaseField('GAP_UP_ABS_30', {
    label: 'Gap Up Abs|30',
    fieldName: 'gap_up_abs|30',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_UP_ABS_5: new BaseField('GAP_UP_ABS_5', {
    label: 'Gap Up Abs|5',
    fieldName: 'gap_up_abs|5',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GAP_UP_ABS_60: new BaseField('GAP_UP_ABS_60', {
    label: 'Gap Up Abs|60',
    fieldName: 'gap_up_abs|60',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  LOW_AFTER_HIGH_ALL_CHANGE: new BaseField('LOW_AFTER_HIGH_ALL_CHANGE', {
    label: 'Low After High All Change',
    fieldName: 'low_after_high_all_change',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  LOW_AFTER_HIGH_ALL_CHANGE_ABS: new BaseField('LOW_AFTER_HIGH_ALL_CHANGE_ABS', {
    label: 'Low After High All Change Abs',
    fieldName: 'low_after_high_all_change_abs',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  MONTHLY_PERFORMANCE: new BaseField('MONTHLY_PERFORMANCE', {
    label: 'Monthly Performance',
    fieldName: 'Perf.1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  MONTH_PERFORMANCE_3: new BaseField('MONTH_PERFORMANCE_3', {
    label: '3-Month Performance',
    fieldName: 'Perf.3M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  MONTH_PERFORMANCE_6: new BaseField('MONTH_PERFORMANCE_6', {
    label: '6-Month Performance',
    fieldName: 'Perf.6M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NAV_PERF_1M: new BaseField('NAV_PERF_1M', {
    label: 'Nav Perf 1m',
    fieldName: 'nav_perf.1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NAV_PERF_1Y: new BaseField('NAV_PERF_1Y', {
    label: 'Nav Perf 1y',
    fieldName: 'nav_perf.1Y',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NAV_PERF_3M: new BaseField('NAV_PERF_3M', {
    label: 'Nav Perf 3m',
    fieldName: 'nav_perf.3M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NAV_PERF_3Y: new BaseField('NAV_PERF_3Y', {
    label: 'Nav Perf 3y',
    fieldName: 'nav_perf.3Y',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NAV_PERF_5Y: new BaseField('NAV_PERF_5Y', {
    label: 'Nav Perf 5y',
    fieldName: 'nav_perf.5Y',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NAV_PERF_YTD: new BaseField('NAV_PERF_YTD', {
    label: 'Nav Perf Ytd',
    fieldName: 'nav_perf.YTD',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PERF_10Y: new BaseField('PERF_10Y', {
    label: 'Perf 10y',
    fieldName: 'Perf.10Y',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PERF_1M_MARKETCAP: new BaseField('PERF_1M_MARKETCAP', {
    label: 'Market Cap Performance 1M %',
    fieldName: 'Perf.1M.MarketCap',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PERF_1W_MARKETCAP: new BaseField('PERF_1W_MARKETCAP', {
    label: 'Market Cap Performance 1W %',
    fieldName: 'Perf.1W.MarketCap',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PERF_1Y_MARKETCAP: new BaseField('PERF_1Y_MARKETCAP', {
    label: 'Perf 1y Marketcap',
    fieldName: 'Perf.1Y.MarketCap',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PERF_3M_MARKETCAP: new BaseField('PERF_3M_MARKETCAP', {
    label: 'Market Cap Performance 3M %',
    fieldName: 'Perf.3M.MarketCap',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PERF_3Y: new BaseField('PERF_3Y', {
    label: 'Perf 3y',
    fieldName: 'Perf.3Y',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PERF_5D: new BaseField('PERF_5D', {
    label: 'Perf 5d',
    fieldName: 'Perf.5D',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PERF_5Y_MARKETCAP: new BaseField('PERF_5Y_MARKETCAP', {
    label: 'Perf 5y Marketcap',
    fieldName: 'Perf.5Y.MarketCap',
    format: 'round',
    interval: true,
    historical: false,
  }),

  PERF_6M_MARKETCAP: new BaseField('PERF_6M_MARKETCAP', {
    label: 'Market Cap Performance 6M %',
    fieldName: 'Perf.6M.MarketCap',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PERF_YTD_MARKETCAP: new BaseField('PERF_YTD_MARKETCAP', {
    label: 'Market Cap Performance YTD %',
    fieldName: 'Perf.YTD.MarketCap',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  PERF_Y_MARKETCAP: new BaseField('PERF_Y_MARKETCAP', {
    label: 'Market Cap Performance 1Y %',
    fieldName: 'Perf.Y.MarketCap',
    format: 'percent',
    interval: true,
    historical: false,
  }),

  POSTMARKET_CHANGE: new BaseField('POSTMARKET_CHANGE', {
    label: 'Post-market Change',
    fieldName: 'postmarket_change_abs',
    format: 'missing',
    interval: false,
    historical: false,
  }),

  POSTMARKET_CHANGE_PERCENT: new BaseField('POSTMARKET_CHANGE_PERCENT', {
    label: 'Post-market Change %',
    fieldName: 'postmarket_change',
    format: 'missing',
    interval: false,
    historical: false,
  }),

  POST_CHANGE: new BaseField('POST_CHANGE', {
    label: 'Post Change',
    fieldName: 'post_change',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  POST_CHANGE_1: new BaseField('POST_CHANGE_1', {
    label: 'Post Change|1',
    fieldName: 'post_change|1',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  POST_CHANGE_120: new BaseField('POST_CHANGE_120', {
    label: 'Post Change|120',
    fieldName: 'post_change|120',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  POST_CHANGE_15: new BaseField('POST_CHANGE_15', {
    label: 'Post Change|15',
    fieldName: 'post_change|15',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  POST_CHANGE_1M: new BaseField('POST_CHANGE_1M', {
    label: 'Post Change|1m',
    fieldName: 'post_change|1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  POST_CHANGE_1W: new BaseField('POST_CHANGE_1W', {
    label: 'Post Change|1w',
    fieldName: 'post_change|1W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  POST_CHANGE_240: new BaseField('POST_CHANGE_240', {
    label: 'Post Change|240',
    fieldName: 'post_change|240',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  POST_CHANGE_30: new BaseField('POST_CHANGE_30', {
    label: 'Post Change|30',
    fieldName: 'post_change|30',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  POST_CHANGE_5: new BaseField('POST_CHANGE_5', {
    label: 'Post Change|5',
    fieldName: 'post_change|5',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  POST_CHANGE_60: new BaseField('POST_CHANGE_60', {
    label: 'Post Change|60',
    fieldName: 'post_change|60',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE: new BaseField('PRE_CHANGE', {
    label: 'Pre Change',
    fieldName: 'pre_change',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_1: new BaseField('PRE_CHANGE_1', {
    label: 'Pre Change|1',
    fieldName: 'pre_change|1',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_120: new BaseField('PRE_CHANGE_120', {
    label: 'Pre Change|120',
    fieldName: 'pre_change|120',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_15: new BaseField('PRE_CHANGE_15', {
    label: 'Pre Change|15',
    fieldName: 'pre_change|15',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_1M: new BaseField('PRE_CHANGE_1M', {
    label: 'Pre Change|1m',
    fieldName: 'pre_change|1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_1W: new BaseField('PRE_CHANGE_1W', {
    label: 'Pre Change|1w',
    fieldName: 'pre_change|1W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_240: new BaseField('PRE_CHANGE_240', {
    label: 'Pre Change|240',
    fieldName: 'pre_change|240',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_30: new BaseField('PRE_CHANGE_30', {
    label: 'Pre Change|30',
    fieldName: 'pre_change|30',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_5: new BaseField('PRE_CHANGE_5', {
    label: 'Pre Change|5',
    fieldName: 'pre_change|5',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_60: new BaseField('PRE_CHANGE_60', {
    label: 'Pre Change|60',
    fieldName: 'pre_change|60',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_ABS: new BaseField('PRE_CHANGE_ABS', {
    label: 'Pre Change Abs',
    fieldName: 'pre_change_abs',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_ABS_1: new BaseField('PRE_CHANGE_ABS_1', {
    label: 'Pre Change Abs|1',
    fieldName: 'pre_change_abs|1',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_ABS_120: new BaseField('PRE_CHANGE_ABS_120', {
    label: 'Pre Change Abs|120',
    fieldName: 'pre_change_abs|120',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_ABS_15: new BaseField('PRE_CHANGE_ABS_15', {
    label: 'Pre Change Abs|15',
    fieldName: 'pre_change_abs|15',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_ABS_1M: new BaseField('PRE_CHANGE_ABS_1M', {
    label: 'Pre Change Abs|1m',
    fieldName: 'pre_change_abs|1M',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_ABS_1W: new BaseField('PRE_CHANGE_ABS_1W', {
    label: 'Pre Change Abs|1w',
    fieldName: 'pre_change_abs|1W',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_ABS_240: new BaseField('PRE_CHANGE_ABS_240', {
    label: 'Pre Change Abs|240',
    fieldName: 'pre_change_abs|240',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_ABS_30: new BaseField('PRE_CHANGE_ABS_30', {
    label: 'Pre Change Abs|30',
    fieldName: 'pre_change_abs|30',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_ABS_5: new BaseField('PRE_CHANGE_ABS_5', {
    label: 'Pre Change Abs|5',
    fieldName: 'pre_change_abs|5',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PRE_CHANGE_ABS_60: new BaseField('PRE_CHANGE_ABS_60', {
    label: 'Pre Change Abs|60',
    fieldName: 'pre_change_abs|60',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  RATE_OF_CHANGE_9: new BaseField('RATE_OF_CHANGE_9', {
    label: 'Rate Of Change (9)',
    fieldName: 'ROC',
    format: 'round',
    interval: true,
    historical: false,
  }),

  VOLUME_CHANGE: new BaseField('VOLUME_CHANGE', {
    label: 'Volume Change',
    fieldName: 'volume_change',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_1: new BaseField('VOLUME_CHANGE_1', {
    label: 'Volume Change|1',
    fieldName: 'volume_change|1',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_120: new BaseField('VOLUME_CHANGE_120', {
    label: 'Volume Change|120',
    fieldName: 'volume_change|120',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_15: new BaseField('VOLUME_CHANGE_15', {
    label: 'Volume Change|15',
    fieldName: 'volume_change|15',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_1M: new BaseField('VOLUME_CHANGE_1M', {
    label: 'Volume Change|1m',
    fieldName: 'volume_change|1M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_1W: new BaseField('VOLUME_CHANGE_1W', {
    label: 'Volume Change|1w',
    fieldName: 'volume_change|1W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_240: new BaseField('VOLUME_CHANGE_240', {
    label: 'Volume Change|240',
    fieldName: 'volume_change|240',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_30: new BaseField('VOLUME_CHANGE_30', {
    label: 'Volume Change|30',
    fieldName: 'volume_change|30',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_5: new BaseField('VOLUME_CHANGE_5', {
    label: 'Volume Change|5',
    fieldName: 'volume_change|5',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_60: new BaseField('VOLUME_CHANGE_60', {
    label: 'Volume Change|60',
    fieldName: 'volume_change|60',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_ABS: new BaseField('VOLUME_CHANGE_ABS', {
    label: 'Volume Change Abs',
    fieldName: 'volume_change_abs',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_1: new BaseField('VOLUME_CHANGE_ABS_1', {
    label: 'Volume Change Abs|1',
    fieldName: 'volume_change_abs|1',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_120: new BaseField('VOLUME_CHANGE_ABS_120', {
    label: 'Volume Change Abs|120',
    fieldName: 'volume_change_abs|120',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_15: new BaseField('VOLUME_CHANGE_ABS_15', {
    label: 'Volume Change Abs|15',
    fieldName: 'volume_change_abs|15',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_1M: new BaseField('VOLUME_CHANGE_ABS_1M', {
    label: 'Volume Change Abs|1m',
    fieldName: 'volume_change_abs|1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_1W: new BaseField('VOLUME_CHANGE_ABS_1W', {
    label: 'Volume Change Abs|1w',
    fieldName: 'volume_change_abs|1W',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_240: new BaseField('VOLUME_CHANGE_ABS_240', {
    label: 'Volume Change Abs|240',
    fieldName: 'volume_change_abs|240',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_30: new BaseField('VOLUME_CHANGE_ABS_30', {
    label: 'Volume Change Abs|30',
    fieldName: 'volume_change_abs|30',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_5: new BaseField('VOLUME_CHANGE_ABS_5', {
    label: 'Volume Change Abs|5',
    fieldName: 'volume_change_abs|5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLUME_CHANGE_ABS_60: new BaseField('VOLUME_CHANGE_ABS_60', {
    label: 'Volume Change Abs|60',
    fieldName: 'volume_change_abs|60',
    format: 'round',
    interval: false,
    historical: false,
  }),

  WEEKLY_PERFORMANCE: new BaseField('WEEKLY_PERFORMANCE', {
    label: 'Weekly Performance',
    fieldName: 'Perf.W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  YEARLY_PERFORMANCE: new BaseField('YEARLY_PERFORMANCE', {
    label: 'Yearly Performance',
    fieldName: 'Perf.Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  YTD_PERFORMANCE: new BaseField('YTD_PERFORMANCE', {
    label: 'YTD Performance',
    fieldName: 'Perf.YTD',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  Y_PERFORMANCE_5: new BaseField('Y_PERFORMANCE_5', {
    label: '5Y Performance',
    fieldName: 'Perf.5Y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  // === Fundamentals - Earnings (61 fields) ===

  BASIC_EPS_FY: new BaseField('BASIC_EPS_FY', {
    label: 'Basic EPS (FY)',
    fieldName: 'basic_eps_net_income',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  BASIC_EPS_TTM: new BaseField('BASIC_EPS_TTM', {
    label: 'Basic EPS (TTM)',
    fieldName: 'earnings_per_share_basic_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_BASIC_CAGR_5Y: new BaseField('EARNINGS_PER_SHARE_BASIC_CAGR_5Y', {
    label: 'Earnings per Share Basic Cagr 5y',
    fieldName: 'earnings_per_share_basic_cagr_5y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_BASIC_FH: new BaseField('EARNINGS_PER_SHARE_BASIC_FH', {
    label: 'Earnings per Share Basic Fh',
    fieldName: 'earnings_per_share_basic_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_BASIC_FQ: new BaseField('EARNINGS_PER_SHARE_BASIC_FQ', {
    label: 'Earnings per Share Basic FQ',
    fieldName: 'earnings_per_share_basic_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_BASIC_FY: new BaseField('EARNINGS_PER_SHARE_BASIC_FY', {
    label: 'Earnings per Share Basic FY',
    fieldName: 'earnings_per_share_basic_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_BASIC_FY_H: new BaseField('EARNINGS_PER_SHARE_BASIC_FY_H', {
    label: 'Earnings per Share Basic FY H',
    fieldName: 'earnings_per_share_basic_fy_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_BASIC_TTM: new BaseField('EARNINGS_PER_SHARE_BASIC_TTM', {
    label: 'EPS Basic (TTM)',
    fieldName: 'earnings_per_share_basic_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_DILUTED_5Y_GROWTH_FY: new BaseField('EARNINGS_PER_SHARE_DILUTED_5Y_GROWTH_FY', {
    label: 'Earnings per Share Diluted 5y Growth FY',
    fieldName: 'earnings_per_share_diluted_5y_growth_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_DILUTED_FH: new BaseField('EARNINGS_PER_SHARE_DILUTED_FH', {
    label: 'Earnings per Share Diluted Fh',
    fieldName: 'earnings_per_share_diluted_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_DILUTED_FQ: new BaseField('EARNINGS_PER_SHARE_DILUTED_FQ', {
    label: 'Earnings per Share Diluted FQ',
    fieldName: 'earnings_per_share_diluted_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_DILUTED_FQ_H: new BaseField('EARNINGS_PER_SHARE_DILUTED_FQ_H', {
    label: 'Earnings per Share Diluted FQ H',
    fieldName: 'earnings_per_share_diluted_fq_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_DILUTED_FY: new BaseField('EARNINGS_PER_SHARE_DILUTED_FY', {
    label: 'Earnings per Share Diluted FY',
    fieldName: 'earnings_per_share_diluted_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_DILUTED_FY_H: new BaseField('EARNINGS_PER_SHARE_DILUTED_FY_H', {
    label: 'Earnings per Share Diluted FY H',
    fieldName: 'earnings_per_share_diluted_fy_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_DILUTED_TTM_H: new BaseField('EARNINGS_PER_SHARE_DILUTED_TTM_H', {
    label: 'Earnings per Share Diluted TTM H',
    fieldName: 'earnings_per_share_diluted_ttm_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_FH: new BaseField('EARNINGS_PER_SHARE_FH', {
    label: 'Earnings per Share Fh',
    fieldName: 'earnings_per_share_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_FORECAST_FQ: new BaseField('EARNINGS_PER_SHARE_FORECAST_FQ', {
    label: 'Earnings per Share Forecast FQ',
    fieldName: 'earnings_per_share_forecast_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_FORECAST_NEXT_FH: new BaseField('EARNINGS_PER_SHARE_FORECAST_NEXT_FH', {
    label: 'Earnings per Share Forecast Next Fh',
    fieldName: 'earnings_per_share_forecast_next_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_FORECAST_NEXT_FY: new BaseField('EARNINGS_PER_SHARE_FORECAST_NEXT_FY', {
    label: 'Earnings per Share Forecast Next FY',
    fieldName: 'earnings_per_share_forecast_next_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PER_SHARE_FY: new BaseField('EARNINGS_PER_SHARE_FY', {
    label: 'Earnings per Share FY',
    fieldName: 'earnings_per_share_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EARNINGS_PUBLICATION_TYPE_FQ: new BaseField('EARNINGS_PUBLICATION_TYPE_FQ', {
    label: 'Earnings Publication Type FQ',
    fieldName: 'earnings_publication_type_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EARNINGS_PUBLICATION_TYPE_NEXT_FQ: new BaseField('EARNINGS_PUBLICATION_TYPE_NEXT_FQ', {
    label: 'Earnings Publication Type Next FQ',
    fieldName: 'earnings_publication_type_next_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EARNINGS_RELEASE_CALENDAR_DATE: new BaseField('EARNINGS_RELEASE_CALENDAR_DATE', {
    label: 'Earnings Release Calendar Date',
    fieldName: 'earnings_release_calendar_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  EARNINGS_RELEASE_NEXT_CALENDAR_DATE: new BaseField('EARNINGS_RELEASE_NEXT_CALENDAR_DATE', {
    label: 'Earnings Release Next Calendar Date',
    fieldName: 'earnings_release_next_calendar_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  EARNINGS_RELEASE_NEXT_TIME: new BaseField('EARNINGS_RELEASE_NEXT_TIME', {
    label: 'Earnings Release Next Time',
    fieldName: 'earnings_release_next_time',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EARNINGS_RELEASE_NEXT_TRADING_DATE_FQ: new BaseField('EARNINGS_RELEASE_NEXT_TRADING_DATE_FQ', {
    label: 'Earnings Release Next Trading Date FQ',
    fieldName: 'earnings_release_next_trading_date_fq',
    format: 'date',
    interval: false,
    historical: false,
  }),

  EARNINGS_RELEASE_NEXT_TRADING_DATE_FY: new BaseField('EARNINGS_RELEASE_NEXT_TRADING_DATE_FY', {
    label: 'Earnings Release Next Trading Date FY',
    fieldName: 'earnings_release_next_trading_date_fy',
    format: 'date',
    interval: false,
    historical: false,
  }),

  EARNINGS_RELEASE_TIME: new BaseField('EARNINGS_RELEASE_TIME', {
    label: 'Earnings Release Time',
    fieldName: 'earnings_release_time',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EARNINGS_RELEASE_TRADING_DATE_FQ: new BaseField('EARNINGS_RELEASE_TRADING_DATE_FQ', {
    label: 'Earnings Release Trading Date FQ',
    fieldName: 'earnings_release_trading_date_fq',
    format: 'date',
    interval: false,
    historical: false,
  }),

  EARNINGS_RELEASE_TRADING_DATE_FY: new BaseField('EARNINGS_RELEASE_TRADING_DATE_FY', {
    label: 'Earnings Release Trading Date FY',
    fieldName: 'earnings_release_trading_date_fy',
    format: 'date',
    interval: false,
    historical: false,
  }),

  EARNINGS_YIELD: new BaseField('EARNINGS_YIELD', {
    label: 'Earnings Yield %',
    fieldName: 'earnings_yield',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EPS_DILUTED_ANNUAL_YOY_GROWTH: new BaseField('EPS_DILUTED_ANNUAL_YOY_GROWTH', {
    label: 'EPS Diluted (Annual YoY Growth)',
    fieldName: 'earnings_per_share_diluted_yoy_growth_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EPS_DILUTED_FY: new BaseField('EPS_DILUTED_FY', {
    label: 'EPS Diluted (FY)',
    fieldName: 'last_annual_eps',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EPS_DILUTED_GROWTH_PERCENT_FQ: new BaseField('EPS_DILUTED_GROWTH_PERCENT_FQ', {
    label: 'EPS Diluted Growth Percent FQ',
    fieldName: 'eps_diluted_growth_percent_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EPS_DILUTED_GROWTH_PERCENT_FY: new BaseField('EPS_DILUTED_GROWTH_PERCENT_FY', {
    label: 'EPS Diluted Growth Percent FY',
    fieldName: 'eps_diluted_growth_percent_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EPS_DILUTED_MRQ: new BaseField('EPS_DILUTED_MRQ', {
    label: 'EPS Diluted (MRQ)',
    fieldName: 'earnings_per_share_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EPS_DILUTED_QUARTERLY_QOQ_GROWTH: new BaseField('EPS_DILUTED_QUARTERLY_QOQ_GROWTH', {
    label: 'EPS Diluted (Quarterly QoQ Growth)',
    fieldName: 'earnings_per_share_diluted_qoq_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EPS_DILUTED_QUARTERLY_YOY_GROWTH: new BaseField('EPS_DILUTED_QUARTERLY_YOY_GROWTH', {
    label: 'EPS Diluted (Quarterly YoY Growth)',
    fieldName: 'earnings_per_share_diluted_yoy_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EPS_DILUTED_TTM: new BaseField('EPS_DILUTED_TTM', {
    label: 'EPS Diluted (TTM)',
    fieldName: 'earnings_per_share_diluted_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EPS_DILUTED_TTM_YOY_GROWTH: new BaseField('EPS_DILUTED_TTM_YOY_GROWTH', {
    label: 'EPS Diluted (TTM YoY Growth)',
    fieldName: 'earnings_per_share_diluted_yoy_growth_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EPS_FORECAST_MRQ: new BaseField('EPS_FORECAST_MRQ', {
    label: 'EPS Forecast (MRQ)',
    fieldName: 'earnings_per_share_forecast_next_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EPS_SURPRISE_FQ: new BaseField('EPS_SURPRISE_FQ', {
    label: 'EPS Surprise FQ',
    fieldName: 'eps_surprise_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EPS_SURPRISE_PERCENT_FQ: new BaseField('EPS_SURPRISE_PERCENT_FQ', {
    label: 'EPS Surprise Percent FQ',
    fieldName: 'eps_surprise_percent_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NET_INCOME_ANNUAL_YOY_GROWTH: new BaseField('NET_INCOME_ANNUAL_YOY_GROWTH', {
    label: 'Net Income (Annual YoY Growth)',
    fieldName: 'net_income_yoy_growth_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NET_INCOME_BEF_DISC_OPER_FY: new BaseField('NET_INCOME_BEF_DISC_OPER_FY', {
    label: 'Net Income Bef Disc Oper FY',
    fieldName: 'net_income_bef_disc_oper_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NET_INCOME_CAGR_5Y: new BaseField('NET_INCOME_CAGR_5Y', {
    label: 'Net Income Cagr 5y',
    fieldName: 'net_income_cagr_5y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NET_INCOME_FH: new BaseField('NET_INCOME_FH', {
    label: 'Net Income Fh',
    fieldName: 'net_income_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NET_INCOME_FQ: new BaseField('NET_INCOME_FQ', {
    label: 'Net Income FQ',
    fieldName: 'net_income_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NET_INCOME_FQ_H: new BaseField('NET_INCOME_FQ_H', {
    label: 'Net Income FQ H',
    fieldName: 'net_income_fq_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NET_INCOME_FY: new BaseField('NET_INCOME_FY', {
    label: 'Net Income (FY)',
    fieldName: 'net_income',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NET_INCOME_FY_2: new BaseField('NET_INCOME_FY_2', {
    label: 'Net Income FY',
    fieldName: 'net_income_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NET_INCOME_FY_H: new BaseField('NET_INCOME_FY_H', {
    label: 'Net Income FY H',
    fieldName: 'net_income_fy_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NET_INCOME_PER_EMPLOYEE_FY: new BaseField('NET_INCOME_PER_EMPLOYEE_FY', {
    label: 'Net Income per Employee (FY)',
    fieldName: 'net_income_per_employee_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NET_INCOME_QUARTERLY_QOQ_GROWTH: new BaseField('NET_INCOME_QUARTERLY_QOQ_GROWTH', {
    label: 'Net Income (Quarterly QoQ Growth)',
    fieldName: 'net_income_qoq_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NET_INCOME_QUARTERLY_YOY_GROWTH: new BaseField('NET_INCOME_QUARTERLY_YOY_GROWTH', {
    label: 'Net Income (Quarterly YoY Growth)',
    fieldName: 'net_income_yoy_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NET_INCOME_TTM: new BaseField('NET_INCOME_TTM', {
    label: 'Net Income TTM',
    fieldName: 'net_income_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NET_INCOME_TTM_H: new BaseField('NET_INCOME_TTM_H', {
    label: 'Net Income TTM H',
    fieldName: 'net_income_ttm_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NET_INCOME_TTM_YOY_GROWTH: new BaseField('NET_INCOME_TTM_YOY_GROWTH', {
    label: 'Net Income (TTM YoY Growth)',
    fieldName: 'net_income_yoy_growth_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RATES_EARNINGS_FQ: new BaseField('RATES_EARNINGS_FQ', {
    label: 'Rates Earnings FQ',
    fieldName: 'rates_earnings_fq',
    format: 'text',
    interval: false,
    historical: false,
  }),

  RATES_EARNINGS_NEXT_FQ: new BaseField('RATES_EARNINGS_NEXT_FQ', {
    label: 'Rates Earnings Next FQ',
    fieldName: 'rates_earnings_next_fq',
    format: 'text',
    interval: false,
    historical: false,
  }),

  UPCOMING_EARNINGS_DATE: new BaseField('UPCOMING_EARNINGS_DATE', {
    label: 'Upcoming Earnings Date',
    fieldName: 'earnings_release_next_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  // === Fundamentals - Revenue (33 fields) ===

  DEBT_TO_REVENUE_FY: new BaseField('DEBT_TO_REVENUE_FY', {
    label: 'Debt to Revenue FY',
    fieldName: 'debt_to_revenue_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  DEBT_TO_REVENUE_TTM: new BaseField('DEBT_TO_REVENUE_TTM', {
    label: 'Debt to Revenue (TTM)',
    fieldName: 'debt_to_revenue_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  ENTERPRISE_VALUE_TO_REVENUE_TTM: new BaseField('ENTERPRISE_VALUE_TO_REVENUE_TTM', {
    label: 'EV to Revenue (TTM)',
    fieldName: 'enterprise_value_to_revenue_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LAST_YEAR_REVENUE_FY: new BaseField('LAST_YEAR_REVENUE_FY', {
    label: 'Last Year Revenue (FY)',
    fieldName: 'last_annual_revenue',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_ANNUAL_YOY_GROWTH: new BaseField('REVENUE_ANNUAL_YOY_GROWTH', {
    label: 'Revenue (Annual YoY Growth)',
    fieldName: 'total_revenue_yoy_growth_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  REVENUE_FORECAST_FQ: new BaseField('REVENUE_FORECAST_FQ', {
    label: 'Revenue Estimate (MRQ)',
    fieldName: 'revenue_forecast_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_FORECAST_NEXT_FH: new BaseField('REVENUE_FORECAST_NEXT_FH', {
    label: 'Revenue Forecast Next Fh',
    fieldName: 'revenue_forecast_next_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_FORECAST_NEXT_FQ: new BaseField('REVENUE_FORECAST_NEXT_FQ', {
    label: 'Revenue Forecast Next FQ',
    fieldName: 'revenue_forecast_next_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_FORECAST_NEXT_FY: new BaseField('REVENUE_FORECAST_NEXT_FY', {
    label: 'Revenue Forecast Next FY',
    fieldName: 'revenue_forecast_next_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_FQ: new BaseField('REVENUE_FQ', {
    label: 'Revenue FQ',
    fieldName: 'revenue_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_PER_EMPLOYEE_FY: new BaseField('REVENUE_PER_EMPLOYEE_FY', {
    label: 'Revenue per Employee (FY)',
    fieldName: 'revenue_per_employee',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_PER_EMPLOYEE_FY_2: new BaseField('REVENUE_PER_EMPLOYEE_FY_2', {
    label: 'Revenue per Employee FY',
    fieldName: 'revenue_per_employee_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_PER_SHARE_CURRENT: new BaseField('REVENUE_PER_SHARE_CURRENT', {
    label: 'Revenue per Share Current',
    fieldName: 'revenue_per_share_current',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_PER_SHARE_FH: new BaseField('REVENUE_PER_SHARE_FH', {
    label: 'Revenue per Share Fh',
    fieldName: 'revenue_per_share_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_PER_SHARE_FQ: new BaseField('REVENUE_PER_SHARE_FQ', {
    label: 'Revenue per Share FQ',
    fieldName: 'revenue_per_share_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_PER_SHARE_FY: new BaseField('REVENUE_PER_SHARE_FY', {
    label: 'Revenue per Share (FY)',
    fieldName: 'revenue_per_share_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_PER_SHARE_TTM: new BaseField('REVENUE_PER_SHARE_TTM', {
    label: 'Revenue per Share (TTM)',
    fieldName: 'revenue_per_share_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_QUARTERLY_QOQ_GROWTH: new BaseField('REVENUE_QUARTERLY_QOQ_GROWTH', {
    label: 'Revenue (Quarterly QoQ Growth)',
    fieldName: 'total_revenue_qoq_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  REVENUE_QUARTERLY_YOY_GROWTH: new BaseField('REVENUE_QUARTERLY_YOY_GROWTH', {
    label: 'Revenue (Quarterly YoY Growth)',
    fieldName: 'total_revenue_yoy_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  REVENUE_SURPRISE_FQ: new BaseField('REVENUE_SURPRISE_FQ', {
    label: 'Revenue Surprise FQ',
    fieldName: 'revenue_surprise_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  REVENUE_SURPRISE_PERCENT_FQ: new BaseField('REVENUE_SURPRISE_PERCENT_FQ', {
    label: 'Revenue Surprise Percent FQ',
    fieldName: 'revenue_surprise_percent_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  REVENUE_TTM_YOY_GROWTH: new BaseField('REVENUE_TTM_YOY_GROWTH', {
    label: 'Revenue (TTM YoY Growth)',
    fieldName: 'total_revenue_yoy_growth_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  TOP_REVENUE_COUNTRY_CODE: new BaseField('TOP_REVENUE_COUNTRY_CODE', {
    label: 'Top Revenue Country Code',
    fieldName: 'top_revenue_country_code',
    format: 'text',
    interval: false,
    historical: false,
  }),

  TOTAL_REVENUE_5Y_GROWTH_FY: new BaseField('TOTAL_REVENUE_5Y_GROWTH_FY', {
    label: 'Total Revenue 5y Growth FY',
    fieldName: 'total_revenue_5y_growth_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  TOTAL_REVENUE_CAGR_5Y: new BaseField('TOTAL_REVENUE_CAGR_5Y', {
    label: 'Total Revenue Cagr 5y',
    fieldName: 'total_revenue_cagr_5y',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  TOTAL_REVENUE_FH: new BaseField('TOTAL_REVENUE_FH', {
    label: 'Total Revenue Fh',
    fieldName: 'total_revenue_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_REVENUE_FQ: new BaseField('TOTAL_REVENUE_FQ', {
    label: 'Total Revenue FQ',
    fieldName: 'total_revenue_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_REVENUE_FQ_H: new BaseField('TOTAL_REVENUE_FQ_H', {
    label: 'Total Revenue FQ H',
    fieldName: 'total_revenue_fq_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_REVENUE_FY: new BaseField('TOTAL_REVENUE_FY', {
    label: 'Total Revenue (FY)',
    fieldName: 'total_revenue',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_REVENUE_FY_2: new BaseField('TOTAL_REVENUE_FY_2', {
    label: 'Total Revenue FY',
    fieldName: 'total_revenue_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_REVENUE_FY_H: new BaseField('TOTAL_REVENUE_FY_H', {
    label: 'Total Revenue FY H',
    fieldName: 'total_revenue_fy_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_REVENUE_TTM: new BaseField('TOTAL_REVENUE_TTM', {
    label: 'Total Revenue TTM',
    fieldName: 'total_revenue_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_REVENUE_TTM_H: new BaseField('TOTAL_REVENUE_TTM_H', {
    label: 'Total Revenue TTM H',
    fieldName: 'total_revenue_ttm_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  // === Fundamentals - Cash Flow (42 fields) ===

  CAPEX_PER_SHARE_CURRENT: new BaseField('CAPEX_PER_SHARE_CURRENT', {
    label: 'Capex per Share Current',
    fieldName: 'capex_per_share_current',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CAPEX_PER_SHARE_FH: new BaseField('CAPEX_PER_SHARE_FH', {
    label: 'Capex per Share Fh',
    fieldName: 'capex_per_share_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CAPEX_PER_SHARE_FQ: new BaseField('CAPEX_PER_SHARE_FQ', {
    label: 'Capex per Share FQ',
    fieldName: 'capex_per_share_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CAPEX_PER_SHARE_FY: new BaseField('CAPEX_PER_SHARE_FY', {
    label: 'Capex per Share FY',
    fieldName: 'capex_per_share_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CAPEX_PER_SHARE_TTM: new BaseField('CAPEX_PER_SHARE_TTM', {
    label: 'CapEx per Share (TTM)',
    fieldName: 'capex_per_share_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_AND_EQUIVALENTS_FY: new BaseField('CASH_AND_EQUIVALENTS_FY', {
    label: 'Cash & Equivalents (FY)',
    fieldName: 'cash_n_equivalents_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_AND_EQUIVALENTS_MRQ: new BaseField('CASH_AND_EQUIVALENTS_MRQ', {
    label: 'Cash & Equivalents (MRQ)',
    fieldName: 'cash_n_equivalents_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_AND_SHORT_TERM_INVESTMENTS_FY: new BaseField('CASH_AND_SHORT_TERM_INVESTMENTS_FY', {
    label: 'Cash and short term investments (FY)',
    fieldName: 'cash_n_short_term_invest_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_AND_SHORT_TERM_INVESTMENTS_MRQ: new BaseField('CASH_AND_SHORT_TERM_INVESTMENTS_MRQ', {
    label: 'Cash and short term investments (MRQ)',
    fieldName: 'cash_n_short_term_invest_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_DIVIDEND_COVERAGE_RATIO_FY: new BaseField('CASH_DIVIDEND_COVERAGE_RATIO_FY', {
    label: 'Cash Dividend Coverage Ratio (FY)',
    fieldName: 'cash_dividend_coverage_ratio_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CASH_DIVIDEND_COVERAGE_RATIO_TTM: new BaseField('CASH_DIVIDEND_COVERAGE_RATIO_TTM', {
    label: 'Cash Dividend Coverage Ratio (TTM)',
    fieldName: 'cash_dividend_coverage_ratio_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CASH_F_FINANCING_ACTIVITIES_FH: new BaseField('CASH_F_FINANCING_ACTIVITIES_FH', {
    label: 'Cash f Financing Activities Fh',
    fieldName: 'cash_f_financing_activities_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_F_FINANCING_ACTIVITIES_FQ: new BaseField('CASH_F_FINANCING_ACTIVITIES_FQ', {
    label: 'Cash f Financing Activities FQ',
    fieldName: 'cash_f_financing_activities_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_F_FINANCING_ACTIVITIES_FY: new BaseField('CASH_F_FINANCING_ACTIVITIES_FY', {
    label: 'Cash from Financing Activities (FY)',
    fieldName: 'cash_f_financing_activities_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_F_FINANCING_ACTIVITIES_TTM: new BaseField('CASH_F_FINANCING_ACTIVITIES_TTM', {
    label: 'Cash from Financing Activities (TTM)',
    fieldName: 'cash_f_financing_activities_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_F_INVESTING_ACTIVITIES_FH: new BaseField('CASH_F_INVESTING_ACTIVITIES_FH', {
    label: 'Cash f Investing Activities Fh',
    fieldName: 'cash_f_investing_activities_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_F_INVESTING_ACTIVITIES_FQ: new BaseField('CASH_F_INVESTING_ACTIVITIES_FQ', {
    label: 'Cash f Investing Activities FQ',
    fieldName: 'cash_f_investing_activities_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_F_INVESTING_ACTIVITIES_FY: new BaseField('CASH_F_INVESTING_ACTIVITIES_FY', {
    label: 'Cash from Investing Activities (FY)',
    fieldName: 'cash_f_investing_activities_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_F_INVESTING_ACTIVITIES_TTM: new BaseField('CASH_F_INVESTING_ACTIVITIES_TTM', {
    label: 'Cash from Investing Activities (TTM)',
    fieldName: 'cash_f_investing_activities_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_F_OPERATING_ACTIVITIES_FH: new BaseField('CASH_F_OPERATING_ACTIVITIES_FH', {
    label: 'Cash f Operating Activities Fh',
    fieldName: 'cash_f_operating_activities_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_F_OPERATING_ACTIVITIES_FQ: new BaseField('CASH_F_OPERATING_ACTIVITIES_FQ', {
    label: 'Cash f Operating Activities FQ',
    fieldName: 'cash_f_operating_activities_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_F_OPERATING_ACTIVITIES_FY: new BaseField('CASH_F_OPERATING_ACTIVITIES_FY', {
    label: 'Cash from Operating Activities (FY)',
    fieldName: 'cash_f_operating_activities_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_F_OPERATING_ACTIVITIES_TTM: new BaseField('CASH_F_OPERATING_ACTIVITIES_TTM', {
    label: 'Cash from Operating Activities (TTM)',
    fieldName: 'cash_f_operating_activities_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_N_SHORT_TERM_INVEST_TO_TOTAL_CURRENT_LIABILITIES_FQ: new BaseField('CASH_N_SHORT_TERM_INVEST_TO_TOTAL_CURRENT_LIABILITIES_FQ', {
    label: 'Cash n Short Term Invest to Total Current Liabilities FQ',
    fieldName: 'cash_n_short_term_invest_to_total_current_liabilities_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CASH_N_SHORT_TERM_INVEST_TO_TOTAL_CURRENT_LIABILITIES_FY: new BaseField('CASH_N_SHORT_TERM_INVEST_TO_TOTAL_CURRENT_LIABILITIES_FY', {
    label: 'Cash Ratio (FY)',
    fieldName: 'cash_n_short_term_invest_to_total_current_liabilities_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CASH_N_SHORT_TERM_INVEST_TO_TOTAL_DEBT_FQ: new BaseField('CASH_N_SHORT_TERM_INVEST_TO_TOTAL_DEBT_FQ', {
    label: 'Cash to Debt Ratio (MRQ)',
    fieldName: 'cash_n_short_term_invest_to_total_debt_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CASH_N_SHORT_TERM_INVEST_TO_TOTAL_DEBT_FY: new BaseField('CASH_N_SHORT_TERM_INVEST_TO_TOTAL_DEBT_FY', {
    label: 'Cash to Debt Ratio (FY)',
    fieldName: 'cash_n_short_term_invest_to_total_debt_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CASH_PER_SHARE_CURRENT: new BaseField('CASH_PER_SHARE_CURRENT', {
    label: 'Cash per Share Current',
    fieldName: 'cash_per_share_current',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_PER_SHARE_FH: new BaseField('CASH_PER_SHARE_FH', {
    label: 'Cash per Share Fh',
    fieldName: 'cash_per_share_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_PER_SHARE_FQ: new BaseField('CASH_PER_SHARE_FQ', {
    label: 'Cash per Share (MRQ)',
    fieldName: 'cash_per_share_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_PER_SHARE_FY: new BaseField('CASH_PER_SHARE_FY', {
    label: 'Cash per Share FY',
    fieldName: 'cash_per_share_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CASH_RATIO: new BaseField('CASH_RATIO', {
    label: 'Cash Ratio',
    fieldName: 'cash_ratio',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EBITDA_LESS_CAPEX_INTERST_COVER_FY: new BaseField('EBITDA_LESS_CAPEX_INTERST_COVER_FY', {
    label: 'EBITDA Less CapEx Interest Coverage (FY)',
    fieldName: 'ebitda_less_capex_interst_cover_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EBITDA_LESS_CAPEX_INTERST_COVER_TTM: new BaseField('EBITDA_LESS_CAPEX_INTERST_COVER_TTM', {
    label: 'EBITDA Less CapEx Interest Coverage (TTM)',
    fieldName: 'ebitda_less_capex_interst_cover_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NEG_TOTAL_CASH_DIVIDENDS_PAID_FH: new BaseField('NEG_TOTAL_CASH_DIVIDENDS_PAID_FH', {
    label: 'Neg Total Cash Dividends Paid Fh',
    fieldName: 'neg_total_cash_dividends_paid_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NEG_TOTAL_CASH_DIVIDENDS_PAID_FQ: new BaseField('NEG_TOTAL_CASH_DIVIDENDS_PAID_FQ', {
    label: 'Neg Total Cash Dividends Paid FQ',
    fieldName: 'neg_total_cash_dividends_paid_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NEG_TOTAL_CASH_DIVIDENDS_PAID_FY: new BaseField('NEG_TOTAL_CASH_DIVIDENDS_PAID_FY', {
    label: 'Neg Total Cash Dividends Paid FY',
    fieldName: 'neg_total_cash_dividends_paid_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NEG_TOTAL_CASH_DIVIDENDS_PAID_TTM: new BaseField('NEG_TOTAL_CASH_DIVIDENDS_PAID_TTM', {
    label: 'Neg Total Cash Dividends Paid TTM',
    fieldName: 'neg_total_cash_dividends_paid_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_CASH_DIVIDENDS_PAID_FH: new BaseField('TOTAL_CASH_DIVIDENDS_PAID_FH', {
    label: 'Total Cash Dividends Paid Fh',
    fieldName: 'total_cash_dividends_paid_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_CASH_DIVIDENDS_PAID_FQ: new BaseField('TOTAL_CASH_DIVIDENDS_PAID_FQ', {
    label: 'Total Cash Dividends Paid FQ',
    fieldName: 'total_cash_dividends_paid_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_CASH_DIVIDENDS_PAID_FY: new BaseField('TOTAL_CASH_DIVIDENDS_PAID_FY', {
    label: 'Total Cash Dividends Paid FY',
    fieldName: 'total_cash_dividends_paid_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_CASH_DIVIDENDS_PAID_TTM: new BaseField('TOTAL_CASH_DIVIDENDS_PAID_TTM', {
    label: 'Total Cash Dividends Paid (TTM)',
    fieldName: 'total_cash_dividends_paid_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  // === Fundamentals - Balance Sheet (77 fields) ===

  DEBT_TO_ASSETS: new BaseField('DEBT_TO_ASSETS', {
    label: 'Debt to Assets',
    fieldName: 'debt_to_assets',
    format: 'round',
    interval: false,
    historical: false,
  }),

  DEBT_TO_ASSET_FQ: new BaseField('DEBT_TO_ASSET_FQ', {
    label: 'Debt to Assets (MRQ)',
    fieldName: 'debt_to_asset_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DEBT_TO_ASSET_FY: new BaseField('DEBT_TO_ASSET_FY', {
    label: 'Debt to Assets (FY)',
    fieldName: 'debt_to_asset_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DEBT_TO_EQUITY_FQ: new BaseField('DEBT_TO_EQUITY_FQ', {
    label: 'Debt to Equity FQ',
    fieldName: 'debt_to_equity_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  DEBT_TO_EQUITY_FY: new BaseField('DEBT_TO_EQUITY_FY', {
    label: 'Debt to Equity FY',
    fieldName: 'debt_to_equity_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  DEBT_TO_EQUITY_RATIO_MRQ: new BaseField('DEBT_TO_EQUITY_RATIO_MRQ', {
    label: 'Debt to Equity Ratio (MRQ)',
    fieldName: 'debt_to_equity',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EFFECTIVE_INTEREST_RATE_ON_DEBT_FY: new BaseField('EFFECTIVE_INTEREST_RATE_ON_DEBT_FY', {
    label: 'Effective Interest Rate on Debt (FY)',
    fieldName: 'effective_interest_rate_on_debt_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EFFECTIVE_INTEREST_RATE_ON_DEBT_TTM: new BaseField('EFFECTIVE_INTEREST_RATE_ON_DEBT_TTM', {
    label: 'Effective Interest Rate on Debt (TTM)',
    fieldName: 'effective_interest_rate_on_debt_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  FIXED_ASSETS_TURNOVER_FQ: new BaseField('FIXED_ASSETS_TURNOVER_FQ', {
    label: 'Fixed Assets Turnover FQ',
    fieldName: 'fixed_assets_turnover_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  FIXED_ASSETS_TURNOVER_FY: new BaseField('FIXED_ASSETS_TURNOVER_FY', {
    label: 'Fixed Assets Turnover (FY)',
    fieldName: 'fixed_assets_turnover_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LONG_TERM_DEBT_FQ: new BaseField('LONG_TERM_DEBT_FQ', {
    label: 'Long Term Debt (MRQ)',
    fieldName: 'long_term_debt_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  LONG_TERM_DEBT_FY: new BaseField('LONG_TERM_DEBT_FY', {
    label: 'Long Term Debt (FY)',
    fieldName: 'long_term_debt_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  LONG_TERM_DEBT_TO_ASSETS_FQ: new BaseField('LONG_TERM_DEBT_TO_ASSETS_FQ', {
    label: 'Long Term Debt to Assets FQ',
    fieldName: 'long_term_debt_to_assets_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LONG_TERM_DEBT_TO_ASSETS_FY: new BaseField('LONG_TERM_DEBT_TO_ASSETS_FY', {
    label: 'Long Term Debt to Assets FY',
    fieldName: 'long_term_debt_to_assets_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LONG_TERM_DEBT_TO_EQUITY_FQ: new BaseField('LONG_TERM_DEBT_TO_EQUITY_FQ', {
    label: 'Long Term Debt to Equity FQ',
    fieldName: 'long_term_debt_to_equity_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NET_DEBT_FQ: new BaseField('NET_DEBT_FQ', {
    label: 'Net Debt FQ',
    fieldName: 'net_debt_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NET_DEBT_FY: new BaseField('NET_DEBT_FY', {
    label: 'Net Debt FY',
    fieldName: 'net_debt_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NET_DEBT_MRQ: new BaseField('NET_DEBT_MRQ', {
    label: 'Net Debt (MRQ)',
    fieldName: 'net_debt',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NET_DEBT_TO_EBITDA_FQ: new BaseField('NET_DEBT_TO_EBITDA_FQ', {
    label: 'Net Debt to EBITDA (MRQ)',
    fieldName: 'net_debt_to_ebitda_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NET_DEBT_TO_EBITDA_FY: new BaseField('NET_DEBT_TO_EBITDA_FY', {
    label: 'Net Debt to EBITDA FY',
    fieldName: 'net_debt_to_ebitda_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RETURN_ON_ASSETS_FQ: new BaseField('RETURN_ON_ASSETS_FQ', {
    label: 'Return on Assets % (MRQ)',
    fieldName: 'return_on_assets_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_ASSETS_FY: new BaseField('RETURN_ON_ASSETS_FY', {
    label: 'Return on Assets FY',
    fieldName: 'return_on_assets_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_ASSETS_TTM: new BaseField('RETURN_ON_ASSETS_TTM', {
    label: 'Return on Assets (TTM)',
    fieldName: 'return_on_assets',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RETURN_ON_COMMON_EQUITY_FY: new BaseField('RETURN_ON_COMMON_EQUITY_FY', {
    label: 'Return on Common Equity FY',
    fieldName: 'return_on_common_equity_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_COMMON_EQUITY_TTM: new BaseField('RETURN_ON_COMMON_EQUITY_TTM', {
    label: 'Return on Common Equity % (TTM)',
    fieldName: 'return_on_common_equity_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_EQUITY_ADJUST_TO_BOOK_FY: new BaseField('RETURN_ON_EQUITY_ADJUST_TO_BOOK_FY', {
    label: 'Return on Equity Adjust to Book FY',
    fieldName: 'return_on_equity_adjust_to_book_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_EQUITY_ADJUST_TO_BOOK_TTM: new BaseField('RETURN_ON_EQUITY_ADJUST_TO_BOOK_TTM', {
    label: 'Return on Equity Adjust to Book TTM',
    fieldName: 'return_on_equity_adjust_to_book_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_EQUITY_FQ: new BaseField('RETURN_ON_EQUITY_FQ', {
    label: 'Return on Equity % (MRQ)',
    fieldName: 'return_on_equity_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_EQUITY_FY: new BaseField('RETURN_ON_EQUITY_FY', {
    label: 'Return on Equity FY',
    fieldName: 'return_on_equity_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_EQUITY_TTM: new BaseField('RETURN_ON_EQUITY_TTM', {
    label: 'Return on Equity (TTM)',
    fieldName: 'return_on_equity',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RETURN_ON_TANG_ASSETS_FQ: new BaseField('RETURN_ON_TANG_ASSETS_FQ', {
    label: 'Return on Tangible Assets % (MRQ)',
    fieldName: 'return_on_tang_assets_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_TANG_ASSETS_FY: new BaseField('RETURN_ON_TANG_ASSETS_FY', {
    label: 'Return on Tangible Assets % (FY)',
    fieldName: 'return_on_tang_assets_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_TANG_EQUITY_FQ: new BaseField('RETURN_ON_TANG_EQUITY_FQ', {
    label: 'Return on Tangible Equity % (MRQ)',
    fieldName: 'return_on_tang_equity_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_TANG_EQUITY_FY: new BaseField('RETURN_ON_TANG_EQUITY_FY', {
    label: 'Return on Tangible Equity % (FY)',
    fieldName: 'return_on_tang_equity_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  SHORT_TERM_DEBT_FQ: new BaseField('SHORT_TERM_DEBT_FQ', {
    label: 'Short Term Debt (MRQ)',
    fieldName: 'short_term_debt_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  SHORT_TERM_DEBT_FY: new BaseField('SHORT_TERM_DEBT_FY', {
    label: 'Short Term Debt (FY)',
    fieldName: 'short_term_debt_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  SHRHLDRS_EQUITY_FQ: new BaseField('SHRHLDRS_EQUITY_FQ', {
    label: 'Shrhldrs Equity FQ',
    fieldName: 'shrhldrs_equity_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  SHRHLDRS_EQUITY_FY: new BaseField('SHRHLDRS_EQUITY_FY', {
    label: 'Shrhldrs Equity FY',
    fieldName: 'shrhldrs_equity_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  SHRHLDRS_EQUITY_TO_TOTAL_ASSETS_FQ: new BaseField('SHRHLDRS_EQUITY_TO_TOTAL_ASSETS_FQ', {
    label: 'Equity to Assets (MRQ)',
    fieldName: 'shrhldrs_equity_to_total_assets_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  SHRHLDRS_EQUITY_TO_TOTAL_ASSETS_FY: new BaseField('SHRHLDRS_EQUITY_TO_TOTAL_ASSETS_FY', {
    label: 'Equity to Assets (FY)',
    fieldName: 'shrhldrs_equity_to_total_assets_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  TOTAL_ASSETS_ANNUAL_YOY_GROWTH: new BaseField('TOTAL_ASSETS_ANNUAL_YOY_GROWTH', {
    label: 'Total Assets (Annual YoY Growth)',
    fieldName: 'total_assets_yoy_growth_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  TOTAL_ASSETS_FQ: new BaseField('TOTAL_ASSETS_FQ', {
    label: 'Total Assets FQ',
    fieldName: 'total_assets_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_ASSETS_FQ_H: new BaseField('TOTAL_ASSETS_FQ_H', {
    label: 'Total Assets FQ H',
    fieldName: 'total_assets_fq_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_ASSETS_FY: new BaseField('TOTAL_ASSETS_FY', {
    label: 'Total Assets FY',
    fieldName: 'total_assets_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_ASSETS_FY_H: new BaseField('TOTAL_ASSETS_FY_H', {
    label: 'Total Assets FY H',
    fieldName: 'total_assets_fy_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_ASSETS_MRQ: new BaseField('TOTAL_ASSETS_MRQ', {
    label: 'Total Assets (MRQ)',
    fieldName: 'total_assets',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_ASSETS_PER_EMPLOYEE_FY: new BaseField('TOTAL_ASSETS_PER_EMPLOYEE_FY', {
    label: 'Total Assets per Employee (FY)',
    fieldName: 'total_assets_per_employee_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_ASSETS_QUARTERLY_QOQ_GROWTH: new BaseField('TOTAL_ASSETS_QUARTERLY_QOQ_GROWTH', {
    label: 'Total Assets (Quarterly QoQ Growth)',
    fieldName: 'total_assets_qoq_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  TOTAL_ASSETS_QUARTERLY_YOY_GROWTH: new BaseField('TOTAL_ASSETS_QUARTERLY_YOY_GROWTH', {
    label: 'Total Assets (Quarterly YoY Growth)',
    fieldName: 'total_assets_yoy_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  TOTAL_ASSETS_TO_EQUITY_FQ: new BaseField('TOTAL_ASSETS_TO_EQUITY_FQ', {
    label: 'Total Assets to Equity FQ',
    fieldName: 'total_assets_to_equity_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_ASSETS_TO_EQUITY_FY: new BaseField('TOTAL_ASSETS_TO_EQUITY_FY', {
    label: 'Total Assets to Equity FY',
    fieldName: 'total_assets_to_equity_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_CURRENT_ASSETS_FQ: new BaseField('TOTAL_CURRENT_ASSETS_FQ', {
    label: 'Total Current Assets FQ',
    fieldName: 'total_current_assets_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_CURRENT_ASSETS_FY: new BaseField('TOTAL_CURRENT_ASSETS_FY', {
    label: 'Total Current Assets FY',
    fieldName: 'total_current_assets_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_CURRENT_ASSETS_MRQ: new BaseField('TOTAL_CURRENT_ASSETS_MRQ', {
    label: 'Total Current Assets (MRQ)',
    fieldName: 'total_current_assets',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_CURRENT_LIABILITIES_FQ: new BaseField('TOTAL_CURRENT_LIABILITIES_FQ', {
    label: 'Total Current Liabilities (MRQ)',
    fieldName: 'total_current_liabilities_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_CURRENT_LIABILITIES_FY: new BaseField('TOTAL_CURRENT_LIABILITIES_FY', {
    label: 'Total Current Liabilities FY',
    fieldName: 'total_current_liabilities_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_ANNUAL_YOY_GROWTH: new BaseField('TOTAL_DEBT_ANNUAL_YOY_GROWTH', {
    label: 'Total Debt (Annual YoY Growth)',
    fieldName: 'total_debt_yoy_growth_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_FQ: new BaseField('TOTAL_DEBT_FQ', {
    label: 'Total Debt FQ',
    fieldName: 'total_debt_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_FQ_H: new BaseField('TOTAL_DEBT_FQ_H', {
    label: 'Total Debt FQ H',
    fieldName: 'total_debt_fq_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_FY: new BaseField('TOTAL_DEBT_FY', {
    label: 'Total Debt FY',
    fieldName: 'total_debt_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_FY_H: new BaseField('TOTAL_DEBT_FY_H', {
    label: 'Total Debt FY H',
    fieldName: 'total_debt_fy_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_MRQ: new BaseField('TOTAL_DEBT_MRQ', {
    label: 'Total Debt (MRQ)',
    fieldName: 'total_debt',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_PER_EMPLOYEE_FY: new BaseField('TOTAL_DEBT_PER_EMPLOYEE_FY', {
    label: 'Total Debt per Employee (FY)',
    fieldName: 'total_debt_per_employee_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_PER_SHARE_CURRENT: new BaseField('TOTAL_DEBT_PER_SHARE_CURRENT', {
    label: 'Total Debt per Share Current',
    fieldName: 'total_debt_per_share_current',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_PER_SHARE_FH: new BaseField('TOTAL_DEBT_PER_SHARE_FH', {
    label: 'Total Debt per Share Fh',
    fieldName: 'total_debt_per_share_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_PER_SHARE_FQ: new BaseField('TOTAL_DEBT_PER_SHARE_FQ', {
    label: 'Total Debt per Share (MRQ)',
    fieldName: 'total_debt_per_share_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_PER_SHARE_FY: new BaseField('TOTAL_DEBT_PER_SHARE_FY', {
    label: 'Total Debt per Share FY',
    fieldName: 'total_debt_per_share_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_QUARTERLY_QOQ_GROWTH: new BaseField('TOTAL_DEBT_QUARTERLY_QOQ_GROWTH', {
    label: 'Total Debt (Quarterly QoQ Growth)',
    fieldName: 'total_debt_qoq_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_QUARTERLY_YOY_GROWTH: new BaseField('TOTAL_DEBT_QUARTERLY_YOY_GROWTH', {
    label: 'Total Debt (Quarterly YoY Growth)',
    fieldName: 'total_debt_yoy_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_TO_CAPITAL_FQ: new BaseField('TOTAL_DEBT_TO_CAPITAL_FQ', {
    label: 'Total Debt to Capital (MRQ)',
    fieldName: 'total_debt_to_capital_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_TO_CAPITAL_FY: new BaseField('TOTAL_DEBT_TO_CAPITAL_FY', {
    label: 'Total Debt to Capital (FY)',
    fieldName: 'total_debt_to_capital_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_TO_EBITDA_FQ: new BaseField('TOTAL_DEBT_TO_EBITDA_FQ', {
    label: 'Total Debt to EBITDA FQ',
    fieldName: 'total_debt_to_ebitda_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_DEBT_TO_EBITDA_FY: new BaseField('TOTAL_DEBT_TO_EBITDA_FY', {
    label: 'Total Debt to EBITDA FY',
    fieldName: 'total_debt_to_ebitda_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_EQUITY_FQ: new BaseField('TOTAL_EQUITY_FQ', {
    label: 'Total Equity (MRQ)',
    fieldName: 'total_equity_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_EQUITY_FY: new BaseField('TOTAL_EQUITY_FY', {
    label: 'Total Equity (FY)',
    fieldName: 'total_equity_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_LIABILITIES_FY: new BaseField('TOTAL_LIABILITIES_FY', {
    label: 'Total Liabilities (FY)',
    fieldName: 'total_liabilities_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TOTAL_LIABILITIES_MRQ: new BaseField('TOTAL_LIABILITIES_MRQ', {
    label: 'Total Liabilities (MRQ)',
    fieldName: 'total_liabilities_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  // === Fundamentals - Ratios (45 fields) ===

  CURRENT_RATIO_CURRENT: new BaseField('CURRENT_RATIO_CURRENT', {
    label: 'Current Ratio Current',
    fieldName: 'current_ratio_current',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CURRENT_RATIO_FQ: new BaseField('CURRENT_RATIO_FQ', {
    label: 'Current Ratio (MRQ)',
    fieldName: 'current_ratio_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CURRENT_RATIO_FY: new BaseField('CURRENT_RATIO_FY', {
    label: 'Current Ratio FY',
    fieldName: 'current_ratio_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CURRENT_RATIO_MRQ: new BaseField('CURRENT_RATIO_MRQ', {
    label: 'Current Ratio (MRQ)',
    fieldName: 'current_ratio',
    format: 'round',
    interval: false,
    historical: false,
  }),

  DIVIDEND_PAYOUT_RATIO_FY: new BaseField('DIVIDEND_PAYOUT_RATIO_FY', {
    label: 'Dividend Payout Ratio FY',
    fieldName: 'dividend_payout_ratio_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DIVIDEND_PAYOUT_RATIO_PERCENT_FQ: new BaseField('DIVIDEND_PAYOUT_RATIO_PERCENT_FQ', {
    label: 'Dividend Payout Ratio Percent FQ',
    fieldName: 'dividend_payout_ratio_percent_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DIVIDEND_PAYOUT_RATIO_PERCENT_FY: new BaseField('DIVIDEND_PAYOUT_RATIO_PERCENT_FY', {
    label: 'Dividend Payout Ratio Percent FY',
    fieldName: 'dividend_payout_ratio_percent_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DIVIDEND_PAYOUT_RATIO_TTM: new BaseField('DIVIDEND_PAYOUT_RATIO_TTM', {
    label: 'Dividend Payout Ratio (TTM)',
    fieldName: 'dividend_payout_ratio_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EBITDA_MARGIN_FY: new BaseField('EBITDA_MARGIN_FY', {
    label: 'EBITDA Margin % (FY)',
    fieldName: 'ebitda_margin_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EBITDA_MARGIN_TTM: new BaseField('EBITDA_MARGIN_TTM', {
    label: 'EBITDA Margin % (TTM)',
    fieldName: 'ebitda_margin_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EXPENSE_RATIO: new BaseField('EXPENSE_RATIO', {
    label: 'Expense Ratio',
    fieldName: 'expense_ratio',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EXPIRATION: new BaseField('EXPIRATION', {
    label: 'Expiration',
    fieldName: 'expiration',
    format: 'date',
    interval: false,
    historical: false,
  }),

  GROSS_MARGIN_FY: new BaseField('GROSS_MARGIN_FY', {
    label: 'Gross Margin (FY)',
    fieldName: 'gross_profit_margin_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GROSS_MARGIN_FY_2: new BaseField('GROSS_MARGIN_FY_2', {
    label: 'Gross Margin FY',
    fieldName: 'gross_margin_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GROSS_MARGIN_PERCENT_TTM: new BaseField('GROSS_MARGIN_PERCENT_TTM', {
    label: 'Gross Margin % (TTM)',
    fieldName: 'gross_margin_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GROSS_MARGIN_PERCENT_TTM_2: new BaseField('GROSS_MARGIN_PERCENT_TTM_2', {
    label: 'Gross Margin Percent TTM',
    fieldName: 'gross_margin_percent_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GROSS_MARGIN_TTM: new BaseField('GROSS_MARGIN_TTM', {
    label: 'Gross Margin (TTM)',
    fieldName: 'gross_margin',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  LEVERAGE_RATIO: new BaseField('LEVERAGE_RATIO', {
    label: 'Leverage Ratio',
    fieldName: 'leverage_ratio',
    format: 'text',
    interval: false,
    historical: false,
  }),

  NCAVPS_RATIO_CURRENT: new BaseField('NCAVPS_RATIO_CURRENT', {
    label: 'Ncavps Ratio Current',
    fieldName: 'ncavps_ratio_current',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NCAVPS_RATIO_FH: new BaseField('NCAVPS_RATIO_FH', {
    label: 'Ncavps Ratio Fh',
    fieldName: 'ncavps_ratio_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NCAVPS_RATIO_FQ: new BaseField('NCAVPS_RATIO_FQ', {
    label: 'NCAV per Share (MRQ)',
    fieldName: 'ncavps_ratio_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NCAVPS_RATIO_FY: new BaseField('NCAVPS_RATIO_FY', {
    label: 'NCAV per Share (FY)',
    fieldName: 'ncavps_ratio_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NET_MARGIN: new BaseField('NET_MARGIN', {
    label: 'Net Margin',
    fieldName: 'net_margin',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NET_MARGIN_FY: new BaseField('NET_MARGIN_FY', {
    label: 'Net Margin (FY)',
    fieldName: 'net_income_bef_disc_oper_margin_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NET_MARGIN_FY_2: new BaseField('NET_MARGIN_FY_2', {
    label: 'Net Margin FY',
    fieldName: 'net_margin_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NET_MARGIN_PERCENT_TTM: new BaseField('NET_MARGIN_PERCENT_TTM', {
    label: 'Net Margin % (TTM)',
    fieldName: 'net_margin_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  NET_MARGIN_TTM: new BaseField('NET_MARGIN_TTM', {
    label: 'Net Margin (TTM)',
    fieldName: 'after_tax_margin',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  OPERATING_MARGIN_FY: new BaseField('OPERATING_MARGIN_FY', {
    label: 'Operating Margin (FY)',
    fieldName: 'oper_income_margin_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  OPERATING_MARGIN_FY_2: new BaseField('OPERATING_MARGIN_FY_2', {
    label: 'Operating Margin FY',
    fieldName: 'operating_margin_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  OPERATING_MARGIN_PERCENT_TTM: new BaseField('OPERATING_MARGIN_PERCENT_TTM', {
    label: 'Operating Margin % (TTM)',
    fieldName: 'operating_margin_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  OPERATING_MARGIN_TTM: new BaseField('OPERATING_MARGIN_TTM', {
    label: 'Operating Margin (TTM)',
    fieldName: 'operating_margin',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRETAX_MARGIN_TTM: new BaseField('PRETAX_MARGIN_TTM', {
    label: 'Pretax Margin (TTM)',
    fieldName: 'pre_tax_margin',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  PRE_TAX_MARGIN_TTM: new BaseField('PRE_TAX_MARGIN_TTM', {
    label: 'Pre Tax Margin TTM',
    fieldName: 'pre_tax_margin_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  QUICK_RATIO_CURRENT: new BaseField('QUICK_RATIO_CURRENT', {
    label: 'Quick Ratio Current',
    fieldName: 'quick_ratio_current',
    format: 'round',
    interval: false,
    historical: false,
  }),

  QUICK_RATIO_FQ: new BaseField('QUICK_RATIO_FQ', {
    label: 'Quick Ratio (MRQ)',
    fieldName: 'quick_ratio_fq',
    format: 'round',
    interval: false,
    historical: false,
  }),

  QUICK_RATIO_FY: new BaseField('QUICK_RATIO_FY', {
    label: 'Quick Ratio FY',
    fieldName: 'quick_ratio_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  QUICK_RATIO_MRQ: new BaseField('QUICK_RATIO_MRQ', {
    label: 'Quick Ratio (MRQ)',
    fieldName: 'quick_ratio',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RESEARCH_AND_DEVELOPMENT_RATIO_FY: new BaseField('RESEARCH_AND_DEVELOPMENT_RATIO_FY', {
    label: 'Research & development Ratio (FY)',
    fieldName: 'research_and_dev_ratio_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RESEARCH_AND_DEVELOPMENT_RATIO_TTM: new BaseField('RESEARCH_AND_DEVELOPMENT_RATIO_TTM', {
    label: 'Research & development Ratio (TTM)',
    fieldName: 'research_and_dev_ratio_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  SELLING_GENERAL_AND_ADMIN_EXPENSES_RATIO_FY: new BaseField('SELLING_GENERAL_AND_ADMIN_EXPENSES_RATIO_FY', {
    label: 'Selling General & Admin expenses Ratio (FY)',
    fieldName: 'sell_gen_admin_exp_other_ratio_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  SELLING_GENERAL_AND_ADMIN_EXPENSES_RATIO_TTM: new BaseField('SELLING_GENERAL_AND_ADMIN_EXPENSES_RATIO_TTM', {
    label: 'Selling General & Admin expenses Ratio (TTM)',
    fieldName: 'sell_gen_admin_exp_other_ratio_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  SHARE_BUYBACK_RATIO_FQ: new BaseField('SHARE_BUYBACK_RATIO_FQ', {
    label: 'Share Buyback Ratio % (MRQ)',
    fieldName: 'share_buyback_ratio_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  SHARE_BUYBACK_RATIO_FY: new BaseField('SHARE_BUYBACK_RATIO_FY', {
    label: 'Share Buyback Ratio % (FY)',
    fieldName: 'share_buyback_ratio_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  SLOAN_RATIO_FY: new BaseField('SLOAN_RATIO_FY', {
    label: 'Sloan Ratio FY',
    fieldName: 'sloan_ratio_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  SLOAN_RATIO_TTM: new BaseField('SLOAN_RATIO_TTM', {
    label: 'Sloan Ratio % (TTM)',
    fieldName: 'sloan_ratio_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  // === Fundamentals - Dividends (28 fields) ===

  DIVIDENDS_FREQUENCY: new BaseField('DIVIDENDS_FREQUENCY', {
    label: 'Dividends Frequency',
    fieldName: 'dividends_frequency',
    format: 'text',
    interval: false,
    historical: false,
  }),

  DIVIDENDS_PAID_FY: new BaseField('DIVIDENDS_PAID_FY', {
    label: 'Dividends Paid (FY)',
    fieldName: 'dividends_paid',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  DIVIDENDS_PER_SHARE_ANNUAL_YOY_GROWTH: new BaseField('DIVIDENDS_PER_SHARE_ANNUAL_YOY_GROWTH', {
    label: 'Dividends per share (Annual YoY Growth)',
    fieldName: 'dps_common_stock_prim_issue_yoy_growth_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DIVIDENDS_PER_SHARE_FY: new BaseField('DIVIDENDS_PER_SHARE_FY', {
    label: 'Dividends per Share (FY)',
    fieldName: 'dps_common_stock_prim_issue_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  DIVIDENDS_PER_SHARE_MRQ: new BaseField('DIVIDENDS_PER_SHARE_MRQ', {
    label: 'Dividends per Share (MRQ)',
    fieldName: 'dividends_per_share_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  DIVIDENDS_YIELD: new BaseField('DIVIDENDS_YIELD', {
    label: 'Dividend Yield %',
    fieldName: 'dividends_yield',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DIVIDENDS_YIELD_CURRENT: new BaseField('DIVIDENDS_YIELD_CURRENT', {
    label: 'Dividend Yield % (Current)',
    fieldName: 'dividends_yield_current',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DIVIDENDS_YIELD_FQ: new BaseField('DIVIDENDS_YIELD_FQ', {
    label: 'Dividends Yield FQ',
    fieldName: 'dividends_yield_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DIVIDENDS_YIELD_FY: new BaseField('DIVIDENDS_YIELD_FY', {
    label: 'Dividends Yield FY',
    fieldName: 'dividends_yield_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DIVIDEND_AMOUNT_RECENT: new BaseField('DIVIDEND_AMOUNT_RECENT', {
    label: 'Dividend Amount Recent',
    fieldName: 'dividend_amount_recent',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  DIVIDEND_AMOUNT_UPCOMING: new BaseField('DIVIDEND_AMOUNT_UPCOMING', {
    label: 'Dividend Amount Upcoming',
    fieldName: 'dividend_amount_upcoming',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  DIVIDEND_EX_DATE_RECENT: new BaseField('DIVIDEND_EX_DATE_RECENT', {
    label: 'Dividend Ex Date Recent',
    fieldName: 'dividend_ex_date_recent',
    format: 'date',
    interval: false,
    historical: false,
  }),

  DIVIDEND_EX_DATE_UPCOMING: new BaseField('DIVIDEND_EX_DATE_UPCOMING', {
    label: 'Dividend Ex Date Upcoming',
    fieldName: 'dividend_ex_date_upcoming',
    format: 'date',
    interval: false,
    historical: false,
  }),

  DIVIDEND_FREQUENCY_RECENT: new BaseField('DIVIDEND_FREQUENCY_RECENT', {
    label: 'Dividend Frequency Recent',
    fieldName: 'dividend_frequency_recent',
    format: 'text',
    interval: false,
    historical: false,
  }),

  DIVIDEND_FREQUENCY_UPCOMING: new BaseField('DIVIDEND_FREQUENCY_UPCOMING', {
    label: 'Dividend Frequency Upcoming',
    fieldName: 'dividend_frequency_upcoming',
    format: 'text',
    interval: false,
    historical: false,
  }),

  DIVIDEND_PAYMENT_DATE_RECENT: new BaseField('DIVIDEND_PAYMENT_DATE_RECENT', {
    label: 'Dividend Payment Date Recent',
    fieldName: 'dividend_payment_date_recent',
    format: 'date',
    interval: false,
    historical: false,
  }),

  DIVIDEND_PAYMENT_DATE_UPCOMING: new BaseField('DIVIDEND_PAYMENT_DATE_UPCOMING', {
    label: 'Dividend Payment Date Upcoming',
    fieldName: 'dividend_payment_date_upcoming',
    format: 'date',
    interval: false,
    historical: false,
  }),

  DIVIDEND_TREATMENT: new BaseField('DIVIDEND_TREATMENT', {
    label: 'Dividend Treatment',
    fieldName: 'dividend_treatment',
    format: 'text',
    interval: false,
    historical: false,
  }),

  DIVIDEND_YIELD_FORWARD: new BaseField('DIVIDEND_YIELD_FORWARD', {
    label: 'Dividend Yield Forward',
    fieldName: 'dividend_yield_recent',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DIVIDEND_YIELD_UPCOMING: new BaseField('DIVIDEND_YIELD_UPCOMING', {
    label: 'Dividend Yield Upcoming',
    fieldName: 'dividend_yield_upcoming',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EXPECTED_ANNUAL_DIVIDENDS: new BaseField('EXPECTED_ANNUAL_DIVIDENDS', {
    label: 'Expected Annual Dividends',
    fieldName: 'expected_annual_dividends',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EX_DIVIDEND_DATE_RECENT: new BaseField('EX_DIVIDEND_DATE_RECENT', {
    label: 'Ex Dividend Date Recent',
    fieldName: 'ex_dividend_date_recent',
    format: 'date',
    interval: false,
    historical: false,
  }),

  EX_DIVIDEND_DATE_UPCOMING: new BaseField('EX_DIVIDEND_DATE_UPCOMING', {
    label: 'Ex Dividend Date Upcoming',
    fieldName: 'ex_dividend_date_upcoming',
    format: 'date',
    interval: false,
    historical: false,
  }),

  INDICATED_ANNUAL_DIVIDEND: new BaseField('INDICATED_ANNUAL_DIVIDEND', {
    label: 'Indicated Annual Dividend',
    fieldName: 'indicated_annual_dividend',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NEXT_DIVIDEND_DATE: new BaseField('NEXT_DIVIDEND_DATE', {
    label: 'Next Dividend Date',
    fieldName: 'next_dividend_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  PREFERRED_DIVIDENDS: new BaseField('PREFERRED_DIVIDENDS', {
    label: 'Preferred Dividends',
    fieldName: 'preferred_dividends',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RATES_DIVIDEND_RECENT: new BaseField('RATES_DIVIDEND_RECENT', {
    label: 'Rates Dividend Recent',
    fieldName: 'rates_dividend_recent',
    format: 'text',
    interval: false,
    historical: false,
  }),

  RATES_DIVIDEND_UPCOMING: new BaseField('RATES_DIVIDEND_UPCOMING', {
    label: 'Rates Dividend Upcoming',
    fieldName: 'rates_dividend_upcoming',
    format: 'text',
    interval: false,
    historical: false,
  }),

  // === Fundamentals - Other (99 fields) ===

  ALTMAN_Z_SCORE_FY: new BaseField('ALTMAN_Z_SCORE_FY', {
    label: 'Altman Z Score FY',
    fieldName: 'altman_z_score_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  ALTMAN_Z_SCORE_TTM: new BaseField('ALTMAN_Z_SCORE_TTM', {
    label: 'Altman Z-Score (TTM)',
    fieldName: 'altman_z_score_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  ASSET_TURNOVER_FY: new BaseField('ASSET_TURNOVER_FY', {
    label: 'Asset Turnover (FY)',
    fieldName: 'asset_turnover_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  BOOK_TANGIBLE_PER_SHARE_FQ: new BaseField('BOOK_TANGIBLE_PER_SHARE_FQ', {
    label: 'Tangible Book Value per Share (MRQ)',
    fieldName: 'book_tangible_per_share_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  BOOK_TANGIBLE_PER_SHARE_FY: new BaseField('BOOK_TANGIBLE_PER_SHARE_FY', {
    label: 'Book Tangible per Share FY',
    fieldName: 'book_tangible_per_share_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  BOOK_VALUE_PER_SHARE_FQ: new BaseField('BOOK_VALUE_PER_SHARE_FQ', {
    label: 'Book Value per Share (MRQ)',
    fieldName: 'book_value_per_share_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  BOOK_VALUE_PER_SHARE_FY: new BaseField('BOOK_VALUE_PER_SHARE_FY', {
    label: 'Book Value per Share FY',
    fieldName: 'book_value_per_share_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CAPITAL_EXPENDITURES_FQ: new BaseField('CAPITAL_EXPENDITURES_FQ', {
    label: 'Capital Expenditures (MRQ)',
    fieldName: 'capital_expenditures_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CAPITAL_EXPENDITURES_FY: new BaseField('CAPITAL_EXPENDITURES_FY', {
    label: 'Capital Expenditures (FY)',
    fieldName: 'capital_expenditures_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CAPITAL_EXPENDITURES_QOQ_GROWTH_FQ: new BaseField('CAPITAL_EXPENDITURES_QOQ_GROWTH_FQ', {
    label: 'Capital Expenditures QOQ Growth FQ',
    fieldName: 'capital_expenditures_qoq_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CAPITAL_EXPENDITURES_TTM: new BaseField('CAPITAL_EXPENDITURES_TTM', {
    label: 'Capital Expenditures (TTM)',
    fieldName: 'capital_expenditures_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CAPITAL_EXPENDITURES_YOY_GROWTH_FQ: new BaseField('CAPITAL_EXPENDITURES_YOY_GROWTH_FQ', {
    label: 'Capital Expenditures YOY Growth FQ',
    fieldName: 'capital_expenditures_yoy_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CAPITAL_EXPENDITURES_YOY_GROWTH_TTM: new BaseField('CAPITAL_EXPENDITURES_YOY_GROWTH_TTM', {
    label: 'Capital Expenditures YOY Growth TTM',
    fieldName: 'capital_expenditures_yoy_growth_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  DILUTED_SHARES_OUTSTANDING_FQ: new BaseField('DILUTED_SHARES_OUTSTANDING_FQ', {
    label: 'Diluted Shares Outstanding FQ',
    fieldName: 'diluted_shares_outstanding_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  DPS_COMMON_STOCK_PRIM_ISSUE_FQ: new BaseField('DPS_COMMON_STOCK_PRIM_ISSUE_FQ', {
    label: 'DPS Common Stock Prim Issue FQ',
    fieldName: 'dps_common_stock_prim_issue_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  DPS_COMMON_STOCK_PRIM_ISSUE_FY_H: new BaseField('DPS_COMMON_STOCK_PRIM_ISSUE_FY_H', {
    label: 'DPS Common Stock Prim Issue FY H',
    fieldName: 'dps_common_stock_prim_issue_fy_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  DPS_COMMON_STOCK_PRIM_ISSUE_TTM: new BaseField('DPS_COMMON_STOCK_PRIM_ISSUE_TTM', {
    label: 'DPS Common Stock Prim Issue TTM',
    fieldName: 'dps_common_stock_prim_issue_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBITDA_FQ: new BaseField('EBITDA_FQ', {
    label: 'EBITDA FQ',
    fieldName: 'ebitda_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBITDA_FQ_H: new BaseField('EBITDA_FQ_H', {
    label: 'EBITDA FQ H',
    fieldName: 'ebitda_fq_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EBITDA_FY: new BaseField('EBITDA_FY', {
    label: 'EBITDA FY',
    fieldName: 'ebitda_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBITDA_FY_H: new BaseField('EBITDA_FY_H', {
    label: 'EBITDA FY H',
    fieldName: 'ebitda_fy_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EBITDA_INTERST_COVER_FY: new BaseField('EBITDA_INTERST_COVER_FY', {
    label: 'EBITDA Interest Coverage (FY)',
    fieldName: 'ebitda_interst_cover_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EBITDA_INTERST_COVER_TTM: new BaseField('EBITDA_INTERST_COVER_TTM', {
    label: 'EBITDA Interest Coverage (TTM)',
    fieldName: 'ebitda_interst_cover_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EBITDA_PER_EMPLOYEE_FY: new BaseField('EBITDA_PER_EMPLOYEE_FY', {
    label: 'EBITDA per Employee (FY)',
    fieldName: 'ebitda_per_employee_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBITDA_PER_SHARE_FQ: new BaseField('EBITDA_PER_SHARE_FQ', {
    label: 'EBITDA per Share FQ',
    fieldName: 'ebitda_per_share_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBITDA_PER_SHARE_FY: new BaseField('EBITDA_PER_SHARE_FY', {
    label: 'EBITDA per Share FY',
    fieldName: 'ebitda_per_share_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBITDA_PER_SHARE_TTM: new BaseField('EBITDA_PER_SHARE_TTM', {
    label: 'EBITDA per Share (TTM)',
    fieldName: 'ebitda_per_share_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBITDA_TTM: new BaseField('EBITDA_TTM', {
    label: 'EBITDA (TTM)',
    fieldName: 'ebitda',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBITDA_TTM_2: new BaseField('EBITDA_TTM_2', {
    label: 'EBITDA TTM',
    fieldName: 'ebitda_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBITDA_TTM_H: new BaseField('EBITDA_TTM_H', {
    label: 'EBITDA TTM H',
    fieldName: 'ebitda_ttm_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  EBITDA_TTM_YOY_GROWTH: new BaseField('EBITDA_TTM_YOY_GROWTH', {
    label: 'EBITDA (TTM YoY Growth)',
    fieldName: 'ebitda_yoy_growth_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EBIT_PER_SHARE_FQ: new BaseField('EBIT_PER_SHARE_FQ', {
    label: 'EBIT per Share FQ',
    fieldName: 'ebit_per_share_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBIT_PER_SHARE_FY: new BaseField('EBIT_PER_SHARE_FY', {
    label: 'EBIT per Share FY',
    fieldName: 'ebit_per_share_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBIT_PER_SHARE_TTM: new BaseField('EBIT_PER_SHARE_TTM', {
    label: 'EBIT per Share (TTM)',
    fieldName: 'ebit_per_share_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBIT_TTM: new BaseField('EBIT_TTM', {
    label: 'EBIT TTM',
    fieldName: 'ebit_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  ENTERPRISE_VALUEEBITDA_TTM: new BaseField('ENTERPRISE_VALUEEBITDA_TTM', {
    label: 'Enterprise Value/EBITDA (TTM)',
    fieldName: 'enterprise_value_ebitda_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  ENTERPRISE_VALUE_MRQ: new BaseField('ENTERPRISE_VALUE_MRQ', {
    label: 'Enterprise Value (MRQ)',
    fieldName: 'enterprise_value_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  ENTERPRISE_VALUE_TO_EBIT_TTM: new BaseField('ENTERPRISE_VALUE_TO_EBIT_TTM', {
    label: 'EV to EBIT (TTM)',
    fieldName: 'enterprise_value_to_ebit_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  ENTERPRISE_VALUE_TO_GROSS_PROFIT_TTM: new BaseField('ENTERPRISE_VALUE_TO_GROSS_PROFIT_TTM', {
    label: 'EV to Gross Profit (TTM)',
    fieldName: 'enterprise_value_to_gross_profit_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  FISCAL_PERIOD_CURRENT: new BaseField('FISCAL_PERIOD_CURRENT', {
    label: 'Fiscal Period Current',
    fieldName: 'fiscal_period_current',
    format: 'text',
    interval: false,
    historical: false,
  }),

  FISCAL_PERIOD_END_CURRENT: new BaseField('FISCAL_PERIOD_END_CURRENT', {
    label: 'Fiscal Period End Current',
    fieldName: 'fiscal_period_end_current',
    format: 'date',
    interval: false,
    historical: false,
  }),

  FISCAL_PERIOD_END_FH: new BaseField('FISCAL_PERIOD_END_FH', {
    label: 'Fiscal Period End Fh',
    fieldName: 'fiscal_period_end_fh',
    format: 'date',
    interval: false,
    historical: false,
  }),

  FISCAL_PERIOD_END_FH_H: new BaseField('FISCAL_PERIOD_END_FH_H', {
    label: 'Fiscal Period End Fh H',
    fieldName: 'fiscal_period_end_fh_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  FISCAL_PERIOD_END_FQ: new BaseField('FISCAL_PERIOD_END_FQ', {
    label: 'Fiscal Period End (MRQ)',
    fieldName: 'fiscal_period_end_fq',
    format: 'date',
    interval: false,
    historical: false,
  }),

  FISCAL_PERIOD_END_FY: new BaseField('FISCAL_PERIOD_END_FY', {
    label: 'Fiscal Period End (FY)',
    fieldName: 'fiscal_period_end_fy',
    format: 'date',
    interval: false,
    historical: false,
  }),

  FISCAL_PERIOD_FY: new BaseField('FISCAL_PERIOD_FY', {
    label: 'Fiscal Period (FY)',
    fieldName: 'fiscal_period_fy',
    format: 'text',
    interval: false,
    historical: false,
  }),

  FISCAL_PERIOD_FY_H: new BaseField('FISCAL_PERIOD_FY_H', {
    label: 'Fiscal Period FY H',
    fieldName: 'fiscal_period_fy_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  GOODWILL_FQ: new BaseField('GOODWILL_FQ', {
    label: 'Goodwill (MRQ)',
    fieldName: 'goodwill_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GOODWILL_FY: new BaseField('GOODWILL_FY', {
    label: 'Goodwill (FY)',
    fieldName: 'goodwill_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GROSS_PROFIT_FQ_H: new BaseField('GROSS_PROFIT_FQ_H', {
    label: 'Gross Profit FQ H',
    fieldName: 'gross_profit_fq_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  GROSS_PROFIT_FY: new BaseField('GROSS_PROFIT_FY', {
    label: 'Gross Profit (FY)',
    fieldName: 'gross_profit',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GROSS_PROFIT_FY_2: new BaseField('GROSS_PROFIT_FY_2', {
    label: 'Gross Profit FY',
    fieldName: 'gross_profit_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GROSS_PROFIT_FY_H: new BaseField('GROSS_PROFIT_FY_H', {
    label: 'Gross Profit FY H',
    fieldName: 'gross_profit_fy_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  GROSS_PROFIT_MRQ: new BaseField('GROSS_PROFIT_MRQ', {
    label: 'Gross Profit (MRQ)',
    fieldName: 'gross_profit_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GROSS_PROFIT_TTM: new BaseField('GROSS_PROFIT_TTM', {
    label: 'Gross Profit TTM',
    fieldName: 'gross_profit_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GROSS_PROFIT_TTM_H: new BaseField('GROSS_PROFIT_TTM_H', {
    label: 'Gross Profit TTM H',
    fieldName: 'gross_profit_ttm_h',
    format: 'round',
    interval: false,
    historical: false,
  }),

  GROSS_PROFIT_TTM_YOY_GROWTH: new BaseField('GROSS_PROFIT_TTM_YOY_GROWTH', {
    label: 'Gross Profit (TTM YoY Growth)',
    fieldName: 'gross_profit_yoy_growth_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  INTERST_COVER_FY: new BaseField('INTERST_COVER_FY', {
    label: 'Interest Coverage (FY)',
    fieldName: 'interst_cover_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INTERST_COVER_TTM: new BaseField('INTERST_COVER_TTM', {
    label: 'Interest Coverage (TTM)',
    fieldName: 'interst_cover_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INVENT_TURNOVER_FY: new BaseField('INVENT_TURNOVER_FY', {
    label: 'Inventory Turnover (FY)',
    fieldName: 'invent_turnover_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  ISSUANCE_OF_STOCK_NET_TTM: new BaseField('ISSUANCE_OF_STOCK_NET_TTM', {
    label: 'Issuance of Stock Net TTM',
    fieldName: 'issuance_of_stock_net_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NEG_CAPITAL_EXPENDITURES_FQ: new BaseField('NEG_CAPITAL_EXPENDITURES_FQ', {
    label: 'Neg Capital Expenditures FQ',
    fieldName: 'neg_capital_expenditures_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NEG_CAPITAL_EXPENDITURES_FY: new BaseField('NEG_CAPITAL_EXPENDITURES_FY', {
    label: 'Neg Capital Expenditures FY',
    fieldName: 'neg_capital_expenditures_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NEG_CAPITAL_EXPENDITURES_TTM: new BaseField('NEG_CAPITAL_EXPENDITURES_TTM', {
    label: 'Neg Capital Expenditures TTM',
    fieldName: 'neg_capital_expenditures_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NEG_RESEARCH_AND_DEV_FQ: new BaseField('NEG_RESEARCH_AND_DEV_FQ', {
    label: 'Neg Research and Dev FQ',
    fieldName: 'neg_research_and_dev_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NEG_RESEARCH_AND_DEV_FY: new BaseField('NEG_RESEARCH_AND_DEV_FY', {
    label: 'Neg Research and Dev FY',
    fieldName: 'neg_research_and_dev_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NEG_RESEARCH_AND_DEV_TTM: new BaseField('NEG_RESEARCH_AND_DEV_TTM', {
    label: 'Neg Research and Dev TTM',
    fieldName: 'neg_research_and_dev_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NUMBER_OF_EMPLOYEES_FY: new BaseField('NUMBER_OF_EMPLOYEES_FY', {
    label: 'Number of Employees FY',
    fieldName: 'number_of_employees_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NUMBER_OF_SHAREHOLDERS_FY: new BaseField('NUMBER_OF_SHAREHOLDERS_FY', {
    label: 'Number of Shareholders FY',
    fieldName: 'number_of_shareholders_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  OPER_INCOME_FQ: new BaseField('OPER_INCOME_FQ', {
    label: 'Oper Income FQ',
    fieldName: 'oper_income_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPER_INCOME_FY: new BaseField('OPER_INCOME_FY', {
    label: 'Operating Income (FY)',
    fieldName: 'oper_income_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPER_INCOME_PER_EMPLOYEE_FY: new BaseField('OPER_INCOME_PER_EMPLOYEE_FY', {
    label: 'Oper Income per Employee FY',
    fieldName: 'oper_income_per_employee_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OPER_INCOME_TTM: new BaseField('OPER_INCOME_TTM', {
    label: 'Operating Income (TTM)',
    fieldName: 'oper_income_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  PIOTROSKI_F_SCORE_FY: new BaseField('PIOTROSKI_F_SCORE_FY', {
    label: 'Piotroski f Score FY',
    fieldName: 'piotroski_f_score_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  PIOTROSKI_F_SCORE_TTM: new BaseField('PIOTROSKI_F_SCORE_TTM', {
    label: 'Piotroski F-Score (TTM)',
    fieldName: 'piotroski_f_score_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  RATES_FQ: new BaseField('RATES_FQ', {
    label: 'Rates FQ',
    fieldName: 'rates_fq',
    format: 'text',
    interval: false,
    historical: false,
  }),

  RATES_FY: new BaseField('RATES_FY', {
    label: 'Rates FY',
    fieldName: 'rates_fy',
    format: 'text',
    interval: false,
    historical: false,
  }),

  RATES_TTM: new BaseField('RATES_TTM', {
    label: 'Rates TTM',
    fieldName: 'rates_ttm',
    format: 'text',
    interval: false,
    historical: false,
  }),

  RESEARCH_AND_DEV_FQ: new BaseField('RESEARCH_AND_DEV_FQ', {
    label: 'Research & Development (MRQ)',
    fieldName: 'research_and_dev_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  RESEARCH_AND_DEV_FY: new BaseField('RESEARCH_AND_DEV_FY', {
    label: 'Research & Development (FY)',
    fieldName: 'research_and_dev_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  RESEARCH_AND_DEV_PER_EMPLOYEE_FY: new BaseField('RESEARCH_AND_DEV_PER_EMPLOYEE_FY', {
    label: 'Research and Dev per Employee FY',
    fieldName: 'research_and_dev_per_employee_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  RESEARCH_AND_DEV_TTM: new BaseField('RESEARCH_AND_DEV_TTM', {
    label: 'Research and Dev TTM',
    fieldName: 'research_and_dev_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  RETURN_OF_INVESTED_CAPITAL_PERCENT_TTM: new BaseField('RETURN_OF_INVESTED_CAPITAL_PERCENT_TTM', {
    label: 'Return of Invested Capital Percent TTM',
    fieldName: 'return_of_invested_capital_percent_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_CAPITAL_EMPLOYED_FQ: new BaseField('RETURN_ON_CAPITAL_EMPLOYED_FQ', {
    label: 'Return on Capital Employed % (MRQ)',
    fieldName: 'return_on_capital_employed_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_CAPITAL_EMPLOYED_FY: new BaseField('RETURN_ON_CAPITAL_EMPLOYED_FY', {
    label: 'Return on Capital Employed FY',
    fieldName: 'return_on_capital_employed_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_INVESTED_CAPITAL_FQ: new BaseField('RETURN_ON_INVESTED_CAPITAL_FQ', {
    label: 'Return on Invested Capital % (MRQ)',
    fieldName: 'return_on_invested_capital_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_INVESTED_CAPITAL_FY: new BaseField('RETURN_ON_INVESTED_CAPITAL_FY', {
    label: 'Return on Invested Capital FY',
    fieldName: 'return_on_invested_capital_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_INVESTED_CAPITAL_TTM: new BaseField('RETURN_ON_INVESTED_CAPITAL_TTM', {
    label: 'Return on Invested Capital (TTM)',
    fieldName: 'return_on_invested_capital',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_TOTAL_CAPITAL_FQ: new BaseField('RETURN_ON_TOTAL_CAPITAL_FQ', {
    label: 'Return on Total Capital % (MRQ)',
    fieldName: 'return_on_total_capital_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  RETURN_ON_TOTAL_CAPITAL_FY: new BaseField('RETURN_ON_TOTAL_CAPITAL_FY', {
    label: 'Return on Total Capital FY',
    fieldName: 'return_on_total_capital_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  SELL_GEN_ADMIN_EXP_OTHER_FY: new BaseField('SELL_GEN_ADMIN_EXP_OTHER_FY', {
    label: 'Sell Gen Admin Exp Other FY',
    fieldName: 'sell_gen_admin_exp_other_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  SELL_GEN_ADMIN_EXP_OTHER_TTM: new BaseField('SELL_GEN_ADMIN_EXP_OTHER_TTM', {
    label: 'Sell Gen Admin Exp Other TTM',
    fieldName: 'sell_gen_admin_exp_other_ttm',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  SUSTAINABLE_GROWTH_RATE_FY: new BaseField('SUSTAINABLE_GROWTH_RATE_FY', {
    label: 'Sustainable Growth Rate FY',
    fieldName: 'sustainable_growth_rate_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  SUSTAINABLE_GROWTH_RATE_TTM: new BaseField('SUSTAINABLE_GROWTH_RATE_TTM', {
    label: 'Sustainable Growth Rate (TTM)',
    fieldName: 'sustainable_growth_rate_ttm',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  WORKING_CAPITAL_FQ: new BaseField('WORKING_CAPITAL_FQ', {
    label: 'Working Capital FQ',
    fieldName: 'working_capital_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  WORKING_CAPITAL_PER_SHARE_FQ: new BaseField('WORKING_CAPITAL_PER_SHARE_FQ', {
    label: 'Working Capital per Share (MRQ)',
    fieldName: 'working_capital_per_share_fq',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  WORKING_CAPITAL_PER_SHARE_FY: new BaseField('WORKING_CAPITAL_PER_SHARE_FY', {
    label: 'Working Capital per Share FY',
    fieldName: 'working_capital_per_share_fy',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  ZMIJEWSKI_SCORE_FY: new BaseField('ZMIJEWSKI_SCORE_FY', {
    label: 'Zmijewski Score FY',
    fieldName: 'zmijewski_score_fy',
    format: 'round',
    interval: false,
    historical: false,
  }),

  ZMIJEWSKI_SCORE_TTM: new BaseField('ZMIJEWSKI_SCORE_TTM', {
    label: 'Zmijewski Score (TTM)',
    fieldName: 'zmijewski_score_ttm',
    format: 'round',
    interval: false,
    historical: false,
  }),

  // === Other Fields (277 fields) ===

  ACTIVELY_MANAGED: new BaseField('ACTIVELY_MANAGED', {
    label: 'Actively Managed',
    fieldName: 'actively_managed',
    format: 'text',
    interval: false,
    historical: false,
  }),

  ACTIVE_SYMBOL: new BaseField('ACTIVE_SYMBOL', {
    label: 'Active Symbol',
    fieldName: 'active_symbol',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  ADRP: new BaseField('ADRP', {
    label: 'Adrp',
    fieldName: 'ADRP',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADRP_1: new BaseField('ADRP_1', {
    label: 'Adrp|1',
    fieldName: 'ADRP|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADRP_120: new BaseField('ADRP_120', {
    label: 'Adrp|120',
    fieldName: 'ADRP|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADRP_15: new BaseField('ADRP_15', {
    label: 'Adrp|15',
    fieldName: 'ADRP|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADRP_1M: new BaseField('ADRP_1M', {
    label: 'Adrp|1m',
    fieldName: 'ADRP|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADRP_1W: new BaseField('ADRP_1W', {
    label: 'Adrp|1w',
    fieldName: 'ADRP|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADRP_240: new BaseField('ADRP_240', {
    label: 'Adrp|240',
    fieldName: 'ADRP|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADRP_30: new BaseField('ADRP_30', {
    label: 'Adrp|30',
    fieldName: 'ADRP|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADRP_5: new BaseField('ADRP_5', {
    label: 'Adrp|5',
    fieldName: 'ADRP|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADRP_60: new BaseField('ADRP_60', {
    label: 'Adrp|60',
    fieldName: 'ADRP|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADR_1: new BaseField('ADR_1', {
    label: 'Adr|1',
    fieldName: 'ADR|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADR_120: new BaseField('ADR_120', {
    label: 'Adr|120',
    fieldName: 'ADR|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADR_15: new BaseField('ADR_15', {
    label: 'Adr|15',
    fieldName: 'ADR|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADR_1M: new BaseField('ADR_1M', {
    label: 'Adr|1m',
    fieldName: 'ADR|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADR_1W: new BaseField('ADR_1W', {
    label: 'Adr|1w',
    fieldName: 'ADR|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADR_240: new BaseField('ADR_240', {
    label: 'Adr|240',
    fieldName: 'ADR|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADR_30: new BaseField('ADR_30', {
    label: 'Adr|30',
    fieldName: 'ADR|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADR_5: new BaseField('ADR_5', {
    label: 'Adr|5',
    fieldName: 'ADR|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  ADR_60: new BaseField('ADR_60', {
    label: 'Adr|60',
    fieldName: 'ADR|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  AMOUNT_RECENT: new BaseField('AMOUNT_RECENT', {
    label: 'Amount Recent',
    fieldName: 'amount_recent',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  AMOUNT_UPCOMING: new BaseField('AMOUNT_UPCOMING', {
    label: 'Amount Upcoming',
    fieldName: 'amount_upcoming',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  ASSET_CLASS: new BaseField('ASSET_CLASS', {
    label: 'Asset Class',
    fieldName: 'asset_class',
    format: 'text',
    interval: false,
    historical: false,
  }),

  ASSET_TURNOVER_CURRENT: new BaseField('ASSET_TURNOVER_CURRENT', {
    label: 'Asset Turnover Current',
    fieldName: 'asset_turnover_current',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AUM: new BaseField('AUM', {
    label: 'Aum',
    fieldName: 'aum',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  AVERAGE_DAY_RANGE_14: new BaseField('AVERAGE_DAY_RANGE_14', {
    label: 'Average Day Range (14)',
    fieldName: 'ADR',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AVERAGE_DIRECTIONAL_INDEX_14: new BaseField('AVERAGE_DIRECTIONAL_INDEX_14', {
    label: 'Average Directional Index (14)',
    fieldName: 'ADX',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  AVERAGE_TRUE_RANGE_14: new BaseField('AVERAGE_TRUE_RANGE_14', {
    label: 'Average True Range (14)',
    fieldName: 'ATR',
    format: 'float',
    interval: true,
    historical: false,
  }),

  AVGVALUE_TRADED_10D: new BaseField('AVGVALUE_TRADED_10D', {
    label: 'Avgvalue Traded 10d',
    fieldName: 'AvgValue.Traded_10d',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVGVALUE_TRADED_30D: new BaseField('AVGVALUE_TRADED_30D', {
    label: 'Avgvalue Traded 30d',
    fieldName: 'AvgValue.Traded_30d',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVGVALUE_TRADED_60D: new BaseField('AVGVALUE_TRADED_60D', {
    label: 'Avgvalue Traded 60d',
    fieldName: 'AvgValue.Traded_60d',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AVGVALUE_TRADED_90D: new BaseField('AVGVALUE_TRADED_90D', {
    label: 'Avgvalue Traded 90d',
    fieldName: 'AvgValue.Traded_90d',
    format: 'round',
    interval: false,
    historical: false,
  }),

  AWESOME_OSCILLATOR: new BaseField('AWESOME_OSCILLATOR', {
    label: 'Awesome Oscillator',
    fieldName: 'AO',
    format: 'computed_recommendation',
    interval: true,
    historical: true,
  }),

  BARS_COUNT: new BaseField('BARS_COUNT', {
    label: 'Bars Count',
    fieldName: 'bars_count',
    format: 'round',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_1: new BaseField('BARS_COUNT_1', {
    label: 'Bars Count|1',
    fieldName: 'bars_count|1',
    format: 'round',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_120: new BaseField('BARS_COUNT_120', {
    label: 'Bars Count|120',
    fieldName: 'bars_count|120',
    format: 'round',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_15: new BaseField('BARS_COUNT_15', {
    label: 'Bars Count|15',
    fieldName: 'bars_count|15',
    format: 'round',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_1M: new BaseField('BARS_COUNT_1M', {
    label: 'Bars Count|1m',
    fieldName: 'bars_count|1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_1W: new BaseField('BARS_COUNT_1W', {
    label: 'Bars Count|1w',
    fieldName: 'bars_count|1W',
    format: 'round',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_240: new BaseField('BARS_COUNT_240', {
    label: 'Bars Count|240',
    fieldName: 'bars_count|240',
    format: 'round',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_30: new BaseField('BARS_COUNT_30', {
    label: 'Bars Count|30',
    fieldName: 'bars_count|30',
    format: 'round',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_5: new BaseField('BARS_COUNT_5', {
    label: 'Bars Count|5',
    fieldName: 'bars_count|5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  BARS_COUNT_60: new BaseField('BARS_COUNT_60', {
    label: 'Bars Count|60',
    fieldName: 'bars_count|60',
    format: 'round',
    interval: false,
    historical: false,
  }),

  BASE_CURRENCY_KIND: new BaseField('BASE_CURRENCY_KIND', {
    label: 'Base Currency Kind',
    fieldName: 'base_currency_kind',
    format: 'text',
    interval: false,
    historical: false,
  }),

  BBPOWER_1: new BaseField('BBPOWER_1', {
    label: 'Bbpower|1',
    fieldName: 'BBPower|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BBPOWER_120: new BaseField('BBPOWER_120', {
    label: 'Bbpower|120',
    fieldName: 'BBPower|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BBPOWER_15: new BaseField('BBPOWER_15', {
    label: 'Bbpower|15',
    fieldName: 'BBPower|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BBPOWER_1M: new BaseField('BBPOWER_1M', {
    label: 'Bbpower|1m',
    fieldName: 'BBPower|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BBPOWER_1W: new BaseField('BBPOWER_1W', {
    label: 'Bbpower|1w',
    fieldName: 'BBPower|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BBPOWER_240: new BaseField('BBPOWER_240', {
    label: 'Bbpower|240',
    fieldName: 'BBPower|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BBPOWER_30: new BaseField('BBPOWER_30', {
    label: 'Bbpower|30',
    fieldName: 'BBPower|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BBPOWER_5: new BaseField('BBPOWER_5', {
    label: 'Bbpower|5',
    fieldName: 'BBPower|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BBPOWER_60: new BaseField('BBPOWER_60', {
    label: 'Bbpower|60',
    fieldName: 'BBPower|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  BETA_3_YEAR: new BaseField('BETA_3_YEAR', {
    label: 'Beta 3 Year',
    fieldName: 'beta_3_year',
    format: 'round',
    interval: false,
    historical: false,
  }),

  BETA_5_YEAR: new BaseField('BETA_5_YEAR', {
    label: 'Beta 5 Year',
    fieldName: 'beta_5_year',
    format: 'round',
    interval: false,
    historical: false,
  }),

  BOLLINGER_UPPER_BAND_20: new BaseField('BOLLINGER_UPPER_BAND_20', {
    label: 'Bollinger Upper Band (20)',
    fieldName: 'BB.upper',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  BOOK_TANGIBLE_PER_SHARE_CURRENT: new BaseField('BOOK_TANGIBLE_PER_SHARE_CURRENT', {
    label: 'Book Tangible per Share Current',
    fieldName: 'book_tangible_per_share_current',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  BOOK_TANGIBLE_PER_SHARE_FH: new BaseField('BOOK_TANGIBLE_PER_SHARE_FH', {
    label: 'Book Tangible per Share Fh',
    fieldName: 'book_tangible_per_share_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  BOOK_VALUE_PER_SHARE_CURRENT: new BaseField('BOOK_VALUE_PER_SHARE_CURRENT', {
    label: 'Book Value per Share Current',
    fieldName: 'book_value_per_share_current',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  BOOK_VALUE_PER_SHARE_FH: new BaseField('BOOK_VALUE_PER_SHARE_FH', {
    label: 'Book Value per Share Fh',
    fieldName: 'book_value_per_share_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  BRAND: new BaseField('BRAND', {
    label: 'Brand',
    fieldName: 'brand',
    format: 'text',
    interval: false,
    historical: false,
  }),

  BULL_BEAR_POWER: new BaseField('BULL_BEAR_POWER', {
    label: 'Bull Bear Power',
    fieldName: 'BBPower',
    format: 'recommendation',
    interval: true,
    historical: false,
  }),

  BUYBACK_YIELD: new BaseField('BUYBACK_YIELD', {
    label: 'Buyback Yield %',
    fieldName: 'buyback_yield',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CAPITAL_EXPENDITURES_FH: new BaseField('CAPITAL_EXPENDITURES_FH', {
    label: 'Capital Expenditures Fh',
    fieldName: 'capital_expenditures_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  CAPITAL_EXPENDITURES_YOY_GROWTH_FY: new BaseField('CAPITAL_EXPENDITURES_YOY_GROWTH_FY', {
    label: 'Capital Expenditures Growth % (YoY)',
    fieldName: 'capital_expenditures_yoy_growth_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  CATEGORY: new BaseField('CATEGORY', {
    label: 'Category',
    fieldName: 'category',
    format: 'text',
    interval: false,
    historical: false,
  }),

  COMMODITY_CHANNEL_INDEX_20: new BaseField('COMMODITY_CHANNEL_INDEX_20', {
    label: 'Commodity Channel Index (20)',
    fieldName: 'CCI20',
    format: 'computed_recommendation',
    interval: true,
    historical: true,
  }),

  COUNTRY_CODE_FUND: new BaseField('COUNTRY_CODE_FUND', {
    label: 'Country Code Fund',
    fieldName: 'country_code_fund',
    format: 'text',
    interval: false,
    historical: false,
  }),

  COUPON: new BaseField('COUPON', {
    label: 'Coupon',
    fieldName: 'coupon',
    format: 'round',
    interval: false,
    historical: false,
  }),

  CRYPTOASSET_INFO_DESCRIPTION: new BaseField('CRYPTOASSET_INFO_DESCRIPTION', {
    label: 'Cryptoasset-info Description',
    fieldName: 'cryptoasset-info.description',
    format: 'text',
    interval: false,
    historical: false,
  }),

  CRYPTOASSET_INFO_ID: new BaseField('CRYPTOASSET_INFO_ID', {
    label: 'Cryptoasset-info Id',
    fieldName: 'cryptoasset-info.id',
    format: 'text',
    interval: false,
    historical: false,
  }),

  CURRENCY: new BaseField('CURRENCY', {
    label: 'Currency',
    fieldName: 'currency',
    format: 'text',
    interval: false,
    historical: false,
  }),

  CURRENCY_HEDGED_FLAG: new BaseField('CURRENCY_HEDGED_FLAG', {
    label: 'Currency Hedged Flag',
    fieldName: 'currency_hedged_flag',
    format: 'text',
    interval: false,
    historical: false,
  }),

  CURRENCY_ID: new BaseField('CURRENCY_ID', {
    label: 'Currency Id',
    fieldName: 'currency_id',
    format: 'text',
    interval: false,
    historical: false,
  }),

  CURRENCY_KIND: new BaseField('CURRENCY_KIND', {
    label: 'Currency Kind',
    fieldName: 'currency_kind',
    format: 'text',
    interval: false,
    historical: false,
  }),

  CURRENT_SESSION: new BaseField('CURRENT_SESSION', {
    label: 'Current Session',
    fieldName: 'current_session',
    format: 'text',
    interval: false,
    historical: false,
  }),

  CUSIP: new BaseField('CUSIP', {
    label: 'CUSIP',
    fieldName: 'cusip',
    format: 'text',
    interval: false,
    historical: false,
  }),

  DAYS_TO_MATURITY: new BaseField('DAYS_TO_MATURITY', {
    label: 'Days to Maturity',
    fieldName: 'days_to_maturity',
    format: 'round',
    interval: false,
    historical: false,
  }),

  DPS_COMMON_STOCK_PRIM_ISSUE_FH: new BaseField('DPS_COMMON_STOCK_PRIM_ISSUE_FH', {
    label: 'DPS Common Stock Prim Issue Fh',
    fieldName: 'dps_common_stock_prim_issue_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBITDA_ANNUAL_YOY_GROWTH: new BaseField('EBITDA_ANNUAL_YOY_GROWTH', {
    label: 'EBITDA (Annual YoY Growth)',
    fieldName: 'ebitda_yoy_growth_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EBITDA_FH: new BaseField('EBITDA_FH', {
    label: 'EBITDA Fh',
    fieldName: 'ebitda_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBITDA_PER_SHARE_CURRENT: new BaseField('EBITDA_PER_SHARE_CURRENT', {
    label: 'EBITDA per Share Current',
    fieldName: 'ebitda_per_share_current',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBITDA_PER_SHARE_FH: new BaseField('EBITDA_PER_SHARE_FH', {
    label: 'EBITDA per Share Fh',
    fieldName: 'ebitda_per_share_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBITDA_QUARTERLY_QOQ_GROWTH: new BaseField('EBITDA_QUARTERLY_QOQ_GROWTH', {
    label: 'EBITDA (Quarterly QoQ Growth)',
    fieldName: 'ebitda_qoq_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EBITDA_QUARTERLY_YOY_GROWTH: new BaseField('EBITDA_QUARTERLY_YOY_GROWTH', {
    label: 'EBITDA (Quarterly YoY Growth)',
    fieldName: 'ebitda_yoy_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  EBIT_PER_SHARE_CURRENT: new BaseField('EBIT_PER_SHARE_CURRENT', {
    label: 'EBIT per Share Current',
    fieldName: 'ebit_per_share_current',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  EBIT_PER_SHARE_FH: new BaseField('EBIT_PER_SHARE_FH', {
    label: 'EBIT per Share Fh',
    fieldName: 'ebit_per_share_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  ENTERPRISE_VALUE_CURRENT: new BaseField('ENTERPRISE_VALUE_CURRENT', {
    label: 'Enterprise Value Current',
    fieldName: 'enterprise_value_current',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  ENTERPRISE_VALUE_EBITDA_CURRENT: new BaseField('ENTERPRISE_VALUE_EBITDA_CURRENT', {
    label: 'Enterprise Value EBITDA Current',
    fieldName: 'enterprise_value_ebitda_current',
    format: 'round',
    interval: false,
    historical: false,
  }),

  ETF_FUND_CURRENCY: new BaseField('ETF_FUND_CURRENCY', {
    label: 'Etf Fund Currency',
    fieldName: 'etf_fund_currency',
    format: 'text',
    interval: false,
    historical: false,
  }),

  ETF_HOLDINGS_COUNT: new BaseField('ETF_HOLDINGS_COUNT', {
    label: 'Etf Holdings Count',
    fieldName: 'etf_holdings_count',
    format: 'round',
    interval: false,
    historical: false,
  }),

  FIRST_BAR_TIME: new BaseField('FIRST_BAR_TIME', {
    label: 'First Bar Time',
    fieldName: 'first_bar_time',
    format: 'date',
    interval: false,
    historical: false,
  }),

  FLOAT_SHARES_OUTSTANDING_CURRENT: new BaseField('FLOAT_SHARES_OUTSTANDING_CURRENT', {
    label: 'Float Shares Outstanding Current',
    fieldName: 'float_shares_outstanding_current',
    format: 'round',
    interval: false,
    historical: false,
  }),

  FLOAT_SHARES_PERCENT_CURRENT: new BaseField('FLOAT_SHARES_PERCENT_CURRENT', {
    label: 'Free Float %',
    fieldName: 'float_shares_percent_current',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  FOCUS: new BaseField('FOCUS', {
    label: 'Focus',
    fieldName: 'focus',
    format: 'text',
    interval: false,
    historical: false,
  }),

  FRACTIONAL: new BaseField('FRACTIONAL', {
    label: 'Fractional',
    fieldName: 'fractional',
    format: 'text',
    interval: false,
    historical: false,
  }),

  FREQUENCY_RECENT: new BaseField('FREQUENCY_RECENT', {
    label: 'Frequency Recent',
    fieldName: 'frequency_recent',
    format: 'text',
    interval: false,
    historical: false,
  }),

  FREQUENCY_UPCOMING: new BaseField('FREQUENCY_UPCOMING', {
    label: 'Frequency Upcoming',
    fieldName: 'frequency_upcoming',
    format: 'text',
    interval: false,
    historical: false,
  }),

  FUNDAMENTAL_CURRENCY_CODE: new BaseField('FUNDAMENTAL_CURRENCY_CODE', {
    label: 'Fundamental Currency Code',
    fieldName: 'fundamental_currency_code',
    format: 'text',
    interval: false,
    historical: false,
  }),

  GOODWILL: new BaseField('GOODWILL', {
    label: 'Goodwill',
    fieldName: 'goodwill',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GROSS_PROFIT_ANNUAL_YOY_GROWTH: new BaseField('GROSS_PROFIT_ANNUAL_YOY_GROWTH', {
    label: 'Gross Profit (Annual YoY Growth)',
    fieldName: 'gross_profit_yoy_growth_fy',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GROSS_PROFIT_FH: new BaseField('GROSS_PROFIT_FH', {
    label: 'Gross Profit Fh',
    fieldName: 'gross_profit_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  GROSS_PROFIT_QUARTERLY_QOQ_GROWTH: new BaseField('GROSS_PROFIT_QUARTERLY_QOQ_GROWTH', {
    label: 'Gross Profit (Quarterly QoQ Growth)',
    fieldName: 'gross_profit_qoq_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  GROSS_PROFIT_QUARTERLY_YOY_GROWTH: new BaseField('GROSS_PROFIT_QUARTERLY_YOY_GROWTH', {
    label: 'Gross Profit (Quarterly YoY Growth)',
    fieldName: 'gross_profit_yoy_growth_fq',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  HAS_IPO_DATA: new BaseField('HAS_IPO_DATA', {
    label: 'Has IPO Data',
    fieldName: 'has_ipo_data',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  HAS_IPO_DETAILS_VISIBLE: new BaseField('HAS_IPO_DETAILS_VISIBLE', {
    label: 'Has IPO Details Visible',
    fieldName: 'has_ipo_details_visible',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  HOLDINGS_REGION: new BaseField('HOLDINGS_REGION', {
    label: 'Holdings Region',
    fieldName: 'holdings_region',
    format: 'text',
    interval: false,
    historical: false,
  }),

  HOLDS_DERIVATIVES_FLAG: new BaseField('HOLDS_DERIVATIVES_FLAG', {
    label: 'Holds Derivatives Flag',
    fieldName: 'holds_derivatives_flag',
    format: 'text',
    interval: false,
    historical: false,
  }),

  INDEXES: new BaseField('INDEXES', {
    label: 'Index Membership',
    fieldName: 'indexes',
    format: 'text',
    interval: false,
    historical: false,
  }),

  INDEX_PRIORITY: new BaseField('INDEX_PRIORITY', {
    label: 'Index Priority',
    fieldName: 'index_priority',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INDEX_PROVIDER: new BaseField('INDEX_PROVIDER', {
    label: 'Index Provider',
    fieldName: 'index_provider',
    format: 'text',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT: new BaseField('INDICATORS_BARS_COUNT', {
    label: 'Indicators Bars Count',
    fieldName: 'indicators_bars_count',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_1: new BaseField('INDICATORS_BARS_COUNT_1', {
    label: 'Indicators Bars Count|1',
    fieldName: 'indicators_bars_count|1',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_120: new BaseField('INDICATORS_BARS_COUNT_120', {
    label: 'Indicators Bars Count|120',
    fieldName: 'indicators_bars_count|120',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_15: new BaseField('INDICATORS_BARS_COUNT_15', {
    label: 'Indicators Bars Count|15',
    fieldName: 'indicators_bars_count|15',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_1M: new BaseField('INDICATORS_BARS_COUNT_1M', {
    label: 'Indicators Bars Count|1m',
    fieldName: 'indicators_bars_count|1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_1W: new BaseField('INDICATORS_BARS_COUNT_1W', {
    label: 'Indicators Bars Count|1w',
    fieldName: 'indicators_bars_count|1W',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_240: new BaseField('INDICATORS_BARS_COUNT_240', {
    label: 'Indicators Bars Count|240',
    fieldName: 'indicators_bars_count|240',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_30: new BaseField('INDICATORS_BARS_COUNT_30', {
    label: 'Indicators Bars Count|30',
    fieldName: 'indicators_bars_count|30',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_5: new BaseField('INDICATORS_BARS_COUNT_5', {
    label: 'Indicators Bars Count|5',
    fieldName: 'indicators_bars_count|5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INDICATORS_BARS_COUNT_60: new BaseField('INDICATORS_BARS_COUNT_60', {
    label: 'Indicators Bars Count|60',
    fieldName: 'indicators_bars_count|60',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INVENT_TURNOVER_CURRENT: new BaseField('INVENT_TURNOVER_CURRENT', {
    label: 'Inventory Turnover (Current)',
    fieldName: 'invent_turnover_current',
    format: 'round',
    interval: false,
    historical: false,
  }),

  INVERSE_FLAG: new BaseField('INVERSE_FLAG', {
    label: 'Inverse Flag',
    fieldName: 'inverse_flag',
    format: 'round',
    interval: false,
    historical: false,
  }),

  IPO_ANNOUNCEMENT_DATE: new BaseField('IPO_ANNOUNCEMENT_DATE', {
    label: 'IPO Announcement Date',
    fieldName: 'ipo_announcement_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  IPO_BLANK_CHECK_FLAG: new BaseField('IPO_BLANK_CHECK_FLAG', {
    label: 'IPO Blank Check Flag',
    fieldName: 'ipo_blank_check_flag',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  IPO_DEAL_AMOUNT_USD: new BaseField('IPO_DEAL_AMOUNT_USD', {
    label: 'IPO Deal Amount Usd',
    fieldName: 'ipo_deal_amount_usd',
    format: 'round',
    interval: false,
    historical: false,
  }),

  IPO_OFFERED_SHARES: new BaseField('IPO_OFFERED_SHARES', {
    label: 'IPO Offered Shares',
    fieldName: 'ipo_offered_shares',
    format: 'round',
    interval: false,
    historical: false,
  }),

  IPO_OFFERED_SHARES_PRIMARY: new BaseField('IPO_OFFERED_SHARES_PRIMARY', {
    label: 'IPO Offered Shares Primary',
    fieldName: 'ipo_offered_shares_primary',
    format: 'round',
    interval: false,
    historical: false,
  }),

  IPO_OFFERED_SHARES_SECONDARY: new BaseField('IPO_OFFERED_SHARES_SECONDARY', {
    label: 'IPO Offered Shares Secondary',
    fieldName: 'ipo_offered_shares_secondary',
    format: 'round',
    interval: false,
    historical: false,
  }),

  IPO_OFFER_DATE: new BaseField('IPO_OFFER_DATE', {
    label: 'IPO Offer Date',
    fieldName: 'ipo_offer_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  IPO_OFFER_TIME: new BaseField('IPO_OFFER_TIME', {
    label: 'IPO Offer Time',
    fieldName: 'ipo_offer_time',
    format: 'date',
    interval: false,
    historical: false,
  }),

  IPO_SHARES_OUTSTANDING: new BaseField('IPO_SHARES_OUTSTANDING', {
    label: 'IPO Shares Outstanding',
    fieldName: 'ipo_shares_outstanding',
    format: 'round',
    interval: false,
    historical: false,
  }),

  ISIN: new BaseField('ISIN', {
    label: 'ISIN',
    fieldName: 'isin',
    format: 'text',
    interval: false,
    historical: false,
  }),

  ISSUER: new BaseField('ISSUER', {
    label: 'Issuer',
    fieldName: 'issuer',
    format: 'text',
    interval: false,
    historical: false,
  }),

  IS_BLACKLISTED: new BaseField('IS_BLACKLISTED', {
    label: 'Is Blacklisted',
    fieldName: 'is_blacklisted',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  IS_PRIMARY: new BaseField('IS_PRIMARY', {
    label: 'Is Primary',
    fieldName: 'is_primary',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  IS_SHARIAH_COMPLIANT: new BaseField('IS_SHARIAH_COMPLIANT', {
    label: 'Is Shariah Compliant',
    fieldName: 'is_shariah_compliant',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  IS_SYMBOL_PRIMARY_LISTING: new BaseField('IS_SYMBOL_PRIMARY_LISTING', {
    label: 'Is Symbol Primary Listing',
    fieldName: 'is_symbol_primary_listing',
    format: 'bool',
    interval: false,
    historical: false,
  }),

  K1_FORM: new BaseField('K1_FORM', {
    label: 'K1 Form',
    fieldName: 'k1_form',
    format: 'text',
    interval: false,
    historical: false,
  }),

  KELTNER_CHANNELS_UPPER_BAND_20: new BaseField('KELTNER_CHANNELS_UPPER_BAND_20', {
    label: 'Keltner Channels Upper Band (20)',
    fieldName: 'KltChnl.upper',
    format: 'float',
    interval: true,
    historical: false,
  }),

  KIND: new BaseField('KIND', {
    label: 'Kind',
    fieldName: 'kind',
    format: 'text',
    interval: false,
    historical: false,
  }),

  KIND_DELAY: new BaseField('KIND_DELAY', {
    label: 'Kind-delay',
    fieldName: 'kind-delay',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME: new BaseField('LAST_BAR_UPDATE_TIME', {
    label: 'Last Bar Update Time',
    fieldName: 'last_bar_update_time',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_1: new BaseField('LAST_BAR_UPDATE_TIME_1', {
    label: 'Last Bar Update Time|1',
    fieldName: 'last_bar_update_time|1',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_120: new BaseField('LAST_BAR_UPDATE_TIME_120', {
    label: 'Last Bar Update Time|120',
    fieldName: 'last_bar_update_time|120',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_15: new BaseField('LAST_BAR_UPDATE_TIME_15', {
    label: 'Last Bar Update Time|15',
    fieldName: 'last_bar_update_time|15',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_1M: new BaseField('LAST_BAR_UPDATE_TIME_1M', {
    label: 'Last Bar Update Time|1m',
    fieldName: 'last_bar_update_time|1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_1W: new BaseField('LAST_BAR_UPDATE_TIME_1W', {
    label: 'Last Bar Update Time|1w',
    fieldName: 'last_bar_update_time|1W',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_240: new BaseField('LAST_BAR_UPDATE_TIME_240', {
    label: 'Last Bar Update Time|240',
    fieldName: 'last_bar_update_time|240',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_30: new BaseField('LAST_BAR_UPDATE_TIME_30', {
    label: 'Last Bar Update Time|30',
    fieldName: 'last_bar_update_time|30',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_5: new BaseField('LAST_BAR_UPDATE_TIME_5', {
    label: 'Last Bar Update Time|5',
    fieldName: 'last_bar_update_time|5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LAST_BAR_UPDATE_TIME_60: new BaseField('LAST_BAR_UPDATE_TIME_60', {
    label: 'Last Bar Update Time|60',
    fieldName: 'last_bar_update_time|60',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LAST_REPORT_FREQUENCY: new BaseField('LAST_REPORT_FREQUENCY', {
    label: 'Last Report Frequency',
    fieldName: 'last_report_frequency',
    format: 'round',
    interval: false,
    historical: false,
  }),

  LAUNCH_DATE: new BaseField('LAUNCH_DATE', {
    label: 'Launch Date',
    fieldName: 'launch_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  LEVERAGE: new BaseField('LEVERAGE', {
    label: 'Leverage',
    fieldName: 'leverage',
    format: 'text',
    interval: false,
    historical: false,
  }),

  LEVERAGED_FLAG: new BaseField('LEVERAGED_FLAG', {
    label: 'Leveraged Flag',
    fieldName: 'leveraged_flag',
    format: 'text',
    interval: false,
    historical: false,
  }),

  LOGOID: new BaseField('LOGOID', {
    label: 'Logoid',
    fieldName: 'logoid',
    format: 'text',
    interval: false,
    historical: false,
  }),

  LONG_TERM_CAPITAL: new BaseField('LONG_TERM_CAPITAL', {
    label: 'Long Term Capital',
    fieldName: 'long_term_capital',
    format: 'round',
    interval: false,
    historical: false,
  }),

  MARKET: new BaseField('MARKET', {
    label: 'Market',
    fieldName: 'market',
    format: 'text',
    interval: false,
    historical: false,
  }),

  MATURITY_DATE: new BaseField('MATURITY_DATE', {
    label: 'Maturity Date',
    fieldName: 'maturity_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  MINMOV: new BaseField('MINMOV', {
    label: 'Minmov',
    fieldName: 'minmov',
    format: 'round',
    interval: false,
    historical: false,
  }),

  MINMOVE2: new BaseField('MINMOVE2', {
    label: 'Minmove2',
    fieldName: 'minmove2',
    format: 'round',
    interval: false,
    historical: false,
  }),

  MOST_RECENT_QUARTER_DATE: new BaseField('MOST_RECENT_QUARTER_DATE', {
    label: 'Most Recent Quarter Date',
    fieldName: 'most_recent_quarter_date',
    format: 'date',
    interval: false,
    historical: false,
  }),

  NAV: new BaseField('NAV', {
    label: 'Nav',
    fieldName: 'nav',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NAV_DISCOUNT_PREMIUM: new BaseField('NAV_DISCOUNT_PREMIUM', {
    label: 'Nav Discount Premium',
    fieldName: 'nav_discount_premium',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_1M: new BaseField('NAV_TOTAL_RETURN_1M', {
    label: 'Nav Total Return 1m',
    fieldName: 'nav_total_return.1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_1Y: new BaseField('NAV_TOTAL_RETURN_1Y', {
    label: 'Nav Total Return 1y',
    fieldName: 'nav_total_return.1Y',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_3M: new BaseField('NAV_TOTAL_RETURN_3M', {
    label: 'Nav Total Return 3m',
    fieldName: 'nav_total_return.3M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_3Y: new BaseField('NAV_TOTAL_RETURN_3Y', {
    label: 'Nav Total Return 3y',
    fieldName: 'nav_total_return.3Y',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_5Y: new BaseField('NAV_TOTAL_RETURN_5Y', {
    label: 'Nav Total Return 5y',
    fieldName: 'nav_total_return.5Y',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_6M: new BaseField('NAV_TOTAL_RETURN_6M', {
    label: 'Nav Total Return 6m',
    fieldName: 'nav_total_return.6M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NAV_TOTAL_RETURN_YTD: new BaseField('NAV_TOTAL_RETURN_YTD', {
    label: 'Nav Total Return Ytd',
    fieldName: 'nav_total_return.YTD',
    format: 'round',
    interval: false,
    historical: false,
  }),

  NEGATIVE_DIRECTIONAL_INDICATOR_14: new BaseField('NEGATIVE_DIRECTIONAL_INDICATOR_14', {
    label: 'Negative Directional Indicator (14)',
    fieldName: 'ADX-DI',
    format: 'round',
    interval: true,
    historical: true,
  }),

  NEG_CAPITAL_EXPENDITURES_FH: new BaseField('NEG_CAPITAL_EXPENDITURES_FH', {
    label: 'Neg Capital Expenditures Fh',
    fieldName: 'neg_capital_expenditures_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NEG_RESEARCH_AND_DEV_FH: new BaseField('NEG_RESEARCH_AND_DEV_FH', {
    label: 'Neg Research and Dev Fh',
    fieldName: 'neg_research_and_dev_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  NICHE: new BaseField('NICHE', {
    label: 'Niche',
    fieldName: 'niche',
    format: 'text',
    interval: false,
    historical: false,
  }),

  NUMBER_OF_EMPLOYEES: new BaseField('NUMBER_OF_EMPLOYEES', {
    label: 'Number of Employees',
    fieldName: 'number_of_employees',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  NUMBER_OF_SHAREHOLDERS: new BaseField('NUMBER_OF_SHAREHOLDERS', {
    label: 'Number of Shareholders',
    fieldName: 'number_of_shareholders',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  OPER_INCOME_FH: new BaseField('OPER_INCOME_FH', {
    label: 'Oper Income Fh',
    fieldName: 'oper_income_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  OSCILLATORS_RATING: new BaseField('OSCILLATORS_RATING', {
    label: 'Oscillators Rating',
    fieldName: 'Recommend.Other',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  PARABOLIC_SAR: new BaseField('PARABOLIC_SAR', {
    label: 'Parabolic SAR',
    fieldName: 'P.SAR',
    format: 'computed_recommendation',
    interval: true,
    historical: false,
  }),

  PATTERN: new BaseField('PATTERN', {
    label: 'Pattern',
    fieldName: 'candlestick',
    format: 'missing',
    interval: true,
    historical: false,
  }),

  PAYMENT_DATE_RECENT: new BaseField('PAYMENT_DATE_RECENT', {
    label: 'Payment Date Recent',
    fieldName: 'payment_date_recent',
    format: 'date',
    interval: false,
    historical: false,
  }),

  PAYMENT_DATE_UPCOMING: new BaseField('PAYMENT_DATE_UPCOMING', {
    label: 'Payment Date Upcoming',
    fieldName: 'payment_date_upcoming',
    format: 'date',
    interval: false,
    historical: false,
  }),

  POSITIVE_DIRECTIONAL_INDICATOR_14: new BaseField('POSITIVE_DIRECTIONAL_INDICATOR_14', {
    label: 'Positive Directional Indicator (14)',
    fieldName: 'ADX+DI',
    format: 'round',
    interval: true,
    historical: true,
  }),

  POSTMARKET_TIME: new BaseField('POSTMARKET_TIME', {
    label: 'Postmarket Time',
    fieldName: 'postmarket_time',
    format: 'date',
    interval: false,
    historical: false,
  }),

  PROVIDER_ID: new BaseField('PROVIDER_ID', {
    label: 'Provider-id',
    fieldName: 'provider-id',
    format: 'text',
    interval: false,
    historical: false,
  }),

  P_SAR_1: new BaseField('P_SAR_1', {
    label: 'P Sar|1',
    fieldName: 'P.SAR|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  P_SAR_120: new BaseField('P_SAR_120', {
    label: 'P Sar|120',
    fieldName: 'P.SAR|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  P_SAR_15: new BaseField('P_SAR_15', {
    label: 'P Sar|15',
    fieldName: 'P.SAR|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  P_SAR_1M: new BaseField('P_SAR_1M', {
    label: 'P Sar|1m',
    fieldName: 'P.SAR|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  P_SAR_1W: new BaseField('P_SAR_1W', {
    label: 'P Sar|1w',
    fieldName: 'P.SAR|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  P_SAR_240: new BaseField('P_SAR_240', {
    label: 'P Sar|240',
    fieldName: 'P.SAR|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  P_SAR_30: new BaseField('P_SAR_30', {
    label: 'P Sar|30',
    fieldName: 'P.SAR|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  P_SAR_5: new BaseField('P_SAR_5', {
    label: 'P Sar|5',
    fieldName: 'P.SAR|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  P_SAR_60: new BaseField('P_SAR_60', {
    label: 'P Sar|60',
    fieldName: 'P.SAR|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  RATES_CF: new BaseField('RATES_CF', {
    label: 'Rates Cf',
    fieldName: 'rates_cf',
    format: 'text',
    interval: false,
    historical: false,
  }),

  RATES_CURRENT: new BaseField('RATES_CURRENT', {
    label: 'Rates Current',
    fieldName: 'rates_current',
    format: 'text',
    interval: false,
    historical: false,
  }),

  RATES_FH: new BaseField('RATES_FH', {
    label: 'Rates Fh',
    fieldName: 'rates_fh',
    format: 'text',
    interval: false,
    historical: false,
  }),

  RATES_MC: new BaseField('RATES_MC', {
    label: 'Rates Mc',
    fieldName: 'rates_mc',
    format: 'text',
    interval: false,
    historical: false,
  }),

  RATES_PT: new BaseField('RATES_PT', {
    label: 'Rates Pt',
    fieldName: 'rates_pt',
    format: 'text',
    interval: false,
    historical: false,
  }),

  RATES_TIME_SERIES: new BaseField('RATES_TIME_SERIES', {
    label: 'Rates Time Series',
    fieldName: 'rates_time_series',
    format: 'text',
    interval: false,
    historical: false,
  }),

  RELATIVE_STRENGTH_INDEX_14: new BaseField('RELATIVE_STRENGTH_INDEX_14', {
    label: 'Relative Strength Index (14)',
    fieldName: 'RSI',
    format: 'computed_recommendation',
    interval: true,
    historical: true,
  }),

  RELATIVE_STRENGTH_INDEX_7: new BaseField('RELATIVE_STRENGTH_INDEX_7', {
    label: 'Relative Strength Index (7)',
    fieldName: 'RSI7',
    format: 'computed_recommendation',
    interval: true,
    historical: true,
  }),

  RESEARCH_AND_DEV_FH: new BaseField('RESEARCH_AND_DEV_FH', {
    label: 'Research and Dev Fh',
    fieldName: 'research_and_dev_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  RTC: new BaseField('RTC', {
    label: 'Rtc',
    fieldName: 'rtc',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  SELECTION_CRITERIA: new BaseField('SELECTION_CRITERIA', {
    label: 'Selection Criteria',
    fieldName: 'selection_criteria',
    format: 'text',
    interval: false,
    historical: false,
  }),

  SHARES_FLOAT: new BaseField('SHARES_FLOAT', {
    label: 'Shares Float',
    fieldName: 'float_shares_outstanding',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  SHARES_OUTSTANDING: new BaseField('SHARES_OUTSTANDING', {
    label: 'Shares Outstanding',
    fieldName: 'shares_outstanding',
    format: 'round',
    interval: false,
    historical: false,
  }),

  SOURCE_LOGOID: new BaseField('SOURCE_LOGOID', {
    label: 'Source-logoid',
    fieldName: 'source-logoid',
    format: 'text',
    interval: false,
    historical: false,
  }),

  STRATEGY: new BaseField('STRATEGY', {
    label: 'Strategy',
    fieldName: 'strategy',
    format: 'text',
    interval: false,
    historical: false,
  }),

  SUBMARKET: new BaseField('SUBMARKET', {
    label: 'Submarket',
    fieldName: 'submarket',
    format: 'missing',
    interval: false,
    historical: false,
  }),

  SUM_FOR_ENTERPRISE_VALUE: new BaseField('SUM_FOR_ENTERPRISE_VALUE', {
    label: 'Sum For Enterprise Value',
    fieldName: 'sum_for_enterprise_value',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  TECHNICAL_RATING: new BaseField('TECHNICAL_RATING', {
    label: 'Technical Rating',
    fieldName: 'Recommend.All',
    format: 'rating',
    interval: true,
    historical: false,
  }),

  TIME: new BaseField('TIME', {
    label: 'Time',
    fieldName: 'time',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_1: new BaseField('TIME_1', {
    label: 'Time|1',
    fieldName: 'time|1',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_120: new BaseField('TIME_120', {
    label: 'Time|120',
    fieldName: 'time|120',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_15: new BaseField('TIME_15', {
    label: 'Time|15',
    fieldName: 'time|15',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_1M: new BaseField('TIME_1M', {
    label: 'Time|1m',
    fieldName: 'time|1M',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_1W: new BaseField('TIME_1W', {
    label: 'Time|1w',
    fieldName: 'time|1W',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_240: new BaseField('TIME_240', {
    label: 'Time|240',
    fieldName: 'time|240',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_30: new BaseField('TIME_30', {
    label: 'Time|30',
    fieldName: 'time|30',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_5: new BaseField('TIME_5', {
    label: 'Time|5',
    fieldName: 'time|5',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_60: new BaseField('TIME_60', {
    label: 'Time|60',
    fieldName: 'time|60',
    format: 'date',
    interval: false,
    historical: false,
  }),

  TIME_BUSINESS_DAY: new BaseField('TIME_BUSINESS_DAY', {
    label: 'Time Business Day',
    fieldName: 'time_business_day',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_CAPITAL: new BaseField('TOTAL_CAPITAL', {
    label: 'Total Capital',
    fieldName: 'total_capital',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_SHARES_OUTSTANDING: new BaseField('TOTAL_SHARES_OUTSTANDING', {
    label: 'Total Shares Outstanding',
    fieldName: 'total_shares_outstanding_fundamental',
    format: 'number_group',
    interval: false,
    historical: false,
  }),

  TOTAL_SHARES_OUTSTANDING_CALCULATED: new BaseField('TOTAL_SHARES_OUTSTANDING_CALCULATED', {
    label: 'Total Shares Outstanding Calculated',
    fieldName: 'total_shares_outstanding_calculated',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_SHARES_OUTSTANDING_CURRENT: new BaseField('TOTAL_SHARES_OUTSTANDING_CURRENT', {
    label: 'Total Shares Outstanding Current',
    fieldName: 'total_shares_outstanding_current',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TOTAL_SHARES_OUTSTANDING_RAW: new BaseField('TOTAL_SHARES_OUTSTANDING_RAW', {
    label: 'Total Shares Outstanding (Raw)',
    fieldName: 'total_shares_outstanding',
    format: 'round',
    interval: false,
    historical: false,
  }),

  TRANSPARENT_HOLDING_FLAG: new BaseField('TRANSPARENT_HOLDING_FLAG', {
    label: 'Transparent Holding Flag',
    fieldName: 'transparent_holding_flag',
    format: 'text',
    interval: false,
    historical: false,
  }),

  TYPESPECS: new BaseField('TYPESPECS', {
    label: 'Typespecs',
    fieldName: 'typespecs',
    format: 'text',
    interval: false,
    historical: false,
  }),

  UCITS_COMPLIANT_FLAG: new BaseField('UCITS_COMPLIANT_FLAG', {
    label: 'Ucits Compliant Flag',
    fieldName: 'ucits_compliant_flag',
    format: 'text',
    interval: false,
    historical: false,
  }),

  ULTIMATE_OSCILLATOR_7_14_28: new BaseField('ULTIMATE_OSCILLATOR_7_14_28', {
    label: 'Ultimate Oscillator (7, 14, 28)',
    fieldName: 'UO',
    format: 'recommendation',
    interval: true,
    historical: false,
  }),

  UPDATE_MODE: new BaseField('UPDATE_MODE', {
    label: 'Update Mode',
    fieldName: 'update_mode',
    format: 'text',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_1: new BaseField('UPDATE_MODE_1', {
    label: 'Update Mode|1',
    fieldName: 'update_mode|1',
    format: 'text',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_120: new BaseField('UPDATE_MODE_120', {
    label: 'Update Mode|120',
    fieldName: 'update_mode|120',
    format: 'text',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_15: new BaseField('UPDATE_MODE_15', {
    label: 'Update Mode|15',
    fieldName: 'update_mode|15',
    format: 'text',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_1M: new BaseField('UPDATE_MODE_1M', {
    label: 'Update Mode|1m',
    fieldName: 'update_mode|1M',
    format: 'text',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_1W: new BaseField('UPDATE_MODE_1W', {
    label: 'Update Mode|1w',
    fieldName: 'update_mode|1W',
    format: 'text',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_240: new BaseField('UPDATE_MODE_240', {
    label: 'Update Mode|240',
    fieldName: 'update_mode|240',
    format: 'text',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_30: new BaseField('UPDATE_MODE_30', {
    label: 'Update Mode|30',
    fieldName: 'update_mode|30',
    format: 'text',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_5: new BaseField('UPDATE_MODE_5', {
    label: 'Update Mode|5',
    fieldName: 'update_mode|5',
    format: 'text',
    interval: false,
    historical: false,
  }),

  UPDATE_MODE_60: new BaseField('UPDATE_MODE_60', {
    label: 'Update Mode|60',
    fieldName: 'update_mode|60',
    format: 'text',
    interval: false,
    historical: false,
  }),

  UPDATE_TIME: new BaseField('UPDATE_TIME', {
    label: 'Update-time',
    fieldName: 'update-time',
    format: 'round',
    interval: false,
    historical: false,
  }),

  UPDATE_TIME_2: new BaseField('UPDATE_TIME_2', {
    label: 'Update Time',
    fieldName: 'update_time',
    format: 'date',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_1: new BaseField('VALUE_TRADED_1', {
    label: 'Value Traded|1',
    fieldName: 'Value.Traded|1',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_120: new BaseField('VALUE_TRADED_120', {
    label: 'Value Traded|120',
    fieldName: 'Value.Traded|120',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_15: new BaseField('VALUE_TRADED_15', {
    label: 'Value Traded|15',
    fieldName: 'Value.Traded|15',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_1M: new BaseField('VALUE_TRADED_1M', {
    label: 'Value Traded|1m',
    fieldName: 'Value.Traded|1M',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_1W: new BaseField('VALUE_TRADED_1W', {
    label: 'Value Traded|1w',
    fieldName: 'Value.Traded|1W',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_240: new BaseField('VALUE_TRADED_240', {
    label: 'Value Traded|240',
    fieldName: 'Value.Traded|240',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_30: new BaseField('VALUE_TRADED_30', {
    label: 'Value Traded|30',
    fieldName: 'Value.Traded|30',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_5: new BaseField('VALUE_TRADED_5', {
    label: 'Value Traded|5',
    fieldName: 'Value.Traded|5',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VALUE_TRADED_60: new BaseField('VALUE_TRADED_60', {
    label: 'Value Traded|60',
    fieldName: 'Value.Traded|60',
    format: 'round',
    interval: false,
    historical: false,
  }),

  VOLATILITY: new BaseField('VOLATILITY', {
    label: 'Volatility',
    fieldName: 'Volatility.D',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLATILITY_MONTH: new BaseField('VOLATILITY_MONTH', {
    label: 'Volatility Month',
    fieldName: 'Volatility.M',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLATILITY_WEEK: new BaseField('VOLATILITY_WEEK', {
    label: 'Volatility Week',
    fieldName: 'Volatility.W',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  WEIGHTING_SCHEME: new BaseField('WEIGHTING_SCHEME', {
    label: 'Weighting Scheme',
    fieldName: 'weighting_scheme',
    format: 'text',
    interval: false,
    historical: false,
  }),

  WEIGHT_TOP_10: new BaseField('WEIGHT_TOP_10', {
    label: 'Weight Top 10',
    fieldName: 'weight_top_10',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  WEIGHT_TOP_25: new BaseField('WEIGHT_TOP_25', {
    label: 'Weight Top 25',
    fieldName: 'weight_top_25',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  WEIGHT_TOP_50: new BaseField('WEIGHT_TOP_50', {
    label: 'Weight Top 50',
    fieldName: 'weight_top_50',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  WORKING_CAPITAL_PER_SHARE_CURRENT: new BaseField('WORKING_CAPITAL_PER_SHARE_CURRENT', {
    label: 'Working Capital per Share Current',
    fieldName: 'working_capital_per_share_current',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  WORKING_CAPITAL_PER_SHARE_FH: new BaseField('WORKING_CAPITAL_PER_SHARE_FH', {
    label: 'Working Capital per Share Fh',
    fieldName: 'working_capital_per_share_fh',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  W_R_1: new BaseField('W_R_1', {
    label: 'W R|1',
    fieldName: 'W.R|1',
    format: 'round',
    interval: true,
    historical: false,
  }),

  W_R_120: new BaseField('W_R_120', {
    label: 'W R|120',
    fieldName: 'W.R|120',
    format: 'round',
    interval: true,
    historical: false,
  }),

  W_R_15: new BaseField('W_R_15', {
    label: 'W R|15',
    fieldName: 'W.R|15',
    format: 'round',
    interval: true,
    historical: false,
  }),

  W_R_1M: new BaseField('W_R_1M', {
    label: 'W R|1m',
    fieldName: 'W.R|1M',
    format: 'round',
    interval: true,
    historical: false,
  }),

  W_R_1W: new BaseField('W_R_1W', {
    label: 'W R|1w',
    fieldName: 'W.R|1W',
    format: 'round',
    interval: true,
    historical: false,
  }),

  W_R_240: new BaseField('W_R_240', {
    label: 'W R|240',
    fieldName: 'W.R|240',
    format: 'round',
    interval: true,
    historical: false,
  }),

  W_R_30: new BaseField('W_R_30', {
    label: 'W R|30',
    fieldName: 'W.R|30',
    format: 'round',
    interval: true,
    historical: false,
  }),

  W_R_5: new BaseField('W_R_5', {
    label: 'W R|5',
    fieldName: 'W.R|5',
    format: 'round',
    interval: true,
    historical: false,
  }),

  W_R_60: new BaseField('W_R_60', {
    label: 'W R|60',
    fieldName: 'W.R|60',
    format: 'round',
    interval: true,
    historical: false,
  }),

  YEAR_BETA_1: new BaseField('YEAR_BETA_1', {
    label: '1-Year Beta',
    fieldName: 'beta_1_year',
    format: 'round',
    interval: false,
    historical: false,
  }),

  YIELD_RECENT: new BaseField('YIELD_RECENT', {
    label: 'Yield Recent',
    fieldName: 'yield_recent',
    format: 'round',
    interval: false,
    historical: false,
  }),

  YIELD_UPCOMING: new BaseField('YIELD_UPCOMING', {
    label: 'Yield Upcoming',
    fieldName: 'yield_upcoming',
    format: 'round',
    interval: false,
    historical: false,
  }),

} as const;

export type StockFieldValue = typeof StockField[keyof typeof StockField];