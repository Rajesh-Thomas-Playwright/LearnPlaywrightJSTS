package com.qa.salesforce.pages;

import java.time.Duration;

import org.openqa.selenium.JavascriptException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SalesforceLoginPage {

    private static final String LOGIN_HOST = "login.salesforce.com";
    private static final String RELOAD_MARKER = "data-qa-reload-marker";

    private final WebDriver driver;
    private final WebDriverWait wait;

    @FindBy(xpath = "//input[@id='username']")
    private WebElement usernameField;

    @FindBy(xpath = "//input[@id='password']")
    private WebElement passwordField;

    @FindBy(xpath = "//input[@id='Login']")
    private WebElement loginButton;

    @FindBy(xpath = "//input[@id='rememberUn']")
    private WebElement rememberMeCheckbox;

    @FindBy(xpath = "//a[@id='forgot_password_link']")
    private WebElement forgotPasswordLink;

    @FindBy(xpath = "//*[@id='error']")
    private WebElement errorBanner;

    @FindBy(xpath = "//html")
    private WebElement htmlRoot;

    public SalesforceLoginPage(WebDriver driver, long timeoutSeconds) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(timeoutSeconds));
        PageFactory.initElements(driver, this);
    }

    public SalesforceLoginPage open(String baseUrl, String locale) {
        String url = (locale == null || locale.isBlank()) ? baseUrl : baseUrl + "?locale=" + locale;
        try {
            driver.get(url);
        } catch (WebDriverException e) {
            throw new IllegalStateException("Unable to open " + url, e);
        }
        waitVisible(loginButton, "Login button");
        return this;
    }

    public SalesforceLoginPage enterUsername(String username) {
        enterText(usernameField, "Username field", username);
        return this;
    }

    public SalesforceLoginPage enterPassword(String password) {
        enterText(passwordField, "Password field", password);
        return this;
    }

    public SalesforceLoginPage clickLogin() {
        waitVisible(loginButton, "Login button");
        markPageForReloadDetection();
        try {
            wait.until(ExpectedConditions.elementToBeClickable(loginButton)).click();
        } catch (TimeoutException e) {
            throw new IllegalStateException("Login button was not clickable within timeout", e);
        }
        waitForReload();
        waitVisible(loginButton, "Login button after reload");
        return this;
    }

    public boolean isOnLoginPage() {
        try {
            return loginButton.isDisplayed() && driver.getCurrentUrl().contains(LOGIN_HOST);
        } catch (NoSuchElementException | StaleElementReferenceException e) {
            return false;
        }
    }

    public boolean isLoginButtonDisplayed() {
        return isDisplayed(loginButton);
    }

    public boolean isUsernameFieldEnabled() {
        return waitVisible(usernameField, "Username field").isEnabled();
    }

    public boolean isRememberMeDisplayed() {
        return isDisplayed(rememberMeCheckbox);
    }

    public boolean isErrorBannerDisplayed() {
        return isDisplayed(errorBanner);
    }

    public boolean isForgotPasswordLinkDisplayed() {
        return isDisplayed(forgotPasswordLink);
    }

    public boolean openForgotPassword() {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(forgotPasswordLink)).click();
        } catch (TimeoutException e) {
            throw new IllegalStateException("Forgot password link was not clickable within timeout", e);
        }
        try {
            return wait.until(ExpectedConditions.urlContains("forgotpassword"));
        } catch (TimeoutException e) {
            return false;
        }
    }

    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }

    public String getPageTitle() {
        return driver.getTitle();
    }

    public String getHtmlLang() {
        return htmlRoot.getAttribute("lang");
    }

    private WebElement waitVisible(WebElement element, String name) {
        try {
            return wait.until(ExpectedConditions.visibilityOf(element));
        } catch (TimeoutException e) {
            throw new IllegalStateException(name + " was not visible within timeout", e);
        }
    }

    private void enterText(WebElement element, String name, String text) {
        if (text == null) {
            throw new IllegalArgumentException("Text for " + name + " must not be null");
        }
        WebElement visible = waitVisible(element, name);
        visible.clear();
        visible.sendKeys(text);
    }

    private boolean isDisplayed(WebElement element) {
        try {
            return element.isDisplayed();
        } catch (NoSuchElementException | StaleElementReferenceException e) {
            return false;
        }
    }

    private void markPageForReloadDetection() {
        try {
            ((JavascriptExecutor) driver).executeScript(
                    "document.documentElement.setAttribute(arguments[0], '1');", RELOAD_MARKER);
        } catch (JavascriptException e) {
            throw new IllegalStateException("Unable to mark the page for reload detection", e);
        }
    }

    private void waitForReload() {
        try {
            wait.ignoring(JavascriptException.class).until(d -> ((JavascriptExecutor) d).executeScript(
                    "return document.documentElement.getAttribute(arguments[0]);", RELOAD_MARKER) == null);
        } catch (TimeoutException e) {
            throw new IllegalStateException("Page did not reload after submitting the login form", e);
        }
    }
}
