Feature: User Management
  As a super admin
  I want to manage user accounts in "https://admin-club.farazpardazan.com/panelUsers"
  So that I can maintain and organize user information effectively

  Background:
    Given I am logged in as a super admin
    And I am on the User Management page "https://admin-club.farazpardazan.com/panelUsers"

  Scenario: Display users correctly
    Given there are users in the system
    When I view the table
    Then the data in the columns "نام", "نام کاربری", "نقش", and "وضعیت" should be correct
    And there should be no duplicate entries

  Scenario: Edit an existing user
    Given there is a user named "mousavi_ebrahim"
    When I click on the "Edit" icon next to "mousavi_ebrahim"
    And I update the "نقش" field to "COMMENT_OPERATOR"
    And I click on the "ثبت" button
    Then the user's role should be updated to "COMMENT_OPERATOR"
    And the updated user should be visible in the list

  Scenario: Delete an existing user
    Given there is a user named "mousavi_ebrahim"
    When I click on the "Delete" icon next to "mousavi_ebrahim"
    And I confirm the deletion
    Then the user "mousavi_ebrahim" should be removed from the list

  Scenario: Change user password
    Given there is a user named "superadmin"
    When I click on the "Edit" icon next to "superadmin"
    And I update the password to "NewPassword123"
    And I click on the "ثبت" button
    Then the user's password should be updated to "NewPassword123"
    And a confirmation message "رمز عبور با موفقیت تغییر کرد" should be displayed

  Scenario: Export user data to Excel
    When I click on the "خروجی اکسل" button
    Then the user data should be downloaded as an Excel file

  Scenario: Create a new user
    When I click on the "ایجاد کاربر جدید" button
    Then I should be redirected to a new page
    When I fill in the following fields:
      | Field       | Value              |
      | نام          | علی محمدی         |
      | نام کاربری  | ali_mohammadi      |
      | نقش          | USER               |
      | وضعیت        | فعال               |
    And I click on the "ثبت" button
    Then a new user "ali_mohammadi" should be created
    And I should see the new user in the list

  Scenario: Navigate through pagination
    Given there are more than 10 users in the list
    And I am on page 1
    When I click on the "Next" pagination button
    Then I should be taken to page 2
    And I should see the next set of users