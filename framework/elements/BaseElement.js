class BaseElement {
    constructor(name, selector) {
        this.name = name;
        this.selector = selector;
    }

    async moveTo() {
        const element = await browser.findElement(this.selector);
        await element.moveTo();
    }

    async isDisplayed() {
        const element = await browser.findElement(this.selector);
        let isDisplayed;
        try {
            isDisplayed = await element.isDisplayed();
        } catch (error) {
            return false;
        }
        return isDisplayed;
    }

    async isExisting() {
        const element = await browser.findElement(this.selector);
        let isExisting;
        try {
            isExisting = await element.isDisplayed();
        } catch (error) {
            return false;
        }
        return isExisting;
    }

    async isEnabled() {
        const element = await browser.findElement(this.selector);
        let isEnabled;
        try {
            isEnabled = await element.isEnabled();
        } catch (error) {
            return false;
        }
        return isEnabled;
    }

    async isSelected() {
        const element = await browser.findElement(this.selector);
        let isSelected;
        try {
            isSelected = await element.isSelected();
        } catch (error) {
            return false;
        }
        return isSelected;
    }

    async getCssProperty(propertyName) {
        const element = await browser.findElement(this.selector);
        return await element.getCSSProperty(propertyName).value;
    }

    async scrollIntoView() {
        const element = await browser.findElement(this.selector);
        await element.scrollIntoView();
    }

    async getText() {
        const element = await browser.findElement(this.selector);
        return await element.getText();
    }

    async getValue() {
        const element = await browser.findElement(this.selector);
        return await element.getValue();
    }

    async getAttribute(attributeName) {
        const element = await browser.findElement(this.selector);
        return await element.getAttribute(attributeName);
    }

    async dragAndDrop(targetSelector) {
        const sourceElement = await browser.findElement(this.selector);
        const targetElement = await browser.$(targetSelector);
        await sourceElement.dragAndDrop(targetElement);
    }

    async click() {
        const element = await browser.findElement(this.selector);
        await element.click();
    }

    async doubleClick() {
        const element = await browser.findElement(this.selector);
        await element.doubleClick();
    }

    async rightClick() {
        const element = await browser.findElement(this.selector);
        await element.click({ button: 'right' });
    }

    async waitForExist(selector, timeout = 5000) {
        const element = await browser.findElement(selector);
        await element.waitForExist({ timeout });
    }
}

export default BaseElement;



