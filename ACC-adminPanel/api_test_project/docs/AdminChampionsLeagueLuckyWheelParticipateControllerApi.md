# openapi_client.AdminChampionsLeagueLuckyWheelParticipateControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_winners_in_lucky_wheel**](AdminChampionsLeagueLuckyWheelParticipateControllerApi.md#find_winners_in_lucky_wheel) | **GET** /admin/champions-league/lucky-wheel-participate/{luckyWheelId} | 
[**find_winners_in_lucky_wheel_prize**](AdminChampionsLeagueLuckyWheelParticipateControllerApi.md#find_winners_in_lucky_wheel_prize) | **GET** /admin/champions-league/lucky-wheel-participate/item/{prizeId} | 


# **find_winners_in_lucky_wheel**
> List[UserLuckyWheelWinnerOutput] find_winners_in_lucky_wheel(lucky_wheel_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.user_lucky_wheel_winner_output import UserLuckyWheelWinnerOutput
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
    api_instance = openapi_client.AdminChampionsLeagueLuckyWheelParticipateControllerApi(api_client)
    lucky_wheel_id = 56 # int | 

    try:
        api_response = api_instance.find_winners_in_lucky_wheel(lucky_wheel_id)
        print("The response of AdminChampionsLeagueLuckyWheelParticipateControllerApi->find_winners_in_lucky_wheel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLuckyWheelParticipateControllerApi->find_winners_in_lucky_wheel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lucky_wheel_id** | **int**|  | 

### Return type

[**List[UserLuckyWheelWinnerOutput]**](UserLuckyWheelWinnerOutput.md)

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

# **find_winners_in_lucky_wheel_prize**
> List[UserLuckyWheelWinnerOutput] find_winners_in_lucky_wheel_prize(prize_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.user_lucky_wheel_winner_output import UserLuckyWheelWinnerOutput
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
    api_instance = openapi_client.AdminChampionsLeagueLuckyWheelParticipateControllerApi(api_client)
    prize_id = 56 # int | 

    try:
        api_response = api_instance.find_winners_in_lucky_wheel_prize(prize_id)
        print("The response of AdminChampionsLeagueLuckyWheelParticipateControllerApi->find_winners_in_lucky_wheel_prize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLuckyWheelParticipateControllerApi->find_winners_in_lucky_wheel_prize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prize_id** | **int**|  | 

### Return type

[**List[UserLuckyWheelWinnerOutput]**](UserLuckyWheelWinnerOutput.md)

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

