import BaseForm from "../framework/BaseForm.js";
import Label from "../framework/elements/Label.js";
import Browser from "../framework/Browser.js";
import Logger from "../framework/logConfiguration/Logger.js";


class ProductPage extends BaseForm {
    constructor() {
        super("Product page", "//span[@class='title' and text()='Products']")
        this.productPageElement = new Label("Product page element", "//span[@class='title' and text()='Products']");

    }

    async openProductPage() {
       Logger.debug('Open product page https://www.saucedemo.com/ ')
        await Browser.navigateTo("https://www.saucedemo.com/inventory.html")

    }

    async isProductPageElementDisplayed() {
       Logger.debug("Checking if product page is displayed")
        const timeout = 6000;

        try {
            await this.productPageElement.waitForExist({ timeout });
            return true;
        } catch (error) {
            return false;
        }
    }
}

export default ProductPage;
