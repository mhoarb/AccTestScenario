
Feature: My History Page
    As a logged-in user, I want to view the My History page so that I can see my point earnings, point spending, and discount history.

    Background:
        Given the user is logged in with valid credentials
        And the user is on the My History page at "https://club.farazpardazan.com/history"

    Scenario: View discount history
        When the user clicks on the "سابقه تخفیف ها" tab
        Then the user should see a list of discount codes including:
            | آچارباز      | 50 درصد تخفیف تا سقف 50 هزار تومان | کد: PTHFJE | تاریخ انقضا: 1404/02/31 |
            | آچارباز      | 50 درصد تخفیف تا سقف 50 هزار تومان | کد: 69Y12A | تاریخ انقضا: 1404/02/31 |
            | آچارباز      | 50 درصد تخفیف تا سقف 50 هزار تومان | کد: 8CMATS | تاریخ انقضا: 1404/02/31 |
            | آچارباز      | 50 درصد تخفیف تا سقف 50 هزار تومان | کد: F1R7N3 | تاریخ انقضا: 1404/02/31 |
            | مدرسه اینورس | 250 هزار تومان تخفیف بدون سقف      | کد: A9I8IO | تاریخ انقضا: 1403/12/30 |
            | آچارباز      | 50 درصد تخفیف تا سقف 50 هزار تومان | کد: ZRWLXI | تاریخ انقضا: 1403/12/30 |
            | آچارباز      | 50 درصد تخفیف تا سقف 50 هزار تومان | کد: LIABJX | تاریخ انقضا: 1403/12/30 |
            | خانومی       | 10% تخفیف تا سقف 100 هزارتومان     | کد: Y3F0IB | تاریخ انقضا: 1403/12/14 |
            | خانومی       | 10% تخفیف تا سقف 100 هزارتومان     | کد: APAWIJ | تاریخ انقضا: 1403/12/14 |
            | خانومی       | 10% تخفیف تا سقف 100 هزارتومان     | کد: Z54R5K | تاریخ انقضا: 1403/12/14 |

    Scenario: Copy discount code
        Given the user is on the "سابقه تخفیف ها" tab
        When the user clicks the "کپی کردن" button for the discount code "PTHFJE"
        Then the discount code "PTHFJE" should be copied to the clipboard
        And the user should see a confirmation message "کد تخفیف با موفقیت کپی شد"
