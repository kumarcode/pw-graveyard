import { Page } from '@playwright/test';

export default class SearchResultsPage{
    page: Page;

    constructor(page: Page){
        this.page = page;
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