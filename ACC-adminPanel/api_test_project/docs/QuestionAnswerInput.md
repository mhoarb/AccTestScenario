# QuestionAnswerInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question_id** | **int** |  | 
**answers** | **List[int]** |  | 

## Example

```python
from openapi_client.models.question_answer_input import QuestionAnswerInput

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionAnswerInput from a JSON string
question_answer_input_instance = QuestionAnswerInput.from_json(json)
# print the JSON string representation of the object
print(QuestionAnswerInput.to_json())

# convert the object into a dict
question_answer_input_dict = question_answer_input_instance.to_dict()
# create an instance of QuestionAnswerInput from a dict
question_answer_input_from_dict = QuestionAnswerInput.from_dict(question_answer_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


