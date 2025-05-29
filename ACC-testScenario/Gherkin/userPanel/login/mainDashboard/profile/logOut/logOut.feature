Feature: User Logout
  As a logged-in user, I want to log out of the web application so that I can securely end my session.

  Background:
    Given the user is logged in with valid credentials
    And the user is on the account page "https://club.farazpardazan.com/profile"

  Scenario: Successful logout with confirmation
    When the user clicks the "خروج از برنامه" button
    Then the user should see a popup with the message "آیا مایلید خارج شوید؟"
    And the popup should display "بله" and "خیر" options
    When the user clicks the "بله" option
    Then the user should be logged out
    And the user should be redirected to the login page
    And the user should see a message "شما با موفقیت خارج شدید"

  Scenario: Cancel logout
    When the user clicks the "خروج از برنامه" button
    Then the user should see a popup with the message "آیا مایلید خارج شوید؟"
    And the popup should display "بله" and "خیر" options
    When the user clicks the "خیر" option
    Then the popup should close
    And the user should remain logged in
    And the user should stay on the account page