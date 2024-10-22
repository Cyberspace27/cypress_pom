class loginPage{
    txtUserName =  "input[name='username']";
    txtUserPass = "input[placeholder='Password']";
    btnLogin = "button[type='submit'].orangehrm-login-button";
    lblDashboardMsg = "h6.oxd-topbar-header-breadcrumb-module";

    /**
     * Enters the given username into the username input field.
     * @param user the username to enter
     */
     setUserName(user) {
        cy.get(this.txtUserName).type(user);
        
    }
/**
 * Enters the given password into the password input field.
 * @param pass the password to enter
 */
    setUserPassword(pass) {
        cy.get(this.txtUserPass).type(pass);
        
    }
/**
 * Clicks the login button on the page.
 */
    clickOnLogin() {
        cy.get(this.btnLogin).click();
        
    }
/**
 * Validates the dashboard message displayed after a successful login.
 */
    validateDasboardMsg() {
       //need to be implemented 
    }
}
export default loginPage;
//export { loginPage }; // this line also works and I can add more then one class or interfaces from this file
