# Beautification

Terminal styling and colorization for screener output.

## Overview

The `beautify` module provides ANSI color codes and styling functions to make terminal output more readable and visually appealing.

## Color Constants

### Basic Colors

```typescript
import { RED, GREEN, YELLOW, BLUE, MAGENTA, CYAN, WHITE, GRAY } from 'tradingview-screener';

console.log(RED + 'Error message' + RESET);
console.log(GREEN + 'Success message' + RESET);
console.log(YELLOW + 'Warning message' + RESET);
console.log(BLUE + 'Info message' + RESET);
```

### Style Constants

```typescript
import { BOLD, UNDERLINE, RESET } from 'tradingview-screener';

console.log(BOLD + 'Bold text' + RESET);
console.log(UNDERLINE + 'Underlined text' + RESET);
console.log(BOLD + GREEN + 'Bold green text' + RESET);
```

### All Available Constants

```typescript
// Colors
export const RED = '\x1b[31m';
export const GREEN = '\x1b[32m';
export const YELLOW = '\x1b[33m';
export const BLUE = '\x1b[34m';
export const MAGENTA = '\x1b[35m';
export const CYAN = '\x1b[36m';
export const WHITE = '\x1b[37m';
export const GRAY = '\x1b[90m';

// Styles
export const BOLD = '\x1b[1m';
export const UNDERLINE = '\x1b[4m';
export const RESET = '\x1b[0m';
```

## Colorization Functions

### colorizeNumber()

Colorize numbers based on their value (positive/negative).

```typescript
import { colorizeNumber } from 'tradingview-screener';

console.log(colorizeNumber(5.67));     // Green (positive)
console.log(colorizeNumber(-2.34));    // Red (negative)
console.log(colorizeNumber(0));        // White (neutral)
```

#### Parameters

```typescript
colorizeNumber(value: number, decimals?: number): string
```

- `value` - Number to colorize
- `decimals` - Decimal places (default: 2)

#### Examples

```typescript
// Positive numbers (green)
colorizeNumber(10.5);          // "\x1b[32m10.50\x1b[0m"
colorizeNumber(0.25);          // "\x1b[32m0.25\x1b[0m"

// Negative numbers (red)
colorizeNumber(-5.25);         // "\x1b[31m-5.25\x1b[0m"
colorizeNumber(-100);          // "\x1b[31m-100.00\x1b[0m"

// Zero (white)
colorizeNumber(0);             // "\x1b[37m0.00\x1b[0m"

// Custom decimals
colorizeNumber(5.678, 1);      // "\x1b[32m5.7\x1b[0m"
colorizeNumber(5.678, 3);      // "\x1b[32m5.678\x1b[0m"
```

### colorizePercent()

Colorize percentage values.

```typescript
import { colorizePercent } from 'tradingview-screener';

console.log(colorizePercent(5.67));    // Green "+5.67%"
console.log(colorizePercent(-2.34));   // Red "-2.34%"
console.log(colorizePercent(0));       // White "0.00%"
```

#### Parameters

```typescript
colorizePercent(value: number, decimals?: number): string
```

- `value` - Percentage to colorize
- `decimals` - Decimal places (default: 2)

#### Examples

```typescript
// Positive (green with +)
colorizePercent(5.67);         // "\x1b[32m+5.67%\x1b[0m"
colorizePercent(0.25);         // "\x1b[32m+0.25%\x1b[0m"

// Negative (red)
colorizePercent(-2.34);        // "\x1b[31m-2.34%\x1b[0m"
colorizePercent(-10.5);        // "\x1b[31m-10.50%\x1b[0m"

// Zero (white)
colorizePercent(0);            // "\x1b[37m0.00%\x1b[0m"

// Custom decimals
colorizePercent(5.678, 1);     // "\x1b[32m+5.7%\x1b[0m"
colorizePercent(5.678, 3);     // "\x1b[32m+5.678%\x1b[0m"
```

### colorizeRating()

Colorize rating values (Strong Buy, Buy, Hold, Sell, Strong Sell).

```typescript
import { colorizeRating } from 'tradingview-screener';

console.log(colorizeRating('Strong Buy'));  // Green
console.log(colorizeRating('Buy'));         // Green
console.log(colorizeRating('Hold'));        // Yellow
console.log(colorizeRating('Sell'));        // Red
console.log(colorizeRating('Strong Sell')); // Red
```

#### Rating Colors

```typescript
'Strong Buy'  → GREEN
'Buy'         → GREEN
'Hold'        → YELLOW
'Sell'        → RED
'Strong Sell' → RED
```

#### Examples

```typescript
colorizeRating('Strong Buy');   // "\x1b[32mStrong Buy\x1b[0m"
colorizeRating('Buy');          // "\x1b[32mBuy\x1b[0m"
colorizeRating('Hold');         // "\x1b[33mHold\x1b[0m"
colorizeRating('Sell');         // "\x1b[31mSell\x1b[0m"
colorizeRating('Strong Sell');  // "\x1b[31mStrong Sell\x1b[0m"
colorizeRating('Unknown');      // "\x1b[37mUnknown\x1b[0m" (default)
```

### colorizeRecommendation()

Colorize technical recommendation values.

```typescript
import { colorizeRecommendation } from 'tradingview-screener';

console.log(colorizeRecommendation('Strong Buy'));
console.log(colorizeRecommendation('Buy'));
console.log(colorizeRecommendation('Neutral'));
console.log(colorizeRecommendation('Sell'));
console.log(colorizeRecommendation('Strong Sell'));
```

Same color scheme as `colorizeRating()`.

## Practical Examples

### Colorized Stock Table

```typescript
const results = await screener
  .select(
    StockField.NAME,
    StockField.PRICE,
    StockField.CHANGE_PERCENT,
    StockField.VOLUME
  )
  .get();

results.data.forEach(row => {
  console.log(
    BOLD + row.name + RESET,
    formatCurrency(row.close),
    colorizePercent(row.change_abs),
    millify(row.volume)
  );
});
```

Output:
```
AAPL $150.25 +2.34% 50.2M
GOOGL $2,800.50 -1.25% 1.5M
TSLA $750.00 +5.67% 25.3M
```

### Colorized Screener Results

```typescript
function displayColorized(results: ScreenerResult) {
  console.log(BOLD + BLUE + '\nTop Stocks\n' + RESET);

  results.data.forEach((row, i) => {
    console.log(
      `${i + 1}. ${BOLD}${row.name}${RESET}`,
      `Price: ${formatCurrency(row.close)}`,
      `Change: ${colorizePercent(row.change_abs)}`,
      `Volume: ${millify(row.volume)}`
    );
  });

  console.log(GRAY + `\nTotal: ${results.totalCount} results` + RESET);
}
```

### Live Price Monitor

```typescript
for await (const data of screener.stream({ interval: 5000 })) {
  if (data) {
    console.clear();
    console.log(BOLD + CYAN + '═'.repeat(60) + RESET);
    console.log(BOLD + `  Live Prices - ${new Date().toLocaleTimeString()}` + RESET);
    console.log(BOLD + CYAN + '═'.repeat(60) + RESET);

    data.data.forEach(row => {
      console.log(
        BOLD + row.name.padEnd(10) + RESET,
        formatCurrency(row.close).padEnd(12),
        colorizePercent(row.change_abs).padEnd(20),
        GRAY + millify(row.volume) + RESET
      );
    });
  }
}
```

### Alert System with Colors

```typescript
function alert(message: string, level: 'info' | 'success' | 'warning' | 'error') {
  const colors = {
    info: BLUE,
    success: GREEN,
    warning: YELLOW,
    error: RED,
  };

  const symbols = {
    info: 'ℹ',
    success: '✓',
    warning: '⚠',
    error: '✗',
  };

  console.log(
    colors[level] + BOLD + symbols[level] + RESET,
    colors[level] + message + RESET
  );
}

// Usage
alert('Query completed successfully', 'success');
alert('Rate limit approaching', 'warning');
alert('Failed to fetch data', 'error');
alert('Processing results...', 'info');
```

### Gradient Effect

```typescript
function gradientText(text: string): string {
  const colors = [RED, YELLOW, GREEN, CYAN, BLUE, MAGENTA];
  const chars = text.split('');

  return chars
    .map((char, i) => {
      const colorIndex = Math.floor((i / chars.length) * colors.length);
      return colors[colorIndex] + char;
    })
    .join('') + RESET;
}

console.log(gradientText('TradingView Screener'));
```

### Progress Bar

```typescript
function progressBar(current: number, total: number, width: number = 40): string {
  const percent = current / total;
  const filled = Math.floor(width * percent);
  const empty = width - filled;

  const bar =
    GREEN + '█'.repeat(filled) +
    GRAY + '░'.repeat(empty) +
    RESET;

  const percentText = (percent * 100).toFixed(1) + '%';

  return `${bar} ${BOLD}${percentText}${RESET}`;
}

// Usage
console.log(progressBar(50, 100));   // 50%
console.log(progressBar(75, 100));   // 75%
console.log(progressBar(100, 100));  // 100%
```

## Conditional Colorization

### Threshold-Based Colors

```typescript
function colorizeByThreshold(value: number, thresholds: {
  high: number;
  medium: number;
  low: number;
}): string {
  let color: string;

  if (value >= thresholds.high) {
    color = GREEN;
  } else if (value >= thresholds.medium) {
    color = YELLOW;
  } else {
    color = RED;
  }

  return color + value.toFixed(2) + RESET;
}

// Usage: Colorize volume
colorizeByThreshold(1_000_000, {
  high: 1_000_000,
  medium: 500_000,
  low: 0,
});
```

### Range-Based Colors

```typescript
function colorizeInRange(
  value: number,
  min: number,
  max: number,
  inRangeColor: string = GREEN,
  outRangeColor: string = RED
): string {
  const color = value >= min && value <= max ? inRangeColor : outRangeColor;
  return color + value.toFixed(2) + RESET;
}

// Usage: RSI indicator (healthy range 30-70)
colorizeInRange(50, 30, 70);  // Green (in range)
colorizeInRange(85, 30, 70);  // Red (overbought)
colorizeInRange(20, 30, 70);  // Red (oversold)
```

## Terminal Detection

### Check Color Support

```typescript
import { supportsColor } from 'tradingview-screener';

if (supportsColor()) {
  console.log(GREEN + 'Colors are supported!' + RESET);
} else {
  console.log('Colors not supported, using plain text');
}
```

### Conditional Formatting

```typescript
function safeColorize(text: string, color: string): string {
  return supportsColor() ? color + text + RESET : text;
}

// Usage
console.log(safeColorize('Success', GREEN));
```

## Custom Themes

### Define Theme

```typescript
interface Theme {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  muted: string;
}

const darkTheme: Theme = {
  primary: CYAN,
  secondary: BLUE,
  success: GREEN,
  warning: YELLOW,
  error: RED,
  muted: GRAY,
};

const lightTheme: Theme = {
  primary: BLUE,
  secondary: MAGENTA,
  success: GREEN,
  warning: YELLOW,
  error: RED,
  muted: WHITE,
};
```

### Apply Theme

```typescript
function formatWithTheme(results: ScreenerResult, theme: Theme) {
  console.log(theme.primary + BOLD + 'Screener Results' + RESET);

  results.data.forEach(row => {
    console.log(
      theme.secondary + row.name + RESET,
      formatCurrency(row.close),
      row.change_abs > 0
        ? theme.success + '+' + row.change_abs + '%' + RESET
        : theme.error + row.change_abs + '%' + RESET
    );
  });

  console.log(theme.muted + `Total: ${results.totalCount}` + RESET);
}
```

## Best Practices

### 1. Always Reset Colors

```typescript
// Good: Reset after color
console.log(GREEN + 'Success' + RESET);

// Bad: No reset (affects subsequent text)
console.log(GREEN + 'Success');
console.log('This will also be green!');
```

### 2. Check Terminal Support

```typescript
// Good: Check support first
if (supportsColor()) {
  console.log(GREEN + 'Colorized' + RESET);
} else {
  console.log('Plain text');
}

// Risky: Assume support
console.log(GREEN + 'Colorized' + RESET);
```

### 3. Use Semantic Colors

```typescript
// Good: Semantic meaning
console.log(RED + 'Error: Failed to fetch' + RESET);
console.log(GREEN + 'Success: Query complete' + RESET);
console.log(YELLOW + 'Warning: Rate limit' + RESET);

// Confusing: Wrong colors
console.log(GREEN + 'Error occurred' + RESET);
console.log(RED + 'Success!' + RESET);
```

### 4. Combine Styles Carefully

```typescript
// Good: Readable combination
console.log(BOLD + GREEN + 'Important Success' + RESET);

// Hard to read: Too many styles
console.log(BOLD + UNDERLINE + GREEN + RED + 'Text' + RESET);
```

### 5. Performance Considerations

```typescript
// Good: Minimize color changes
const prefix = GREEN + '✓' + RESET;
results.forEach(r => console.log(prefix, r.name));

// Less efficient: Recreate colors each time
results.forEach(r => console.log(GREEN + '✓' + RESET, r.name));
```

## Accessibility

### High Contrast Mode

```typescript
function highContrastColorize(value: number): string {
  if (!supportsColor()) return value.toString();

  if (value > 0) return BOLD + GREEN + value + RESET;
  if (value < 0) return BOLD + RED + value + RESET;
  return BOLD + WHITE + value + RESET;
}
```

### Screen Reader Friendly

```typescript
function accessibleFormat(value: number): string {
  const colored = colorizePercent(value);
  const plain = `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;

  // Return colored for visual, but log plain for screen readers
  return supportsColor() ? colored : plain;
}
```

## Next Steps

- [Formatting](formatting.md) - Number formatting
- [Type System](types.md) - TypeScript types
- [Basic Usage](../basic-usage.md) - Core concepts
