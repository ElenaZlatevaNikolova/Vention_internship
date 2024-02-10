import Logger from "../logConfiguration/Logger.js";

class BaseElement {
    constructor(name, selector) {
        this.name = name;
        this.selector = selector;
    }

    async getElement() {
        Logger.trace(`Geting ${this.name} element`)
        return browser.$(this.selector);
    }

    async getElements(selector) {
        Logger.trace(`Geting ${this.name} elements`)
        return browser.$$(selector);
    }

    async getValue() {
        Logger.debug(`Getting the value of ${this.name}`)
        const element = await this.getElement(this.selector);
        const value = await element.getValue();
        Logger.debug(`The value of ${this.name} is ${value}`)
        return value;
    }

    async getAttribute(attributeName) {
        Logger.debug(`Getting the value of attribute ${attributeName}`)
        const element = await this.getElement(this.selector);
        const attributeValue = await element.getAttribute(attributeName);
        Logger.debug(`The value of attribute ${attributeName} of element ${this.name} is ${attributeValue}`)
        return attributeValue;
    }

    async moveTo() {
        Logger.debug(`Moving mouse to ${this.name}`)
        const element = await this.getElement(this.selector);
        await element.moveTo();
    }

    async getCssProperty(propertyName) {
        Logger.debug(`Getting CSS property ${propertyName} of ${this.name}`)
        const element = await this.getElement(this.selector);
        const cssProperty = await element.getCSSProperty(propertyName);
        Logger.debug(`The CSS property ${propertyName} of ${this.name} is ${cssProperty}`)
        return cssProperty
    }

    async scrollIntoView() {
        Logger.debug(`Scroll ${this.name} into view`)
        const element = await this.getElement(this.selector);
        await element.scrollIntoView();
    }

    async getText() {
        Logger.debug(`Get the text of element ${this.name}`)
        const element = await this.getElement();
        const elementText = await element.getText();
        Logger.debug(`The text of ${this.name} is ${elementText}`)
        return elementText;
    }

    async dragAndDrop(targetSelector) {
        Logger.debug(`Moving ${this.name} to ${targetSelector}`)
        const sourceElement = await this.getElement(this.selector);
        const targetElement = await browser.$(targetSelector);
        await sourceElement.dragAndDrop(targetElement);
    }

    async click() {
        Logger.debug(`Clicking ${this.name}`)
        const element = await this.getElement(this.selector);
        await element.click();
    }

    async doubleClick() {
        Logger.debug(`Double click ${this.name}`)
        const element = await this.getElement(this.selector);
        await element.doubleClick();
    }

    async rightClick() {
        Logger.debug(`Right click ${this.name}`)
        const element = await this.getElement(this.selector);
        await element.click({ button: 'right' });
    }

    async isDisplayed(timeout) {
        Logger.debug(`Checking if ${this.name} is diplayed`)
        const isDisplayed = await this.waitForDisplayed(timeout);
        Logger.debug(`The result of isDisplayed for ${this.name} is ${isDisplayed}`)
        return isDisplayed;
    }

    async isExisting(timeout) {
        Logger.debug(`Checking if ${this.name} exists`)
        const isExisting = await this.waitForExist(timeout);
        Logger.debug(`The result of isExisting for ${this.name} is ${isExisting}`)
        return isExisting;
    }

    async isEnabled(timeout) {
        Logger.debug(`Checking if ${this.name} is enabled`)
        const isEnabled = await this.waitForEnabled(timeout);
        Logger.debug(`The result of isEnabled for ${this.name} is ${isEnabled}`)
        return isEnabled;
    }

    async isSelected(timeout) {
        Logger.debug(`Checking if ${this.name} is selected`)
        const isSelected = await this.waitForSelected((timeout));
        Logger.debug(`The result of isSelected for ${this.name} is ${isSelected}`)
        return isSelected;
    }

    async waitForExist(timeout) {
        Logger.debug(`Waiting for ${this.name} to exist`)
        const element = await this.getElement();
        try {
            await element.waitForExist({ timeout });
            return true;
        } catch (error) {
            return false;
        }
    }

    async waitForDisplayed(timeout) {
        Logger.debug(`Waiting for ${this.name} to be displayed`)
        const element = await this.getElement();
        try {
            await element.waitForDisplayed(timeout);
            return true;
        } catch (error) {
            Logger.debug(`Element ${this.name} is not displayed within the timeout.`);
            return false;
        }
    }


    async waitForClickable(timeout) {
        Logger.debug(`Waiting for ${this.name} to be displayed`)
        const element = await this.getElement();
        try {
            await element.waitForClickable({ timeout });
            return true;
        } catch (error) {
            Logger.debug(`Element ${this.name} is not clickable within the timeout.`);
            return false;
        }
    };

    async waitForEnabled(timeout) {
        Logger.debug(`Waiting for ${this.name} to be displayed`)
        const element = await this.getElement();
        try {
            await element.waitForEnabled({ timeout });
            return true;
        } catch (error) {
            Logger.debug(`Element ${this.name} is not enabled within the timeout.`);
            return false;
        }
    }

    async waitForSelected(timeout) {
        Logger.debug(`Waiting for ${this.name} to be selected`)
        const element = await this.getElement();
        try {
            await element.waitForSelected({ timeout });
            return true;
        } catch (error) {
            Logger.debug(`Element ${this.name} is not selected within the timeout.`);
            return false;
        }
    }

}

export default BaseElement;



