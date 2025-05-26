Feature: User Login With OTP to Fadk Club
  As a user
  I want to login to https://club.farazpardazan.com/
  So that I can access my account
  
# These scenarios are simply the standard scenario for flow login with OTP, which is written because of the one-time password login button.
  Scenario: Successful login with valid OTP
    Given the user is on the login page of https://club.farazpardazan.com/
    And the user has selected the OTP login option
    When the user enters a valid phone number associated with their account
    And the user requests an OTP
    And the system sends a valid OTP to the user's phone
    And the user enters the valid OTP
    And the user submits the OTP
    Then the user is redirected to the account dashboard
    And a welcome message is displayed
@edgeCase
  Scenario: Failed login with invalid OTP
    Given the user is on the login page of https://club.farazpardazan.com/
    And the user has selected the OTP login option
    When the user enters a valid phone number associated with their account
    And the user requests an OTP
    And the system sends a valid OTP to the user's phone
    And the user enters an invalid OTP
    And the user submits the OTP
    Then an error message is displayed saying "Invalid OTP"
    And the user remains on the OTP entry page
@edgeCase
  Scenario: Failed OTP request with invalid phone number
    Given the user is on the login page of https://club.farazpardazan.com/
    And the user has selected the OTP login option
    When the user enters an invalid phone number
    And the user requests an OTP
    Then an error message is displayed saying "Invalid phone number"
    And no OTP is sent