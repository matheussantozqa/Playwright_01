import {test, expect} from '@playwright/test';

test('Visible or Hidden Assertion', async ({page}) => {
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.close()
});

test('Enabled/Disabled Assertion', async ({page}) => {
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('[value="Alert"]')).toBeEnabled();
    await page.locator('[value="Disable"]').click();
    await expect(page.locator('[placeholder="Enabled/Disabled Field"]')).toBeDisabled();
    await page.close()
});

test('Text Match/Mismatch Assertion', async ({page}) => {
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#mousehover')).toHaveText('Mouse Hover');
    await expect(page.locator('#mousehover')).not.toHaveText('RandomText');
    await page.close()
});

test('Attribute Assertion', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await expect(page.locator('[placeholder="Username"]')).toHaveAttribute('name', 'username');
    await expect(page.locator('[placeholder="Username"]')).toHaveAttribute('class', /.*oxd-input./);
    await page.close()
});

test('URL Assertion', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');

    //Full URL Assertion
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Partial URL Assertion
    await expect(page).toHaveURL(/orangehrmlive/);
    await page.close()
});

test('Title Assertion', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');

    //Full Title Assertion
    await expect(page).toHaveTitle('OrangeHRM');

    //Partial Title Assertion
    await expect(page).toHaveTitle(/HRM/);
    await page.close()
});

test.only('Screenshots Assertion', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.waitForTimeout(3000);
    await expect(page).toHaveScreenshot('orangehrm-homepage.png');
    await page.close()
});