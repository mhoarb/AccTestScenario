# AdminSaminAccountLoanInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**loan_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.admin_samin_account_loan_input import AdminSaminAccountLoanInput

# TODO update the JSON string below
json = "{}"
# create an instance of AdminSaminAccountLoanInput from a JSON string
admin_samin_account_loan_input_instance = AdminSaminAccountLoanInput.from_json(json)
# print the JSON string representation of the object
print(AdminSaminAccountLoanInput.to_json())

# convert the object into a dict
admin_samin_account_loan_input_dict = admin_samin_account_loan_input_instance.to_dict()
# create an instance of AdminSaminAccountLoanInput from a dict
admin_samin_account_loan_input_from_dict = AdminSaminAccountLoanInput.from_dict(admin_samin_account_loan_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


