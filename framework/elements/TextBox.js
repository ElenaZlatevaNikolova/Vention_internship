import BaseElement from "./BaseElement";

class TextBox extends BaseElement {
  constructor(name, selector) {
    super(name, selector);
  }

  async clear() {
    const element = await super.findElement();
    await element.clearValue();
  }

  async typeText(text) {
    const element = await browser.findElement();
    await element.setValue(text);
  }

  async addText(text) {
    const element = await browser.findElement();
    await element.addValue(text);
  }

  async getPlaceholder() {
    const element = await super.findElement();
    return await element.getAttribute('placeholder');
  }
}

export default TextBox;
