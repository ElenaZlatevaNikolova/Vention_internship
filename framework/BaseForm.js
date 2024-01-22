const Label = require ("./elements/Label");

class BaseForm {
    constructor(name, selector) {
        this.name = name;
        this.selector = selector;
    }

    async isFormDisplayed () {
        let pageLabel = new Label(this.name, this.selector)
        let isFormDisplayed;
        try {
            isFormDisplayed = await pageLabel.isDisplayed();
        } catch (error) {
            return false;
        }
        return isFormDisplayed;
    }
}

module.exports = BaseForm;