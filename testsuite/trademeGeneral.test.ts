// import the expect and test functions from the baseTestFixture module
// as well as some test data from the trademeGeneral-test-data.json file
import { expect, test } from '../fixture/baseTestFixture';
import * as data from '../testdata/trademeGeneral-test-data.json'

// describe a test suite named "Trade Me General Test Suite"
test.describe("Trade Me General Test Suite", async () => {
    // define a test case, tagged with @regression and @general
    test('Check Marketplace item search directs user to Marketplace @regression @general', async ({ page, baseURL, homePage, searchResultsPage }) => {
        // navigate to the Trade Me website's home page
        await page.goto('/');
        // enter a search value for a Marketplace item on the home page
        await homePage.enterSearchValue(data.genericSearchMarketplaceItem);
        // click on the search button to search for the Marketplace item
        await homePage.clickSearch();

        // verify that the resulting page's URL contains the expected Marketplace URL and the page's title contains the expected Marketplace title
        await expect((await searchResultsPage.getSearchPageUrl())).toContain(data.expectedMarketplaceURL);
        await expect((await searchResultsPage.getSearchPageTitle())).toContain(data.expectedMarketplaceTitle);
    })
})
