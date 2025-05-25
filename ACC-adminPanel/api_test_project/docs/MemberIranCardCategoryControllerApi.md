# openapi_client.MemberIranCardCategoryControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_iran_card_category_by_id**](MemberIranCardCategoryControllerApi.md#find_iran_card_category_by_id) | **GET** /member/iran-card-category/{id} | 
[**load_all5**](MemberIranCardCategoryControllerApi.md#load_all5) | **GET** /member/iran-card-category | 


# **find_iran_card_category_by_id**
> IranCardCategoryOutput find_iran_card_category_by_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_category_output import IranCardCategoryOutput
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
    api_instance = openapi_client.MemberIranCardCategoryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_iran_card_category_by_id(id)
        print("The response of MemberIranCardCategoryControllerApi->find_iran_card_category_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberIranCardCategoryControllerApi->find_iran_card_category_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**IranCardCategoryOutput**](IranCardCategoryOutput.md)

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

# **load_all5**
> List[IranCardCategoryOutput] load_all5()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_category_output import IranCardCategoryOutput
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
    api_instance = openapi_client.MemberIranCardCategoryControllerApi(api_client)

    try:
        api_response = api_instance.load_all5()
        print("The response of MemberIranCardCategoryControllerApi->load_all5:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberIranCardCategoryControllerApi->load_all5: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[IranCardCategoryOutput]**](IranCardCategoryOutput.md)

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

