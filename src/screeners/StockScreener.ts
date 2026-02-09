import { BaseScreener } from './BaseScreener.js';
import { StockField } from '../fields/StockField.js';
import { BaseField } from '../fields/BaseField.js';

/**
 * Stock screener for querying stock market data
 */
export class StockScreener extends BaseScreener {
  protected fieldType = BaseField;
  protected url = 'https://scanner.tradingview.com/america/scan';

  protected defaultFields: BaseField[] = [
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE,
    StockField.CHANGE_PERCENT,
    StockField.VOLUME,
    StockField.MARKET_CAPITALIZATION,
  ];

  constructor() {
    super();
    // Set default sort
    this.sortBy(StockField.MARKET_CAPITALIZATION, false);
  }

  /**
   * Select all available stock fields
   */
  override selectAll(): this {
    this.specificFields = Object.values(StockField);
    return this;
  }
}
