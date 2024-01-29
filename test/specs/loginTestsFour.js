import LoginPage from "../../poms/LoginPage.js";
import ProductPage from "../../poms/ProductPage.js";
import { assert } from "chai";

describe('Validation of successful login in https://www.saucedemo.com/', () => {

    it('should verify the successful login of performance_glitch_user', async () => {
        const loginPage = new LoginPage();
        const productPage = new ProductPage();

        await loginPage.openLoginPage();

        await loginPage.typeUsername("performance_glitch_user")
        await loginPage.typePassword("secret_sauce")
        await loginPage.clickLoginButton()

        const isProductPageElementDisplayed = await productPage.isProductPageElementDisplayed();
        assert.isTrue(isProductPageElementDisplayed, "User is not logged in!")

    });
})