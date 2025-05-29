Feature: champion-reports Management
    As a super admin
    I want to manage user champion-reports
    So that I can track and analyze user performance effectively

    Background:
        Given I am logged in as a super admin
        And I am on the champion-reports page "https://admin-club.farazpardazan.com/mission-reports"

    Scenario: Load champion-reports data correctly
        Given there are champion-reports in the system
        When I view the table
        Then the data in the columns "نام "," نام خانوادگی", "شماره مشتری","سطح کاربر","عنوان جایزه","تعداد دفعات چرخاندن گردونه"  should be loaded correctly
        And there should be no duplicate entries

    Scenario: Filter champion-reports data based on specified criteria
        Given there are ranked users in the system
        When I filter the data with the following criteria:
            | Field         |
            | نام           |
            | نام خانوادگی  |
            | از تاریخ      |
            | تا تاریخ      |
            | شماره مشتری   |
            | جایزه دریافتی |
            | سطح کاربر     |

        And I click on the "جستجو" button
        Then I should only see users matching the filter criteria
        And the table should update to reflect the filtered results

    Scenario: Export champion-reports data to Excel
        When I click on the "گرفتن خروجی اکسل" button
        Then the champion-reports data should be downloaded as an Excel file



    Scenario: Navigate to the next page of champion-reports
        Given there are more than 10 champion-reports in the list
        And I am on page 1
        When I click on the "Next" pagination button
        Then I should be taken to page 2
        And I should see the next set of champion-reports
