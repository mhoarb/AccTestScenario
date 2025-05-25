# openapi_client.AdminCustomerGroupControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create3**](AdminCustomerGroupControllerApi.md#create3) | **POST** /admin/customer-groups | 
[**find_all6**](AdminCustomerGroupControllerApi.md#find_all6) | **GET** /admin/customer-groups | 
[**find_by_id4**](AdminCustomerGroupControllerApi.md#find_by_id4) | **GET** /admin/customer-groups/{id} | 
[**find_history_by_customer_id1**](AdminCustomerGroupControllerApi.md#find_history_by_customer_id1) | **GET** /admin/customer-groups/get-user | 
[**update3**](AdminCustomerGroupControllerApi.md#update3) | **PUT** /admin/customer-groups/{id} | 


# **create3**
> GroupResponseDTO create3(group_request_dto)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.group_request_dto import GroupRequestDTO
from openapi_client.models.group_response_dto import GroupResponseDTO
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
    api_instance = openapi_client.AdminCustomerGroupControllerApi(api_client)
    group_request_dto = openapi_client.GroupRequestDTO() # GroupRequestDTO | 

    try:
        api_response = api_instance.create3(group_request_dto)
        print("The response of AdminCustomerGroupControllerApi->create3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerGroupControllerApi->create3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_request_dto** | [**GroupRequestDTO**](GroupRequestDTO.md)|  | 

### Return type

[**GroupResponseDTO**](GroupResponseDTO.md)

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

# **find_all6**
> List[GroupResponseDTO] find_all6()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.group_response_dto import GroupResponseDTO
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
    api_instance = openapi_client.AdminCustomerGroupControllerApi(api_client)

    try:
        api_response = api_instance.find_all6()
        print("The response of AdminCustomerGroupControllerApi->find_all6:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerGroupControllerApi->find_all6: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[GroupResponseDTO]**](GroupResponseDTO.md)

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

# **find_by_id4**
> GroupResponseDTO find_by_id4(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.group_response_dto import GroupResponseDTO
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
    api_instance = openapi_client.AdminCustomerGroupControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_by_id4(id)
        print("The response of AdminCustomerGroupControllerApi->find_by_id4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerGroupControllerApi->find_by_id4: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**GroupResponseDTO**](GroupResponseDTO.md)

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

# **find_history_by_customer_id1**
> List[GroupResponseDTO] find_history_by_customer_id1(customer_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.group_response_dto import GroupResponseDTO
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
    api_instance = openapi_client.AdminCustomerGroupControllerApi(api_client)
    customer_id = 'customer_id_example' # str | 

    try:
        api_response = api_instance.find_history_by_customer_id1(customer_id)
        print("The response of AdminCustomerGroupControllerApi->find_history_by_customer_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerGroupControllerApi->find_history_by_customer_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 

### Return type

[**List[GroupResponseDTO]**](GroupResponseDTO.md)

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

# **update3**
> GroupResponseDTO update3(id, group_request_dto)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.group_request_dto import GroupRequestDTO
from openapi_client.models.group_response_dto import GroupResponseDTO
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
    api_instance = openapi_client.AdminCustomerGroupControllerApi(api_client)
    id = 56 # int | 
    group_request_dto = openapi_client.GroupRequestDTO() # GroupRequestDTO | 

    try:
        api_response = api_instance.update3(id, group_request_dto)
        print("The response of AdminCustomerGroupControllerApi->update3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerGroupControllerApi->update3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **group_request_dto** | [**GroupRequestDTO**](GroupRequestDTO.md)|  | 

### Return type

[**GroupResponseDTO**](GroupResponseDTO.md)

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

