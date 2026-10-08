package com.qa.salesforce.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.qa.salesforce.base.BaseTest;

public class UnknownUsernameLoginTest extends BaseTest {

    private static final String UNKNOWN_USERNAME = "no.such.user@example.invalid";
    private static final String MALFORMED_USERNAME = "not-an-email";
    private static final String SYNTHETIC_PASSWORD = "SomePass#2026";

    @Test(description = "TC-LOGIN-03: Unknown or malformed username is rejected")
    public void unknownAndMalformedUsernamesAreRejected() {
        String[] usernames = {UNKNOWN_USERNAME, MALFORMED_USERNAME};
        for (String username : usernames) {
            loginPage.open(baseUrl(), locale())
                    .enterUsername(username)
                    .enterPassword(SYNTHETIC_PASSWORD)
                    .clickLogin();
            Assert.assertTrue(loginPage.isOnLoginPage(),
                    "User must remain on the login page after submitting username: " + username);
            Assert.assertTrue(loginPage.isLoginButtonDisplayed(),
                    "Login button must be displayed, so no authenticated state exists, for username: " + username);
        }
    }
}
