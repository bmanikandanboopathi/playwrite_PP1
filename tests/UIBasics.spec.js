const {test} = require('@playwright/test');


test ('With browser context playwright test',async({browser})=>
{
    //chrome 
    const Context = await browser.newContext();
    const page = await Context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
});

test.only ("Without browser context playwright test2",async({page})=>
{
    await page.goto("https://google.com");
});