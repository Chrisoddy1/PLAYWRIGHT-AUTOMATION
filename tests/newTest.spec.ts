import { test } from '@playwright/test';

test('check', async ({ page }) => {
	await page.goto('https://example.com');
	await page.waitForTimeout(3000);
});
