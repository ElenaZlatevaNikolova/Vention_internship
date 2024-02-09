import LoginPage from "../../poms/LoginPage.js";
import { assert } from "chai";
import Logger from "../../framework/logConfiguration/Logger.js";



describe('Validation of elements on the landing page of https://www.saucedemo.com/', () => {

    it('should navigate to the site and check if the login page is accessible and the error handling is well implemented', async () => {
        const loginPage = new LoginPage();

        Logger.logStep('Open login page')
        await loginPage.openLoginPage();
 
         Logger.logStep('Click login button')
        await loginPage.clickLoginButton();

         Logger.logStep('Check if login error message is displayed')
        let isLoginErrorMessageDisplayed = await loginPage.isLoginErrorMessageDisplayed();
        assert.isTrue(isLoginErrorMessageDisplayed, "Text is not displayed!")

         Logger.logStep('Check if username error message is displayed')
        let isUsernameErrorIconDisplayed = await loginPage.isUsernameErrorIconDisplayed()
        assert.isTrue(isUsernameErrorIconDisplayed, "Element is not displayed!")

         Logger.logStep('Check if password error message is displayed')
        let isPasswordErrorIconDisplayed = await loginPage.isPasswordErrorIconDisplayed();
        assert.isTrue(isPasswordErrorIconDisplayed, "Element is not displayed!")

         Logger.logStep('Close error message')
        await loginPage.clickCloseErrorMessageButton()

         Logger.logStep('Check if login error message is still displayed')
        isLoginErrorMessageDisplayed = await loginPage.isLoginErrorMessageDisplayed();
        assert.isFalse(isLoginErrorMessageDisplayed, "Text is still displayed!")

         Logger.logStep( 'Check if username error is not displayed anymore')
        isUsernameErrorIconDisplayed = await loginPage.isUsernameErrorIconDisplayed()
        assert.isFalse(isUsernameErrorIconDisplayed, "Element is still displayed!")

         Logger.logStep( 'Check if password error icon is not displayed anymore')
        isPasswordErrorIconDisplayed = await loginPage.isPasswordErrorIconDisplayed();
        assert.isFalse(isPasswordErrorIconDisplayed, "Element is still displayed!")

    });
});