# MyScoreHistoryScoreReceivedDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**gain_score** | **int** |  | [optional] 
**transaction_name** | **str** |  | [optional] 
**score_type_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.my_score_history_score_received_dto import MyScoreHistoryScoreReceivedDto

# TODO update the JSON string below
json = "{}"
# create an instance of MyScoreHistoryScoreReceivedDto from a JSON string
my_score_history_score_received_dto_instance = MyScoreHistoryScoreReceivedDto.from_json(json)
# print the JSON string representation of the object
print(MyScoreHistoryScoreReceivedDto.to_json())

# convert the object into a dict
my_score_history_score_received_dto_dict = my_score_history_score_received_dto_instance.to_dict()
# create an instance of MyScoreHistoryScoreReceivedDto from a dict
my_score_history_score_received_dto_from_dict = MyScoreHistoryScoreReceivedDto.from_dict(my_score_history_score_received_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


