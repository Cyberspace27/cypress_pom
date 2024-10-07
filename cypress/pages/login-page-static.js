export class loginPageB{
   static txtUserName = "input[name='username']";
   static txtUserPass = "input[placeholder='Password']";
 
     static setUserName(params) {
         cy.get(this.txtUserName).type(params);
         
     }
     static setUserPassword(params) {
         cy.get(this.txtUserPass).type(params);
         
     }
     static clickOnLogin() {
         cy.get().click();
         
     }
     static validateDasboardMsg() {
         
     }
 }