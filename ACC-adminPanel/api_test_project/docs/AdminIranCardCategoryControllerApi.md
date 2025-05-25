# openapi_client.AdminIranCardCategoryControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_iran_card_category**](AdminIranCardCategoryControllerApi.md#create_iran_card_category) | **POST** /admin/iran-card-category | 
[**delete_iran_card_category_by_id**](AdminIranCardCategoryControllerApi.md#delete_iran_card_category_by_id) | **DELETE** /admin/iran-card-category/{id} | 
[**find_iran_card_category_by_id1**](AdminIranCardCategoryControllerApi.md#find_iran_card_category_by_id1) | **GET** /admin/iran-card-category/{id} | 
[**load_all21**](AdminIranCardCategoryControllerApi.md#load_all21) | **GET** /admin/iran-card-category | 
[**update_iran_card_category_by_id**](AdminIranCardCategoryControllerApi.md#update_iran_card_category_by_id) | **PUT** /admin/iran-card-category/{id} | 


# **create_iran_card_category**
> IranCardCategoryOutput create_iran_card_category(iran_card_category_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_category_input import IranCardCategoryInput
from openapi_client.models.iran_card_category_output import IranCardCategoryOutput
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
    api_instance = openapi_client.AdminIranCardCategoryControllerApi(api_client)
    iran_card_category_input = openapi_client.IranCardCategoryInput() # IranCardCategoryInput | 

    try:
        api_response = api_instance.create_iran_card_category(iran_card_category_input)
        print("The response of AdminIranCardCategoryControllerApi->create_iran_card_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranCardCategoryControllerApi->create_iran_card_category: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iran_card_category_input** | [**IranCardCategoryInput**](IranCardCategoryInput.md)|  | 

### Return type

[**IranCardCategoryOutput**](IranCardCategoryOutput.md)

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

# **delete_iran_card_category_by_id**
> delete_iran_card_category_by_id(id)

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
    api_instance = openapi_client.AdminIranCardCategoryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_iran_card_category_by_id(id)
    except Exception as e:
        print("Exception when calling AdminIranCardCategoryControllerApi->delete_iran_card_category_by_id: %s\n" % e)
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

# **find_iran_card_category_by_id1**
> IranCardCategoryOutput find_iran_card_category_by_id1(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_category_output import IranCardCategoryOutput
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
    api_instance = openapi_client.AdminIranCardCategoryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_iran_card_category_by_id1(id)
        print("The response of AdminIranCardCategoryControllerApi->find_iran_card_category_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranCardCategoryControllerApi->find_iran_card_category_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**IranCardCategoryOutput**](IranCardCategoryOutput.md)

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

# **load_all21**
> List[IranCardCategoryOutput] load_all21()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_category_output import IranCardCategoryOutput
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
    api_instance = openapi_client.AdminIranCardCategoryControllerApi(api_client)

    try:
        api_response = api_instance.load_all21()
        print("The response of AdminIranCardCategoryControllerApi->load_all21:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranCardCategoryControllerApi->load_all21: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[IranCardCategoryOutput]**](IranCardCategoryOutput.md)

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

# **update_iran_card_category_by_id**
> IranCardCategoryOutput update_iran_card_category_by_id(id, iran_card_category_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_category_input import IranCardCategoryInput
from openapi_client.models.iran_card_category_output import IranCardCategoryOutput
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
    api_instance = openapi_client.AdminIranCardCategoryControllerApi(api_client)
    id = 56 # int | 
    iran_card_category_input = openapi_client.IranCardCategoryInput() # IranCardCategoryInput | 

    try:
        api_response = api_instance.update_iran_card_category_by_id(id, iran_card_category_input)
        print("The response of AdminIranCardCategoryControllerApi->update_iran_card_category_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranCardCategoryControllerApi->update_iran_card_category_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **iran_card_category_input** | [**IranCardCategoryInput**](IranCardCategoryInput.md)|  | 

### Return type

[**IranCardCategoryOutput**](IranCardCategoryOutput.md)

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

