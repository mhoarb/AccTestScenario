Feature: User Account Page
  As a logged-in user, I want to view and interact with my account page so that I can manage my account details and actions.

  Background:
    Given the user is logged in with valid credentials
    And the user is on the account page

  Scenario: View user account details
    Given the user has an account with name "حامد میرزایی" and customer number "2546729"
    And the user has "6883" available points
    When the user views the account page
    Then the user should see their name "حامد میرزایی"
    And the user should see their customer number "2546729"
    And the user should see their available points "6883"
    And the user should see the following sections:
      | مشخصات شخصی         |
      | سطح مشتری و امکانات |
      | نظرات ثبت شده      |
      | علاقه مندی ها      |
      | تغییر رمز عبور     |
      | قرعه کشی های من    |
      | هدیه به دوست        |
      | امتیازهای من       |
      | درباره ما          |
      | تماس با ما         |
      | خروج از برنامه      |
    And the user should see the following navigation options:
      | خانه           |
      | خرج امتیاز     |
      | کسب امتیاز     |
      | سابقه تخفیف    |

  Scenario: Attempt to access gift to friend feature
    Given the user is on the account page
    When the user clicks on the "هدیه به دوست" section
    And the user enters a customer number
    And the user enters a number of points to gift
    And the user submits the gift request
    Then the user should see a message "این قابلیت در حال توسعه می باشد"
    And the gift request should not be processed