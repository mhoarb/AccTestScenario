# ReportUnregisterUserInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**his_date** | **datetime** |  | 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**customer_level** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**sex** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.report_unregister_user_input import ReportUnregisterUserInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportUnregisterUserInput from a JSON string
report_unregister_user_input_instance = ReportUnregisterUserInput.from_json(json)
# print the JSON string representation of the object
print(ReportUnregisterUserInput.to_json())

# convert the object into a dict
report_unregister_user_input_dict = report_unregister_user_input_instance.to_dict()
# create an instance of ReportUnregisterUserInput from a dict
report_unregister_user_input_from_dict = ReportUnregisterUserInput.from_dict(report_unregister_user_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


