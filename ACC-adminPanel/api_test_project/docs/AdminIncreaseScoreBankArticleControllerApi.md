# openapi_client.AdminIncreaseScoreBankArticleControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_increase_score_bank_article**](AdminIncreaseScoreBankArticleControllerApi.md#create_increase_score_bank_article) | **POST** /admin/increase-score-bank-article | 
[**delete_increase_score_bank_article_by_id**](AdminIncreaseScoreBankArticleControllerApi.md#delete_increase_score_bank_article_by_id) | **DELETE** /admin/increase-score-bank-article/{id} | 
[**find_increase_score_bank_article_by_id1**](AdminIncreaseScoreBankArticleControllerApi.md#find_increase_score_bank_article_by_id1) | **GET** /admin/increase-score-bank-article/{id} | 
[**load_all24**](AdminIncreaseScoreBankArticleControllerApi.md#load_all24) | **GET** /admin/increase-score-bank-article | 
[**update_increase_score_bank_article_by_id**](AdminIncreaseScoreBankArticleControllerApi.md#update_increase_score_bank_article_by_id) | **PUT** /admin/increase-score-bank-article/{id} | 


# **create_increase_score_bank_article**
> IncreaseScoreBankArticleOutput create_increase_score_bank_article(increase_score_bank_article_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.increase_score_bank_article_input import IncreaseScoreBankArticleInput
from openapi_client.models.increase_score_bank_article_output import IncreaseScoreBankArticleOutput
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
    api_instance = openapi_client.AdminIncreaseScoreBankArticleControllerApi(api_client)
    increase_score_bank_article_input = openapi_client.IncreaseScoreBankArticleInput() # IncreaseScoreBankArticleInput | 

    try:
        api_response = api_instance.create_increase_score_bank_article(increase_score_bank_article_input)
        print("The response of AdminIncreaseScoreBankArticleControllerApi->create_increase_score_bank_article:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIncreaseScoreBankArticleControllerApi->create_increase_score_bank_article: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **increase_score_bank_article_input** | [**IncreaseScoreBankArticleInput**](IncreaseScoreBankArticleInput.md)|  | 

### Return type

[**IncreaseScoreBankArticleOutput**](IncreaseScoreBankArticleOutput.md)

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

# **delete_increase_score_bank_article_by_id**
> delete_increase_score_bank_article_by_id(id)

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
    api_instance = openapi_client.AdminIncreaseScoreBankArticleControllerApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_increase_score_bank_article_by_id(id)
    except Exception as e:
        print("Exception when calling AdminIncreaseScoreBankArticleControllerApi->delete_increase_score_bank_article_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_increase_score_bank_article_by_id1**
> IncreaseScoreBankArticleOutput find_increase_score_bank_article_by_id1(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.increase_score_bank_article_output import IncreaseScoreBankArticleOutput
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
    api_instance = openapi_client.AdminIncreaseScoreBankArticleControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_increase_score_bank_article_by_id1(id)
        print("The response of AdminIncreaseScoreBankArticleControllerApi->find_increase_score_bank_article_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIncreaseScoreBankArticleControllerApi->find_increase_score_bank_article_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**IncreaseScoreBankArticleOutput**](IncreaseScoreBankArticleOutput.md)

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

# **load_all24**
> List[IncreaseScoreBankArticleOutput] load_all24()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.increase_score_bank_article_output import IncreaseScoreBankArticleOutput
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
    api_instance = openapi_client.AdminIncreaseScoreBankArticleControllerApi(api_client)

    try:
        api_response = api_instance.load_all24()
        print("The response of AdminIncreaseScoreBankArticleControllerApi->load_all24:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIncreaseScoreBankArticleControllerApi->load_all24: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[IncreaseScoreBankArticleOutput]**](IncreaseScoreBankArticleOutput.md)

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

# **update_increase_score_bank_article_by_id**
> IncreaseScoreBankArticleOutput update_increase_score_bank_article_by_id(id, increase_score_bank_article_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.increase_score_bank_article_input import IncreaseScoreBankArticleInput
from openapi_client.models.increase_score_bank_article_output import IncreaseScoreBankArticleOutput
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
    api_instance = openapi_client.AdminIncreaseScoreBankArticleControllerApi(api_client)
    id = 56 # int | 
    increase_score_bank_article_input = openapi_client.IncreaseScoreBankArticleInput() # IncreaseScoreBankArticleInput | 

    try:
        api_response = api_instance.update_increase_score_bank_article_by_id(id, increase_score_bank_article_input)
        print("The response of AdminIncreaseScoreBankArticleControllerApi->update_increase_score_bank_article_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminIncreaseScoreBankArticleControllerApi->update_increase_score_bank_article_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **increase_score_bank_article_input** | [**IncreaseScoreBankArticleInput**](IncreaseScoreBankArticleInput.md)|  | 

### Return type

[**IncreaseScoreBankArticleOutput**](IncreaseScoreBankArticleOutput.md)

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

