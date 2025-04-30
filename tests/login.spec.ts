import { test, expect } from '@playwright/test';
import users from '../data/users.json'; // ✅ Ruta corregida

test('C002 - Login válido con fixture', async ({ page }) => {
  const user = users[0]; // ✅ Sintaxis corregida

  await page.goto('https://www.demoblaze.com/');
  await page.click('#login2');
  await page.fill('#loginusername', user.username);
  await page.fill('#loginpassword', user.password);
  await page.click('button:has-text("Log in")');

  await expect(page.locator('#nameofuser')).toContainText(user.username);
});
test('C003 - Login inválido con credenciales incorrectas', async ({ page }) => {
  const user = users[1]; // Usuario inválido del fixture

  await page.goto('https://www.demoblaze.com/');
  await page.click('#login2');
  await page.fill('#loginusername', user.username);
  await page.fill('#loginpassword', user.password);
  await page.click('button:has-text("Log in")');

  // Esperamos una alerta con mensaje de error
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('User does not exist');
    await dialog.accept();
  });
});