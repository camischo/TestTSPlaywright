import { BeforeAll, After, Status } from "@cucumber/cucumber";
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

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await page.screenshot({ 
      path: `./reports/screenshots/${scenario.pickle.name}.png`, 
      fullPage: true 
    });
    
    this.attach(screenshot, 'image/png');
  }
});