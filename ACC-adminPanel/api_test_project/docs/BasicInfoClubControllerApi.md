# openapi_client.BasicInfoClubControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_club_by_id**](BasicInfoClubControllerApi.md#get_club_by_id) | **GET** /auth/basic-info/user | 
[**get_faqs1**](BasicInfoClubControllerApi.md#get_faqs1) | **GET** /auth/basic-info/about-us/faq | 


# **get_club_by_id**
> ClubInfo get_club_by_id()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.club_info import ClubInfo
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
    api_instance = openapi_client.BasicInfoClubControllerApi(api_client)

    try:
        api_response = api_instance.get_club_by_id()
        print("The response of BasicInfoClubControllerApi->get_club_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BasicInfoClubControllerApi->get_club_by_id: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ClubInfo**](ClubInfo.md)

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

# **get_faqs1**
> List[FaqOutput] get_faqs1()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.faq_output import FaqOutput
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
    api_instance = openapi_client.BasicInfoClubControllerApi(api_client)

    try:
        api_response = api_instance.get_faqs1()
        print("The response of BasicInfoClubControllerApi->get_faqs1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BasicInfoClubControllerApi->get_faqs1: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[FaqOutput]**](FaqOutput.md)

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

