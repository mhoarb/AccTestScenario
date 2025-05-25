# openapi_client.AdminInsuranceTicketPurchaseControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fd**](AdminInsuranceTicketPurchaseControllerApi.md#fd) | **GET** /admin/insurance-ticket-purchase | 


# **fd**
> PageUserPurchaseOutput fd(insurance_id, pageable)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_user_purchase_output import PageUserPurchaseOutput
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
    api_instance = openapi_client.AdminInsuranceTicketPurchaseControllerApi(api_client)
    insurance_id = 56 # int | 
    pageable = openapi_client.Pageable() # Pageable | 

    try:
        api_response = api_instance.fd(insurance_id, pageable)
        print("The response of AdminInsuranceTicketPurchaseControllerApi->fd:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInsuranceTicketPurchaseControllerApi->fd: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insurance_id** | **int**|  | 
 **pageable** | [**Pageable**](.md)|  | 

### Return type

[**PageUserPurchaseOutput**](PageUserPurchaseOutput.md)

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

