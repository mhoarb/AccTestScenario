# UserBranchOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**branch_position** | **str** |  | [optional] 
**branch_id** | **int** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**active** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.user_branch_output import UserBranchOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserBranchOutput from a JSON string
user_branch_output_instance = UserBranchOutput.from_json(json)
# print the JSON string representation of the object
print(UserBranchOutput.to_json())

# convert the object into a dict
user_branch_output_dict = user_branch_output_instance.to_dict()
# create an instance of UserBranchOutput from a dict
user_branch_output_from_dict = UserBranchOutput.from_dict(user_branch_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


