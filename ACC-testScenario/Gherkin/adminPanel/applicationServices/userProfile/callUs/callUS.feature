Feature: Communication Management
  As a super admin
  I want to manage communication settings "https://admin-club.farazpardazan.com/communication"
  So that I can update contact information for users

  Background:
    Given I am logged in as a super admin
    And I am on the Communication page "https://admin-club.farazpardazan.com/communication"

  Scenario: Edit and update communication fields
    When I update the following fields:
      | Field        | Value                 |
      | SMS          | 1000AAA               |
      | شماره تماس   | 021-12345678          |
      | ایمیل        | support@farzpardazan.com |
      | وب‌سایت      | www.farzpardazan.ir   |
      | اینستاگرام   | farzpardazan_official |
    And I click on the "ثبت" button
    Then the communication fields should be updated with:
      | Field        | Value                 |
      | SMS          | 1000AAA               |
      | شماره تماس   | 021-12345678          |
      | ایمیل        | support@farzpardazan.com |
      | وب‌سایت      | www.farzpardazan.ir   |
      | اینستاگرام   | farzpardazan_official |
    And the updated values should be visible on the page


@EdgeCase
  Scenario: Attempt to save with empty required fields
    When I clear the "ایمیل" field
    And I click on the "ثبت" button
    Then I should see an error message "ایمیل اجباری است"
    And the changes should not be saved

@EdgeCase
  Scenario: Attempt to save with invalid email format
    When I update the "ایمیل" field to "support@farzpardazan"
    And I click on the "ثبت" button
    Then I should see an error message "فرمت ایمیل نامعتبر است"
    And the changes should not be saved

@EdgeCase
  Scenario: Attempt to save with excessively long website URL
    When I update the "وب‌سایت" field to a 2000-character URL
    And I click on the "ثبت" button
    Then I should see an error message "طول وب‌سایت بیش از حد مجاز است"
    And the changes should not be saved
    
  Scenario: Attempt to save with special characters in Instagram handle
    When I update the "اینستاگرام" field to "farzpardazan@official"
    And I click on the "ثبت" button
    Then I should see an error message "اینستاگرام شامل کاراکترهای غیرمجاز است"
    And the changes should not be saved

@EdgeCase
  Scenario: Attempt to save with Persian characters in email
    When I update the "ایمیل" field to "پشتیبانی@farzpardazan.com"
    And I click on the "ثبت" button
    Then I should see an error message "ایمیل باید فقط شامل کاراکترهای لاتین باشد"
    And the changes should not be saved

@EdgeCase
  Scenario: Handle network failure during save
    Given the network connection is interrupted
    When I update the "شماره تماس" field to "021-98765432"
    And I click on the "ثبت" button
    Then I should see an error message "خطا در ذخیره‌سازی، لطفاً دوباره تلاش کنید"
    And the changes should not be saved
    
@EdgeCase
  Scenario: Handle concurrent edits by multiple admins
    Given another admin is editing the communication settings
    When I update the "ایمیل" field to "newemail@farzpardazan.com"
    And I click on the "ثبت" button
    Then I should see a warning message "تنظیمات توسط کاربر دیگری تغییر کرده است"
    And I should be prompted to reload the page