# AdminUserManagementOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**customer_level** | **str** |  | [optional] 
**mobile_numbers** | **str** |  | [optional] 
**birth_date** | **str** |  | [optional] 
**sex** | **str** |  | [optional] 
**open_branch** | **int** |  | [optional] 
**amount** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.admin_user_management_output import AdminUserManagementOutput

# TODO update the JSON string below
json = "{}"
# create an instance of AdminUserManagementOutput from a JSON string
admin_user_management_output_instance = AdminUserManagementOutput.from_json(json)
# print the JSON string representation of the object
print(AdminUserManagementOutput.to_json())

# convert the object into a dict
admin_user_management_output_dict = admin_user_management_output_instance.to_dict()
# create an instance of AdminUserManagementOutput from a dict
admin_user_management_output_from_dict = AdminUserManagementOutput.from_dict(admin_user_management_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


