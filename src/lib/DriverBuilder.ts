import * as webdriver from 'selenium-webdriver';

export default class DriverBuilder{
    
    _driver:webdriver.WebDriver; 

    constructor(){
        const builder = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub');
        const capabilities = webdriver.Capabilities['firefox']();
        builder.withCapabilities(capabilities);
        this._driver = builder.build(); 
    }
    
    get driver(){
        return this._driver;
    }

    async quit() {
    return this._driver.quit();
    }
  

}