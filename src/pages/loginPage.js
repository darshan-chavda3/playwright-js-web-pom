// @ts-check
import { BasePage, expect } from './basePage';

export class LoginPage extends BasePage {
    userName = this.page.locator('//input[@id="user-name"]');
    password = this.page.locator('//input[@id="password"]');
    loginButton = this.page.locator('//input[@id="login-button"]');
    errorMessage = this.page.locator('//h3[@data-test="error"]');

    async gotoLoginPage() {
        await this.page.goto('/');
    }
    async loginWithValidCredentials(userName, password) {
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}
