# openapi_client.AdminSaminPlanControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_samin_loans_with_score**](AdminSaminPlanControllerApi.md#get_samin_loans_with_score) | **GET** /admin/samin/account-loan | 
[**get_user_accounts**](AdminSaminPlanControllerApi.md#get_user_accounts) | **GET** /admin/samin/user-accounts | 


# **get_samin_loans_with_score**
> List[AdminSaminAccountLoanOutput] get_samin_loans_with_score(input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_samin_account_loan_input import AdminSaminAccountLoanInput
from openapi_client.models.admin_samin_account_loan_output import AdminSaminAccountLoanOutput
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
    api_instance = openapi_client.AdminSaminPlanControllerApi(api_client)
    input = openapi_client.AdminSaminAccountLoanInput() # AdminSaminAccountLoanInput | 

    try:
        api_response = api_instance.get_samin_loans_with_score(input)
        print("The response of AdminSaminPlanControllerApi->get_samin_loans_with_score:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminSaminPlanControllerApi->get_samin_loans_with_score: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**AdminSaminAccountLoanInput**](.md)|  | 

### Return type

[**List[AdminSaminAccountLoanOutput]**](AdminSaminAccountLoanOutput.md)

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

# **get_user_accounts**
> List[AdminUserAccountsOutput] get_user_accounts(customer_id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.admin_user_accounts_output import AdminUserAccountsOutput
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
    api_instance = openapi_client.AdminSaminPlanControllerApi(api_client)
    customer_id = 'customer_id_example' # str | 

    try:
        api_response = api_instance.get_user_accounts(customer_id)
        print("The response of AdminSaminPlanControllerApi->get_user_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminSaminPlanControllerApi->get_user_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**|  | 

### Return type

[**List[AdminUserAccountsOutput]**](AdminUserAccountsOutput.md)

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

