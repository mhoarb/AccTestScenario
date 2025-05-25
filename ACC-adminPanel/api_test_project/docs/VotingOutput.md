# VotingOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**options** | [**List[VotingOptionOutput]**](VotingOptionOutput.md) |  | [optional] 
**is_active** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.voting_output import VotingOutput

# TODO update the JSON string below
json = "{}"
# create an instance of VotingOutput from a JSON string
voting_output_instance = VotingOutput.from_json(json)
# print the JSON string representation of the object
print(VotingOutput.to_json())

# convert the object into a dict
voting_output_dict = voting_output_instance.to_dict()
# create an instance of VotingOutput from a dict
voting_output_from_dict = VotingOutput.from_dict(voting_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


