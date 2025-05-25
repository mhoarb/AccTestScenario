# openapi_client.MemberDirectoryControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_directory**](MemberDirectoryControllerApi.md#create_directory) | **POST** /member/directory | 
[**find_directory_by_id**](MemberDirectoryControllerApi.md#find_directory_by_id) | **GET** /member/directory/{directoryId} | 


# **create_directory**
> DirectoryOutput create_directory(directory_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.directory_input import DirectoryInput
from openapi_client.models.directory_output import DirectoryOutput
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
    api_instance = openapi_client.MemberDirectoryControllerApi(api_client)
    directory_input = openapi_client.DirectoryInput() # DirectoryInput | 

    try:
        api_response = api_instance.create_directory(directory_input)
        print("The response of MemberDirectoryControllerApi->create_directory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberDirectoryControllerApi->create_directory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory_input** | [**DirectoryInput**](DirectoryInput.md)|  | 

### Return type

[**DirectoryOutput**](DirectoryOutput.md)

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

# **find_directory_by_id**
> DirectoryOutput find_directory_by_id(directory_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.directory_output import DirectoryOutput
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
    api_instance = openapi_client.MemberDirectoryControllerApi(api_client)
    directory_id = 56 # int | 

    try:
        api_response = api_instance.find_directory_by_id(directory_id)
        print("The response of MemberDirectoryControllerApi->find_directory_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberDirectoryControllerApi->find_directory_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory_id** | **int**|  | 

### Return type

[**DirectoryOutput**](DirectoryOutput.md)

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

