# AdminUserInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** |  | 
**password** | **str** |  | 
**confirm_password** | **str** |  | 
**name** | **str** |  | 
**last_name** | **str** |  | 
**is_enabled** | **bool** |  | 
**roles** | **List[str]** |  | 

## Example

```python
from openapi_client.models.admin_user_input import AdminUserInput

# TODO update the JSON string below
json = "{}"
# create an instance of AdminUserInput from a JSON string
admin_user_input_instance = AdminUserInput.from_json(json)
# print the JSON string representation of the object
print(AdminUserInput.to_json())

# convert the object into a dict
admin_user_input_dict = admin_user_input_instance.to_dict()
# create an instance of AdminUserInput from a dict
admin_user_input_from_dict = AdminUserInput.from_dict(admin_user_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


