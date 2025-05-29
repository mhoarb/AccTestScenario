Feature: My Comments Page
  As a logged-in user, I want to view the My Comments page so that I can see the comments I have submitted for a store.

  Background:
    Given the user is logged in with valid credentials
    And the user is on the My Comments page at "https://club.farazpardazan.com/profile/my-comments"

  Scenario: View submitted comments
    Given the user has submitted a comment "تست" for a store
    And the comment status is "در حال بررسی" with submission date "1403/12/05"
    When the user views the My Comments page
    Then the user should see the comment "تست"
    And the comment should display the status "در حال بررسی"
    And the comment should display the submission date "1403/12/05"

  Scenario: No comments submitted
    Given the user has not submitted any comments for a store
    When the user views the My Comments page
    Then the user should see a message "هیچ نظری ثبت نشده است"

    