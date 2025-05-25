# OtpAuthVerificationOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cif** | **str** |  | [optional] 
**key** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.otp_auth_verification_output import OtpAuthVerificationOutput

# TODO update the JSON string below
json = "{}"
# create an instance of OtpAuthVerificationOutput from a JSON string
otp_auth_verification_output_instance = OtpAuthVerificationOutput.from_json(json)
# print the JSON string representation of the object
print(OtpAuthVerificationOutput.to_json())

# convert the object into a dict
otp_auth_verification_output_dict = otp_auth_verification_output_instance.to_dict()
# create an instance of OtpAuthVerificationOutput from a dict
otp_auth_verification_output_from_dict = OtpAuthVerificationOutput.from_dict(otp_auth_verification_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


