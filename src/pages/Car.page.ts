import {Page} from '@playwright/test';
import PlaywrightWrapper from './PlaywrightWrappers';

export default class CarPage {
    private base: PlaywrightWrapper

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        goToCar: ".shopping_cart_link",
        checkoutBtn: "Checkout"
    }

    async gotoCar() {
        await this.base.waitAndClick(this.Elements.goToCar);
    }

    async checkout() {
        await this.page.getByText(this.Elements.checkoutBtn).click();
        await this.page.waitForTimeout(3000);
    }
    
}