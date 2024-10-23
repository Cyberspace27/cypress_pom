import loginPageTS from "../../pages/login-page-ts";

describe('The spec file is to check TS with cypress', () => {

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

  const loginP = new loginPageTS();

  it('Should login successfully', () => {
   // loginPage.enterUsername('testUser');
    loginP.enterPassword('testPassword');
    loginP.clickLoginButton();
    // Add assertions to verify successful login
  });
});
