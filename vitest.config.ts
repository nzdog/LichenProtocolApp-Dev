import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      statements: 60,
      branches: 50,
      functions: 60,
      lines: 60,
    },
  },
});
