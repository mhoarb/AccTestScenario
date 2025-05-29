Feature: About Us Page
  As a user, I want to view the About Us page so that I can learn about the benefits of joining the Fadak Trains customer club.

  Background:
    Given the user is on the About Us page at "https://club.farazpardazan.com/profile/aboutUs/info"

  Scenario: View About Us page content
    When the user views the About Us page
    Then the user should see the title "درباره ما"
    And the user should see the following introductory text:
      | یک پیشنهاد عالی براتون داریم..... |
    And the user should see the main content:
      | برای شما که مشتری ما هستید و یا برای کسانی که به زودی مشتری ما خواهند شد. شما می تونید بدون هیچ زحمت یا هزینه ای عضو باشگاه مشتریان قطار فدک شوید. توی مسابقه شرکت کنید، برنده شوید، جایزه بگیرید، مسافرت بروید، هدیه بگیرید و خلاصه که از دیگران متمایز شوید. ما در این باشگاه کلی پیشنهاد عالی برای شما آماده کردیم. ما به شما کمک خواهیم کرد که اعتبارکسب کنید و با اعتبارهای نقدی خود از امکاناتی که برای شما مهیا کرده ایم، استفاده کنید و یا تخفیف های گسترده در خرید بلیت های خود داشته باشید. شما در این باشگاه از تلاش خود لذت خواهید برد. |
    And the user should see the call to action:
      | فقط کافیست به ما اعتماد کنید و در اسرع وقت عضو باشگاه مشتریان قطار فدک شوید. |

  Scenario: Navigate to join customer club from About Us page
    Given the user is not a member of the Fadak Trains customer club
    When the user views the About Us page
    And the user clicks the link to join the customer club
    Then the user should be redirected to the signup page
    And the user should see a signup form for the customer club