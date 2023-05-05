import { expect, test } from '../fixture/baseTestFixture';
import * as data from '../testdata/trademeProperty-test-data.json'

test.describe("Trade Me Property Test Suite",async () => {
    test("Check if the property search result has Featured Listing at the top @regression @property", async ( {page, baseURL, homePage, propertyHomePage}) => {
    
        await page.goto('/');
        await homePage.clickProperty();
        await propertyHomePage.clickSearch();
    
        await expect((await propertyHomePage.getDefaultSortOrder())).toContain(data.expectedDefaultSortOrder);
    })
})

