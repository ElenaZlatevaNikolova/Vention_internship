const BaseElement = require('./BaseElement');

class Label extends BaseElement {
    constructor(name, selector) {
        super(name, selector);
    }
}

module.exports = Label;