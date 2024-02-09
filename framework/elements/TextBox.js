import BaseElement from "./BaseElement.js";
import Logger from "../logConfiguration/Logger.js";



class TextBox extends BaseElement {
  
  constructor(name, selector) {
    super(name, selector);
  }

  async clear() {
    Logger.debug(`Clear value of ${this.name}`)
        const element = await super.getElement();
    await element.clearValue();
  }

  async typeText(text) {
  Logger.debug(`Type ${text} in ${this.name}`)
    const element = await super.getElement();
    await element.setValue(text);
  }

  async addText(text) {
    Logger.debug(`Add text ${text} to ${this.name}`)
    const element = await super.getElement();
    await element.addValue(text);
  }

  async getPlaceholder() {
    Logger.debug(`Get placeholder of ${this.name}`)
    const element = await super.getElement();
    const placeholder = element.getAttribute('placeholder');
    return placeholder;
  }
}

export default TextBox;
