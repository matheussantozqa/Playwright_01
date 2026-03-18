import {test} from '@playwright/test';

test('Login Test for Orange HRM', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[placeholder="Password"]').fill('admin123');
    await page.locator('[type="submit"]').click();
    await page.locator('.oxd-userdropdown-name').click();
    await page.locator('text=Logout').click();
    await page.close();
});