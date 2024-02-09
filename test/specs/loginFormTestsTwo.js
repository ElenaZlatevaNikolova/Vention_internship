import LoginPage from "../../poms/LoginPage.js";
import { assert } from "chai";
import Logger from "../../framework/logConfiguration/Logger.js";


describe('Validation of elements in the login form on https://www.saucedemo.com/', () => {

    it.only('should check the elements of a login form and that the default credentials are displayed', async () => {
        const loginPage = new LoginPage();
        const errorMessage = "Text doesn't match!";
        
        Logger.logStep('Open login page')
        await loginPage.openLoginPage();

        Logger.logStep('Get username field placeholder')
        const usernamePlaceholder = await loginPage.getUsernamePlaceholder();
        assert.equal(usernamePlaceholder, "Username", errorMessage);

        Logger.logStep('Chech if password field is displayed')
        const isPasswordFieldDisplayed = await loginPage.isPasswordFieldDisplayed();
        assert.isTrue(isPasswordFieldDisplayed, "The password filed is not isplayed!");

        Logger.logStep('Get password field placeholder')
        const passwordPlaceholder = await loginPage.getPasswordPlaceholder();
        assert.equal(passwordPlaceholder, "Password", errorMessage);

        Logger.logStep('Check the text of the login buton')
        const loginButtonText = await loginPage.getLoginButtonText();
        assert.equal(loginButtonText, "Login", errorMessage);

        Logger.logStep('Check the color of the login buton')
        const loginButtonColor = await loginPage.getLoginButtonColor();
        const actualColor = await loginButtonColor.parsed.hex;
        const COLOR_GREEN = "#3ddc91";
        assert.equal(actualColor, COLOR_GREEN, "Color doesn't match!");

        Logger.logStep('Check the usernames from the usernames section')
        const allowedUsernames = ['standard_user', 'locked_out_user', 'problem_user',
        'performance_glitch_user', 'error_user', 'visual_user'];
        const sortedAllowedUsernames = allowedUsernames.sort();
        const allowedUsernamesToString = sortedAllowedUsernames.toString();
        
        const usernamesBlockText = await loginPage.getUsernamesBlockText();
        const usernames = usernamesBlockText.split('\n');
        usernames.shift();
        const sortedUsernames = usernames.sort();
       const sortedUsernamesToString = sortedUsernames.toString();
                     assert.equal(sortedUsernamesToString, allowedUsernamesToString, errorMessage);

        Logger.logStep('Check the password from the password section')
        const expectedText = "secret_sauce";
       const passwordBlockText = await loginPage.getPasswordInfoText();
        const passwordText = passwordBlockText.split(":\n");
        passwordText.shift();
        const passwordTextToString = passwordText.toString();
        assert.equal(passwordTextToString, expectedText, errorMessage);

    });
})