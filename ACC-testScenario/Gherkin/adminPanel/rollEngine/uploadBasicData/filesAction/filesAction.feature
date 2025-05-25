Feature: Admin Panel - Rule Engine Management - Files
    As an admin user
    I want to log into the admin panel, access the dashboard, and manage rule engine data and slect a file in a row
    So that I can control and monitor files of this row

    Scenario: View files associated with a row in the rule engine table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the rule engine page at https://admin-ccd.farazpardazan.com/ruleENGINE
        When the user selects a row with ID "121" or somthing like that
        And the user clicks on the files related action
        Then the user is redirected to the files page at https://admin-ccd.farazpardazan.com/ruleENGINE/121/files
        And a table of associated files is displayed with columns:
            | Column Name           |
            | ردیف (Row Index)      |
            | نام فایل (File Name)  |
            | وضعیت پردازش          |
            | تاریخ و زمان بارگذاری |
            | عملیات (Actions)      |

    Scenario: Download a file from the rule engine files page
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the rule engine files page at https://admin-ccd.farazpardazan.com/ruleENGINE/121/files
        When the user selects a file
        And the user clicks the "دانلود فایل نمونه ( الگوی اکسل | اولیه ) " button
        Then the selected file is downloaded
        And the file matches the expected name and type (e.g., "offline_sample-new.xlsx")

    Scenario: Download a file directly using the download action
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the rule engine files page at https://admin-ccd.farazpardazan.com/ruleENGINE/121/files
        When the user clicks the download icon for a file
        Then the file is downloaded
        And the file matches the expected name and type (e.g., "offline_sample-new.xlsx")

    Scenario: Delete a file from the rule engine files page
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the rule engine files page at https://admin-ccd.farazpardazan.com/ruleENGINE/121/files
        When the user clicks the delete icon for a file
        And the user confirms the deletion
        Then the file is removed from the table
        And a success message is displayed



    Scenario: Upload a file to the rule engine files page
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the rule engine files page at https://admin-ccd.farazpardazan.com/ruleENGINE/121/files
        When the user clicks the upload file option " بارگذاری"
        And the user selects a valid file to upload
        And the user submits the upload
        Then the new file appears in the table
        And a success message is displayed


