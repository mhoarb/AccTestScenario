# openapi_client.MemberVotingControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_active_votings**](MemberVotingControllerApi.md#get_active_votings) | **GET** /member/voting | 
[**update_answer**](MemberVotingControllerApi.md#update_answer) | **POST** /member/voting | 


# **get_active_votings**
> List[VotingAnswerDetailOutput] get_active_votings()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.voting_answer_detail_output import VotingAnswerDetailOutput
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
    api_instance = openapi_client.MemberVotingControllerApi(api_client)

    try:
        api_response = api_instance.get_active_votings()
        print("The response of MemberVotingControllerApi->get_active_votings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberVotingControllerApi->get_active_votings: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[VotingAnswerDetailOutput]**](VotingAnswerDetailOutput.md)

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

# **update_answer**
> VotingAnswerOutput update_answer(voting_answer_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.voting_answer_input import VotingAnswerInput
from openapi_client.models.voting_answer_output import VotingAnswerOutput
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
    api_instance = openapi_client.MemberVotingControllerApi(api_client)
    voting_answer_input = [openapi_client.VotingAnswerInput()] # List[VotingAnswerInput] | 

    try:
        api_response = api_instance.update_answer(voting_answer_input)
        print("The response of MemberVotingControllerApi->update_answer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberVotingControllerApi->update_answer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voting_answer_input** | [**List[VotingAnswerInput]**](VotingAnswerInput.md)|  | 

### Return type

[**VotingAnswerOutput**](VotingAnswerOutput.md)

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

