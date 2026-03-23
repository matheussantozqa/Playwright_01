import {test} from '@playwright/test';

test('Press - Sequentially Method', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('[placeholder="Username"]').pressSequentially('Admin');
    await page.locator('[placeholder="Password"]').pressSequentially('admin123');
    await page.locator('[type="submit"]').press('Enter');
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close()
});

test.only('Press - Sequentially method with Delay', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('[placeholder="Username"]').pressSequentially('Admin', {delay: 200});
    await page.locator('[placeholder="Password"]').pressSequentially('admin123', {delay: 200});
    await page.locator('[type="submit"]').press('Enter');
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close()
});