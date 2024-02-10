import Logger from "./logConfiguration/Logger.js";
class Browser {

  async navigateTo(url) {
    Logger.debug(`Navigating to ${url}`);
    await browser.url(url);
    return url;
  }

  async getCurrentUrl() {
    Logger.debug('Getting current URL')
    const currentUrl = await browser.getUrl();
    Logger.debug(`Current URL is ${currentUrl} `)
    return currentUrl;
  }

  async getPageTitle() {
    Logger.debug('Getting page title')
    pageTitle = browser.getTitle();
    Logger.debug(`Page title is ${pageTitle}`);
    return pageTitle;
  }

  async refreshPage() {
    Logger.debug('Refresh current page')
    await browser.refresh();
  }

  async switchToFrame(frame) {
    Logger.debug(`Switching to frame ${frame}`)
    await browser.switchToFrame(frame);
  }

  async switchToDefaultContent() {
    Logger.debug('Switching to default content')
    await browser.switchToFrame(null);
  }

  async acceptAlert() {
    Logger.debug('Accepting alert')
    await browser.acceptAlert();
  }

  async dismissAlert() {
    Logger.debug('Dismissing alert')
    await browser.dismissAlert();
  }

  async getAlertText() {
    Logger.debug('Get alert text')
    const alertText = browser.getAlertText();
    Logger.debug(`alert text is ${alertText}`);
    return alertText;
  }

  async close() {
    Logger.debug('Closing window')
    await browser.closeWindow();
  }
}

export default new Browser;
