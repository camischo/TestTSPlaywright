import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import { Page, Browser} from 'playwright';
import { paginaLogin } from '../pages/Login.page';
import { invokeBrowser } from "./browserManager";

let page: Page;
let browser: Browser;

BeforeAll(async function () {
    browser = await invokeBrowser();
    page = await browser.newPage();
    paginaLogin.page = page;
});
