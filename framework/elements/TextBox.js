import BaseElement from "./BaseElement.js";

class TextBox extends BaseElement {
  constructor(name, selector) {
    super(name, selector);
  }

  async clear() {
    const element = await super.getElement();
    await element.clearValue();
  }

  async typeText(text) {
    const element = await super.getElement();
    await element.setValue(text);
  }

  async addText(text) {
    const element = await super.getElement();
    await element.addValue(text);
  }

  async getPlaceholder() {
    const element = await super.getElement();
    return await element.getAttribute('placeholder');
  }
}

export default TextBox;
