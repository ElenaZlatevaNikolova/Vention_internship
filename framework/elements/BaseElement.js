class BaseElement {
    constructor(name, selector) {
        this.name = name;
        this.selector = selector;
    }

    async getElement() {
        return browser.$(this.selector);
    }

    async getElements(selector) {
        return browser.$$(selector);
    }

    async getValue() {
        const element = await this.getElement(this.selector);
        return element.getValue();
    }

    async getAttribute(attributeName) {
        const element = await this.getElement(this.selector);
        return element.getAttribute(attributeName);
    }

    async moveTo() {
        const element = await this.getElement(this.selector);
        await element.moveTo();
    }

    async isDisplayed() {
        const element = await this.getElement();
        let isDisplayed;
        try {
            isDisplayed = await element.isDisplayed();
        } catch (error) {
            return false;
        }
        return isDisplayed;
    }

    async isExisting() {
        const element = await this.getElement(this.selector);
        let isExisting;
        try {
            isExisting = await element.isDisplayed();
        } catch (error) {
            return false;
        }
        return isExisting;
    }

    async isEnabled() {
        const element = await this.getElement(this.selector);
        let isEnabled;
        try {
            isEnabled = await element.isEnabled();
        } catch (error) {
            return false;
        }
        return isEnabled;
    }

    async isSelected() {
        const element = await this.getElement(this.selector);
        let isSelected;
        try {
            isSelected = await element.isSelected();
        } catch (error) {
            return false;
        }
        return isSelected;
    }

    async getCssProperty(propertyName) {
        const element = await this.getElement(this.selector);
        return element.getCSSProperty(propertyName);
    }

    async scrollIntoView() {
        const element = await this.getElement(this.selector);
        await element.scrollIntoView();
    }

    async getText() {
        const element = await this.getElement();
        return element.getText();
    }

    async dragAndDrop(targetSelector) {
        const sourceElement = await this.getElement(this.selector);
        const targetElement = await browser.$(targetSelector);
        await sourceElement.dragAndDrop(targetElement);
    }

    async click() {
        const element = await this.getElement(this.selector);
        await element.click();
    }

    async doubleClick() {
        const element = await this.getElement(this.selector);
        await element.doubleClick();
    }

    async rightClick() {
        const element = await this.getElement(this.selector);
        await element.click({ button: 'right' });
    }

    async waitForExist(selector, timeout = 10000) {
        const element = await this.getElement(selector);
        await element.waitForExist({ timeout });
    }
}

export default BaseElement;



