import { test, expect } from '@playwright/test';

test('Single Static DropDown Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.selectOption('#Skills', { 
        value:"Tech Support"
    });
    // await page.pause();
    await page.selectOption('#Skills', { 
        label:"UI / UX"
    });    
    await page.selectOption('#Skills', { 
        index: 8
    });  
    await page.close();

});