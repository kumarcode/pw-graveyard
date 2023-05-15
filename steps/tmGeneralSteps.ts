import { Given, When, Then } from "@cucumber/cucumber"
import { expect, test } from '../fixture/baseTestFixture';

Given('I navigate to the Trade Me home page', async function ({ page, baseURL, homePage, searchResultsPage }) {
    // Write code here that turns the phrase above into concrete actions
    console.log("Given");
    // navigate to the Trade Me home page
    await homePage.gotoTradeMeHomePage();
});

When('I search value a Marketplace item on the home page', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("When");
});

Then('The resulting page\'s URL and the page\'s title contains Marketplace', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Then");
});