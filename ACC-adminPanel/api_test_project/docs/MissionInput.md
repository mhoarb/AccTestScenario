# MissionInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mandatory_requirements** | [**List[MissionMandatoryRequirementInput]**](MissionMandatoryRequirementInput.md) |  | [optional] 
**prerequisite_missions_id** | **List[int]** |  | [optional] 
**start_date** | **datetime** |  | 
**end_date** | **datetime** |  | 
**gems** | **int** |  | 
**title** | **str** |  | 
**description** | **str** |  | 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.mission_input import MissionInput

# TODO update the JSON string below
json = "{}"
# create an instance of MissionInput from a JSON string
mission_input_instance = MissionInput.from_json(json)
# print the JSON string representation of the object
print(MissionInput.to_json())

# convert the object into a dict
mission_input_dict = mission_input_instance.to_dict()
# create an instance of MissionInput from a dict
mission_input_from_dict = MissionInput.from_dict(mission_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


