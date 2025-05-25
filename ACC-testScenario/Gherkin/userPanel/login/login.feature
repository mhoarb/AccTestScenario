Feature: User Login to Farazpardazan Club
  As a user
  I want to login to https://club.farazpardazan.com/
  So that I can access my account

  Scenario: Successful login with valid username and password
    Given the user is on the login page of https://club.farazpardazan.com/
    When the user enters the username "0071056734"
    And the user enters a valid password
    And the user clicks the login button
    Then the user is redirected to the account dashboard
    And a welcome message is displayed

  Scenario: Failed login with invalid username
    Given the user is on the login page of https://club.farazpardazan.com/
    When the user enters an invalid username "invaliduser"
    And the user enters a valid password
    And the user clicks the login button
    Then an error message is displayed saying "Invalid username or password"
    And the user remains on the login page

  Scenario: Failed login with invalid password
    Given the user is on the login page of https://club.farazpardazan.com/
    When the user enters the username "0071056734"
    And the user enters an invalid password
    And the user clicks the login button
    Then an error message is displayed saying "Invalid username or password"
    And the user remains on the login page

  