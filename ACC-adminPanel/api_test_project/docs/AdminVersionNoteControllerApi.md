# openapi_client.AdminVersionNoteControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_version_note**](AdminVersionNoteControllerApi.md#create_version_note) | **POST** /admin/version-note | 
[**delete_version_note_by_id**](AdminVersionNoteControllerApi.md#delete_version_note_by_id) | **DELETE** /admin/version-note/{id} | 
[**find_version_note_by_id**](AdminVersionNoteControllerApi.md#find_version_note_by_id) | **PUT** /admin/version-note/{id} | 
[**find_version_note_by_id1**](AdminVersionNoteControllerApi.md#find_version_note_by_id1) | **GET** /admin/version-note/{id} | 
[**load_all_by_type2**](AdminVersionNoteControllerApi.md#load_all_by_type2) | **GET** /admin/version-note | 


# **create_version_note**
> VersionNoteOutput create_version_note(version_note_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.version_note_input import VersionNoteInput
from openapi_client.models.version_note_output import VersionNoteOutput
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
    api_instance = openapi_client.AdminVersionNoteControllerApi(api_client)
    version_note_input = openapi_client.VersionNoteInput() # VersionNoteInput | 

    try:
        api_response = api_instance.create_version_note(version_note_input)
        print("The response of AdminVersionNoteControllerApi->create_version_note:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminVersionNoteControllerApi->create_version_note: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_note_input** | [**VersionNoteInput**](VersionNoteInput.md)|  | 

### Return type

[**VersionNoteOutput**](VersionNoteOutput.md)

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

# **delete_version_note_by_id**
> delete_version_note_by_id(id)

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
    api_instance = openapi_client.AdminVersionNoteControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_version_note_by_id(id)
    except Exception as e:
        print("Exception when calling AdminVersionNoteControllerApi->delete_version_note_by_id: %s\n" % e)
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

# **find_version_note_by_id**
> VersionNoteOutput find_version_note_by_id(id, version_note_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.version_note_input import VersionNoteInput
from openapi_client.models.version_note_output import VersionNoteOutput
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
    api_instance = openapi_client.AdminVersionNoteControllerApi(api_client)
    id = 56 # int | 
    version_note_input = openapi_client.VersionNoteInput() # VersionNoteInput | 

    try:
        api_response = api_instance.find_version_note_by_id(id, version_note_input)
        print("The response of AdminVersionNoteControllerApi->find_version_note_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminVersionNoteControllerApi->find_version_note_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **version_note_input** | [**VersionNoteInput**](VersionNoteInput.md)|  | 

### Return type

[**VersionNoteOutput**](VersionNoteOutput.md)

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

# **find_version_note_by_id1**
> VersionNoteOutput find_version_note_by_id1(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.version_note_output import VersionNoteOutput
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
    api_instance = openapi_client.AdminVersionNoteControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_version_note_by_id1(id)
        print("The response of AdminVersionNoteControllerApi->find_version_note_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminVersionNoteControllerApi->find_version_note_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**VersionNoteOutput**](VersionNoteOutput.md)

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

# **load_all_by_type2**
> List[VersionNoteOutput] load_all_by_type2(version_type)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.version_note_output import VersionNoteOutput
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
    api_instance = openapi_client.AdminVersionNoteControllerApi(api_client)
    version_type = 'version_type_example' # str | 

    try:
        api_response = api_instance.load_all_by_type2(version_type)
        print("The response of AdminVersionNoteControllerApi->load_all_by_type2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminVersionNoteControllerApi->load_all_by_type2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_type** | **str**|  | 

### Return type

[**List[VersionNoteOutput]**](VersionNoteOutput.md)

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

