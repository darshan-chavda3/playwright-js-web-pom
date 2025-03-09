// @ts-check
import { BasePage } from './basePage';

export class InventoryPage extends BasePage {
    burgerMenu = this.page.locator('//button[@id="react-burger-menu-btn"]');
    logoutOption = this.page.locator('//a[text()="Logout"]');

    async logout() {
        await this.burgerMenu.click();
        await this.logoutOption.click();
    }
}
