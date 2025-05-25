# AdminChampionsLeagueLuckyWheelOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**image_id** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **bool** |  | [optional] 
**gem_required_to_re_participate** | **int** |  | [optional] 
**free** | **bool** |  | [optional] 
**items** | [**List[AdminChampionsLeagueLuckyWheelItemOutput]**](AdminChampionsLeagueLuckyWheelItemOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.admin_champions_league_lucky_wheel_output import AdminChampionsLeagueLuckyWheelOutput

# TODO update the JSON string below
json = "{}"
# create an instance of AdminChampionsLeagueLuckyWheelOutput from a JSON string
admin_champions_league_lucky_wheel_output_instance = AdminChampionsLeagueLuckyWheelOutput.from_json(json)
# print the JSON string representation of the object
print(AdminChampionsLeagueLuckyWheelOutput.to_json())

# convert the object into a dict
admin_champions_league_lucky_wheel_output_dict = admin_champions_league_lucky_wheel_output_instance.to_dict()
# create an instance of AdminChampionsLeagueLuckyWheelOutput from a dict
admin_champions_league_lucky_wheel_output_from_dict = AdminChampionsLeagueLuckyWheelOutput.from_dict(admin_champions_league_lucky_wheel_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


