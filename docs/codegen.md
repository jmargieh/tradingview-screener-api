# Code Generation

Generating field definitions from TradingView data.

## Overview

The code generation system scrapes TradingView to extract field metadata and generates TypeScript field definitions for all asset types.

## Field Generation Process

### 1. Scrape Field Data

Use Playwright to extract field information from TradingView:

```bash
npm run codegen:scrape
```

This creates JSON files in `src/codegen/data/`:

```
src/codegen/data/
├── stock.json      # Stock field metadata
├── crypto.json     # Crypto field metadata
├── forex.json      # Forex field metadata
├── bond.json       # Bond field metadata
├── futures.json    # Futures field metadata
└── coin.json       # Alt coin field metadata
```

### 2. Generate TypeScript Files

Generate field enums from JSON data:

```bash
npm run codegen:generate
```

Creates files in `src/fields/`:

```
src/fields/
├── StockField.ts   # ~4,000 stock fields
├── CryptoField.ts  # ~3,300 crypto fields
├── ForexField.ts   # ~3,000 forex fields
├── BondField.ts
├── FuturesField.ts
└── CoinField.ts
```

## Scraper Implementation

### Basic Scraper

```typescript
import { chromium } from 'playwright';

async function scrapeFields(assetType: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to TradingView screener
  await page.goto(`https://www.tradingview.com/screener/${assetType}/`);

  // Wait for field selector
  await page.waitForSelector('[data-role="field-selector"]');

  // Extract field data
  const fields = await page.evaluate(() => {
    const fieldElements = document.querySelectorAll('.field-item');
    const results = [];

    fieldElements.forEach(el => {
      const name = el.getAttribute('data-field-name');
      const label = el.textContent?.trim();
      const format = el.getAttribute('data-format');

      if (name && label) {
        results.push({ name, label, format });
      }
    });

    return results;
  });

  await browser.close();

  return fields;
}
```

### Enhanced Scraper

```typescript
interface FieldMetadata {
  name: string;
  label: string;
  fieldName: string;
  format: FieldFormat;
  interval: boolean;
  historical: boolean;
}

async function scrapeFieldsEnhanced(assetType: string): Promise<FieldMetadata[]> {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(`https://www.tradingview.com/screener/${assetType}/`, {
      waitUntil: 'networkidle',
    });

    // Open field selector
    await page.click('[data-role="field-selector-button"]');
    await page.waitForSelector('[data-role="field-list"]');

    // Extract all fields
    const fields = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('.field-item'));

      return items.map(item => ({
        name: item.getAttribute('data-name') || '',
        label: item.querySelector('.field-label')?.textContent || '',
        fieldName: item.getAttribute('data-field-name') || '',
        format: detectFormat(item),
        interval: item.hasAttribute('data-supports-interval'),
        historical: item.hasAttribute('data-supports-history'),
      }));
    });

    return fields;
  } finally {
    await browser.close();
  }
}

function detectFormat(element: Element): FieldFormat {
  const value = element.querySelector('.field-value')?.textContent || '';

  if (value.includes('$')) return 'currency';
  if (value.includes('%')) return 'percent';
  if (value.match(/^\d+$/)) return 'round';
  if (value.match(/^\d+\.\d+$/)) return 'float';
  if (value.match(/\d{1,3}(,\d{3})*$/)) return 'number_group';

  return 'text';
}
```

## Generator Implementation

### Template-Based Generator

```typescript
import * as fs from 'fs';
import * as path from 'path';

interface FieldData {
  name: string;
  metadata: FieldMetadata;
}

function generateFieldFile(
  assetType: string,
  fields: FieldData[]
): string {
  const className = `${assetType}Field`;

  let output = `// Auto-generated file - DO NOT EDIT
import { BaseField } from './BaseField';
import type { FieldMetadata } from '../types';

/**
 * ${assetType} screener fields
 * Generated from TradingView data
 * Total fields: ${fields.length}
 */
export const ${className} = {
`;

  // Generate field definitions
  for (const field of fields) {
    output += `  ${field.name}: new BaseField('${field.name}', ${JSON.stringify(field.metadata, null, 4)}),\n\n`;
  }

  output += `} as const;\n`;

  return output;
}

async function generateAllFields() {
  const assetTypes = ['stock', 'crypto', 'forex', 'bond', 'futures', 'coin'];

  for (const type of assetTypes) {
    // Read JSON data
    const dataPath = path.join(__dirname, 'data', `${type}.json`);
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    const fields: FieldData[] = JSON.parse(rawData);

    // Generate TypeScript file
    const output = generateFieldFile(
      type.charAt(0).toUpperCase() + type.slice(1),
      fields
    );

    // Write to file
    const outputPath = path.join(__dirname, '..', 'fields', `${type}Field.ts`);
    fs.writeFileSync(outputPath, output);

    console.log(`Generated ${outputPath} with ${fields.length} fields`);
  }
}

// Run generator
generateAllFields().catch(console.error);
```

### Template System

```typescript
interface TemplateData {
  className: string;
  assetType: string;
  fieldCount: number;
  fields: FieldData[];
}

function applyTemplate(data: TemplateData): string {
  return `// Auto-generated - DO NOT EDIT
import { BaseField } from './BaseField';

/**
 * ${data.assetType} screener fields
 * Total: ${data.fieldCount} fields
 */
export const ${data.className} = {
${data.fields.map(field => generateFieldCode(field)).join('\n\n')}
} as const;
`;
}

function generateFieldCode(field: FieldData): string {
  return `  /**
   * ${field.metadata.label}
   * Format: ${field.metadata.format}
   */
  ${field.name}: new BaseField('${field.name}', ${JSON.stringify(field.metadata, null, 4)})`;
}
```

## Field Format Detection

### Automatic Format Detection

```typescript
function detectFieldFormat(sampleValue: string): FieldFormat {
  // Currency: $1,234.56
  if (/^\$?\d{1,3}(,\d{3})*(\.\d{2})?$/.test(sampleValue)) {
    return 'currency';
  }

  // Percent: 12.34%
  if (/^-?\d+(\.\d+)?%$/.test(sampleValue)) {
    return 'percent';
  }

  // Float: 123.45
  if (/^-?\d+\.\d+$/.test(sampleValue)) {
    return 'float';
  }

  // Round: 123
  if (/^-?\d+$/.test(sampleValue)) {
    return 'round';
  }

  // Number group: 1,234,567
  if (/^\d{1,3}(,\d{3})+$/.test(sampleValue)) {
    return 'number_group';
  }

  // Date: 2024-01-01
  if (/^\d{4}-\d{2}-\d{2}$/.test(sampleValue)) {
    return 'date';
  }

  // Boolean: true/false
  if (/^(true|false)$/i.test(sampleValue)) {
    return 'bool';
  }

  // Rating: Strong Buy, Buy, etc.
  const ratings = ['Strong Buy', 'Buy', 'Hold', 'Sell', 'Strong Sell'];
  if (ratings.includes(sampleValue)) {
    return 'rating';
  }

  // Default to text
  return 'text';
}
```

## Data Validation

### Validate Field Data

```typescript
function validateFieldData(fields: FieldData[]): boolean {
  for (const field of fields) {
    // Check required properties
    if (!field.name || !field.metadata) {
      console.error(`Invalid field: ${JSON.stringify(field)}`);
      return false;
    }

    // Check metadata
    const { label, fieldName, format } = field.metadata;

    if (!label || !fieldName || !format) {
      console.error(`Invalid metadata for ${field.name}`);
      return false;
    }

    // Validate format
    const validFormats: FieldFormat[] = [
      'currency', 'percent', 'float', 'round',
      'number_group', 'text', 'date', 'bool',
      'rating', 'recommendation', 'computed_recommendation',
    ];

    if (!validFormats.includes(format)) {
      console.error(`Invalid format for ${field.name}: ${format}`);
      return false;
    }
  }

  return true;
}
```

### Deduplicate Fields

```typescript
function deduplicateFields(fields: FieldData[]): FieldData[] {
  const seen = new Set<string>();
  const unique: FieldData[] = [];

  for (const field of fields) {
    if (!seen.has(field.name)) {
      seen.add(field.name);
      unique.push(field);
    } else {
      console.warn(`Duplicate field: ${field.name}`);
    }
  }

  return unique;
}
```

## Incremental Updates

### Update Existing Fields

```typescript
async function updateFields(assetType: string) {
  // Read existing data
  const existingPath = path.join(__dirname, 'data', `${assetType}.json`);
  const existing: FieldData[] = JSON.parse(
    fs.readFileSync(existingPath, 'utf-8')
  );

  // Scrape new data
  const newFields = await scrapeFields(assetType);

  // Merge: keep existing, add new
  const merged = [...existing];
  const existingNames = new Set(existing.map(f => f.name));

  for (const newField of newFields) {
    if (!existingNames.has(newField.name)) {
      merged.push(newField);
      console.log(`Added new field: ${newField.name}`);
    }
  }

  // Write updated data
  fs.writeFileSync(
    existingPath,
    JSON.stringify(merged, null, 2)
  );

  // Regenerate TypeScript file
  const output = generateFieldFile(assetType, merged);
  const outputPath = path.join(__dirname, '..', 'fields', `${assetType}Field.ts`);
  fs.writeFileSync(outputPath, output);
}
```

## CLI Tool

### Code Generation CLI

```typescript
#!/usr/bin/env node

import * as yargs from 'yargs';

const argv = yargs
  .command('scrape [type]', 'Scrape field data from TradingView', {
    type: {
      describe: 'Asset type (stock, crypto, forex, etc.)',
      default: 'all',
    },
  })
  .command('generate [type]', 'Generate TypeScript field files', {
    type: {
      describe: 'Asset type to generate',
      default: 'all',
    },
  })
  .command('update [type]', 'Update existing field data', {
    type: {
      describe: 'Asset type to update',
      default: 'all',
    },
  })
  .help()
  .argv;

async function main() {
  const command = argv._[0];
  const type = argv.type as string;

  switch (command) {
    case 'scrape':
      if (type === 'all') {
        await scrapeAllAssetTypes();
      } else {
        await scrapeFields(type);
      }
      break;

    case 'generate':
      if (type === 'all') {
        await generateAllFields();
      } else {
        await generateField(type);
      }
      break;

    case 'update':
      if (type === 'all') {
        await updateAllFields();
      } else {
        await updateFields(type);
      }
      break;

    default:
      console.error('Unknown command:', command);
      process.exit(1);
  }
}

main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
```

### Usage

```bash
# Scrape all asset types
npm run codegen:scrape

# Scrape specific type
npm run codegen:scrape -- stock

# Generate all fields
npm run codegen:generate

# Generate specific type
npm run codegen:generate -- crypto

# Update existing data
npm run codegen:update
```

## Testing Generated Code

### Validate Generated Files

```typescript
import { describe, it, expect } from 'vitest';
import { StockField } from '../src/fields/StockField';

describe('Generated Fields', () => {
  it('should have all required fields', () => {
    expect(StockField.PRICE).toBeDefined();
    expect(StockField.VOLUME).toBeDefined();
    expect(StockField.MARKET_CAPITALIZATION).toBeDefined();
  });

  it('should have correct metadata', () => {
    expect(StockField.PRICE.metadata.format).toBe('currency');
    expect(StockField.VOLUME.metadata.format).toBe('number_group');
  });

  it('should support comparison operators', () => {
    const condition = StockField.PRICE.gt(100);
    expect(condition).toBeDefined();
  });
});
```

## Best Practices

1. **Version Control Data**: Commit JSON data files to git
2. **Manual Review**: Review generated code before committing
3. **Incremental Updates**: Update existing data, don't replace
4. **Validation**: Always validate scraped data
5. **Documentation**: Document field meanings
6. **Consistent Naming**: Use consistent field naming conventions
7. **Error Handling**: Handle scraping errors gracefully

## Next Steps

- [Testing Guide](testing.md) - Testing generated code
- [Contributing](contributing.md) - Contribution guidelines
- [Architecture](architecture.md) - Project structure
