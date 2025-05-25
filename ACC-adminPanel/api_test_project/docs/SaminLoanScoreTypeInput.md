# SaminLoanScoreTypeInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | **int** |  | [optional] 
**refund** | **int** |  | [optional] 
**period** | **int** |  | [optional] 
**account_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.samin_loan_score_type_input import SaminLoanScoreTypeInput

# TODO update the JSON string below
json = "{}"
# create an instance of SaminLoanScoreTypeInput from a JSON string
samin_loan_score_type_input_instance = SaminLoanScoreTypeInput.from_json(json)
# print the JSON string representation of the object
print(SaminLoanScoreTypeInput.to_json())

# convert the object into a dict
samin_loan_score_type_input_dict = samin_loan_score_type_input_instance.to_dict()
# create an instance of SaminLoanScoreTypeInput from a dict
samin_loan_score_type_input_from_dict = SaminLoanScoreTypeInput.from_dict(samin_loan_score_type_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


