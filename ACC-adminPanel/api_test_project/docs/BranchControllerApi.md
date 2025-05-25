# openapi_client.BranchControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_branch**](BranchControllerApi.md#create_branch) | **POST** /admin/branches | 
[**get_branch_by_id**](BranchControllerApi.md#get_branch_by_id) | **GET** /admin/branches/{branchId} | 
[**load_all26**](BranchControllerApi.md#load_all26) | **GET** /admin/branches | 


# **create_branch**
> CreateBranchOutput create_branch(create_branch_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.create_branch_input import CreateBranchInput
from openapi_client.models.create_branch_output import CreateBranchOutput
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
    api_instance = openapi_client.BranchControllerApi(api_client)
    create_branch_input = openapi_client.CreateBranchInput() # CreateBranchInput | 

    try:
        api_response = api_instance.create_branch(create_branch_input)
        print("The response of BranchControllerApi->create_branch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BranchControllerApi->create_branch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_branch_input** | [**CreateBranchInput**](CreateBranchInput.md)|  | 

### Return type

[**CreateBranchOutput**](CreateBranchOutput.md)

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

# **get_branch_by_id**
> CreateBranchOutput get_branch_by_id(branch_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.create_branch_output import CreateBranchOutput
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
    api_instance = openapi_client.BranchControllerApi(api_client)
    branch_id = 56 # int | 

    try:
        api_response = api_instance.get_branch_by_id(branch_id)
        print("The response of BranchControllerApi->get_branch_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BranchControllerApi->get_branch_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branch_id** | **int**|  | 

### Return type

[**CreateBranchOutput**](CreateBranchOutput.md)

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

# **load_all26**
> PageCreateBranchOutput load_all26(pageable, name=name, code=code, title=title, full_address=full_address, state_id=state_id, city_id=city_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_create_branch_output import PageCreateBranchOutput
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
    api_instance = openapi_client.BranchControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    name = 'name_example' # str |  (optional)
    code = 'code_example' # str |  (optional)
    title = 'title_example' # str |  (optional)
    full_address = 'full_address_example' # str |  (optional)
    state_id = 56 # int |  (optional)
    city_id = 56 # int |  (optional)

    try:
        api_response = api_instance.load_all26(pageable, name=name, code=code, title=title, full_address=full_address, state_id=state_id, city_id=city_id)
        print("The response of BranchControllerApi->load_all26:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BranchControllerApi->load_all26: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **name** | **str**|  | [optional] 
 **code** | **str**|  | [optional] 
 **title** | **str**|  | [optional] 
 **full_address** | **str**|  | [optional] 
 **state_id** | **int**|  | [optional] 
 **city_id** | **int**|  | [optional] 

### Return type

[**PageCreateBranchOutput**](PageCreateBranchOutput.md)

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

