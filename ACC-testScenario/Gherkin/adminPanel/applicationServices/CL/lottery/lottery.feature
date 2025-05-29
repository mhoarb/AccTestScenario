Feature: Champion Wheel Management
    As a super admin
    I want to manage champion wheel entries
    So that I can maintain and update the ranking or reward system effectively

    Background:
        Given I am logged in as a super admin
        And I am on the Champion Wheel page "https://admin-club.farazpardazan.com/champion-wheel"

    Scenario: Display champion wheel data correctly in the table
        Given there are champion wheel entries in the system
        When I view the table
        Then the data in the columns "وضعیت", and "توضیحات", "الماس مورد نیاز" should be loaded correctly
        And there should be no duplicate entries

@todo - write test scenario for edit flow
    Scenario: Edit an existing champion wheel entry
        Given there is a champion wheel entry named "گردونه را بچرخانید و جایزه بگیرید"
        When I click on the "Edit" icon next to "گردونه را بچرخانید و جایزه بگیرید"
        And I update the "وضعیت" field to "فعال"
        And I click on the "ثبت" button
        Then the entry's status should be updated to "فعال"
        And the updated entry should be visible in the list

    Scenario: Delete an existing champion wheel entry
        Given there is a champion wheel entry named "گردونه را بچرخانید و جایزه بگیرید"
        When I click on the "Delete" icon next to "گردونه را بچرخانید و جایزه بگیرید"
        And I confirm the deletion
        Then the entry "گردونه را بچرخانید و جایزه بگیرید" should be removed from the list


    Scenario: Navigate to the next page of champion-wheel
        Given there are more than 10 champion-wheel in the list
        And I am on page 1
        When I click on the "Next" pagination button
        Then I should be taken to page 2
        And I should see the next set of champion-wheel