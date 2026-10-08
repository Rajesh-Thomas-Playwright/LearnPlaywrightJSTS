# Test Plan: Salesforce Login

Generated with the RICE POT Generic QA Template (Profile B — Test plan). This is a plan only. No test has been executed. All requirement IDs are locally assigned and proposed; none come from Salesforce.

## 1. Test Plan ID and Title

| Field | Value |
| --- | --- |
| Plan ID | TP-SFDC-LOGIN-001 |
| Title | Salesforce Login — Functional, Negative and Boundary Test Plan |
| Status | Draft, approved for creation; thresholds and schedule are proposals |
| Author / Owner | Rajesh (sole owner, proposed) |
| Date | 2026-10-04 |

## 2. Objective and References

**Objective:** Verify the behavior of the Salesforce login page across the in-scope areas using manual execution first, then Selenium 4 + Java + TestNG automation.

**References**
- Login URL: `https://login.salesforce.com/?locale=in`
- Template: `04_RICE_POT_Generic_QA_Template.md` (Profile B)
- Written requirements or acceptance criteria: **Not provided**

## 3. In Scope and Out of Scope

**In scope:** valid login, invalid password, invalid or unknown username, empty fields and boundary input, Remember Me, forgot password link and flow, MFA/SSO behavior, `?locale=in` page behavior, logout, SQL-like input and lockout observation (as negative cases).

**Out of scope:** performance and load testing, penetration testing, accessibility audits, regression as a separate test type, Edge and other browsers, mobile devices, account registration, post-login Salesforce application features.

## 4. Requirements and Planned Coverage

All IDs are locally assigned and proposed.

| Req ID | Area | Test types | Planned coverage | Blocked by missing account? |
| --- | --- | --- | --- | --- |
| REQ-LOGIN-01 | Valid login | Functional | Provisioned user reaches an authenticated state | Yes |
| REQ-LOGIN-02 | Invalid password | Negative | Wrong password does not authenticate | Partly (can run with an unknown username until an account exists) |
| REQ-LOGIN-03 | Invalid or unknown username | Negative | Unknown or malformed username does not authenticate | No |
| REQ-LOGIN-04 | Empty fields and boundary input | Negative, Boundary | Empty fields, whitespace, maximum length, special characters | No |
| REQ-LOGIN-05 | Remember Me | Functional | Option is present and its effect on username persistence is observed | Yes |
| REQ-LOGIN-06 | Forgot password | Functional | Link is present and opens the reset request page; flow tested up to the reset request | No |
| REQ-LOGIN-07 | MFA / SSO | Functional | Behavior observed when enabled on the account | Yes |
| REQ-LOGIN-08 | Locale `?locale=in` | Functional | Page loads and shows locale-specific language or region elements | No |
| REQ-LOGIN-09 | Logout | Functional | Logout ends the session and protected content is not accessible | Yes |
| REQ-LOGIN-10 | SQL-like input and lockout | Negative | SQL-like input does not bypass authentication; lockout behavior observed | No |

Proposed boundary values for REQ-LOGIN-04 (synthetic):
- Leading and trailing whitespace in username.
- Username at and beyond a long length (for example 80, 255 and 1000 characters; real limits are Not provided).
- Special characters and Unicode in both fields.

Case counts: not fixed. The detailed test cases will be created as a separate deliverable.

## 5. Test Approach, Levels and Types

- **Levels:** manual execution first, then automation of selected cases.
- **Types:** functional, negative, boundary.
- **Automation:** Selenium 4 + Java + TestNG, built on the framework in this repository. Automate first the cases that do not need an account. Account-dependent cases are automated after an account is provisioned.
- **Locators:** current XPaths are unverified and must be confirmed against the live DOM before automation.
- **Synchronization:** condition-based waits only.
- **SQL-like input** shows only that authentication is not bypassed. It does not prove SQL injection protection.
- **Lockout:** observe only; do not repeat failed attempts against a real account.

## 6. Environment, Tools, Access and Test Data

| Item | Detail |
| --- | --- |
| URL | `https://login.salesforce.com/?locale=in` |
| Browsers | Chrome and Firefox, latest stable |
| OS | Windows 11 |
| Tools | Selenium 4, Java, Maven, TestNG (versions to be agreed) |
| Account | **None provisioned (blocking dependency)** |
| Credentials | Supplied through environment variables. Never stored in source, plan or logs. |
| Test data | Synthetic usernames and passwords for negative cases; boundary strings as above |
| MFA state | Unknown |

**Recommendation:** create a free Salesforce Developer Edition org with a test user you control. This unblocks REQ-LOGIN-01, 02 (fully), 05, 07 and 09 and avoids testing against a real production account.

## 7. Entry and Exit Criteria

All criteria are proposals requiring agreement.

**Entry criteria**
- The login page is reachable at the URL.
- Chrome and Firefox are installed.
- Test data is prepared.
- For account-dependent cases: a provisioned account exists (currently not met).

**Exit criteria**
- 100% of planned cases are executed, or each unexecuted case has a recorded reason (for example, blocked by the missing account).
- No open Critical or High defects.
- Every requirement maps to at least one case.
- Every blocked case is listed with its dependency.

## 8. Roles, Responsibilities, Estimates and Schedule

All items are proposed and to be agreed.

| Role | Owner | Responsibility |
| --- | --- | --- |
| Test lead, designer and executor | Rajesh | Plan, cases, manual execution, defect reporting |
| Automation engineer | Rajesh | Selenium framework and scripts |
| Approver | Not provided | Plan sign-off |

Estimates and schedule: Not provided.

## 9. Defect Management and Reporting

- Defects are recorded with ID, title, environment, preconditions, test data, steps to reproduce, expected result, actual result, evidence, and proposed severity and priority.
- Severity and priority are proposed until confirmed by triage.
- Defect tracker and reporting cadence: Not provided. A proposed default is a summary after each execution cycle.

## 10. Risks, Dependencies, Assumptions and Open Questions

**Risks**
- Repeated failed logins can lock a real account.
- Salesforce may change the login page, which breaks locators.
- Automated login against production may trigger bot or rate-limit protections.

**Dependencies**
- A provisioned test account (blocking for REQ-LOGIN-01, 05, 07, 09 and partly 02).
- Verification of locators against the live DOM.

**Assumptions** (proposed)
- Requirement IDs are local, not Salesforce IDs.
- Boundary lengths are illustrative until real limits are confirmed.

**Open questions**
- Exact error messages: Not provided.
- Whether MFA is enabled on the eventual account.
- Test environment choice (Developer Edition org, sandbox or production).
- Final versions of Selenium, Java, Maven and TestNG.
- Schedule, estimates and approver.

## 11. Suspension and Resumption Criteria

**Suspend when**
- The login page is unavailable.
- The test account is locked out.
- A blocking defect in the environment prevents further execution.

**Resume when**
- The page is reachable again.
- The account is unlocked or replaced.
- The environment issue is resolved and confirmed.

## 12. Test Deliverables and Approval

**Deliverables**
- This test plan.
- Test cases for REQ-LOGIN-01 to REQ-LOGIN-10 (Profile C, separate step).
- Selenium + Java + TestNG automation (Profile D, separate step).
- Execution results and defect reports.

**Approval**

| Name | Role | Decision | Date |
| --- | --- | --- | --- |
| Not provided | Approver | Pending | |

## Verification Notes

- This plan was reviewed against the in-scope list, the platform choices and the criteria you accepted.
- No test, build or automation has been run.
- No claim is made about actual Salesforce behavior, error messages or locators.
