//created by Tatiana Y.

const { test } = require ("@playwright/test");

// import { test } from '@playwright/test';


test('Browser Playwright Test', async ({browser})=>
    {
//chrome incognito
const context =  await browser.newContext();
const page = await context.newPage();
page.goto("https://yeremenko.org/")
});

test('Page Playwright Test', async ({page})=>
    {
    await page.goto("https://yeremenko.org/")
});