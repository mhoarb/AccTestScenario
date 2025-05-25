# openapi_client.MemberBillPaymentControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submit_bill**](MemberBillPaymentControllerApi.md#submit_bill) | **POST** /member/bill-payment/{id}/transfer | 
[**verify_bill**](MemberBillPaymentControllerApi.md#verify_bill) | **POST** /member/bill-payment/check | 


# **submit_bill**
> PayBillVoucherOutput submit_bill(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.pay_bill_voucher_output import PayBillVoucherOutput
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
    api_instance = openapi_client.MemberBillPaymentControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.submit_bill(id)
        print("The response of MemberBillPaymentControllerApi->submit_bill:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberBillPaymentControllerApi->submit_bill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**PayBillVoucherOutput**](PayBillVoucherOutput.md)

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

# **verify_bill**
> PayBillOutput verify_bill(pay_bill_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.pay_bill_input import PayBillInput
from openapi_client.models.pay_bill_output import PayBillOutput
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
    api_instance = openapi_client.MemberBillPaymentControllerApi(api_client)
    pay_bill_input = openapi_client.PayBillInput() # PayBillInput | 

    try:
        api_response = api_instance.verify_bill(pay_bill_input)
        print("The response of MemberBillPaymentControllerApi->verify_bill:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberBillPaymentControllerApi->verify_bill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pay_bill_input** | [**PayBillInput**](PayBillInput.md)|  | 

### Return type

[**PayBillOutput**](PayBillOutput.md)

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

