# Contributing

Guide for contributing to the TradingView Screener API project.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Git
- TypeScript knowledge
- Familiarity with screener concepts

### Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/tradingview-screener-api.git
cd tradingview-screener-api

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL_OWNER/tradingview-screener-api.git
```

### Install Dependencies

```bash
npm install
```

### Build the Project

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### Branch Naming

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions/updates

### 2. Make Changes

Follow the coding standards and write tests for new functionality.

### 3. Test Your Changes

```bash
# Run all tests
npm test

# Run specific test file
npm test -- path/to/test.test.ts

# Run with coverage
npm run test:coverage

# Type check
npm run type-check
```

### 4. Commit Changes

Use conventional commit messages:

```bash
git add .
git commit -m "feat: add new screening feature"
# or
git commit -m "fix: resolve filter validation issue"
# or
git commit -m "docs: update API documentation"
```

#### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Example:**
```
feat(screener): add support for custom time intervals

- Add withCustomInterval() method to BaseField
- Update FieldWithInterval to support custom intervals
- Add tests for custom interval functionality

Closes #123
```

### 5. Push Changes

```bash
git push origin feature/your-feature-name
```

### 6. Create Pull Request

1. Go to GitHub and create a Pull Request
2. Fill out the PR template
3. Link related issues
4. Wait for review

## Code Standards

### TypeScript Style

```typescript
// Use TypeScript strict mode
// Explicit return types for public APIs
export function createScreener(): StockScreener {
  return new StockScreener();
}

// Use const for immutable variables
const maxResults = 150;

// Use descriptive names
function validateMarketCapitalization(value: number): boolean {
  return value > 0;
}

// Avoid any when possible
interface ScreenerOptions {
  market?: string;
  limit?: number;
}
```

### File Organization

```
src/
├── index.ts              # Main exports
├── screeners/
│   ├── BaseScreener.ts   # One class per file
│   └── StockScreener.ts
├── fields/
│   ├── BaseField.ts
│   └── StockField.ts
└── types/
    └── index.ts          # Shared types
```

### Naming Conventions

- **Classes**: PascalCase (`StockScreener`, `BaseField`)
- **Functions**: camelCase (`createScreener`, `validateField`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RESULTS`, `API_URL`)
- **Interfaces**: PascalCase with 'I' prefix optional (`ScreenerResult`)
- **Types**: PascalCase (`FieldFormat`, `FilterOperator`)
- **Files**: PascalCase for classes, camelCase for utilities

### Documentation

```typescript
/**
 * Creates a screener for stocks.
 *
 * @param options - Configuration options
 * @returns A new StockScreener instance
 *
 * @example
 * ```typescript
 * const screener = createStockScreener({ market: 'america' });
 * ```
 */
export function createStockScreener(options?: ScreenerOptions): StockScreener {
  return new StockScreener(options);
}
```

## Testing Guidelines

### Test Structure

```typescript
import { describe, it, expect } from 'vitest';
import { StockScreener, StockField } from '../src';

describe('StockScreener', () => {
  describe('where()', () => {
    it('should add filter condition', () => {
      const screener = new StockScreener();
      screener.where(StockField.PRICE.gt(100));

      const filters = screener['filters'];
      expect(filters).toHaveLength(1);
      expect(filters[0].operation).toBe('greater');
    });

    it('should handle multiple conditions', () => {
      const screener = new StockScreener();
      screener
        .where(StockField.PRICE.gt(100))
        .where(StockField.VOLUME.gte(1_000_000));

      expect(screener['filters']).toHaveLength(2);
    });
  });
});
```

### Test Coverage

Aim for 80%+ coverage:

```bash
npm run test:coverage
```

### Integration Tests

Mock HTTP requests for integration tests:

```typescript
import { vi } from 'vitest';

describe('StockScreener Integration', () => {
  it('should fetch stock data', async () => {
    const mockData = {
      data: [{ symbol: 'AAPL', close: 150 }],
      totalCount: 1,
    };

    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockData,
    } as Response);

    const screener = new StockScreener();
    const results = await screener.get();

    expect(results.data).toEqual(mockData.data);
  });
});
```

## Documentation

### README Updates

Update README.md for:
- New features
- Breaking changes
- Usage examples

### API Documentation

Update docs/ for:
- New methods
- Changed behavior
- Examples

### Code Comments

```typescript
// Good: Explain why, not what
// Calculate Graham Number to determine intrinsic value
const grahamNumber = Math.sqrt(22.5 * eps * bvps);

// Bad: State the obvious
// Set the price to 100
const price = 100;
```

## Pull Request Guidelines

### PR Checklist

- [ ] Tests pass (`npm test`)
- [ ] Code follows style guide
- [ ] Documentation updated
- [ ] Commit messages follow convention
- [ ] No breaking changes (or documented)
- [ ] Changelog updated (for releases)

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Related Issues
Closes #123

## Screenshots (if applicable)
```

### Review Process

1. Automated tests run
2. Code review by maintainer
3. Requested changes addressed
4. Approval and merge

## Reporting Issues

### Bug Reports

Include:
- Description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Version information
- Code example

**Template:**
```markdown
**Describe the bug**
A clear description of the bug.

**To Reproduce**
Steps to reproduce:
1. Create screener
2. Add filter with...
3. Call get()
4. See error

**Expected behavior**
Should return filtered results

**Code example**
```typescript
const screener = new StockScreener();
screener.where(StockField.PRICE.gt(100));
await screener.get();
```

**Environment**
- Node version: 18.x
- Package version: 1.0.0
- OS: macOS
```

### Feature Requests

Include:
- Use case
- Proposed solution
- Alternatives considered
- Examples

## Development Tools

### VS Code Extensions

Recommended:
- ESLint
- Prettier
- TypeScript Vue Plugin (TSVue)
- Jest Runner
- GitLens

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Release Process

### Versioning

Follow Semantic Versioning (SemVer):
- MAJOR: Breaking changes
- MINOR: New features (backward compatible)
- PATCH: Bug fixes

### Release Checklist

- [ ] All tests pass
- [ ] Documentation updated
- [ ] CHANGELOG updated
- [ ] Version bumped
- [ ] Git tag created
- [ ] Published to npm

## Community

### Code of Conduct

Be respectful, inclusive, and professional.

### Communication

- GitHub Issues: Bug reports, feature requests
- GitHub Discussions: Questions, ideas
- Pull Requests: Code contributions

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)

## Getting Help

- Check existing documentation
- Search existing issues
- Ask in GitHub Discussions
- Review example code

Thank you for contributing!
