Feature: Admin Panel -Banner Management
    As an admin user
    I want to log into the admin panel, and manage banners
    So that I can control and monitor banner content effectively



    Scenario: Navigate to banners management page
        Given the user is logged into the admin panel as "superadmin"
        When the user navigates to the banners management page at https://admin-club.farazpardazan.com/banners
        Then the user is directed to the banners page
        And a table of banners is displayed



    Scenario: Edit a banner
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the banners page at https://admin-club.farazpardazan.com/banners
        And the user clicks the edit action (pencil icon)
        And the user modifies the banner details
        And the user saves the changes
        Then the updated details are reflected in the table
        And a success message is displayed "با موفقیت ویرایش شد"

    Scenario: Delete a banner
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the banners page at https://admin-club.farazpardazan.com/banners
        And the user clicks the delete action (trash icon)
        And the user confirms the deletion
        Then the banner is removed from the table
        And a success message is displayed "با موفقیت حذف شد"

    Scenario: Register a new banner
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the banners page at https://admin-club.farazpardazan.com/banners
        When the user clicks the "ثبت بنر جدید" button
        And the user enters valid banner details
        And the user submits the registration
        Then the new banner appears in the table
        And a success message is displayed "با موفقیت ثبت شد"


    Scenario: Export online center table to Excel
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the online center page at https://admin-club.farazpardazan.com/banners
        When the user clicks the export to Excel option
        Then a file is downloaded in Excel format
        And the file contains all visible table data


    Scenario: Perform pagination on banners table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the banners page at https://admin-club.farazpardazan.com/banners
        And the table contains more rows than the page limit
        When the user navigates to the next page using the pagination controls
        Then the next set of banners is displayed
        And the total number of pages is correctly shown