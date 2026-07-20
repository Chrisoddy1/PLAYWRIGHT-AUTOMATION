import { test, expect } from '@playwright/test';
test('Sauce Demo Login Test', async ({ page }) => {
	await page.goto('https://www.saucedemo.com/');
	// await page.locator("//*[@id ='user-name']").fill('standard_user')
	await page.getByPlaceholder('Username').fill('standard_user');

	// await page.locator("text=Username").fill('standard_user')
	await page.locator(" //input[@id ='password']").fill('secret_sauce');
	//await page.locator("//input[@id ='login-button']").click()
	await page.locator('text=Login').click();
	//await page.locator('.inventory_item_name', { hasNotText: /Sauce1.*/ }).click();
	const items = await page.locator('.inventory_item_name').allTextContents();
	console.log(items);
	await page.getByRole('button', { name: 'frgg' }).click();
	// await page.locator('text=Sauce Labs Backpack').click();
	await page.locator('ffbfbbfb').click();

	// await page.locator("text='Add to cart'").click();

	await page.locator('text=REMOVE').click();
});

test('second test', async ({ page }) => {
	page.goto('https://www.saucedemo.com/');
	await page.getByPlaceholder('Username').fill('standard_user');
	await page.locator(" //input[@id ='password']").fill('secret_sauce');
	await page.locator('text=Login').click();
	await page.locator('#react-burger-menu-btn').click();
	//await page.locator('hdhdhdhd').click();
	 await page.goto('saucedemo.com');

});
