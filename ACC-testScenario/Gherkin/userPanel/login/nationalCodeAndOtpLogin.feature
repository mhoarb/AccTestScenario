Feature: Login with National Code and OTP
  As a user
  I want to log in using my national code and OTP
  So that I can access my account securely

  Background:
    Given I am on the login page

  Scenario: Login with national code and OTP
    When I enter the national code "1234567890"
    And I click on the "دریافت کد OTP" button
    Then I should receive an OTP via SMS
    When I enter the received OTP "123456"
    And I click on the "ورود" button
    Then I should be logged in successfully
    And I should be redirected to the dashboard
@edgeCase
  Scenario: Handle edge cases for login with national code and OTP
    When I enter the national code as an empty value
    And I click on the "دریافت کد OTP" button
    Then I should see an error message "کد ملی اجباری است"
    When I enter the national code "12345"
    And I click on the "دریافت کد OTP" button
    Then I should see an error message "کد ملی باید 10 رقم باشد"
    When I enter the national code "abcdefghij"
    And I click on the "دریافت کد OTP" button
    Then I should see an error message "کد ملی باید فقط شامل اعداد باشد"
    When I enter the national code "1234567890"
    And I click on the "دریافت کد OTP" button
    And I enter an incorrect OTP "654321"
    And I click on the "ورود" button
    Then I should see an error message "کد OTP نادرست است"
    When I enter the national code "1234567890"
    And I click on the "دریافت کد OTP" button
    And I wait until the OTP expires
    And I enter the expired OTP "123456"
    And I click on the "ورود" button
    Then I should see an error message "کد OTP منقضی شده است"
    When I enter the national code "1234567890" multiple times within a short period
    And I click on the "دریافت کد OTP" button each time
    Then I should see an error message "محدودیت درخواست OTP اعمال شده است، لطفاً بعداً تلاش کنید"