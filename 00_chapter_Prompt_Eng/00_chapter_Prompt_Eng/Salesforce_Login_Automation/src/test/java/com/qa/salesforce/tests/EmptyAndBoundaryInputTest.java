package com.qa.salesforce.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.qa.salesforce.base.BaseTest;

public class EmptyAndBoundaryInputTest extends BaseTest {

    private static final int BOUNDARY_LENGTH = 255;

    @Test(description = "TC-LOGIN-04: Empty fields and boundary input do not authenticate the user")
    public void emptyAndBoundaryInputDoesNotAuthenticate() {
        String[][] inputs = {
                {"", "", "both fields empty"},
                {" ", " ", "single space in both fields"},
                {"a".repeat(BOUNDARY_LENGTH), "b".repeat(BOUNDARY_LENGTH), BOUNDARY_LENGTH + " characters in both fields"}
        };
        for (String[] input : inputs) {
            loginPage.open(baseUrl(), locale())
                    .enterUsername(input[0])
                    .enterPassword(input[1])
                    .clickLogin();
            Assert.assertTrue(loginPage.isOnLoginPage(),
                    "User must remain on the login page for input: " + input[2]);
        }
    }
}
