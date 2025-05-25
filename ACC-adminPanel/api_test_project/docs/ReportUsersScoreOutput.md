# ReportUsersScoreOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**open_branch** | **int** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**customer_level** | **str** |  | [optional] 
**sex** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**sign_up_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.report_users_score_output import ReportUsersScoreOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportUsersScoreOutput from a JSON string
report_users_score_output_instance = ReportUsersScoreOutput.from_json(json)
# print the JSON string representation of the object
print(ReportUsersScoreOutput.to_json())

# convert the object into a dict
report_users_score_output_dict = report_users_score_output_instance.to_dict()
# create an instance of ReportUsersScoreOutput from a dict
report_users_score_output_from_dict = ReportUsersScoreOutput.from_dict(report_users_score_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


