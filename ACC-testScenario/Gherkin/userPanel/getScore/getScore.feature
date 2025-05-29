Feature: Earn Points Page
  As a logged-in user, I want to interact with the Earn Points page so that I can understand and earn points through various actions.

  Background:
    Given the user is logged in with valid credentials
    And the user is on the Earn Points page at "https://club.farazpardazan.com/home/acquisition"

  Scenario: View Earn Points page details
    When the user views the Earn Points page
    Then the user should see the following earning opportunities:
      | تکمیل پروفایل        | 100 امتیاز |
      | ثبت تاریخ تولد        | 100 امتیاز |
      | ثبت تاریخ ازدواج       | 100 امتیاز |
      | ثبت تولد فرزندان      | 5 امتیاز   |
      | امتیاز ثابت هر فاکتور  | 1000 امتیاز به ازای هر فاکتور |
      | امتیاز متغیر هر فاکتور | 700 امتیاز به ازای هر 500 هزار تومان |
    And the user should see options for:
      | خرید بلیط قطار |
      | خرید تور مشهد   |
      | رزرو هتل       |
    And the user should see the "راهنمای کسب امتیاز" link
    And the user should see the following navigation options:
      | خانه           |
      | خرج امتیاز     |
      | کسب امتیاز     |
      | سابقه تخفیف    |

  Scenario: Navigate to profile completion to earn points
    Given the user has not completed their profile
    When the user clicks on the "تکمیل پروفایل" option
    Then the user should be redirected to the Personal Info page at "https://club.farazpardazan.com/profile/personal-info"
    When the user completes the profile by filling in all required fields
    And the user clicks the "ثبت" button
    Then the user should earn "100" points
    And the user should see a confirmation message "پروفایل با موفقیت تکمیل شد"

  Scenario: Earn points by registering birth date
    Given the user has not registered their birth date
    When the user clicks on the "ثبت تاریخ تولد" option
    Then the user should be redirected to the Personal Info page at "https://club.farazpardazan.com/profile/personal-info"
    When the user selects "1360" for year, "فروردین" for month, and "1" for day in "تاریخ تولد"
    And the user clicks the "ثبت" button
    Then the user should earn "100" points
    And the user should see a confirmation message "تاریخ تولد با موفقیت ثبت شد"

  Scenario: Earn points by registering marriage date
    Given the user has not registered their marriage date
    When the user clicks on the "ثبت تاریخ ازدواج" option
    Then the user should be redirected to the Personal Info page at "https://club.farazpardazan.com/profile/personal-info"
    When the user selects "متاهل" for "وضعیت تاهل"
    And the user selects "1390" for year, "مهر" for month, and "15" for day in "تاریخ ازدواج"
    And the user clicks the "ثبت" button
    Then the user should earn "100" points
    And the user should see a confirmation message "تاریخ ازدواج با موفقیت ثبت شد"

  Scenario: Earn points by registering children’s birth dates
    Given the user has not registered any children’s birth dates
    When the user clicks on the "ثبت تولد فرزندان" option
    Then the user should be redirected to the Personal Info page at "https://club.farazpardazan.com/profile/personal-info"
    When the user selects "1" for "تعداد فرزندان"
    And the user adds a child’s birth date as "1400/05/05"
    And the user clicks the "ثبت" button
    Then the user should earn "5" points
    And the user should see a confirmation message "تولد فرزند با موفقیت ثبت شد"




  Scenario: Access earn points guide
    When the user clicks on the "راهنمای کسب امتیاز" link
    Then the user should be redirected to the earn points guide page
    And the user should see instructions on how to earn points