# MissionOptionalRequirementInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**score_type** | **str** |  | 
**needed_score** | **int** |  | [optional] 
**target_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.mission_optional_requirement_input import MissionOptionalRequirementInput

# TODO update the JSON string below
json = "{}"
# create an instance of MissionOptionalRequirementInput from a JSON string
mission_optional_requirement_input_instance = MissionOptionalRequirementInput.from_json(json)
# print the JSON string representation of the object
print(MissionOptionalRequirementInput.to_json())

# convert the object into a dict
mission_optional_requirement_input_dict = mission_optional_requirement_input_instance.to_dict()
# create an instance of MissionOptionalRequirementInput from a dict
mission_optional_requirement_input_from_dict = MissionOptionalRequirementInput.from_dict(mission_optional_requirement_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


