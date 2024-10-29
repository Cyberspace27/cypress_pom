import loginPage from "../../pages/login-page.js";
import {loginPageB} from "../../pages/login-page-static.js";

describe("The spec file is to check JS with cypress",()=>{

    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
    })

  it('Check browser values',()=>{
    cy.log(Cypress.browser.displayName)
    cy.log(Cypress.browser.family)
    cy.log(Cypress.browser.path)
    cy.log(Cypress.browser.version)
    cy.log((Cypress.browser.isHeaded).toString())
    cy.log((Cypress.browser.isHeadless).toString())
    //check the Arch 
    cy.log(Cypress.arch)
    })

    it('Check config cypress command',()=>{

    cy.log((Cypress.config('defaultCommandTimeout')).toString())
    cy.log((Cypress.config('pageLoadTimeout')).toString())
    cy.log((Cypress.config('requestTimeout')).toString())
    cy.log((Cypress.config('responseTimeout')).toString())
    cy.log((Cypress.config('video')).toString())
    cy.log((Cypress.config('videoCompression')).toString())
    cy.log((Cypress.config('viewportHeight')).toString())
    cy.log((Cypress.config('viewportWidth')).toString())

    })

    it('Check location cypress command',()=>{
    cy.title().should('eq','OrangeHRM')
    cy.url().should('contain','https://opensource-demo.orangehrmlive.com/')
    cy.location().should((location)=>{console.log(location)})
    cy.location().should('contain',{"protocol":"https:","hostname":"opensource-demo.orangehrmlive.com"})
    cy.location('protocol').should('contain',"https:")
    })

    it("test 1 to use a instance of a class or object",()=>{
        loginPage.setUserName("test");
        loginPage.setUserPassword("test");
        loginPage.clickOnLogin();
        //loginPage.checkDashboardText();
    })
    it.skip("test 2 to use a static class and functions",()=>{
         
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
