Feature: Personal Info Page
  As a logged-in user, I want to manage my personal information on the Personal Info page so that I can update my profile details.

  Background:
    Given the user is logged in with valid credentials
    And the user is on the Personal Info page at "https://club.farazpardazan.com/profile/personal-info"

  Scenario: View and verify personal information fields
    Given the user has a profile with name "حامد" and family name "میرزایی"
    When the user views the Personal Info page
    Then the user should see the following fields:
      | نمایش نام در برترین ها |
      | نام                   |
      | نام خانوادگی         |
      | کد ملی               |
      | شماره موبایل         |
      | تلفن ثابت            |
      | تاریخ تولد           |
      | نام پدر              |
      | شغل                 |
      | پست الکترونیکی      |
      | کد پستی             |
      | وضعیت تاهل          |
      | تاریخ ازدواج         |
      | تعداد فرزندان        |
      | تاریخ تولد فرزندان   |
      | آدرس محل سکونت      |
      | میزان تحصیلات        |
    And the "نمایش نام در برترین ها" toggle should be set to "فعال"
    And the "نام" field should display "حامد" and be readonly
    And the "نام خانوادگی" field should display "میرزایی" and be readonly
    And the "ثبت" button should be visible

  Scenario: Update personal information with valid data
    When the user uploads a profile photo
    And the user toggles "نمایش نام در برترین ها" to "غیر فعال"
    And the user enters "09123456789" in the "شماره موبایل" field
    And the user enters "021" in the "پیش شماره" field of "تلفن ثابت"
    And the user enters "12345678" in the "شماره تلفن" field of "تلفن ثابت"
    And the user selects "1360" for year, "فروردین" for month, and "1" for day in "تاریخ تولد"
    And the user enters "علی" in the "نام پدر" field
    And the user enters "مهندس" in the "شغل" field
    And the user enters "user@example.com" in the "پست الکترونیکی" field
    And the user enters "1234567890" in the "کد پستی" field
    And the user selects "متاهل" for "وضعیت تاهل"
    And the user selects "1390" for year, "مهر" for month, and "15" for day in "تاریخ ازدواج"
    And the user selects "2" for "تعداد فرزندان"
    And the user adds a child’s birth date as "1400/05/05"
    And the user enters "تهران، خیابان نمونه" in the "آدرس محل سکونت" field
    And the user enters "کارشناسی ارشد" in the "میزان تحصیلات" field
    And the user clicks the "ثبت" button
    Then the user should see a confirmation message "اطلاعات با موفقیت ثبت شد"
    And the user should remain on the Personal Info page

  Scenario: Fail to update personal information with invalid data
    When the user enters "12345" in the "کد پستی" field
    And the user enters "invalid-email" in the "پست الکترونیکی" field
    And the user clicks the "ثبت" button
    Then the user should see error messages:
      | کد پستی باید 10 رقم باشد         |
      | فرمت پست الکترونیکی نامعتبر است |
    And the user should remain on the Personal Info page