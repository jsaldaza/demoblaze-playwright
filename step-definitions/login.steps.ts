import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext, expect } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

Given('el usuario está en la página de inicio', { timeout: 15000 }, async () => {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.demoblaze.com/');
  await page.waitForLoadState('load');
});

When('hace clic en Login', async () => {
  await page.click('#login2');
});

When('ingresa credenciales válidas', async () => {
  await page.fill('#loginusername', 'standard_user');
  await page.fill('#loginpassword', 'secret123');
  await page.click('button:has-text("Log in")');
});

Then('debería ver su nombre de usuario en la barra superior', { timeout: 15000 }, async () => {
await page.waitForSelector('#nameofuser', { timeout: 10000 });
await expect(page.locator('#nameofuser')).toContainText('Welcome');
  await browser.close();
});
