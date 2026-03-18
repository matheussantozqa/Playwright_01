import {test} from '@playwright/test';

test('Different Locator Strategy', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
});

    // await page.locator('id="user-name"').fill('standard_user');
