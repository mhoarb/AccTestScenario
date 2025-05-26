@comments_managment
Feature: Admin Panel Login, Dashboard, and Comments Management
  As an admin user
  I want to log into the admin panel, access the dashboard, and manage user comments
  So that I can review and control user feedback effectively

  Background:
    Given I am logged in as a super admin
    And I am on the Category page "https://admin-club.farazpardazan.com/comments"


  Scenario: Navigate to unconfirmed comments page
    Given the user is logged into the admin panel as "superadmin"
    And the user is on the admin dashboard at https://admin-club.farazpardazan.com/dashboard
    When the user clicks the "مشاهده" button for "نظرات تایید نشده"
    Then the user is redirected to the unconfirmed comments management page
    And a list of unconfirmed comments is displayed

  Scenario: Confirm a comment 
    Given the user is logged into the admin panel as "superadmin"
    And the user is on the unconfirmed comments management page
    When the user selects an unconfirmed comment
    And the user clicks the confirm action
    Then the comment status updates to confirmed
    And the comment is removed from the unconfirmed list
    And a success message is displayed

  Scenario: Reject a comment 
    Given the user is logged into the admin panel as "superadmin"
    And the user is on the unconfirmed comments management page
    When the user selects an unconfirmed comment
    And the user clicks the reject action
    Then the comment is removed from the unconfirmed list
    And a success message is displayed indicating the rejection

  Scenario: Export all comments to Excel
    Given the user is logged into the admin panel as "superadmin"
    And the user is on the unconfirmed comments management page
    When the user clicks the export to Excel option
    Then a file is downloaded in Excel format
    And the file contains all unconfirmed comments data