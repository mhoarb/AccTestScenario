# QuestionAnswerOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question** | [**QuestionOutput**](QuestionOutput.md) |  | [optional] 
**checked_answers** | **List[int]** |  | [optional] 

## Example

```python
from openapi_client.models.question_answer_output import QuestionAnswerOutput

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionAnswerOutput from a JSON string
question_answer_output_instance = QuestionAnswerOutput.from_json(json)
# print the JSON string representation of the object
print(QuestionAnswerOutput.to_json())

# convert the object into a dict
question_answer_output_dict = question_answer_output_instance.to_dict()
# create an instance of QuestionAnswerOutput from a dict
question_answer_output_from_dict = QuestionAnswerOutput.from_dict(question_answer_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


