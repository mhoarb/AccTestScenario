Feature: Polling Management
    As a super admin
    I want to manage poll questions "https://admin-club.farazpardazan.com/polling"
    So that I can organize and track polling data effectively

    Background:
        Given I am logged in as a super admin
        And I am on the Polling page "https://admin-club.farazpardazan.com/polling"

    Scenario: Display poll data correctly
        Given there are polls in the list
        When I view the table
        Then the data in the column "عنوان" should be correct
        And there should be no duplicate entries

    Scenario: Toggle display field for a poll
        Given there is a poll with the question "انتخاب شما برای جوایز قرعه کشی چیست؟"
        When I click the toggle button for the "نمایش داده شود؟" field next to "انتخاب شما برای جوایز قرعه کشی چیست؟"
        Then the "نمایش داده شود؟" field for "انتخاب شما برای جوایز قرعه کشی چیست؟" should be updated to the toggled state
        And the toggle button should reflect the new state

    Scenario: Delete an existing poll
        Given there is a poll with the question "انتخاب شما برای جوایز قرعه کشی چیست؟"
        When I click on the "Delete" icon next to "انتخاب شما برای جوایز قرعه کشی چیست؟"
        And I confirm the deletion
        Then the poll "انتخاب شما برای جوایز قرعه کشی چیست؟" should be removed from the list

    Scenario: Edit an existing poll
        Given there is a poll with the question "انتخاب شما برای جوایز قرعه کشی چیست؟"
        When I click on the "Edit" icon next to "انتخاب شما برای جوایز قرعه کشی چیست؟"
        And I update the "عنوان" to "آیا از کیفیت خدمات راضی هستید؟"
        And I choose a option
        And I click on the "ثبت" button
        Then the poll question should be updated to "آیا از کیفیت خدمات راضی هستید؟"
        And the updated poll should be visible in the list

    Scenario: Generate a report for a poll
        Given there is a poll with the question "انتخاب شما برای جوایز قرعه کشی چیست؟"
        When I click on the "Report" icon next to "انتخاب شما برای جوایز قرعه کشی چیست؟"
        Then I should be redirected to a new page
        And I should see a chart displaying poll results
        When I click on the "خروجی اکسل" button
        Then the poll data should be downloaded as an Excel file
        When I click on the "خروجی اکسل کاربران" button
        Then the user-specific poll data should be downloaded as an Excel file

    Scenario: Create a new poll with title and options
        When I click on the "ایجاد" button
        Then I should be redirected to a new page
        When I fill in the following fields:
            | Field    | Value               |
            | عنوان    | نظرسنجی رضایت خدمات |
            | گزینه‌ها |انتخاب یا افزودن گزینه جدید  |
        And I click on the "ثبت" button
        Then a new poll with the title "نظرسنجی رضایت خدمات" should be created
        And I should see the new poll in the list

    Scenario: Navigate to the next page of lotteries
        Given there are more than 10 lotteries in the list
        And I am on page 1
        When I click on the "Next" pagination button
        Then I should be taken to page 2
        And I should see the next set of lotterie
