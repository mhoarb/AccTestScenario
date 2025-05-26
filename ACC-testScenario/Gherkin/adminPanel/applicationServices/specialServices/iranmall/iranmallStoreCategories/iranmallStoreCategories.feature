Feature: Category Management
    As a super admin
    I want to manage categories "https://admin-club.farazpardazan.com/iranmall-category"
    So that I can organize and track items effectively

    Background:
        Given I am logged in as a super admin
        And I am on the Category page "https://admin-club.farazpardazan.com/iranmall-category"

    Scenario: Create a new category with valid and edge case inputs
        When I click on the "ایجاد دسته جدید" button
        Then a popup should open with a "عنوان" field
        When I fill in the "عنوان" field with "New Category"
        And I click on the "ثبت" button
        Then a new category "New Category" should be created
        And I should see the new category in the list

    Scenario: Display and load category data
        Given there are categories in the system
        When I view the table
        Then the data in columns should be loaded correctly
        And there should be no duplicate entries

    Scenario: Edit an existing category
        Given there is a category named "سینما ایران مال"
        When I click on the "Edit" icon next to "سینما ایران مال"
        And I update the "عنوان" field to "سوپرمارکت و خواربار"
        And I click on the "ثبت" button
        Then the category should be updated to "سوپرمارکت و خواربار"
        And the updated category should be visible in the list

    Scenario: Delete an existing category
        Given there is a category named "سینما ایران مال"
        When I click on the "Delete" icon next to "سینما ایران مال"
        And I confirm the deletion
        Then the category "سینما ایران مال" should be removed from the list


    Scenario: Navigate to the next page of iranmall-category
        Given there are more than 10 iranmall-category in the list
        And I am on page 1
        When I click on the "Next" pagination button
        Then I should be taken to page 2
        And I should see the next set of iranmall-category


    @edgeCase
    Scenario: Test edge cases for creating a new category
        When I click on the "ایجاد دسته جدید" button
        Then a popup should open with a "عنوان" field
        When I fill in the "عنوان" field with an empty value
        And I click on the "ثبت" button
        Then I should see an error message "عنوان اجباری است"
        When I fill in the "عنوان" field with "a" * 256
        And I click on the "ثبت" button
        Then I should see an error message "طول عنوان بیش از حد مجاز است"
        When I fill in the "عنوان" field with "Category@#"
        And I click on the "ثبت" button
        Then I should see an error message "عنوان شامل کاراکترهای غیرمجاز است"