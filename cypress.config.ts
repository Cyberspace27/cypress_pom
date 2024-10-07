import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // This will make Cypress pick up both JavaScript and TypeScript test files
    specPattern: "cypress/e2e/**/*.{js,ts}",
  },
});
