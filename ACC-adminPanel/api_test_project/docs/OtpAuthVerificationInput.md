# OtpAuthVerificationInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cif** | **str** |  | 
**verification_code** | **str** |  | 

## Example

```python
from openapi_client.models.otp_auth_verification_input import OtpAuthVerificationInput

# TODO update the JSON string below
json = "{}"
# create an instance of OtpAuthVerificationInput from a JSON string
otp_auth_verification_input_instance = OtpAuthVerificationInput.from_json(json)
# print the JSON string representation of the object
print(OtpAuthVerificationInput.to_json())

# convert the object into a dict
otp_auth_verification_input_dict = otp_auth_verification_input_instance.to_dict()
# create an instance of OtpAuthVerificationInput from a dict
otp_auth_verification_input_from_dict = OtpAuthVerificationInput.from_dict(otp_auth_verification_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


