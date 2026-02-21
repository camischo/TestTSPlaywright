import {Page, expect} from '@playwright/test';
import PlaywrightWrapper from './PlaywrightWrappers';

export default class LoginPage {
    private base: PlaywrightWrapper

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        userInput: "Username",
        passwordInput: "Password",
        loginBtn: "input[type='submit']",
        errorMessage: "h3[data-test='error']"
    }

    async navigateToLoginPage() {
        await this.base.goto("https://www.saucedemo.com/");
        await expect(this.page).toHaveTitle("Swag Labs");
    }

    async enterUserName(user: string) {
        console.log("Username: " + user);
        await this.page.getByPlaceholder(this.Elements.userInput).fill(user);
    }
    async enterPassword(Password: string) {
        await this.page.getByPlaceholder(this.Elements.passwordInput).fill(Password);
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginBtn);
    }
    
    async errorMessageToHaveText(expectedText: string) {
        const errorMessage = await this.base.waitAndGetText(this.Elements.errorMessage);
        expect(errorMessage).toBe(expectedText);
    }

    async isThePageInventory() {
        await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html",{
            timeout: 5000
        });
    }
    async loginUser(user: string, password: string) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

}

export const paginaLogin = {
    // @ts-ignore    
    page : undefined as Page 
}