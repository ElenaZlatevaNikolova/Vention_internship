import BaseElement from "./BaseElement.js";

class Dropdown extends BaseElement {
    constructor(name, selector) {
        super(name, selector);
    }

    async selectByVisibleText(text) {
        const dropdownMenu = await this.getElement(this.selector);
        dropdownMenu.click();
        await dropdownMenu.selectByVisibleText(text);
        
    }

}

export default Dropdown;