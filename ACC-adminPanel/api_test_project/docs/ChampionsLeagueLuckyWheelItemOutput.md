# ChampionsLeagueLuckyWheelItemOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**lucky_wheel** | **int** |  | [optional] 
**prize_title** | **str** |  | [optional] 
**display_percent** | **int** |  | [optional] 
**prize_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.champions_league_lucky_wheel_item_output import ChampionsLeagueLuckyWheelItemOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ChampionsLeagueLuckyWheelItemOutput from a JSON string
champions_league_lucky_wheel_item_output_instance = ChampionsLeagueLuckyWheelItemOutput.from_json(json)
# print the JSON string representation of the object
print(ChampionsLeagueLuckyWheelItemOutput.to_json())

# convert the object into a dict
champions_league_lucky_wheel_item_output_dict = champions_league_lucky_wheel_item_output_instance.to_dict()
# create an instance of ChampionsLeagueLuckyWheelItemOutput from a dict
champions_league_lucky_wheel_item_output_from_dict = ChampionsLeagueLuckyWheelItemOutput.from_dict(champions_league_lucky_wheel_item_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


