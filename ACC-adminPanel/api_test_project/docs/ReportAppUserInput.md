# ReportAppUserInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**from_sign_up_date** | **datetime** |  | [optional] 
**to_sign_up_date** | **datetime** |  | [optional] 
**sex** | **str** |  | [optional] 
**open_branch** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.report_app_user_input import ReportAppUserInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportAppUserInput from a JSON string
report_app_user_input_instance = ReportAppUserInput.from_json(json)
# print the JSON string representation of the object
print(ReportAppUserInput.to_json())

# convert the object into a dict
report_app_user_input_dict = report_app_user_input_instance.to_dict()
# create an instance of ReportAppUserInput from a dict
report_app_user_input_from_dict = ReportAppUserInput.from_dict(report_app_user_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


