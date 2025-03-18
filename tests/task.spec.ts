import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('url'); // correct url is commmented
  await page.locator('#skeletonAd').click({
    position: {
      x: 574,
      y: 373
    }
  });
});