# QuestionInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | 
**options** | **List[str]** |  | 
**has_multiple_answers** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.question_input import QuestionInput

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionInput from a JSON string
question_input_instance = QuestionInput.from_json(json)
# print the JSON string representation of the object
print(QuestionInput.to_json())

# convert the object into a dict
question_input_dict = question_input_instance.to_dict()
# create an instance of QuestionInput from a dict
question_input_from_dict = QuestionInput.from_dict(question_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


