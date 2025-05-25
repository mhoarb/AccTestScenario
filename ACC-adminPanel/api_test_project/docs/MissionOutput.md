# MissionOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**mandatory_requirements** | [**List[MissionMandatoryRequirementOutput]**](MissionMandatoryRequirementOutput.md) |  | [optional] 
**prerequisite_missions** | [**List[MissionOutput]**](MissionOutput.md) |  | [optional] 
**start_date** | **datetime** |  | [optional] 
**end_date** | **datetime** |  | [optional] 
**gems** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.mission_output import MissionOutput

# TODO update the JSON string below
json = "{}"
# create an instance of MissionOutput from a JSON string
mission_output_instance = MissionOutput.from_json(json)
# print the JSON string representation of the object
print(MissionOutput.to_json())

# convert the object into a dict
mission_output_dict = mission_output_instance.to_dict()
# create an instance of MissionOutput from a dict
mission_output_from_dict = MissionOutput.from_dict(mission_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


