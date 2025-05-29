Feature: Gift to Friend Popup
  As a logged-in user, I want to use the Gift to Friend popup to send points to another customer.

  Background:
    Given the user is logged in with valid credentials
    And the user is on the account page
    And the user clicks on the "هدیه به دوست" section
    And a popup appears with fields for customer number and points

  Scenario: Enable continue button with valid input
    When the user enters a valid customer number in the "شماره مشتری" field
    And the user enters a valid number of points in the "تعداد امتیاز" field
    Then the "ادامه" button should be enabled
    When the user clicks the "ادامه" button
    Then the user should see a message "..."
@edgeCase
  Scenario: Continue button remains disabled with incomplete input
    When the user enters a valid customer number in the "شماره مشتری" field
    And the "تعداد امتیاز" field is left empty
    Then the "ادامه" button should be disabled
    When the user enters a valid number of points in the "تعداد امتیاز" field
    And the "شماره مشتری" field is left empty
    Then the "ادامه" button should be disabled