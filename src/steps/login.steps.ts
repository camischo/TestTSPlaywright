import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage, { paginaLogin } from '../pages/loginpage';
import * as standard_user from '../data/user_standard.json';
import * as locked_user from '../data/user_locked.json';

let loginPage : LoginPage;

Given('I am on the Sauce Demo login page',async function () {
  loginPage = new LoginPage(paginaLogin.page);
  await loginPage.navigateToLoginPage();
  });

When('I enter valid username and password',async function () {
  await loginPage.enterUserName(standard_user.username);
  loginPage.enterPassword(standard_user.password);
  });

When('I enter invalid username and password', async function () {
  await loginPage.enterUserName(locked_user.username);
  loginPage.enterPassword(locked_user.password);
  });

When('I click the login button',async function () {
  await loginPage.clickLoginButton();
  });

Then('I should be redirected to the inventory page',async function () {
  await loginPage.isThePageInventory();
  });

Then('I should see an error message indicating user blocked',async function () {
   await loginPage.errorMessageToHaveText("Epic sadface: Sorry, this user has been locked out.");
  });