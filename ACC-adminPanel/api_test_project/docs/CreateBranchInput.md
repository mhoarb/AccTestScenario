# CreateBranchInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**code** | **str** |  | 
**state_id** | **int** |  | 
**city_id** | **int** |  | 
**full_address** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**contacts** | [**List[CreateContactInput]**](CreateContactInput.md) |  | 

## Example

```python
from openapi_client.models.create_branch_input import CreateBranchInput

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBranchInput from a JSON string
create_branch_input_instance = CreateBranchInput.from_json(json)
# print the JSON string representation of the object
print(CreateBranchInput.to_json())

# convert the object into a dict
create_branch_input_dict = create_branch_input_instance.to_dict()
# create an instance of CreateBranchInput from a dict
create_branch_input_from_dict = CreateBranchInput.from_dict(create_branch_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


