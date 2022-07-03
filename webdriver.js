require('chromedriver');
const webdriver = require("selenium-webdriver");

const driver = new webdriver.Builder().forBrowser("chrome").build();

// ask the browser to open a page
driver.navigate().to("http://localhost:3000")
.then(driver.navigate().to('http://localhost:3000/managedrive'))


await driver.findElement(web.By.xpath(`//*[@id="root"]/div/div[2]/div/div/div[1]/form/div[1]/label/input`)).click();
  const label = 
  await driver.findElement(web.By.xpath(`//*[@id="root"]/div/div[2]/div/div/div[1]/form/div[2]/label/select`)).getText();
  await driver.findElement(web.By.xpath(`//*[@id="root"]/div/div/div/div[1]/div[1]/input`)).sendKeys("Item New");
  