import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import { chromium, Page, Browser} from 'playwright';
import { paginaLogin } from '../pages/loginpage';
import { invokeBrowser } from "./browserManager";

let page: Page;
let browser: Browser;

BeforeAll(async function () {
    browser = await invokeBrowser();
    page = await browser.newPage();
    paginaLogin.page = page;
});
