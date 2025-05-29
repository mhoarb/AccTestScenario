Feature: Contact Us Page
  As a user, I want to view the Contact Us page so that I can find ways to communicate with the company.

  Background:
    Given the user is on the Contact Us page "https://club.farazpardazan.com/profile/contact"

  Scenario: View contact information
    When the user views the Contact Us page
    Then the user should see the following contact details:
      | تلفن تماس               | 02191006888               |
      | پست الکترونیکی         | info@fadaktrains.com      |
      | پیامک                  | 1000555                   |
      | وب سایت فدک کارت        | club.farazpardazan.com    |
      | وب سایت قطار فدک       | behinfarda                |
      | وب سایت باشگاه مشتریان  | club.farazpardazan.com    |
    And the user should see the Telegram bot address field is empty

  Scenario: Interact with contact links
    When the user clicks on the email link "info@fadaktrains.com"
    Then the user’s default email client should open with "info@fadaktrains.com" as the recipient
    When the user clicks on the website link "club.farazpardazan.com"
    Then the user should be redirected to "https://club.farazpardazan.com"
    When the user clicks on the website link "behinfarda"
    Then the user should be redirected to "https://behinfarda"