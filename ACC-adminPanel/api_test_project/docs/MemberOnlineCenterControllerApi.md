# openapi_client.MemberOnlineCenterControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_internal_vip_online_center**](MemberOnlineCenterControllerApi.md#find_internal_vip_online_center) | **GET** /member/online-center/internal-vip-category | 
[**find_online_center_by_category_id**](MemberOnlineCenterControllerApi.md#find_online_center_by_category_id) | **GET** /member/online-center/category/{categoryId} | نشان دادن آنلاین سنترها با آیدی کتگوری
[**find_online_center_by_id**](MemberOnlineCenterControllerApi.md#find_online_center_by_id) | **GET** /member/online-center/{id}/{internal} | 
[**left_comment**](MemberOnlineCenterControllerApi.md#left_comment) | **POST** /member/online-center/{id}/{internal}/comment | کامنت گذاشتن برای آنلاین سنتر مربوطه
[**purchase_ticket**](MemberOnlineCenterControllerApi.md#purchase_ticket) | **POST** /member/online-center/{id}/{internal}/purchase | خرید کد تخفیف آنلاین سنتر مربوطه


# **find_internal_vip_online_center**
> PageOnlineCenterTicketOutput find_internal_vip_online_center(pageable)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_online_center_ticket_output import PageOnlineCenterTicketOutput
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
    api_instance = openapi_client.MemberOnlineCenterControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 

    try:
        api_response = api_instance.find_internal_vip_online_center(pageable)
        print("The response of MemberOnlineCenterControllerApi->find_internal_vip_online_center:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberOnlineCenterControllerApi->find_internal_vip_online_center: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 

### Return type

[**PageOnlineCenterTicketOutput**](PageOnlineCenterTicketOutput.md)

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

# **find_online_center_by_category_id**
> PageOnlineCenterTicketOutput find_online_center_by_category_id(category_id, pageable)

نشان دادن آنلاین سنترها با آیدی کتگوری

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_online_center_ticket_output import PageOnlineCenterTicketOutput
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
    api_instance = openapi_client.MemberOnlineCenterControllerApi(api_client)
    category_id = 56 # int | 
    pageable = openapi_client.Pageable() # Pageable | 

    try:
        # نشان دادن آنلاین سنترها با آیدی کتگوری
        api_response = api_instance.find_online_center_by_category_id(category_id, pageable)
        print("The response of MemberOnlineCenterControllerApi->find_online_center_by_category_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberOnlineCenterControllerApi->find_online_center_by_category_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **int**|  | 
 **pageable** | [**Pageable**](.md)|  | 

### Return type

[**PageOnlineCenterTicketOutput**](PageOnlineCenterTicketOutput.md)

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

# **find_online_center_by_id**
> OnlineCenterOutput find_online_center_by_id(id, internal)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.online_center_output import OnlineCenterOutput
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
    api_instance = openapi_client.MemberOnlineCenterControllerApi(api_client)
    id = 56 # int | 
    internal = True # bool | 

    try:
        api_response = api_instance.find_online_center_by_id(id, internal)
        print("The response of MemberOnlineCenterControllerApi->find_online_center_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberOnlineCenterControllerApi->find_online_center_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **internal** | **bool**|  | 

### Return type

[**OnlineCenterOutput**](OnlineCenterOutput.md)

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

# **left_comment**
> left_comment(id, internal, comment_input)

کامنت گذاشتن برای آنلاین سنتر مربوطه

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.comment_input import CommentInput
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
    api_instance = openapi_client.MemberOnlineCenterControllerApi(api_client)
    id = 56 # int | 
    internal = True # bool | 
    comment_input = openapi_client.CommentInput() # CommentInput | 

    try:
        # کامنت گذاشتن برای آنلاین سنتر مربوطه
        api_instance.left_comment(id, internal, comment_input)
    except Exception as e:
        print("Exception when calling MemberOnlineCenterControllerApi->left_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **internal** | **bool**|  | 
 **comment_input** | [**CommentInput**](CommentInput.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purchase_ticket**
> OnlineCenterTicketPurchaseOutput purchase_ticket(id, internal)

خرید کد تخفیف آنلاین سنتر مربوطه

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.online_center_ticket_purchase_output import OnlineCenterTicketPurchaseOutput
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
    api_instance = openapi_client.MemberOnlineCenterControllerApi(api_client)
    id = 56 # int | 
    internal = True # bool | 

    try:
        # خرید کد تخفیف آنلاین سنتر مربوطه
        api_response = api_instance.purchase_ticket(id, internal)
        print("The response of MemberOnlineCenterControllerApi->purchase_ticket:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberOnlineCenterControllerApi->purchase_ticket: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **internal** | **bool**|  | 

### Return type

[**OnlineCenterTicketPurchaseOutput**](OnlineCenterTicketPurchaseOutput.md)

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

