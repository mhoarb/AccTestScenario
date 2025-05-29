Feature: My Scores Page
  As a logged-in user, I want to view the My Scores page so that I can see my accumulated points and their details.

  Background:
    Given the user is logged in with valid credentials
    And the user is on the My Scores page at "https://club.farazpardazan.com/profile/my-scores"

  Scenario: View total and detailed scores
    Given the user has a total of "7313" points
    When the user views the My Scores page
    Then the user should see the total score "7313"
    And the user should see the score breakdown:
      | کارمزد محور | 7303 امتیاز |
      | ارتباطی     | 10 امتیاز   |
    And the user should see a "جزییات بیشتر" link
    And the user should see the following navigation options:
      | خانه           |
      | خرج امتیاز     |
      | کسب امتیاز     |
      | سابقه تخفیف    |

  Scenario: View score trend chart
    Given the user has a total of "7313" points
    When the user clicks on the "روند امتیازهای من" section
    Then the user should see a chart displaying the trend of their scores
    And the chart should reflect the total score of "7313"

  Scenario: Access detailed scores
    When the user clicks the "جزییات بیشتر" link
    Then the user should be redirected to a detailed scores page
    And the user should see a detailed breakdown of their "7313" points
    And the detailed breakdown should include:
      | کارمزد محور | 7303 امتیاز |
      | ارتباطی     | 10 امتیاز   |