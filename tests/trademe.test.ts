import { chromium, expect, test } from "@playwright/test";


test("Check Marketplace item search directs user to Marketplace", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const homePage = await context.newPage();

    await homePage.goto("https://www.trademe.co.nz/a/");

    await homePage.fill("input[id='search']", "summer hat");
    await homePage.click("button[aria-label='Search all of Trade Me']");

    await homePage.waitForTimeout(5000);
    await expect(homePage).toHaveURL(/marketplace/);
    await expect(homePage).toHaveTitle(/Trade Me Marketplace/)
})

test("Check for GA UTM tags in Homes homepage URL for Trademe redirects", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const homePage = await context.newPage();

    await homePage.goto("https://www.trademe.co.nz/a/");

    // Get page after a specific action (e.g. clicking a link)
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        homePage.click("//a[normalize-space()='homes.co.nz']") // Opens a new tab
    ])
    await newPage.waitForLoadState();
    console.log(await newPage.title());

    //await homePage.click("//a[normalize-space()='homes.co.nz']");

    await homePage.waitForTimeout(5000);
    await expect(newPage).toHaveURL(/utm_source=trademe_preview/);
    await expect(newPage).toHaveTitle("homes.co.nz - Free Sales Histories and Estimated Values For NZ Homes")
    await expect(newPage.locator("//h2[normalize-space()='For Sale']")).toContainText("For Sale");
})