Feature: Admin Panel -Application Serivces - Online Categories Management
  As an admin user
  I want to log into the admin panel, access the dashboard, and manage categories
  So that I can organize and control category data effectively


  Scenario: Navigate to categories page
    Given the user is logged into the admin panel as "superadmin"
    And the user is on the admin dashboard at https://admin-club.farazpardazan.com/dashboard
    When the user navigates to the categories page at https://admin-club.farazpardazan.com/categories
    Then the user is redirected to the categories page
    And a table of categories is displayed

  Scenario: Edit a category
    Given the user is logged into the admin panel as "superadmin"
    And the user is on the categories page at https://admin-club.farazpardazan.com/categories
    When the user selects a category
    And the user clicks the edit action (pencil icon)
    And the user modifies the category details (e.g., title or icon)
    And the user saves the changes
    Then the updated details are reflected in the table
    And a success message is displayed "با موفقیت ویرایش شد"

  Scenario: Delete a category
    Given the user is logged into the admin panel as "superadmin"
    And the user is on the categories page at https://admin-club.farazpardazan.com/categories
    When the user selects a category
    And the user clicks the delete action (trash icon)
    And the user confirms the deletion
    Then the category is removed from the table
    And a success message is displayed "با موفقیت ویرایش شد"

  Scenario: Submit a new category
    Given the user is logged into the admin panel as "superadmin"
    And the user is on the categories page at https://admin-club.farazpardazan.com/categories
    When the user clicks the "ثبت دسته بندی جدید" button
    And the user enters valid category details
      | عنوان        |
      | شماره ایندکس |
      
    And the user submits the new category
    Then the new category appears in the table
    And a success message is displayed

  Scenario: Perform pagination on categories table
    Given the user is logged into the admin panel as "superadmin"
    And the user is on the categories page at https://admin-club.farazpardazan.com/categories
    And the table contains more rows than the page limit
    When the user navigates to the next page using the pagination controls
    Then the next set of categories is displayed
    And the total number of pages is correctly shown