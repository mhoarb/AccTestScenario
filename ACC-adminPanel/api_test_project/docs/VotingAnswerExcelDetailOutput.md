# VotingAnswerExcelDetailOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**national_id** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**family_name** | **str** |  | [optional] 
**username** | **str** |  | [optional] 
**score** | **int** |  | [optional] 
**gem** | **int** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**voting_option_title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.voting_answer_excel_detail_output import VotingAnswerExcelDetailOutput

# TODO update the JSON string below
json = "{}"
# create an instance of VotingAnswerExcelDetailOutput from a JSON string
voting_answer_excel_detail_output_instance = VotingAnswerExcelDetailOutput.from_json(json)
# print the JSON string representation of the object
print(VotingAnswerExcelDetailOutput.to_json())

# convert the object into a dict
voting_answer_excel_detail_output_dict = voting_answer_excel_detail_output_instance.to_dict()
# create an instance of VotingAnswerExcelDetailOutput from a dict
voting_answer_excel_detail_output_from_dict = VotingAnswerExcelDetailOutput.from_dict(voting_answer_excel_detail_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


