# AdminChampionsLeagueLuckyWheelItemOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**lucky_wheel** | **int** |  | [optional] 
**prize_title** | **str** |  | [optional] 
**real_percent** | **int** |  | [optional] 
**value** | **int** |  | [optional] 
**display_percent** | **int** |  | [optional] 
**prize_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.admin_champions_league_lucky_wheel_item_output import AdminChampionsLeagueLuckyWheelItemOutput

# TODO update the JSON string below
json = "{}"
# create an instance of AdminChampionsLeagueLuckyWheelItemOutput from a JSON string
admin_champions_league_lucky_wheel_item_output_instance = AdminChampionsLeagueLuckyWheelItemOutput.from_json(json)
# print the JSON string representation of the object
print(AdminChampionsLeagueLuckyWheelItemOutput.to_json())

# convert the object into a dict
admin_champions_league_lucky_wheel_item_output_dict = admin_champions_league_lucky_wheel_item_output_instance.to_dict()
# create an instance of AdminChampionsLeagueLuckyWheelItemOutput from a dict
admin_champions_league_lucky_wheel_item_output_from_dict = AdminChampionsLeagueLuckyWheelItemOutput.from_dict(admin_champions_league_lucky_wheel_item_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


