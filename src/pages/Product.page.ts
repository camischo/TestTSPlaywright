import {Page} from '@playwright/test';

export default class ProductPage {

    constructor(private page: Page) {}

    private Elements = {
        addToCarBtn: "Add to cart"
    }

    async addTheProduct(product: string) {
        
        await this.page.getByText(product).click();
            
        await this.page.getByText(this.Elements.addToCarBtn).click()
    }
    
}