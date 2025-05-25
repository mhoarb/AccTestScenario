# openapi_client.MemberInsuranceCategoryControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_insurance_category_by_id**](MemberInsuranceCategoryControllerApi.md#find_insurance_category_by_id) | **GET** /member/insurance-category/{id} | 
[**load_all6**](MemberInsuranceCategoryControllerApi.md#load_all6) | **GET** /member/insurance-category | 


# **find_insurance_category_by_id**
> InsuranceCategoryOutput find_insurance_category_by_id(id)

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
    api_instance = openapi_client.MemberInsuranceCategoryControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_insurance_category_by_id(id)
        print("The response of MemberInsuranceCategoryControllerApi->find_insurance_category_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberInsuranceCategoryControllerApi->find_insurance_category_by_id: %s\n" % e)
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

# **load_all6**
> List[InsuranceCategoryOutput] load_all6()

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
    api_instance = openapi_client.MemberInsuranceCategoryControllerApi(api_client)

    try:
        api_response = api_instance.load_all6()
        print("The response of MemberInsuranceCategoryControllerApi->load_all6:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberInsuranceCategoryControllerApi->load_all6: %s\n" % e)
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

