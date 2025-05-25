# openapi_client.RuleEngineReScoreTypeControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_re_score_type**](RuleEngineReScoreTypeControllerApi.md#create_re_score_type) | **POST** /rules-engine/score-types | 
[**delete_re_score_type**](RuleEngineReScoreTypeControllerApi.md#delete_re_score_type) | **DELETE** /rules-engine/score-types/{id} | 
[**get_all_re_score_types**](RuleEngineReScoreTypeControllerApi.md#get_all_re_score_types) | **GET** /rules-engine/score-types | 
[**get_re_score_type_by_id**](RuleEngineReScoreTypeControllerApi.md#get_re_score_type_by_id) | **GET** /rules-engine/score-types/{id} | 
[**update_re_score_type**](RuleEngineReScoreTypeControllerApi.md#update_re_score_type) | **PUT** /rules-engine/score-types/{id} | 


# **create_re_score_type**
> ScoreTypeOutput create_re_score_type(score_type_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.score_type_input import ScoreTypeInput
from openapi_client.models.score_type_output import ScoreTypeOutput
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
    api_instance = openapi_client.RuleEngineReScoreTypeControllerApi(api_client)
    score_type_input = openapi_client.ScoreTypeInput() # ScoreTypeInput | 

    try:
        api_response = api_instance.create_re_score_type(score_type_input)
        print("The response of RuleEngineReScoreTypeControllerApi->create_re_score_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleEngineReScoreTypeControllerApi->create_re_score_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **score_type_input** | [**ScoreTypeInput**](ScoreTypeInput.md)|  | 

### Return type

[**ScoreTypeOutput**](ScoreTypeOutput.md)

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

# **delete_re_score_type**
> bool delete_re_score_type(id)

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
    api_instance = openapi_client.RuleEngineReScoreTypeControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.delete_re_score_type(id)
        print("The response of RuleEngineReScoreTypeControllerApi->delete_re_score_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleEngineReScoreTypeControllerApi->delete_re_score_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

**bool**

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

# **get_all_re_score_types**
> PageReScoreType get_all_re_score_types(pageable, active=active, name=name, description=description, count_rule_config=count_rule_config)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_re_score_type import PageReScoreType
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
    api_instance = openapi_client.RuleEngineReScoreTypeControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    active = True # bool |  (optional)
    name = 'name_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    count_rule_config = 56 # int |  (optional)

    try:
        api_response = api_instance.get_all_re_score_types(pageable, active=active, name=name, description=description, count_rule_config=count_rule_config)
        print("The response of RuleEngineReScoreTypeControllerApi->get_all_re_score_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleEngineReScoreTypeControllerApi->get_all_re_score_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **active** | **bool**|  | [optional] 
 **name** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **count_rule_config** | **int**|  | [optional] 

### Return type

[**PageReScoreType**](PageReScoreType.md)

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

# **get_re_score_type_by_id**
> ScoreTypeOutput get_re_score_type_by_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.score_type_output import ScoreTypeOutput
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
    api_instance = openapi_client.RuleEngineReScoreTypeControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.get_re_score_type_by_id(id)
        print("The response of RuleEngineReScoreTypeControllerApi->get_re_score_type_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleEngineReScoreTypeControllerApi->get_re_score_type_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**ScoreTypeOutput**](ScoreTypeOutput.md)

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

# **update_re_score_type**
> ScoreTypeOutput update_re_score_type(id, score_type_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.score_type_input import ScoreTypeInput
from openapi_client.models.score_type_output import ScoreTypeOutput
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
    api_instance = openapi_client.RuleEngineReScoreTypeControllerApi(api_client)
    id = 56 # int | 
    score_type_input = openapi_client.ScoreTypeInput() # ScoreTypeInput | 

    try:
        api_response = api_instance.update_re_score_type(id, score_type_input)
        print("The response of RuleEngineReScoreTypeControllerApi->update_re_score_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleEngineReScoreTypeControllerApi->update_re_score_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **score_type_input** | [**ScoreTypeInput**](ScoreTypeInput.md)|  | 

### Return type

[**ScoreTypeOutput**](ScoreTypeOutput.md)

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

