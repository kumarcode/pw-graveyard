import { Page } from '@playwright/test';

export default class HomePage{
    constructor(public page: Page){

    }

    async enterSearchValue(searchValue: string){
        this.page.waitForLoadState('load');
        await this.page.locator("input[id='search']").type(searchValue);
    }

    async clickSearch(){
        await Promise.all([
            this.page.waitForLoadState('load'),
            await this.page.click("button[aria-label='Search all of Trade Me']"),
            this.page.waitForTimeout(2000)
        ])
    }

    async clickProperty(){
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            await this.page.getByText("Property").nth(0).click()
        ])
    }




}