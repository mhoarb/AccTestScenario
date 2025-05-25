# openapi_client.AuthenticationControllerApi

All URIs are relative to *https://ccd.farazpardazan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_login**](AuthenticationControllerApi.md#admin_login) | **POST** /auth/admin-login | 
[**branch_login**](AuthenticationControllerApi.md#branch_login) | **POST** /auth/branch-login | 
[**get_version**](AuthenticationControllerApi.md#get_version) | **GET** /auth/get-version | 
[**login_with_credentials**](AuthenticationControllerApi.md#login_with_credentials) | **POST** /auth/login-with-password | 
[**login_with_otp**](AuthenticationControllerApi.md#login_with_otp) | **POST** /auth/login-with-otp | 
[**register_with_credentials**](AuthenticationControllerApi.md#register_with_credentials) | **POST** /auth/register-user | 
[**rules_engine_login**](AuthenticationControllerApi.md#rules_engine_login) | **POST** /auth/rules-engine-login | 
[**send_otp**](AuthenticationControllerApi.md#send_otp) | **POST** /auth/send-otp | 
[**set_password**](AuthenticationControllerApi.md#set_password) | **POST** /auth/set-password | 
[**validator_captcha**](AuthenticationControllerApi.md#validator_captcha) | **POST** /auth/valid-captcha | 
[**verify**](AuthenticationControllerApi.md#verify) | **POST** /auth/verify-phone-number | 
[**ws_login**](AuthenticationControllerApi.md#ws_login) | **POST** /auth/ws-login | 


# **admin_login**
> LoginOutput admin_login(login_with_credentials_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.login_output import LoginOutput
from openapi_client.models.login_with_credentials_input import LoginWithCredentialsInput
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
    api_instance = openapi_client.AuthenticationControllerApi(api_client)
    login_with_credentials_input = openapi_client.LoginWithCredentialsInput() # LoginWithCredentialsInput | 

    try:
        api_response = api_instance.admin_login(login_with_credentials_input)
        print("The response of AuthenticationControllerApi->admin_login:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationControllerApi->admin_login: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_with_credentials_input** | [**LoginWithCredentialsInput**](LoginWithCredentialsInput.md)|  | 

### Return type

[**LoginOutput**](LoginOutput.md)

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

# **branch_login**
> LoginOutput branch_login(login_with_credentials_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.login_output import LoginOutput
from openapi_client.models.login_with_credentials_input import LoginWithCredentialsInput
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
    api_instance = openapi_client.AuthenticationControllerApi(api_client)
    login_with_credentials_input = openapi_client.LoginWithCredentialsInput() # LoginWithCredentialsInput | 

    try:
        api_response = api_instance.branch_login(login_with_credentials_input)
        print("The response of AuthenticationControllerApi->branch_login:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationControllerApi->branch_login: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_with_credentials_input** | [**LoginWithCredentialsInput**](LoginWithCredentialsInput.md)|  | 

### Return type

[**LoginOutput**](LoginOutput.md)

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

# **get_version**
> str get_version()

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
    api_instance = openapi_client.AuthenticationControllerApi(api_client)

    try:
        api_response = api_instance.get_version()
        print("The response of AuthenticationControllerApi->get_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationControllerApi->get_version: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

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

# **login_with_credentials**
> LoginOutput login_with_credentials(login_with_credentials_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.login_output import LoginOutput
from openapi_client.models.login_with_credentials_input import LoginWithCredentialsInput
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
    api_instance = openapi_client.AuthenticationControllerApi(api_client)
    login_with_credentials_input = openapi_client.LoginWithCredentialsInput() # LoginWithCredentialsInput | 

    try:
        api_response = api_instance.login_with_credentials(login_with_credentials_input)
        print("The response of AuthenticationControllerApi->login_with_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationControllerApi->login_with_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_with_credentials_input** | [**LoginWithCredentialsInput**](LoginWithCredentialsInput.md)|  | 

### Return type

[**LoginOutput**](LoginOutput.md)

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

# **login_with_otp**
> LoginOutput login_with_otp(login_with_otp_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.login_output import LoginOutput
from openapi_client.models.login_with_otp_input import LoginWithOtpInput
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
    api_instance = openapi_client.AuthenticationControllerApi(api_client)
    login_with_otp_input = openapi_client.LoginWithOtpInput() # LoginWithOtpInput | 

    try:
        api_response = api_instance.login_with_otp(login_with_otp_input)
        print("The response of AuthenticationControllerApi->login_with_otp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationControllerApi->login_with_otp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_with_otp_input** | [**LoginWithOtpInput**](LoginWithOtpInput.md)|  | 

### Return type

[**LoginOutput**](LoginOutput.md)

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

# **register_with_credentials**
> OtpAuthRegistrationOutput register_with_credentials(register_with_credentials_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.otp_auth_registration_output import OtpAuthRegistrationOutput
from openapi_client.models.register_with_credentials_input import RegisterWithCredentialsInput
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
    api_instance = openapi_client.AuthenticationControllerApi(api_client)
    register_with_credentials_input = openapi_client.RegisterWithCredentialsInput() # RegisterWithCredentialsInput | 

    try:
        api_response = api_instance.register_with_credentials(register_with_credentials_input)
        print("The response of AuthenticationControllerApi->register_with_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationControllerApi->register_with_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register_with_credentials_input** | [**RegisterWithCredentialsInput**](RegisterWithCredentialsInput.md)|  | 

### Return type

[**OtpAuthRegistrationOutput**](OtpAuthRegistrationOutput.md)

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

# **rules_engine_login**
> LoginOutput rules_engine_login(login_with_credentials_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.login_output import LoginOutput
from openapi_client.models.login_with_credentials_input import LoginWithCredentialsInput
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
    api_instance = openapi_client.AuthenticationControllerApi(api_client)
    login_with_credentials_input = openapi_client.LoginWithCredentialsInput() # LoginWithCredentialsInput | 

    try:
        api_response = api_instance.rules_engine_login(login_with_credentials_input)
        print("The response of AuthenticationControllerApi->rules_engine_login:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationControllerApi->rules_engine_login: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_with_credentials_input** | [**LoginWithCredentialsInput**](LoginWithCredentialsInput.md)|  | 

### Return type

[**LoginOutput**](LoginOutput.md)

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

# **send_otp**
> OtpAuthRegistrationOutput send_otp(send_otp_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.otp_auth_registration_output import OtpAuthRegistrationOutput
from openapi_client.models.send_otp_input import SendOtpInput
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
    api_instance = openapi_client.AuthenticationControllerApi(api_client)
    send_otp_input = openapi_client.SendOtpInput() # SendOtpInput | 

    try:
        api_response = api_instance.send_otp(send_otp_input)
        print("The response of AuthenticationControllerApi->send_otp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationControllerApi->send_otp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **send_otp_input** | [**SendOtpInput**](SendOtpInput.md)|  | 

### Return type

[**OtpAuthRegistrationOutput**](OtpAuthRegistrationOutput.md)

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

# **set_password**
> set_password(set_first_password_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.set_first_password_input import SetFirstPasswordInput
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
    api_instance = openapi_client.AuthenticationControllerApi(api_client)
    set_first_password_input = openapi_client.SetFirstPasswordInput() # SetFirstPasswordInput | 

    try:
        api_instance.set_password(set_first_password_input)
    except Exception as e:
        print("Exception when calling AuthenticationControllerApi->set_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **set_first_password_input** | [**SetFirstPasswordInput**](SetFirstPasswordInput.md)|  | 

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

# **validator_captcha**
> bool validator_captcha(captcha_validator_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.captcha_validator_input import CaptchaValidatorInput
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
    api_instance = openapi_client.AuthenticationControllerApi(api_client)
    captcha_validator_input = openapi_client.CaptchaValidatorInput() # CaptchaValidatorInput | 

    try:
        api_response = api_instance.validator_captcha(captcha_validator_input)
        print("The response of AuthenticationControllerApi->validator_captcha:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationControllerApi->validator_captcha: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **captcha_validator_input** | [**CaptchaValidatorInput**](CaptchaValidatorInput.md)|  | 

### Return type

**bool**

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

# **verify**
> OtpAuthVerificationOutput verify(otp_auth_verification_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.otp_auth_verification_input import OtpAuthVerificationInput
from openapi_client.models.otp_auth_verification_output import OtpAuthVerificationOutput
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
    api_instance = openapi_client.AuthenticationControllerApi(api_client)
    otp_auth_verification_input = openapi_client.OtpAuthVerificationInput() # OtpAuthVerificationInput | 

    try:
        api_response = api_instance.verify(otp_auth_verification_input)
        print("The response of AuthenticationControllerApi->verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationControllerApi->verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otp_auth_verification_input** | [**OtpAuthVerificationInput**](OtpAuthVerificationInput.md)|  | 

### Return type

[**OtpAuthVerificationOutput**](OtpAuthVerificationOutput.md)

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

# **ws_login**
> LoginOutput ws_login(login_with_credentials_input)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.login_output import LoginOutput
from openapi_client.models.login_with_credentials_input import LoginWithCredentialsInput
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
    api_instance = openapi_client.AuthenticationControllerApi(api_client)
    login_with_credentials_input = openapi_client.LoginWithCredentialsInput() # LoginWithCredentialsInput | 

    try:
        api_response = api_instance.ws_login(login_with_credentials_input)
        print("The response of AuthenticationControllerApi->ws_login:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationControllerApi->ws_login: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_with_credentials_input** | [**LoginWithCredentialsInput**](LoginWithCredentialsInput.md)|  | 

### Return type

[**LoginOutput**](LoginOutput.md)

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

