Feature: Change Password
  As a logged-in user, I want to change my password on the Change Password page so that I can update my account security.

  Background:
    Given the user is logged in with valid credentials
    And the user is on the Change Password page at "https://club.farazpardazan.com/changePass"

  Scenario: Successfully change password with valid input
    Given the user has a current password "OldPassword123"
    When the user enters the current password "OldPassword123" in the "رمز عبور فعلی خود را وارد کنید" field
    And the user enters a new password "NewPassword456" in the "رمز عبور جدید" field
    And the user enters "NewPassword456" in the "تکرار رمز عبور جدید" field
    And the user submits the change password form
    Then the user should see a success message "رمز عبور با موفقیت تغییر کرد"
    And the user should be redirected to the account page

  Scenario: Fail to change password with incorrect current password
    Given the user has a current password "OldPassword123"
    When the user enters an incorrect current password "WrongPassword" in the "رمز عبور فعلی خود را وارد کنید" field
    And the user enters a new password "NewPassword456" in the "رمز عبور جدید" field
    And the user enters "NewPassword456" in the "تکرار رمز عبور جدید" field
    And the user submits the change password form
    Then the user should see an error message "رمز عبور فعلی نادرست است"
    And the user should remain on the Change Password page

  Scenario: Fail to change password with mismatched new passwords
    When the user enters the current password "OldPassword123" in the "رمز عبور فعلی خود را وارد کنید" field
    And the user enters a new password "NewPassword456" in the "رمز عبور جدید" field
    And the user enters "DifferentPassword789" in the "تکرار رمز عبور جدید" field
    And the user submits the change password form
    Then the user should see an error message "رمز عبور جدید و تکرار آن مطابقت ندارند"
    And the user should remain on the Change Password page


  Scenario: Navigate back from Change Password page
    Given the user navigates to the Change Password page at "https://club.farazpardazan.com/changePass"
    When the user clicks the back button
    Then the user should be redirected to the account page at "https://club.farazpardazan.com/profile"
