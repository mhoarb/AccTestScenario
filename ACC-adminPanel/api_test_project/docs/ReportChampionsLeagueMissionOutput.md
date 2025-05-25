# ReportChampionsLeagueMissionOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**is_done** | **int** |  | [optional] 
**gem** | **int** |  | [optional] 
**mission_title** | **str** |  | [optional] 
**mission_request_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.report_champions_league_mission_output import ReportChampionsLeagueMissionOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportChampionsLeagueMissionOutput from a JSON string
report_champions_league_mission_output_instance = ReportChampionsLeagueMissionOutput.from_json(json)
# print the JSON string representation of the object
print(ReportChampionsLeagueMissionOutput.to_json())

# convert the object into a dict
report_champions_league_mission_output_dict = report_champions_league_mission_output_instance.to_dict()
# create an instance of ReportChampionsLeagueMissionOutput from a dict
report_champions_league_mission_output_from_dict = ReportChampionsLeagueMissionOutput.from_dict(report_champions_league_mission_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


