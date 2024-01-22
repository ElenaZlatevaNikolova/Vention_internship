class BaseElement {
    constructor(name, selector) {
        this.name = name;
        this.selector = selector;
    }

    findElement() {
        return browser.$(this.selector);
    }

    findElements() {
        return browser.$$(this.selector);
    }

    moveTo() {
        const element = this.findElement();
        element.moveTo();
    }

    isDisplayed() {
        const element = this.findElement();
        return element.isDisplayed();
    }

    isExisting() {
        const element = this.findElement();
        return element.isExisting();
    }

    isEnabled() {
        const element = this.findElement();
        return element.isEnabled();
    }

    isSelected() {
        const element = this.findElement();
        return element.isSelected();
    }

    getCssProperty(propertyName) {
        const element = this.findElement();
        return element.getCSSProperty(propertyName).value;
    }

    scrollIntoView() {
        const element = this.findElement();
        element.scrollIntoView();
    }

    getText() {
        const element = this.findElement();
        return element.getText();
    }

    getValue() {
        const element = this.findElement();
        return element.getValue();
    }

    getAttribute(attributeName) {
        const element = this.findElement();
        return element.getAttribute(attributeName);
    }

    dragAndDrop(targetSelector) {
        const sourceElement = this.findElement();
        const targetElement = browser.$(targetSelector);
        sourceElement.dragAndDrop(targetElement);
    }
}

module.exports = BaseElement;



