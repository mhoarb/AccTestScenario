# ReportUsersGemInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_number** | **int** |  | [optional] 
**customer_level** | **str** |  | [optional] 
**from_date** | **datetime** |  | 
**until_date** | **datetime** |  | 

## Example

```python
from openapi_client.models.report_users_gem_input import ReportUsersGemInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportUsersGemInput from a JSON string
report_users_gem_input_instance = ReportUsersGemInput.from_json(json)
# print the JSON string representation of the object
print(ReportUsersGemInput.to_json())

# convert the object into a dict
report_users_gem_input_dict = report_users_gem_input_instance.to_dict()
# create an instance of ReportUsersGemInput from a dict
report_users_gem_input_from_dict = ReportUsersGemInput.from_dict(report_users_gem_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


