# VotingStatsOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**voting_title** | **str** |  | [optional] 
**vote_count** | **int** |  | [optional] 
**stats** | [**List[VotingOptionStatsOutput]**](VotingOptionStatsOutput.md) |  | [optional] 
**stats_detail** | [**List[VotingAnswerExcelDetailOutput]**](VotingAnswerExcelDetailOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.voting_stats_output import VotingStatsOutput

# TODO update the JSON string below
json = "{}"
# create an instance of VotingStatsOutput from a JSON string
voting_stats_output_instance = VotingStatsOutput.from_json(json)
# print the JSON string representation of the object
print(VotingStatsOutput.to_json())

# convert the object into a dict
voting_stats_output_dict = voting_stats_output_instance.to_dict()
# create an instance of VotingStatsOutput from a dict
voting_stats_output_from_dict = VotingStatsOutput.from_dict(voting_stats_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


