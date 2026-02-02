const { test, expect } = require('@playwright/test');

const pages = [
  { name: 'home', path: '/', locator: 'h1' },
  { name: 'statements', path: '/statements', locator: 'h1' },
  { name: 'biography', path: '/biography', locator: 'h1' },
  { name: 'strategic-priorities', path: '/strategic-priorities', locator: 'h1' },
  { name: 'enduring-legacy', path: '/enduring-legacy', locator: 'h1' },
  { name: 'initiatives-and-partners', path: '/initiatives-and-partners', locator: 'h1' },
  { name: 'works', path: '/works', locator: 'h1' },
  { name: 'contact', path: '/contact', locator: 'h1' },
  { name: 'privacy', path: '/privacy', locator: 'h1' },
  { name: 'terms', path: '/terms', locator: 'h1' },
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
      test(`renders ${pageMeta.name} without horizontal overflow`, async ({ page }, testInfo) => {
        await page.goto(pageMeta.path, { waitUntil: 'domcontentloaded' });
        await expect(page.locator(pageMeta.locator)).toBeVisible();

        const screenshotName = `${pageMeta.name}-${viewport.name}.png`;
        await page.screenshot({ path: testInfo.outputPath(screenshotName), fullPage: true });

        const noOverflow = await page.evaluate(() => {
          const doc = document.documentElement;
          return doc.scrollWidth <= window.innerWidth + 1;
        });
        expect(noOverflow).toBeTruthy();
      });
    }

    test('portrait is visible on home', async ({ page }) => {
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      await expect(page.locator('img[alt*=\"Portrait\"]')).toBeVisible();
    });
  });
}
