Feature: Ranking Management
    As a super admin
    I want to manage user rankings
    So that I can track and analyze user performance effectively

    Background:
        Given I am logged in as a super admin
        And I am on the Ranking page "https://admin-club.farazpardazan.com/champion-ranking"

    Scenario: Load ranking data correctly
        Given there are ranked users in the system
        When I view the table
        Then the data in the columns "نام و نام خانوادگی", "شماره مشتری", "تعداد الماس", and "رتبه" should be loaded correctly
        And there should be no duplicate entries

    Scenario: Filter ranking data based on specified criteria
        Given there are ranked users in the system
        When I filter the data with the following criteria:
            | Field              | Value     |
            | نوع رتبه‌بندی      | ماهانه    |
            | شماره شعبه         | 101       |
            | نام و نام خانوادگی | علی محمدی |
            | حداقل تعداد الماس  | 50        |
            | حداکثر تعداد الماس | 100       |
            | شماره مشتری        | 123456    |
        And I click on the "جستجو" button
        Then I should only see users matching the filter criteria
        And the table should update to reflect the filtered results

    Scenario: Export ranking data to Excel
        When I click on the "گرفتن خروجی اکسل" button
        Then the ranking data should be downloaded as an Excel file



    Scenario: Navigate to the next page of lotteries
        Given there are more than 10 lotteries in the list
        And I am on page 1
        When I click on the "Next" pagination button
        Then I should be taken to page 2
        And I should see the next set of lotterie
