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
    baseURL: 'http://127.0.0.1:3001',
  },
  webServer: {
    command: 'NEXT_DISABLE_TURBOPACK=1 npm run dev -- --hostname 127.0.0.1 --port 3001',
    url: 'http://127.0.0.1:3001',
    reuseExistingServer: true,
    timeout: 120000,
  },
});
