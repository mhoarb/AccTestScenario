# openapi_client.AdminInsuranceCategoryControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_insurance_category**](AdminInsuranceCategoryControllerApi.md#create_insurance_category) | **POST** /admin/insurance-category | 
[**delete_insurance_category_by_id**](AdminInsuranceCategoryControllerApi.md#delete_insurance_category_by_id) | **DELETE** /admin/insurance-category/{id} | 
[**find_insurance_category_by_id1**](AdminInsuranceCategoryControllerApi.md#find_insurance_category_by_id1) | **GET** /admin/insurance-category/{id} | 
[**load_all23**](AdminInsuranceCategoryControllerApi.md#load_all23) | **GET** /admin/insurance-category | 
[**update_insurance_category_by_id**](AdminInsuranceCategoryControllerApi.md#update_insurance_category_by_id) | **PUT** /admin/insurance-category/{id} | 


# **create_insurance_category**
> InsuranceCategoryOutput create_insurance_category(insurance_category_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.insurance_category_input import InsuranceCategoryInput
from openapi_client.models.insurance_category_output import InsuranceCategoryOutput
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
    api_instance = openapi_client.AdminInsuranceCategoryControllerApi(api_client)
    insurance_category_input = openapi_client.InsuranceCategoryInput() # InsuranceCategoryInput | 

    try:
        api_response = api_instance.create_insurance_category(insurance_category_input)
        print("The response of AdminInsuranceCategoryControllerApi->create_insurance_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInsuranceCategoryControllerApi->create_insurance_category: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insurance_category_input** | [**InsuranceCategoryInput**](InsuranceCategoryInput.md)|  | 

### Return type

[**InsuranceCategoryOutput**](InsuranceCategoryOutput.md)

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

# **delete_insurance_category_by_id**
> delete_insurance_category_by_id(id)

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
    api_instance = openapi_client.AdminInsuranceCategoryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_insurance_category_by_id(id)
    except Exception as e:
        print("Exception when calling AdminInsuranceCategoryControllerApi->delete_insurance_category_by_id: %s\n" % e)
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

# **find_insurance_category_by_id1**
> InsuranceCategoryOutput find_insurance_category_by_id1(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.insurance_category_output import InsuranceCategoryOutput
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
    api_instance = openapi_client.AdminInsuranceCategoryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_insurance_category_by_id1(id)
        print("The response of AdminInsuranceCategoryControllerApi->find_insurance_category_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInsuranceCategoryControllerApi->find_insurance_category_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**InsuranceCategoryOutput**](InsuranceCategoryOutput.md)

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

# **load_all23**
> List[InsuranceCategoryOutput] load_all23()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.insurance_category_output import InsuranceCategoryOutput
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
    api_instance = openapi_client.AdminInsuranceCategoryControllerApi(api_client)

    try:
        api_response = api_instance.load_all23()
        print("The response of AdminInsuranceCategoryControllerApi->load_all23:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInsuranceCategoryControllerApi->load_all23: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[InsuranceCategoryOutput]**](InsuranceCategoryOutput.md)

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

# **update_insurance_category_by_id**
> InsuranceCategoryOutput update_insurance_category_by_id(id, insurance_category_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.insurance_category_input import InsuranceCategoryInput
from openapi_client.models.insurance_category_output import InsuranceCategoryOutput
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
    api_instance = openapi_client.AdminInsuranceCategoryControllerApi(api_client)
    id = 56 # int | 
    insurance_category_input = openapi_client.InsuranceCategoryInput() # InsuranceCategoryInput | 

    try:
        api_response = api_instance.update_insurance_category_by_id(id, insurance_category_input)
        print("The response of AdminInsuranceCategoryControllerApi->update_insurance_category_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInsuranceCategoryControllerApi->update_insurance_category_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **insurance_category_input** | [**InsuranceCategoryInput**](InsuranceCategoryInput.md)|  | 

### Return type

[**InsuranceCategoryOutput**](InsuranceCategoryOutput.md)

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

