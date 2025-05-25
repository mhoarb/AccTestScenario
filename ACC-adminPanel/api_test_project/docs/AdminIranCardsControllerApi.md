# openapi_client.AdminIranCardsControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_iran_card**](AdminIranCardsControllerApi.md#create_iran_card) | **POST** /admin/iran-cards | 
[**get_all_iran_cards**](AdminIranCardsControllerApi.md#get_all_iran_cards) | **GET** /admin/iran-cards | 
[**get_iran_card_by_id**](AdminIranCardsControllerApi.md#get_iran_card_by_id) | **GET** /admin/iran-cards/{id} | 
[**update_iran_card**](AdminIranCardsControllerApi.md#update_iran_card) | **PUT** /admin/iran-cards/{id} | 


# **create_iran_card**
> IranCardResponseDTO create_iran_card(iran_card_request_dto)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_request_dto import IranCardRequestDTO
from openapi_client.models.iran_card_response_dto import IranCardResponseDTO
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
    api_instance = openapi_client.AdminIranCardsControllerApi(api_client)
    iran_card_request_dto = openapi_client.IranCardRequestDTO() # IranCardRequestDTO | 

    try:
        api_response = api_instance.create_iran_card(iran_card_request_dto)
        print("The response of AdminIranCardsControllerApi->create_iran_card:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranCardsControllerApi->create_iran_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iran_card_request_dto** | [**IranCardRequestDTO**](IranCardRequestDTO.md)|  | 

### Return type

[**IranCardResponseDTO**](IranCardResponseDTO.md)

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

# **get_all_iran_cards**
> List[IranCardResponseDTO] get_all_iran_cards()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_response_dto import IranCardResponseDTO
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
    api_instance = openapi_client.AdminIranCardsControllerApi(api_client)

    try:
        api_response = api_instance.get_all_iran_cards()
        print("The response of AdminIranCardsControllerApi->get_all_iran_cards:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranCardsControllerApi->get_all_iran_cards: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[IranCardResponseDTO]**](IranCardResponseDTO.md)

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

# **get_iran_card_by_id**
> IranCardResponseDTO get_iran_card_by_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_response_dto import IranCardResponseDTO
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
    api_instance = openapi_client.AdminIranCardsControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.get_iran_card_by_id(id)
        print("The response of AdminIranCardsControllerApi->get_iran_card_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranCardsControllerApi->get_iran_card_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**IranCardResponseDTO**](IranCardResponseDTO.md)

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

# **update_iran_card**
> IranCardResponseDTO update_iran_card(id, iran_card_request_dto)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_card_request_dto import IranCardRequestDTO
from openapi_client.models.iran_card_response_dto import IranCardResponseDTO
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
    api_instance = openapi_client.AdminIranCardsControllerApi(api_client)
    id = 56 # int | 
    iran_card_request_dto = openapi_client.IranCardRequestDTO() # IranCardRequestDTO | 

    try:
        api_response = api_instance.update_iran_card(id, iran_card_request_dto)
        print("The response of AdminIranCardsControllerApi->update_iran_card:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIranCardsControllerApi->update_iran_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **iran_card_request_dto** | [**IranCardRequestDTO**](IranCardRequestDTO.md)|  | 

### Return type

[**IranCardResponseDTO**](IranCardResponseDTO.md)

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

