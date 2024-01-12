import { browser, $ } from '@wdio/globals';
import { assert } from 'chai';


describe('Validation of elements on the landing page of https://www.saucedemo.com/', () => {

    it('should navigate to the site and check if the logo, login button, username and password fields are present', async () => {
        await browser.url('https://www.saucedemo.com/');


        // Check that Swag Labs text is present
const pageLogo = await $("//div[@class='login_logo']");
const logoText = await pageLogo.getText();
const expectedText = "Swag Labs"; 

assert.equal(logoText, expectedText, "Logo text doesn't match");

        // Check that username field is present

        e
        // Check that password fields is present
        // Check the Login 
        // Check the credentials info block


        // // Locate the context menu
        // const contextMenu = await $('//div[@id="hot-spot"]');

        // // Right-click on the element
        // await contextMenu.click({ button: 2, skipRelease: true })

        // // Wait for the alert to appear
        // await browser.waitUntil(async () => {
        //     return await browser.isAlertOpen();
        // });

        // // Validate the alert text 
        // const alertText = await browser.getAlertText();
        // assert.equal(alertText, 'You selected a context menu', "The text doesn't match");

        // // Accept the alert
        // await browser.acceptAlert();
    });



})