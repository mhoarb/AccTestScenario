# PayBillInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bill_id** | **str** |  | 
**payment_id** | **str** |  | 

## Example

```python
from openapi_client.models.pay_bill_input import PayBillInput

# TODO update the JSON string below
json = "{}"
# create an instance of PayBillInput from a JSON string
pay_bill_input_instance = PayBillInput.from_json(json)
# print the JSON string representation of the object
print(PayBillInput.to_json())

# convert the object into a dict
pay_bill_input_dict = pay_bill_input_instance.to_dict()
# create an instance of PayBillInput from a dict
pay_bill_input_from_dict = PayBillInput.from_dict(pay_bill_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


