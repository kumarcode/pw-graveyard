// Import the Page type from Playwright
import { Page } from '@playwright/test';

// Define a utility class named Helper
export class Helper {
    // Define a static method named getPageUrl that takes a Page object as an argument, waits for the page to finish loading and returns the page URL as a string
    static async getPageUrl(page: Page): Promise<string> {
        await page.waitForLoadState('load');
        return page.url().toString();
    }

    // Define a static method named getPageTitle that takes a Page object as an argument, waits for the page to finish loading and returns the page title as a string
    static async getPageTitle(page: Page): Promise<string> {
        await page.waitForLoadState('load');
        return (await page.title()).toString();
    }
}