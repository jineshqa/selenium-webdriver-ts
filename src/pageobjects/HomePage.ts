import { By } from 'selenium-webdriver';
import BasePage from './BasePage';

const PACKAGE_COMPONENTS = By.css('a[href$=\"PackageComponents\"]');

export default class HomePage extends BasePage {

    async isLoaded() {
        await this.waitForDisplayed(PACKAGE_COMPONENTS);
    }

    async gotoPackageComponentsPage(){
        await this.click(PACKAGE_COMPONENTS,0);
    }

}