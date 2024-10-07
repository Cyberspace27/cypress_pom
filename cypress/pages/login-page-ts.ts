// Import necessary Cypress types
class loginPageTS {
  // Define methods to get elements, returning Cypress Chainable objects
  getUsernameField(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("input[name='username']"); // Replace with your actual locator
  }

  getPasswordField(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("input[placeholder='Password']"); // Replace with your actual locator
  }

  getLoginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("button[type='submit'].orangehrm-login-button"); // Replace with your actual locator
  }

  // Actions using the elements
  enterUsername(username: string): void {
    this.getUsernameField().type(username);
  }

  enterPassword(password: string): void {
    this.getPasswordField().type(password);
  }

  clickLoginButton(): void {
     this.getLoginButton().click();
  }
}

export default loginPageTS;
