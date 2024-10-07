class loginPage{
    txtUserName =  "input[name='username']";
    txtUserPass = "input[placeholder='Password']";
    btnLogin = "button[type='submit'].orangehrm-login-button";
    lblDashboardMsg = "h6.oxd-topbar-header-breadcrumb-module";

     setUserName(user) {
        cy.get(this.txtUserName).type(user);
        
    }
    setUserPassword(pass) {
        cy.get(this.txtUserPass).type(pass);
        
    }
    clickOnLogin() {
        cy.get(this.btnLogin).click();
        
    }
    validateDasboardMsg() {
        
    }
}
export default loginPage;
//export { loginPage }; // this line also works and I can add more then one class or interfaces from this file
