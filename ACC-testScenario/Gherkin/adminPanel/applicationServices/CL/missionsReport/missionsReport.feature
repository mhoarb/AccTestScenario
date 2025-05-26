Feature: missions Management
    As a super admin
    I want to manage user missionss
    So that I can track and analyze user performance effectively

    Background:
        Given I am logged in as a super admin
        And I am on the missions page "https://admin-club.farazpardazan.com/mission-reports"

    Scenario: Load missions data correctly
        Given there are missions in the system
        When I view the table
        Then the data in the columns "نام و نام خانوادگی", "شماره مشتری", "تعداد الماس", and "رتبه" should be loaded correctly
        And there should be no duplicate entries

    Scenario: Filter missions data based on specified criteria
        Given there are ranked users in the system
        When I filter the data with the following criteria:
            | Field                     |
            | نام                       |
            | نام خانوادگی              |
            | از تاریخ                  |
            | تا تاریخ                  |
            | شماره مشتری               |
            | شماره موبایل              |
            | تعداد الماس دریافت شده از |
            | تعداد الماس دریافت شده تا |
            | سطح کاربر                 |
            | وضعیت ماموریت             |

        And I click on the "جستجو" button
        Then I should only see users matching the filter criteria
        And the table should update to reflect the filtered results

    Scenario: Export missions data to Excel
        When I click on the "گرفتن خروجی اکسل" button
        Then the missions data should be downloaded as an Excel file



    Scenario: Navigate to the next page of lotteries
        Given there are more than 10 lotteries in the list
        And I am on page 1
        When I click on the "Next" pagination button
        Then I should be taken to page 2
        And I should see the next set of lotterie
