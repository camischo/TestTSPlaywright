import { When } from '@cucumber/cucumber';
import { paginaLogin } from '../pages/Login.page';
import CarPage from '../pages/Car.page';

let carPage : CarPage;

When('I click the cart button', async function () {
           carPage = new CarPage(paginaLogin.page);
           await carPage.gotoCar();
         });

When('I continue to checkout', async function () {
           await carPage.checkout();
         });