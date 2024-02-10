import LoginPage from "../../poms/LoginPage.js";
import ProductPage from "../../poms/ProductPage.js";
import { assert } from "chai";
import Logger from "../../framework/logConfiguration/Logger.js";
import { timeouts } from "../../framework/customTimeouts.js";

describe('Validation of successful login in https://www.saucedemo.com/', () => {

    it('should verify the successful login of performance_glitch_user', async () => {
        const loginPage = new LoginPage();
        const productPage = new ProductPage();

        Logger.logStep('Opening login page')
        await loginPage.openLoginPage();

        Logger.logStep('Typing username')
        await loginPage.typeUsername("performance_glitch_user")

        Logger.logStep('Typing password')
        await loginPage.typePassword("secret_sauce")

        Logger.logStep('Clicking login button')
        await loginPage.clickLoginButton()

        Logger.logStep('Checking if the product page logo is displayed')
        const isProductPageElementDisplayed = await productPage.isProductPageElementDisplayed();
        assert.isTrue(isProductPageElementDisplayed, "User is not logged in!")

    });
})