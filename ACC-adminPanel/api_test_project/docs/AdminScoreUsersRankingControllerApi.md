# openapi_client.AdminScoreUsersRankingControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_all_user_ranking_in_branch1**](AdminScoreUsersRankingControllerApi.md#find_all_user_ranking_in_branch1) | **GET** /admin/score/ranking/branch | 
[**find_all_user_ranking_in_country2**](AdminScoreUsersRankingControllerApi.md#find_all_user_ranking_in_country2) | **GET** /admin/score/ranking/country | 


# **find_all_user_ranking_in_branch1**
> PageUserScoreRankOutput find_all_user_ranking_in_branch1(pageable, open_branch, customer_id=customer_id, name=name, family_name=family_name, min_score=min_score, max_score=max_score, from_date=from_date, to_date=to_date)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_user_score_rank_output import PageUserScoreRankOutput
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
    api_instance = openapi_client.AdminScoreUsersRankingControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    open_branch = 56 # int | 
    customer_id = 'customer_id_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    family_name = 'family_name_example' # str |  (optional)
    min_score = 56 # int |  (optional)
    max_score = 56 # int |  (optional)
    from_date = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    to_date = '2013-10-20T19:20:30+01:00' # datetime |  (optional)

    try:
        api_response = api_instance.find_all_user_ranking_in_branch1(pageable, open_branch, customer_id=customer_id, name=name, family_name=family_name, min_score=min_score, max_score=max_score, from_date=from_date, to_date=to_date)
        print("The response of AdminScoreUsersRankingControllerApi->find_all_user_ranking_in_branch1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminScoreUsersRankingControllerApi->find_all_user_ranking_in_branch1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **open_branch** | **int**|  | 
 **customer_id** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **family_name** | **str**|  | [optional] 
 **min_score** | **int**|  | [optional] 
 **max_score** | **int**|  | [optional] 
 **from_date** | **datetime**|  | [optional] 
 **to_date** | **datetime**|  | [optional] 

### Return type

[**PageUserScoreRankOutput**](PageUserScoreRankOutput.md)

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

# **find_all_user_ranking_in_country2**
> PageUserScoreRankOutput find_all_user_ranking_in_country2(pageable, customer_id=customer_id, name=name, family_name=family_name, min_score=min_score, max_score=max_score, from_date=from_date, to_date=to_date)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_user_score_rank_output import PageUserScoreRankOutput
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
    api_instance = openapi_client.AdminScoreUsersRankingControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    customer_id = 'customer_id_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    family_name = 'family_name_example' # str |  (optional)
    min_score = 56 # int |  (optional)
    max_score = 56 # int |  (optional)
    from_date = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    to_date = '2013-10-20T19:20:30+01:00' # datetime |  (optional)

    try:
        api_response = api_instance.find_all_user_ranking_in_country2(pageable, customer_id=customer_id, name=name, family_name=family_name, min_score=min_score, max_score=max_score, from_date=from_date, to_date=to_date)
        print("The response of AdminScoreUsersRankingControllerApi->find_all_user_ranking_in_country2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminScoreUsersRankingControllerApi->find_all_user_ranking_in_country2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **customer_id** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **family_name** | **str**|  | [optional] 
 **min_score** | **int**|  | [optional] 
 **max_score** | **int**|  | [optional] 
 **from_date** | **datetime**|  | [optional] 
 **to_date** | **datetime**|  | [optional] 

### Return type

[**PageUserScoreRankOutput**](PageUserScoreRankOutput.md)

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

