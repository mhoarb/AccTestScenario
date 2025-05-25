# openapi_client.MemberIranCardFeatureControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_iran_card_feature_by_category_id**](MemberIranCardFeatureControllerApi.md#find_iran_card_feature_by_category_id) | **GET** /member/iran-card-feature/category/{categoryId} | 
[**find_iran_card_feature_by_id**](MemberIranCardFeatureControllerApi.md#find_iran_card_feature_by_id) | **GET** /member/iran-card-feature/{id} | 
[**left_comment2**](MemberIranCardFeatureControllerApi.md#left_comment2) | **POST** /member/iran-card-feature/{id}/comment | 


# **find_iran_card_feature_by_category_id**
> List[IranCardFeatureTicketOutput] find_iran_card_feature_by_category_id(category_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_feature_ticket_output import IranCardFeatureTicketOutput
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
    api_instance = openapi_client.MemberIranCardFeatureControllerApi(api_client)
    category_id = 56 # int | 

    try:
        api_response = api_instance.find_iran_card_feature_by_category_id(category_id)
        print("The response of MemberIranCardFeatureControllerApi->find_iran_card_feature_by_category_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberIranCardFeatureControllerApi->find_iran_card_feature_by_category_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **int**|  | 

### Return type

[**List[IranCardFeatureTicketOutput]**](IranCardFeatureTicketOutput.md)

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

# **find_iran_card_feature_by_id**
> IranCardFeatureOutput find_iran_card_feature_by_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_feature_output import IranCardFeatureOutput
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
    api_instance = openapi_client.MemberIranCardFeatureControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_iran_card_feature_by_id(id)
        print("The response of MemberIranCardFeatureControllerApi->find_iran_card_feature_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberIranCardFeatureControllerApi->find_iran_card_feature_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**IranCardFeatureOutput**](IranCardFeatureOutput.md)

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

# **left_comment2**
> left_comment2(id, comment_input)

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
    api_instance = openapi_client.MemberIranCardFeatureControllerApi(api_client)
    id = 56 # int | 
    comment_input = openapi_client.CommentInput() # CommentInput | 

    try:
        api_instance.left_comment2(id, comment_input)
    except Exception as e:
        print("Exception when calling MemberIranCardFeatureControllerApi->left_comment2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
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

