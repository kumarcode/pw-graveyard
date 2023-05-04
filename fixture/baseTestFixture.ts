import { test as baseTest } from '@playwright/test';
import HomePage from "../pages/trademe/General/tmHomePage";
import SearchResultsPage from '../pages/trademe/General/searchResultsPage';
import PropertyHomePage from '../pages/trademe/Property/propertyHomePage';

type pages = {
    homePage: HomePage;
    searchResultsPage: SearchResultsPage;
    propertyHomePage: PropertyHomePage
}


const testPages = baseTest.extend<pages>({
    homePage: async ({page}, use) => {
        await use(new HomePage(page));
    },
    searchResultsPage: async ({page}, use) => {
        await use(new SearchResultsPage(page));
    },
    propertyHomePage: async ({page}, use) => {
        await use(new PropertyHomePage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;