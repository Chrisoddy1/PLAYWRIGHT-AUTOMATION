import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.getByLabel('BBC-wide').getByRole('link', { name: 'Sounds' }).click();
  await page.getByText('We use cookies to give you').click();
  await page.getByLabel('BBC-wide').getByRole('link', { name: 'News' }).click();
  await page.getByRole('link', { name: 'Scotland' }).click();
  await page.getByTestId('navigation').getByRole('link', { name: 'Edinburgh, Fife & East' }).click();
});