# openapi_client.AdminOfflineOtherLotteryControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download_file1**](AdminOfflineOtherLotteryControllerApi.md#download_file1) | **GET** /admin/other-lottery/files/download/{id} | 
[**find_all3**](AdminOfflineOtherLotteryControllerApi.md#find_all3) | **GET** /admin/other-lottery/files/{id} | 
[**generate_excel1**](AdminOfflineOtherLotteryControllerApi.md#generate_excel1) | **GET** /admin/other-lottery/files | 
[**upload_file1**](AdminOfflineOtherLotteryControllerApi.md#upload_file1) | **POST** /admin/other-lottery/files/upload | 


# **download_file1**
> bytearray download_file1(id)

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
    api_instance = openapi_client.AdminOfflineOtherLotteryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.download_file1(id)
        print("The response of AdminOfflineOtherLotteryControllerApi->download_file1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOfflineOtherLotteryControllerApi->download_file1: %s\n" % e)
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

# **find_all3**
> List[FileUploadListResponseDTO] find_all3(id)

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
    api_instance = openapi_client.AdminOfflineOtherLotteryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_all3(id)
        print("The response of AdminOfflineOtherLotteryControllerApi->find_all3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOfflineOtherLotteryControllerApi->find_all3: %s\n" % e)
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

# **generate_excel1**
> List[bytearray] generate_excel1()

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
    api_instance = openapi_client.AdminOfflineOtherLotteryControllerApi(api_client)

    try:
        api_response = api_instance.generate_excel1()
        print("The response of AdminOfflineOtherLotteryControllerApi->generate_excel1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOfflineOtherLotteryControllerApi->generate_excel1: %s\n" % e)
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

# **upload_file1**
> GroupFileUploadResponseDTO upload_file1(file_name, lottery_id, create_file_request=create_file_request)

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
    api_instance = openapi_client.AdminOfflineOtherLotteryControllerApi(api_client)
    file_name = 'file_name_example' # str | 
    lottery_id = 56 # int | 
    create_file_request = openapi_client.CreateFileRequest() # CreateFileRequest |  (optional)

    try:
        api_response = api_instance.upload_file1(file_name, lottery_id, create_file_request=create_file_request)
        print("The response of AdminOfflineOtherLotteryControllerApi->upload_file1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOfflineOtherLotteryControllerApi->upload_file1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_name** | **str**|  | 
 **lottery_id** | **int**|  | 
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

