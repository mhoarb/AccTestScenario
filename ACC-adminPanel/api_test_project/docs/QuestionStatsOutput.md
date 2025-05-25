# QuestionStatsOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question_title** | **str** |  | [optional] 
**question_count** | **int** |  | [optional] 
**stats** | [**List[QuestionOptionStatsOutput]**](QuestionOptionStatsOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.question_stats_output import QuestionStatsOutput

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionStatsOutput from a JSON string
question_stats_output_instance = QuestionStatsOutput.from_json(json)
# print the JSON string representation of the object
print(QuestionStatsOutput.to_json())

# convert the object into a dict
question_stats_output_dict = question_stats_output_instance.to_dict()
# create an instance of QuestionStatsOutput from a dict
question_stats_output_from_dict = QuestionStatsOutput.from_dict(question_stats_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


