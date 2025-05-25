# PayBillVoucherOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_level** | **str** |  | [optional] 
**bill_id** | **str** |  | [optional] 
**reference_id** | **str** |  | [optional] 
**cost** | **int** |  | [optional] 
**score_count** | **int** |  | [optional] 
**bill_type** | **str** |  | [optional] 
**date_time** | **datetime** |  | [optional] 
**purchase_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.pay_bill_voucher_output import PayBillVoucherOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PayBillVoucherOutput from a JSON string
pay_bill_voucher_output_instance = PayBillVoucherOutput.from_json(json)
# print the JSON string representation of the object
print(PayBillVoucherOutput.to_json())

# convert the object into a dict
pay_bill_voucher_output_dict = pay_bill_voucher_output_instance.to_dict()
# create an instance of PayBillVoucherOutput from a dict
pay_bill_voucher_output_from_dict = PayBillVoucherOutput.from_dict(pay_bill_voucher_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


