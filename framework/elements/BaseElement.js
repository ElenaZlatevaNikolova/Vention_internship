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
        Logger.debug(`The value of ${element} is ${value}`)
        return value;
    }

    async getAttribute(attributeName) {
        Logger.debug(`Getting the value of attribute ${attributeName}`)
        const element = await this.getElement(this.selector);
        const attributeValue = await element.getAttribute(attributeName);
        Logger.debug(`The value of attribute ${attributeName} of element ${element} is ${attributeValue}`)
        return attributeValue;
    }

    async moveTo() {
        Logger.debug(`Moving element to ${this.name}`)
        const element = await this.getElement(this.selector);
        element.moveTo();
    }

    async isDisplayed() {
        Logger.debug(`Checking if ${this.name} is diplayed`)
        const element = await this.getElement();
        let isDisplayed;
        try {
            isDisplayed = await element.isDisplayed();
        } catch (error) {
            isDisplayed = false;
        }
        Logger.debug(`The result of isDisplayed for ${this.name} is ${isDisplayed}`)
        return isDisplayed;
    }

    async isExisting() {
        Logger.debug(`Checking if ${this.name} exists`)
        const element = await this.getElement(this.selector);
        let isExisting;
        try {
            isExisting = await element.isExisting();
        } catch (error) {
            isExisting = false;
        }
        Logger.debug(`The result of isExisting for ${this.name} is ${isExisting}`)
        return isExisting;
    }

    async isEnabled() {
        Logger.debug(`Checking if ${this.name} is enabled`)
        const element = await this.getElement(this.selector);
        let isEnabled;
        try {
            isEnabled = await element.isEnabled();
        } catch (error) {
            isEnabled = false;
        }
        Logger.debug(`The result of isEnabled for ${this.name} is ${isEnabled}`)
        return isEnabled;
    }

    async isSelected() {
        Logger.debug(`Checking if ${this.name} is selected`)
        const element = await this.getElement(this.selector);
        let isSelected;
        try {
            isSelected = await element.isSelected();
        } catch (error) {
            isSelected = false;
        }
        Logger.debug(`The result of isSelected for ${this.name} is ${isSelected}`)
        return isSelected;
    }

    async getCssProperty(propertyName) {
        Logger.debug(`Getting CSS property ${propertyName} of ${this.name}`)
        const element = await this.getElement(this.selector);
        const cssProperty = await element.getCSSProperty(propertyName);
        Logger.debug(`The CSS property ${propertyName} of ${element} is ${cssProperty}`)
        return cssProperty
    }

    async scrollIntoView() {
        Logger.debug(`Scroll ${this.name} into view`)
        const element = await this.getElement(this.selector);
        element.scrollIntoView();
    }

    async getText() {
        Logger.debug(`Get the text of element ${this.name}`)
        const element = await this.getElement();
        const elementText = await element.getText();
        Logger.debug(`The text of ${element} is ${elementText}`)
        return elementText;
    }

    async dragAndDrop(targetSelector) {
        Logger.debug(`Moving ${this.name} to ${targetSelector}`)
        const sourceElement = await this.getElement(this.selector);
        const targetElement = await browser.$(targetSelector);
        sourceElement.dragAndDrop(targetElement);
    }

    async click() {
        Logger.debug(`Clicking ${this.name}`)
        const element = await this.getElement(this.selector);
        element.click();
    }

    async doubleClick() {
        Logger.debug(`Double click ${this.name}`)
        const element = await this.getElement(this.selector);
        element.doubleClick();
    }

    async rightClick() {
        Logger.debug(`Right click ${this.name}`)
        const element = await this.getElement(this.selector);
        element.click({ button: 'right' });
    }

    async waitForExist(selector, DEFAULT_TIMEOUT) {
        Logger.debug(`Waiting for ${this.name} to exist`)
        const element = await this.getElement(selector);
        element.waitForExist({ DEFAULT_TIMEOUT });
    }

    async waitForDisplayed(selector, DEFAULT_TIMEOUT) {
        Logger.debug(`Waiting for ${this.name} to be displayed`)
        const element = await this.getElement(selector);
        element.waitForDisplayed({ DEFAULT_TIMEOUT });
    }

    async waitForClickable(selector, DEFAULT_TIMEOUT) {
        Logger.debug(`Waiting for ${this.name} to be displayed`)
        const element = await this.getElement(selector);
        element.waitForClickable({ DEFAULT_TIMEOUT });
    }

    async waitForEnabled(selector, DEFAULT_TIMEOUT = 10000) {
        Logger.debug(`Waiting for ${this.name} to be displayed`)
        const element = await this.getElement(selector);
        element.waitForEnabled({ DEFAULT_TIMEOUT });
    }
}

export default BaseElement;



