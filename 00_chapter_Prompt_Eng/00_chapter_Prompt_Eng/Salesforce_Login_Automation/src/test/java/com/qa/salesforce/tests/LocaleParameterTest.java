package com.qa.salesforce.tests;

import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.Test;

import com.qa.salesforce.base.BaseTest;

public class LocaleParameterTest extends BaseTest {

    @Test(description = "TC-LOGIN-08: Login page loads with the locale parameter")
    public void loginPageLoadsWithLocaleParameter() {
        loginPage.open(baseUrl(), locale());
        Assert.assertTrue(loginPage.isLoginButtonDisplayed(),
                "Login button must be displayed with locale " + locale());
        Assert.assertTrue(loginPage.isUsernameFieldEnabled(),
                "Username field must be usable with locale " + locale());
        Assert.assertTrue(loginPage.getPageTitle().contains("Login"),
                "Page title must indicate the login page but was: " + loginPage.getPageTitle());
        String localizedLang = loginPage.getHtmlLang();
        String localizedTitle = loginPage.getPageTitle();

        loginPage.open(baseUrl(), null);
        Assert.assertTrue(loginPage.isLoginButtonDisplayed(),
                "Login button must be displayed without the locale parameter");

        Reporter.log("Observed with locale " + locale() + ": lang=" + localizedLang + ", title=" + localizedTitle, true);
        Reporter.log("Observed without locale: lang=" + loginPage.getHtmlLang() + ", title=" + loginPage.getPageTitle(), true);
    }
}
