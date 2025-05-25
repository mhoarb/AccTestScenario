# LoginWithOtpInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cif** | **str** |  | 
**verification_code** | **str** |  | 

## Example

```python
from openapi_client.models.login_with_otp_input import LoginWithOtpInput

# TODO update the JSON string below
json = "{}"
# create an instance of LoginWithOtpInput from a JSON string
login_with_otp_input_instance = LoginWithOtpInput.from_json(json)
# print the JSON string representation of the object
print(LoginWithOtpInput.to_json())

# convert the object into a dict
login_with_otp_input_dict = login_with_otp_input_instance.to_dict()
# create an instance of LoginWithOtpInput from a dict
login_with_otp_input_from_dict = LoginWithOtpInput.from_dict(login_with_otp_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


