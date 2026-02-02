// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  timeout: 30000,
  outputDir: 'test-results',
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    actionTimeout: 10000,
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'npm run dev -- --port 3000',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 120000,
  },
});
