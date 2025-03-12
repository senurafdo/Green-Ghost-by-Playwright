import { test, expect } from '@playwright/test';

test('login page', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  //await page.locator('[data-test="nav-sign-in"]').click();
  await page.getByTestId('nav-sign-in').click();
  await page.locator('[data-test="email"]').fill('admin@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="nav-menu"]')).toContainText('John Doe');
  await page.locator('[data-test="nav-home"]').click();
  await page.locator('[data-test="product-01JP5MSJW4ZXK6MX16W4H5D6NS"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page.locator('[data-test="cart-quantity"]')).toContainText('1');
});