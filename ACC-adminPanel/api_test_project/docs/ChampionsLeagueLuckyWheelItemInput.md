# ChampionsLeagueLuckyWheelItemInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prize_title** | **str** |  | 
**display_percent** | **int** |  | 
**real_percent** | **int** |  | 
**value** | **int** |  | [optional] 
**prize_type** | **str** |  | 

## Example

```python
from openapi_client.models.champions_league_lucky_wheel_item_input import ChampionsLeagueLuckyWheelItemInput

# TODO update the JSON string below
json = "{}"
# create an instance of ChampionsLeagueLuckyWheelItemInput from a JSON string
champions_league_lucky_wheel_item_input_instance = ChampionsLeagueLuckyWheelItemInput.from_json(json)
# print the JSON string representation of the object
print(ChampionsLeagueLuckyWheelItemInput.to_json())

# convert the object into a dict
champions_league_lucky_wheel_item_input_dict = champions_league_lucky_wheel_item_input_instance.to_dict()
# create an instance of ChampionsLeagueLuckyWheelItemInput from a dict
champions_league_lucky_wheel_item_input_from_dict = ChampionsLeagueLuckyWheelItemInput.from_dict(champions_league_lucky_wheel_item_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


