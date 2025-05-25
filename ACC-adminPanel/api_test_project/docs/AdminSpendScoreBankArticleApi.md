# openapi_client.AdminSpendScoreBankArticleApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_spend_score_bank_article**](AdminSpendScoreBankArticleApi.md#create_spend_score_bank_article) | **POST** /admin/spend-score-bank-article | 
[**delete_spend_score_bank_article_by_id**](AdminSpendScoreBankArticleApi.md#delete_spend_score_bank_article_by_id) | **DELETE** /admin/spend-score-bank-article/{id} | 
[**find_spend_score_bank_article_by_id1**](AdminSpendScoreBankArticleApi.md#find_spend_score_bank_article_by_id1) | **GET** /admin/spend-score-bank-article/{id} | 
[**load_all9**](AdminSpendScoreBankArticleApi.md#load_all9) | **GET** /admin/spend-score-bank-article | 
[**update_spend_score_bank_article_by_id**](AdminSpendScoreBankArticleApi.md#update_spend_score_bank_article_by_id) | **PUT** /admin/spend-score-bank-article/{id} | 


# **create_spend_score_bank_article**
> SpendScoreBankArticleOutput create_spend_score_bank_article(spend_score_bank_article_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.spend_score_bank_article_input import SpendScoreBankArticleInput
from openapi_client.models.spend_score_bank_article_output import SpendScoreBankArticleOutput
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
    api_instance = openapi_client.AdminSpendScoreBankArticleApi(api_client)
    spend_score_bank_article_input = openapi_client.SpendScoreBankArticleInput() # SpendScoreBankArticleInput | 

    try:
        api_response = api_instance.create_spend_score_bank_article(spend_score_bank_article_input)
        print("The response of AdminSpendScoreBankArticleApi->create_spend_score_bank_article:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminSpendScoreBankArticleApi->create_spend_score_bank_article: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spend_score_bank_article_input** | [**SpendScoreBankArticleInput**](SpendScoreBankArticleInput.md)|  | 

### Return type

[**SpendScoreBankArticleOutput**](SpendScoreBankArticleOutput.md)

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

# **delete_spend_score_bank_article_by_id**
> delete_spend_score_bank_article_by_id(id)

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
    api_instance = openapi_client.AdminSpendScoreBankArticleApi(api_client)
    id = 56 # int | 

    try:
        api_instance.delete_spend_score_bank_article_by_id(id)
    except Exception as e:
        print("Exception when calling AdminSpendScoreBankArticleApi->delete_spend_score_bank_article_by_id: %s\n" % e)
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

# **find_spend_score_bank_article_by_id1**
> SpendScoreBankArticleOutput find_spend_score_bank_article_by_id1(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.spend_score_bank_article_output import SpendScoreBankArticleOutput
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
    api_instance = openapi_client.AdminSpendScoreBankArticleApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.find_spend_score_bank_article_by_id1(id)
        print("The response of AdminSpendScoreBankArticleApi->find_spend_score_bank_article_by_id1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminSpendScoreBankArticleApi->find_spend_score_bank_article_by_id1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**SpendScoreBankArticleOutput**](SpendScoreBankArticleOutput.md)

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

# **load_all9**
> List[SpendScoreBankArticleOutput] load_all9()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.spend_score_bank_article_output import SpendScoreBankArticleOutput
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
    api_instance = openapi_client.AdminSpendScoreBankArticleApi(api_client)

    try:
        api_response = api_instance.load_all9()
        print("The response of AdminSpendScoreBankArticleApi->load_all9:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminSpendScoreBankArticleApi->load_all9: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[SpendScoreBankArticleOutput]**](SpendScoreBankArticleOutput.md)

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

# **update_spend_score_bank_article_by_id**
> SpendScoreBankArticleOutput update_spend_score_bank_article_by_id(id, spend_score_bank_article_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.spend_score_bank_article_input import SpendScoreBankArticleInput
from openapi_client.models.spend_score_bank_article_output import SpendScoreBankArticleOutput
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
    api_instance = openapi_client.AdminSpendScoreBankArticleApi(api_client)
    id = 56 # int | 
    spend_score_bank_article_input = openapi_client.SpendScoreBankArticleInput() # SpendScoreBankArticleInput | 

    try:
        api_response = api_instance.update_spend_score_bank_article_by_id(id, spend_score_bank_article_input)
        print("The response of AdminSpendScoreBankArticleApi->update_spend_score_bank_article_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminSpendScoreBankArticleApi->update_spend_score_bank_article_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **spend_score_bank_article_input** | [**SpendScoreBankArticleInput**](SpendScoreBankArticleInput.md)|  | 

### Return type

[**SpendScoreBankArticleOutput**](SpendScoreBankArticleOutput.md)

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

