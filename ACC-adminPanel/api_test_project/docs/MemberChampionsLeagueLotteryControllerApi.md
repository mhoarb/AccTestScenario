# openapi_client.MemberChampionsLeagueLotteryControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_lottery_by_id1**](MemberChampionsLeagueLotteryControllerApi.md#find_lottery_by_id1) | **GET** /member/champions-league/lottery/{id} | 
[**load_all_by_type1**](MemberChampionsLeagueLotteryControllerApi.md#load_all_by_type1) | **GET** /member/champions-league/lottery | 


# **find_lottery_by_id1**
> LotteryOutput find_lottery_by_id1(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_output import LotteryOutput
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
    api_instance = openapi_client.MemberChampionsLeagueLotteryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_lottery_by_id1(id)
        print("The response of MemberChampionsLeagueLotteryControllerApi->find_lottery_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberChampionsLeagueLotteryControllerApi->find_lottery_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**LotteryOutput**](LotteryOutput.md)

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

# **load_all_by_type1**
> List[LotteryOutput] load_all_by_type1()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_output import LotteryOutput
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
    api_instance = openapi_client.MemberChampionsLeagueLotteryControllerApi(api_client)

    try:
        api_response = api_instance.load_all_by_type1()
        print("The response of MemberChampionsLeagueLotteryControllerApi->load_all_by_type1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberChampionsLeagueLotteryControllerApi->load_all_by_type1: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[LotteryOutput]**](LotteryOutput.md)

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

