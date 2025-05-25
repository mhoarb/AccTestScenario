Feature: Admin Panel Dashboard
    As an admin user
    I want to log into the admin panel and view the dashboard
    So that I can manage and monitor system data

    Scenario: Verify dashboard displays all four items
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the admin dashboard at https://admin-ccd.farazpardazan.com/dashboard
        When the page loads
        Then the dashboard displays the following items:
            | Item                                   |
            ------------------------------------------
            | تعداد مراکز آنلاین                     |
            | نظرات تایید نشده                       |
            | کدهای تخفیف نزدیک به اتمام             |
            | کدهای تخفیف نزدیک به اتمام تاریخ انقضا |

        And each item has a "مشاهده" button

    Scenario: Click "مشاهده" button for "تعداد مراکز آنلاین"
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the admin dashboard at https://admin-ccd.farazpardazan.com/dashboard
        When the user clicks the "مشاهده" button for "تعداد مراکز آنلاین"
        Then a detailed result page is displayed showing the details of onlien Center

    Scenario: Click "مشاهده" button for Number of "نظرات تایید نشده "
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the admin dashboard at https://admin-ccd.farazpardazan.com/dashboard
        When the user clicks the "مشاهده" button for "تعداد کاربران فعال"
        Then a detailed result page or popup is displayed showing the details of active users

    Scenario: Click "مشاهده" button for Number of "کدهای تخفیف نزدیک به اتمام "
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the admin dashboard at https://admin-ccd.farazpardazan.com/dashboard
        When the user clicks the "مشاهده" button for "تعداد تراکنش‌ها"
        Then a detailed result page or popup is displayed showing the details of transactions

    Scenario: Click "مشاهده" button for Total "کدهای تخفیف نزدیک به اتمام تاریخ انقضا "
        Given the user is logged into the admin panel as "superadmin"
        And the user is on the admin dashboard at https://admin-ccd.farazpardazan.com/dashboard
        When the user clicks the "مشاهده" button for "کدهای تخفیف نزدیک به اتمام تاریخ انقضا"
        Then a detailed result page or popup is displayed showing the details of unpaid costs