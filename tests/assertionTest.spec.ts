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