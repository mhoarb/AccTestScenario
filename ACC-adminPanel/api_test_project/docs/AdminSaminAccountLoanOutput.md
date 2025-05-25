# AdminSaminAccountLoanOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score_type_name** | **str** |  | [optional] 
**score_type_description** | **str** |  | [optional] 
**rate** | **str** |  | [optional] 
**refund_period** | **str** |  | [optional] 
**repayment_month** | **str** |  | [optional] 
**value** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.admin_samin_account_loan_output import AdminSaminAccountLoanOutput

# TODO update the JSON string below
json = "{}"
# create an instance of AdminSaminAccountLoanOutput from a JSON string
admin_samin_account_loan_output_instance = AdminSaminAccountLoanOutput.from_json(json)
# print the JSON string representation of the object
print(AdminSaminAccountLoanOutput.to_json())

# convert the object into a dict
admin_samin_account_loan_output_dict = admin_samin_account_loan_output_instance.to_dict()
# create an instance of AdminSaminAccountLoanOutput from a dict
admin_samin_account_loan_output_from_dict = AdminSaminAccountLoanOutput.from_dict(admin_samin_account_loan_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


