
class loginPageTS {

/**
 * Returns the Cypress Chainable for the username input field.
 */
  getUsernameField(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("input[name='username']"); 
  }

  /**
   * Returns the Cypress Chainable for the password input field.
   */
  getPasswordField(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("input[placeholder='Password']");
  }

  /**
   * Returns the Cypress Chainable for the login button.
   * @returns Cypress.Chainable<JQuery<HTMLElement>>
   */
  getLoginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("button[type='submit'].orangehrm-login-button"); 
  }

  /**
   * Enters the given username into the username input field.
   * @param username the username to enter
   */
  enterUsername(username: string): void {
    this.getUsernameField().type(username);
  }

  /**
   * Enters the given password into the password input field.
   * @param password the password to enter
   */
  enterPassword(password: string): void {
    this.getPasswordField().type(password);
  }

  /**
   * Clicks the login button on the page.
   */
  clickLoginButton(): void {
     this.getLoginButton().click();
  }
}

export default loginPageTS;
