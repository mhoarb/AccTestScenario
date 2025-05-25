# VotingAnswerOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete** | **str** |  | [optional] 
**voting_answer_detail** | [**List[VotingAnswerDetailOutput]**](VotingAnswerDetailOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.voting_answer_output import VotingAnswerOutput

# TODO update the JSON string below
json = "{}"
# create an instance of VotingAnswerOutput from a JSON string
voting_answer_output_instance = VotingAnswerOutput.from_json(json)
# print the JSON string representation of the object
print(VotingAnswerOutput.to_json())

# convert the object into a dict
voting_answer_output_dict = voting_answer_output_instance.to_dict()
# create an instance of VotingAnswerOutput from a dict
voting_answer_output_from_dict = VotingAnswerOutput.from_dict(voting_answer_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


