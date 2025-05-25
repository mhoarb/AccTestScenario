# openapi_client.AdminInternalOnlineCenterControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_online_center2**](AdminInternalOnlineCenterControllerApi.md#create_online_center2) | **POST** /admin/internal-online-center/{categoryId} | 
[**delete_online_center_by_id1**](AdminInternalOnlineCenterControllerApi.md#delete_online_center_by_id1) | **DELETE** /admin/internal-online-center/{id} | 
[**find_all_online_centers_by_display_order1**](AdminInternalOnlineCenterControllerApi.md#find_all_online_centers_by_display_order1) | **GET** /admin/internal-online-center | 
[**find_number_of_remaining_purchase_codes2**](AdminInternalOnlineCenterControllerApi.md#find_number_of_remaining_purchase_codes2) | **GET** /admin/internal-online-center/{id}/purchase-codes | 
[**find_online_center_by_id2**](AdminInternalOnlineCenterControllerApi.md#find_online_center_by_id2) | **GET** /admin/internal-online-center/{id} | 
[**find_online_center_by_user_level_and_title1**](AdminInternalOnlineCenterControllerApi.md#find_online_center_by_user_level_and_title1) | **GET** /admin/internal-online-center/search | 
[**update_online_center_by_id1**](AdminInternalOnlineCenterControllerApi.md#update_online_center_by_id1) | **PUT** /admin/internal-online-center/{id} | 


# **create_online_center2**
> AdminOnlineCenterOutput2 create_online_center2(category_id, online_center_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_online_center_output2 import AdminOnlineCenterOutput2
from openapi_client.models.online_center_input import OnlineCenterInput
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
    api_instance = openapi_client.AdminInternalOnlineCenterControllerApi(api_client)
    category_id = 56 # int | 
    online_center_input = openapi_client.OnlineCenterInput() # OnlineCenterInput | 

    try:
        api_response = api_instance.create_online_center2(category_id, online_center_input)
        print("The response of AdminInternalOnlineCenterControllerApi->create_online_center2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInternalOnlineCenterControllerApi->create_online_center2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **int**|  | 
 **online_center_input** | [**OnlineCenterInput**](OnlineCenterInput.md)|  | 

### Return type

[**AdminOnlineCenterOutput2**](AdminOnlineCenterOutput2.md)

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

# **delete_online_center_by_id1**
> delete_online_center_by_id1(id)

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
    api_instance = openapi_client.AdminInternalOnlineCenterControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_online_center_by_id1(id)
    except Exception as e:
        print("Exception when calling AdminInternalOnlineCenterControllerApi->delete_online_center_by_id1: %s\n" % e)
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

# **find_all_online_centers_by_display_order1**
> PageAdminOnlineCenterOutput find_all_online_centers_by_display_order1(pageable)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_admin_online_center_output import PageAdminOnlineCenterOutput
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
    api_instance = openapi_client.AdminInternalOnlineCenterControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 

    try:
        api_response = api_instance.find_all_online_centers_by_display_order1(pageable)
        print("The response of AdminInternalOnlineCenterControllerApi->find_all_online_centers_by_display_order1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInternalOnlineCenterControllerApi->find_all_online_centers_by_display_order1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 

### Return type

[**PageAdminOnlineCenterOutput**](PageAdminOnlineCenterOutput.md)

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

# **find_number_of_remaining_purchase_codes2**
> int find_number_of_remaining_purchase_codes2(id)

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
    api_instance = openapi_client.AdminInternalOnlineCenterControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_number_of_remaining_purchase_codes2(id)
        print("The response of AdminInternalOnlineCenterControllerApi->find_number_of_remaining_purchase_codes2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInternalOnlineCenterControllerApi->find_number_of_remaining_purchase_codes2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

**int**

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

# **find_online_center_by_id2**
> AdminOnlineCenterOutput2 find_online_center_by_id2(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_online_center_output2 import AdminOnlineCenterOutput2
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
    api_instance = openapi_client.AdminInternalOnlineCenterControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_online_center_by_id2(id)
        print("The response of AdminInternalOnlineCenterControllerApi->find_online_center_by_id2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInternalOnlineCenterControllerApi->find_online_center_by_id2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**AdminOnlineCenterOutput2**](AdminOnlineCenterOutput2.md)

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

# **find_online_center_by_user_level_and_title1**
> PageAdminOnlineCenterOutput find_online_center_by_user_level_and_title1(pageable, level=level, title=title, purchase_codes_count=purchase_codes_count, expire_date=expire_date)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_admin_online_center_output import PageAdminOnlineCenterOutput
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
    api_instance = openapi_client.AdminInternalOnlineCenterControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    level = 'level_example' # str |  (optional)
    title = 'title_example' # str |  (optional)
    purchase_codes_count = 56 # int |  (optional)
    expire_date = '2013-10-20T19:20:30+01:00' # datetime |  (optional)

    try:
        api_response = api_instance.find_online_center_by_user_level_and_title1(pageable, level=level, title=title, purchase_codes_count=purchase_codes_count, expire_date=expire_date)
        print("The response of AdminInternalOnlineCenterControllerApi->find_online_center_by_user_level_and_title1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInternalOnlineCenterControllerApi->find_online_center_by_user_level_and_title1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **level** | **str**|  | [optional] 
 **title** | **str**|  | [optional] 
 **purchase_codes_count** | **int**|  | [optional] 
 **expire_date** | **datetime**|  | [optional] 

### Return type

[**PageAdminOnlineCenterOutput**](PageAdminOnlineCenterOutput.md)

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

# **update_online_center_by_id1**
> AdminOnlineCenterOutput2 update_online_center_by_id1(id, online_center_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_online_center_output2 import AdminOnlineCenterOutput2
from openapi_client.models.online_center_input import OnlineCenterInput
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
    api_instance = openapi_client.AdminInternalOnlineCenterControllerApi(api_client)
    id = 56 # int | 
    online_center_input = openapi_client.OnlineCenterInput() # OnlineCenterInput | 

    try:
        api_response = api_instance.update_online_center_by_id1(id, online_center_input)
        print("The response of AdminInternalOnlineCenterControllerApi->update_online_center_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInternalOnlineCenterControllerApi->update_online_center_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **online_center_input** | [**OnlineCenterInput**](OnlineCenterInput.md)|  | 

### Return type

[**AdminOnlineCenterOutput2**](AdminOnlineCenterOutput2.md)

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

