# EndOfDayScoreHistoryOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score_history_date** | **date** |  | [optional] 
**score_history_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.end_of_day_score_history_output import EndOfDayScoreHistoryOutput

# TODO update the JSON string below
json = "{}"
# create an instance of EndOfDayScoreHistoryOutput from a JSON string
end_of_day_score_history_output_instance = EndOfDayScoreHistoryOutput.from_json(json)
# print the JSON string representation of the object
print(EndOfDayScoreHistoryOutput.to_json())

# convert the object into a dict
end_of_day_score_history_output_dict = end_of_day_score_history_output_instance.to_dict()
# create an instance of EndOfDayScoreHistoryOutput from a dict
end_of_day_score_history_output_from_dict = EndOfDayScoreHistoryOutput.from_dict(end_of_day_score_history_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


