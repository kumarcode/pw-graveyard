import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './testsuite',
  /* Run tests in files in parallel */
  fullyParallel: false,
  retries: 2,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["dot"],
    ["json", {
      outputFile: "jsonReports/jsonReports.json"
    }],
    ["html", {
      open: "always"
    }]
  ],
   // Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions.
   use: {
    // Set the base URL to use for all the tests.
    baseURL: "https://www.trademe.co.nz",

    // Set whether to run the tests in headless mode or not.
    headless: false,

    // Set when to take a screenshot during test failures.
    screenshot: "only-on-failure",

    // Set when to capture a video of the test run during failures.
    video: "retain-on-failure",

    // Set to collect the trace when retrying a failed test.
    // For more information about trace viewer, see https://playwright.dev/docs/trace-viewer.
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },

  //   // {
  //   //   name: 'firefox',
  //   //   use: { ...devices['Desktop Firefox'] },
  //   // },

  //   // {
  //   //   name: 'webkit',
  //   //   use: { ...devices['Desktop Safari'] },
  //   // },

  //   /* Test against mobile viewports. */
  //   // {
  //   //   name: 'Mobile Chrome',
  //   //   use: { ...devices['Pixel 5'] },
  //   // },
  //   // {
  //   //   name: 'Mobile Safari',
  //   //   use: { ...devices['iPhone 12'] },
  //   // },

  //   /* Test against branded browsers. */
  //   // {
  //   //   name: 'Microsoft Edge',
  //   //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  //   // },
  //   // {
  //   //   name: 'Google Chrome',
  //   //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
  //   // },
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
