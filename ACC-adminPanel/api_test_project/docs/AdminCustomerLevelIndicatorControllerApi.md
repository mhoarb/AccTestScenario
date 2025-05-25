# openapi_client.AdminCustomerLevelIndicatorControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create2**](AdminCustomerLevelIndicatorControllerApi.md#create2) | **POST** /admin/customer-levels-Indicator | 
[**delete_customer_level_indicator_by_id**](AdminCustomerLevelIndicatorControllerApi.md#delete_customer_level_indicator_by_id) | **DELETE** /admin/customer-levels-Indicator/{id} | 
[**find_all5**](AdminCustomerLevelIndicatorControllerApi.md#find_all5) | **GET** /admin/customer-levels-Indicator/fetchAll | 
[**find_all_type**](AdminCustomerLevelIndicatorControllerApi.md#find_all_type) | **GET** /admin/customer-levels-Indicator/type/fetchAll | 
[**find_by_id3**](AdminCustomerLevelIndicatorControllerApi.md#find_by_id3) | **GET** /admin/customer-levels-Indicator/{id} | 
[**update2**](AdminCustomerLevelIndicatorControllerApi.md#update2) | **PUT** /admin/customer-levels-Indicator/{id} | 


# **create2**
> CustomerLevelIndicatorResponseDTO create2(customer_level_indicator_request_dto)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.customer_level_indicator_request_dto import CustomerLevelIndicatorRequestDTO
from openapi_client.models.customer_level_indicator_response_dto import CustomerLevelIndicatorResponseDTO
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
    api_instance = openapi_client.AdminCustomerLevelIndicatorControllerApi(api_client)
    customer_level_indicator_request_dto = openapi_client.CustomerLevelIndicatorRequestDTO() # CustomerLevelIndicatorRequestDTO | 

    try:
        api_response = api_instance.create2(customer_level_indicator_request_dto)
        print("The response of AdminCustomerLevelIndicatorControllerApi->create2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerLevelIndicatorControllerApi->create2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_level_indicator_request_dto** | [**CustomerLevelIndicatorRequestDTO**](CustomerLevelIndicatorRequestDTO.md)|  | 

### Return type

[**CustomerLevelIndicatorResponseDTO**](CustomerLevelIndicatorResponseDTO.md)

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

# **delete_customer_level_indicator_by_id**
> delete_customer_level_indicator_by_id(id)

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
    api_instance = openapi_client.AdminCustomerLevelIndicatorControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_customer_level_indicator_by_id(id)
    except Exception as e:
        print("Exception when calling AdminCustomerLevelIndicatorControllerApi->delete_customer_level_indicator_by_id: %s\n" % e)
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

# **find_all5**
> List[CustomerLevelIndicatorResponseDTO] find_all5(pageable, customer_level_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.customer_level_indicator_response_dto import CustomerLevelIndicatorResponseDTO
from openapi_client.models.pageable import Pageable
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
    api_instance = openapi_client.AdminCustomerLevelIndicatorControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    customer_level_id = 56 # int | 

    try:
        api_response = api_instance.find_all5(pageable, customer_level_id)
        print("The response of AdminCustomerLevelIndicatorControllerApi->find_all5:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerLevelIndicatorControllerApi->find_all5: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **customer_level_id** | **int**|  | 

### Return type

[**List[CustomerLevelIndicatorResponseDTO]**](CustomerLevelIndicatorResponseDTO.md)

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

# **find_all_type**
> List[CustomerLevelIndicatorTypeResponseDTO] find_all_type()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.customer_level_indicator_type_response_dto import CustomerLevelIndicatorTypeResponseDTO
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
    api_instance = openapi_client.AdminCustomerLevelIndicatorControllerApi(api_client)

    try:
        api_response = api_instance.find_all_type()
        print("The response of AdminCustomerLevelIndicatorControllerApi->find_all_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerLevelIndicatorControllerApi->find_all_type: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[CustomerLevelIndicatorTypeResponseDTO]**](CustomerLevelIndicatorTypeResponseDTO.md)

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

# **find_by_id3**
> CustomerLevelIndicatorResponseDTO find_by_id3(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.customer_level_indicator_response_dto import CustomerLevelIndicatorResponseDTO
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
    api_instance = openapi_client.AdminCustomerLevelIndicatorControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_by_id3(id)
        print("The response of AdminCustomerLevelIndicatorControllerApi->find_by_id3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerLevelIndicatorControllerApi->find_by_id3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**CustomerLevelIndicatorResponseDTO**](CustomerLevelIndicatorResponseDTO.md)

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

# **update2**
> CustomerLevelIndicatorResponseDTO update2(id, customer_level_indicator_request_dto)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.customer_level_indicator_request_dto import CustomerLevelIndicatorRequestDTO
from openapi_client.models.customer_level_indicator_response_dto import CustomerLevelIndicatorResponseDTO
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
    api_instance = openapi_client.AdminCustomerLevelIndicatorControllerApi(api_client)
    id = 56 # int | 
    customer_level_indicator_request_dto = openapi_client.CustomerLevelIndicatorRequestDTO() # CustomerLevelIndicatorRequestDTO | 

    try:
        api_response = api_instance.update2(id, customer_level_indicator_request_dto)
        print("The response of AdminCustomerLevelIndicatorControllerApi->update2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerLevelIndicatorControllerApi->update2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **customer_level_indicator_request_dto** | [**CustomerLevelIndicatorRequestDTO**](CustomerLevelIndicatorRequestDTO.md)|  | 

### Return type

[**CustomerLevelIndicatorResponseDTO**](CustomerLevelIndicatorResponseDTO.md)

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

