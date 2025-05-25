# ReportLoginUserInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**from_login_date** | **datetime** |  | [optional] 
**to_login_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.report_login_user_input import ReportLoginUserInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportLoginUserInput from a JSON string
report_login_user_input_instance = ReportLoginUserInput.from_json(json)
# print the JSON string representation of the object
print(ReportLoginUserInput.to_json())

# convert the object into a dict
report_login_user_input_dict = report_login_user_input_instance.to_dict()
# create an instance of ReportLoginUserInput from a dict
report_login_user_input_from_dict = ReportLoginUserInput.from_dict(report_login_user_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


