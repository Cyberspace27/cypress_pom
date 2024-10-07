import loginPage from "../../pages/login-page.js";
import {loginPageB} from "../../pages/login-page-b.js";

describe("general test file description",()=>{

    it("test 1",()=>{
        const lp = new loginPage();
        cy.visit("https://opensource-demo.orangehrmlive.com/");
         lp.setUserName("test");
         lp.setUserPassword("test");
         lp.clickOnLogin();
         //lp.validateDasboardMsg();
    })
    it.skip("test 2",()=>{
       
        
         cy.visit("https://opensource-demo.orangehrmlive.com/");
         cy.wait(3000);
         const lpb = new loginPageB();
         loginPageB.setUserName("test");
         loginPageB.setUserPassword("test");
         loginPageB.clickOnLogin();
         loginPageB.validateDasboardMsg();
         
          /*
         lpb.setUserName("test");
         lpb.setUserPassword("test");
         lpb.clickOnLogin();
         lpb.validateDasboardMsg();
         */
    })

})
