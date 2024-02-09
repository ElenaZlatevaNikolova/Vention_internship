import Label from "./elements/Label.js";

class BaseForm {
    constructor(name, selector) {
        this.name = name;
        this.selector = selector;
           }

    async isFormDisplayed() {
        Logger.debug(`Checking if ${this.name} is enabled`)
        let pageLabel = new Label(this.name, this.selector)
        let isFormDisplayed;
        try {
            isFormDisplayed = await pageLabel.isDisplayed();
        } catch (error) {
            isFormDisplayed = false;
        }
        Logger.debug(`The result of isFormDisplayed for ${this.name} is ${isFormDisplayed}`)
        return isFormDisplayed;
    }
}

export default BaseForm;