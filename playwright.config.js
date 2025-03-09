// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    testDir: './src/tests',
    fullyParallel: true,
    timeout: 60 * 1000,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [['html'], ['list', { open: 'on-failure' }]],
    use: {
        baseURL: 'https://www.saucedemo.com',
        trace: 'on-first-retry',
        headless: true,
        actionTimeout: 60 * 1000,
        navigationTimeout: 60 * 1000,
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },

        // {
        //   name: 'firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },
    ],
});
