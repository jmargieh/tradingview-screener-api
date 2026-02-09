import { BaseScreener } from './BaseScreener.js';
import { ForexField } from '../fields/ForexField.js';
import { BaseField } from '../fields/BaseField.js';

export class ForexScreener extends BaseScreener {
  protected fieldType = BaseField;
  protected url = 'https://scanner.tradingview.com/forex/scan';
  protected defaultFields: BaseField[] = [
    ForexField.NAME,
    ForexField.PRICE,
    ForexField.CHANGE_PERCENT,
  ];

  constructor() {
    super();
    this.sortBy(ForexField.NAME, true);
  }

  override selectAll(): this {
    this.specificFields = Object.values(ForexField);
    return this;
  }
}
