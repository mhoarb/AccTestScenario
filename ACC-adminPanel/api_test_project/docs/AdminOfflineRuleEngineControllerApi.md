# openapi_client.AdminOfflineRuleEngineControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](AdminOfflineRuleEngineControllerApi.md#create) | **POST** /admin/rule/offline | 
[**find_all**](AdminOfflineRuleEngineControllerApi.md#find_all) | **GET** /admin/rule/offline | 
[**find_by_id**](AdminOfflineRuleEngineControllerApi.md#find_by_id) | **GET** /admin/rule/offline/{id} | 
[**update**](AdminOfflineRuleEngineControllerApi.md#update) | **PUT** /admin/rule/offline/{id} | 


# **create**
> RequestCalculateScoreResponseDTO create(request_calculate_score_request_dto)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.request_calculate_score_request_dto import RequestCalculateScoreRequestDTO
from openapi_client.models.request_calculate_score_response_dto import RequestCalculateScoreResponseDTO
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
    api_instance = openapi_client.AdminOfflineRuleEngineControllerApi(api_client)
    request_calculate_score_request_dto = openapi_client.RequestCalculateScoreRequestDTO() # RequestCalculateScoreRequestDTO | 

    try:
        api_response = api_instance.create(request_calculate_score_request_dto)
        print("The response of AdminOfflineRuleEngineControllerApi->create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOfflineRuleEngineControllerApi->create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_calculate_score_request_dto** | [**RequestCalculateScoreRequestDTO**](RequestCalculateScoreRequestDTO.md)|  | 

### Return type

[**RequestCalculateScoreResponseDTO**](RequestCalculateScoreResponseDTO.md)

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

# **find_all**
> List[RequestCalculateScoreResponseDTO] find_all()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.request_calculate_score_response_dto import RequestCalculateScoreResponseDTO
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
    api_instance = openapi_client.AdminOfflineRuleEngineControllerApi(api_client)

    try:
        api_response = api_instance.find_all()
        print("The response of AdminOfflineRuleEngineControllerApi->find_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOfflineRuleEngineControllerApi->find_all: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[RequestCalculateScoreResponseDTO]**](RequestCalculateScoreResponseDTO.md)

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

# **find_by_id**
> RequestCalculateScoreResponseDTO find_by_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.request_calculate_score_response_dto import RequestCalculateScoreResponseDTO
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
    api_instance = openapi_client.AdminOfflineRuleEngineControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_by_id(id)
        print("The response of AdminOfflineRuleEngineControllerApi->find_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOfflineRuleEngineControllerApi->find_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**RequestCalculateScoreResponseDTO**](RequestCalculateScoreResponseDTO.md)

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

# **update**
> RequestCalculateScoreResponseDTO update(id, request_calculate_score_request_dto)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.request_calculate_score_request_dto import RequestCalculateScoreRequestDTO
from openapi_client.models.request_calculate_score_response_dto import RequestCalculateScoreResponseDTO
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
    api_instance = openapi_client.AdminOfflineRuleEngineControllerApi(api_client)
    id = 56 # int | 
    request_calculate_score_request_dto = openapi_client.RequestCalculateScoreRequestDTO() # RequestCalculateScoreRequestDTO | 

    try:
        api_response = api_instance.update(id, request_calculate_score_request_dto)
        print("The response of AdminOfflineRuleEngineControllerApi->update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminOfflineRuleEngineControllerApi->update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **request_calculate_score_request_dto** | [**RequestCalculateScoreRequestDTO**](RequestCalculateScoreRequestDTO.md)|  | 

### Return type

[**RequestCalculateScoreResponseDTO**](RequestCalculateScoreResponseDTO.md)

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

