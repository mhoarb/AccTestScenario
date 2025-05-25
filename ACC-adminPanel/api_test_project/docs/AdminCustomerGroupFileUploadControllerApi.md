# openapi_client.AdminCustomerGroupFileUploadControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download_file2**](AdminCustomerGroupFileUploadControllerApi.md#download_file2) | **GET** /admin/customer-groups/files/download/{id} | 
[**find_all7**](AdminCustomerGroupFileUploadControllerApi.md#find_all7) | **GET** /admin/customer-groups/files/{id} | 
[**generate_excel2**](AdminCustomerGroupFileUploadControllerApi.md#generate_excel2) | **GET** /admin/customer-groups/files | 
[**upload_file2**](AdminCustomerGroupFileUploadControllerApi.md#upload_file2) | **POST** /admin/customer-groups/files/upload | 


# **download_file2**
> bytearray download_file2(id)

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
    api_instance = openapi_client.AdminCustomerGroupFileUploadControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.download_file2(id)
        print("The response of AdminCustomerGroupFileUploadControllerApi->download_file2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerGroupFileUploadControllerApi->download_file2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

**bytearray**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_all7**
> List[FileUploadListResponseDTO] find_all7(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.file_upload_list_response_dto import FileUploadListResponseDTO
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
    api_instance = openapi_client.AdminCustomerGroupFileUploadControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_all7(id)
        print("The response of AdminCustomerGroupFileUploadControllerApi->find_all7:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerGroupFileUploadControllerApi->find_all7: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**List[FileUploadListResponseDTO]**](FileUploadListResponseDTO.md)

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

# **generate_excel2**
> List[bytearray] generate_excel2()

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
    api_instance = openapi_client.AdminCustomerGroupFileUploadControllerApi(api_client)

    try:
        api_response = api_instance.generate_excel2()
        print("The response of AdminCustomerGroupFileUploadControllerApi->generate_excel2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerGroupFileUploadControllerApi->generate_excel2: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[bytearray]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_file2**
> GroupFileUploadResponseDTO upload_file2(file_name, group_id, create_file_request=create_file_request)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.create_file_request import CreateFileRequest
from openapi_client.models.group_file_upload_response_dto import GroupFileUploadResponseDTO
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
    api_instance = openapi_client.AdminCustomerGroupFileUploadControllerApi(api_client)
    file_name = 'file_name_example' # str | 
    group_id = 56 # int | 
    create_file_request = openapi_client.CreateFileRequest() # CreateFileRequest |  (optional)

    try:
        api_response = api_instance.upload_file2(file_name, group_id, create_file_request=create_file_request)
        print("The response of AdminCustomerGroupFileUploadControllerApi->upload_file2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminCustomerGroupFileUploadControllerApi->upload_file2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_name** | **str**|  | 
 **group_id** | **int**|  | 
 **create_file_request** | [**CreateFileRequest**](CreateFileRequest.md)|  | [optional] 

### Return type

[**GroupFileUploadResponseDTO**](GroupFileUploadResponseDTO.md)

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

