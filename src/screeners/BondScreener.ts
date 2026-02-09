import { BaseScreener } from './BaseScreener.js';
import { BondField } from '../fields/BondField.js';
import { BaseField } from '../fields/BaseField.js';

export class BondScreener extends BaseScreener {
  protected fieldType = BaseField;
  protected url = 'https://scanner.tradingview.com/bond/scan';
  protected defaultFields: BaseField[] = [
    BondField.NAME,
    BondField.PRICE,
  ];

  override selectAll(): this {
    this.specificFields = Object.values(BondField);
    return this;
  }
}
