# openapi_client.RuleEngineReRuleConfigControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_rule_config**](RuleEngineReRuleConfigControllerApi.md#create_rule_config) | **POST** /rules-engine/rule-configs | 
[**delete_rule_config**](RuleEngineReRuleConfigControllerApi.md#delete_rule_config) | **DELETE** /rules-engine/rule-configs/{id} | 
[**get_all_rule_configs**](RuleEngineReRuleConfigControllerApi.md#get_all_rule_configs) | **GET** /rules-engine/rule-configs | 
[**get_rule_config_by_id**](RuleEngineReRuleConfigControllerApi.md#get_rule_config_by_id) | **GET** /rules-engine/rule-configs/{id} | 
[**get_rule_configs_by_score_type_id**](RuleEngineReRuleConfigControllerApi.md#get_rule_configs_by_score_type_id) | **GET** /rules-engine/rule-configs/score-types/{scoreTypeId}/rule-configs | 
[**update_rule_config**](RuleEngineReRuleConfigControllerApi.md#update_rule_config) | **PUT** /rules-engine/rule-configs/{id} | 


# **create_rule_config**
> RuleConfigOutput create_rule_config(rule_config_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.rule_config_input import RuleConfigInput
from openapi_client.models.rule_config_output import RuleConfigOutput
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
    api_instance = openapi_client.RuleEngineReRuleConfigControllerApi(api_client)
    rule_config_input = openapi_client.RuleConfigInput() # RuleConfigInput | 

    try:
        api_response = api_instance.create_rule_config(rule_config_input)
        print("The response of RuleEngineReRuleConfigControllerApi->create_rule_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleEngineReRuleConfigControllerApi->create_rule_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_config_input** | [**RuleConfigInput**](RuleConfigInput.md)|  | 

### Return type

[**RuleConfigOutput**](RuleConfigOutput.md)

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

# **delete_rule_config**
> bool delete_rule_config(id)

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
    api_instance = openapi_client.RuleEngineReRuleConfigControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.delete_rule_config(id)
        print("The response of RuleEngineReRuleConfigControllerApi->delete_rule_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleEngineReRuleConfigControllerApi->delete_rule_config: %s\n" % e)
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

# **get_all_rule_configs**
> PageRuleConfigOutput get_all_rule_configs(pageable, customer_level_id=customer_level_id, group_id=group_id, active=active, score=score, unit_measure=unit_measure, description=description)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_rule_config_output import PageRuleConfigOutput
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
    api_instance = openapi_client.RuleEngineReRuleConfigControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    customer_level_id = 56 # int |  (optional)
    group_id = 56 # int |  (optional)
    active = True # bool |  (optional)
    score = 56 # int |  (optional)
    unit_measure = 'unit_measure_example' # str |  (optional)
    description = 'description_example' # str |  (optional)

    try:
        api_response = api_instance.get_all_rule_configs(pageable, customer_level_id=customer_level_id, group_id=group_id, active=active, score=score, unit_measure=unit_measure, description=description)
        print("The response of RuleEngineReRuleConfigControllerApi->get_all_rule_configs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleEngineReRuleConfigControllerApi->get_all_rule_configs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **customer_level_id** | **int**|  | [optional] 
 **group_id** | **int**|  | [optional] 
 **active** | **bool**|  | [optional] 
 **score** | **int**|  | [optional] 
 **unit_measure** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 

### Return type

[**PageRuleConfigOutput**](PageRuleConfigOutput.md)

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

# **get_rule_config_by_id**
> RuleConfig get_rule_config_by_id(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.rule_config import RuleConfig
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
    api_instance = openapi_client.RuleEngineReRuleConfigControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.get_rule_config_by_id(id)
        print("The response of RuleEngineReRuleConfigControllerApi->get_rule_config_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleEngineReRuleConfigControllerApi->get_rule_config_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**RuleConfig**](RuleConfig.md)

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

# **get_rule_configs_by_score_type_id**
> PageRuleConfigOutput get_rule_configs_by_score_type_id(score_type_id, pageable)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_rule_config_output import PageRuleConfigOutput
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
    api_instance = openapi_client.RuleEngineReRuleConfigControllerApi(api_client)
    score_type_id = 56 # int | 
    pageable = openapi_client.Pageable() # Pageable | 

    try:
        api_response = api_instance.get_rule_configs_by_score_type_id(score_type_id, pageable)
        print("The response of RuleEngineReRuleConfigControllerApi->get_rule_configs_by_score_type_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleEngineReRuleConfigControllerApi->get_rule_configs_by_score_type_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **score_type_id** | **int**|  | 
 **pageable** | [**Pageable**](.md)|  | 

### Return type

[**PageRuleConfigOutput**](PageRuleConfigOutput.md)

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

# **update_rule_config**
> RuleConfigOutput update_rule_config(id, rule_config_request_update_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.rule_config_output import RuleConfigOutput
from openapi_client.models.rule_config_request_update_input import RuleConfigRequestUpdateInput
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
    api_instance = openapi_client.RuleEngineReRuleConfigControllerApi(api_client)
    id = 56 # int | 
    rule_config_request_update_input = openapi_client.RuleConfigRequestUpdateInput() # RuleConfigRequestUpdateInput | 

    try:
        api_response = api_instance.update_rule_config(id, rule_config_request_update_input)
        print("The response of RuleEngineReRuleConfigControllerApi->update_rule_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RuleEngineReRuleConfigControllerApi->update_rule_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **rule_config_request_update_input** | [**RuleConfigRequestUpdateInput**](RuleConfigRequestUpdateInput.md)|  | 

### Return type

[**RuleConfigOutput**](RuleConfigOutput.md)

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

