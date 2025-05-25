# MissionMandatoryRequirementOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**optional_requirements** | [**List[MissionOptionalRequirementOutput]**](MissionOptionalRequirementOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.mission_mandatory_requirement_output import MissionMandatoryRequirementOutput

# TODO update the JSON string below
json = "{}"
# create an instance of MissionMandatoryRequirementOutput from a JSON string
mission_mandatory_requirement_output_instance = MissionMandatoryRequirementOutput.from_json(json)
# print the JSON string representation of the object
print(MissionMandatoryRequirementOutput.to_json())

# convert the object into a dict
mission_mandatory_requirement_output_dict = mission_mandatory_requirement_output_instance.to_dict()
# create an instance of MissionMandatoryRequirementOutput from a dict
mission_mandatory_requirement_output_from_dict = MissionMandatoryRequirementOutput.from_dict(mission_mandatory_requirement_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


