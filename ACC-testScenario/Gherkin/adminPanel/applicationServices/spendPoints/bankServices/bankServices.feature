Feature: SpendBank Level Management
    As a super admin
    I want to manage SpendBank levels in url "https://admin-club.farazpardazan.com/spendBank"
    So that I can control and configure user tiers effectively

    Background:
        Given I am logged in as a super admin
        And I am on the SpendBank page "https://admin-club.farazpardazan.com/spendBank"

    Scenario: Toggle main field for a level
        Given there is a level named "RED"
        When I click the toggle button for the "main" field next to "RED"
        Then the "main" field for "RED" should be updated to the toggled state
        And the toggle button should reflect the new state

    Scenario: Edit an existing level
        Given there is a level named "FADAK_BLUE"
        When I click on the "Edit" icon next to "FADAK_BLUE"
        And I update the level details
        And I click on the "ثبت" button
        Then the level "FADAK_BLUE" should be updated with the new details
        And the updated level should be visible in the list

    Scenario: Delete an existing level
        Given there is a level named "GOLD"
        When I click on the "Delete" icon next to "GOLD"
        And I confirm the deletion
        Then the level "GOLD" should be removed from the list

    Scenario: Create a new level with required fields
        When I click on the "ایجاد" button
        Then I should be redirected to a new page
        When I fill in the following fields:
            | Field                      | Value             |
            | عنوان                      | Platinum Level    |
            | سطح کاربر                  | Premium           |
            | توضیحات                    | Elite tier        |
            | لوگو                       | platinum_logo.png |
            | عکس پیش زمینه              | background.jpg    |
            | عکس پیش زمینه صفحه توضیحات | details_bg.jpg    |
        And I click on the "ثبت" button
        Then a new level "Platinum Level" should be created
        And I should see the new level in the SpendBank list




    Scenario: Perform pagination on categories table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the categories page at https://admin-club.farazpardazan.com/categories
        And the table contains more rows than the page limit
        When the user navigates to the next page using the pagination controls
        Then the next set of categories is displayed
        And the total number of pages is correctly shown