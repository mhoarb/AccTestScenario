# openapi_client.AdminCharityControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_charity**](AdminCharityControllerApi.md#create_charity) | **POST** /admin/charity | 
[**delete_charity_by_id**](AdminCharityControllerApi.md#delete_charity_by_id) | **DELETE** /admin/charity/{id} | 
[**find_all_charities_by_display_order**](AdminCharityControllerApi.md#find_all_charities_by_display_order) | **GET** /admin/charity | 
[**find_all_charities_by_user_level_and_title**](AdminCharityControllerApi.md#find_all_charities_by_user_level_and_title) | **GET** /admin/charity/search | 
[**find_charity_by_id1**](AdminCharityControllerApi.md#find_charity_by_id1) | **GET** /admin/charity/{id} | 
[**update_charity_by_id**](AdminCharityControllerApi.md#update_charity_by_id) | **PUT** /admin/charity/{id} | 


# **create_charity**
> CharityOutput create_charity(charity_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.charity_input import CharityInput
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
    api_instance = openapi_client.AdminCharityControllerApi(api_client)
    charity_input = openapi_client.CharityInput() # CharityInput | 

    try:
        api_response = api_instance.create_charity(charity_input)
        print("The response of AdminCharityControllerApi->create_charity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCharityControllerApi->create_charity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **charity_input** | [**CharityInput**](CharityInput.md)|  | 

### Return type

[**CharityOutput**](CharityOutput.md)

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

# **delete_charity_by_id**
> delete_charity_by_id(id)

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
    api_instance = openapi_client.AdminCharityControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_charity_by_id(id)
    except Exception as e:
        print("Exception when calling AdminCharityControllerApi->delete_charity_by_id: %s\n" % e)
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

# **find_all_charities_by_display_order**
> List[CharityOutput] find_all_charities_by_display_order()

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
    api_instance = openapi_client.AdminCharityControllerApi(api_client)

    try:
        api_response = api_instance.find_all_charities_by_display_order()
        print("The response of AdminCharityControllerApi->find_all_charities_by_display_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCharityControllerApi->find_all_charities_by_display_order: %s\n" % e)
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

# **find_all_charities_by_user_level_and_title**
> List[CharityOutput] find_all_charities_by_user_level_and_title(level=level, title=title)

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
    api_instance = openapi_client.AdminCharityControllerApi(api_client)
    level = 'level_example' # str |  (optional)
    title = 'title_example' # str |  (optional)

    try:
        api_response = api_instance.find_all_charities_by_user_level_and_title(level=level, title=title)
        print("The response of AdminCharityControllerApi->find_all_charities_by_user_level_and_title:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCharityControllerApi->find_all_charities_by_user_level_and_title: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **level** | **str**|  | [optional] 
 **title** | **str**|  | [optional] 

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

# **find_charity_by_id1**
> CharityOutput find_charity_by_id1(id)

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
    api_instance = openapi_client.AdminCharityControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_charity_by_id1(id)
        print("The response of AdminCharityControllerApi->find_charity_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCharityControllerApi->find_charity_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**CharityOutput**](CharityOutput.md)

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

# **update_charity_by_id**
> CharityOutput update_charity_by_id(id, charity_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.charity_input import CharityInput
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
    api_instance = openapi_client.AdminCharityControllerApi(api_client)
    id = 56 # int | 
    charity_input = openapi_client.CharityInput() # CharityInput | 

    try:
        api_response = api_instance.update_charity_by_id(id, charity_input)
        print("The response of AdminCharityControllerApi->update_charity_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCharityControllerApi->update_charity_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **charity_input** | [**CharityInput**](CharityInput.md)|  | 

### Return type

[**CharityOutput**](CharityOutput.md)

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

