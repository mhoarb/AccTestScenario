Feature: Admin Panel Login
  As an admin user
  I want to log into the admin panel at https://admin-ccd.farazpardazan.com/auth/login
  So that I can manage the system

  Scenario: Successful login with valid admin credentials
    Given the user is on the admin login page at https://admin-ccd.farazpardazan.com/auth/login
    When the user enters the username "superadmin"
    And the user enters a valid password "superadmin"
    And the user clicks the login button
    Then the user is redirected to the admin panel dashboard
    And a welcome message or admin dashboard is displayed

  Scenario: Failed login with invalid admin username
    Given the user is on the admin login page at https://admin-ccd.farazpardazan.com/auth/login
    When the user enters an invalid username "invalidadmin"
    And the user enters a valid password  "superadmin"
    And the user clicks the login button
    Then an error message is displayed saying "Invalid username or password"
    And the user remains on the login page

  Scenario: Failed login with invalid admin password
    Given the user is on the admin login page at https://admin-ccd.farazpardazan.com/auth/login
    When the user enters the username "superadmin"
    And the user enters an invalid password "invalidPass"
    And the user clicks the login button
    Then an error message is displayed saying "Invalid username or password"
    And the user remains on the login page

  Scenario: Failed login with empty credentials
    Given the user is on the admin login page at https://admin-ccd.farazpardazan.com/auth/login
    When the user leaves the username field empty
    And the user leaves the password field empty
    And the user clicks the login button
    Then an error message is displayed saying "Username and password are required"
    And the user remains on the login page