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
 * Checks if the element located by the given selector has the expected text.
 * @param {string} locator - The selector for the element to check.
 * @param {string} textTocheck - The expected text content of the element.
 */
    checkDashboardText() {
        //under build just for testing purposes
        //cy.checkText(locator,textTocheck);
        cy.checkText('span[class="title"]', 'OrangeHRM');
        
    }

}
module.exports = new loginPage();
//export default loginPage;
//export { loginPage }; // this line also works and I can add more then one class or interfaces from this file
