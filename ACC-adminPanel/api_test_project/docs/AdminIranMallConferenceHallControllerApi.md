# openapi_client.AdminIranMallConferenceHallControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_iran_mall_conference_hall**](AdminIranMallConferenceHallControllerApi.md#create_iran_mall_conference_hall) | **POST** /admin/iran-mall-conference-hall | 
[**delete_iran_mall_conference_hall**](AdminIranMallConferenceHallControllerApi.md#delete_iran_mall_conference_hall) | **DELETE** /admin/iran-mall-conference-hall/{id} | 
[**find_iran_mall_conference_hall_by_id1**](AdminIranMallConferenceHallControllerApi.md#find_iran_mall_conference_hall_by_id1) | **GET** /admin/iran-mall-conference-hall/{id} | 
[**load_all18**](AdminIranMallConferenceHallControllerApi.md#load_all18) | **GET** /admin/iran-mall-conference-hall | 
[**update_iran_mall_conference_hall**](AdminIranMallConferenceHallControllerApi.md#update_iran_mall_conference_hall) | **PUT** /admin/iran-mall-conference-hall/{id} | 


# **create_iran_mall_conference_hall**
> IranMallConferenceHallOutput create_iran_mall_conference_hall(iran_mall_conference_hall_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_conference_hall_input import IranMallConferenceHallInput
from openapi_client.models.iran_mall_conference_hall_output import IranMallConferenceHallOutput
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
    api_instance = openapi_client.AdminIranMallConferenceHallControllerApi(api_client)
    iran_mall_conference_hall_input = openapi_client.IranMallConferenceHallInput() # IranMallConferenceHallInput | 

    try:
        api_response = api_instance.create_iran_mall_conference_hall(iran_mall_conference_hall_input)
        print("The response of AdminIranMallConferenceHallControllerApi->create_iran_mall_conference_hall:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallConferenceHallControllerApi->create_iran_mall_conference_hall: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iran_mall_conference_hall_input** | [**IranMallConferenceHallInput**](IranMallConferenceHallInput.md)|  | 

### Return type

[**IranMallConferenceHallOutput**](IranMallConferenceHallOutput.md)

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

# **delete_iran_mall_conference_hall**
> delete_iran_mall_conference_hall(id)

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
    api_instance = openapi_client.AdminIranMallConferenceHallControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_iran_mall_conference_hall(id)
    except Exception as e:
        print("Exception when calling AdminIranMallConferenceHallControllerApi->delete_iran_mall_conference_hall: %s\n" % e)
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

# **find_iran_mall_conference_hall_by_id1**
> IranMallConferenceHallOutput find_iran_mall_conference_hall_by_id1(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_conference_hall_output import IranMallConferenceHallOutput
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
    api_instance = openapi_client.AdminIranMallConferenceHallControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_iran_mall_conference_hall_by_id1(id)
        print("The response of AdminIranMallConferenceHallControllerApi->find_iran_mall_conference_hall_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallConferenceHallControllerApi->find_iran_mall_conference_hall_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**IranMallConferenceHallOutput**](IranMallConferenceHallOutput.md)

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

# **load_all18**
> List[IranMallConferenceHallOutput] load_all18()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_conference_hall_output import IranMallConferenceHallOutput
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
    api_instance = openapi_client.AdminIranMallConferenceHallControllerApi(api_client)

    try:
        api_response = api_instance.load_all18()
        print("The response of AdminIranMallConferenceHallControllerApi->load_all18:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallConferenceHallControllerApi->load_all18: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[IranMallConferenceHallOutput]**](IranMallConferenceHallOutput.md)

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

# **update_iran_mall_conference_hall**
> IranMallConferenceHallOutput update_iran_mall_conference_hall(id, iran_mall_conference_hall_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_conference_hall_input import IranMallConferenceHallInput
from openapi_client.models.iran_mall_conference_hall_output import IranMallConferenceHallOutput
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
    api_instance = openapi_client.AdminIranMallConferenceHallControllerApi(api_client)
    id = 56 # int | 
    iran_mall_conference_hall_input = openapi_client.IranMallConferenceHallInput() # IranMallConferenceHallInput | 

    try:
        api_response = api_instance.update_iran_mall_conference_hall(id, iran_mall_conference_hall_input)
        print("The response of AdminIranMallConferenceHallControllerApi->update_iran_mall_conference_hall:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallConferenceHallControllerApi->update_iran_mall_conference_hall: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **iran_mall_conference_hall_input** | [**IranMallConferenceHallInput**](IranMallConferenceHallInput.md)|  | 

### Return type

[**IranMallConferenceHallOutput**](IranMallConferenceHallOutput.md)

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

