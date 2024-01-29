class Browser {



  async navigateTo(url) {
    return browser.url(url);
  }

  async getCurrentUrl() {
    return browser.getUrl();
  }

  async getPageTitle() {
    return browser.getTitle();
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
    await browser.closeWindow();
  }
}

export default new Browser;
