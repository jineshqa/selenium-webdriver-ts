import { By } from 'selenium-webdriver';
import BasePage from './BasePage';

const EDIT = By.css('input[value="Edit"]');
const DELETE = By.css('input[value="Delete"]');
const UPLOAD = By.css('input[value="Upload"]');
const ADD = By.id('ViewAllPackage:theForm:mainDetailBlock:tabButtons:tabButtons:addComponent');
const VIEWDEPENDENCIES = By.id('ViewAllPackage:theForm:mainDetailBlock:tabButtons:tabButtons:viewDependencies');
const VIEWDELETEDCOMPONENTS = By.id('ViewAllPackage:theForm:mainDetailBlock:tabButtons:tabButtons:viewDeletedComponents');

export default class PackageComponentsPage extends BasePage {
    
    driver:webdriver.WebDriver;
    
    constructor(webdriver) {
        super(webdriver);
        this.driver = webdriver;
    }

    async isLoaded(retry:number) {
        // await this.waitForDisplayed(EDIT,retry);
        // await this.waitForDisplayed(DELETE,retry);
        await this.waitForDisplayed(UPLOAD,retry);
        // await this.waitForDisplayed(ADD,retry);
        // await this.waitForDisplayed(VIEWDEPENDENCIES,retry);
        // await this.waitForDisplayed(VIEWDELETEDCOMPONENTS,retry);
    }

    async goToUploadPage(){
        this.driver.findElement(UPLOAD).click();
        // await this.click(UPLOAD,100);
    }

}