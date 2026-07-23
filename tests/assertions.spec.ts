import { test, expect } from '@playwright/test';

test('assertion empty', async ({ page }) => {
  test.slow()
	await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').pressSequentially('lake');
 // await page.locator('#user-name').clear()
	//onst loc1 = page.locator('#user-name');
	//await expect(loc1).toHaveValue('lake');
	//await expect(loc1).toHaveCount(1)
});
