# ReportChampionsLeagueMissionInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**from_mission_request_date** | **datetime** |  | [optional] 
**until_mission_request_date** | **datetime** |  | [optional] 
**is_done** | **bool** |  | [optional] 
**from_gem** | **int** |  | [optional] 
**until_gem** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.report_champions_league_mission_input import ReportChampionsLeagueMissionInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportChampionsLeagueMissionInput from a JSON string
report_champions_league_mission_input_instance = ReportChampionsLeagueMissionInput.from_json(json)
# print the JSON string representation of the object
print(ReportChampionsLeagueMissionInput.to_json())

# convert the object into a dict
report_champions_league_mission_input_dict = report_champions_league_mission_input_instance.to_dict()
# create an instance of ReportChampionsLeagueMissionInput from a dict
report_champions_league_mission_input_from_dict = ReportChampionsLeagueMissionInput.from_dict(report_champions_league_mission_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


