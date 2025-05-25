# ChangePasswordInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_password** | **str** |  | 
**new_password** | **str** |  | 
**confirm_new_password** | **str** |  | 

## Example

```python
from openapi_client.models.change_password_input import ChangePasswordInput

# TODO update the JSON string below
json = "{}"
# create an instance of ChangePasswordInput from a JSON string
change_password_input_instance = ChangePasswordInput.from_json(json)
# print the JSON string representation of the object
print(ChangePasswordInput.to_json())

# convert the object into a dict
change_password_input_dict = change_password_input_instance.to_dict()
# create an instance of ChangePasswordInput from a dict
change_password_input_from_dict = ChangePasswordInput.from_dict(change_password_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


