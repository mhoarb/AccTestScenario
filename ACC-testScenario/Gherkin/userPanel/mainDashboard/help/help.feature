Feature: Customer Club Help Page
  As a user, I want to access the Customer Club Help page so that I can understand how to use the club's features and rules.

  Background:
    Given the user is on the Customer Club Help page at "https://club.farazpardazan.com/home/help"

  Scenario: View help page sections
    When the user views the Customer Club Help page
    Then the user should see the following sections:
      | راهنمای کسب امتیاز      |
      | راهنمای خرج امتیاز      |
      | راهنمای تغییر سطوح     |
      | قوانین باشگاه مشتریان   |
      | مقررات و ضوابط         |
      | سوالات متداول          |

  Scenario: Navigate to specific help section
    When the user clicks on the "سوالات متداول" section
    Then the user should be redirected to the FAQ section
    And the user should see a list of frequently asked questions with answers


  Scenario: Navigate to "راهنمای کسب امتیاز" section
    When the user clicks on the "راهنمای کسب امتیاز" section
    Then the user should be redirected to the earn points guide page
    And the user should see information on how to earn points in the customer club

  Scenario: Navigate to "راهنمای خرج امتیاز" section
    When the user clicks on the "راهنمای خرج امتیاز" section
    Then the user should be redirected to the spend points guide page
    And the user should see information on how to spend points in the customer club

  Scenario: Navigate to "راهنمای تغییر سطوح" section
    When the user clicks on the "راهنمای تغییر سطوح" section
    Then the user should be redirected to the level change guide page
    And the user should see information on how to change membership levels

  Scenario: Navigate to "قوانین باشگاه مشتریان" section
    When the user clicks on the "قوانین باشگاه مشتریان" section
    Then the user should be redirected to the customer club rules page
    And the user should see the rules governing the customer club

  Scenario: Navigate to "مقررات و ضوابط" section
    When the user clicks on the "مقررات و ضوابط" section
    Then the user should be redirected to the terms and conditions page
    And the user should see the detailed terms and conditions of the customer club

  Scenario: Navigate to "سوالات متداول" section
    When the user clicks on the "سوالات متداول" section
    Then the user should be redirected to the FAQ section
    And the user should see a list of frequently asked questions with answers