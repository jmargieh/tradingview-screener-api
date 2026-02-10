# Missing StockField Constants

This document lists all StockField constants that are documented and implemented in the Python reference but missing from the TypeScript implementation.

## Summary

- **Currently Implemented:** 16 fields in `src/fields/StockField.ts`
- **Python Reference:** 711 fields in `temp_repo/tvscreener/field/stock.py`
- **Missing Fields:** 695 fields
- **Documentation Claims:** ~3,526 total variations (including intervals and historical lookbacks)

## Currently Implemented Fields

The following 16 fields are already implemented in TypeScript:

1. `NAME` - Name
2. `DESCRIPTION` - Description
3. `PRICE` - Price
4. `CHANGE` - Change
5. `CHANGE_PERCENT` - Change %
6. `VOLUME` - Volume
7. `MARKET_CAPITALIZATION` - Market Cap
8. `PRICE_TO_EARNINGS_RATIO_TTM` - P/E Ratio (TTM)
9. `PRICE_TO_BOOK_MRQ` - P/B Ratio
10. `ENTERPRISE_VALUE_EBITDA_TTM` - EV/EBITDA
11. `DIVIDEND_YIELD_FWD` - Dividend Yield (Forward)
12. `EARNINGS_PER_SHARE_DILUTED_TTM` - EPS Diluted (TTM)
13. `REVENUE_TTM` - Revenue (TTM)
14. `NET_INCOME_TTM` - Net Income (TTM)
15. `RSI` - RSI
16. `ATR` - ATR

## Missing Fields by Category

### 1. Price & Volume (25 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `OPEN` | Open | open | currency |
| `HIGH` | High | high | currency |
| `LOW` | Low | low | currency |
| `CLOSE` | Previous Close | close | currency |
| `ALL_TIME_HIGH` | All Time High | High.All | round |
| `ALL_TIME_LOW` | All Time Low | Low.All | round |
| `RELATIVE_VOLUME` | Relative Volume | relative_volume_10d_calc | round |
| `RELATIVE_VOLUME_AT_TIME` | Relative Volume at Time | relative_volume_intraday.5 | round |
| `VOLUME_WEIGHTED_AVERAGE_PRICE` | Volume Weighted Average Price | VWAP | float |
| `VOLUMEXPRICE` | Volume*Price | Value.Traded | number_group |
| `AVERAGE_VOLUME_10_DAY` | Average Volume (10 day) | average_volume_10d_calc | number_group |
| `AVERAGE_VOLUME_30_DAY` | Average Volume (30 day) | average_volume_30d_calc | number_group |
| `AVERAGE_VOLUME_60_DAY` | Average Volume (60 day) | average_volume_60d_calc | number_group |
| `AVERAGE_VOLUME_90_DAY` | Average Volume (90 day) | average_volume_90d_calc | number_group |
| `CHANGE_FROM_OPEN` | Change from Open | change_from_open_abs | currency |
| `CHANGE_FROM_OPEN_PERCENT` | Change from Open % | change_from_open | percent |
| `GAP_PERCENT` | Gap % | gap | percent |
| `PREMARKET_OPEN` | Pre-market Open | premarket_open | currency |
| `PREMARKET_HIGH` | Pre-market High | premarket_high | currency |
| `PREMARKET_LOW` | Pre-market Low | premarket_low | currency |
| `PREMARKET_CLOSE` | Pre-market Close | premarket_close | currency |
| `PREMARKET_VOLUME` | Pre-market Volume | premarket_volume | number_group |
| `PREMARKET_CHANGE` | Pre-market Change | premarket_change_abs | currency |
| `PREMARKET_CHANGE_PERCENT` | Pre-market Change % | premarket_change | percent |
| `PREMARKET_GAP_PERCENT` | Pre-market Gap % | premarket_gap | percent |

### 2. Performance Metrics (18 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `ALL_TIME_PERFORMANCE` | All Time Performance | Perf.All | percent |
| `WEEKLY_PERFORMANCE` | Weekly Performance | Perf.W | percent |
| `MONTHLY_PERFORMANCE` | Monthly Performance | Perf.1M | percent |
| `YEARLY_PERFORMANCE` | Yearly Performance | Perf.Y | percent |
| `YTD_PERFORMANCE` | YTD Performance | Perf.YTD | percent |
| `CHANGE_1MIN` | Change 1m | change_abs.1 | float |
| `CHANGE_1MIN_PERCENT` | Change 1m, % | change.1 | percent |
| `CHANGE_5MIN` | Change 5m | change_abs.5 | round |
| `CHANGE_5MIN_PERCENT` | Change 5m, % | change.5 | percent |
| `CHANGE_15MIN` | Change 15m | change_abs.15 | float |
| `CHANGE_15MIN_PERCENT` | Change 15m, % | change.15 | percent |
| `CHANGE_1H` | Change 1h | change_abs.60 | round |
| `CHANGE_1H_PERCENT` | Change 1h, % | change.60 | percent |
| `CHANGE_4H` | Change 4h | change_abs.240 | round |
| `CHANGE_4H_PERCENT` | Change 4h, % | change.240 | percent |
| `CHANGE_1W` | Change 1W | change_abs.1W | round |
| `CHANGE_1W_PERCENT` | Change 1W, % | change.1W | percent |
| `CHANGE_1M` | Change 1M | change_abs.1M | round |
| `CHANGE_1M_PERCENT` | Change 1M, % | change.1M | percent |

### 3. Dividend Fields (17 missing)

**Note:** User specifically mentioned `DIVIDEND_PAYOUT_RATIO_TTM` is missing.

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `DIVIDEND_YIELD_FORWARD` | Dividend Yield Forward | dividend_yield_recent | percent |
| `DIVIDENDS_YIELD` | Dividend Yield % | dividends_yield | percent |
| `DIVIDENDS_YIELD_CURRENT` | Dividend Yield % (Current) | dividends_yield_current | percent |
| `DIVIDENDS_PER_SHARE_FY` | Dividends per Share (FY) | dps_common_stock_prim_issue_fy | currency |
| `DIVIDENDS_PER_SHARE_MRQ` | Dividends per Share (MRQ) | dividends_per_share_fq | currency |
| `DIVIDENDS_PER_SHARE_ANNUAL_YOY_GROWTH` | Dividends per share (Annual YoY Growth) | dps_common_stock_prim_issue_yoy_growth_fy | percent |
| `DIVIDENDS_PAID_FY` | Dividends Paid (FY) | dividends_paid | currency |
| `DIVIDEND_PAYOUT_RATIO_TTM` | Dividend Payout Ratio (TTM) | dividend_payout_ratio_ttm | percent |
| `TOTAL_CASH_DIVIDENDS_PAID_TTM` | Total Cash Dividends Paid (TTM) | total_cash_dividends_paid_ttm | currency |
| `CASH_DIVIDEND_COVERAGE_RATIO_TTM` | Cash Dividend Coverage Ratio (TTM) | cash_dividend_coverage_ratio_ttm | round |
| `CASH_DIVIDEND_COVERAGE_RATIO_FY` | Cash Dividend Coverage Ratio (FY) | cash_dividend_coverage_ratio_fy | round |
| `CONTINUOUS_DIVIDEND_GROWTH` | Continuous Dividend Growth | continuous_dividend_growth | round |
| `CONTINUOUS_DIVIDEND_PAYOUT` | Continuous Dividend Payout | continuous_dividend_payout | round |
| `YIELD_RECENT` | Yield Recent | yield_recent | round |
| `YIELD_UPCOMING` | Yield Upcoming | yield_upcoming | round |
| `EXPECTED_ANNUAL_DIVIDENDS` | Expected Annual Dividends | expected_annual_dividends | round |
| `RECENT_EARNINGS_DATE` | Recent Earnings Date | earnings_release_date | date |

### 4. Valuation Metrics (21 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `ENTERPRISE_VALUEEBITDA_TTM` | Enterprise Value/EBITDA (TTM) | enterprise_value_ebitda_ttm | round |
| `ENTERPRISE_VALUE_MRQ` | Enterprise Value (MRQ) | enterprise_value_fq | currency |
| `PRICE_TO_BOOK_FY` | Price to Book (FY) | price_book_ratio | round |
| `PRICE_TO_EARNINGS_RATIO_TTM` | Price to Earnings Ratio (TTM) | price_earnings_ttm | round |
| `PRICE_TO_FREE_CASH_FLOW_TTM` | Price to Free Cash Flow (TTM) | price_free_cash_flow_ttm | round |
| `PRICE_TO_REVENUE_RATIO_TTM` | Price to Revenue Ratio (TTM) | price_revenue_ttm | round |
| `PRICE_TO_SALES_FY` | Price to Sales (FY) | price_sales_ratio | round |
| `PRICE_TO_CASH_RATIO` | Price to Cash Ratio | price_to_cash_ratio | round |
| `PRICE_TO_CASH_F_OPERATING_ACTIVITIES_TTM` | Price to Cash Flow (TTM) | price_to_cash_f_operating_activities_ttm | round |
| `PRICE_TO_WORKING_CAPITAL_FQ` | Price to Net Working Capital | price_to_working_capital_fq | round |
| `PRICE_EARNINGS_GROWTH_TTM` | PEG Ratio (TTM) | price_earnings_growth_ttm | round |
| `PRICE_EARNINGS_FORWARD_FY` | Price Earnings Forward FY | price_earnings_forward_fy | round |
| `EARNINGS_YIELD` | Earnings Yield % | earnings_yield | percent |
| `PRICE_TARGET_AVERAGE` | Target Price (Average) | price_target_average | currency |
| `PRICE_TARGET_LOW` | Price Target Low | price_target_low | round |
| `PRICE_TARGET_MEDIAN` | Price Target Median | price_target_median | round |
| `PRICE_TARGET_HIGH` | Price Target High | price_target_high | round |
| `ENTERPRISE_VALUE_TO_EBIT_TTM` | EV to EBIT (TTM) | enterprise_value_to_ebit_ttm | round |
| `ENTERPRISE_VALUE_TO_REVENUE_TTM` | EV to Revenue (TTM) | enterprise_value_to_revenue_ttm | round |
| `ENTERPRISE_VALUE_TO_GROSS_PROFIT_TTM` | EV to Gross Profit (TTM) | enterprise_value_to_gross_profit_ttm | round |
| `NON_GAAP_PRICE_TO_EARNINGS_PER_SHARE_FORECAST_NEXT_FY` | Forward P/E (Non-GAAP) | non_gaap_price_to_earnings_per_share_forecast_next_fy | round |

### 5. Technical Indicators - Moving Averages (18 missing)

| Constant | Label | API Field Name | Format | Interval |
|----------|-------|----------------|--------|----------|
| `SIMPLE_MOVING_AVERAGE_5` | SMA 5 | SMA5 | computed_recommendation | True |
| `SIMPLE_MOVING_AVERAGE_10` | SMA 10 | SMA10 | computed_recommendation | True |
| `SIMPLE_MOVING_AVERAGE_20` | SMA 20 | SMA20 | computed_recommendation | True |
| `SIMPLE_MOVING_AVERAGE_30` | SMA 30 | SMA30 | computed_recommendation | True |
| `SIMPLE_MOVING_AVERAGE_50` | SMA 50 | SMA50 | computed_recommendation | True |
| `SIMPLE_MOVING_AVERAGE_100` | SMA 100 | SMA100 | computed_recommendation | True |
| `SIMPLE_MOVING_AVERAGE_200` | SMA 200 | SMA200 | computed_recommendation | True |
| `EXPONENTIAL_MOVING_AVERAGE_5` | EMA 5 | EMA5 | computed_recommendation | True |
| `EXPONENTIAL_MOVING_AVERAGE_10` | EMA 10 | EMA10 | computed_recommendation | True |
| `EXPONENTIAL_MOVING_AVERAGE_20` | EMA 20 | EMA20 | computed_recommendation | True |
| `EXPONENTIAL_MOVING_AVERAGE_30` | EMA 30 | EMA30 | computed_recommendation | True |
| `EXPONENTIAL_MOVING_AVERAGE_50` | EMA 50 | EMA50 | computed_recommendation | True |
| `EXPONENTIAL_MOVING_AVERAGE_100` | EMA 100 | EMA100 | computed_recommendation | True |
| `EXPONENTIAL_MOVING_AVERAGE_200` | EMA 200 | EMA200 | computed_recommendation | True |
| `HULL_MOVING_AVERAGE_9` | HMA 9 | HullMA9 | computed_recommendation | True |
| `VOLUME_WEIGHTED_MOVING_AVERAGE_20` | VWMA 20 | VWMA | computed_recommendation | True |
| `ICHIMOKU_BASE_LINE` | Ichimoku Base Line | Ichimoku.BLine | recommendation | True |
| `ICHIMOKU_CONVERSION_LINE` | Ichimoku Conversion Line | Ichimoku.CLine | recommendation | True |

### 6. Technical Indicators - Oscillators (15 missing)

| Constant | Label | API Field Name | Format | Interval |
|----------|-------|----------------|--------|----------|
| `RELATIVE_STRENGTH_INDEX_14` | RSI (14) | RSI | computed_recommendation | True |
| `STOCHASTIC_K_14_3_3` | Stochastic %K | Stoch.K | computed_recommendation | True |
| `STOCHASTIC_D_14_3_3` | Stochastic %D | Stoch.D | computed_recommendation | True |
| `COMMODITY_CHANNEL_INDEX_20` | CCI (20) | CCI20 | computed_recommendation | True |
| `AWESOME_OSCILLATOR` | Awesome Oscillator | AO | computed_recommendation | True |
| `MACD_LEVEL_12_26` | MACD Level | MACD.macd | computed_recommendation | True |
| `MACD_SIGNAL_12_26` | MACD Signal | MACD.signal | computed_recommendation | True |
| `BULL_BEAR_POWER` | Bull Bear Power | BBPower | recommendation | True |
| `CHAIKIN_MONEY_FLOW_20` | Chaikin Money Flow (20) | ChaikinMoneyFlow | round | False |
| `MONEY_FLOW_14` | Money Flow (14) | MoneyFlow | round | True |
| `MOMENTUM_10` | Momentum (10) | Mom | computed_recommendation | True |
| `RATE_OF_CHANGE_9` | Rate of Change (9) | ROC | computed_recommendation | True |
| `STOCHASTIC_RSI_FAST_3_3_14_14` | Stochastic RSI Fast | Stoch.RSI.K | computed_recommendation | True |
| `ULTIMATE_OSCILLATOR_7_14_28` | Ultimate Oscillator | UO | computed_recommendation | True |
| `WILLIAMS_PERCENT_RANGE_14` | Williams %R | W.R | computed_recommendation | True |

### 7. Technical Indicators - Trend & Volatility (18 missing)

| Constant | Label | API Field Name | Format | Interval |
|----------|-------|----------------|--------|----------|
| `AVERAGE_DIRECTIONAL_INDEX_14` | ADX (14) | ADX | computed_recommendation | True |
| `AVERAGE_TRUE_RANGE_14` | ATR (14) | ATR | float | True |
| `AVERAGE_DAY_RANGE_14` | Average Day Range (14) | ADR | float | True |
| `AROON_UP_14` | Aroon Up (14) | Aroon.Up | round | True |
| `AROON_DOWN_14` | Aroon Down (14) | Aroon.Down | round | True |
| `PARABOLIC_SAR` | Parabolic SAR | P.SAR | computed_recommendation | True |
| `BOLLINGER_UPPER_BAND_20` | Bollinger Upper Band (20) | BB.upper | computed_recommendation | True |
| `BOLLINGER_LOWER_BAND_20` | Bollinger Lower Band (20) | BB.lower | computed_recommendation | True |
| `DONCHIAN_CHANNELS_UPPER_BAND_20` | Donchian Upper Band (20) | DonchCh20.Upper | round | True |
| `DONCHIAN_CHANNELS_LOWER_BAND_20` | Donchian Lower Band (20) | DonchCh20.Lower | round | True |
| `KELTNER_CHANNELS_UPPER_BAND` | Keltner Upper Band | KltChnl.upper | computed_recommendation | True |
| `KELTNER_CHANNELS_LOWER_BAND` | Keltner Lower Band | KltChnl.lower | computed_recommendation | True |
| `VOLATILITY` | Volatility | Volatility.D | percent | False |
| `VOLATILITY_WEEK` | Volatility Week | Volatility.W | percent | False |
| `VOLATILITY_MONTH` | Volatility Month | Volatility.M | percent | False |
| `PIVOT_CLASSIC_P` | Pivot Classic P | Pivot.M.Classic.Middle | round | True |
| `PIVOT_FIBONACCI_P` | Pivot Fibonacci P | Pivot.M.Fibonacci.Middle | round | True |
| `PIVOT_CAMARILLA_P` | Pivot Camarilla P | Pivot.M.Camarilla.Middle | round | True |

### 8. Candlestick Patterns (33 missing)

All candlestick patterns have format `bool` and support intervals.

| Constant | Label | API Field Name |
|----------|-------|----------------|
| `CANDLE_DOJI` | Candle.Doji | Candle.Doji |
| `CANDLE_DOJI_DRAGONFLY` | Candle.Doji.Dragonfly | Candle.Doji.Dragonfly |
| `CANDLE_DOJI_GRAVESTONE` | Candle.Doji.Gravestone | Candle.Doji.Gravestone |
| `CANDLE_ENGULFING_BULLISH` | Candle.Engulfing.Bullish | Candle.Engulfing.Bullish |
| `CANDLE_ENGULFING_BEARISH` | Candle.Engulfing.Bearish | Candle.Engulfing.Bearish |
| `CANDLE_HAMMER` | Candle.Hammer | Candle.Hammer |
| `CANDLE_INVERTEDHAMMER` | Candle.InvertedHammer | Candle.InvertedHammer |
| `CANDLE_SHOOTINGSTAR` | Candle.ShootingStar | Candle.ShootingStar |
| `CANDLE_HANGINGMAN` | Candle.HangingMan | Candle.HangingMan |
| `CANDLE_MORNINGSTAR` | Candle.MorningStar | Candle.MorningStar |
| `CANDLE_EVENINGSTAR` | Candle.EveningStar | Candle.EveningStar |
| `CANDLE_HARAMI_BULLISH` | Candle.Harami.Bullish | Candle.Harami.Bullish |
| `CANDLE_HARAMI_BEARISH` | Candle.Harami.Bearish | Candle.Harami.Bearish |
| `CANDLE_MARUBOZU_WHITE` | Candle.Marubozu.White | Candle.Marubozu.White |
| `CANDLE_MARUBOZU_BLACK` | Candle.Marubozu.Black | Candle.Marubozu.Black |
| `CANDLE_ABANDONEDBABY_BULLISH` | Candle.AbandonedBaby.Bullish | Candle.AbandonedBaby.Bullish |
| `CANDLE_ABANDONEDBABY_BEARISH` | Candle.AbandonedBaby.Bearish | Candle.AbandonedBaby.Bearish |
| `CANDLE_KICKING_BULLISH` | Candle.Kicking.Bullish | Candle.Kicking.Bullish |
| `CANDLE_KICKING_BEARISH` | Candle.Kicking.Bearish | Candle.Kicking.Bearish |
| `CANDLE_3BLACKCROWS` | Candle.3BlackCrows | Candle.3BlackCrows |
| `CANDLE_3WHITESOLDIERS` | Candle.3WhiteSoldiers | Candle.3WhiteSoldiers |
| `CANDLE_TRISTAR_BULLISH` | Candle.TriStar.Bullish | Candle.TriStar.Bullish |
| `CANDLE_TRISTAR_BEARISH` | Candle.TriStar.Bearish | Candle.TriStar.Bearish |
| `CANDLE_LONGSHADOW_UPPER` | Candle.LongShadow.Upper | Candle.LongShadow.Upper |
| `CANDLE_LONGSHADOW_LOWER` | Candle.LongShadow.Lower | Candle.LongShadow.Lower |
| `CANDLE_SPINNINGTOP_WHITE` | Candle.SpinningTop.White | Candle.SpinningTop.White |
| `CANDLE_SPINNINGTOP_BLACK` | Candle.SpinningTop.Black | Candle.SpinningTop.Black |

### 9. Income Statement Fields (60+ missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `TOTAL_REVENUE_FY` | Total Revenue (FY) | total_revenue | currency |
| `TOTAL_REVENUE_TTM` | Total Revenue TTM | total_revenue_ttm | currency |
| `REVENUE_ANNUAL_YOY_GROWTH` | Revenue (Annual YoY Growth) | total_revenue_yoy_growth_fy | percent |
| `REVENUE_QUARTERLY_YOY_GROWTH` | Revenue (Quarterly YoY Growth) | total_revenue_yoy_growth_fq | percent |
| `REVENUE_QUARTERLY_QOQ_GROWTH` | Revenue (Quarterly QoQ Growth) | total_revenue_qoq_growth_fq | percent |
| `REVENUE_TTM_YOY_GROWTH` | Revenue (TTM YoY Growth) | total_revenue_yoy_growth_ttm | percent |
| `REVENUE_PER_SHARE_TTM` | Revenue per Share (TTM) | revenue_per_share_ttm | currency |
| `REVENUE_PER_SHARE_FY` | Revenue per Share (FY) | revenue_per_share_fy | currency |
| `REVENUE_PER_EMPLOYEE_FY` | Revenue per Employee (FY) | revenue_per_employee | currency |
| `REVENUE_FORECAST_FQ` | Revenue Estimate (MRQ) | revenue_forecast_fq | currency |
| `GROSS_PROFIT_FY` | Gross Profit (FY) | gross_profit | currency |
| `GROSS_PROFIT_MRQ` | Gross Profit (MRQ) | gross_profit_fq | currency |
| `GROSS_PROFIT_TTM` | Gross Profit TTM | gross_profit_ttm | currency |
| `GROSS_PROFIT_ANNUAL_YOY_GROWTH` | Gross Profit (Annual YoY Growth) | gross_profit_yoy_growth_fy | percent |
| `GROSS_PROFIT_QUARTERLY_YOY_GROWTH` | Gross Profit (Quarterly YoY Growth) | gross_profit_yoy_growth_fq | percent |
| `GROSS_PROFIT_QUARTERLY_QOQ_GROWTH` | Gross Profit (Quarterly QoQ Growth) | gross_profit_qoq_growth_fq | percent |
| `GROSS_PROFIT_TTM_YOY_GROWTH` | Gross Profit (TTM YoY Growth) | gross_profit_yoy_growth_ttm | percent |
| `OPER_INCOME_TTM` | Operating Income (TTM) | oper_income_ttm | currency |
| `OPER_INCOME_FY` | Operating Income (FY) | oper_income_fy | currency |
| `NET_INCOME_FY` | Net Income (FY) | net_income | currency |
| `NET_INCOME_ANNUAL_YOY_GROWTH` | Net Income (Annual YoY Growth) | net_income_yoy_growth_fy | percent |
| `NET_INCOME_QUARTERLY_YOY_GROWTH` | Net Income (Quarterly YoY Growth) | net_income_yoy_growth_fq | percent |
| `NET_INCOME_QUARTERLY_QOQ_GROWTH` | Net Income (Quarterly QoQ Growth) | net_income_qoq_growth_fq | percent |
| `NET_INCOME_TTM_YOY_GROWTH` | Net Income (TTM YoY Growth) | net_income_yoy_growth_ttm | percent |
| `NET_INCOME_PER_EMPLOYEE_FY` | Net Income per Employee (FY) | net_income_per_employee_fy | currency |
| `EBITDA_ANNUAL_YOY_GROWTH` | EBITDA (Annual YoY Growth) | ebitda_yoy_growth_fy | percent |
| `EBITDA_QUARTERLY_YOY_GROWTH` | EBITDA (Quarterly YoY Growth) | ebitda_yoy_growth_fq | percent |
| `EBITDA_QUARTERLY_QOQ_GROWTH` | EBITDA (Quarterly QoQ Growth) | ebitda_qoq_growth_fq | percent |
| `EBITDA_TTM` | EBITDA (TTM) | ebitda | currency |
| `EBITDA_TTM_YOY_GROWTH` | EBITDA (TTM YoY Growth) | ebitda_yoy_growth_ttm | percent |
| `EBITDA_PER_SHARE_TTM` | EBITDA per Share (TTM) | ebitda_per_share_ttm | currency |
| `EBITDA_PER_EMPLOYEE_FY` | EBITDA per Employee (FY) | ebitda_per_employee_fy | currency |
| `EBIT_PER_SHARE_TTM` | EBIT per Share (TTM) | ebit_per_share_ttm | currency |

### 10. EPS Fields (25+ missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `BASIC_EPS_FY` | Basic EPS (FY) | basic_eps_net_income | currency |
| `BASIC_EPS_TTM` | Basic EPS (TTM) | earnings_per_share_basic_ttm | currency |
| `EARNINGS_PER_SHARE_BASIC_TTM` | EPS Basic (TTM) | earnings_per_share_basic_ttm | currency |
| `EPS_DILUTED_FY` | EPS Diluted (FY) | last_annual_eps | currency |
| `EPS_DILUTED_MRQ` | EPS Diluted (MRQ) | earnings_per_share_fq | currency |
| `EPS_DILUTED_ANNUAL_YOY_GROWTH` | EPS Diluted (Annual YoY Growth) | earnings_per_share_diluted_yoy_growth_fy | percent |
| `EPS_DILUTED_QUARTERLY_YOY_GROWTH` | EPS Diluted (Quarterly YoY Growth) | earnings_per_share_diluted_yoy_growth_fq | percent |
| `EPS_DILUTED_QUARTERLY_QOQ_GROWTH` | EPS Diluted (Quarterly QoQ Growth) | earnings_per_share_diluted_qoq_growth_fq | percent |
| `EPS_DILUTED_TTM_YOY_GROWTH` | EPS Diluted (TTM YoY Growth) | earnings_per_share_diluted_yoy_growth_ttm | percent |
| `EPS_FORECAST_MRQ` | EPS Forecast (MRQ) | earnings_per_share_forecast_next_fq | currency |

### 11. Margin Ratios (15 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `GROSS_MARGIN_FY` | Gross Margin (FY) | gross_profit_margin_fy | percent |
| `GROSS_MARGIN_TTM` | Gross Margin (TTM) | gross_margin | percent |
| `GROSS_MARGIN_PERCENT_TTM` | Gross Margin % (TTM) | gross_margin_ttm | percent |
| `NET_MARGIN_FY` | Net Margin (FY) | net_income_bef_disc_oper_margin_fy | percent |
| `NET_MARGIN_TTM` | Net Margin (TTM) | after_tax_margin | percent |
| `NET_MARGIN_PERCENT_TTM` | Net Margin % (TTM) | net_margin_ttm | percent |
| `OPERATING_MARGIN_FY` | Operating Margin (FY) | oper_income_margin_fy | percent |
| `OPERATING_MARGIN_TTM` | Operating Margin (TTM) | operating_margin | percent |
| `OPERATING_MARGIN_PERCENT_TTM` | Operating Margin % (TTM) | operating_margin_ttm | percent |
| `EBITDA_MARGIN_TTM` | EBITDA Margin % (TTM) | ebitda_margin_ttm | percent |
| `EBITDA_MARGIN_FY` | EBITDA Margin % (FY) | ebitda_margin_fy | percent |
| `PRETAX_MARGIN_TTM` | Pretax Margin (TTM) | pre_tax_margin | percent |
| `FREE_CASH_FLOW_MARGIN_FY` | Free Cash Flow Margin (FY) | free_cash_flow_margin_fy | percent |
| `FREE_CASH_FLOW_MARGIN_TTM` | Free Cash Flow Margin (TTM) | free_cash_flow_margin_ttm | percent |

### 12. Profitability Ratios (30+ missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `RETURN_ON_EQUITY_TTM` | Return on Equity (TTM) | return_on_equity | round |
| `RETURN_ON_EQUITY_FQ` | Return on Equity % (MRQ) | return_on_equity_fq | percent |
| `RETURN_ON_ASSETS_TTM` | Return on Assets (TTM) | return_on_assets | round |
| `RETURN_ON_ASSETS_FQ` | Return on Assets % (MRQ) | return_on_assets_fq | percent |
| `RETURN_ON_INVESTED_CAPITAL_TTM` | Return on Invested Capital (TTM) | return_on_invested_capital | percent |
| `RETURN_ON_INVESTED_CAPITAL_FQ` | Return on Invested Capital % (MRQ) | return_on_invested_capital_fq | percent |
| `RETURN_ON_COMMON_EQUITY_TTM` | Return on Common Equity % (TTM) | return_on_common_equity_ttm | percent |
| `RETURN_ON_CAPITAL_EMPLOYED_FQ` | Return on Capital Employed % (MRQ) | return_on_capital_employed_fq | percent |
| `RETURN_ON_TOTAL_CAPITAL_FQ` | Return on Total Capital % (MRQ) | return_on_total_capital_fq | percent |
| `RETURN_ON_TANG_ASSETS_FQ` | Return on Tangible Assets % (MRQ) | return_on_tang_assets_fq | percent |
| `RETURN_ON_TANG_ASSETS_FY` | Return on Tangible Assets % (FY) | return_on_tang_assets_fy | percent |
| `RETURN_ON_TANG_EQUITY_FQ` | Return on Tangible Equity % (MRQ) | return_on_tang_equity_fq | percent |
| `RETURN_ON_TANG_EQUITY_FY` | Return on Tangible Equity % (FY) | return_on_tang_equity_fy | percent |

### 13. Balance Sheet - Assets (30+ missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `TOTAL_ASSETS_MRQ` | Total Assets (MRQ) | total_assets | currency |
| `TOTAL_ASSETS_ANNUAL_YOY_GROWTH` | Total Assets (Annual YoY Growth) | total_assets_yoy_growth_fy | percent |
| `TOTAL_ASSETS_QUARTERLY_YOY_GROWTH` | Total Assets (Quarterly YoY Growth) | total_assets_yoy_growth_fq | percent |
| `TOTAL_ASSETS_QUARTERLY_QOQ_GROWTH` | Total Assets (Quarterly QoQ Growth) | total_assets_qoq_growth_fq | percent |
| `TOTAL_CURRENT_ASSETS_MRQ` | Total Current Assets (MRQ) | total_current_assets | currency |
| `CASH_AND_EQUIVALENTS_FY` | Cash & Equivalents (FY) | cash_n_equivalents_fy | currency |
| `CASH_AND_EQUIVALENTS_MRQ` | Cash & Equivalents (MRQ) | cash_n_equivalents_fq | currency |
| `CASH_AND_SHORT_TERM_INVESTMENTS_FY` | Cash and short term investments (FY) | cash_n_short_term_invest_fy | currency |
| `CASH_AND_SHORT_TERM_INVESTMENTS_MRQ` | Cash and short term investments (MRQ) | cash_n_short_term_invest_fq | currency |
| `CASH_PER_SHARE_FQ` | Cash per Share (MRQ) | cash_per_share_fq | currency |
| `GOODWILL` | Goodwill | goodwill | currency |
| `GOODWILL_FQ` | Goodwill (MRQ) | goodwill_fq | currency |
| `GOODWILL_FY` | Goodwill (FY) | goodwill_fy | currency |

### 14. Balance Sheet - Liabilities & Equity (35+ missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `TOTAL_DEBT_MRQ` | Total Debt (MRQ) | total_debt | currency |
| `TOTAL_DEBT_ANNUAL_YOY_GROWTH` | Total Debt (Annual YoY Growth) | total_debt_yoy_growth_fy | percent |
| `TOTAL_DEBT_QUARTERLY_YOY_GROWTH` | Total Debt (Quarterly YoY Growth) | total_debt_yoy_growth_fq | percent |
| `TOTAL_DEBT_QUARTERLY_QOQ_GROWTH` | Total Debt (Quarterly QoQ Growth) | total_debt_qoq_growth_fq | percent |
| `TOTAL_DEBT_PER_SHARE_FQ` | Total Debt per Share (MRQ) | total_debt_per_share_fq | currency |
| `LONG_TERM_DEBT_FQ` | Long Term Debt (MRQ) | long_term_debt_fq | currency |
| `LONG_TERM_DEBT_FY` | Long Term Debt (FY) | long_term_debt_fy | currency |
| `SHORT_TERM_DEBT_FQ` | Short Term Debt (MRQ) | short_term_debt_fq | currency |
| `SHORT_TERM_DEBT_FY` | Short Term Debt (FY) | short_term_debt_fy | currency |
| `NET_DEBT_MRQ` | Net Debt (MRQ) | net_debt | currency |
| `TOTAL_LIABILITIES_FY` | Total Liabilities (FY) | total_liabilities_fy | currency |
| `TOTAL_LIABILITIES_MRQ` | Total Liabilities (MRQ) | total_liabilities_fq | currency |
| `TOTAL_CURRENT_LIABILITIES_FQ` | Total Current Liabilities (MRQ) | total_current_liabilities_fq | currency |
| `TOTAL_EQUITY_FQ` | Total Equity (MRQ) | total_equity_fq | currency |
| `TOTAL_EQUITY_FY` | Total Equity (FY) | total_equity_fy | currency |

### 15. Liquidity Ratios (10 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `CURRENT_RATIO_MRQ` | Current Ratio (MRQ) | current_ratio | round |
| `CURRENT_RATIO_FQ` | Current Ratio (MRQ) | current_ratio_fq | round |
| `QUICK_RATIO_MRQ` | Quick Ratio (MRQ) | quick_ratio | round |
| `QUICK_RATIO_FQ` | Quick Ratio (MRQ) | quick_ratio_fq | round |
| `CASH_N_SHORT_TERM_INVEST_TO_TOTAL_CURRENT_LIABILITIES_FY` | Cash Ratio (FY) | cash_n_short_term_invest_to_total_current_liabilities_fy | round |

### 16. Leverage Ratios (25 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `DEBT_TO_EQUITY_RATIO_MRQ` | Debt to Equity Ratio (MRQ) | debt_to_equity | round |
| `DEBT_TO_ASSET_FQ` | Debt to Assets (MRQ) | debt_to_asset_fq | percent |
| `DEBT_TO_ASSET_FY` | Debt to Assets (FY) | debt_to_asset_fy | percent |
| `DEBT_TO_REVENUE_TTM` | Debt to Revenue (TTM) | debt_to_revenue_ttm | round |
| `NET_DEBT_TO_EBITDA_FQ` | Net Debt to EBITDA (MRQ) | net_debt_to_ebitda_fq | round |
| `TOTAL_DEBT_TO_CAPITAL_FQ` | Total Debt to Capital (MRQ) | total_debt_to_capital_fq | percent |
| `TOTAL_DEBT_TO_CAPITAL_FY` | Total Debt to Capital (FY) | total_debt_to_capital_fy | percent |
| `CASH_N_SHORT_TERM_INVEST_TO_TOTAL_DEBT_FQ` | Cash to Debt Ratio (MRQ) | cash_n_short_term_invest_to_total_debt_fq | round |
| `CASH_N_SHORT_TERM_INVEST_TO_TOTAL_DEBT_FY` | Cash to Debt Ratio (FY) | cash_n_short_term_invest_to_total_debt_fy | round |
| `SHRHLDRS_EQUITY_TO_TOTAL_ASSETS_FQ` | Equity to Assets (MRQ) | shrhldrs_equity_to_total_assets_fq | percent |
| `SHRHLDRS_EQUITY_TO_TOTAL_ASSETS_FY` | Equity to Assets (FY) | shrhldrs_equity_to_total_assets_fy | percent |

### 17. Cash Flow Statement (25 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `FREE_CASH_FLOW` | Free Cash Flow | free_cash_flow | currency |
| `FREE_CASH_FLOW_TTM` | Free Cash Flow (TTM) | free_cash_flow_ttm | currency |
| `FREE_CASH_FLOW_FY` | Free Cash Flow (FY) | free_cash_flow_fy | currency |
| `FREE_CASH_FLOW_PER_SHARE_TTM` | Free Cash Flow per Share (TTM) | free_cash_flow_per_share_ttm | currency |
| `FREE_CASH_FLOW_ANNUAL_YOY_GROWTH` | Free Cash Flow (Annual YoY Growth) | free_cash_flow_yoy_growth_fy | percent |
| `FREE_CASH_FLOW_QUARTERLY_YOY_GROWTH` | Free Cash Flow (Quarterly YoY Growth) | free_cash_flow_yoy_growth_fq | percent |
| `FREE_CASH_FLOW_QUARTERLY_QOQ_GROWTH` | Free Cash Flow (Quarterly QoQ Growth) | free_cash_flow_qoq_growth_fq | percent |
| `FREE_CASH_FLOW_TTM_YOY_GROWTH` | Free Cash Flow (TTM YoY Growth) | free_cash_flow_yoy_growth_ttm | percent |
| `CASH_F_OPERATING_ACTIVITIES_TTM` | Cash from Operating Activities (TTM) | cash_f_operating_activities_ttm | currency |
| `CASH_F_OPERATING_ACTIVITIES_FY` | Cash from Operating Activities (FY) | cash_f_operating_activities_fy | currency |
| `CASH_F_INVESTING_ACTIVITIES_TTM` | Cash from Investing Activities (TTM) | cash_f_investing_activities_ttm | currency |
| `CASH_F_INVESTING_ACTIVITIES_FY` | Cash from Investing Activities (FY) | cash_f_investing_activities_fy | currency |
| `CASH_F_FINANCING_ACTIVITIES_TTM` | Cash from Financing Activities (TTM) | cash_f_financing_activities_ttm | currency |
| `CASH_F_FINANCING_ACTIVITIES_FY` | Cash from Financing Activities (FY) | cash_f_financing_activities_fy | currency |
| `OPERATING_CASH_FLOW_PER_SHARE_TTM` | Operating Cash Flow per Share (TTM) | operating_cash_flow_per_share_ttm | currency |
| `CAPITAL_EXPENDITURES_TTM` | Capital Expenditures (TTM) | capital_expenditures_ttm | currency |
| `CAPITAL_EXPENDITURES_FY` | Capital Expenditures (FY) | capital_expenditures_fy | currency |
| `CAPITAL_EXPENDITURES_FQ` | Capital Expenditures (MRQ) | capital_expenditures_fq | currency |
| `CAPEX_PER_SHARE_TTM` | CapEx per Share (TTM) | capex_per_share_ttm | currency |

### 18. Efficiency Ratios (10 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `ASSET_TURNOVER_FY` | Asset Turnover (FY) | asset_turnover_fy | round |
| `INVENT_TURNOVER_CURRENT` | Inventory Turnover (Current) | invent_turnover_current | round |
| `INVENT_TURNOVER_FY` | Inventory Turnover (FY) | invent_turnover_fy | round |
| `RECEIVABLES_TURNOVER_FY` | Receivables Turnover (FY) | receivables_turnover_fy | round |
| `FIXED_ASSETS_TURNOVER_FY` | Fixed Assets Turnover (FY) | fixed_assets_turnover_fy | round |

### 19. Interest Coverage (8 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `INTERST_COVER_TTM` | Interest Coverage (TTM) | interst_cover_ttm | round |
| `INTERST_COVER_FY` | Interest Coverage (FY) | interst_cover_fy | round |
| `EBITDA_INTERST_COVER_TTM` | EBITDA Interest Coverage (TTM) | ebitda_interst_cover_ttm | round |
| `EBITDA_INTERST_COVER_FY` | EBITDA Interest Coverage (FY) | ebitda_interst_cover_fy | round |
| `EBITDA_LESS_CAPEX_INTERST_COVER_TTM` | EBITDA Less CapEx Interest Coverage (TTM) | ebitda_less_capex_interst_cover_ttm | round |
| `EBITDA_LESS_CAPEX_INTERST_COVER_FY` | EBITDA Less CapEx Interest Coverage (FY) | ebitda_less_capex_interst_cover_fy | round |

### 20. Share & Buyback Metrics (15 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `TOTAL_SHARES_OUTSTANDING` | Total Shares Outstanding | total_shares_outstanding_fundamental | number_group |
| `SHARES_FLOAT` | Shares Float | float_shares_outstanding | number_group |
| `BOOK_VALUE_PER_SHARE_FQ` | Book Value per Share (MRQ) | book_value_per_share_fq | currency |
| `BOOK_TANGIBLE_PER_SHARE_FQ` | Tangible Book Value per Share (MRQ) | book_tangible_per_share_fq | currency |
| `BUYBACK_YIELD` | Buyback Yield % | buyback_yield | percent |
| `SHARE_BUYBACK_RATIO_FQ` | Share Buyback Ratio % (MRQ) | share_buyback_ratio_fq | percent |
| `SHARE_BUYBACK_RATIO_FY` | Share Buyback Ratio % (FY) | share_buyback_ratio_fy | percent |
| `WORKING_CAPITAL_PER_SHARE_FQ` | Working Capital per Share (MRQ) | working_capital_per_share_fq | currency |

### 21. Valuation Scores & Models (15 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `ALTMAN_Z_SCORE_TTM` | Altman Z-Score (TTM) | altman_z_score_ttm | round |
| `PIOTROSKI_F_SCORE_TTM` | Piotroski F-Score (TTM) | piotroski_f_score_ttm | round |
| `SLOAN_RATIO_TTM` | Sloan Ratio % (TTM) | sloan_ratio_ttm | percent |
| `ZMIJEWSKI_SCORE_TTM` | Zmijewski Score (TTM) | zmijewski_score_ttm | round |
| `NCAVPS_RATIO_FQ` | NCAV per Share (MRQ) | ncavps_ratio_fq | currency |
| `NCAVPS_RATIO_FY` | NCAV per Share (FY) | ncavps_ratio_fy | currency |

### 22. Operating Expense Ratios (10 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `RESEARCH_AND_DEVELOPMENT_RATIO_FY` | Research & development Ratio (FY) | research_and_dev_ratio_fy | percent |
| `RESEARCH_AND_DEVELOPMENT_RATIO_TTM` | Research & development Ratio (TTM) | research_and_dev_ratio_ttm | percent |
| `RESEARCH_AND_DEV_FY` | Research & Development (FY) | research_and_dev_fy | currency |
| `RESEARCH_AND_DEV_FQ` | Research & Development (MRQ) | research_and_dev_fq | currency |
| `SELLING_GENERAL_AND_ADMIN_EXPENSES_RATIO_FY` | Selling General & Admin expenses Ratio (FY) | sell_gen_admin_exp_other_ratio_fy | percent |
| `SELLING_GENERAL_AND_ADMIN_EXPENSES_RATIO_TTM` | Selling General & Admin expenses Ratio (TTM) | sell_gen_admin_exp_other_ratio_ttm | percent |

### 23. Classification & Metadata (15 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `SECTOR` | Sector | sector | text |
| `INDUSTRY` | Industry | industry | text |
| `COUNTRY` | Country | country | text |
| `EXCHANGE` | Exchange | exchange | text |
| `CURRENCY` | Currency | currency | text |
| `FUNDAMENTAL_CURRENCY_CODE` | Fundamental Currency Code | fundamental_currency_code | text |
| `TYPE` | Type | type | text |
| `SUBTYPE` | Subtype | subtype | text |
| `LOGOID` | Logoid | logoid | text |
| `NUMBER_OF_EMPLOYEES` | Number of Employees | number_of_employees | number_group |
| `NUMBER_OF_SHAREHOLDERS` | Number of Shareholders | number_of_shareholders | number_group |

### 24. Ratings & Recommendations (10 missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `TECHNICAL_RATING` | Technical Rating | Recommend.All | rating |
| `MOVING_AVERAGES_RATING` | Moving Averages Rating | Recommend.MA | rating |
| `OSCILLATORS_RATING` | Oscillators Rating | Recommend.Other | rating |
| `RECOMMENDATION_MARK` | Analyst Rating | recommendation_mark | round |

### 25. Other Advanced Metrics (15+ missing)

| Constant | Label | API Field Name | Format |
|----------|-------|----------------|--------|
| `SUSTAINABLE_GROWTH_RATE_TTM` | Sustainable Growth Rate (TTM) | sustainable_growth_rate_ttm | percent |
| `EFFECTIVE_INTEREST_RATE_ON_DEBT_TTM` | Effective Interest Rate on Debt (TTM) | effective_interest_rate_on_debt_ttm | percent |
| `EFFECTIVE_INTEREST_RATE_ON_DEBT_FY` | Effective Interest Rate on Debt (FY) | effective_interest_rate_on_debt_fy | percent |
| `PATTERN` | Pattern | candlestick | missing |
| `LAST_YEAR_REVENUE_FY` | Last Year Revenue (FY) | last_annual_revenue | currency |
| `UPCOMING_EARNINGS_DATE` | Upcoming Earnings Date | earnings_release_next_date | date |

## Implementation Notes

### Field Structure

Each field should be implemented using the BaseField class with this structure:

```typescript
FIELD_NAME: new BaseField('FIELD_NAME', {
  label: 'Human Readable Label',
  fieldName: 'api_field_name',
  format: 'format_type',
  interval: boolean,
  historical: boolean,
})
```

### Format Types

The following format types are supported:

- `currency` - Monetary values
- `percent` - Percentage values
- `float` - Floating point numbers
- `round` - Rounded numbers
- `number_group` - Grouped numbers (like volume)
- `text` - Text strings
- `date` - Date values
- `bool` - Boolean values
- `rating` - Rating values
- `recommendation` - Recommendation values
- `computed_recommendation` - Computed recommendation values
- `missing` - Fields that may not be fully supported by API

### Interval Support

Fields with `interval: true` support multiple timeframes using the `.with_interval()` method:
- `'1'` - 1 minute
- `'5'` - 5 minutes
- `'15'` - 15 minutes
- `'30'` - 30 minutes
- `'60'` - 1 hour
- `'120'` - 2 hours
- `'240'` - 4 hours
- `'1D'` - Daily (default)
- `'1W'` - Weekly
- `'1M'` - Monthly

### Historical Support

Fields with `historical: true` support historical lookback using the `.with_history()` method.

## Reference Files

- **Python Implementation:** `/Users/i324180/Development/github.com/tradingview-screener-api/temp_repo/tvscreener/field/stock.py`
- **Current TypeScript:** `/Users/i324180/Development/github.com/tradingview-screener-api/src/fields/StockField.ts`
- **Parsed Field Data:** `/tmp/fields_parsed.csv`

## Next Steps

1. Review this document to ensure all required fields are identified
2. Decide on implementation approach:
   - Manual implementation (one by one)
   - Script-based generation from CSV
   - Hybrid approach (generate scaffold, manual review)
3. Consider implementing in phases by priority/category
4. Add tests for new fields
5. Update documentation

## User-Requested Fields

The user specifically mentioned these fields as missing:

- ✅ **DIVIDEND_PAYOUT_RATIO_TTM** - Listed in Section 3 (Dividend Fields)
- ⚠️ **DIVIDEND_YIELD_FWD** - Already implemented in TypeScript as `DIVIDEND_YIELD_FWD`

Note: The `DIVIDEND_YIELD_FWD` field exists in the current implementation but uses `dividend_yield_forward` as the API field name, while the Python reference uses `dividend_yield_recent`. This may need alignment.
