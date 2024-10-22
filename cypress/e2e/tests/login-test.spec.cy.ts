import loginPageTS from "../../pages/login-page-ts";

describe('The spec file is to check TS with cypress', () => {

  it('Check browser values',()=>{
      cy.log(Cypress.browser.displayName)
      cy.log(Cypress.browser.family)
      cy.log(Cypress.browser.path)
      cy.log(Cypress.browser.version)
      cy.log((Cypress.browser.isHeaded).toString())
      cy.log((Cypress.browser.isHeadless).toString())
  })
 
  const loginP = new loginPageTS();

  it('should login successfully', () => {
    
    cy.visit("https://opensource-demo.orangehrmlive.com/");
   // loginPage.enterUsername('testUser');
    loginP.enterPassword('testPassword');
    loginP.clickLoginButton();
    // Add assertions to verify successful login
  });
});
