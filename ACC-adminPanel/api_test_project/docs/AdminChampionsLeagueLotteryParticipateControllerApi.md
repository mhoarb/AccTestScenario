# openapi_client.AdminChampionsLeagueLotteryParticipateControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_user_lottery_chances1**](AdminChampionsLeagueLotteryParticipateControllerApi.md#find_user_lottery_chances1) | **GET** /admin/champions-league/lottery-participate/chances | 
[**find_user_lottery_participates1**](AdminChampionsLeagueLotteryParticipateControllerApi.md#find_user_lottery_participates1) | **GET** /admin/champions-league/lottery-participate/participants | 


# **find_user_lottery_chances1**
> List[UserLotteryChanceOutput] find_user_lottery_chances1(lottery_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.user_lottery_chance_output import UserLotteryChanceOutput
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
    api_instance = openapi_client.AdminChampionsLeagueLotteryParticipateControllerApi(api_client)
    lottery_id = 56 # int | 

    try:
        api_response = api_instance.find_user_lottery_chances1(lottery_id)
        print("The response of AdminChampionsLeagueLotteryParticipateControllerApi->find_user_lottery_chances1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLotteryParticipateControllerApi->find_user_lottery_chances1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lottery_id** | **int**|  | 

### Return type

[**List[UserLotteryChanceOutput]**](UserLotteryChanceOutput.md)

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

# **find_user_lottery_participates1**
> List[UserLotteryParticipateOutput] find_user_lottery_participates1(lottery_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.user_lottery_participate_output import UserLotteryParticipateOutput
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
    api_instance = openapi_client.AdminChampionsLeagueLotteryParticipateControllerApi(api_client)
    lottery_id = 56 # int | 

    try:
        api_response = api_instance.find_user_lottery_participates1(lottery_id)
        print("The response of AdminChampionsLeagueLotteryParticipateControllerApi->find_user_lottery_participates1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLotteryParticipateControllerApi->find_user_lottery_participates1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lottery_id** | **int**|  | 

### Return type

[**List[UserLotteryParticipateOutput]**](UserLotteryParticipateOutput.md)

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

