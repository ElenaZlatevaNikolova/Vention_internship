class Browser {

  async navigateTo(url) {
    await this.browser.url(url);
  }

  async getCurrentUrl() {
    return browser.getUrl();
  }

  async getPageTitle() {
    return browser.getTitle();
  }

  async getElement(selector) {
    return browser.$(selector);
  }

  async getElements(selector) {
    return browser.$$(selector);
  }

  async refreshPage() {
    await browser.refresh();
  }

  async switchToFrame(frame) {
    await browser.switchToFrame(frame);
  }

  async switchToDefaultContent() {
    await browser.switchToFrame(null);
  }

  async acceptAlert() {
    await browser.acceptAlert();
  }

  async dismissAlert() {
    await browser.dismissAlert();
  }

  async getAlertText() {
    return browser.getAlertText();
  }

  async close() {
    await this.browser.closeWindow();
  }
}

export default Browser;
