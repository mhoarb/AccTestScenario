# openapi_client.AdminChampionsLeagueLuckyWheelItemControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_champions_league_lucky_wheel_item**](AdminChampionsLeagueLuckyWheelItemControllerApi.md#create_champions_league_lucky_wheel_item) | **POST** /admin/champions-league/lucky-wheel-item | 
[**delete_champions_league_lucky_wheel_item_by_id**](AdminChampionsLeagueLuckyWheelItemControllerApi.md#delete_champions_league_lucky_wheel_item_by_id) | **DELETE** /admin/champions-league/lucky-wheel-item/{id} | 
[**find_champions_league_lucky_wheel_item_by_id**](AdminChampionsLeagueLuckyWheelItemControllerApi.md#find_champions_league_lucky_wheel_item_by_id) | **GET** /admin/champions-league/lucky-wheel-item/{id} | 
[**load_all_by_lucky_wheel_id**](AdminChampionsLeagueLuckyWheelItemControllerApi.md#load_all_by_lucky_wheel_id) | **GET** /admin/champions-league/lucky-wheel-item/lucky-wheel/{luckyWheelId} | 
[**update_champions_league_lucky_wheel_item_by_id**](AdminChampionsLeagueLuckyWheelItemControllerApi.md#update_champions_league_lucky_wheel_item_by_id) | **PUT** /admin/champions-league/lucky-wheel-item/{id} | 


# **create_champions_league_lucky_wheel_item**
> AdminChampionsLeagueLuckyWheelItemOutput create_champions_league_lucky_wheel_item(lucky_wheel_id, champions_league_lucky_wheel_item_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_champions_league_lucky_wheel_item_output import AdminChampionsLeagueLuckyWheelItemOutput
from openapi_client.models.champions_league_lucky_wheel_item_input import ChampionsLeagueLuckyWheelItemInput
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
    api_instance = openapi_client.AdminChampionsLeagueLuckyWheelItemControllerApi(api_client)
    lucky_wheel_id = 56 # int | 
    champions_league_lucky_wheel_item_input = openapi_client.ChampionsLeagueLuckyWheelItemInput() # ChampionsLeagueLuckyWheelItemInput | 

    try:
        api_response = api_instance.create_champions_league_lucky_wheel_item(lucky_wheel_id, champions_league_lucky_wheel_item_input)
        print("The response of AdminChampionsLeagueLuckyWheelItemControllerApi->create_champions_league_lucky_wheel_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLuckyWheelItemControllerApi->create_champions_league_lucky_wheel_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lucky_wheel_id** | **int**|  | 
 **champions_league_lucky_wheel_item_input** | [**ChampionsLeagueLuckyWheelItemInput**](ChampionsLeagueLuckyWheelItemInput.md)|  | 

### Return type

[**AdminChampionsLeagueLuckyWheelItemOutput**](AdminChampionsLeagueLuckyWheelItemOutput.md)

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

# **delete_champions_league_lucky_wheel_item_by_id**
> delete_champions_league_lucky_wheel_item_by_id(id)

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
    api_instance = openapi_client.AdminChampionsLeagueLuckyWheelItemControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_champions_league_lucky_wheel_item_by_id(id)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLuckyWheelItemControllerApi->delete_champions_league_lucky_wheel_item_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_champions_league_lucky_wheel_item_by_id**
> AdminChampionsLeagueLuckyWheelItemOutput find_champions_league_lucky_wheel_item_by_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_champions_league_lucky_wheel_item_output import AdminChampionsLeagueLuckyWheelItemOutput
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
    api_instance = openapi_client.AdminChampionsLeagueLuckyWheelItemControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_champions_league_lucky_wheel_item_by_id(id)
        print("The response of AdminChampionsLeagueLuckyWheelItemControllerApi->find_champions_league_lucky_wheel_item_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLuckyWheelItemControllerApi->find_champions_league_lucky_wheel_item_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**AdminChampionsLeagueLuckyWheelItemOutput**](AdminChampionsLeagueLuckyWheelItemOutput.md)

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

# **load_all_by_lucky_wheel_id**
> List[AdminChampionsLeagueLuckyWheelItemOutput] load_all_by_lucky_wheel_id(lucky_wheel_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_champions_league_lucky_wheel_item_output import AdminChampionsLeagueLuckyWheelItemOutput
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
    api_instance = openapi_client.AdminChampionsLeagueLuckyWheelItemControllerApi(api_client)
    lucky_wheel_id = 56 # int | 

    try:
        api_response = api_instance.load_all_by_lucky_wheel_id(lucky_wheel_id)
        print("The response of AdminChampionsLeagueLuckyWheelItemControllerApi->load_all_by_lucky_wheel_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLuckyWheelItemControllerApi->load_all_by_lucky_wheel_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lucky_wheel_id** | **int**|  | 

### Return type

[**List[AdminChampionsLeagueLuckyWheelItemOutput]**](AdminChampionsLeagueLuckyWheelItemOutput.md)

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

# **update_champions_league_lucky_wheel_item_by_id**
> AdminChampionsLeagueLuckyWheelItemOutput update_champions_league_lucky_wheel_item_by_id(id, champions_league_lucky_wheel_item_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_champions_league_lucky_wheel_item_output import AdminChampionsLeagueLuckyWheelItemOutput
from openapi_client.models.champions_league_lucky_wheel_item_input import ChampionsLeagueLuckyWheelItemInput
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
    api_instance = openapi_client.AdminChampionsLeagueLuckyWheelItemControllerApi(api_client)
    id = 56 # int | 
    champions_league_lucky_wheel_item_input = openapi_client.ChampionsLeagueLuckyWheelItemInput() # ChampionsLeagueLuckyWheelItemInput | 

    try:
        api_response = api_instance.update_champions_league_lucky_wheel_item_by_id(id, champions_league_lucky_wheel_item_input)
        print("The response of AdminChampionsLeagueLuckyWheelItemControllerApi->update_champions_league_lucky_wheel_item_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLuckyWheelItemControllerApi->update_champions_league_lucky_wheel_item_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **champions_league_lucky_wheel_item_input** | [**ChampionsLeagueLuckyWheelItemInput**](ChampionsLeagueLuckyWheelItemInput.md)|  | 

### Return type

[**AdminChampionsLeagueLuckyWheelItemOutput**](AdminChampionsLeagueLuckyWheelItemOutput.md)

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

