# openapi_client.AdminOnlineCenterCategoryControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_online_center_category**](AdminOnlineCenterCategoryControllerApi.md#create_online_center_category) | **POST** /admin/online-center-category | 
[**delete_online_center_category_by_id**](AdminOnlineCenterCategoryControllerApi.md#delete_online_center_category_by_id) | **DELETE** /admin/online-center-category/{id} | 
[**find_online_center_category_by_id**](AdminOnlineCenterCategoryControllerApi.md#find_online_center_category_by_id) | **GET** /admin/online-center-category/{id} | 
[**load_all12**](AdminOnlineCenterCategoryControllerApi.md#load_all12) | **GET** /admin/online-center-category | 
[**update_online_center_category_by_id**](AdminOnlineCenterCategoryControllerApi.md#update_online_center_category_by_id) | **PUT** /admin/online-center-category/{id} | 


# **create_online_center_category**
> OnlineCenterCategoryOutput create_online_center_category(online_center_category_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.online_center_category_input import OnlineCenterCategoryInput
from openapi_client.models.online_center_category_output import OnlineCenterCategoryOutput
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
    api_instance = openapi_client.AdminOnlineCenterCategoryControllerApi(api_client)
    online_center_category_input = openapi_client.OnlineCenterCategoryInput() # OnlineCenterCategoryInput | 

    try:
        api_response = api_instance.create_online_center_category(online_center_category_input)
        print("The response of AdminOnlineCenterCategoryControllerApi->create_online_center_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOnlineCenterCategoryControllerApi->create_online_center_category: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **online_center_category_input** | [**OnlineCenterCategoryInput**](OnlineCenterCategoryInput.md)|  | 

### Return type

[**OnlineCenterCategoryOutput**](OnlineCenterCategoryOutput.md)

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

# **delete_online_center_category_by_id**
> delete_online_center_category_by_id(id)

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
    api_instance = openapi_client.AdminOnlineCenterCategoryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_online_center_category_by_id(id)
    except Exception as e:
        print("Exception when calling AdminOnlineCenterCategoryControllerApi->delete_online_center_category_by_id: %s\n" % e)
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

# **find_online_center_category_by_id**
> OnlineCenterCategoryOutput find_online_center_category_by_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.online_center_category_output import OnlineCenterCategoryOutput
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
    api_instance = openapi_client.AdminOnlineCenterCategoryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_online_center_category_by_id(id)
        print("The response of AdminOnlineCenterCategoryControllerApi->find_online_center_category_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOnlineCenterCategoryControllerApi->find_online_center_category_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**OnlineCenterCategoryOutput**](OnlineCenterCategoryOutput.md)

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

# **load_all12**
> List[OnlineCenterCategoryOutput] load_all12()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.online_center_category_output import OnlineCenterCategoryOutput
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
    api_instance = openapi_client.AdminOnlineCenterCategoryControllerApi(api_client)

    try:
        api_response = api_instance.load_all12()
        print("The response of AdminOnlineCenterCategoryControllerApi->load_all12:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOnlineCenterCategoryControllerApi->load_all12: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[OnlineCenterCategoryOutput]**](OnlineCenterCategoryOutput.md)

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

# **update_online_center_category_by_id**
> OnlineCenterCategoryOutput update_online_center_category_by_id(id, online_center_category_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.online_center_category_input import OnlineCenterCategoryInput
from openapi_client.models.online_center_category_output import OnlineCenterCategoryOutput
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
    api_instance = openapi_client.AdminOnlineCenterCategoryControllerApi(api_client)
    id = 56 # int | 
    online_center_category_input = openapi_client.OnlineCenterCategoryInput() # OnlineCenterCategoryInput | 

    try:
        api_response = api_instance.update_online_center_category_by_id(id, online_center_category_input)
        print("The response of AdminOnlineCenterCategoryControllerApi->update_online_center_category_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOnlineCenterCategoryControllerApi->update_online_center_category_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **online_center_category_input** | [**OnlineCenterCategoryInput**](OnlineCenterCategoryInput.md)|  | 

### Return type

[**OnlineCenterCategoryOutput**](OnlineCenterCategoryOutput.md)

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

