# openapi_client.MemberSpendScoreControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_all_charities**](MemberSpendScoreControllerApi.md#find_all_charities) | **GET** /member/spend-score/charities | نشان دادن تمام آیتم‌های نیکوکاری
[**find_all_lottery_tickets**](MemberSpendScoreControllerApi.md#find_all_lottery_tickets) | **GET** /member/spend-score/lotteries | نشان دادن تمام آیتم‌های قرعه‌کشی
[**find_all_spend_score_bank_articles**](MemberSpendScoreControllerApi.md#find_all_spend_score_bank_articles) | **GET** /member/spend-score/bank-services | نشان دادن لیست خدمات بانک
[**find_is_allowed_lottery**](MemberSpendScoreControllerApi.md#find_is_allowed_lottery) | **GET** /member/spend-score/isAllowed | بررسی مجاز بودن در شرکت در قرعه کسی
[**find_user**](MemberSpendScoreControllerApi.md#find_user) | **GET** /member/spend-score | نشان دادن اطلاعات کاربر


# **find_all_charities**
> List[CharityOutput] find_all_charities()

نشان دادن تمام آیتم‌های نیکوکاری

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.charity_output import CharityOutput
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
    api_instance = openapi_client.MemberSpendScoreControllerApi(api_client)

    try:
        # نشان دادن تمام آیتم‌های نیکوکاری
        api_response = api_instance.find_all_charities()
        print("The response of MemberSpendScoreControllerApi->find_all_charities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberSpendScoreControllerApi->find_all_charities: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[CharityOutput]**](CharityOutput.md)

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

# **find_all_lottery_tickets**
> LotteryHomeOutput find_all_lottery_tickets()

نشان دادن تمام آیتم‌های قرعه‌کشی

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_home_output import LotteryHomeOutput
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
    api_instance = openapi_client.MemberSpendScoreControllerApi(api_client)

    try:
        # نشان دادن تمام آیتم‌های قرعه‌کشی
        api_response = api_instance.find_all_lottery_tickets()
        print("The response of MemberSpendScoreControllerApi->find_all_lottery_tickets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberSpendScoreControllerApi->find_all_lottery_tickets: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**LotteryHomeOutput**](LotteryHomeOutput.md)

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

# **find_all_spend_score_bank_articles**
> List[SpendScoreBankArticleOutput] find_all_spend_score_bank_articles()

نشان دادن لیست خدمات بانک

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.spend_score_bank_article_output import SpendScoreBankArticleOutput
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
    api_instance = openapi_client.MemberSpendScoreControllerApi(api_client)

    try:
        # نشان دادن لیست خدمات بانک
        api_response = api_instance.find_all_spend_score_bank_articles()
        print("The response of MemberSpendScoreControllerApi->find_all_spend_score_bank_articles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberSpendScoreControllerApi->find_all_spend_score_bank_articles: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[SpendScoreBankArticleOutput]**](SpendScoreBankArticleOutput.md)

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

# **find_is_allowed_lottery**
> LotteryIsAllowedOutput find_is_allowed_lottery()

بررسی مجاز بودن در شرکت در قرعه کسی

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_is_allowed_output import LotteryIsAllowedOutput
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
    api_instance = openapi_client.MemberSpendScoreControllerApi(api_client)

    try:
        # بررسی مجاز بودن در شرکت در قرعه کسی
        api_response = api_instance.find_is_allowed_lottery()
        print("The response of MemberSpendScoreControllerApi->find_is_allowed_lottery:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberSpendScoreControllerApi->find_is_allowed_lottery: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**LotteryIsAllowedOutput**](LotteryIsAllowedOutput.md)

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

# **find_user**
> SpendScoreOutput find_user()

نشان دادن اطلاعات کاربر

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.spend_score_output import SpendScoreOutput
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
    api_instance = openapi_client.MemberSpendScoreControllerApi(api_client)

    try:
        # نشان دادن اطلاعات کاربر
        api_response = api_instance.find_user()
        print("The response of MemberSpendScoreControllerApi->find_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberSpendScoreControllerApi->find_user: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SpendScoreOutput**](SpendScoreOutput.md)

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

