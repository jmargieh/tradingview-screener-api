import { BaseField } from './BaseField.js';

export const FuturesField = {
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
} as const;

export type FuturesFieldValue = typeof FuturesField[keyof typeof FuturesField];
