import { Before, Given, When, Then } from "@cucumber/cucumber"
import HomePage from '../pages/trademe/General/tmHomePage';
import { Page, TestInfo } from '@playwright/test';

let homePage: HomePage;
let page: Page;

Before(async ({ testInfo }: { testInfo: TestInfo }) => {
  // Create a new instance of the Page class
  page = testInfo.browserContext().page;
  homePage = new HomePage(page);
});

Given('I navigate to the Trade Me home page', async () => {
    // Write code here that turns the phrase above into concrete actions
    console.log("Given");
    await homePage.gotoTradeMeHomePage();

});

When('I search value a Marketplace item on the home page', async () => {
    // Write code here that turns the phrase above into concrete actions
    console.log("When");
});

Then('The resulting page\'s URL and the page\'s title contains Marketplace', async () => {
    // Write code here that turns the phrase above into concrete actions
    console.log("Then");
});