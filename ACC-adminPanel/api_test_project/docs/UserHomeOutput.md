# UserHomeOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile_picture_id** | **int** |  | [optional] 
**score** | **int** |  | [optional] 
**gem** | **int** |  | [optional] 
**level_picture_id** | **int** |  | [optional] 
**level_icon_id** | **int** |  | [optional] 
**level_name** | **str** |  | [optional] 
**level_title** | **str** |  | [optional] 
**theme** | **str** |  | [optional] 
**last_score_update** | **datetime** |  | [optional] 
**customer_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_home_output import UserHomeOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserHomeOutput from a JSON string
user_home_output_instance = UserHomeOutput.from_json(json)
# print the JSON string representation of the object
print(UserHomeOutput.to_json())

# convert the object into a dict
user_home_output_dict = user_home_output_instance.to_dict()
# create an instance of UserHomeOutput from a dict
user_home_output_from_dict = UserHomeOutput.from_dict(user_home_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


