import { test, expect } from '@playwright/test';

test('C001 - Agregar producto al carrito', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.click('text=Samsung galaxy s6');
  await page.click('text=Add to cart');
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();
  });
});
