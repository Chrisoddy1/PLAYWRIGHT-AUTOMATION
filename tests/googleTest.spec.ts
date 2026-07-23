import { test, expect } from '@playwright/test';

test('google search', async ({ page }) => {
  await page.goto('https://www.google.co.uk/');
  await page.locator('#APjFqb').press('Shift');
});
