import { test, expect } from '@playwright/test';

test('login page', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
 
    await page.locator("#sum1");
    await page.locator("#sum1").fill("abc");
    
  });