# PurchaseTicketOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**discount_description** | **str** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**expire_date** | **datetime** |  | [optional] 
**purchase_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.purchase_ticket_output import PurchaseTicketOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseTicketOutput from a JSON string
purchase_ticket_output_instance = PurchaseTicketOutput.from_json(json)
# print the JSON string representation of the object
print(PurchaseTicketOutput.to_json())

# convert the object into a dict
purchase_ticket_output_dict = purchase_ticket_output_instance.to_dict()
# create an instance of PurchaseTicketOutput from a dict
purchase_ticket_output_from_dict = PurchaseTicketOutput.from_dict(purchase_ticket_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


