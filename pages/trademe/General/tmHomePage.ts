// Import the Page type from Playwright
import { Page } from '@playwright/test';

// Define the HomePage class
export default class HomePage {
    // Define a page property of type Page
    page: Page;

    // Define a constructor that takes a Page object as an argument
    constructor(page: Page) {
        this.page = page;
    }

    // Define a searchTextbox method that returns a locator for the search textbox element
    searchTextbox = () => this.page.locator("input[id='search']");

    // Define a searchButton method that returns a locator for the search button element
    searchButton = () => this.page.locator("button[aria-label='Search all of Trade Me']");

    // Define a propertyTab method that returns a locator for the Property tab element
    propertyTab = () => this.page.getByText("Property").nth(0);

    // Define an enterSearchValue method that enters a search value in the search textbox
    async enterSearchValue(searchValue: string) {
        // Wait for the page to finish loading
        await this.page.waitForLoadState('load');
        // Type the search value into the search textbox
        await this.searchTextbox().type(searchValue);
    }

    // Define a clickSearch method that waits for the page to finish loading, clicks the search button, and waits for 2 seconds
    async clickSearch() {
        await Promise.all([
            this.page.waitForLoadState('load'),
            await this.searchButton().click(),
            this.page.waitForTimeout(2000)
        ]);
    }

    // Define a clickProperty method that waits for the page to finish loading and clicks the Property tab
    async clickProperty() {
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            await this.propertyTab().click()
        ]);
    }

    // This method navigates to the Trade Me home page
    async gotoTradeMeHomePage() {
        // Wait for the page to finish loading before navigating to the baseURL
        await this.page.goto('/');
    }
}
