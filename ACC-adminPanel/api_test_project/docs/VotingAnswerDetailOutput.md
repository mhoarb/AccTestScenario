# VotingAnswerDetailOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**voting** | [**VotingOutput**](VotingOutput.md) |  | [optional] 
**checked_answer** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.voting_answer_detail_output import VotingAnswerDetailOutput

# TODO update the JSON string below
json = "{}"
# create an instance of VotingAnswerDetailOutput from a JSON string
voting_answer_detail_output_instance = VotingAnswerDetailOutput.from_json(json)
# print the JSON string representation of the object
print(VotingAnswerDetailOutput.to_json())

# convert the object into a dict
voting_answer_detail_output_dict = voting_answer_detail_output_instance.to_dict()
# create an instance of VotingAnswerDetailOutput from a dict
voting_answer_detail_output_from_dict = VotingAnswerDetailOutput.from_dict(voting_answer_detail_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


