# AdminUpdateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** |  | 
**name** | **str** |  | 
**last_name** | **str** |  | 
**is_enabled** | **bool** |  | 
**roles** | **List[str]** |  | 

## Example

```python
from openapi_client.models.admin_update_input import AdminUpdateInput

# TODO update the JSON string below
json = "{}"
# create an instance of AdminUpdateInput from a JSON string
admin_update_input_instance = AdminUpdateInput.from_json(json)
# print the JSON string representation of the object
print(AdminUpdateInput.to_json())

# convert the object into a dict
admin_update_input_dict = admin_update_input_instance.to_dict()
# create an instance of AdminUpdateInput from a dict
admin_update_input_from_dict = AdminUpdateInput.from_dict(admin_update_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


