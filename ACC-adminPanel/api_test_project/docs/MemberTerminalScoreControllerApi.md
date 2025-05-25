# openapi_client.MemberTerminalScoreControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**load_all_terminal_by_user**](MemberTerminalScoreControllerApi.md#load_all_terminal_by_user) | **GET** /member/terminal-score | 


# **load_all_terminal_by_user**
> TerminalAccountOutput load_all_terminal_by_user()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.terminal_account_output import TerminalAccountOutput
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
    api_instance = openapi_client.MemberTerminalScoreControllerApi(api_client)

    try:
        api_response = api_instance.load_all_terminal_by_user()
        print("The response of MemberTerminalScoreControllerApi->load_all_terminal_by_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberTerminalScoreControllerApi->load_all_terminal_by_user: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**TerminalAccountOutput**](TerminalAccountOutput.md)

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

