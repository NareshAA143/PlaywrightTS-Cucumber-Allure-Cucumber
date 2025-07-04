import { Given,When,Then, setDefaultTimeout, Before } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import HomePage from "../../pages/HomePage";    
import { expect } from "playwright/test";



let homePage: HomePage;
let assert: Assert;

Given('User is on Home page', async function () {
     homePage = new HomePage(fixture.page);
    assert = new Assert(fixture.page);
    fixture.logger.info("User is on the Home page");

})

Given('Login should be success', async function () {
    
        await homePage.verifyUserName();
        fixture.logger.info("Username is Welcome pavanol");
        await this.attach("Username is Welcome pavanol", "text/plain");

         });

When('User clicks on Laptops', async function () {

           await homePage.clickOnLaptops();
           fixture.logger.info("User clicks on Laptos");
           
           await this.attach("User clicked on Laptops", "text/plain");
           
          });

When('User clicks on Contact button', async function () {

           await homePage.clickOnContact();
           fixture.logger.info("User clicks on Contact");
           await this.attach("User clicks on Contact", "text/plain");
           
          });

When('User Enters email name and message', async function () {

           await homePage.enterContactEmail("naresh75.nn@gmail.com");
           await homePage.enterContactName("Naresh");
           await homePage.enterMessage("hii");
           fixture.logger.info("User enters the contact email,name and message");
           await this.attach("User enters the contact email,name and message", "text/plain");
          });

When('User sends message', async function () {
         
          fixture.page.once('dialog', async(dialog)=>{
            console.log("Alert Message",dialog.message());
            expect(dialog.message()).toContain("Thanks for the message!!");
            await dialog.accept();
          })
           await homePage.clickOnSend();
           fixture.logger.info("User clicks on Send");
           await this.attach("User clicks on Send", "text/plain");
          });

When('User clicks on Phones', async function () {
    
  await homePage.clickOnPhones();
  fixture.logger.info("User clicks on Phones"); 
  await this.attach("User clicks on Phones", "text/plain");
});

When('User clicks on Monitors', async function () {
    
  await homePage.clickOnMonitors();
  fixture.logger.info("User clicks on Monitors");
  await this.attach("User clicks on Monitors", "text/plain");
});
        
       

 
          