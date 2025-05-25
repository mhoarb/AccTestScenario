# ReportGiftUserOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gift_count** | **int** |  | [optional] 
**from_user_first_name** | **str** |  | [optional] 
**from_user_last_name** | **str** |  | [optional] 
**to_user_first_name** | **str** |  | [optional] 
**to_user_last_name** | **str** |  | [optional] 
**from_user_cif** | **int** |  | [optional] 
**to_user_cif** | **int** |  | [optional] 
**from_user_customer_level** | **str** |  | [optional] 
**to_user_customer_level** | **str** |  | [optional] 
**from_user_mobile_number** | **str** |  | [optional] 
**to_user_mobile_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.report_gift_user_output import ReportGiftUserOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportGiftUserOutput from a JSON string
report_gift_user_output_instance = ReportGiftUserOutput.from_json(json)
# print the JSON string representation of the object
print(ReportGiftUserOutput.to_json())

# convert the object into a dict
report_gift_user_output_dict = report_gift_user_output_instance.to_dict()
# create an instance of ReportGiftUserOutput from a dict
report_gift_user_output_from_dict = ReportGiftUserOutput.from_dict(report_gift_user_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


