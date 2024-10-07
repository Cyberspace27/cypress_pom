import loginPageTS from "../../pages/login-page-ts";

describe('Login Test', () => {
 
  const loginP = new loginPageTS(); // Create an instance of LoginPage

  it('should login successfully', () => {
    
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    // Use the Page Object's methods
    cy.wait(2000);
   // loginPage.enterUsername('testUser');
    loginP.enterPassword('testPassword');
    loginP.clickLoginButton();

    // Add assertions to verify successful login
    //cy.url().should('include', '/dashboard'); // Example assertion
  });
});
