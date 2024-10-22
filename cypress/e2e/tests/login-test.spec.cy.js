import loginPage from "../../pages/login-page.js";
import {loginPageB} from "../../pages/login-page-static.js";

describe("The spec file is to check JS with cypress",()=>{

    it('Check browser values',()=>{
        cy.log(Cypress.browser.displayName)
        cy.log(Cypress.browser.family)
        cy.log(Cypress.browser.path)
        cy.log(Cypress.browser.version)
        cy.log(Cypress.browser.isHeaded)
        cy.log(Cypress.browser.isHeadless)
    })

    it("test 1 to use a instance of a class or object",()=>{
        const lp = new loginPage();
        cy.visit("https://opensource-demo.orangehrmlive.com/");
         lp.setUserName("test");
         lp.setUserPassword("test");
         lp.clickOnLogin();
         //lp.validateDasboardMsg();
    })
    it.skip("test 2 to use a static class and functions",()=>{
       
        
         cy.visit("https://opensource-demo.orangehrmlive.com/");
         
         loginPageB.setUserName("test");
         loginPageB.setUserPassword("test");
         loginPageB.clickOnLogin();
         loginPageB.validateDasboardMsg();
         
          /*
          const lpb = new loginPageB();
         lpb.setUserName("test");
         lpb.setUserPassword("test");
         lpb.clickOnLogin();
         lpb.validateDasboardMsg();
         */
    })

})
