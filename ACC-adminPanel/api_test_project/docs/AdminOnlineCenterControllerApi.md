# openapi_client.AdminOnlineCenterControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_online_center**](AdminOnlineCenterControllerApi.md#create_online_center) | **POST** /admin/online-center/{categoryId} | 
[**delete_online_center_by_id**](AdminOnlineCenterControllerApi.md#delete_online_center_by_id) | **DELETE** /admin/online-center/{id} | 
[**find_all_online_centers_by_display_order**](AdminOnlineCenterControllerApi.md#find_all_online_centers_by_display_order) | **GET** /admin/online-center | 
[**find_number_of_remaining_purchase_codes**](AdminOnlineCenterControllerApi.md#find_number_of_remaining_purchase_codes) | **GET** /admin/online-center/{id}/purchase-codes | 
[**find_online_center_by_id1**](AdminOnlineCenterControllerApi.md#find_online_center_by_id1) | **GET** /admin/online-center/{id} | 
[**find_online_center_by_user_level_and_title**](AdminOnlineCenterControllerApi.md#find_online_center_by_user_level_and_title) | **GET** /admin/online-center/search | 
[**update_online_center_by_id**](AdminOnlineCenterControllerApi.md#update_online_center_by_id) | **PUT** /admin/online-center/{id} | 


# **create_online_center**
> AdminOnlineCenterOutput2 create_online_center(category_id, online_center_input)

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
    api_instance = openapi_client.AdminOnlineCenterControllerApi(api_client)
    category_id = 56 # int | 
    online_center_input = openapi_client.OnlineCenterInput() # OnlineCenterInput | 

    try:
        api_response = api_instance.create_online_center(category_id, online_center_input)
        print("The response of AdminOnlineCenterControllerApi->create_online_center:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOnlineCenterControllerApi->create_online_center: %s\n" % e)
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

# **delete_online_center_by_id**
> delete_online_center_by_id(id)

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
    api_instance = openapi_client.AdminOnlineCenterControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_online_center_by_id(id)
    except Exception as e:
        print("Exception when calling AdminOnlineCenterControllerApi->delete_online_center_by_id: %s\n" % e)
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

# **find_all_online_centers_by_display_order**
> PageAdminOnlineCenterOutput find_all_online_centers_by_display_order(pageable)

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
    api_instance = openapi_client.AdminOnlineCenterControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 

    try:
        api_response = api_instance.find_all_online_centers_by_display_order(pageable)
        print("The response of AdminOnlineCenterControllerApi->find_all_online_centers_by_display_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOnlineCenterControllerApi->find_all_online_centers_by_display_order: %s\n" % e)
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

# **find_number_of_remaining_purchase_codes**
> int find_number_of_remaining_purchase_codes(id)

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
    api_instance = openapi_client.AdminOnlineCenterControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_number_of_remaining_purchase_codes(id)
        print("The response of AdminOnlineCenterControllerApi->find_number_of_remaining_purchase_codes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOnlineCenterControllerApi->find_number_of_remaining_purchase_codes: %s\n" % e)
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

# **find_online_center_by_id1**
> AdminOnlineCenterOutput2 find_online_center_by_id1(id)

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
    api_instance = openapi_client.AdminOnlineCenterControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_online_center_by_id1(id)
        print("The response of AdminOnlineCenterControllerApi->find_online_center_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOnlineCenterControllerApi->find_online_center_by_id1: %s\n" % e)
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

# **find_online_center_by_user_level_and_title**
> PageAdminOnlineCenterOutput find_online_center_by_user_level_and_title(pageable, level=level, title=title, purchase_codes_count=purchase_codes_count, expire_date=expire_date)

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
    api_instance = openapi_client.AdminOnlineCenterControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    level = 'level_example' # str |  (optional)
    title = 'title_example' # str |  (optional)
    purchase_codes_count = 56 # int |  (optional)
    expire_date = '2013-10-20T19:20:30+01:00' # datetime |  (optional)

    try:
        api_response = api_instance.find_online_center_by_user_level_and_title(pageable, level=level, title=title, purchase_codes_count=purchase_codes_count, expire_date=expire_date)
        print("The response of AdminOnlineCenterControllerApi->find_online_center_by_user_level_and_title:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOnlineCenterControllerApi->find_online_center_by_user_level_and_title: %s\n" % e)
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

# **update_online_center_by_id**
> AdminOnlineCenterOutput2 update_online_center_by_id(id, online_center_input)

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
    api_instance = openapi_client.AdminOnlineCenterControllerApi(api_client)
    id = 56 # int | 
    online_center_input = openapi_client.OnlineCenterInput() # OnlineCenterInput | 

    try:
        api_response = api_instance.update_online_center_by_id(id, online_center_input)
        print("The response of AdminOnlineCenterControllerApi->update_online_center_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOnlineCenterControllerApi->update_online_center_by_id: %s\n" % e)
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

