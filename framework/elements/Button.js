const BaseElement = require('./BaseElement');

class Button extends BaseElement {
    constructor(name, selector) {
        super(name, selector);
    }

    click() {
        super.findElement().click();
    }

    doubleClick() {
        const element = super.findElement();
        element.doubleClick();
    }

    rightClick() {
        const element = super.findElement();
        element.click({ button: 'right' });
    }

}

module.exports = Button;
