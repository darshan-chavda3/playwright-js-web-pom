// @ts-check
import { test, expect } from '@playwright/test';
import { Pages } from '../pages/this';

test.describe('[@Feature-Login] Verify Login Page test scenarios', () => {
    test('[@P1 @Smoke] Verify user login with valid credentials and logout successfully', async ({ page }) => {
        const pages = Pages(page);

        // Login with valid credentials
        await pages.loginPage.gotoLoginPage();
        await pages.loginPage.loginWithValidCredentials('standard_user', 'secret_sauce');
        await expect(page).toHaveURL('/inventory.html');

        // Log out to page
        await pages.inventoryPage.logout();
        await expect(page).toHaveURL('/');
    });

    test('[@P1 @Regression] Verify user is unable to login with invalid credentials', async ({ page }) => {
        const pages = Pages(page);

        // Login with invalid credentials
        await pages.loginPage.gotoLoginPage();
        await pages.loginPage.loginWithValidCredentials('user_123', 'secret_123');
        await expect(page).not.toHaveURL('/inventory.html');

        // Verify error message
        await expect(pages.loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
});
