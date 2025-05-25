# ReportAppUserOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_number** | **int** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**sign_up_date** | **datetime** |  | [optional] 
**sex** | **str** |  | [optional] 
**open_branch** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.report_app_user_output import ReportAppUserOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportAppUserOutput from a JSON string
report_app_user_output_instance = ReportAppUserOutput.from_json(json)
# print the JSON string representation of the object
print(ReportAppUserOutput.to_json())

# convert the object into a dict
report_app_user_output_dict = report_app_user_output_instance.to_dict()
# create an instance of ReportAppUserOutput from a dict
report_app_user_output_from_dict = ReportAppUserOutput.from_dict(report_app_user_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


