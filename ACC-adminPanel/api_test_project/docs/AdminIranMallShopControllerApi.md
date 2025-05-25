# openapi_client.AdminIranMallShopControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_iran_mall_shop**](AdminIranMallShopControllerApi.md#create_iran_mall_shop) | **POST** /admin/iran-mall-shop/{categoryId} | 
[**delete_iran_mall_shop_by_id**](AdminIranMallShopControllerApi.md#delete_iran_mall_shop_by_id) | **DELETE** /admin/iran-mall-shop/{id} | 
[**find_all_iran_mall_shop_by_display_order**](AdminIranMallShopControllerApi.md#find_all_iran_mall_shop_by_display_order) | **GET** /admin/iran-mall-shop | 
[**find_iran_mall_shop_by_id1**](AdminIranMallShopControllerApi.md#find_iran_mall_shop_by_id1) | **GET** /admin/iran-mall-shop/{id} | 
[**update_iran_mall_shop_by_id**](AdminIranMallShopControllerApi.md#update_iran_mall_shop_by_id) | **PUT** /admin/iran-mall-shop/{id} | 


# **create_iran_mall_shop**
> IranMallShopOutput create_iran_mall_shop(category_id, iran_mall_shop_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_shop_input import IranMallShopInput
from openapi_client.models.iran_mall_shop_output import IranMallShopOutput
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
    api_instance = openapi_client.AdminIranMallShopControllerApi(api_client)
    category_id = 56 # int | 
    iran_mall_shop_input = openapi_client.IranMallShopInput() # IranMallShopInput | 

    try:
        api_response = api_instance.create_iran_mall_shop(category_id, iran_mall_shop_input)
        print("The response of AdminIranMallShopControllerApi->create_iran_mall_shop:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallShopControllerApi->create_iran_mall_shop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **int**|  | 
 **iran_mall_shop_input** | [**IranMallShopInput**](IranMallShopInput.md)|  | 

### Return type

[**IranMallShopOutput**](IranMallShopOutput.md)

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

# **delete_iran_mall_shop_by_id**
> delete_iran_mall_shop_by_id(id)

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
    api_instance = openapi_client.AdminIranMallShopControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_iran_mall_shop_by_id(id)
    except Exception as e:
        print("Exception when calling AdminIranMallShopControllerApi->delete_iran_mall_shop_by_id: %s\n" % e)
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

# **find_all_iran_mall_shop_by_display_order**
> List[IranMallShopOutput] find_all_iran_mall_shop_by_display_order()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_shop_output import IranMallShopOutput
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
    api_instance = openapi_client.AdminIranMallShopControllerApi(api_client)

    try:
        api_response = api_instance.find_all_iran_mall_shop_by_display_order()
        print("The response of AdminIranMallShopControllerApi->find_all_iran_mall_shop_by_display_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallShopControllerApi->find_all_iran_mall_shop_by_display_order: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[IranMallShopOutput]**](IranMallShopOutput.md)

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

# **find_iran_mall_shop_by_id1**
> IranMallShopOutput find_iran_mall_shop_by_id1(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_shop_output import IranMallShopOutput
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
    api_instance = openapi_client.AdminIranMallShopControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_iran_mall_shop_by_id1(id)
        print("The response of AdminIranMallShopControllerApi->find_iran_mall_shop_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallShopControllerApi->find_iran_mall_shop_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**IranMallShopOutput**](IranMallShopOutput.md)

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

# **update_iran_mall_shop_by_id**
> IranMallShopOutput update_iran_mall_shop_by_id(id, iran_mall_shop_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_shop_input import IranMallShopInput
from openapi_client.models.iran_mall_shop_output import IranMallShopOutput
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
    api_instance = openapi_client.AdminIranMallShopControllerApi(api_client)
    id = 56 # int | 
    iran_mall_shop_input = openapi_client.IranMallShopInput() # IranMallShopInput | 

    try:
        api_response = api_instance.update_iran_mall_shop_by_id(id, iran_mall_shop_input)
        print("The response of AdminIranMallShopControllerApi->update_iran_mall_shop_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallShopControllerApi->update_iran_mall_shop_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **iran_mall_shop_input** | [**IranMallShopInput**](IranMallShopInput.md)|  | 

### Return type

[**IranMallShopOutput**](IranMallShopOutput.md)

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

