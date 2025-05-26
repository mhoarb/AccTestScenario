Feature: Terms (FAQ) Management
  As a super admin
  I want to manage frequently asked questions (FAQs) "https://admin-club.farazpardazan.com/questions"
  So that I can provide accurate information to users

  Background:
    Given I am logged in as a super admin
    And I am on the question page "https://admin-club.farazpardazan.com/questions"

  Scenario: Display questions and answers correctly
    Given there are FAQs in the list
    When I view the table
    Then the data in the columns "سوال" and "پاسخ" should be correct
    And there should be no duplicate entries

  Scenario: Edit an existing FAQ
    Given there is an FAQ with the question "کد تخفیف دریافت شده در سایت مورد نظر اعمال نشد، چطور میتوانم پیگیری نمایم؟"
    When I click on the "Edit" icon next to "کد تخفیف دریافت شده در سایت مورد نظر اعمال نشد، چطور میتوانم پیگیری نمایم؟"
    And I update the question to "پیگیری کد تخفیف اعمال نشده"
    And I update the answer to "برای تغییر رمز عبور، به بخش تنظیمات حساب کاربری مراجعه کنید."
    And I click on the "ثبت" button
    Then the FAQ question should be updated to "چگونه رمز عبور خود را تغییر دهم؟"
    And the FAQ answer should be updated to "از طریق پشتیبانی"
    And the updated FAQ should be visible in the list

  Scenario: Delete an existing FAQ
    Given there is an FAQ with the question "کد تخفیف دریافت شده در سایت مورد نظر اعمال نشد، چطور میتوانم پیگیری نمایم؟"
    When I click on the "Delete" icon next to "کد تخفیف دریافت شده در سایت مورد نظر اعمال نشد، چطور میتوانم پیگیری نمایم؟"
    And I confirm the deletion
    Then the FAQ "کد تخفیف دریافت شده در سایت مورد نظر اعمال نشد، چطور میتوانم پیگیری نمایم؟" should be removed from the list

  Scenario: Create a new FAQ with question and answer fields
    When I click on the "ثبت سوال" button
    Then I should be redirected to a new page
    When I fill in the following fields:
      | Field   | Value                             |
      | سوال    | چگونه می‌توانم حسابم را حذف کنم؟ |
      | پاسخ    | برای حذف حساب، با پشتیبانی تماس بگیرید. |
    And I click on the "ثبت" button
    Then a new FAQ with the question "چگونه می‌توانم حسابم را حذف کنم؟" should be created
    And I should see the new FAQ in the list

  Scenario: Export FAQ data to Excel
    When I click on the "خروجی اکسل" button
    Then the FAQ data should be downloaded as an Excel file

  Scenario: Navigate to the next page of FAQs
    Given there are more than 10 FAQs in the list
    And I am on page 1
    When I click on the "Next" pagination button
    Then I should be taken to page 2
    And I should see the next set of FAQs