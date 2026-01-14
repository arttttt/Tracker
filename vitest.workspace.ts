import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    extends: './vitest.config.ts',
    test: {
      name: 'shared',
      root: './packages/shared',
      environment: 'node',
    },
  },
  {
    extends: './vitest.config.ts',
    test: {
      name: 'backend',
      root: './packages/backend',
      environment: 'node',
    },
  },
  {
    extends: './packages/frontend/vite.config.ts',
    test: {
      name: 'frontend',
      root: './packages/frontend',
      environment: 'jsdom',
    },
  },
]);
