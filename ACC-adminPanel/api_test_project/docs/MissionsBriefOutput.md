# MissionsBriefOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**gems** | **int** |  | [optional] 
**end_date** | **datetime** |  | [optional] 
**is_incentive_plan** | **bool** |  | [optional] 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.missions_brief_output import MissionsBriefOutput

# TODO update the JSON string below
json = "{}"
# create an instance of MissionsBriefOutput from a JSON string
missions_brief_output_instance = MissionsBriefOutput.from_json(json)
# print the JSON string representation of the object
print(MissionsBriefOutput.to_json())

# convert the object into a dict
missions_brief_output_dict = missions_brief_output_instance.to_dict()
# create an instance of MissionsBriefOutput from a dict
missions_brief_output_from_dict = MissionsBriefOutput.from_dict(missions_brief_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


