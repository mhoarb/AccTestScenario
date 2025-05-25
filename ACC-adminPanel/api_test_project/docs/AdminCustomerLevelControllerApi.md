# openapi_client.AdminCustomerLevelControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create1**](AdminCustomerLevelControllerApi.md#create1) | **POST** /admin/customer-levels | 
[**delete_customer_level_by_id**](AdminCustomerLevelControllerApi.md#delete_customer_level_by_id) | **DELETE** /admin/customer-levels/{id} | 
[**find_all4**](AdminCustomerLevelControllerApi.md#find_all4) | **GET** /admin/customer-levels | 
[**find_by_id2**](AdminCustomerLevelControllerApi.md#find_by_id2) | **GET** /admin/customer-levels/{id} | 
[**find_by_user_id**](AdminCustomerLevelControllerApi.md#find_by_user_id) | **GET** /admin/customer-levels/user/{id} | 
[**find_history_by_customer_id**](AdminCustomerLevelControllerApi.md#find_history_by_customer_id) | **GET** /admin/customer-levels/user-history | 
[**update1**](AdminCustomerLevelControllerApi.md#update1) | **PUT** /admin/customer-levels/{id} | 


# **create1**
> CustomerLevelResponseDTO create1(customer_level_request_dto)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.customer_level_request_dto import CustomerLevelRequestDTO
from openapi_client.models.customer_level_response_dto import CustomerLevelResponseDTO
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
    api_instance = openapi_client.AdminCustomerLevelControllerApi(api_client)
    customer_level_request_dto = openapi_client.CustomerLevelRequestDTO() # CustomerLevelRequestDTO | 

    try:
        api_response = api_instance.create1(customer_level_request_dto)
        print("The response of AdminCustomerLevelControllerApi->create1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerLevelControllerApi->create1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_level_request_dto** | [**CustomerLevelRequestDTO**](CustomerLevelRequestDTO.md)|  | 

### Return type

[**CustomerLevelResponseDTO**](CustomerLevelResponseDTO.md)

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

# **delete_customer_level_by_id**
> delete_customer_level_by_id(id)

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
    api_instance = openapi_client.AdminCustomerLevelControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_customer_level_by_id(id)
    except Exception as e:
        print("Exception when calling AdminCustomerLevelControllerApi->delete_customer_level_by_id: %s\n" % e)
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

# **find_all4**
> List[CustomerLevelResponseDTO] find_all4()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.customer_level_response_dto import CustomerLevelResponseDTO
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
    api_instance = openapi_client.AdminCustomerLevelControllerApi(api_client)

    try:
        api_response = api_instance.find_all4()
        print("The response of AdminCustomerLevelControllerApi->find_all4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerLevelControllerApi->find_all4: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[CustomerLevelResponseDTO]**](CustomerLevelResponseDTO.md)

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

# **find_by_id2**
> CustomerLevelResponseDTO find_by_id2(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.customer_level_response_dto import CustomerLevelResponseDTO
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
    api_instance = openapi_client.AdminCustomerLevelControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_by_id2(id)
        print("The response of AdminCustomerLevelControllerApi->find_by_id2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerLevelControllerApi->find_by_id2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**CustomerLevelResponseDTO**](CustomerLevelResponseDTO.md)

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

# **find_by_user_id**
> CustomerLevelResponseDTO find_by_user_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.customer_level_response_dto import CustomerLevelResponseDTO
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
    api_instance = openapi_client.AdminCustomerLevelControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_by_user_id(id)
        print("The response of AdminCustomerLevelControllerApi->find_by_user_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerLevelControllerApi->find_by_user_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**CustomerLevelResponseDTO**](CustomerLevelResponseDTO.md)

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

# **find_history_by_customer_id**
> List[CustomerLevelHistoryResponseDTO] find_history_by_customer_id(customer_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.customer_level_history_response_dto import CustomerLevelHistoryResponseDTO
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
    api_instance = openapi_client.AdminCustomerLevelControllerApi(api_client)
    customer_id = 'customer_id_example' # str | 

    try:
        api_response = api_instance.find_history_by_customer_id(customer_id)
        print("The response of AdminCustomerLevelControllerApi->find_history_by_customer_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerLevelControllerApi->find_history_by_customer_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 

### Return type

[**List[CustomerLevelHistoryResponseDTO]**](CustomerLevelHistoryResponseDTO.md)

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

# **update1**
> CustomerLevelResponseDTO update1(id, customer_level_request_dto)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.customer_level_request_dto import CustomerLevelRequestDTO
from openapi_client.models.customer_level_response_dto import CustomerLevelResponseDTO
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
    api_instance = openapi_client.AdminCustomerLevelControllerApi(api_client)
    id = 56 # int | 
    customer_level_request_dto = openapi_client.CustomerLevelRequestDTO() # CustomerLevelRequestDTO | 

    try:
        api_response = api_instance.update1(id, customer_level_request_dto)
        print("The response of AdminCustomerLevelControllerApi->update1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerLevelControllerApi->update1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **customer_level_request_dto** | [**CustomerLevelRequestDTO**](CustomerLevelRequestDTO.md)|  | 

### Return type

[**CustomerLevelResponseDTO**](CustomerLevelResponseDTO.md)

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

