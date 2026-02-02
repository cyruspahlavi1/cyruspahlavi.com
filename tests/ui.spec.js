const path = require('path');
const { test, expect } = require('@playwright/test');

const pages = [
  { name: 'home', file: 'index.html', locator: 'h1.hero-title' },
  { name: 'statements', file: 'statements.html', locator: '.page-title' },
];

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 834, height: 1112 },
  { name: 'laptop', width: 1280, height: 800 },
  { name: 'desktop', width: 1440, height: 900 },
];

for (const viewport of viewports) {
  test.describe(`${viewport.name} viewport`, () => {
    test.use({ viewport });

    for (const pageMeta of pages) {
      test(`renders ${pageMeta.name} without horizontal overflow`, async ({ page }) => {
        const filePath = path.resolve(__dirname, '..', pageMeta.file);
        await page.goto(`file://${filePath}`);
        await expect(page.locator(pageMeta.locator)).toBeVisible();

        const noOverflow = await page.evaluate(() => {
          const doc = document.documentElement;
          return doc.scrollWidth <= window.innerWidth + 1;
        });
        expect(noOverflow).toBeTruthy();
      });
    }

    test('portrait is visible on home', async ({ page }) => {
      const filePath = path.resolve(__dirname, '..', 'index.html');
      await page.goto(`file://${filePath}`);
      await expect(page.locator('.portrait-frame')).toBeVisible();
    });
  });
}
