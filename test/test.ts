import DriverBuilder from '../src/lib/DriverBuilder';
import { By } from 'selenium-webdriver';
import { until } from 'selenium-webdriver';
import * as webdriver from 'selenium-webdriver';
import { assert } from 'chai';
import HomePage from '../src/pageobjects/HomePage';
import PackageComponentsPage from '../src/pageobjects/PackageComponentsPage';
import UploadPackagePage from '../src/pageobjects/UploadPackagePage';
import fs = require('fs');

//~~Suite:KNDY-1234!!
describe("A suite", function() {
var name:String;
let driverBuilder:DriverBuilder;
let driver:webdriver.WebDriver;

    beforeEach(async function() {
        driverBuilder = new DriverBuilder();
        driver = driverBuilder.driver;
        await driver.get('https://login.salesforce.com');
        await driver.manage().window().maximize();
    });

    //~~start-testcase!!
    it("Login to salesforce", async function() {
        //~~Login as user~~
        await driver.findElement(By.id("username")).sendKeys("admin@kndy4_4.197.patch");
        await driver.findElement(By.id("password")).sendKeys("This is incorrect password");
        await driver.findElement(By.id("Login")).click();
        const homePage = new HomePage(driver);
        await homePage.isLoaded();
        await wait(5000);
        await homePage.gotoPackageComponentsPage();
        const packagePage = new PackageComponentsPage(driver);
        await packagePage.isLoaded(30);
        await isPageLoadFinished(driver);
        await packagePage.goToUploadPage();
        await driver.sleep(299000)
        console.log('sleep 1');
        await driver.sleep(299000)
        console.log('sleep 2');
        await driver.sleep(299000)
        console.log('sleep 3');
        const uploadPage = new UploadPackagePage(driver);
        await uploadPage.addVersionNameAndSelectReleaseType();
        });
        //~~end-testcase!!

    function wait(ms) {
        return new Promise(r => setTimeout(r, ms));
    }

    function isPageLoadFinished(driver : webdriver.WebDriver){
        return driver.executeScript("return document.readyState");
    }

    function writeScreenshot(data, name = 'out.png') {
        fs.writeFileSync( name, data, 'base64');
    }

    afterEach(async function() {
        driver.takeScreenshot().then(function (data){
            writeScreenshot(data, 'out1.png');
        })
        await driverBuilder.quit();
    })

    
});




