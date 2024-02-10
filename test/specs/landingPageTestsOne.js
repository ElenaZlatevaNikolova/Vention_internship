import Logger from "../../framework/logConfiguration/Logger.js";
import LoginPage from "../../poms/LoginPage.js";
import { assert } from "chai";

describe('Validation of elements on the landing page of https://www.saucedemo.com/', () => {

    it('should navigate to the site and check if the logo, login button, username and password fields are present', async () => {
        const loginPage = new LoginPage();

        Logger.logStep('Open login page')
        await loginPage.openLoginPage();

        Logger.logStep('Get login logo text')
        const loginLogoText = await loginPage.getLoginLogoText();
        assert.equal(loginLogoText, "Swag Labs", "Text doesn't match!")

        Logger.logStep('Check if username field is displayed')
        const isUsernameFieldDisplayed = await loginPage.isUsernameFieldDisplayed();
        assert.isTrue(isUsernameFieldDisplayed, "Username filed is not displayed!");

        Logger.logStep('Check if password field is displayed')
        const isPasswordFieldDisplayed = await loginPage.isPasswordFieldDisplayed();
        assert.isTrue(isPasswordFieldDisplayed, "Password field is not displayed!");

        Logger.logStep('Check if login button is displayed')
        const isLoginButtonDisplayed = await loginPage.isLoginButtonDisplayed();
        assert.isTrue(isLoginButtonDisplayed, "Login button is not displayed!");

        Logger.logStep('Check if login button is enabled')
        const isLoginButtonEnabled = await loginPage.isLoginButtonEnabled();
        assert.isTrue(isLoginButtonEnabled, "The login button is disabled!");

        Logger.logStep('Check if the section with default usernames and passwords is displayed')
        const isInfoBlockDisplayed = await loginPage.isInfoBlockDisplayed();
        assert.isTrue(isInfoBlockDisplayed, "The login information block is not displayed!");

    });
})