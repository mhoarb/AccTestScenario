# AdminChangePasswordInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_password** | **str** |  | 
**confirm_new_password** | **str** |  | 

## Example

```python
from openapi_client.models.admin_change_password_input import AdminChangePasswordInput

# TODO update the JSON string below
json = "{}"
# create an instance of AdminChangePasswordInput from a JSON string
admin_change_password_input_instance = AdminChangePasswordInput.from_json(json)
# print the JSON string representation of the object
print(AdminChangePasswordInput.to_json())

# convert the object into a dict
admin_change_password_input_dict = admin_change_password_input_instance.to_dict()
# create an instance of AdminChangePasswordInput from a dict
admin_change_password_input_from_dict = AdminChangePasswordInput.from_dict(admin_change_password_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


