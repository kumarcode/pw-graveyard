//  imports the expect and test functions from the baseTestFixture file, 
// as well as some test data from the trademeProperty-test-data.json file
import { expect, test } from '../fixture/baseTestFixture';
import * as data from '../testdata/trademeProperty-test-data.json'

// The test.describe function is used to group related tests together under a common heading. 
// In this case, the heading is "Trade Me Property Test Suite".
test.describe("Trade Me Property Test Suite", async () => {
    // define a test case, tagged with @regression and @general
    test("Check if the property search result has Featured Listing at the top @regression @property", async ({ page, baseURL, homePage, propertyHomePage }) => {
        // Navigate to the base URL
        await page.goto('/');
        // Click the Property tab on the home page
        await homePage.clickProperty();
        // Click the Search button on the Property page
        await propertyHomePage.clickSearch();
        // Assert that the default sort order of the search results contains the expected string
        await expect((await propertyHomePage.getDefaultSortOrder())).toContain(data.expectedDefaultSortOrder);
    })

})

