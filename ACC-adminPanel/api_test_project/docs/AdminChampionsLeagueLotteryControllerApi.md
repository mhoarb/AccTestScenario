# openapi_client.AdminChampionsLeagueLotteryControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_lottery2**](AdminChampionsLeagueLotteryControllerApi.md#create_lottery2) | **POST** /admin/champions-league/lottery | 
[**delete_lottery_by_id2**](AdminChampionsLeagueLotteryControllerApi.md#delete_lottery_by_id2) | **DELETE** /admin/champions-league/lottery/{id} | 
[**do_champions_league_lottery1**](AdminChampionsLeagueLotteryControllerApi.md#do_champions_league_lottery1) | **POST** /admin/champions-league/lottery/do-lottery/{id} | 
[**find_lottery_by_id4**](AdminChampionsLeagueLotteryControllerApi.md#find_lottery_by_id4) | **GET** /admin/champions-league/lottery/{id} | 
[**load_all_by_type5**](AdminChampionsLeagueLotteryControllerApi.md#load_all_by_type5) | **GET** /admin/champions-league/lottery | 
[**update_lottery_by_id2**](AdminChampionsLeagueLotteryControllerApi.md#update_lottery_by_id2) | **PUT** /admin/champions-league/lottery/{id} | 


# **create_lottery2**
> LotteryOutput create_lottery2(lottery_input)

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
    api_instance = openapi_client.AdminChampionsLeagueLotteryControllerApi(api_client)
    lottery_input = openapi_client.LotteryInput() # LotteryInput | 

    try:
        api_response = api_instance.create_lottery2(lottery_input)
        print("The response of AdminChampionsLeagueLotteryControllerApi->create_lottery2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLotteryControllerApi->create_lottery2: %s\n" % e)
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

# **delete_lottery_by_id2**
> delete_lottery_by_id2(id)

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
    api_instance = openapi_client.AdminChampionsLeagueLotteryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_lottery_by_id2(id)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLotteryControllerApi->delete_lottery_by_id2: %s\n" % e)
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

# **do_champions_league_lottery1**
> List[UserLotteryChanceOutput] do_champions_league_lottery1(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.user_lottery_chance_output import UserLotteryChanceOutput
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
    api_instance = openapi_client.AdminChampionsLeagueLotteryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.do_champions_league_lottery1(id)
        print("The response of AdminChampionsLeagueLotteryControllerApi->do_champions_league_lottery1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLotteryControllerApi->do_champions_league_lottery1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**List[UserLotteryChanceOutput]**](UserLotteryChanceOutput.md)

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

# **find_lottery_by_id4**
> LotteryOutput find_lottery_by_id4(id)

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
    api_instance = openapi_client.AdminChampionsLeagueLotteryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_lottery_by_id4(id)
        print("The response of AdminChampionsLeagueLotteryControllerApi->find_lottery_by_id4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLotteryControllerApi->find_lottery_by_id4: %s\n" % e)
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

# **load_all_by_type5**
> List[LotteryOutput] load_all_by_type5()

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
    api_instance = openapi_client.AdminChampionsLeagueLotteryControllerApi(api_client)

    try:
        api_response = api_instance.load_all_by_type5()
        print("The response of AdminChampionsLeagueLotteryControllerApi->load_all_by_type5:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLotteryControllerApi->load_all_by_type5: %s\n" % e)
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

# **update_lottery_by_id2**
> LotteryOutput update_lottery_by_id2(id, lottery_input)

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
    api_instance = openapi_client.AdminChampionsLeagueLotteryControllerApi(api_client)
    id = 56 # int | 
    lottery_input = openapi_client.LotteryInput() # LotteryInput | 

    try:
        api_response = api_instance.update_lottery_by_id2(id, lottery_input)
        print("The response of AdminChampionsLeagueLotteryControllerApi->update_lottery_by_id2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueLotteryControllerApi->update_lottery_by_id2: %s\n" % e)
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

