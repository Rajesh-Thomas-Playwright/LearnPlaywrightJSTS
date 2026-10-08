package com.qa.salesforce.base;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;

import com.qa.salesforce.pages.SalesforceLoginPage;

public abstract class BaseTest {

    private static final ThreadLocal<String> BROWSER = new ThreadLocal<>();
    private static final String DEFAULT_BASE_URL = "https://login.salesforce.com/";
    private static final String DEFAULT_LOCALE = "in";
    private static final long DEFAULT_TIMEOUT_SECONDS = 15;
    private static final long PAGE_LOAD_TIMEOUT_SECONDS = 30;

    protected WebDriver driver;
    protected SalesforceLoginPage loginPage;

    @Parameters({"browser"})
    @BeforeTest(alwaysRun = true)
    public void configureBrowser(@Optional("chrome") String browser) {
        if (browser == null || browser.isBlank()) {
            throw new IllegalArgumentException("The browser parameter must not be blank");
        }
        BROWSER.set(browser.trim().toLowerCase());
    }

    @BeforeMethod(alwaysRun = true)
    public void setUp() {
        driver = createDriver(BROWSER.get(), Boolean.parseBoolean(System.getProperty("headless", "false")));
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(PAGE_LOAD_TIMEOUT_SECONDS));
        driver.manage().window().maximize();
        loginPage = new SalesforceLoginPage(driver, timeoutSeconds());
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() {
        if (driver == null) {
            return;
        }
        try {
            driver.quit();
        } catch (WebDriverException e) {
            throw new IllegalStateException("Failed to close the browser session", e);
        } finally {
            driver = null;
            loginPage = null;
        }
    }

    protected String baseUrl() {
        return System.getProperty("sf.baseUrl", DEFAULT_BASE_URL);
    }

    protected String locale() {
        return System.getProperty("sf.locale", DEFAULT_LOCALE);
    }

    protected String browserName() {
        return BROWSER.get();
    }

    private long timeoutSeconds() {
        String value = System.getProperty("explicit.timeout", String.valueOf(DEFAULT_TIMEOUT_SECONDS));
        try {
            return Long.parseLong(value.trim());
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException("explicit.timeout must be a whole number of seconds but was: " + value, e);
        }
    }

    private WebDriver createDriver(String browser, boolean headless) {
        if (browser == null) {
            throw new IllegalStateException("Browser was not configured for this test");
        }
        try {
            switch (browser) {
                case "chrome":
                    ChromeOptions chromeOptions = new ChromeOptions();
                    if (headless) {
                        chromeOptions.addArguments("--headless=new");
                    }
                    return new ChromeDriver(chromeOptions);
                case "firefox":
                    FirefoxOptions firefoxOptions = new FirefoxOptions();
                    if (headless) {
                        firefoxOptions.addArguments("-headless");
                    }
                    return new FirefoxDriver(firefoxOptions);
                default:
                    throw new IllegalArgumentException("Unsupported browser: " + browser);
            }
        } catch (WebDriverException e) {
            throw new IllegalStateException("Unable to start the " + browser + " browser", e);
        }
    }
}
