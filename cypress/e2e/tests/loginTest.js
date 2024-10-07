import loginPage from "../../pages/loginPage.js";

describe("general test file description",()=>{

    it("test 1",()=>{
        const lp = new loginPage();
         lp.setUserName("test");
         lp.setUserPassword("test");
         lp.clickOnLogin();
         lp.validateDasboardMsg();

       // loginPage.
    })


})
