import LoginPage from "../../poms/LoginPage.js";
import { assert } from "chai";

describe('Validation of elements on the landing page of https://www.saucedemo.com/', () => {

    it('should navigate to the site and check if the login page is accessible and the error handling is well implemented', async () => {
        const loginPage = new LoginPage();

        await loginPage.openLoginPage();

        await loginPage.clickLoginButton();
        let isLoginErrorMessageDisplayed = await loginPage.isLoginErrorMessageDisplayed();
        assert.isTrue(isLoginErrorMessageDisplayed, "Text is not displayed!")

        let isUsernameErrorIconDisplayed = await loginPage.isUsernameErrorIconDisplayed()
        assert.isTrue(isUsernameErrorIconDisplayed, "Element is not displayed!")

        let isPasswordErrorIconDisplayed = await loginPage.isPasswordErrorIconDisplayed();
        assert.isTrue(isPasswordErrorIconDisplayed, "Element is not displayed!")

        await loginPage.clickCloseErrorMessageButton()
        isLoginErrorMessageDisplayed = await loginPage.isLoginErrorMessageDisplayed();
        assert.isFalse(isLoginErrorMessageDisplayed, "Text is still displayed!")
        isUsernameErrorIconDisplayed = await loginPage.isUsernameErrorIconDisplayed()
        assert.isFalse(isUsernameErrorIconDisplayed, "Element is still displayed!")

        isPasswordErrorIconDisplayed = await loginPage.isPasswordErrorIconDisplayed();
        assert.isFalse(isPasswordErrorIconDisplayed, "Element is still displayed!")

    });
});