# openapi_client.MemberLotteryControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_lottery_by_id**](MemberLotteryControllerApi.md#find_lottery_by_id) | **GET** /member/lottery/{id} | 
[**get_user_score**](MemberLotteryControllerApi.md#get_user_score) | **GET** /member/lottery/score | 
[**load_all_by_type**](MemberLotteryControllerApi.md#load_all_by_type) | **GET** /member/lottery | 
[**participate_lottery**](MemberLotteryControllerApi.md#participate_lottery) | **POST** /member/lottery/{id} | 


# **find_lottery_by_id**
> LotteryOutput find_lottery_by_id(id)

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
    api_instance = openapi_client.MemberLotteryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_lottery_by_id(id)
        print("The response of MemberLotteryControllerApi->find_lottery_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberLotteryControllerApi->find_lottery_by_id: %s\n" % e)
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

# **get_user_score**
> int get_user_score()

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
    api_instance = openapi_client.MemberLotteryControllerApi(api_client)

    try:
        api_response = api_instance.get_user_score()
        print("The response of MemberLotteryControllerApi->get_user_score:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberLotteryControllerApi->get_user_score: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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

# **load_all_by_type**
> List[LotteryOutput] load_all_by_type()

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
    api_instance = openapi_client.MemberLotteryControllerApi(api_client)

    try:
        api_response = api_instance.load_all_by_type()
        print("The response of MemberLotteryControllerApi->load_all_by_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberLotteryControllerApi->load_all_by_type: %s\n" % e)
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

# **participate_lottery**
> LotteryParticipateOutput participate_lottery(id, score_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_participate_output import LotteryParticipateOutput
from openapi_client.models.score_input import ScoreInput
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
    api_instance = openapi_client.MemberLotteryControllerApi(api_client)
    id = 56 # int | 
    score_input = openapi_client.ScoreInput() # ScoreInput | 

    try:
        api_response = api_instance.participate_lottery(id, score_input)
        print("The response of MemberLotteryControllerApi->participate_lottery:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberLotteryControllerApi->participate_lottery: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **score_input** | [**ScoreInput**](ScoreInput.md)|  | 

### Return type

[**LotteryParticipateOutput**](LotteryParticipateOutput.md)

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

