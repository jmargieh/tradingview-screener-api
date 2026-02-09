import { BaseField } from './BaseField.js';

export const ForexField = {
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
    format: 'float',
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
} as const;

export type ForexFieldValue = typeof ForexField[keyof typeof ForexField];
