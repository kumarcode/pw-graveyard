import { Page } from '@playwright/test';

export default class HomePage{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    searchTextbox = () => this.page.locator("input[id='search']");
    searchButton = () => this.page.locator("button[aria-label='Search all of Trade Me']");
    propertyTab = () => this.page.getByText("Property").nth(0);



    async enterSearchValue(searchValue: string){
        this.page.waitForLoadState('load');
        await this.searchTextbox().type(searchValue);
    }

    async clickSearch(){
        await Promise.all([
            this.page.waitForLoadState('load'),
            await this.searchButton().click(),
            this.page.waitForTimeout(2000)
        ])
    }

    async clickProperty(){
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            await this.propertyTab().click()
        ])
    }




}