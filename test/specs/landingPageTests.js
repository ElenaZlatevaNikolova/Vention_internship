import { browser, $ } from '@wdio/globals';
import { assert } from 'chai';


describe('Validation of elements on the landing page of https://www.saucedemo.com/', () => {

    it('should navigate to the site and check if the logo, login button, username and password fields are present', async () => {
        await browser.url('https://www.saucedemo.com/');

        // Check that Swag Labs text is present
        const pageLogo = await $("//div[@class='login_logo']");
        const logoText = await pageLogo.getText();
        const expectedText = "Swag Labs";
        assert.equal(logoText, expectedText, "Logo text doesn't match");

        // Check that username field is present
        const usernameField = await $("//input[@data-test='username']");
        const isUsernameFieldDisplayed = await usernameField.isDisplayed();
        assert.isTrue(isUsernameFieldDisplayed, "Username field is not displayed!")

        // Check that password field is present
        const passwordField = await $("//input[@data-test='password']");
        const isPasswordFieldDisplayed = await passwordField.isDisplayed();
        assert.isTrue(isPasswordFieldDisplayed, "Password field is not displayed!")

        // Check the Login 
        const loginButton = await $("//input[@data-test='login-button']");
        const isLoginButtonDisplayed = await loginButton.isDisplayed();
        assert.isTrue(isLoginButtonDisplayed, "Login button is not displayed!")
        const isLoginButtonEnabled = await loginButton.isEnabled();
        assert.isTrue(isLoginButtonEnabled, "The login button is disabled!")


        // Check the credentials info block
        const infoBlock = await $("//div[@class='login_credentials_wrap-inner']");
        const isInfoBlockDisplayed = await infoBlock.isDisplayed();
        assert.isTrue(isInfoBlockDisplayed, "Test login credentials are not displayed!")

    });

    it('should check the elements of a registration form and that the default credentials are displayed', async () => {
        await browser.url('https://www.saucedemo.com/');
        const errorMessage = "Text doesn't match!"

        // Check the username field’s placeholder/The placeholder is Username
        const usernamePlaceholder = await $ ("//input[@placeholder='Username']")
        const usernamePlaceholderText = await usernamePlaceholder.getAttribute('placeholder');
        assert.equal(usernamePlaceholderText, "Username", errorMessage );

        // Check that password fields is present/The placeholder is Password
        const passwordPlaceholder = await $ ("//input[@placeholder='Password']")
        const passwordPlaceholderText = await passwordPlaceholder.getAttribute('placeholder');
        assert.equal(passwordPlaceholderText, "Password", errorMessage );

        // Check the Login button/Text is Login. Color of the button is green (#3ddc91)
        const loginButton = await $("//input[@data-test='login-button']");
        const loginButtonText = await loginButton.getAttribute('value');
        const elementColor = await loginButton.getCSSProperty('background-color');
        const expectedColor = elementColor.parsed.hex;

        assert.equal(loginButtonText, "Login", errorMessage)
        assert.equal(expectedColor, '#3ddc91', "Color doesn't match");

        // Check the list of usernames/ The list of usernames should contain all these usernames:standard_user, locked_out_user,
        // problem_user, performance_glitch_user, error_user, visual_user

        const allowedUsernames = ['standard_user', 'locked_out_user', 'problem_user',
            'performance_glitch_user', 'error_user', 'visual_user'];

        const usernamesElement = await $('//div[@id="login_credentials"]');
        const usernamesText = await usernamesElement.getText();
        const usernames = usernamesText.split("\n");
        usernames.shift();
        const usernamesToString = usernames.toString();
        const allowedUsernamesToString = allowedUsernames.toString();

        assert.equal(usernamesToString, allowedUsernamesToString, errorMessage);

        // Check the password for all users is “secret_sauce”
        const passwordElement = $("//div[@class ='login_password']");
        const passwordElementText = await (passwordElement).getText();
        console.log(passwordElementText);
        const passwordText = passwordElementText.split(":\n");
        const password = passwordText[1];
        console.log(password);
        const expectedText = "secret_sauce";
       
        assert.equal(password, expectedText, errorMessage);

    });
})