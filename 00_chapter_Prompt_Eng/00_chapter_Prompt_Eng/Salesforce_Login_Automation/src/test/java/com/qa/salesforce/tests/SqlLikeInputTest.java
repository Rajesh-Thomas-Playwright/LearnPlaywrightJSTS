package com.qa.salesforce.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.qa.salesforce.base.BaseTest;

public class SqlLikeInputTest extends BaseTest {

    @Test(description = "TC-LOGIN-10: SQL-like input does not bypass authentication")
    public void sqlLikeInputDoesNotAuthenticate() {
        String[][] inputs = {
                {"' OR '1'='1", "' OR '1'='1"},
                {"admin'--", "x"}
        };
        for (String[] input : inputs) {
            loginPage.open(baseUrl(), locale())
                    .enterUsername(input[0])
                    .enterPassword(input[1])
                    .clickLogin();
            Assert.assertTrue(loginPage.isOnLoginPage(),
                    "User must remain on the login page for SQL-like username: " + input[0]);
        }
    }
}
