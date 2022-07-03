require('chromedriver');
const { By } = require('selenium-webdriver');
const webdriver = require("selenium-webdriver");

const driver = new webdriver.Builder().forBrowser("chrome").build();

// ask the browser to open a page


function bookvaccination() {
    driver.findElement(By.css(".formdate")).sendKeys("18-08-2022");
    driver.findElement(webdriver.By.xpath('//*[@id="places"]/option[3]')).click();
    driver.findElement(webdriver.By.xpath('//*[@id="counts"]/option[3]')).click();
    driver.findElement(webdriver.By.xpath('//*[@id="formbookbtn"]')).click();
    let time1;
    function navigatetohome() {
        driver.navigate().to("http://localhost:3000/home")
    }
    time1 = setTimeout(navigatetohome, 10000);
}

driver.navigate().to("http://localhost:3000/home")
.then(driver.navigate().to('http://localhost:3000/managedrive')).then(bookvaccination());