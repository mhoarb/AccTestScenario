# ReportUserBadgeInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**badge_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.report_user_badge_input import ReportUserBadgeInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportUserBadgeInput from a JSON string
report_user_badge_input_instance = ReportUserBadgeInput.from_json(json)
# print the JSON string representation of the object
print(ReportUserBadgeInput.to_json())

# convert the object into a dict
report_user_badge_input_dict = report_user_badge_input_instance.to_dict()
# create an instance of ReportUserBadgeInput from a dict
report_user_badge_input_from_dict = ReportUserBadgeInput.from_dict(report_user_badge_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


