# Installation

## Requirements

- **Node.js**: 18.0.0 or higher
- **npm**: 7.0.0 or higher (or yarn/pnpm equivalent)
- **TypeScript**: 5.0.0 or higher (optional, for TypeScript projects)

## NPM Installation

```bash
npm install tradingview-screener
```

## Yarn Installation

```bash
yarn add tradingview-screener
```

## PNPM Installation

```bash
pnpm add tradingview-screener
```

## TypeScript Support

The library is written in TypeScript and includes full type definitions. No additional `@types` package is needed.

```typescript
// TypeScript works out of the box
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener(); // Fully typed!
```

## ES Modules vs CommonJS

The package supports both ES Modules and CommonJS:

### ES Modules (Recommended)

```javascript
import { StockScreener, StockField } from 'tradingview-screener';
```

### CommonJS

```javascript
const { StockScreener, StockField } = require('tradingview-screener');
```

## Verify Installation

Create a test file to verify installation:

```typescript
// test.ts
import { StockScreener, StockField } from 'tradingview-screener';

const screener = new StockScreener();
screener.select(StockField.NAME, StockField.PRICE).setRange(0, 5);

screener.get().then(results => {
  console.log('Installation successful!');
  console.log(`Found ${results.totalCount} stocks`);
  console.table(results.data);
});
```

Run it:

```bash
# With tsx (recommended for TypeScript)
npm install -g tsx
tsx test.ts

# Or compile first
npx tsc test.ts
node test.js
```

## Development Installation

To contribute to the library or use the latest development version:

```bash
# Clone the repository
git clone https://github.com/your-org/tradingview-screener.git
cd tradingview-screener

# Install dependencies
npm install

# Build the library
npm run build

# Run tests
npm test

# Run examples
npm run example:quickstart
```

## Troubleshooting

### Module Not Found

If you get `Cannot find module 'tradingview-screener'`:

1. Verify installation: `npm list tradingview-screener`
2. Clear cache: `npm cache clean --force`
3. Reinstall: `rm -rf node_modules package-lock.json && npm install`

### TypeScript Errors

If TypeScript can't find types:

1. Ensure `tsconfig.json` has proper module resolution:
   ```json
   {
     "compilerOptions": {
       "moduleResolution": "bundler",
       "esModuleInterop": true
     }
   }
   ```

2. Check that types are included: `ls node_modules/tradingview-screener/dist/*.d.ts`

### Import Errors

For ES Module import errors:

1. Add `"type": "module"` to your `package.json`
2. Or use `.mjs` file extension
3. Or configure your bundler appropriately

### Node Version Issues

If you get errors about unsupported Node features:

```bash
# Check your Node version
node --version

# Should be v18.0.0 or higher
# Upgrade if needed:
nvm install 18  # if using nvm
# or download from nodejs.org
```

## Next Steps

- [Quick Start Guide](quickstart.md) - Build your first screener
- [Basic Usage](basic-usage.md) - Learn core concepts
- [Stock Screener](screeners/stock.md) - Detailed stock screening guide

## Optional Dependencies

### For MCP Server

If using the MCP server functionality:

```bash
npm install @modelcontextprotocol/sdk
```

### For Code Generation

If generating field definitions:

```bash
npm install --save-dev playwright
```

### For Development

For contributing or local development:

```bash
npm install --save-dev \
  typescript \
  vitest \
  tsup \
  tsx \
  @types/node
```
