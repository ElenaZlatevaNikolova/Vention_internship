import { browser, $ } from '@wdio/globals';
import { assert } from 'chai';


describe('Validation of elements in the login form on https://www.saucedemo.com/', () => {

    it('should check the elements of a registration form and that the default credentials are displayed', async () => {
        await browser.url('https://www.saucedemo.com/');
        const errorMessage = "Text doesn't match!"

        // Check the username field’s placeholder/The placeholder is Username
        const usernamePlaceholder = await $("//input[@placeholder='Username']")
        const usernamePlaceholderText = await usernamePlaceholder.getAttribute('placeholder');
        assert.equal(usernamePlaceholderText, "Username", errorMessage);

        // Check that password fields is present/The placeholder is Password
        const passwordPlaceholder = await $("//input[@placeholder='Password']")
        const passwordPlaceholderText = await passwordPlaceholder.getAttribute('placeholder');
        assert.equal(passwordPlaceholderText, "Password", errorMessage);

        // Check the Login button/Text is Login. Color of the button is green (#3ddc91)
        const loginButton = await $("//input[@data-test='login-button']");
        const loginButtonText = await loginButton.getValue();
        const elementColor = await loginButton.getCSSProperty('background-color');
        const actualColor = elementColor.parsed.hex;
        const expectedColor = '#3ddc91';


        assert.equal(loginButtonText, "Login", errorMessage)
        assert.equal(actualColor, expectedColor, "Color doesn't match");

        // Check the list of usernames/ The list of usernames should contain all these usernames: standard_user, locked_out_user,
        // problem_user, performance_glitch_user, error_user, visual_user

        const allowedUsernames = ['standard_user', 'locked_out_user', 'problem_user',
            'performance_glitch_user', 'error_user', 'visual_user'];
        const sortedAllowedUsernames = allowedUsernames.sort();

        const usernamesElement = await $('//div[@id="login_credentials"]');
        const usernamesText = await usernamesElement.getText();
        const usernames = usernamesText.split("\n");
        usernames.shift();
        const sortedUsernames = usernames.sort();
        const usernamesToString = sortedUsernames.toString();
        const allowedUsernamesToString = sortedAllowedUsernames.toString();

        assert.equal(usernamesToString, allowedUsernamesToString, errorMessage);

        // Check the password for all users is “secret_sauce”
        const passwordElement = $("//div[@class ='login_password']");
        const passwordElementText = await passwordElement.getText();
        const passwordText = passwordElementText.split(":\n");
        const password = passwordText[1];
        const expectedText = "secret_sauce";

        assert.equal(password, expectedText, errorMessage);
    });
})