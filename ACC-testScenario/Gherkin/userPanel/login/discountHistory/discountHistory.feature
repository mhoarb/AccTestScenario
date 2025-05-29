Feature: My History Page
    As a logged-in user, I want to view the My History page so that I can see my point earnings, point spending, and discount history.

    Background:
        Given the user is logged in with valid credentials
        And the user is on the My History page at "https://club.farazpardazan.com/history"

    Scenario: View My History page tabs
        When the user views the My History page
        Then the user should see the following tabs:
            | کسب امتیاز     |
            | خرج امتیاز     |
            | سابقه تخفیف ها |
        And the "کسب امتیاز" tab should be active by default
        And the user should see the following navigation options:
            | خانه        |
            | خرج امتیاز  |
            | کسب امتیاز  |
            | سابقه تخفیف |


    Scenario: Navigate back from My History page
        When the user clicks the back button
        Then the user should be redirected to the home page at "https://club.farazpardazan.com/home"