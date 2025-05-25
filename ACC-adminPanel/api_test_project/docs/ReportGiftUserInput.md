# ReportGiftUserInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_user_first_name** | **str** |  | [optional] 
**from_user_last_name** | **str** |  | [optional] 
**to_user_first_name** | **str** |  | [optional] 
**to_user_last_name** | **str** |  | [optional] 
**from_user_cif** | **str** |  | [optional] 
**to_user_cif** | **str** |  | [optional] 
**from_user_customer_level** | **str** |  | [optional] 
**to_user_customer_level** | **str** |  | [optional] 
**from_user_mobile_number** | **str** |  | [optional] 
**to_user_mobile_number** | **str** |  | [optional] 
**from_date** | **datetime** |  | [optional] 
**to_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.report_gift_user_input import ReportGiftUserInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportGiftUserInput from a JSON string
report_gift_user_input_instance = ReportGiftUserInput.from_json(json)
# print the JSON string representation of the object
print(ReportGiftUserInput.to_json())

# convert the object into a dict
report_gift_user_input_dict = report_gift_user_input_instance.to_dict()
# create an instance of ReportGiftUserInput from a dict
report_gift_user_input_from_dict = ReportGiftUserInput.from_dict(report_gift_user_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


