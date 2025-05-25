# openapi_client.MemberProfileControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**change_password1**](MemberProfileControllerApi.md#change_password1) | **POST** /member/profile/change-password | 
[**check_gift**](MemberProfileControllerApi.md#check_gift) | **POST** /member/profile/gift/check | 
[**find_detail_score_received_history_by_customer_id_and_transaction_type**](MemberProfileControllerApi.md#find_detail_score_received_history_by_customer_id_and_transaction_type) | **GET** /member/profile/my-score/detail/{type} | 
[**find_transaction_score_received_history_by_customer_id**](MemberProfileControllerApi.md#find_transaction_score_received_history_by_customer_id) | **GET** /member/profile/my-score | 
[**get_about_us**](MemberProfileControllerApi.md#get_about_us) | **GET** /member/profile/about-us/about-us | 
[**get_all_lottery_participates**](MemberProfileControllerApi.md#get_all_lottery_participates) | **GET** /member/profile/lottery | 
[**get_all_online_center_comments**](MemberProfileControllerApi.md#get_all_online_center_comments) | **GET** /member/profile/comments | 
[**get_communication_details**](MemberProfileControllerApi.md#get_communication_details) | **GET** /member/profile/communication | 
[**get_faqs**](MemberProfileControllerApi.md#get_faqs) | **GET** /member/profile/about-us/faq | 
[**get_favorite_questions_answers**](MemberProfileControllerApi.md#get_favorite_questions_answers) | **GET** /member/profile/favorite/questions | 
[**get_profile**](MemberProfileControllerApi.md#get_profile) | **GET** /member/profile | 
[**get_profile_details**](MemberProfileControllerApi.md#get_profile_details) | **GET** /member/profile/details | 
[**get_rules**](MemberProfileControllerApi.md#get_rules) | **GET** /member/profile/about-us/rules | 
[**transfer_gift**](MemberProfileControllerApi.md#transfer_gift) | **POST** /member/profile/gift/{id}/transfer | 
[**update_answer1**](MemberProfileControllerApi.md#update_answer1) | **POST** /member/profile/favorite/answer | 
[**update_profile_details**](MemberProfileControllerApi.md#update_profile_details) | **PUT** /member/profile/details | 


# **change_password1**
> change_password1(change_password_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.change_password_input import ChangePasswordInput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)
    change_password_input = openapi_client.ChangePasswordInput() # ChangePasswordInput | 

    try:
        api_instance.change_password1(change_password_input)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->change_password1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **change_password_input** | [**ChangePasswordInput**](ChangePasswordInput.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **check_gift**
> GiftToFriendOutput check_gift(gift_to_friend_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.gift_to_friend_input import GiftToFriendInput
from openapi_client.models.gift_to_friend_output import GiftToFriendOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)
    gift_to_friend_input = openapi_client.GiftToFriendInput() # GiftToFriendInput | 

    try:
        api_response = api_instance.check_gift(gift_to_friend_input)
        print("The response of MemberProfileControllerApi->check_gift:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->check_gift: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gift_to_friend_input** | [**GiftToFriendInput**](GiftToFriendInput.md)|  | 

### Return type

[**GiftToFriendOutput**](GiftToFriendOutput.md)

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

# **find_detail_score_received_history_by_customer_id_and_transaction_type**
> ScoreReceiveDetailOutput find_detail_score_received_history_by_customer_id_and_transaction_type(type)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.score_receive_detail_output import ScoreReceiveDetailOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)
    type = 'type_example' # str | 

    try:
        api_response = api_instance.find_detail_score_received_history_by_customer_id_and_transaction_type(type)
        print("The response of MemberProfileControllerApi->find_detail_score_received_history_by_customer_id_and_transaction_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->find_detail_score_received_history_by_customer_id_and_transaction_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**|  | 

### Return type

[**ScoreReceiveDetailOutput**](ScoreReceiveDetailOutput.md)

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

# **find_transaction_score_received_history_by_customer_id**
> MyScoreHistoryOutput find_transaction_score_received_history_by_customer_id()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.my_score_history_output import MyScoreHistoryOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)

    try:
        api_response = api_instance.find_transaction_score_received_history_by_customer_id()
        print("The response of MemberProfileControllerApi->find_transaction_score_received_history_by_customer_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->find_transaction_score_received_history_by_customer_id: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**MyScoreHistoryOutput**](MyScoreHistoryOutput.md)

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

# **get_about_us**
> ArticleOutput get_about_us()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.article_output import ArticleOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)

    try:
        api_response = api_instance.get_about_us()
        print("The response of MemberProfileControllerApi->get_about_us:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->get_about_us: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ArticleOutput**](ArticleOutput.md)

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

# **get_all_lottery_participates**
> List[LotteryParticipateProfileOutput] get_all_lottery_participates()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.lottery_participate_profile_output import LotteryParticipateProfileOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)

    try:
        api_response = api_instance.get_all_lottery_participates()
        print("The response of MemberProfileControllerApi->get_all_lottery_participates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->get_all_lottery_participates: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[LotteryParticipateProfileOutput]**](LotteryParticipateProfileOutput.md)

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

# **get_all_online_center_comments**
> List[ProfileCommentOutput] get_all_online_center_comments()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.profile_comment_output import ProfileCommentOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)

    try:
        api_response = api_instance.get_all_online_center_comments()
        print("The response of MemberProfileControllerApi->get_all_online_center_comments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->get_all_online_center_comments: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ProfileCommentOutput]**](ProfileCommentOutput.md)

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

# **get_communication_details**
> CommunicationOutput get_communication_details()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.communication_output import CommunicationOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)

    try:
        api_response = api_instance.get_communication_details()
        print("The response of MemberProfileControllerApi->get_communication_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->get_communication_details: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CommunicationOutput**](CommunicationOutput.md)

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

# **get_faqs**
> List[FaqOutput] get_faqs()

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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)

    try:
        api_response = api_instance.get_faqs()
        print("The response of MemberProfileControllerApi->get_faqs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->get_faqs: %s\n" % e)
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

# **get_favorite_questions_answers**
> List[QuestionAnswerOutput] get_favorite_questions_answers()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.question_answer_output import QuestionAnswerOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)

    try:
        api_response = api_instance.get_favorite_questions_answers()
        print("The response of MemberProfileControllerApi->get_favorite_questions_answers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->get_favorite_questions_answers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[QuestionAnswerOutput]**](QuestionAnswerOutput.md)

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

# **get_profile**
> UserProfileOutput get_profile()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.user_profile_output import UserProfileOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)

    try:
        api_response = api_instance.get_profile()
        print("The response of MemberProfileControllerApi->get_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->get_profile: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**UserProfileOutput**](UserProfileOutput.md)

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

# **get_profile_details**
> UserProfileDetailsOutput get_profile_details()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.user_profile_details_output import UserProfileDetailsOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)

    try:
        api_response = api_instance.get_profile_details()
        print("The response of MemberProfileControllerApi->get_profile_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->get_profile_details: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**UserProfileDetailsOutput**](UserProfileDetailsOutput.md)

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

# **get_rules**
> ArticleOutput get_rules()

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.article_output import ArticleOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)

    try:
        api_response = api_instance.get_rules()
        print("The response of MemberProfileControllerApi->get_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->get_rules: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ArticleOutput**](ArticleOutput.md)

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

# **transfer_gift**
> GiftToFriendBillOutput transfer_gift(id)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.gift_to_friend_bill_output import GiftToFriendBillOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.transfer_gift(id)
        print("The response of MemberProfileControllerApi->transfer_gift:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->transfer_gift: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**GiftToFriendBillOutput**](GiftToFriendBillOutput.md)

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

# **update_answer1**
> List[QuestionAnswerOutput] update_answer1(question_answer_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.question_answer_input import QuestionAnswerInput
from openapi_client.models.question_answer_output import QuestionAnswerOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)
    question_answer_input = [openapi_client.QuestionAnswerInput()] # List[QuestionAnswerInput] | 

    try:
        api_response = api_instance.update_answer1(question_answer_input)
        print("The response of MemberProfileControllerApi->update_answer1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->update_answer1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **question_answer_input** | [**List[QuestionAnswerInput]**](QuestionAnswerInput.md)|  | 

### Return type

[**List[QuestionAnswerOutput]**](QuestionAnswerOutput.md)

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

# **update_profile_details**
> UserProfileDetailsOutput update_profile_details(user_profile_details_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.user_profile_details_input import UserProfileDetailsInput
from openapi_client.models.user_profile_details_output import UserProfileDetailsOutput
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
    api_instance = openapi_client.MemberProfileControllerApi(api_client)
    user_profile_details_input = openapi_client.UserProfileDetailsInput() # UserProfileDetailsInput | 

    try:
        api_response = api_instance.update_profile_details(user_profile_details_input)
        print("The response of MemberProfileControllerApi->update_profile_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberProfileControllerApi->update_profile_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_profile_details_input** | [**UserProfileDetailsInput**](UserProfileDetailsInput.md)|  | 

### Return type

[**UserProfileDetailsOutput**](UserProfileDetailsOutput.md)

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

