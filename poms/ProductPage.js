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

    async isProductPageElementDisplayed(timeout) {
        Logger.debug(`Checking if ${this.name} is displayed`)
        const isFormDisplayed = await this.productPageElement.waitForDisplayed(timeout);
        Logger.debug(`The result of isFormDisplayed for ${this.name} is ${isFormDisplayed}`)
        return isFormDisplayed;
    }
}
export default ProductPage;
