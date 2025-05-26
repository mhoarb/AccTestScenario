Feature: Lottery Management
  As a super admin
  I want to manage lotteries "https://admin-club.farazpardazan.com/lottery"
  So that I can organize and track lottery events effectively

  Background:
    Given I am logged in as a super admin
    And I am on the Lottery page "https://admin-club.farazpardazan.com/lottery"

  Scenario: Validate data displayed on the lottery page
    Given there are lotteries in the list
    When I view the table
    Then the data in the columns "عنوان", "امتیاز", "وضعیت", and "تاریخ انقضا" should be consistent
    And there should be no duplicate entries

  Scenario: Export lottery data to Excel
    When I click on the "خروجی اکسل" button
    Then the lottery data should be downloaded as an Excel file

  Scenario: Create a new lottery with required fields
    When I click on the "ثبت قرعه کشی" button
    Then I should be redirected to a new page
    When I fill in the following fields:
      | Field            | Value            |
      | عنوان            | Summer Lottery   |
      | امتیاز           | 500              |
      | تاریخ اعتبار      | 2025-12-31       |
      | توضیحات          | Annual event     |
      | شرایط قرعه‌کشی   | Active users only|
    And I add a new prize in the "جوایز" dropdown with:
      | Prize Field      | Value            |
      | تعداد            | 3                |
      | عنوان جایزه      | Gift Card        |
    And I click on the "ثبت" button
    Then a new lottery "Summer Lottery" should be created
    And I should see the new lottery in the list


  Scenario: Navigate to the next page of lotteries
    Given there are more than 10 lotteries in the list
    And I am on page 1
    When I click on the "Next" pagination button
    Then I should be taken to page 2
    And I should see the next set of lotteries