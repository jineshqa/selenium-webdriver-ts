import { By } from 'selenium-webdriver';
import BasePage from './BasePage';

const PAGEHEADER = By.xpath('//h1[contains(text(),"Upload Package")]');
const VERSIONNAME = By.css("input[id*='VersionText']");
//By.id('ExportPackagePage:UploadPackageForm:PackageDetailsPageBlock:PackageDetailsBlockSection:VersionInfoSectionItem:VersionText');
const RELEASETYPE = By.id('ExportPackagePage:UploadPackageForm:PackageDetailsPageBlock:PackageDetailsBlockSection:radioButtonsSections:TypeRadio:0');


export default class UploadPackagePage extends BasePage {

    async isLoaded(retry:number) {
       
        await this.waitForDisplayed(PAGEHEADER,retry);
        await this.waitForDisplayed(VERSIONNAME,retry);
        return; 
    }

    async addVersionNameAndSelectReleaseType(){
        this.driver.findElement(VERSIONNAME).clear();
        console.log("A");
        this.driver.findElement(VERSIONNAME).sendKeys("Fall 2016");
        console.log("B");
        this.driver.findElement(RELEASETYPE).click();
        console.log("C");
    }

}