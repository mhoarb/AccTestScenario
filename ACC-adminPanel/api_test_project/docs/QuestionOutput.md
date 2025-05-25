# QuestionOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**options** | [**List[QuestionOptionOutput]**](QuestionOptionOutput.md) |  | [optional] 
**has_multiple_answers** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.question_output import QuestionOutput

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionOutput from a JSON string
question_output_instance = QuestionOutput.from_json(json)
# print the JSON string representation of the object
print(QuestionOutput.to_json())

# convert the object into a dict
question_output_dict = question_output_instance.to_dict()
# create an instance of QuestionOutput from a dict
question_output_from_dict = QuestionOutput.from_dict(question_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


