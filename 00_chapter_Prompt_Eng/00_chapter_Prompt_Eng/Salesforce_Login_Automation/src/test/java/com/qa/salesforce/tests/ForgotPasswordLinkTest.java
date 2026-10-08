package com.qa.salesforce.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.qa.salesforce.base.BaseTest;

public class ForgotPasswordLinkTest extends BaseTest {

    @Test(description = "TC-LOGIN-06: Forgot password link opens the reset request page")
    public void forgotPasswordLinkOpensResetRequestPage() {
        loginPage.open(baseUrl(), locale());
        Assert.assertTrue(loginPage.isForgotPasswordLinkDisplayed(),
                "Forgot password link must be displayed on the login page");
        Assert.assertTrue(loginPage.openForgotPassword(),
                "Clicking the link must open a forgot password page, but the URL was: " + loginPage.getCurrentUrl());
    }
}
