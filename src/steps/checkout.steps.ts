import { When,Then } from '@cucumber/cucumber';
import { paginaLogin } from '../pages/Login.page';
import CheckoutPage from '../pages/Checkout.page';

let checkoutPage : CheckoutPage;

When('I fill the checkout form with first name {string}, last name {string} and postal code {string}', async function (firstName, lastName, zipCode) {    
    checkoutPage = new CheckoutPage(paginaLogin.page);
    await checkoutPage.fillFirstName(firstName);
    await checkoutPage.fillLastName(lastName);
    await checkoutPage.fillZipCode(zipCode);
    await checkoutPage.continue();
    });

When('I click the finish button', async function () {
    await checkoutPage.finish();
    });

Then('I should see the message {string}', async function (message) {
    await checkoutPage.messageToHaveText(message);
    });