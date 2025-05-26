Feature: Charity Level Management
    As a super admin
    I want to manage charity levels "https://admin-club.farazpardazan.com/charity"
    So that I can organize and track charity tiers effectively

    Background:
        Given I am logged in as a super admin
        And I am on the Charity page "https://admin-club.farazpardazan.com/charity"

    Scenario: Register a new charity
        When I click on the "ثبت نیکوکاری" button

        Then I should be redirected to a new page
        When I fill in the charity details :
            | عنوان             |
            | امتیاز مورد نیاز  |
            | سطح کاربر         |
            | ترتیب             |
            | عنوان مسیر        |
            | مسیر              |
            | توضیحات نیکوکاری  |
            | توضیحات هدیه      |
            | بارگذاری عکس لوگو |
            | بارگذاری عکس      |
        And I click on the "ثبت" button
        Then a new charity should be created
        And I should see the new charity in the list

    Scenario: View used tickets for a charity
        Given there is a charity named "GOLDEN"
        When I click on the "مشاهده تیکت‌های استفاده‌شده" button
        Then I should be redirected to the Used Tickets page

    Scenario: Toggle main field for a charity
        Given there is a charity named "خیریه رعد "
        When I click the toggle button for the "main" field next to "خیریه رعد "
        Then the "main" field for "	خیریه رعد" should be updated to the toggled state
        And the toggle button should reflect the new state

    Scenario: Toggle active field for a charity
        Given there is a charity named "خیریه رعد "
        When I click the toggle button for the "فعال" field next to "خیریه رعد "
        Then the "فعال" field for "	خیریه رعد " should be updated to the toggled state
        And the toggle button should reflect the new state

    Scenario: Edit an existing charity
        Given there is a charity named "خیریه رعد "
        When I click on the "Edit" icon next to "خیریه رعد "
        And I update the charity details
        And I click on the "ثبت" button
        Then the charity "خیریه رعد " should be updated with the new details
        And the updated charity should be visible in the list

    Scenario: Delete an existing charity
        Given there is a charity named "خیریه رعد "
        When I click on the "Delete" icon next to "خیریه رعد "
        And I confirm the deletion
        Then the charity "خیریه رعد " should be removed from the list

    Scenario: Display the list of participating users for a charity
        Given there is a charity named "خیریه رعد "
        When I click on the "مشاهده لیست شرکت‌کنندگان" button for "خیریه رعد "
        Then I should be redirected to the Participating Users page for "خیریه رعد "

    Scenario: Filter charities by title
        Given there are multiple charities in the list
        When I enter "لیست فیلتر ها" in the top of page
        And I click on the search button
        And I write "خیریه رعد " in "عنوان" field
        Then I should only see charities with "	خیریه رعد " in their title

    Scenario: Export charity data to Excel
        When I enter "لیست فیلتر ها" in the top of page
        And I click on the "گرفتن خروجی اکسل" button
        Then the charity data should be downloaded as an Excel file



    Scenario: Navigate to the next page of charities
        Given there are more than 10 charities in the list
        And I am on page 1
        When I click on the "Next" pagination button
        Then I should be taken to page 2
        And I should see the next set of charities

@EdgeCase

    Scenario: Validate required fields when creating a new charity
        When I click on the "ثبت نیکوکاری" button
        And I leave the required fields empty
        And I click on the "ثبت" button
        Then I should see an error message indicating required fields are missing
        And the new charity should not be created