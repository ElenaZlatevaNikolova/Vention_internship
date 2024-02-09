import BaseForm from "../framework/BaseForm.js";
import Label from "../framework/elements/Label.js";
import TextBox from "../framework/elements/TextBox.js";
import Browser from "../framework/Browser.js";
import Button from "../framework/elements/Button.js";


class LoginPage extends BaseForm {
    constructor() {
        super("Login page", "//div[@class='login_logo']")
        this.loginPageLogo = new Label("Login page logo", "//div[@class='login_logo']");
        this.usernameField = new TextBox("Username field", "//input[@data-test='username']")
        this.passwordField = new TextBox("Password field", "//input[@data-test='password']")
        this.loginButton = new Button("Login button", "//input[@data-test='login-button']")
        this.infoBlock = new Label("Login credentials Info", "//div[@class='login_credentials_wrap-inner']")
        this.usernamesInfo = new Label("Usernames info block", "#login_credentials")
        this.passwordInfo = new Label("Password info block", "//div[@class='login_password']")
        this.loginErrorMessage = new Label("Login error message", "//h3[@data-test='error']")
        this.usernameErrorIcon = new Label('Username error icon', '//div[@class="login-box"]//div[1]//*[name()="svg"]');
        this.passwordErrorIcon = new Label('Password error icon', '//div[@class="login-box"]//div[2]//*[name()="svg"]');
        this.closeErrorMessageButton = new Button("Close error message button", "//button[@class='error-button']")
    }

    async openLoginPage() {
               await Browser.navigateTo("https://www.saucedemo.com/")
    }

    async getLoginLogoText() {
               return this.loginPageLogo.getText();
    }

    async isUsernameFieldDisplayed() {
              return this.usernameField.isDisplayed();
    }

    async isPasswordFieldDisplayed() {
               return this.passwordField.isDisplayed();
    }

    async isLoginButtonDisplayed() {
               return this.loginButton.isDisplayed();
    }

    async isLoginButtonEnabled() {
               return this.loginButton.isEnabled();
    }

    async isInfoBlockDisplayed() {
             return this.infoBlock.isDisplayed();
    }

    async getUsernamePlaceholder() {
               return this.usernameField.getAttribute("placeholder");
    }

    async getPasswordPlaceholder() {
               return this.passwordField.getAttribute("placeholder");
    }

    async getLoginButtonText() {
              return this.loginButton.getValue();
    }

    async getLoginButtonColor() {
               return this.loginButton.getCssProperty('background-color');
    }

    async getUsernamesBlockText (){
        return this.usernamesInfo.getText();
    }

   
    async getPasswordInfoText() {
               return this.passwordInfo.getText();
    }

    
// async getPasswordToString() {
//     const passwordText = passwordText.split(":\n");
//     return passwordText[1];

// }
       
    async typeUsername(username) {
              await this.usernameField.typeText(username);
    }

    async typePassword(password) {
              await this.passwordField.typeText(password);
    }

    async clickLoginButton() {
              await this.loginButton.click();
    }

    async isLoginErrorMessageDisplayed() {
              return this.loginErrorMessage.isDisplayed();
    }

    async isUsernameErrorIconDisplayed() {
              return this.usernameErrorIcon.isDisplayed()
    }

    async isPasswordErrorIconDisplayed() {
               return this.passwordErrorIcon.isDisplayed()
    }

    async clickCloseErrorMessageButton() {
              await this.closeErrorMessageButton.click()
    }


}



export default LoginPage;