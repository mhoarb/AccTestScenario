# ReportLoginUserOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**customer_number** | **int** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**login_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.report_login_user_output import ReportLoginUserOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportLoginUserOutput from a JSON string
report_login_user_output_instance = ReportLoginUserOutput.from_json(json)
# print the JSON string representation of the object
print(ReportLoginUserOutput.to_json())

# convert the object into a dict
report_login_user_output_dict = report_login_user_output_instance.to_dict()
# create an instance of ReportLoginUserOutput from a dict
report_login_user_output_from_dict = ReportLoginUserOutput.from_dict(report_login_user_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


