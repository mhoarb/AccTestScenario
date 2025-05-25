# ChampionsLeagueLuckyWheelOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**image_id** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**gem_required_to_re_participate** | **int** |  | [optional] 
**free** | **bool** |  | [optional] 
**items** | [**List[ChampionsLeagueLuckyWheelItemOutput]**](ChampionsLeagueLuckyWheelItemOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.champions_league_lucky_wheel_output import ChampionsLeagueLuckyWheelOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ChampionsLeagueLuckyWheelOutput from a JSON string
champions_league_lucky_wheel_output_instance = ChampionsLeagueLuckyWheelOutput.from_json(json)
# print the JSON string representation of the object
print(ChampionsLeagueLuckyWheelOutput.to_json())

# convert the object into a dict
champions_league_lucky_wheel_output_dict = champions_league_lucky_wheel_output_instance.to_dict()
# create an instance of ChampionsLeagueLuckyWheelOutput from a dict
champions_league_lucky_wheel_output_from_dict = ChampionsLeagueLuckyWheelOutput.from_dict(champions_league_lucky_wheel_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


