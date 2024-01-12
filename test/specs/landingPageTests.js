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


        // Check the credentials info block
        const infoBlock = await $("//div[@class='login_credentials_wrap-inner']");
        const isInfoBlockDisplayed = await infoBlock.isDisplayed();
        assert.isTrue(isInfoBlockDisplayed, "Test login credentials are not displayed!")

    });
})