Feature: Notification Management
    As a super admin
    I want to manage and send notifications
    So that I can communicate effectively with users

    Background:
        Given I am logged in as a super admin
        And I am on the Notifications page "https://admin-club.farazpardazan.com/notifications"

    Scenario: Send a new message
        When I click on the "پیام جدید" button
        Then I should be redirected to a new page
        When I fill in the following fields:
            | Field      | Value                   |
            | عنوان      | اطلاعیه جدید            |
            | پیام       | خوش آمدید به سیستم جدید |
            | نحوه ارسال | SMS                     |
        And I upload an Excel file containing customer numbers
        Then the data from the Excel file should be loaded into the page
        When I select the customer numbers "09123456789" and "09129876543"
        And I click on the "ثبت" button
        Then a new notification with title "اطلاعیه جدید" should be sent
        And I should see the new notification in the list

    Scenario: Export sent messages to Excel
        When I click on the "گرفتن خروجی اکسل" button
        Then the list of sent messages should be downloaded as an Excel file


    Scenario: Navigate to the next page of lotteries
        Given there are more than 10 lotteries in the list
        And I am on page 1
        When I click on the "Next" pagination button
        Then I should be taken to page 2
        And I should see the next set of lotterie
