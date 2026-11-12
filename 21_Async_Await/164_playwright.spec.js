import {test,expect} from '@playwright/test'

test('User Await in the Playwright'), async({page}) => {
    await page.goto("https://playwright.dev/")
}