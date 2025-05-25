# openapi_client.AdminReportControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_max_his_date**](AdminReportControllerApi.md#fetch_max_his_date) | **POST** /admin/report/last-update | 
[**filter_all_information_user**](AdminReportControllerApi.md#filter_all_information_user) | **POST** /admin/report/all-information-user | 
[**filter_app_user**](AdminReportControllerApi.md#filter_app_user) | **POST** /admin/report/app-user | 
[**filter_champions_league_lottery_participate**](AdminReportControllerApi.md#filter_champions_league_lottery_participate) | **POST** /admin/report/champions-league-lottery-participate | 
[**filter_cumulative_score**](AdminReportControllerApi.md#filter_cumulative_score) | **POST** /admin/report/cumulative | 
[**filter_gift_user**](AdminReportControllerApi.md#filter_gift_user) | **POST** /admin/report/gift-user | 
[**filter_login_user**](AdminReportControllerApi.md#filter_login_user) | **POST** /admin/report/login-user | 
[**filter_lucky_wheel_participate_user**](AdminReportControllerApi.md#filter_lucky_wheel_participate_user) | **POST** /admin/report/lucky-wheel-participate-user | 
[**filter_unregister_users**](AdminReportControllerApi.md#filter_unregister_users) | **POST** /admin/report/unregister-users | 
[**filter_user_badge**](AdminReportControllerApi.md#filter_user_badge) | **POST** /admin/report/user-badge | 
[**filter_users_gem**](AdminReportControllerApi.md#filter_users_gem) | **POST** /admin/report/users-gem | 
[**filter_users_missions**](AdminReportControllerApi.md#filter_users_missions) | **POST** /admin/report/users-missions | 
[**filter_users_score**](AdminReportControllerApi.md#filter_users_score) | **POST** /admin/report/users-score | 


# **fetch_max_his_date**
> int fetch_max_his_date()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ccd.farazpardazan.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ccd.farazpardazan.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminReportControllerApi(api_client)

    try:
        api_response = api_instance.fetch_max_his_date()
        print("The response of AdminReportControllerApi->fetch_max_his_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminReportControllerApi->fetch_max_his_date: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**int**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filter_all_information_user**
> PageUserProfileDetailsOutput filter_all_information_user(pageable, report_all_information_user_input=report_all_information_user_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_user_profile_details_output import PageUserProfileDetailsOutput
from openapi_client.models.pageable import Pageable
from openapi_client.models.report_all_information_user_input import ReportAllInformationUserInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ccd.farazpardazan.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ccd.farazpardazan.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminReportControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    report_all_information_user_input = openapi_client.ReportAllInformationUserInput() # ReportAllInformationUserInput |  (optional)

    try:
        api_response = api_instance.filter_all_information_user(pageable, report_all_information_user_input=report_all_information_user_input)
        print("The response of AdminReportControllerApi->filter_all_information_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminReportControllerApi->filter_all_information_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **report_all_information_user_input** | [**ReportAllInformationUserInput**](ReportAllInformationUserInput.md)|  | [optional] 

### Return type

[**PageUserProfileDetailsOutput**](PageUserProfileDetailsOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filter_app_user**
> PageReportAppUserOutput filter_app_user(pageable, report_app_user_input=report_app_user_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_report_app_user_output import PageReportAppUserOutput
from openapi_client.models.pageable import Pageable
from openapi_client.models.report_app_user_input import ReportAppUserInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ccd.farazpardazan.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ccd.farazpardazan.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminReportControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    report_app_user_input = openapi_client.ReportAppUserInput() # ReportAppUserInput |  (optional)

    try:
        api_response = api_instance.filter_app_user(pageable, report_app_user_input=report_app_user_input)
        print("The response of AdminReportControllerApi->filter_app_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminReportControllerApi->filter_app_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **report_app_user_input** | [**ReportAppUserInput**](ReportAppUserInput.md)|  | [optional] 

### Return type

[**PageReportAppUserOutput**](PageReportAppUserOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filter_champions_league_lottery_participate**
> PageReportChampionsLeagueLotteryParticipateOutput filter_champions_league_lottery_participate(pageable, report_champions_league_lottery_participate_input=report_champions_league_lottery_participate_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_report_champions_league_lottery_participate_output import PageReportChampionsLeagueLotteryParticipateOutput
from openapi_client.models.pageable import Pageable
from openapi_client.models.report_champions_league_lottery_participate_input import ReportChampionsLeagueLotteryParticipateInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ccd.farazpardazan.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ccd.farazpardazan.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminReportControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    report_champions_league_lottery_participate_input = openapi_client.ReportChampionsLeagueLotteryParticipateInput() # ReportChampionsLeagueLotteryParticipateInput |  (optional)

    try:
        api_response = api_instance.filter_champions_league_lottery_participate(pageable, report_champions_league_lottery_participate_input=report_champions_league_lottery_participate_input)
        print("The response of AdminReportControllerApi->filter_champions_league_lottery_participate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminReportControllerApi->filter_champions_league_lottery_participate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **report_champions_league_lottery_participate_input** | [**ReportChampionsLeagueLotteryParticipateInput**](ReportChampionsLeagueLotteryParticipateInput.md)|  | [optional] 

### Return type

[**PageReportChampionsLeagueLotteryParticipateOutput**](PageReportChampionsLeagueLotteryParticipateOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filter_cumulative_score**
> ReportCumulativeOutput filter_cumulative_score(report_cumulative_input=report_cumulative_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.report_cumulative_input import ReportCumulativeInput
from openapi_client.models.report_cumulative_output import ReportCumulativeOutput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ccd.farazpardazan.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ccd.farazpardazan.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminReportControllerApi(api_client)
    report_cumulative_input = openapi_client.ReportCumulativeInput() # ReportCumulativeInput |  (optional)

    try:
        api_response = api_instance.filter_cumulative_score(report_cumulative_input=report_cumulative_input)
        print("The response of AdminReportControllerApi->filter_cumulative_score:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminReportControllerApi->filter_cumulative_score: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_cumulative_input** | [**ReportCumulativeInput**](ReportCumulativeInput.md)|  | [optional] 

### Return type

[**ReportCumulativeOutput**](ReportCumulativeOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filter_gift_user**
> PageReportGiftUserOutput filter_gift_user(pageable, report_gift_user_input=report_gift_user_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_report_gift_user_output import PageReportGiftUserOutput
from openapi_client.models.pageable import Pageable
from openapi_client.models.report_gift_user_input import ReportGiftUserInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ccd.farazpardazan.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ccd.farazpardazan.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminReportControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    report_gift_user_input = openapi_client.ReportGiftUserInput() # ReportGiftUserInput |  (optional)

    try:
        api_response = api_instance.filter_gift_user(pageable, report_gift_user_input=report_gift_user_input)
        print("The response of AdminReportControllerApi->filter_gift_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminReportControllerApi->filter_gift_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **report_gift_user_input** | [**ReportGiftUserInput**](ReportGiftUserInput.md)|  | [optional] 

### Return type

[**PageReportGiftUserOutput**](PageReportGiftUserOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filter_login_user**
> PageReportLoginUserOutput filter_login_user(pageable, report_login_user_input=report_login_user_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_report_login_user_output import PageReportLoginUserOutput
from openapi_client.models.pageable import Pageable
from openapi_client.models.report_login_user_input import ReportLoginUserInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ccd.farazpardazan.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ccd.farazpardazan.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminReportControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    report_login_user_input = openapi_client.ReportLoginUserInput() # ReportLoginUserInput |  (optional)

    try:
        api_response = api_instance.filter_login_user(pageable, report_login_user_input=report_login_user_input)
        print("The response of AdminReportControllerApi->filter_login_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminReportControllerApi->filter_login_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **report_login_user_input** | [**ReportLoginUserInput**](ReportLoginUserInput.md)|  | [optional] 

### Return type

[**PageReportLoginUserOutput**](PageReportLoginUserOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filter_lucky_wheel_participate_user**
> PageReportLuckyWheelParticipateOutput filter_lucky_wheel_participate_user(pageable, report_lucky_wheel_participate_input=report_lucky_wheel_participate_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_report_lucky_wheel_participate_output import PageReportLuckyWheelParticipateOutput
from openapi_client.models.pageable import Pageable
from openapi_client.models.report_lucky_wheel_participate_input import ReportLuckyWheelParticipateInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ccd.farazpardazan.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ccd.farazpardazan.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminReportControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    report_lucky_wheel_participate_input = openapi_client.ReportLuckyWheelParticipateInput() # ReportLuckyWheelParticipateInput |  (optional)

    try:
        api_response = api_instance.filter_lucky_wheel_participate_user(pageable, report_lucky_wheel_participate_input=report_lucky_wheel_participate_input)
        print("The response of AdminReportControllerApi->filter_lucky_wheel_participate_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminReportControllerApi->filter_lucky_wheel_participate_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **report_lucky_wheel_participate_input** | [**ReportLuckyWheelParticipateInput**](ReportLuckyWheelParticipateInput.md)|  | [optional] 

### Return type

[**PageReportLuckyWheelParticipateOutput**](PageReportLuckyWheelParticipateOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filter_unregister_users**
> PageReportUnregisterUserOutput filter_unregister_users(pageable, report_unregister_user_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_report_unregister_user_output import PageReportUnregisterUserOutput
from openapi_client.models.pageable import Pageable
from openapi_client.models.report_unregister_user_input import ReportUnregisterUserInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ccd.farazpardazan.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ccd.farazpardazan.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminReportControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    report_unregister_user_input = openapi_client.ReportUnregisterUserInput() # ReportUnregisterUserInput | 

    try:
        api_response = api_instance.filter_unregister_users(pageable, report_unregister_user_input)
        print("The response of AdminReportControllerApi->filter_unregister_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminReportControllerApi->filter_unregister_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **report_unregister_user_input** | [**ReportUnregisterUserInput**](ReportUnregisterUserInput.md)|  | 

### Return type

[**PageReportUnregisterUserOutput**](PageReportUnregisterUserOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filter_user_badge**
> PageReportUserBadgeOutput filter_user_badge(pageable, report_user_badge_input=report_user_badge_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_report_user_badge_output import PageReportUserBadgeOutput
from openapi_client.models.pageable import Pageable
from openapi_client.models.report_user_badge_input import ReportUserBadgeInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ccd.farazpardazan.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ccd.farazpardazan.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminReportControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    report_user_badge_input = openapi_client.ReportUserBadgeInput() # ReportUserBadgeInput |  (optional)

    try:
        api_response = api_instance.filter_user_badge(pageable, report_user_badge_input=report_user_badge_input)
        print("The response of AdminReportControllerApi->filter_user_badge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminReportControllerApi->filter_user_badge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **report_user_badge_input** | [**ReportUserBadgeInput**](ReportUserBadgeInput.md)|  | [optional] 

### Return type

[**PageReportUserBadgeOutput**](PageReportUserBadgeOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filter_users_gem**
> PageReportUsersGemOutput filter_users_gem(pageable, report_users_gem_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_report_users_gem_output import PageReportUsersGemOutput
from openapi_client.models.pageable import Pageable
from openapi_client.models.report_users_gem_input import ReportUsersGemInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ccd.farazpardazan.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ccd.farazpardazan.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminReportControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    report_users_gem_input = openapi_client.ReportUsersGemInput() # ReportUsersGemInput | 

    try:
        api_response = api_instance.filter_users_gem(pageable, report_users_gem_input)
        print("The response of AdminReportControllerApi->filter_users_gem:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminReportControllerApi->filter_users_gem: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **report_users_gem_input** | [**ReportUsersGemInput**](ReportUsersGemInput.md)|  | 

### Return type

[**PageReportUsersGemOutput**](PageReportUsersGemOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filter_users_missions**
> PageReportChampionsLeagueMissionOutput filter_users_missions(pageable, report_champions_league_mission_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_report_champions_league_mission_output import PageReportChampionsLeagueMissionOutput
from openapi_client.models.pageable import Pageable
from openapi_client.models.report_champions_league_mission_input import ReportChampionsLeagueMissionInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ccd.farazpardazan.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ccd.farazpardazan.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminReportControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    report_champions_league_mission_input = openapi_client.ReportChampionsLeagueMissionInput() # ReportChampionsLeagueMissionInput | 

    try:
        api_response = api_instance.filter_users_missions(pageable, report_champions_league_mission_input)
        print("The response of AdminReportControllerApi->filter_users_missions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminReportControllerApi->filter_users_missions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **report_champions_league_mission_input** | [**ReportChampionsLeagueMissionInput**](ReportChampionsLeagueMissionInput.md)|  | 

### Return type

[**PageReportChampionsLeagueMissionOutput**](PageReportChampionsLeagueMissionOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filter_users_score**
> PageReportUsersScoreOutput filter_users_score(pageable, report_users_score_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_report_users_score_output import PageReportUsersScoreOutput
from openapi_client.models.pageable import Pageable
from openapi_client.models.report_users_score_input import ReportUsersScoreInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ccd.farazpardazan.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ccd.farazpardazan.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminReportControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    report_users_score_input = openapi_client.ReportUsersScoreInput() # ReportUsersScoreInput | 

    try:
        api_response = api_instance.filter_users_score(pageable, report_users_score_input)
        print("The response of AdminReportControllerApi->filter_users_score:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminReportControllerApi->filter_users_score: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **report_users_score_input** | [**ReportUsersScoreInput**](ReportUsersScoreInput.md)|  | 

### Return type

[**PageReportUsersScoreOutput**](PageReportUsersScoreOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

