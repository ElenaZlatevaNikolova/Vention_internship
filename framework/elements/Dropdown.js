import BaseElement from "./BaseElement.js";
import Logger from "../logConfiguration/Logger.js";

class Dropdown extends BaseElement {
    constructor(name, selector) {
        super(name, selector);
    }

    async selectByVisibleText(text) {
        Logger.debug(`Selecting from dropdown menu ${this.name} by option ${text}`)
        const dropdownMenu = await this.getElement(this.selector);
        dropdownMenu.click();
        await dropdownMenu.selectByVisibleText(text);

    }

}

export default Dropdown;