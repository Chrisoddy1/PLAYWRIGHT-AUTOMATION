import { test, expect } from '@playwright/test';

test('verify Login button count', async ({ page }) => {
	await page.goto('https://www.saucedemo.com/');

	await expect(page.getByRole('button', { name: 'Login' })).toHaveCount(1);
	await expect(page.getByPlaceholder('Username.')).toHaveCount(1);
});
