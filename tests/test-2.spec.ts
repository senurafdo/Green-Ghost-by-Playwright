import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await page.getByRole('link', { name: 'Emulation' }).click();
  await page.getByRole('link', { name: 'isMobile', exact: true }).click();
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'GitHub repository' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Issues 732' }).click();
});