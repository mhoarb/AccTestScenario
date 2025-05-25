# VotingAnswerInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**voting_id** | **int** |  | 
**answer_id** | **int** |  | 

## Example

```python
from openapi_client.models.voting_answer_input import VotingAnswerInput

# TODO update the JSON string below
json = "{}"
# create an instance of VotingAnswerInput from a JSON string
voting_answer_input_instance = VotingAnswerInput.from_json(json)
# print the JSON string representation of the object
print(VotingAnswerInput.to_json())

# convert the object into a dict
voting_answer_input_dict = voting_answer_input_instance.to_dict()
# create an instance of VotingAnswerInput from a dict
voting_answer_input_from_dict = VotingAnswerInput.from_dict(voting_answer_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


