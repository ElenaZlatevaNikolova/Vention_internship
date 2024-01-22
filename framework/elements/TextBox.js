const BaseElement = require('./BaseElement');

class TextBox extends BaseElement {
  constructor(name, selector) {
    super(name, selector);
  }

  clear() {
    const element = super.findElement();
    element.clearValue();
  }

  typeText(text) {
    const element = super.findElement();
    element.setValue(text);
  }

  getPlaceholder() {
    const element = super.findElement();
    return element.getAttribute('placeholder');
  }

  isEmpty() {
    const element = super.findElement();
    return element.getValue() === '';
  }
}

module.exports = TextBox;
