# VotingInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | 
**options** | **List[str]** |  | 
**is_active** | **bool** |  | [optional] 
**active** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.voting_input import VotingInput

# TODO update the JSON string below
json = "{}"
# create an instance of VotingInput from a JSON string
voting_input_instance = VotingInput.from_json(json)
# print the JSON string representation of the object
print(VotingInput.to_json())

# convert the object into a dict
voting_input_dict = voting_input_instance.to_dict()
# create an instance of VotingInput from a dict
voting_input_from_dict = VotingInput.from_dict(voting_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


