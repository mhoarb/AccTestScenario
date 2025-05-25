# PayBillOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**bill_id** | **str** |  | [optional] 
**payment_id** | **str** |  | [optional] 
**cost** | **int** |  | [optional] 
**score_count** | **int** |  | [optional] 
**bill_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.pay_bill_output import PayBillOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PayBillOutput from a JSON string
pay_bill_output_instance = PayBillOutput.from_json(json)
# print the JSON string representation of the object
print(PayBillOutput.to_json())

# convert the object into a dict
pay_bill_output_dict = pay_bill_output_instance.to_dict()
# create an instance of PayBillOutput from a dict
pay_bill_output_from_dict = PayBillOutput.from_dict(pay_bill_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


