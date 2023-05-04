import { expect, test } from '../fixture/baseTestFixture';
import * as data from '../testdata/trademeGeneral-test-data.json'

test.describe("Trade Me General Test Suite",async () => {
    test("Check Marketplace item search directs user to Marketplace", async ( {page, baseURL, homePage, searchResultsPage}) => {
    
        await page.goto('/');
        await homePage.enterSearchValue(data.genericSearchMarketplaceItem);
        await homePage.clickSearch();
    
        await expect((await searchResultsPage.getPageUrl())).toContain(data.expectedMarketplaceURL);
        await expect((await searchResultsPage.getPageTitle())).toContain(data.expectedMarketplaceTitle)
    })
})
