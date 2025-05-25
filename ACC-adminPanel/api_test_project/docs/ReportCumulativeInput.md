# ReportCumulativeInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_date** | **datetime** |  | [optional] 
**to_date** | **datetime** |  | [optional] 
**user_level_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.report_cumulative_input import ReportCumulativeInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportCumulativeInput from a JSON string
report_cumulative_input_instance = ReportCumulativeInput.from_json(json)
# print the JSON string representation of the object
print(ReportCumulativeInput.to_json())

# convert the object into a dict
report_cumulative_input_dict = report_cumulative_input_instance.to_dict()
# create an instance of ReportCumulativeInput from a dict
report_cumulative_input_from_dict = ReportCumulativeInput.from_dict(report_cumulative_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


