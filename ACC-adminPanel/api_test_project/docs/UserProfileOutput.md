# UserProfileOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**profile_picture_id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**sur_name** | **str** |  | [optional] 
**score** | **int** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**level_picture_id** | **int** |  | [optional] 
**level_icon_id** | **int** |  | [optional] 
**level_name** | **str** |  | [optional] 
**level_title** | **str** |  | [optional] 
**theme** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_profile_output import UserProfileOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfileOutput from a JSON string
user_profile_output_instance = UserProfileOutput.from_json(json)
# print the JSON string representation of the object
print(UserProfileOutput.to_json())

# convert the object into a dict
user_profile_output_dict = user_profile_output_instance.to_dict()
# create an instance of UserProfileOutput from a dict
user_profile_output_from_dict = UserProfileOutput.from_dict(user_profile_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


