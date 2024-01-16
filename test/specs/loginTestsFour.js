import { browser, $ } from '@wdio/globals';
import { assert } from 'chai';

describe('Validation of elements in the login form on https://www.saucedemo.com/', () => {

    it('should verify the successful login of performance_glitch_user', async () => {
        await browser.url('https://www.saucedemo.com/');
        const usernameField = await $("//input[@data-test='username']");
        await usernameField.setValue("performance_glitch_user");
        const passwordField = await $("//input[@data-test='password']");
        await passwordField.setValue("secret_sauce");
        const loginButton = await $("//input[@data-test='login-button']");
        await loginButton.click();
        const elementProducts = await $("//span[@class='title' and text()='Products']");
        const isElementProductsDisplayed = await elementProducts.waitUntil(async () => {
            return await elementProducts.isDisplayed();
        });

        assert.isTrue(isElementProductsDisplayed, "User is not logged in");
    });
})