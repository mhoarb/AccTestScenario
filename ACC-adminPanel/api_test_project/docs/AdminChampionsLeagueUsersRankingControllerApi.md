# openapi_client.AdminChampionsLeagueUsersRankingControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_all_user_ranking_in_branch2**](AdminChampionsLeagueUsersRankingControllerApi.md#find_all_user_ranking_in_branch2) | **GET** /admin/champions-league/ranking/branch | 
[**find_all_user_ranking_in_country3**](AdminChampionsLeagueUsersRankingControllerApi.md#find_all_user_ranking_in_country3) | **GET** /admin/champions-league/ranking/country | 


# **find_all_user_ranking_in_branch2**
> PageUserChampionsLeagueRankOutput find_all_user_ranking_in_branch2(pageable, open_branch, customer_id=customer_id, name=name, family_name=family_name, min_gem=min_gem, max_gem=max_gem)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_user_champions_league_rank_output import PageUserChampionsLeagueRankOutput
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
    api_instance = openapi_client.AdminChampionsLeagueUsersRankingControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    open_branch = 56 # int | 
    customer_id = 'customer_id_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    family_name = 'family_name_example' # str |  (optional)
    min_gem = 56 # int |  (optional)
    max_gem = 56 # int |  (optional)

    try:
        api_response = api_instance.find_all_user_ranking_in_branch2(pageable, open_branch, customer_id=customer_id, name=name, family_name=family_name, min_gem=min_gem, max_gem=max_gem)
        print("The response of AdminChampionsLeagueUsersRankingControllerApi->find_all_user_ranking_in_branch2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueUsersRankingControllerApi->find_all_user_ranking_in_branch2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **open_branch** | **int**|  | 
 **customer_id** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **family_name** | **str**|  | [optional] 
 **min_gem** | **int**|  | [optional] 
 **max_gem** | **int**|  | [optional] 

### Return type

[**PageUserChampionsLeagueRankOutput**](PageUserChampionsLeagueRankOutput.md)

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

# **find_all_user_ranking_in_country3**
> PageUserChampionsLeagueRankOutput find_all_user_ranking_in_country3(pageable, customer_id=customer_id, name=name, family_name=family_name, min_gem=min_gem, max_gem=max_gem)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.page_user_champions_league_rank_output import PageUserChampionsLeagueRankOutput
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
    api_instance = openapi_client.AdminChampionsLeagueUsersRankingControllerApi(api_client)
    pageable = openapi_client.Pageable() # Pageable | 
    customer_id = 'customer_id_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    family_name = 'family_name_example' # str |  (optional)
    min_gem = 56 # int |  (optional)
    max_gem = 56 # int |  (optional)

    try:
        api_response = api_instance.find_all_user_ranking_in_country3(pageable, customer_id=customer_id, name=name, family_name=family_name, min_gem=min_gem, max_gem=max_gem)
        print("The response of AdminChampionsLeagueUsersRankingControllerApi->find_all_user_ranking_in_country3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminChampionsLeagueUsersRankingControllerApi->find_all_user_ranking_in_country3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | [**Pageable**](.md)|  | 
 **customer_id** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **family_name** | **str**|  | [optional] 
 **min_gem** | **int**|  | [optional] 
 **max_gem** | **int**|  | [optional] 

### Return type

[**PageUserChampionsLeagueRankOutput**](PageUserChampionsLeagueRankOutput.md)

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

