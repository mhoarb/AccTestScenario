Feature: Admin Panel - Rule Engine Management
    As an admin user
    I want to log into the admin panel, access the dashboard, and manage rule engine data
    So that I can control and monitor rules effectively

    Scenario: Navigate to rule engine page
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the admin dashboard at https://admin-club.farazpardazan.com/dashboard
        When the user navigates to the rule engine page at https://admin-club.farazpardazan.com/ruleENGINE
        Then the user is redirected to the rule engine page
        And a table of rule data is displayed

    Scenario: Edit a row in the rule engine table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the rule engine page at https://admin-club.farazpardazan.com/ruleENGINE
        When the user selects a row
        And the user clicks the edit action (pencil icon)
        And the user modifies the rule details
        And the user saves the changes
        Then the updated details are reflected in the table
        And a success message is displayed

    Scenario: Delete a row from the rule engine table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the rule engine page at https://admin-club.farazpardazan.com/ruleENGINE
        When the user selects a row
        And the user clicks the delete action (trash icon)
        And the user confirms the deletion
        Then the row is removed from the table
        And a success message is displayed


    Scenario: View files associated with a row in the rule engine table
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the rule engine page at https://admin-club.farazpardazan.com/ruleENGINE
        When the user selects a row
        And the user clicks on the files related action
        Then a list of associated files is displayed in a popup or new page


    Scenario: Create a new request in the rule engine
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the rule engine page at https://admin-club.farazpardazan.com/ruleENGINE
        When the user clicks the "ایجاد درخواست جدید" button
        And the user enters valid request details
        And the user submits the request
        Then the new request appears in the table
        And a success message is displayed "با موفقیت ثبت شد"