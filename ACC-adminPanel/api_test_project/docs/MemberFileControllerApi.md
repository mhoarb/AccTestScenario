# openapi_client.MemberFileControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_file**](MemberFileControllerApi.md#create_file) | **POST** /member/file | 
[**find_file_by_id**](MemberFileControllerApi.md#find_file_by_id) | **GET** /member/file/{fileId} | 
[**load_file_as_resource**](MemberFileControllerApi.md#load_file_as_resource) | **GET** /member/file/resource/{fileId} | 


# **create_file**
> FileOutput create_file(create_file_request, description=description, directory_id=directory_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.create_file_request import CreateFileRequest
from openapi_client.models.file_output import FileOutput
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
    api_instance = openapi_client.MemberFileControllerApi(api_client)
    create_file_request = openapi_client.CreateFileRequest() # CreateFileRequest | 
    description = 'description_example' # str |  (optional)
    directory_id = 56 # int |  (optional)

    try:
        api_response = api_instance.create_file(create_file_request, description=description, directory_id=directory_id)
        print("The response of MemberFileControllerApi->create_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberFileControllerApi->create_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_file_request** | [**CreateFileRequest**](CreateFileRequest.md)|  | 
 **description** | **str**|  | [optional] 
 **directory_id** | **int**|  | [optional] 

### Return type

[**FileOutput**](FileOutput.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_file_by_id**
> FileOutput find_file_by_id(file_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.file_output import FileOutput
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
    api_instance = openapi_client.MemberFileControllerApi(api_client)
    file_id = 56 # int | 

    try:
        api_response = api_instance.find_file_by_id(file_id)
        print("The response of MemberFileControllerApi->find_file_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberFileControllerApi->find_file_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **int**|  | 

### Return type

[**FileOutput**](FileOutput.md)

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

# **load_file_as_resource**
> bytearray load_file_as_resource(file_id)

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
    api_instance = openapi_client.MemberFileControllerApi(api_client)
    file_id = 56 # int | 

    try:
        api_response = api_instance.load_file_as_resource(file_id)
        print("The response of MemberFileControllerApi->load_file_as_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberFileControllerApi->load_file_as_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **int**|  | 

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

