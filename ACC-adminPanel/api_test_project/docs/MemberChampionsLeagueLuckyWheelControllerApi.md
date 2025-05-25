# openapi_client.MemberChampionsLeagueLuckyWheelControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_champions_league_lucky_wheel_by_id**](MemberChampionsLeagueLuckyWheelControllerApi.md#find_champions_league_lucky_wheel_by_id) | **GET** /member/lucky-wheel/{id} | 
[**load_all1**](MemberChampionsLeagueLuckyWheelControllerApi.md#load_all1) | **GET** /member/lucky-wheel | 
[**participate_lucky_wheel**](MemberChampionsLeagueLuckyWheelControllerApi.md#participate_lucky_wheel) | **POST** /member/lucky-wheel/{id} | 


# **find_champions_league_lucky_wheel_by_id**
> ChampionsLeagueLuckyWheelOutput find_champions_league_lucky_wheel_by_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.champions_league_lucky_wheel_output import ChampionsLeagueLuckyWheelOutput
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
    api_instance = openapi_client.MemberChampionsLeagueLuckyWheelControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_champions_league_lucky_wheel_by_id(id)
        print("The response of MemberChampionsLeagueLuckyWheelControllerApi->find_champions_league_lucky_wheel_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberChampionsLeagueLuckyWheelControllerApi->find_champions_league_lucky_wheel_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**ChampionsLeagueLuckyWheelOutput**](ChampionsLeagueLuckyWheelOutput.md)

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

# **load_all1**
> List[ChampionsLeagueLuckyWheelOutput] load_all1()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.champions_league_lucky_wheel_output import ChampionsLeagueLuckyWheelOutput
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
    api_instance = openapi_client.MemberChampionsLeagueLuckyWheelControllerApi(api_client)

    try:
        api_response = api_instance.load_all1()
        print("The response of MemberChampionsLeagueLuckyWheelControllerApi->load_all1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberChampionsLeagueLuckyWheelControllerApi->load_all1: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ChampionsLeagueLuckyWheelOutput]**](ChampionsLeagueLuckyWheelOutput.md)

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

# **participate_lucky_wheel**
> ChampionsLeagueLuckyWheelItemOutput participate_lucky_wheel(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.champions_league_lucky_wheel_item_output import ChampionsLeagueLuckyWheelItemOutput
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
    api_instance = openapi_client.MemberChampionsLeagueLuckyWheelControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.participate_lucky_wheel(id)
        print("The response of MemberChampionsLeagueLuckyWheelControllerApi->participate_lucky_wheel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberChampionsLeagueLuckyWheelControllerApi->participate_lucky_wheel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**ChampionsLeagueLuckyWheelItemOutput**](ChampionsLeagueLuckyWheelItemOutput.md)

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

