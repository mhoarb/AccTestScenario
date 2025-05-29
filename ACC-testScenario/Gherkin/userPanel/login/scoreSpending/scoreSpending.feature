Feature: Spend Points Page
  As a logged-in user, I want to interact with the Spend Points page so that I can utilize my points for various services and view related information.

  Background:
    Given the user is logged in with valid credentials
    And the user is on the Spend Points page at "https://club.farazpardazan.com/home/spending"

  Scenario: View Spend Points page details
    Given the user has available points
    When the user views the Spend Points page
    Then the user should see the available points "6883"
    And the user should see the following sections:
      | تخفیف های ویژه قطار فدک |
      | خدمات ویژه برندهای برتر |
      | نیکوکاری                |
      | قرعه‌کشی               |
    And the user should see the "راهنمای خرج امتیاز" link
    And the user should see the following navigation options:
      | خانه           |
      | خرج امتیاز     |
      | کسب امتیاز     |
      | سابقه تخفیف    |

  Scenario: Navigate to Fadak Train Discounts
    When the user clicks on the "تخفیف های ویژه قطار فدک" section
    Then a new page should open with Fadak train discount details

  Scenario: Navigate to Premium Brand Services
    When the user clicks on the "خدمات ویژه برندهای برتر" section
    Then the user should see a list of premium brand categories:
      | فروشگاه اینترنتی       |
      | پوشاک                  |
      | سرگرمی                |
      | رفت و آمد              |
      | بازی و سرگرمی         |
      | کودکان و نوجوانان       |
      | پزشکی و سلامتی        |
      | خدمات عمومی           |
      | سفر و گردشگری          |
      | آموزشی و فرهنگی        |

