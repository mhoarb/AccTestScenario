# CreateBranchOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**code** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**full_address** | **str** |  | [optional] 
**state_name** | **str** |  | [optional] 
**city_name** | **str** |  | [optional] 
**state_id** | **int** |  | [optional] 
**city_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**contacts** | [**List[CreateContactOutput]**](CreateContactOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_branch_output import CreateBranchOutput

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBranchOutput from a JSON string
create_branch_output_instance = CreateBranchOutput.from_json(json)
# print the JSON string representation of the object
print(CreateBranchOutput.to_json())

# convert the object into a dict
create_branch_output_dict = create_branch_output_instance.to_dict()
# create an instance of CreateBranchOutput from a dict
create_branch_output_from_dict = CreateBranchOutput.from_dict(create_branch_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


