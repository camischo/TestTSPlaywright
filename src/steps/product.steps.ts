import { When } from '@cucumber/cucumber';
import { paginaLogin } from '../pages/Login.page';
import ProductPage from '../pages/Product.page';

let productPage : ProductPage;

When('I add the product {string} to the cart', async function (product: string) {
    productPage = new ProductPage(paginaLogin.page);
    await productPage.addTheProduct(product);
    });