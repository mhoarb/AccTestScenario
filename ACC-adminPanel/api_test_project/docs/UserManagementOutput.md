# UserManagementOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**profile_picture_id** | **int** |  | [optional] 
**user_level** | **str** |  | [optional] 
**user_level_name** | **str** |  | [optional] 
**user_level_id** | **int** |  | [optional] 
**score** | **int** |  | [optional] 
**gem** | **int** |  | [optional] 
**is_show_name** | **bool** |  | [optional] 
**has_registered** | **bool** |  | [optional] 
**customer_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_management_output import UserManagementOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserManagementOutput from a JSON string
user_management_output_instance = UserManagementOutput.from_json(json)
# print the JSON string representation of the object
print(UserManagementOutput.to_json())

# convert the object into a dict
user_management_output_dict = user_management_output_instance.to_dict()
# create an instance of UserManagementOutput from a dict
user_management_output_from_dict = UserManagementOutput.from_dict(user_management_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


