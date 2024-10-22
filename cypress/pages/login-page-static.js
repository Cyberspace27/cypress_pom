export class loginPageB{
   static txtUserName = "input[name='username']";
   static txtUserPass = "input[placeholder='Password']";
 
/**
 * Sets the username input field with the provided parameters.
 * @param params the parameters to type into the username input field
 */
     static setUserName(params) {
         cy.get(this.txtUserName).type(params);
         
     }
    /**
     * Sets the password input field with the provided parameters.
     * @param params the parameters to type into the password input field
     */
     static setUserPassword(params) {
         cy.get(this.txtUserPass).type(params);
         
     }
    /**
     * Clicks the login button on the page.
     */
     static clickOnLogin() {
         cy.get().click();
         
     }
    /**
     * Verifies that the dashboard message is displayed after successful login.
     */
     static validateDasboardMsg() {
         
     }
 }