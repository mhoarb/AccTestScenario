# ReportCumulativeOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_count** | **int** |  | [optional] 
**electronic** | **int** |  | [optional] 
**deposit** | **int** |  | [optional] 
**facilities** | **int** |  | [optional] 
**wage** | **int** |  | [optional] 
**communicative** | **int** |  | [optional] 
**zero_balance** | **int** |  | [optional] 
**spend_score** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.report_cumulative_output import ReportCumulativeOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportCumulativeOutput from a JSON string
report_cumulative_output_instance = ReportCumulativeOutput.from_json(json)
# print the JSON string representation of the object
print(ReportCumulativeOutput.to_json())

# convert the object into a dict
report_cumulative_output_dict = report_cumulative_output_instance.to_dict()
# create an instance of ReportCumulativeOutput from a dict
report_cumulative_output_from_dict = ReportCumulativeOutput.from_dict(report_cumulative_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


