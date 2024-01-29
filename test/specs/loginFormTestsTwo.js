import LoginPage from "../../poms/LoginPage.js";
import { assert } from "chai";

describe('Validation of elements in the login form on https://www.saucedemo.com/', () => {

    it.only('should check the elements of a login form and that the default credentials are displayed', async () => {
        const loginPage = new LoginPage();
        const errorMessage = "Text doesn't match!";
        await loginPage.openLoginPage();

        const usernamePlaceholder = await loginPage.getUsernamePlaceholder();
        assert.equal(usernamePlaceholder, "Username", errorMessage);

        const isPasswordFieldDisplayed = await loginPage.isPasswordFieldDisplayed();
        assert.isTrue(isPasswordFieldDisplayed, "The password filed is not isplayed!");

        const passwordPlaceholder = await loginPage.getPasswordPlaceholder();
        assert.equal(passwordPlaceholder, "Password", errorMessage);

        const loginButtonText = await loginPage.getLoginButtonText();
        assert.equal(loginButtonText, "Login", errorMessage);

        const loginButtonColor = await loginPage.getLoginButtonColor();
        const expectedColor = loginButtonColor.parsed.hex;
        assert.equal(expectedColor, "#3ddc91", "Color doesn't match!");

        const sortedAllowedUsernamesToString = await loginPage.getSortedAllowedUsernamesToString();
        const sortedUsernamesToString = await loginPage.getSortedUsernamesToString();
        assert.equal(sortedUsernamesToString, sortedAllowedUsernamesToString, errorMessage);

        const expectedText = "secret_sauce";
        const password = await loginPage.getPassword()
        assert.equal(password, expectedText, errorMessage);

    });
})