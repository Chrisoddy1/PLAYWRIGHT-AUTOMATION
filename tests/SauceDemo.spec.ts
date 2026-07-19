import { test, expect } from '@playwright/test';
test('Sauce Demo Login Test', async ({ page }) => { 

    await page.goto('https://www.saucedemo.com/')
    // await page.locator("//*[@id ='user-name']").fill('standard_user')
      await page.getByPlaceholder('Username').fill('standard_user');

   // await page.locator("text=Username").fill('standard_user')
    await page.locator    (" //input[@id ='password']").fill('secret_sauce')
    //await page.locator("//input[@id ='login-button']").click()
    await page.locator("text=Login").click()
  await page.locator     ("text=Sauce Labs Backpack").click()
  
   await page.locator("text='Add to cart'").click()
   


   
  await page.locator     ("text=REmove").click()
   await page.locator('hdhdhhd').click()
    
})