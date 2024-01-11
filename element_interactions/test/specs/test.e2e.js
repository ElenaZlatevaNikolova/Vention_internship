// import { browser, $ } from '@wdio/globals';
import { assert } from 'chai';
import * as path from 'path'
import * as fs from 'node:fs'


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

    it('should upload a file', async () => {

        await browser.url('http://the-internet.herokuapp.com/upload');


        const chooseFileButton = $('#file-upload');
        const submitFileButton = $('#file-submit');

        // Upload file  

        const filePath = 'C:\\Vention\\Vention_internship\\element_interactions\\test\\specs\\testFile.txt'
        const remoteFilePath = await browser.uploadFile(filePath)

        await chooseFileButton.setValue(remoteFilePath)
        await submitFileButton.click()


        // Verify that the file has been uploaded
        const successMessage = $('//h3[text()="File Uploaded!"]');
        await successMessage.waitForDisplayed();

        // Verify that the uploaded file name matches the expected file name
        const uploadedFileName = await $('//div[@id="uploaded-files"]').getText();
        assert.equal(uploadedFileName, "testFile.txt", 'Uploaded file name does not match');
    });

    it('should verify iFrame content', async () => {
        await browser.url('http://the-internet.herokuapp.com/frames');

        // Switch to the iframe
        const iframeLink = $("//a[text()='iFrame']");
        await iframeLink.click();
        const iframe = await $('iframe')
        await browser.switchToFrame(iframe);

        // Assert the text of element
        const iframeTextLocator = $("//p");
        const iframeText = await iframeTextLocator.getText();
        const expectedText = 'Your content goes here.';
        assert.equal(iframeText, expectedText, "Text doesn't match");
    });


    it.only('should download and verify file', async () => {

        await browser.url(`https://the-internet.herokuapp.com/download`);
        const links = await $$('//a');
        const extensions = ['.jpg', '.txt', '.png', '.json'];
        const allowedLinks = [];

        for (const link of links) {
            const name = await link.getText();
            allowedLinks.push(name);
        }


        const filteredLinks = allowedLinks.filter(linkName => {
            for (const extension of extensions) {
                if (linkName.endsWith(extension)) {
                    return true;
                }
                else { return false; }
            }

        });


        assert.isTrue(filteredLinks.length > 0)

        const randomIndex = Math.floor(Math.random() * filteredLinks.length);
        const pickedLink = filteredLinks[randomIndex];
        const currentDirectory = process.cwd()

        const randomFile = await $(`//a[contains(text(),'${pickedLink}')]`)
        const pathToRandomFile = path.join(currentDirectory, `${pickedLink}`);
        await randomFile.click();


        await browser.waitUntil(async () => {
            const confirmDownload = fs.existsSync(pathToRandomFile);
            return confirmDownload

        })
        const confirmDownload = fs.existsSync(pathToRandomFile)

        assert.isTrue(confirmDownload, "File not found");


    })




})


