# ReportUsersGemOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**sum_lucky_wheel_decreasing** | **int** |  | [optional] 
**meh_tar** | **int** |  | [optional] 
**accelerator5** | **int** |  | [optional] 
**accelerator8** | **int** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**customer_level** | **str** |  | [optional] 
**sum_lucky_wheel_incremental** | **int** |  | [optional] 
**sum_done_mission_participate_incremental** | **int** |  | [optional] 
**shamsi_date** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.report_users_gem_output import ReportUsersGemOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportUsersGemOutput from a JSON string
report_users_gem_output_instance = ReportUsersGemOutput.from_json(json)
# print the JSON string representation of the object
print(ReportUsersGemOutput.to_json())

# convert the object into a dict
report_users_gem_output_dict = report_users_gem_output_instance.to_dict()
# create an instance of ReportUsersGemOutput from a dict
report_users_gem_output_from_dict = ReportUsersGemOutput.from_dict(report_users_gem_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


