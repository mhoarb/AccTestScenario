# MyScoreHistoryOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_score** | **int** |  | [optional] 
**score_receive** | [**List[MyScoreHistoryScoreReceivedDto]**](MyScoreHistoryScoreReceivedDto.md) |  | [optional] 
**score_history_weekly** | [**List[EndOfDayScoreHistoryOutput]**](EndOfDayScoreHistoryOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.my_score_history_output import MyScoreHistoryOutput

# TODO update the JSON string below
json = "{}"
# create an instance of MyScoreHistoryOutput from a JSON string
my_score_history_output_instance = MyScoreHistoryOutput.from_json(json)
# print the JSON string representation of the object
print(MyScoreHistoryOutput.to_json())

# convert the object into a dict
my_score_history_output_dict = my_score_history_output_instance.to_dict()
# create an instance of MyScoreHistoryOutput from a dict
my_score_history_output_from_dict = MyScoreHistoryOutput.from_dict(my_score_history_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


