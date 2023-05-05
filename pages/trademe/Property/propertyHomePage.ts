import { Page } from '@playwright/test';

export default class PropertyHomePage{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    defaultSortOrder = () => this.page.locator("//option[@value='0: Default']");
    searchButton = () => this.page.getByRole('button', { name: 'Search' });

    async getDefaultSortOrder(){
        this.page.waitForLoadState('load');
        return this.defaultSortOrder().textContent();
    }

    async clickSearch(){
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            await this.searchButton().click()
        ])
    }
}