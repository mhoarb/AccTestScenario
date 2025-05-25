# openapi_client.AdminIranCardFeatureControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_iran_card_feature**](AdminIranCardFeatureControllerApi.md#create_iran_card_feature) | **POST** /admin/iran-card-feature/{categoryId} | 
[**delete_iran_card_feature_by_id**](AdminIranCardFeatureControllerApi.md#delete_iran_card_feature_by_id) | **DELETE** /admin/iran-card-feature/{id} | 
[**find_iran_card_feature_by_id1**](AdminIranCardFeatureControllerApi.md#find_iran_card_feature_by_id1) | **GET** /admin/iran-card-feature/{id} | 
[**load_all20**](AdminIranCardFeatureControllerApi.md#load_all20) | **GET** /admin/iran-card-feature | 
[**update_iran_card_feature_by_id**](AdminIranCardFeatureControllerApi.md#update_iran_card_feature_by_id) | **PUT** /admin/iran-card-feature/{id} | 


# **create_iran_card_feature**
> IranCardFeatureOutput create_iran_card_feature(category_id, iran_card_feature_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_feature_input import IranCardFeatureInput
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
    api_instance = openapi_client.AdminIranCardFeatureControllerApi(api_client)
    category_id = 56 # int | 
    iran_card_feature_input = openapi_client.IranCardFeatureInput() # IranCardFeatureInput | 

    try:
        api_response = api_instance.create_iran_card_feature(category_id, iran_card_feature_input)
        print("The response of AdminIranCardFeatureControllerApi->create_iran_card_feature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranCardFeatureControllerApi->create_iran_card_feature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **int**|  | 
 **iran_card_feature_input** | [**IranCardFeatureInput**](IranCardFeatureInput.md)|  | 

### Return type

[**IranCardFeatureOutput**](IranCardFeatureOutput.md)

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

# **delete_iran_card_feature_by_id**
> delete_iran_card_feature_by_id(id)

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
    api_instance = openapi_client.AdminIranCardFeatureControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_iran_card_feature_by_id(id)
    except Exception as e:
        print("Exception when calling AdminIranCardFeatureControllerApi->delete_iran_card_feature_by_id: %s\n" % e)
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

# **find_iran_card_feature_by_id1**
> IranCardFeatureOutput find_iran_card_feature_by_id1(id)

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
    api_instance = openapi_client.AdminIranCardFeatureControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_iran_card_feature_by_id1(id)
        print("The response of AdminIranCardFeatureControllerApi->find_iran_card_feature_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranCardFeatureControllerApi->find_iran_card_feature_by_id1: %s\n" % e)
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

# **load_all20**
> List[IranCardFeatureOutput] load_all20()

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
    api_instance = openapi_client.AdminIranCardFeatureControllerApi(api_client)

    try:
        api_response = api_instance.load_all20()
        print("The response of AdminIranCardFeatureControllerApi->load_all20:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranCardFeatureControllerApi->load_all20: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[IranCardFeatureOutput]**](IranCardFeatureOutput.md)

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

# **update_iran_card_feature_by_id**
> IranCardFeatureOutput update_iran_card_feature_by_id(id, iran_card_feature_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_feature_input import IranCardFeatureInput
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
    api_instance = openapi_client.AdminIranCardFeatureControllerApi(api_client)
    id = 56 # int | 
    iran_card_feature_input = openapi_client.IranCardFeatureInput() # IranCardFeatureInput | 

    try:
        api_response = api_instance.update_iran_card_feature_by_id(id, iran_card_feature_input)
        print("The response of AdminIranCardFeatureControllerApi->update_iran_card_feature_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranCardFeatureControllerApi->update_iran_card_feature_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **iran_card_feature_input** | [**IranCardFeatureInput**](IranCardFeatureInput.md)|  | 

### Return type

[**IranCardFeatureOutput**](IranCardFeatureOutput.md)

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

