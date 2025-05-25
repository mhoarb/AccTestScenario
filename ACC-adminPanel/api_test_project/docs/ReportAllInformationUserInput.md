# ReportAllInformationUserInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**national_id** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**marital_status** | **str** |  | [optional] 
**education** | **str** |  | [optional] 
**customer_type** | **str** |  | [optional] 
**branch_id** | **int** |  | [optional] 
**terminal_id** | **str** |  | [optional] 
**account_id** | **str** |  | [optional] 
**acceptor** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.report_all_information_user_input import ReportAllInformationUserInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportAllInformationUserInput from a JSON string
report_all_information_user_input_instance = ReportAllInformationUserInput.from_json(json)
# print the JSON string representation of the object
print(ReportAllInformationUserInput.to_json())

# convert the object into a dict
report_all_information_user_input_dict = report_all_information_user_input_instance.to_dict()
# create an instance of ReportAllInformationUserInput from a dict
report_all_information_user_input_from_dict = ReportAllInformationUserInput.from_dict(report_all_information_user_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


