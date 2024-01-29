import LoginPage from "../../poms/LoginPage.js";
import { assert } from "chai";

describe('Validation of elements on the landing page of https://www.saucedemo.com/', () => {

    it('should navigate to the site and check if the logo, login button, username and password fields are present', async () => {
        const loginPage = new LoginPage();

        await loginPage.openLoginPage();
        const loginLogoText = await loginPage.getLoginLogoText();
        assert.equal(loginLogoText, "Swag Labs", "Text doesn't match!")

        const isUsernameFieldDisplayed = await loginPage.isUsernameFieldDisplayed();
        assert.isTrue(isUsernameFieldDisplayed, "Username filed is not displayed!");

        const isPasswordFieldDisplayed = await loginPage.isPasswordFieldDisplayed();
        assert.isTrue(isPasswordFieldDisplayed, "Password field is not displayed!");

        const isLoginButtonDisplayed = await loginPage.isLoginButtonDisplayed();
        assert.isTrue(isLoginButtonDisplayed, "Login button is not displayed!");

        const isLoginButtonEnabled = await loginPage.isLoginButtonEnabled();
        assert.isTrue(isLoginButtonEnabled, "The login button is disabled!");

        const isInfoBlockDisplayed = await loginPage.isInfoBlockDisplayed();
        assert.isTrue(isInfoBlockDisplayed, "The login information block is not displayed!");

    });
})