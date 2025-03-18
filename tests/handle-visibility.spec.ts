import { test, expect } from '@playwright/test';

//Handling Visibility in Playwright
// https://dev.to/playwright/handling-visibility-in-playwright-getbytext-vs-getbyrole-2ni6


test('has title', async ({ page }) => {
    await page.goto('https://senurafdo.github.io/forTestingWorld/');

  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/My Personal Web Page/);
  });

  test('find submit button', async ({ page }) => {
    await page.goto('https://senurafdo.github.io/forTestingWorld/');
   // await expect(page.getByText('Submit')).toBeVisible();
    await expect(page.getByRole('button' , { name: 'Submit'})).toBeVisible();
  
  });

  test('Explicitly Filtering ', async ({ page }) => {
    await page.goto('https://senurafdo.github.io/forTestingWorld/');
    ///await expect(page.getByText('Submit').filter(visible: true)).toBeVisible();
   // await page.getByText('Submit').filter({ visible: true }).click();

  });

