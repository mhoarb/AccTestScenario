# openapi_client.MemberMyHistoryControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**load_all_spend_scores**](MemberMyHistoryControllerApi.md#load_all_spend_scores) | **GET** /member/my-history/spend | 
[**load_all_tickets**](MemberMyHistoryControllerApi.md#load_all_tickets) | **GET** /member/my-history/tickets | 
[**load_earn_score_by_user**](MemberMyHistoryControllerApi.md#load_earn_score_by_user) | **GET** /member/my-history/earn-score | 


# **load_all_spend_scores**
> PagePurchaseOutput load_all_spend_scores(pageable)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_purchase_output import PagePurchaseOutput
from openapi_client.models.pageable import Pageable
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
    api_instance = openapi_client.MemberMyHistoryControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 

    try:
        api_response = api_instance.load_all_spend_scores(pageable)
        print("The response of MemberMyHistoryControllerApi->load_all_spend_scores:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberMyHistoryControllerApi->load_all_spend_scores: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 

### Return type

[**PagePurchaseOutput**](PagePurchaseOutput.md)

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

# **load_all_tickets**
> PagePurchaseTicketOutput load_all_tickets(pageable)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_purchase_ticket_output import PagePurchaseTicketOutput
from openapi_client.models.pageable import Pageable
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
    api_instance = openapi_client.MemberMyHistoryControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 

    try:
        api_response = api_instance.load_all_tickets(pageable)
        print("The response of MemberMyHistoryControllerApi->load_all_tickets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberMyHistoryControllerApi->load_all_tickets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 

### Return type

[**PagePurchaseTicketOutput**](PagePurchaseTicketOutput.md)

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

# **load_earn_score_by_user**
> List[ScoreReceiveOutput] load_earn_score_by_user(pageable)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.pageable import Pageable
from openapi_client.models.score_receive_output import ScoreReceiveOutput
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
    api_instance = openapi_client.MemberMyHistoryControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 

    try:
        api_response = api_instance.load_earn_score_by_user(pageable)
        print("The response of MemberMyHistoryControllerApi->load_earn_score_by_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberMyHistoryControllerApi->load_earn_score_by_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 

### Return type

[**List[ScoreReceiveOutput]**](ScoreReceiveOutput.md)

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

