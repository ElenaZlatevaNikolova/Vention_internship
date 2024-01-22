class Browser {


  constructor() {
    this.browser = browser;
  }

  navigateTo(url) {
    this.browser.url(url);
  }

  getCurrentUrl() {
    return this.browser.getUrl();
  }

  getPageTitle() {
    return this.browser.getTitle();
  }

  findElement(selector) {
    return this.browser.$(selector);
  }

  waitForElement(selector, timeout = 5000) {
    const element = this.findElement(selector);
    element.waitForExist({ timeout });
  }

  refreshPage() {
    browser.refresh();
  }

   switchToFrame(frame) {
    browser.switchToFrame(frame);
  }

  switchToDefaultContent() {
    browser.switchToFrame(null); 
  }

   acceptAlert() {
    browser.acceptAlert();
  }

    dismissAlert() {
    browser.dismissAlert();
  }

   getAlertText() {
    return browser.getAlertText();
  }

  close() {
    this.browser.closeWindow();
  }
}

module.exports = Browser;
