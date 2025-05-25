Feature: Admin Panel Login -fadak Mall Special Services
    As an admin user
    I want to log into the admin panel, access the dashboard, and view detailed results
    So that I can monitor and manage fadak Mall Special Services


    Scenario: Verify online center table structure for Number of Online Centers for "خدمات ویژه قطار فدک"
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the online center page at https://admin-ccd.farazpardazan.com/internalVipOnlineCenter
        When the page loads
        Then the table displays the following columns:
            | Column Name                    |
            | عنوان                          |
            | دسته بندی                      |
            | سطح کاربر                      |
            | تعداد تیکت ها                  |
            | میانگین امتیاز از نگاه کاربران |
            | تعداد امتیاز دهندگان           |
            |ا متیاز مورد نیاز
            | تاریخ اعتبار |
            | فعال         |
            | عملیات       |




    Scenario: Activate a row in the online center table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the online center page at https://admin-ccd.farazpardazan.com/internalVipOnlineCenter
        When the user toggles the switch to activate a deactivated row
        Then the row status updates to active and show this message "با موفقیت ویرایش شد"
        And the change is reflected in the table

    Scenario: Deactivate a row in the online center table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the online center page at https://admin-ccd.farazpardazan.com/internalVipOnlineCenter
        When the user toggles the switch to deactivate an activated row
        Then the row status updates to active
        And show this message "با موفقیت ویرایش شد"
        And the change is reflected in the table

    Scenario: Delete a row from the online center table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the online center page at https://admin-ccd.farazpardazan.com/internalVipOnlineCenter
        When the user selects a row
        And the user clicks the delete action
        And the user confirms the deletion
        Then the row is removed from the table
        And a success message is displayed "با موفقیت حذف شد"

    Scenario: Edit a row in the online center table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the online center page at https://admin-ccd.farazpardazan.com/internalVipOnlineCenter
        When the user selects a row
        And the user clicks the edit action
        And the user modifies the row details
        And the user saves the changes
        Then the updated details are reflected in the table
        And a success message is displayed

    Scenario: View comments for a row in the online center table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the online center page at https://admin-ccd.farazpardazan.com/internalVipOnlineCenter
        When the user selects a row
        And the user clicks the view comments action
        Then new page displays the comments associated with the row

    Scenario: View tickets for a row in the online center table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the online center table at https://admin-ccd.farazpardazan.com/internalVipOnlineCenter
        When the user selects a row
        And the user clicks the view tickets action
        Then new page displays the tickets associated with the row

    Scenario: Register a new purchase center "ثبت مرکز خرید"
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the online center page at https://admin-ccd.farazpardazan.com/internalVipOnlineCenter
        When the user clicks the option to register a new purchase center
        And the user enters valid details for the new center
        And the user submits the registration
        Then the new purchase center appears in the table
        And a success message is displayed


    Scenario: Perform pagination on online center table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the online center page at https://admin-ccd.farazpardazan.com/internalVipOnlineCenter
        And the table contains more rows than the page limit
        When the user navigates to the next page using the pagination controls
        Then the next set of rows is displayed
        And the total number of pages is correctly shown


