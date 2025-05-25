# QuestionOptionStatsOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**option_title** | **str** |  | [optional] 
**option_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.question_option_stats_output import QuestionOptionStatsOutput

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionOptionStatsOutput from a JSON string
question_option_stats_output_instance = QuestionOptionStatsOutput.from_json(json)
# print the JSON string representation of the object
print(QuestionOptionStatsOutput.to_json())

# convert the object into a dict
question_option_stats_output_dict = question_option_stats_output_instance.to_dict()
# create an instance of QuestionOptionStatsOutput from a dict
question_option_stats_output_from_dict = QuestionOptionStatsOutput.from_dict(question_option_stats_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


