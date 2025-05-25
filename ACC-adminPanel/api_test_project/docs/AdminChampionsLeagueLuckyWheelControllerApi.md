# openapi_client.AdminChampionsLeagueLuckyWheelControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_champions_league_lucky_wheel**](AdminChampionsLeagueLuckyWheelControllerApi.md#create_champions_league_lucky_wheel) | **POST** /admin/champions-league/lucky-wheel | 
[**delete_champions_league_lucky_wheel_output**](AdminChampionsLeagueLuckyWheelControllerApi.md#delete_champions_league_lucky_wheel_output) | **DELETE** /admin/champions-league/lucky-wheel/{id} | 
[**find_champions_league_lucky_wheel_output_by_id**](AdminChampionsLeagueLuckyWheelControllerApi.md#find_champions_league_lucky_wheel_output_by_id) | **GET** /admin/champions-league/lucky-wheel/{id} | 
[**load_all25**](AdminChampionsLeagueLuckyWheelControllerApi.md#load_all25) | **GET** /admin/champions-league/lucky-wheel | 
[**update_champions_league_lucky_wheel_output_by_id**](AdminChampionsLeagueLuckyWheelControllerApi.md#update_champions_league_lucky_wheel_output_by_id) | **PUT** /admin/champions-league/lucky-wheel/{id} | 


# **create_champions_league_lucky_wheel**
> AdminChampionsLeagueLuckyWheelOutput create_champions_league_lucky_wheel(champions_league_lucky_wheel_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_champions_league_lucky_wheel_output import AdminChampionsLeagueLuckyWheelOutput
from openapi_client.models.champions_league_lucky_wheel_input import ChampionsLeagueLuckyWheelInput
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
    api_instance = openapi_client.AdminChampionsLeagueLuckyWheelControllerApi(api_client)
    champions_league_lucky_wheel_input = openapi_client.ChampionsLeagueLuckyWheelInput() # ChampionsLeagueLuckyWheelInput | 

    try:
        api_response = api_instance.create_champions_league_lucky_wheel(champions_league_lucky_wheel_input)
        print("The response of AdminChampionsLeagueLuckyWheelControllerApi->create_champions_league_lucky_wheel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLuckyWheelControllerApi->create_champions_league_lucky_wheel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **champions_league_lucky_wheel_input** | [**ChampionsLeagueLuckyWheelInput**](ChampionsLeagueLuckyWheelInput.md)|  | 

### Return type

[**AdminChampionsLeagueLuckyWheelOutput**](AdminChampionsLeagueLuckyWheelOutput.md)

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

# **delete_champions_league_lucky_wheel_output**
> delete_champions_league_lucky_wheel_output(id)

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
    api_instance = openapi_client.AdminChampionsLeagueLuckyWheelControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_champions_league_lucky_wheel_output(id)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLuckyWheelControllerApi->delete_champions_league_lucky_wheel_output: %s\n" % e)
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

# **find_champions_league_lucky_wheel_output_by_id**
> AdminChampionsLeagueLuckyWheelOutput find_champions_league_lucky_wheel_output_by_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_champions_league_lucky_wheel_output import AdminChampionsLeagueLuckyWheelOutput
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
    api_instance = openapi_client.AdminChampionsLeagueLuckyWheelControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_champions_league_lucky_wheel_output_by_id(id)
        print("The response of AdminChampionsLeagueLuckyWheelControllerApi->find_champions_league_lucky_wheel_output_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLuckyWheelControllerApi->find_champions_league_lucky_wheel_output_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**AdminChampionsLeagueLuckyWheelOutput**](AdminChampionsLeagueLuckyWheelOutput.md)

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

# **load_all25**
> List[AdminChampionsLeagueLuckyWheelOutput] load_all25()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_champions_league_lucky_wheel_output import AdminChampionsLeagueLuckyWheelOutput
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
    api_instance = openapi_client.AdminChampionsLeagueLuckyWheelControllerApi(api_client)

    try:
        api_response = api_instance.load_all25()
        print("The response of AdminChampionsLeagueLuckyWheelControllerApi->load_all25:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLuckyWheelControllerApi->load_all25: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[AdminChampionsLeagueLuckyWheelOutput]**](AdminChampionsLeagueLuckyWheelOutput.md)

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

# **update_champions_league_lucky_wheel_output_by_id**
> AdminChampionsLeagueLuckyWheelOutput update_champions_league_lucky_wheel_output_by_id(id, champions_league_lucky_wheel_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_champions_league_lucky_wheel_output import AdminChampionsLeagueLuckyWheelOutput
from openapi_client.models.champions_league_lucky_wheel_input import ChampionsLeagueLuckyWheelInput
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
    api_instance = openapi_client.AdminChampionsLeagueLuckyWheelControllerApi(api_client)
    id = 56 # int | 
    champions_league_lucky_wheel_input = openapi_client.ChampionsLeagueLuckyWheelInput() # ChampionsLeagueLuckyWheelInput | 

    try:
        api_response = api_instance.update_champions_league_lucky_wheel_output_by_id(id, champions_league_lucky_wheel_input)
        print("The response of AdminChampionsLeagueLuckyWheelControllerApi->update_champions_league_lucky_wheel_output_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLuckyWheelControllerApi->update_champions_league_lucky_wheel_output_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **champions_league_lucky_wheel_input** | [**ChampionsLeagueLuckyWheelInput**](ChampionsLeagueLuckyWheelInput.md)|  | 

### Return type

[**AdminChampionsLeagueLuckyWheelOutput**](AdminChampionsLeagueLuckyWheelOutput.md)

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

