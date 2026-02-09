import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'mcp/server': 'src/mcp/server.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  target: 'es2022',
  outDir: 'dist',
  shims: true,
  banner: {
    js: '#!/usr/bin/env node',
  },
  esbuildOptions(options) {
    options.banner = {
      js: '#!/usr/bin/env node',
    };
  },
});
