# AdminUserOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**username** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**roles** | **List[str]** |  | [optional] 
**is_enabled** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.admin_user_output import AdminUserOutput

# TODO update the JSON string below
json = "{}"
# create an instance of AdminUserOutput from a JSON string
admin_user_output_instance = AdminUserOutput.from_json(json)
# print the JSON string representation of the object
print(AdminUserOutput.to_json())

# convert the object into a dict
admin_user_output_dict = admin_user_output_instance.to_dict()
# create an instance of AdminUserOutput from a dict
admin_user_output_from_dict = AdminUserOutput.from_dict(admin_user_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


