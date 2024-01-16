import { browser, $ } from '@wdio/globals';
import { assert } from 'chai';

describe('Validation of elements on the landing page of https://www.saucedemo.com/', () => {

    it('should navigate to the site and check if the login page is accessible and the error handling is well implemented', async () => {
        await browser.url('https://www.saucedemo.com/');
        const elementErrorMessage = "Element is not displayed!";
        const textErrorMessage = "Text is not displayed!"

        // Check that after pressing login button with empty credential fields, error message is displayed
        const loginButton = await $('//input[@data-test="login-button"]');
        loginButton.click();
        let errorMessage = await $('//h3[@data-test="error"]');
        let isDisplayed = await errorMessage.isDisplayed();
        assert.isTrue(isDisplayed, textErrorMessage)

        // Check that username field contains error icon
        const usernameErrorIcon = await $('//div[@class="login-box"]//div[1]//*[name()="svg"]');
        let isUsernameErrorDisplayed = await usernameErrorIcon.isDisplayed();
        assert.isTrue(isUsernameErrorDisplayed, elementErrorMessage)

        // Check that password field contains error icon
        const passwordErrorIcon = await $('//div[@class="login-box"]//div[2]//*[name()="svg"]')
        let isPasswordErrorIconDisplayed = await passwordErrorIcon.isDisplayed();
        assert.isTrue(isPasswordErrorIconDisplayed, elementErrorMessage);

        // Close error message/Error message is no longer displayed
        const closeErrorMessage = await $("//button[@class='error-button']")
        closeErrorMessage.click();
        isDisplayed = await errorMessage.isDisplayed();
        assert.isFalse(isDisplayed, "The error message is still displayed!");

        // Check that username field doesn’t contain error icon any more
        isUsernameErrorDisplayed = await usernameErrorIcon.isDisplayed();
        assert.isFalse(isUsernameErrorDisplayed, elementErrorMessage);

        // Check that password field doesn’t contain error icon
        isPasswordErrorIconDisplayed = await passwordErrorIcon.isDisplayed();
        assert.isFalse(isPasswordErrorIconDisplayed, elementErrorMessage);
    });
});