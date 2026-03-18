import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.youtube.com/');
  await page.getByRole('link', { name: 'Página inicial do YouTube' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Início' }).click();
  await page.getByRole('link', { name: 'Shorts' }).click();
  await page.getByRole('button', { name: 'marcar este vídeo como "' }).click();
  await page.getByRole('button', { name: 'Assistir (k)' }).click();
});