Feature: Bank Services Management
  As a super admin
  I want to manage banking services "https://admin-club.farazpardazan.com/banks"
  So that I can organize and track banking services effectively

  Background:
    Given I am logged in as a super admin
    And I am on the Banks page "https://admin-club.farazpardazan.com/banks"

  Scenario: Display data correctly on the bank services page
    Given there are banking services in the list
    When I view the table
    Then the data in the columns "عنوان", "نوع","توضیحات", "نمایش داده شود؟", and "main" should be correct
    And there should be no duplicate entries

  Scenario: Create a new banking service with required fields
    When I click on the "ایجاد خدمات بانکی" button
    Then I should be redirected to a new page
    When I fill in the following fields:
      | Field                   | Value               |
      | عنوان                   | Premium Service     |
      | نوع                    | Online Banking      |
      | توضیحات                 | Advanced features   |
      | لوگو                    | premium_logo.png    |
      | عکس پیش‌زمینه           | background.jpg      |
      | عکس پیش‌زمینه صفحه توضیحات | details_bg.jpg      |
    And I click on the "ثبت" button
    Then a new banking service "Premium Service" should be created
    And I should see the new banking service in the list

  Scenario: Toggle main field for a banking service
    Given there is a banking service named "امتیاز ثابت هر فاکتور"
    When I click the toggle button for the "main" field next to "امتیاز ثابت هر فاکتور"
    Then the "main" field for "امتیاز ثابت هر فاکتور" should be updated to the toggled state
    And the toggle button should reflect the new state

  Scenario: Toggle display field for a banking service
    Given there is a banking service named "امتیاز ثابت هر فاکتور"
    When I click the toggle button for the "نمایش داده شود؟" field next to "امتیاز ثابت هر فاکتور"
    Then the "نمایش داده شود؟" field for "امتیاز ثابت هر فاکتور" should be updated to the toggled state
    And the toggle button should reflect the new state

  Scenario: Edit an existing banking service
    Given there is a banking service named "امتیاز ثابت هر فاکتور"
    When I click on the "Edit" icon next to "امتیاز ثابت هر فاکتور"
    And I update the banking service details
    And I click on the "ثبت" button
    Then the banking service "امتیاز ثابت هر فاکتور" should be updated with the new details
    And the updated banking service should be visible in the list

  Scenario: Delete an existing banking service
    Given there is a banking service named "امتیاز ثابت هر فاکتور"
    When I click on the "Delete" icon next to "امتیاز ثابت هر فاکتور"
    And I confirm the deletion
    Then the banking service "امتیاز ثابت هر فاکتور" should be removed from the list

  Scenario: Navigate to the next page of banking services
    Given there are more than 10 banking services in the list
    And I am on page 1
    When I click on the "Next" pagination button
    Then I should be taken to page 2
    And I should see the next set of banking services