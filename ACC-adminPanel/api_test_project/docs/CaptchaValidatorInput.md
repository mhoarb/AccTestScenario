# CaptchaValidatorInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.captcha_validator_input import CaptchaValidatorInput

# TODO update the JSON string below
json = "{}"
# create an instance of CaptchaValidatorInput from a JSON string
captcha_validator_input_instance = CaptchaValidatorInput.from_json(json)
# print the JSON string representation of the object
print(CaptchaValidatorInput.to_json())

# convert the object into a dict
captcha_validator_input_dict = captcha_validator_input_instance.to_dict()
# create an instance of CaptchaValidatorInput from a dict
captcha_validator_input_from_dict = CaptchaValidatorInput.from_dict(captcha_validator_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


