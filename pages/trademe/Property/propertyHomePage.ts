import { Page } from '@playwright/test';

export default class PropertyHomePage{
    constructor(public page: Page){

    }

    async getDefaultSortOrder(){
        this.page.waitForLoadState('load');
        return this.page.locator("//option[@value='0: Default']").textContent();
    }

    async clickSearch(){
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            await this.page.getByRole('button', { name: 'Search' }).click()
        ])
    }

}