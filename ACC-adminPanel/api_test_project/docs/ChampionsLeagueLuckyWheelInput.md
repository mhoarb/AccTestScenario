# ChampionsLeagueLuckyWheelInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_id** | **int** |  | 
**description** | **str** |  | [optional] 
**display** | **bool** |  | [optional] 
**gem_required_to_re_participate** | **int** |  | 
**items** | [**List[ChampionsLeagueLuckyWheelItemInput]**](ChampionsLeagueLuckyWheelItemInput.md) |  | 

## Example

```python
from openapi_client.models.champions_league_lucky_wheel_input import ChampionsLeagueLuckyWheelInput

# TODO update the JSON string below
json = "{}"
# create an instance of ChampionsLeagueLuckyWheelInput from a JSON string
champions_league_lucky_wheel_input_instance = ChampionsLeagueLuckyWheelInput.from_json(json)
# print the JSON string representation of the object
print(ChampionsLeagueLuckyWheelInput.to_json())

# convert the object into a dict
champions_league_lucky_wheel_input_dict = champions_league_lucky_wheel_input_instance.to_dict()
# create an instance of ChampionsLeagueLuckyWheelInput from a dict
champions_league_lucky_wheel_input_from_dict = ChampionsLeagueLuckyWheelInput.from_dict(champions_league_lucky_wheel_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


