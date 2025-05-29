Feature: My History Page
    As a logged-in user, I want to view the My History page so that I can see my point earnings, point spending, and discount history.

    Background:
        Given the user is logged in with valid credentials
        And the user is on the My History page at "https://club.farazpardazan.com/history"



    Scenario: View point earnings history when no data is available
        Given the user has no recorded point earnings
        When the user views the "کسب امتیاز" tab
        Then the user should see a message "موردی یافت نشد"
        And the user should see an empty list of point earning transactions
