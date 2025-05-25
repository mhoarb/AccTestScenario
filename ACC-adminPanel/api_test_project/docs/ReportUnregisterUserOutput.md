# ReportUnregisterUserOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**customer_level** | **str** |  | [optional] 
**sex** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.report_unregister_user_output import ReportUnregisterUserOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportUnregisterUserOutput from a JSON string
report_unregister_user_output_instance = ReportUnregisterUserOutput.from_json(json)
# print the JSON string representation of the object
print(ReportUnregisterUserOutput.to_json())

# convert the object into a dict
report_unregister_user_output_dict = report_unregister_user_output_instance.to_dict()
# create an instance of ReportUnregisterUserOutput from a dict
report_unregister_user_output_from_dict = ReportUnregisterUserOutput.from_dict(report_unregister_user_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


