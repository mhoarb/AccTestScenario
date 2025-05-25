# MissionParticipateOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**gems** | **int** |  | [optional] 
**end_date** | **datetime** |  | [optional] 
**is_done** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.mission_participate_output import MissionParticipateOutput

# TODO update the JSON string below
json = "{}"
# create an instance of MissionParticipateOutput from a JSON string
mission_participate_output_instance = MissionParticipateOutput.from_json(json)
# print the JSON string representation of the object
print(MissionParticipateOutput.to_json())

# convert the object into a dict
mission_participate_output_dict = mission_participate_output_instance.to_dict()
# create an instance of MissionParticipateOutput from a dict
mission_participate_output_from_dict = MissionParticipateOutput.from_dict(mission_participate_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


