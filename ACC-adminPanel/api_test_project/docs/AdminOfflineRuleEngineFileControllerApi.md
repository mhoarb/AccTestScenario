# openapi_client.AdminOfflineRuleEngineFileControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download_file**](AdminOfflineRuleEngineFileControllerApi.md#download_file) | **GET** /admin/rule/offline/files/download/{id} | 
[**find_all1**](AdminOfflineRuleEngineFileControllerApi.md#find_all1) | **GET** /admin/rule/offline/files | 
[**find_all2**](AdminOfflineRuleEngineFileControllerApi.md#find_all2) | **GET** /admin/rule/offline/files/{id} | 
[**generate_excel**](AdminOfflineRuleEngineFileControllerApi.md#generate_excel) | **GET** /admin/rule/offline/files/sample | 
[**upload_file**](AdminOfflineRuleEngineFileControllerApi.md#upload_file) | **POST** /admin/rule/offline/files/upload | 


# **download_file**
> bytearray download_file(id)

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
    api_instance = openapi_client.AdminOfflineRuleEngineFileControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.download_file(id)
        print("The response of AdminOfflineRuleEngineFileControllerApi->download_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOfflineRuleEngineFileControllerApi->download_file: %s\n" % e)
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
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_all1**
> List[FileUploadListResponseDTO] find_all1(pageable)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.file_upload_list_response_dto import FileUploadListResponseDTO
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
    api_instance = openapi_client.AdminOfflineRuleEngineFileControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 

    try:
        api_response = api_instance.find_all1(pageable)
        print("The response of AdminOfflineRuleEngineFileControllerApi->find_all1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOfflineRuleEngineFileControllerApi->find_all1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 

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

# **find_all2**
> List[FileUploadListResponseDTO] find_all2(id)

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
    api_instance = openapi_client.AdminOfflineRuleEngineFileControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_all2(id)
        print("The response of AdminOfflineRuleEngineFileControllerApi->find_all2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOfflineRuleEngineFileControllerApi->find_all2: %s\n" % e)
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

# **generate_excel**
> List[bytearray] generate_excel()

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
    api_instance = openapi_client.AdminOfflineRuleEngineFileControllerApi(api_client)

    try:
        api_response = api_instance.generate_excel()
        print("The response of AdminOfflineRuleEngineFileControllerApi->generate_excel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOfflineRuleEngineFileControllerApi->generate_excel: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[bytearray]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_file**
> GroupFileUploadResponseDTO upload_file(file_name, request_id, create_file_request=create_file_request)

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
    api_instance = openapi_client.AdminOfflineRuleEngineFileControllerApi(api_client)
    file_name = 'file_name_example' # str | 
    request_id = 56 # int | 
    create_file_request = openapi_client.CreateFileRequest() # CreateFileRequest |  (optional)

    try:
        api_response = api_instance.upload_file(file_name, request_id, create_file_request=create_file_request)
        print("The response of AdminOfflineRuleEngineFileControllerApi->upload_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOfflineRuleEngineFileControllerApi->upload_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_name** | **str**|  | 
 **request_id** | **int**|  | 
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

