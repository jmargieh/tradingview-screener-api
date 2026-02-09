import { BaseScreener } from './BaseScreener.js';
import { CryptoField } from '../fields/CryptoField.js';
import { BaseField } from '../fields/BaseField.js';

/**
 * Crypto screener for querying cryptocurrency data
 */
export class CryptoScreener extends BaseScreener {
  protected fieldType = BaseField;
  protected url = 'https://scanner.tradingview.com/crypto/scan';

  protected defaultFields: BaseField[] = [
    CryptoField.NAME,
    CryptoField.PRICE,
    CryptoField.CHANGE_PERCENT,
    CryptoField.VOLUME_24H_IN_USD,
    CryptoField.MARKET_CAP,
  ];

  constructor() {
    super();
    this.sortBy(CryptoField.VOLUME_24H_IN_USD, false);
  }

  override selectAll(): this {
    this.specificFields = Object.values(CryptoField);
    return this;
  }
}
