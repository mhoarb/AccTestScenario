Feature: Main Dashboard Navigation
  As a logged-in user
  I want to interact with the main dashboard "https://club.farazpardazan.com/home#"
  So that I can navigate through the app and access various features

  Background:
    Given I am logged in as a user
    And I am on the Main Dashboard page "https://club.farazpardazan.com/home#"

  Scenario: Navigate to profile page from the top-right profile icon
    When I click on the profile icon in the top-right corner
    Then I should be navigated to the Profile page

  Scenario: Navigate to help page from the top-left help button
    When I click on the help button in the top-left corner
    Then I should be navigated to the Help page

  Scenario: Navigate to my messages page from the notification icon
    When I click on the notification icon next to the help button
    Then I should be navigated to the Messages page

  Scenario: Display spendable points(متیاز قابل خرج) and user benefits
    Then I should see the spendable points as "5000" or something
    And I should see user benefits including "امکانات شما" 

  Scenario: Navigate to advertising card details page
    Given there are advertising cards displayed
    When I click on the "تخفیف های ویژه قطارهای فدک" card
    Then I should be navigated to the Details page for "تخفیف های ویژه قطارهای فدک"

  Scenario: Navigate to Fadak card page from the Fadak card
    When I click on the Fadak card
    Then I should be navigated to the Fadak Card page

  Scenario: Navigate to Acceptor Services and Special Services pages
    When I click on the "خدمات پذیرندگان" button
    Then I should be navigated to the Acceptor Services page
    When I click on the "خدمات ویژه" button
    Then I should be navigated to the Special Services page

  Scenario: Display tab bar with four items and default to Home tab after login
    Given I have just logged in
    Then I should see the Main Dashboard page by default
    And I should see a tab bar at the bottom with the following items:
      | Tab        |
      | خانه       |
      | خرج امتیاز |
      | کسب امتیاز |
      | سابقه تخفیف |
    And the "خانه" tab should be selected

  Scenario: Verify the presence of the support button
    Then I should see the "پشتیبانی" button in the bottom-left corner