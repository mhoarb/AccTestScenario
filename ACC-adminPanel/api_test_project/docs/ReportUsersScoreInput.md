# ReportUsersScoreInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_number** | **int** |  | [optional] 
**customer_level** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**from_sign_up_date** | **datetime** |  | [optional] 
**until_sign_up_date** | **datetime** |  | [optional] 
**sex** | **str** |  | [optional] 
**open_branch** | **int** |  | [optional] 
**terminal_id** | **str** |  | [optional] 
**account_id** | **str** |  | [optional] 
**is_acceptor** | **bool** |  | [optional] 
**from_date** | **datetime** |  | 
**until_date** | **datetime** |  | 
**var_field** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.report_users_score_input import ReportUsersScoreInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportUsersScoreInput from a JSON string
report_users_score_input_instance = ReportUsersScoreInput.from_json(json)
# print the JSON string representation of the object
print(ReportUsersScoreInput.to_json())

# convert the object into a dict
report_users_score_input_dict = report_users_score_input_instance.to_dict()
# create an instance of ReportUsersScoreInput from a dict
report_users_score_input_from_dict = ReportUsersScoreInput.from_dict(report_users_score_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


