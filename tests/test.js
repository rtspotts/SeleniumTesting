const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

const chrome = require('selenium-webdriver/chrome');
var options = new chrome.Options();
options.setChromeBinaryPath("C:/Program Files/Google/Chrome/Application/chrome.exe");
options.addArguments("--headless");

async function example(){

       var searchString = "Automation testing with Selenium";

       //To wait for browser to build and launch properly
       let driver = await new Builder().setChromeOptions(options).forBrowser("chrome").build();

        //To fetch http://google.com from the browser with our code.
        await driver.get("http://google.com");

        //To send a search query by passing the value in searchString.
        await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);

        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);

        //It is always a safe practice to quit the browser after execution
        await driver.quit();

}

example()
