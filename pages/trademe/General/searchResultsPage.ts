import { Page } from '@playwright/test';

export default class SearchResultsPage{
    constructor(public page: Page){

    }

    async getPageUrl(){
        this.page.waitForLoadState('load');
        return this.page.url().toString();
    }

    async getPageTitle(){
        this.page.waitForLoadState('load');
        return (await this.page.title()).toString();
    }
}