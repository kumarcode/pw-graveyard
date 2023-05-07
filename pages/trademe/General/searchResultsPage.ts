// Import the Page type from Playwright
import { Page } from '@playwright/test';
import { Helper } from '../../../utilities/helper';

// Define the SearchResultsPage class
export default class SearchResultsPage {
    // Define a page property of type Page
    page: Page;

    // Define a constructor that takes a Page object as an argument
    constructor(page: Page) {
        this.page = page;
    }

    // Define a getSearchPageUrl method that calls the static getPageUrl method of the Helper class to get the page URL
    async getSearchPageUrl(): Promise<string> {
        return Helper.getPageUrl(this.page);
    }

    // Define a getSearchPageTitle method that calls the static getPageTitle method of the Helper class to get the page title
    async getSearchPageTitle(): Promise<string> {
        return Helper.getPageTitle(this.page);
    }
}
