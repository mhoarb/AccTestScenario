# openapi_client.AdminIranMallCinemaControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_iran_mall_cinema**](AdminIranMallCinemaControllerApi.md#create_iran_mall_cinema) | **POST** /admin/iran-mall-cinema | 
[**delete_iran_mall_cinema_by_id**](AdminIranMallCinemaControllerApi.md#delete_iran_mall_cinema_by_id) | **DELETE** /admin/iran-mall-cinema/{id} | 
[**find_iran_mall_cinema_by_id1**](AdminIranMallCinemaControllerApi.md#find_iran_mall_cinema_by_id1) | **GET** /admin/iran-mall-cinema/{id} | 
[**find_number_of_remaining_purchase_codes1**](AdminIranMallCinemaControllerApi.md#find_number_of_remaining_purchase_codes1) | **GET** /admin/iran-mall-cinema/{id}/purchase-codes | 
[**load_all19**](AdminIranMallCinemaControllerApi.md#load_all19) | **GET** /admin/iran-mall-cinema | 
[**update_iran_mall_cinema_by_id**](AdminIranMallCinemaControllerApi.md#update_iran_mall_cinema_by_id) | **PUT** /admin/iran-mall-cinema/{id} | 


# **create_iran_mall_cinema**
> AdminIranMallCinemaOutput create_iran_mall_cinema(iran_mall_cinema_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_iran_mall_cinema_output import AdminIranMallCinemaOutput
from openapi_client.models.iran_mall_cinema_input import IranMallCinemaInput
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
    api_instance = openapi_client.AdminIranMallCinemaControllerApi(api_client)
    iran_mall_cinema_input = openapi_client.IranMallCinemaInput() # IranMallCinemaInput | 

    try:
        api_response = api_instance.create_iran_mall_cinema(iran_mall_cinema_input)
        print("The response of AdminIranMallCinemaControllerApi->create_iran_mall_cinema:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallCinemaControllerApi->create_iran_mall_cinema: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iran_mall_cinema_input** | [**IranMallCinemaInput**](IranMallCinemaInput.md)|  | 

### Return type

[**AdminIranMallCinemaOutput**](AdminIranMallCinemaOutput.md)

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

# **delete_iran_mall_cinema_by_id**
> delete_iran_mall_cinema_by_id(id)

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
    api_instance = openapi_client.AdminIranMallCinemaControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_iran_mall_cinema_by_id(id)
    except Exception as e:
        print("Exception when calling AdminIranMallCinemaControllerApi->delete_iran_mall_cinema_by_id: %s\n" % e)
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

# **find_iran_mall_cinema_by_id1**
> AdminIranMallCinemaOutput find_iran_mall_cinema_by_id1(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_iran_mall_cinema_output import AdminIranMallCinemaOutput
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
    api_instance = openapi_client.AdminIranMallCinemaControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_iran_mall_cinema_by_id1(id)
        print("The response of AdminIranMallCinemaControllerApi->find_iran_mall_cinema_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallCinemaControllerApi->find_iran_mall_cinema_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**AdminIranMallCinemaOutput**](AdminIranMallCinemaOutput.md)

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

# **find_number_of_remaining_purchase_codes1**
> int find_number_of_remaining_purchase_codes1(id)

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
    api_instance = openapi_client.AdminIranMallCinemaControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_number_of_remaining_purchase_codes1(id)
        print("The response of AdminIranMallCinemaControllerApi->find_number_of_remaining_purchase_codes1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallCinemaControllerApi->find_number_of_remaining_purchase_codes1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

**int**

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

# **load_all19**
> List[AdminIranMallCinemaOutput] load_all19()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_iran_mall_cinema_output import AdminIranMallCinemaOutput
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
    api_instance = openapi_client.AdminIranMallCinemaControllerApi(api_client)

    try:
        api_response = api_instance.load_all19()
        print("The response of AdminIranMallCinemaControllerApi->load_all19:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallCinemaControllerApi->load_all19: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[AdminIranMallCinemaOutput]**](AdminIranMallCinemaOutput.md)

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

# **update_iran_mall_cinema_by_id**
> AdminIranMallCinemaOutput update_iran_mall_cinema_by_id(id, iran_mall_cinema_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_iran_mall_cinema_output import AdminIranMallCinemaOutput
from openapi_client.models.iran_mall_cinema_input import IranMallCinemaInput
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
    api_instance = openapi_client.AdminIranMallCinemaControllerApi(api_client)
    id = 56 # int | 
    iran_mall_cinema_input = openapi_client.IranMallCinemaInput() # IranMallCinemaInput | 

    try:
        api_response = api_instance.update_iran_mall_cinema_by_id(id, iran_mall_cinema_input)
        print("The response of AdminIranMallCinemaControllerApi->update_iran_mall_cinema_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranMallCinemaControllerApi->update_iran_mall_cinema_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **iran_mall_cinema_input** | [**IranMallCinemaInput**](IranMallCinemaInput.md)|  | 

### Return type

[**AdminIranMallCinemaOutput**](AdminIranMallCinemaOutput.md)

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

