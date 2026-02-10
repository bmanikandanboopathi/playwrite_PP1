const {test, expect} = require('@playwright/test');


test.only ('With browser context playwright test',async({browser})=>
{
    //chrome 
    const Context = await browser.newContext();
    const page = await Context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    //print the page title 
    console.log(await page.title());
    // Locators like CSS and Xpath
    await page.locator('input#username').fill("manikandan");
    await page.locator('input#password').fill("Mani@123");
    await page.locator('input#signInBtn').click();

});

test ("Without browser context playwright test2",async({page})=>
{
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
});