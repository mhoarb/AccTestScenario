Feature: champion-missions
    As a super admin
    I want to manage champion-missions "https://admin-club.farazpardazan.com/champion-missions"
    So that I can organize and track champion-missions effectively

    Background:
        Given I am logged in as a super admin
        And I am on the champion-missions  page "https://admin-club.farazpardazan.com/champion-missions"

    Scenario: Display data correctly on the champion-missions page
        Given there arechampion-missions in the list
        When I view the table
        Then the data in the columns "عنوان", "الماس","توضیحات","تاریخ شروع", "تاریخ پایان"  should be correct
        And there should be no duplicate entries



    Scenario: Edit an existing  champion-missions
        Given there is a  champion-missions named "سپرده و تراکنش"
        When I click on the "Edit" icon next to "سپرده و تراکنش"
        And I update the  champion-missions details
        And I click on the "ثبت" button
        Then the  champion-missions "سپرده و تراکنش" should be updated with the new details
        And the updated  champion-missions should be visible in the list

    Scenario: Delete an existing  champion-missions
        Given there is a  champion-missions named "سپرده و تراکنش"
        When I click on the "Delete" icon next to "سپرده و تراکنش"
        And I confirm the deletion
        Then the  champion-missions "سپرده و تراکنش" should be removed from the list

    Scenario: Navigate to the next page ofchampion-missions
        Given there are more than 10 champion-missions in the list
        And I am on page 1
        When I click on the "Next" pagination button
        Then I should be taken to page 2
        And I should see the next set ofchampion-missions