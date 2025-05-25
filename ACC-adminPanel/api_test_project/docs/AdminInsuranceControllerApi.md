# openapi_client.AdminInsuranceControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_insurance**](AdminInsuranceControllerApi.md#create_insurance) | **POST** /admin/insurance/{categoryId} | 
[**delete_online_center_by_id2**](AdminInsuranceControllerApi.md#delete_online_center_by_id2) | **DELETE** /admin/insurance/{id} | 
[**find_insurance_by_id1**](AdminInsuranceControllerApi.md#find_insurance_by_id1) | **GET** /admin/insurance/{id} | 
[**load_all22**](AdminInsuranceControllerApi.md#load_all22) | **GET** /admin/insurance | 
[**update_online_center_by_id2**](AdminInsuranceControllerApi.md#update_online_center_by_id2) | **PUT** /admin/insurance/{id} | 


# **create_insurance**
> AdminInsuranceOutput create_insurance(category_id, insurance_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_insurance_output import AdminInsuranceOutput
from openapi_client.models.insurance_input import InsuranceInput
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
    api_instance = openapi_client.AdminInsuranceControllerApi(api_client)
    category_id = 56 # int | 
    insurance_input = openapi_client.InsuranceInput() # InsuranceInput | 

    try:
        api_response = api_instance.create_insurance(category_id, insurance_input)
        print("The response of AdminInsuranceControllerApi->create_insurance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInsuranceControllerApi->create_insurance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **int**|  | 
 **insurance_input** | [**InsuranceInput**](InsuranceInput.md)|  | 

### Return type

[**AdminInsuranceOutput**](AdminInsuranceOutput.md)

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

# **delete_online_center_by_id2**
> delete_online_center_by_id2(id)

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
    api_instance = openapi_client.AdminInsuranceControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_online_center_by_id2(id)
    except Exception as e:
        print("Exception when calling AdminInsuranceControllerApi->delete_online_center_by_id2: %s\n" % e)
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

# **find_insurance_by_id1**
> AdminInsuranceOutput find_insurance_by_id1(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_insurance_output import AdminInsuranceOutput
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
    api_instance = openapi_client.AdminInsuranceControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_insurance_by_id1(id)
        print("The response of AdminInsuranceControllerApi->find_insurance_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInsuranceControllerApi->find_insurance_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**AdminInsuranceOutput**](AdminInsuranceOutput.md)

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

# **load_all22**
> List[AdminInsuranceOutput] load_all22()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_insurance_output import AdminInsuranceOutput
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
    api_instance = openapi_client.AdminInsuranceControllerApi(api_client)

    try:
        api_response = api_instance.load_all22()
        print("The response of AdminInsuranceControllerApi->load_all22:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInsuranceControllerApi->load_all22: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[AdminInsuranceOutput]**](AdminInsuranceOutput.md)

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

# **update_online_center_by_id2**
> AdminInsuranceOutput update_online_center_by_id2(id, insurance_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_insurance_output import AdminInsuranceOutput
from openapi_client.models.insurance_input import InsuranceInput
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
    api_instance = openapi_client.AdminInsuranceControllerApi(api_client)
    id = 56 # int | 
    insurance_input = openapi_client.InsuranceInput() # InsuranceInput | 

    try:
        api_response = api_instance.update_online_center_by_id2(id, insurance_input)
        print("The response of AdminInsuranceControllerApi->update_online_center_by_id2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInsuranceControllerApi->update_online_center_by_id2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **insurance_input** | [**InsuranceInput**](InsuranceInput.md)|  | 

### Return type

[**AdminInsuranceOutput**](AdminInsuranceOutput.md)

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

