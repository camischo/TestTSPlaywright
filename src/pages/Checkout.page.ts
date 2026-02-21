import {Page, expect} from '@playwright/test';
import PlaywrightWrapper from './PlaywrightWrappers';

export default class CheckoutPage {
    private base: PlaywrightWrapper

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        firstName: "First Name",
        lastName: "Last Name",
        zipCode: "Zip/Postal Code",
        continueBtn: "input[type='submit']",
        finishBtn: "Finish",
        message: ".complete-header"
    }

    async fillFirstName(firstName: string) {
        await this.page.getByPlaceholder(this.Elements.firstName).fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.page.getByPlaceholder(this.Elements.lastName).fill(lastName);
    }

    async fillZipCode(zipCode: string) {
        await this.page.getByPlaceholder(this.Elements.zipCode).fill(zipCode);
    }

    async continue() {
        await this.base.waitAndClick(this.Elements.continueBtn);
    }

    async finish() {
        await this.page.getByText(this.Elements.finishBtn).click();
    }

    async messageToHaveText(expectedText: string) {
        const message = await this.base.waitAndGetText(this.Elements.message);
        expect(message).toBe(expectedText);
    }
    
}