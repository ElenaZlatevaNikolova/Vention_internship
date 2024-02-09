
import Logger from "./logConfiguration/Logger.js";
class Browser {


    async navigateTo(url) {
      Logger.debug(`Navigating to ${url}`);
      await browser.url(url);
      Logger.debug(`Page ${url} is navigated`);
      return url;
  }
  

  async getCurrentUrl() {
    Logger.debug ('Getting current URL')
    const currentUrl = await browser.getUrl();
    Logger.debug (`Current URL is ${currentUrl} `)
    return currentUrl;
  }

  async getPageTitle() {
    Logger.debug ('Getting page title')
    pageTitle = browser.getTitle();
    Logger.debug (`Page title is ${pageTitle}`);
    return pageTitle;
  }

  async refreshPage() {
    Logger.debug ('Refresh current page')
    await browser.refresh();
  }

  async switchToFrame(frame) {
    Logger.debug (`Switching to frame ${frame}`)
    await browser.switchToFrame(frame);
  }

  async switchToDefaultContent() {
   Logger.debug ('Switching to default content')
    await browser.switchToFrame(null);
  }

  async acceptAlert() {
    Logger.debug ('Accepting allert')
    await browser.acceptAlert();
  }

  async dismissAlert() {
    Logger.debug ('Dismissing allert')
    await browser.dismissAlert();
  }

  async getAlertText() {
    Logger.debug ('Get allert text')
    const allertText = browser.getAlertText();
    Logger.debug(`Allert text is ${allertText}`);
    return allertText;
  }

  async close() {
   Logger.debug ('Closing alert')
    await browser.closeWindow();
  }
}

export default new Browser;
