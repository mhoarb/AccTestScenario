# openapi_client.MemberSaminLoanControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_mock_facility_settings**](MemberSaminLoanControllerApi.md#get_mock_facility_settings) | **GET** /member/samin/samin-plans | 
[**get_user_loan**](MemberSaminLoanControllerApi.md#get_user_loan) | **GET** /member/samin/user-loan | 
[**get_user_loan_rate**](MemberSaminLoanControllerApi.md#get_user_loan_rate) | **GET** /member/samin/facility-interest-rate | 


# **get_mock_facility_settings**
> SaminPlaneGroupOutput get_mock_facility_settings()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.samin_plane_group_output import SaminPlaneGroupOutput
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
    api_instance = openapi_client.MemberSaminLoanControllerApi(api_client)

    try:
        api_response = api_instance.get_mock_facility_settings()
        print("The response of MemberSaminLoanControllerApi->get_mock_facility_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberSaminLoanControllerApi->get_mock_facility_settings: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SaminPlaneGroupOutput**](SaminPlaneGroupOutput.md)

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

# **get_user_loan**
> SaminLoanScoreTypeOutput get_user_loan(input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.samin_loan_score_type_input import SaminLoanScoreTypeInput
from openapi_client.models.samin_loan_score_type_output import SaminLoanScoreTypeOutput
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
    api_instance = openapi_client.MemberSaminLoanControllerApi(api_client)
    input = openapi_client.SaminLoanScoreTypeInput() # SaminLoanScoreTypeInput | 

    try:
        api_response = api_instance.get_user_loan(input)
        print("The response of MemberSaminLoanControllerApi->get_user_loan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberSaminLoanControllerApi->get_user_loan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**SaminLoanScoreTypeInput**](.md)|  | 

### Return type

[**SaminLoanScoreTypeOutput**](SaminLoanScoreTypeOutput.md)

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

# **get_user_loan_rate**
> Dict[str, str] get_user_loan_rate(account_number)

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
    api_instance = openapi_client.MemberSaminLoanControllerApi(api_client)
    account_number = 'account_number_example' # str | 

    try:
        api_response = api_instance.get_user_loan_rate(account_number)
        print("The response of MemberSaminLoanControllerApi->get_user_loan_rate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberSaminLoanControllerApi->get_user_loan_rate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_number** | **str**|  | 

### Return type

**Dict[str, str]**

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

