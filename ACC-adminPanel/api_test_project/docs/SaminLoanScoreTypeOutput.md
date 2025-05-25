# SaminLoanScoreTypeOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score_type_name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**score** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.samin_loan_score_type_output import SaminLoanScoreTypeOutput

# TODO update the JSON string below
json = "{}"
# create an instance of SaminLoanScoreTypeOutput from a JSON string
samin_loan_score_type_output_instance = SaminLoanScoreTypeOutput.from_json(json)
# print the JSON string representation of the object
print(SaminLoanScoreTypeOutput.to_json())

# convert the object into a dict
samin_loan_score_type_output_dict = samin_loan_score_type_output_instance.to_dict()
# create an instance of SaminLoanScoreTypeOutput from a dict
samin_loan_score_type_output_from_dict = SaminLoanScoreTypeOutput.from_dict(samin_loan_score_type_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


