# MissionOptionalRequirementOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**score_type** | **str** |  | [optional] 
**target_id** | **int** |  | [optional] 
**needed_score** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.mission_optional_requirement_output import MissionOptionalRequirementOutput

# TODO update the JSON string below
json = "{}"
# create an instance of MissionOptionalRequirementOutput from a JSON string
mission_optional_requirement_output_instance = MissionOptionalRequirementOutput.from_json(json)
# print the JSON string representation of the object
print(MissionOptionalRequirementOutput.to_json())

# convert the object into a dict
mission_optional_requirement_output_dict = mission_optional_requirement_output_instance.to_dict()
# create an instance of MissionOptionalRequirementOutput from a dict
mission_optional_requirement_output_from_dict = MissionOptionalRequirementOutput.from_dict(mission_optional_requirement_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


