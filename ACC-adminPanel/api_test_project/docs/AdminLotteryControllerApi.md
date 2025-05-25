# openapi_client.AdminLotteryControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_lottery1**](AdminLotteryControllerApi.md#create_lottery1) | **POST** /admin/lottery | 
[**create_online_center1**](AdminLotteryControllerApi.md#create_online_center1) | **POST** /admin/lottery/blacklist/new/{lotteryId} | 
[**delete_black_list_by_lotter_id**](AdminLotteryControllerApi.md#delete_black_list_by_lotter_id) | **POST** /admin/lottery/blacklist/del/{lotteryId} | 
[**delete_lottery_by_id1**](AdminLotteryControllerApi.md#delete_lottery_by_id1) | **DELETE** /admin/lottery/{id} | 
[**find_lottery_by_id3**](AdminLotteryControllerApi.md#find_lottery_by_id3) | **GET** /admin/lottery/{id} | 
[**find_start_lottery_by_id**](AdminLotteryControllerApi.md#find_start_lottery_by_id) | **GET** /admin/lottery/startLottery/{id} | 
[**load_all15**](AdminLotteryControllerApi.md#load_all15) | **GET** /admin/lottery/blacklist/{lotteryId} | 
[**load_all16**](AdminLotteryControllerApi.md#load_all16) | **GET** /admin/lottery/all | 
[**load_all_by_type4**](AdminLotteryControllerApi.md#load_all_by_type4) | **GET** /admin/lottery | 
[**update_lottery_by_id1**](AdminLotteryControllerApi.md#update_lottery_by_id1) | **PUT** /admin/lottery/{id} | 


# **create_lottery1**
> LotteryOutput create_lottery1(lottery_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_input import LotteryInput
from openapi_client.models.lottery_output import LotteryOutput
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
    api_instance = openapi_client.AdminLotteryControllerApi(api_client)
    lottery_input = openapi_client.LotteryInput() # LotteryInput | 

    try:
        api_response = api_instance.create_lottery1(lottery_input)
        print("The response of AdminLotteryControllerApi->create_lottery1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminLotteryControllerApi->create_lottery1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lottery_input** | [**LotteryInput**](LotteryInput.md)|  | 

### Return type

[**LotteryOutput**](LotteryOutput.md)

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

# **create_online_center1**
> List[LotteryBlackListOutput] create_online_center1(lottery_id, lottery_black_list_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_black_list_input import LotteryBlackListInput
from openapi_client.models.lottery_black_list_output import LotteryBlackListOutput
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
    api_instance = openapi_client.AdminLotteryControllerApi(api_client)
    lottery_id = 56 # int | 
    lottery_black_list_input = openapi_client.LotteryBlackListInput() # LotteryBlackListInput | 

    try:
        api_response = api_instance.create_online_center1(lottery_id, lottery_black_list_input)
        print("The response of AdminLotteryControllerApi->create_online_center1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminLotteryControllerApi->create_online_center1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lottery_id** | **int**|  | 
 **lottery_black_list_input** | [**LotteryBlackListInput**](LotteryBlackListInput.md)|  | 

### Return type

[**List[LotteryBlackListOutput]**](LotteryBlackListOutput.md)

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

# **delete_black_list_by_lotter_id**
> List[LotteryBlackListOutput] delete_black_list_by_lotter_id(lottery_id, lottery_black_list_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_black_list_input import LotteryBlackListInput
from openapi_client.models.lottery_black_list_output import LotteryBlackListOutput
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
    api_instance = openapi_client.AdminLotteryControllerApi(api_client)
    lottery_id = 56 # int | 
    lottery_black_list_input = openapi_client.LotteryBlackListInput() # LotteryBlackListInput | 

    try:
        api_response = api_instance.delete_black_list_by_lotter_id(lottery_id, lottery_black_list_input)
        print("The response of AdminLotteryControllerApi->delete_black_list_by_lotter_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminLotteryControllerApi->delete_black_list_by_lotter_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lottery_id** | **int**|  | 
 **lottery_black_list_input** | [**LotteryBlackListInput**](LotteryBlackListInput.md)|  | 

### Return type

[**List[LotteryBlackListOutput]**](LotteryBlackListOutput.md)

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

# **delete_lottery_by_id1**
> delete_lottery_by_id1(id)

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
    api_instance = openapi_client.AdminLotteryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_lottery_by_id1(id)
    except Exception as e:
        print("Exception when calling AdminLotteryControllerApi->delete_lottery_by_id1: %s\n" % e)
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

# **find_lottery_by_id3**
> LotteryOutput find_lottery_by_id3(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_output import LotteryOutput
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
    api_instance = openapi_client.AdminLotteryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_lottery_by_id3(id)
        print("The response of AdminLotteryControllerApi->find_lottery_by_id3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminLotteryControllerApi->find_lottery_by_id3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**LotteryOutput**](LotteryOutput.md)

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

# **find_start_lottery_by_id**
> LotteryStartOutput find_start_lottery_by_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_start_output import LotteryStartOutput
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
    api_instance = openapi_client.AdminLotteryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_start_lottery_by_id(id)
        print("The response of AdminLotteryControllerApi->find_start_lottery_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminLotteryControllerApi->find_start_lottery_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**LotteryStartOutput**](LotteryStartOutput.md)

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

# **load_all15**
> PageLotteryBlackListOutput load_all15(lottery_id, pageable)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_lottery_black_list_output import PageLotteryBlackListOutput
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
    api_instance = openapi_client.AdminLotteryControllerApi(api_client)
    lottery_id = 56 # int | 
    pageable = openapi_client.Pageable() # Pageable | 

    try:
        api_response = api_instance.load_all15(lottery_id, pageable)
        print("The response of AdminLotteryControllerApi->load_all15:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminLotteryControllerApi->load_all15: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lottery_id** | **int**|  | 
 **pageable** | [**Pageable**](.md)|  | 

### Return type

[**PageLotteryBlackListOutput**](PageLotteryBlackListOutput.md)

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

# **load_all16**
> List[LotteryAllOutput] load_all16()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_all_output import LotteryAllOutput
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
    api_instance = openapi_client.AdminLotteryControllerApi(api_client)

    try:
        api_response = api_instance.load_all16()
        print("The response of AdminLotteryControllerApi->load_all16:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminLotteryControllerApi->load_all16: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[LotteryAllOutput]**](LotteryAllOutput.md)

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

# **load_all_by_type4**
> List[LotteryOutput] load_all_by_type4()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_output import LotteryOutput
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
    api_instance = openapi_client.AdminLotteryControllerApi(api_client)

    try:
        api_response = api_instance.load_all_by_type4()
        print("The response of AdminLotteryControllerApi->load_all_by_type4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminLotteryControllerApi->load_all_by_type4: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[LotteryOutput]**](LotteryOutput.md)

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

# **update_lottery_by_id1**
> LotteryOutput update_lottery_by_id1(id, lottery_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_input import LotteryInput
from openapi_client.models.lottery_output import LotteryOutput
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
    api_instance = openapi_client.AdminLotteryControllerApi(api_client)
    id = 56 # int | 
    lottery_input = openapi_client.LotteryInput() # LotteryInput | 

    try:
        api_response = api_instance.update_lottery_by_id1(id, lottery_input)
        print("The response of AdminLotteryControllerApi->update_lottery_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminLotteryControllerApi->update_lottery_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **lottery_input** | [**LotteryInput**](LotteryInput.md)|  | 

### Return type

[**LotteryOutput**](LotteryOutput.md)

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

