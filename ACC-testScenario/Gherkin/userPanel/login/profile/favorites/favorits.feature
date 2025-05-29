Feature: Favorites Page
  As a logged-in user, I want to interact with the Favorites page to specify my preferences and interests.

  Background:
    Given the user is logged in with valid credentials
    And the user is on the Favorites page at "https://club.farazpardazan.com/profile/favorites"

  Scenario: Submit preferences with valid selections
    When the user selects "زیاد" for "میزان علاقه شما به استفاده از خدمات تاکسی و حمل نقل اینترنتی چقدر است؟"
    And the user selects "متوسط" for "میزان علاقه شما به دریافت تخفیف در خرید از فروشگاه‌های منتخب (پوشاک، لوازم خانگی و ...) چقدر است؟"
    And the user selects "کم" for "میزان علاقه شما به استفاده از بسته‌های اینترنت تخفیف‌دار چقدر است؟"
    And the user selects "برنامه نویسی" for "برای یادگیری یک مهارت جدید، کدامیک از زمینه‌های زیر را ترجیح می دهید؟"
    And the user selects "فیلم دیدن" for "برای گذراندن اوقات فراغت خود، چه سرگرمی رو ترجیح می دهید؟"
    And the user submits the preferences form
    Then the user should see a confirmation message "علاقه‌مندی‌ها با موفقیت ثبت شد"
    And the user should remain on the Favorites page

  Scenario: Attempt to submit preferences with incomplete selections
    When the user selects "متوسط" for "میزان علاقه شما به استفاده از خدمات تاکسی و حمل نقل اینترنتی چقدر است؟"
    And the user leaves the "میزان علاقه شما به دریافت تخفیف در خرید از فروشگاه‌های منتخب (پوشاک، لوازم خانگی و ...) چقدر است؟" field empty
    And the user selects "زیاد" for "میزان علاقه شما به استفاده از بسته‌های اینترنت تخفیف‌دار چقدر است؟"
    And the user selects "زبان خارجه" for "برای یادگیری یک مهارت جدید، کدامیک از زمینه‌های زیر را ترجیح می دهید؟"
    And the user selects "کتاب خواندن" for "برای گذراندن اوقات فراغت خود، چه سرگرمی رو ترجیح می دهید؟"
    And the user submits the preferences form
    Then the user should see an error message "لطفاً تمام فیلدها را پر کنید"
    And the user should remain on the Favorites page




  Scenario: Navigate back from Favorites page
    Given the user has navigated to the Favorites page from the account page
    When the user clicks the back button
    Then the user should be redirected to the account page at "https://club.farazpardazan.com/profile"