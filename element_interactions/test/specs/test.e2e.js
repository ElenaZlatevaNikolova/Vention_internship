// import { browser, $ } from '@wdio/globals';
import { assert } from 'chai';
// const assert = require('assert');


describe('Interaction with various web elements', () => {

    it('should right-click on the context menu, validate the alert text, and dismiss the alert', async () => {
        await browser.url('http://the-internet.herokuapp.com/context_menu');

        // Locate the context menu
        const contextMenu = await $('//div[@id="hot-spot"]');

        // Right-click on the element
        await contextMenu.click({ button: 2, skipRelease: true })

        // Wait for the alert to appear
        await browser.waitUntil(() => browser.isAlertOpen());

        // Validate the alert text 
        const alertText = await browser.getAlertText();
        assert.equal(alertText, 'You selected a context menu', "The text doesn't match");

        // Accept the alert
        await browser.acceptAlert();


    });

    it('should remove element and enable text field', async () => {
        // Open the URL in Chrome
        await browser.url('http://the-internet.herokuapp.com/dynamic_controls');

        // Locate the "Remove" button and click it
        const removeButton = $('//button[text()="Remove"]');
        await removeButton.click();

        // Wait for the "It's gone!" text to appear
        const goneText = $('//p[text()="It\'s gone!"]');
        await goneText.waitForDisplayed();

        // Validate that the text of the element is "It's gone!"
        assert.equal(await goneText.getText(), "It's gone!", "Text doesn't match");

        // Verify that the element with locator //div[@id="checkbox"] is no longer present
        const checkboxElement = $('//div[@id="checkbox"]');
        assert.isFalse(await checkboxElement.isExisting(), "The element is still present");

        // Locate the input field
        const inputField = $('//input[@type="text"]');

        // Verify it's disabled
        let isEnabled = inputField.isEnabled();
        // assert.equal(isEnabled, false, "Element not disabled")
        assert.isFalse(await isEnabled, "Element is not disabled");

        // Enable it
        let enableDisableButton = $('//form[@id="input-example"]/button[@type="button"]')
        await enableDisableButton.click();

        // Verify the enable text
        const enabledText = $('//p[text()="It\'s enabled!"]');
        assert.equal(await enabledText.getText(), "It's enabled!", "Text doesn't match");

        // Assert the input field is enabled
        // assert.equal(isEnabled, true, "Input field not enabled")
        isEnabled = inputField.isEnabled();
        assert.isTrue(await isEnabled, "The field is still disabled!");

        // assert.equal(enableDisableButton.getText(), 'Disable', "Input field not enabled" );


    });

    
    it('should verify iFrame content', async () => {
        await browser.url('http://the-internet.herokuapp.com/iframe');
    
        const getDocumentText = () => browser.executeScript(
            'return document.documentElement.outerText',
            []
        );
    
      expect(await getDocumentText()).toContain('An iFrame containing the TinyMCE WYSIWYG Editor');
    
        // Switch to the iframe
        const iframe = await browser.$('iframe');
        await browser.switchToFrame(iframe);
    
       await browser.pause(1000);
    
        // Assert that the content inside the iframe contains "Your content goes here."
        const iframeText = await getDocumentText();
        const expectedText = 'Your content goes here.';
        assert.equal(iframeText, expectedText, `Actual text inside the iframe: ${iframeText}`);
    });

   


})


