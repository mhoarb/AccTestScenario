Feature: Managing the terms page
    As an admin user
    I want to write and save a description in the terms section
    So that I can update the information displayed on the website


    Background:
        Given I am logged in as a super admin
        And I am on the Banks page "https://admin-club.farazpardazan.com/terms"

    Scenario: Successfully writing and saving a description in the Terms section
        Given I am logged in as an admin user
        And I am on the Terms page
        When I enter a description in the terms text field
        And I click the "ثبت" button
        Then the description should be saved successfully
        And I should see a confirmation message
        And the updated description should be displayed on the page

@EdgeCase
    Scenario: Attempting to save an empty description in the Terms section
        Given I am logged in as an admin user
        And I am on the Terms page
        When I clear the Terms text field
        And I click the "ثبت" button
        Then I should see an error message indicating the description cannot be empty
        And the description should not be saved