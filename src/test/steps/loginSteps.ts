import { Given,When,Then,setDefaultTimeout, Before } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/LoginPage";  
import Assert from "../../helper/wrapper/assert";
import data from "../../helper/util/test-data/LoginData.json";


let loginPage: LoginPage;
let assert: Assert;

  Given('User navigates to the application', async function () {
         
          loginPage = new LoginPage(fixture.page);
          assert = new Assert(fixture.page);

          await loginPage.navigateToLoginPage();
          await assert.assertTitle("STORE");
          await assert.assertURL("https://demoblaze.com/index.html");
          fixture.logger.info("User Navigated to the application");
           
   });

   When('User click on the login link', async function () {

          await loginPage.clickLogin();
          fixture.logger.info("User click on the login link");

    });
   
   When('User enter the username', async function () {
          
          await loginPage.enterUserName(data.userName);
          fixture.logger.info("User enters the username");

     });

  When('User enter the password', async function () {

          await loginPage.enterPassword(data.password);
          fixture.logger.info("User enters the password");

   });

   //credentials from table data--starts
  Then('User enter the username {string}', async function (username:string) {
          
          await loginPage.enterUserName(username);
          fixture.logger.info("User clicks on the login link");

  })

  Then('User enter the password {string}', async function (password:string) {

          await loginPage.enterPassword(password);
          fixture.logger.info("User enters the password");

  })

  //--ends

   When('User click on the login button', async function () {

          await loginPage.clickOnLogin();
          fixture.logger.info("User click on the login button");
           
    });

     Then('User enter the incorrect username {string}', async function (username:string) {
          
          await loginPage.enterUserName(username);
          fixture.logger.info("User clicks on the login link");

    })

     Then('User enter the incorrect password {string}', async function (password:string) {

          await loginPage.enterPassword(password);
          fixture.logger.info("User enters the password");

  })

  Then('User enter the correct username {string}', async function (username:string) {
          
          await loginPage.enterUserName(username);
          fixture.logger.info("User clicks on the login link");

  })

  Then(`User see's wrong password`,async function () {
          
        fixture.page.on('dialog',async (dialog)=>{
        const alertMessage= dialog.message();
         expect(alertMessage).toBe('Wrong password.');
         await dialog.accept(); 
      })
         await loginPage.clickOnLogin();
        fixture.logger.info("User clicks on the login link");

  })   

   Then(`User see's Invalid credentilas`,async function () {
          
        fixture.page.on('dialog',async (dialog)=>{
        const alertMessage= dialog.message();
         expect(alertMessage).toBe('User does not exist.');
         await dialog.accept(); 
      })
         await loginPage.clickOnLogin();
        fixture.logger.info("User clicks on the login link");

  }) 


  



         