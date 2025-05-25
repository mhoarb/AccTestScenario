# VotingOptionStatsOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**option_title** | **str** |  | [optional] 
**option_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.voting_option_stats_output import VotingOptionStatsOutput

# TODO update the JSON string below
json = "{}"
# create an instance of VotingOptionStatsOutput from a JSON string
voting_option_stats_output_instance = VotingOptionStatsOutput.from_json(json)
# print the JSON string representation of the object
print(VotingOptionStatsOutput.to_json())

# convert the object into a dict
voting_option_stats_output_dict = voting_option_stats_output_instance.to_dict()
# create an instance of VotingOptionStatsOutput from a dict
voting_option_stats_output_from_dict = VotingOptionStatsOutput.from_dict(voting_option_stats_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


