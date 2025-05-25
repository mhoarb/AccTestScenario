# ReportLuckyWheelParticipateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**prize_title** | **str** |  | [optional] 
**from_date** | **datetime** |  | [optional] 
**to_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.report_lucky_wheel_participate_input import ReportLuckyWheelParticipateInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportLuckyWheelParticipateInput from a JSON string
report_lucky_wheel_participate_input_instance = ReportLuckyWheelParticipateInput.from_json(json)
# print the JSON string representation of the object
print(ReportLuckyWheelParticipateInput.to_json())

# convert the object into a dict
report_lucky_wheel_participate_input_dict = report_lucky_wheel_participate_input_instance.to_dict()
# create an instance of ReportLuckyWheelParticipateInput from a dict
report_lucky_wheel_participate_input_from_dict = ReportLuckyWheelParticipateInput.from_dict(report_lucky_wheel_participate_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


