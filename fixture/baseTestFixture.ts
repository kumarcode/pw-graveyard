// Import the necessary modules
import { test as baseTest } from '@playwright/test';
import HomePage from '../pages/trademe/General/tmHomePage';
import SearchResultsPage from '../pages/trademe/General/searchResultsPage';
import PropertyHomePage from '../pages/trademe/Property/propertyHomePage';

// Define a type for the pages object that we will use to pass the page objects to our tests
type pages = {
    homePage: HomePage;
    searchResultsPage: SearchResultsPage;
    propertyHomePage: PropertyHomePage;
};

// Define a testPages object that extends the baseTest object and defines three page objects
const testPages = baseTest.extend<pages>({
    // Define a homePage property that creates a new instance of the HomePage class using the current page object
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    // Define a searchResultsPage property that creates a new instance of the SearchResultsPage class using the current page object
    searchResultsPage: async ({ page }, use) => {
        await use(new SearchResultsPage(page));
    },
    // Define a propertyHomePage property that creates a new instance of the PropertyHomePage class using the current page object
    propertyHomePage: async ({ page }, use) => {
        await use(new PropertyHomePage(page));
    },
});

// Export the testPages object as the test object
export const test = testPages;
// Export the expect method from the testPages object
export const expect = testPages.expect;
