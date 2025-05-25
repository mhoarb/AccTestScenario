# openapi_client.MemberCharityControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**donate_score**](MemberCharityControllerApi.md#donate_score) | **POST** /member/charity/{id} | 
[**find_charity_by_id**](MemberCharityControllerApi.md#find_charity_by_id) | **GET** /member/charity/{id} | 


# **donate_score**
> CharityDonateScoreOutput donate_score(id, score_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.charity_donate_score_output import CharityDonateScoreOutput
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
    api_instance = openapi_client.MemberCharityControllerApi(api_client)
    id = 56 # int | 
    score_input = openapi_client.ScoreInput() # ScoreInput | 

    try:
        api_response = api_instance.donate_score(id, score_input)
        print("The response of MemberCharityControllerApi->donate_score:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberCharityControllerApi->donate_score: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **score_input** | [**ScoreInput**](ScoreInput.md)|  | 

### Return type

[**CharityDonateScoreOutput**](CharityDonateScoreOutput.md)

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

# **find_charity_by_id**
> CharityOutput find_charity_by_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.charity_output import CharityOutput
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
    api_instance = openapi_client.MemberCharityControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_charity_by_id(id)
        print("The response of MemberCharityControllerApi->find_charity_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberCharityControllerApi->find_charity_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**CharityOutput**](CharityOutput.md)

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

