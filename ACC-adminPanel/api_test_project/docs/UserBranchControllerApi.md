# openapi_client.UserBranchControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_user_branch**](UserBranchControllerApi.md#create_user_branch) | **POST** /admin/api/user-branch | 
[**get_all_user_branch**](UserBranchControllerApi.md#get_all_user_branch) | **GET** /admin/api/user-branch | 
[**get_user_branch**](UserBranchControllerApi.md#get_user_branch) | **GET** /admin/api/user-branch/{userBranchId} | 
[**get_user_branches_by_branch_id**](UserBranchControllerApi.md#get_user_branches_by_branch_id) | **GET** /admin/api/user-branch/branch/{branchId} | 
[**update_user_level**](UserBranchControllerApi.md#update_user_level) | **PUT** /admin/api/user-branch/{userBranchId}/level | 


# **create_user_branch**
> UserBranchOutput create_user_branch(user_branch_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.user_branch_input import UserBranchInput
from openapi_client.models.user_branch_output import UserBranchOutput
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
    api_instance = openapi_client.UserBranchControllerApi(api_client)
    user_branch_input = openapi_client.UserBranchInput() # UserBranchInput | 

    try:
        api_response = api_instance.create_user_branch(user_branch_input)
        print("The response of UserBranchControllerApi->create_user_branch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserBranchControllerApi->create_user_branch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_branch_input** | [**UserBranchInput**](UserBranchInput.md)|  | 

### Return type

[**UserBranchOutput**](UserBranchOutput.md)

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

# **get_all_user_branch**
> PageUserBranchOutput get_all_user_branch(pageable)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_user_branch_output import PageUserBranchOutput
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
    api_instance = openapi_client.UserBranchControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 

    try:
        api_response = api_instance.get_all_user_branch(pageable)
        print("The response of UserBranchControllerApi->get_all_user_branch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserBranchControllerApi->get_all_user_branch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 

### Return type

[**PageUserBranchOutput**](PageUserBranchOutput.md)

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

# **get_user_branch**
> UserBranchOutput get_user_branch(user_branch_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.user_branch_output import UserBranchOutput
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
    api_instance = openapi_client.UserBranchControllerApi(api_client)
    user_branch_id = 56 # int | 

    try:
        api_response = api_instance.get_user_branch(user_branch_id)
        print("The response of UserBranchControllerApi->get_user_branch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserBranchControllerApi->get_user_branch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_branch_id** | **int**|  | 

### Return type

[**UserBranchOutput**](UserBranchOutput.md)

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

# **get_user_branches_by_branch_id**
> PageUserBranchOutput get_user_branches_by_branch_id(branch_id, pageable)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_user_branch_output import PageUserBranchOutput
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
    api_instance = openapi_client.UserBranchControllerApi(api_client)
    branch_id = 56 # int | 
    pageable = openapi_client.Pageable() # Pageable | 

    try:
        api_response = api_instance.get_user_branches_by_branch_id(branch_id, pageable)
        print("The response of UserBranchControllerApi->get_user_branches_by_branch_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserBranchControllerApi->get_user_branches_by_branch_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branch_id** | **int**|  | 
 **pageable** | [**Pageable**](.md)|  | 

### Return type

[**PageUserBranchOutput**](PageUserBranchOutput.md)

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

# **update_user_level**
> UserBranchOutput update_user_level(user_branch_id, user_level)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.user_branch_output import UserBranchOutput
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
    api_instance = openapi_client.UserBranchControllerApi(api_client)
    user_branch_id = 56 # int | 
    user_level = 'user_level_example' # str | 

    try:
        api_response = api_instance.update_user_level(user_branch_id, user_level)
        print("The response of UserBranchControllerApi->update_user_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserBranchControllerApi->update_user_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_branch_id** | **int**|  | 
 **user_level** | **str**|  | 

### Return type

[**UserBranchOutput**](UserBranchOutput.md)

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

