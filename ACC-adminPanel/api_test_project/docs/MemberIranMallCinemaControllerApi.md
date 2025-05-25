# openapi_client.MemberIranMallCinemaControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ff**](MemberIranMallCinemaControllerApi.md#ff) | **POST** /member/iran-mall-cinema/{id}/purchase | 
[**find_iran_mall_cinema_by_id**](MemberIranMallCinemaControllerApi.md#find_iran_mall_cinema_by_id) | **GET** /member/iran-mall-cinema/{id} | 
[**find_iran_mall_cinema_iran_tic_by_id**](MemberIranMallCinemaControllerApi.md#find_iran_mall_cinema_iran_tic_by_id) | **GET** /member/iran-mall-cinema/iran-tic | 
[**load_all4**](MemberIranMallCinemaControllerApi.md#load_all4) | **GET** /member/iran-mall-cinema | 


# **ff**
> IranMallCinemaTicketPurchaseOutput ff(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_cinema_ticket_purchase_output import IranMallCinemaTicketPurchaseOutput
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
    api_instance = openapi_client.MemberIranMallCinemaControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.ff(id)
        print("The response of MemberIranMallCinemaControllerApi->ff:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberIranMallCinemaControllerApi->ff: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**IranMallCinemaTicketPurchaseOutput**](IranMallCinemaTicketPurchaseOutput.md)

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

# **find_iran_mall_cinema_by_id**
> IranMallCinemaOutput find_iran_mall_cinema_by_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_cinema_output import IranMallCinemaOutput
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
    api_instance = openapi_client.MemberIranMallCinemaControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_iran_mall_cinema_by_id(id)
        print("The response of MemberIranMallCinemaControllerApi->find_iran_mall_cinema_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberIranMallCinemaControllerApi->find_iran_mall_cinema_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**IranMallCinemaOutput**](IranMallCinemaOutput.md)

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

# **find_iran_mall_cinema_iran_tic_by_id**
> IranMallCinemaOutput find_iran_mall_cinema_iran_tic_by_id()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_cinema_output import IranMallCinemaOutput
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
    api_instance = openapi_client.MemberIranMallCinemaControllerApi(api_client)

    try:
        api_response = api_instance.find_iran_mall_cinema_iran_tic_by_id()
        print("The response of MemberIranMallCinemaControllerApi->find_iran_mall_cinema_iran_tic_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberIranMallCinemaControllerApi->find_iran_mall_cinema_iran_tic_by_id: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**IranMallCinemaOutput**](IranMallCinemaOutput.md)

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

# **load_all4**
> List[IranMallCinemaTicketOutput] load_all4()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.iran_mall_cinema_ticket_output import IranMallCinemaTicketOutput
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
    api_instance = openapi_client.MemberIranMallCinemaControllerApi(api_client)

    try:
        api_response = api_instance.load_all4()
        print("The response of MemberIranMallCinemaControllerApi->load_all4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberIranMallCinemaControllerApi->load_all4: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[IranMallCinemaTicketOutput]**](IranMallCinemaTicketOutput.md)

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

