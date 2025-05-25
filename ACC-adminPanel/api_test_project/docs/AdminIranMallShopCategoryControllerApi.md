# openapi_client.AdminIranMallShopCategoryControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_iran_mall_shop_category**](AdminIranMallShopCategoryControllerApi.md#create_iran_mall_shop_category) | **POST** /admin/iran-mall-shop-category | 
[**delete_iran_mall_shop_category_by_id**](AdminIranMallShopCategoryControllerApi.md#delete_iran_mall_shop_category_by_id) | **DELETE** /admin/iran-mall-shop-category/{id} | 
[**find_iran_mall_shop_category_by_id1**](AdminIranMallShopCategoryControllerApi.md#find_iran_mall_shop_category_by_id1) | **GET** /admin/iran-mall-shop-category/{id} | 
[**load_all17**](AdminIranMallShopCategoryControllerApi.md#load_all17) | **GET** /admin/iran-mall-shop-category | 
[**update_iran_mall_shop_category_by_id**](AdminIranMallShopCategoryControllerApi.md#update_iran_mall_shop_category_by_id) | **PUT** /admin/iran-mall-shop-category/{id} | 


# **create_iran_mall_shop_category**
> IranMallShopCategoryOutput create_iran_mall_shop_category(iran_mall_shop_category_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_shop_category_input import IranMallShopCategoryInput
from openapi_client.models.iran_mall_shop_category_output import IranMallShopCategoryOutput
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
    api_instance = openapi_client.AdminIranMallShopCategoryControllerApi(api_client)
    iran_mall_shop_category_input = openapi_client.IranMallShopCategoryInput() # IranMallShopCategoryInput | 

    try:
        api_response = api_instance.create_iran_mall_shop_category(iran_mall_shop_category_input)
        print("The response of AdminIranMallShopCategoryControllerApi->create_iran_mall_shop_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallShopCategoryControllerApi->create_iran_mall_shop_category: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iran_mall_shop_category_input** | [**IranMallShopCategoryInput**](IranMallShopCategoryInput.md)|  | 

### Return type

[**IranMallShopCategoryOutput**](IranMallShopCategoryOutput.md)

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

# **delete_iran_mall_shop_category_by_id**
> delete_iran_mall_shop_category_by_id(id)

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
    api_instance = openapi_client.AdminIranMallShopCategoryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_iran_mall_shop_category_by_id(id)
    except Exception as e:
        print("Exception when calling AdminIranMallShopCategoryControllerApi->delete_iran_mall_shop_category_by_id: %s\n" % e)
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

# **find_iran_mall_shop_category_by_id1**
> IranMallShopCategoryOutput find_iran_mall_shop_category_by_id1(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_shop_category_output import IranMallShopCategoryOutput
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
    api_instance = openapi_client.AdminIranMallShopCategoryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_iran_mall_shop_category_by_id1(id)
        print("The response of AdminIranMallShopCategoryControllerApi->find_iran_mall_shop_category_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallShopCategoryControllerApi->find_iran_mall_shop_category_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**IranMallShopCategoryOutput**](IranMallShopCategoryOutput.md)

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

# **load_all17**
> List[IranMallShopCategoryOutput] load_all17()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_shop_category_output import IranMallShopCategoryOutput
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
    api_instance = openapi_client.AdminIranMallShopCategoryControllerApi(api_client)

    try:
        api_response = api_instance.load_all17()
        print("The response of AdminIranMallShopCategoryControllerApi->load_all17:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallShopCategoryControllerApi->load_all17: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[IranMallShopCategoryOutput]**](IranMallShopCategoryOutput.md)

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

# **update_iran_mall_shop_category_by_id**
> IranMallShopCategoryOutput update_iran_mall_shop_category_by_id(id, iran_mall_shop_category_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_shop_category_input import IranMallShopCategoryInput
from openapi_client.models.iran_mall_shop_category_output import IranMallShopCategoryOutput
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
    api_instance = openapi_client.AdminIranMallShopCategoryControllerApi(api_client)
    id = 56 # int | 
    iran_mall_shop_category_input = openapi_client.IranMallShopCategoryInput() # IranMallShopCategoryInput | 

    try:
        api_response = api_instance.update_iran_mall_shop_category_by_id(id, iran_mall_shop_category_input)
        print("The response of AdminIranMallShopCategoryControllerApi->update_iran_mall_shop_category_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallShopCategoryControllerApi->update_iran_mall_shop_category_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **iran_mall_shop_category_input** | [**IranMallShopCategoryInput**](IranMallShopCategoryInput.md)|  | 

### Return type

[**IranMallShopCategoryOutput**](IranMallShopCategoryOutput.md)

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

