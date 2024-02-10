import Label from "./elements/Label.js";

class BaseForm {
    constructor(name, selector) {
        this.name = name;
        this.selector = selector;
    }

    async isFormDisplayed(timeout) {
        Logger.debug(`Checking if ${this.name} is displayed`)
        let pageLabel = new Label(this.name, this.selector)
        const isFormDisplayed = await pageLabel.waitForDisplayed(timeout);
        Logger.debug(`The result of isFormDisplayed for ${this.name} is ${isFormDisplayed}`)
        return isFormDisplayed;
    }

}

export default BaseForm;