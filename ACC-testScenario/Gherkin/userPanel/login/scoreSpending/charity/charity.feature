Feature: Charity Page
  As a logged-in user, I want to interact with the Charity page so that I can view and contribute to charitable causes using my points.

  Background:
    Given the user is logged in with valid credentials
    And the user is on the Charity page at "https://club.farazpardazan.com/home/spending/charity"
    And the user has "6883" available points

  Scenario: View charity page and available causes
    When the user views the Charity page
    Then the user should see a list of charity causes including:
      | تست نیکوکاری 22 | امتیاز مورد نیاز: 100 |
      | خیریه رعد       | حمایت انجام شد        |

    And the user should see the "تست نیکوکاری 22" and "خیریه رعد" as clickable cards

  Scenario: Contribute points to a charity cause
    Given the user has "6883" available points
    When the user clicks on the "تست نیکوکاری 22" card
    Then a popup should appear with the charity details
    And the popup should display "امتیاز مورد نیاز: 100"
    And the popup should have an input field for "امتیاز اهدایی من"
    And the "حمایت" button should be disabled initially
    When the user enters "50" in the "امتیاز اهدایی من" field
    Then the "حمایت" button should be enabled
    When the user clicks the "حمایت" button
    Then the user should see a message "این قابلیت در حال توسعه می باشد"
    And the points should not be deducted

  Scenario: Attempt to contribute invalid points to a charity
    Given the user has "6883" available points
    When the user clicks on the "تست نیکوکاری 22" card
    Then a popup should appear with the charity details
    When the user enters "0" in the "امتیاز اهدایی من" field
    Then the "حمایت" button should remain disabled
    When the user clears the "امتیاز اهدایی من" field
    Then the "حمایت" button should remain disabled
    And the user should see an error message "لطفاً امتیاز اهدایی معتبر وارد کنید"

  Scenario: View completed charity contributions
