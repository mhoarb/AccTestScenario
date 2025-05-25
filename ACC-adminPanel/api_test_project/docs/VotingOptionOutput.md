# VotingOptionOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.voting_option_output import VotingOptionOutput

# TODO update the JSON string below
json = "{}"
# create an instance of VotingOptionOutput from a JSON string
voting_option_output_instance = VotingOptionOutput.from_json(json)
# print the JSON string representation of the object
print(VotingOptionOutput.to_json())

# convert the object into a dict
voting_option_output_dict = voting_option_output_instance.to_dict()
# create an instance of VotingOptionOutput from a dict
voting_option_output_from_dict = VotingOptionOutput.from_dict(voting_option_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


