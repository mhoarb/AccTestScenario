# OtpAuthRegistrationOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **str** |  | [optional] 
**otp_creation_time** | **datetime** |  | [optional] 
**otp_duration** | **int** |  | [optional] 
**verification_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.otp_auth_registration_output import OtpAuthRegistrationOutput

# TODO update the JSON string below
json = "{}"
# create an instance of OtpAuthRegistrationOutput from a JSON string
otp_auth_registration_output_instance = OtpAuthRegistrationOutput.from_json(json)
# print the JSON string representation of the object
print(OtpAuthRegistrationOutput.to_json())

# convert the object into a dict
otp_auth_registration_output_dict = otp_auth_registration_output_instance.to_dict()
# create an instance of OtpAuthRegistrationOutput from a dict
otp_auth_registration_output_from_dict = OtpAuthRegistrationOutput.from_dict(otp_auth_registration_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


