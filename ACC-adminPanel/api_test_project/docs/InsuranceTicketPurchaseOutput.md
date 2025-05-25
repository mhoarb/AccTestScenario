# InsuranceTicketPurchaseOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**purchase_code** | **str** |  | [optional] 
**event_time** | **datetime** |  | [optional] 
**purchase_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.insurance_ticket_purchase_output import InsuranceTicketPurchaseOutput

# TODO update the JSON string below
json = "{}"
# create an instance of InsuranceTicketPurchaseOutput from a JSON string
insurance_ticket_purchase_output_instance = InsuranceTicketPurchaseOutput.from_json(json)
# print the JSON string representation of the object
print(InsuranceTicketPurchaseOutput.to_json())

# convert the object into a dict
insurance_ticket_purchase_output_dict = insurance_ticket_purchase_output_instance.to_dict()
# create an instance of InsuranceTicketPurchaseOutput from a dict
insurance_ticket_purchase_output_from_dict = InsuranceTicketPurchaseOutput.from_dict(insurance_ticket_purchase_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


