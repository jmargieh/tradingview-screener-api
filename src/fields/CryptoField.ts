import { BaseField } from './BaseField.js';

/**
 * Crypto field definitions
 * NOTE: This file should be generated from field data.
 */

export const CryptoField = {
  NAME: new BaseField('NAME', {
    label: 'Name',
    fieldName: 'name',
    format: 'text',
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

  CHANGE_PERCENT: new BaseField('CHANGE_PERCENT', {
    label: 'Change %',
    fieldName: 'change',
    format: 'percent',
    interval: false,
    historical: false,
  }),

  VOLUME_24H_IN_USD: new BaseField('VOLUME_24H_IN_USD', {
    label: '24h Volume (USD)',
    fieldName: 'Value.Traded',
    format: 'currency',
    interval: false,
    historical: false,
  }),

  MARKET_CAP: new BaseField('MARKET_CAP', {
    label: 'Market Cap',
    fieldName: 'market_cap_calc',
    format: 'currency',
    interval: false,
    historical: false,
  }),
} as const;

export type CryptoFieldValue = typeof CryptoField[keyof typeof CryptoField];
