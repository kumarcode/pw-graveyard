// Import the Page type from Playwright
import { Page } from '@playwright/test';

// Define the PropertyHomePage class
export default class PropertyHomePage {
    // Define a page property of type Page
    page: Page;

    // Define a constructor that takes a Page object as an argument
    constructor(page: Page) {
        this.page = page;
    }

    // Define a defaultSortOrder method that returns a locator for the default sort order element
    defaultSortOrder = () => this.page.locator("//option[@value='0: Default']");
    // Define a searchButton method that returns a locator for the search button element
    searchButton = () => this.page.getByRole('button', { name: 'Search' });

    // Define a getDefaultSortOrder method that retrieves the text content of the default sort order element
    async getDefaultSortOrder() {
        // Wait for the page to finish loading
        await this.page.waitForLoadState('load');
        // Get the text content of the default sort order element
        return this.defaultSortOrder().textContent();
    }

    // Define a clickSearch method that waits for the page to finish loading and clicks the search button
    async clickSearch() {
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            await this.searchButton().click()
        ]);
    }
}
