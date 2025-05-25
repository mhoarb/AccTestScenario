# UserBranchInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch_id** | **int** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**level** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_branch_input import UserBranchInput

# TODO update the JSON string below
json = "{}"
# create an instance of UserBranchInput from a JSON string
user_branch_input_instance = UserBranchInput.from_json(json)
# print the JSON string representation of the object
print(UserBranchInput.to_json())

# convert the object into a dict
user_branch_input_dict = user_branch_input_instance.to_dict()
# create an instance of UserBranchInput from a dict
user_branch_input_from_dict = UserBranchInput.from_dict(user_branch_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


