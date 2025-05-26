Feature: Customer Level Management
    As a super admin
    I want to manage customer levels
    So that I can organize and track user tiers effectively

    Background:
        Given I am logged in as a super admin
        And I am on the Customer Level page

    Scenario: Export level data to Excel
        When I click on the "خروجی اکسل" button
        Then the level data should be downloaded as an Excel file

    Scenario: Create a new customer level with required fields
        When I click on the "ایجاد" button
        And I fill in the following fields:
            | Field         |
            | نام           |
            | عنوان تم      |
            | حداقل امتیاز  |
            | حداکثر امتیاز |
            | توضیحات       |
            | تاریخ شروع    |
            | تاریخ پایان   |
            | لوگو و آیکن   |
        And I click on the "ثبت" button
        Then a new level "Gold Level" should be created
        And I should see the new level in the list

    Scenario: Edit an existing customer level
        Given there is a level named "FADAK_GOLDEN"
        When I click on the "Edit" icon next to "FADAK_GOLDEN" or other level
        And I update the following fields:
            | Field        | Value          |
            | نام          | FADAK_PLATINUM |
            | حداقل امتیاز | 2000           |
        And I click on the "ثبت" button
        Then the level name should be updated to "FADAK_PLATINUM"
        And the minimum score should be updated to 2000

    Scenario: Delete an existing customer level
        Given there is a level named "FADAK_SILVER"
        When I click on the "Delete" icon next to "FADAK_SILVER"
        And I confirm the deletion
        Then the level "FADAK_SILVER" should be removed from the list

    Scenario: Navigate to metrics and features management page
        When I click on the "مدیریت شاخص‌ها و امکانات" button
        Then I should be redirected to the Metrics and Features management page

    Scenario: Navigate to user list page for a level
        When I click on the "لیست کاربران" button
        Then I should be redirected to the User List page



    Scenario: Perform pagination on online center table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the online center page at https://admin-club.farazpardazan.com/customer-level
        And the table contains more rows than the page limit
        When the user navigates to the next page using the pagination controls
        Then the next set of rows is displayed
        And the total number of pages is correctly shown


