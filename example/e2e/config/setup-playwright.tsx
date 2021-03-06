/* eslint-env jest */

import { Browser, BrowserContext, chromium, Page } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

beforeAll(async () => {
  browser = await chromium.launch();
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  context = await browser.newContext();
  page = await context.newPage();

  await page.goto('http://localhost:3579');
});

afterEach(async () => {
  await context.close();
});

export { browser, context, page };
