Feature: Store Management
    As a super admin
    I want to manage stores "https://admin-club.farazpardazan.com/iranmall-shopping"
    So that I can organize and track store information effectively

    Background:
        Given I am logged in as a super admin
        And I am on the Store page "https://admin-club.farazpardazan.com/iranmall-shopping"

    Scenario: Display store data correctly
        Given there are stores in the list
        When I view the table
        Then the data in the columns "عنوان", "دسته بندی", "میانگین امتیاز از نگاه کاربران", and "تعداد امتیاز دهندگان" should be correct
        And there should be no duplicate entries

    Scenario: View comments for a store
        Given there is a store named "تست"
        When I click on the "Comments" icon next to "تست"
        Then I should be navigated to the Comments page for "تست"

    Scenario: Edit an existing store
        Given there is a store named "تست"
        When I click on the "Edit" icon next to "تست"
        And I update the "عنوان" field to "تست"
        And I click on the "ثبت" button
        Then the store should be updated to "تست"
        And the updated store should be visible in the list

    Scenario: Delete an existing store
        Given there is a store named "تست"
        When I click on the "Delete" icon next to "تست"
        And I confirm the deletion
        Then the store "تست" should be removed from the list

    Scenario: Create a new store with specified fields
        When I click on the "ایجاد فروشگاه جدید" button
        Then I should be redirected to a new page
        When I fill in the following fields:
            | Field       | Value                |
            | عنوان       | فروشگاه الکترونیک    |
            | شماره تماس  | 021-12345678         |
            | ترتیب نمایش | 1                    |
            | دسته‌بندی   | الکترونیک            |
            | عنوان مسیر  | electronics-store    |
            | مسیر        | /store/electronics   |
            | توضیحات     | فروش محصولات دیجیتال |
            | عکس لوگو    | electronics_logo.png |
        And I click on the "ثبت" button
        Then a new store "فروشگاه الکترونیک" should be created
        And I should see the new store in the list

    Scenario: Export store data to Excel
        When I click on the "خروجی اکسل" button
        Then the store data should be downloaded as an Excel file



    Scenario: Navigate to the next page of iranmall-shopping
        Given there are more than 10 iranmall-shopping in the list
        And I am on page 1
        When I click on the "Next" pagination button
        Then I should be taken to page 2
        And I should see the next set of iranmall-shopping
