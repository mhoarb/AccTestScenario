# ReportLuckyWheelParticipateOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**prize_title** | **str** |  | [optional] 
**customer_number** | **int** |  | [optional] 
**spin_sum** | **int** |  | [optional] 
**spin_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.report_lucky_wheel_participate_output import ReportLuckyWheelParticipateOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportLuckyWheelParticipateOutput from a JSON string
report_lucky_wheel_participate_output_instance = ReportLuckyWheelParticipateOutput.from_json(json)
# print the JSON string representation of the object
print(ReportLuckyWheelParticipateOutput.to_json())

# convert the object into a dict
report_lucky_wheel_participate_output_dict = report_lucky_wheel_participate_output_instance.to_dict()
# create an instance of ReportLuckyWheelParticipateOutput from a dict
report_lucky_wheel_participate_output_from_dict = ReportLuckyWheelParticipateOutput.from_dict(report_lucky_wheel_participate_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


