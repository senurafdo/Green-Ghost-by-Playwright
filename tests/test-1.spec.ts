import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Reject all' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('trade republic');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dtrade%2Brepublic%26sca_esv%3Df1854236ccd13803%26source%3Dhp%26ei%3DdCPHZ7zEEKGXxc8PhuXu8AY%26iflsig%3DACkRmUkAAAAAZ8cxhNhBlxnJpNOYUa7COUQIbp93QlZz%26ved%3D0ahUKEwi8zvPl5fCLAxWhS_EDHYayG24Q4dUDCBA%26uact%3D5%26oq%3Dtrade%2Brepublic%26gs_lp%3DEgdnd3Mtd2l6Ig50cmFkZSByZXB1YmxpYzILEC4YgAQY0QMYxwEyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIzTxQ0glY0i5wAXgAkAEAmAE-oAGDBqoBAjE0uAEDyAEA-AEBmAIOoAKkBqgCAMICBRAuGIAEmAMB8QV0f0l1B4-qX5IHAjE0oAfsfw%26sclient%3Dgws-wiz%26sei%3DgSPHZ4eTOZWsxc8PyqW86QM&q=EgRfWuwYGILHnL4GIjADsvJJk93cqgyIfmE8kHSAsWw3MoZ0OZmY_DliZ5r5Ddt86RIY4lWO2OaQWpZCsd0yAXJaAUM');
  await page.locator('iframe[name="a-2okgnnwrn1me"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%26oq%3Dplaywright%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDY2NzlqMGo0qAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DuyPHZ4G7AZKKxc8Pz8e1aQ&q=EgRfWuwYGLvHnL4GIjBTB3xclPp3a9_8erO-Xcn3_RxRg1jHBiVujCoj4GKkPTYZEdGfgAXl2UogXwrJdkkyAXJaAUM');
  await page1.goto('https://playwright.dev/');
});