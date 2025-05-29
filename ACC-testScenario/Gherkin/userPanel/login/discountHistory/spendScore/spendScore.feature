Feature: My History Page
    As a logged-in user, I want to view the My History page so that I can see my point earnings, point spending, and discount history.

    Background:
        Given the user is logged in with valid credentials
        And the user is on the My History page at "https://club.farazpardazan.com/history"


    Scenario: View point spending history
        When the user clicks on the "خرج امتیاز" tab
        Then the user should see a list of spending transactions including:
            | مراکز آنلاین | آچارباز         | 1404/02/24 | 300 امتیاز  |
            | مراکز آنلاین | آچارباز         | 1404/02/24 | 300 امتیاز  |
            | مراکز آنلاین | آچارباز         | 1404/02/22 | 300 امتیاز  |
            | نیکوکاری     | تست نیکوکاری 22 | 1404/01/31 | 10 امتیاز   |
            | مراکز آنلاین | آچارباز         | 1404/01/31 | 300 امتیاز  |
            | نیکوکاری     | تست نیکوکاری 22 | 1404/01/17 | 20 امتیاز   |
            | نیکوکاری     | تست نیکوکاری 22 | 1403/12/22 | 10 امتیاز   |
            | مراکز آنلاین | مدرسه اینورس    | 1403/12/22 | 3000 امتیاز |
            | مراکز آنلاین | آچارباز         | 1403/12/21 | 300 امتیاز  |
            | مراکز آنلاین | آچارباز         | 1403/12/18 | 300 امتیاز  |
