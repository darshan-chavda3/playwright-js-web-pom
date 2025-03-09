// @ts-check
import { InventoryPage } from './inventoryPage';
import { LoginPage } from './loginPage';

export const Pages = (page) => {
    return {
        loginPage: new LoginPage(page),
        inventoryPage: new InventoryPage(page),
    };
};
