# MissionMandatoryRequirementInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**optional_requirements** | [**List[MissionOptionalRequirementInput]**](MissionOptionalRequirementInput.md) |  | 

## Example

```python
from openapi_client.models.mission_mandatory_requirement_input import MissionMandatoryRequirementInput

# TODO update the JSON string below
json = "{}"
# create an instance of MissionMandatoryRequirementInput from a JSON string
mission_mandatory_requirement_input_instance = MissionMandatoryRequirementInput.from_json(json)
# print the JSON string representation of the object
print(MissionMandatoryRequirementInput.to_json())

# convert the object into a dict
mission_mandatory_requirement_input_dict = mission_mandatory_requirement_input_instance.to_dict()
# create an instance of MissionMandatoryRequirementInput from a dict
mission_mandatory_requirement_input_from_dict = MissionMandatoryRequirementInput.from_dict(mission_mandatory_requirement_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


