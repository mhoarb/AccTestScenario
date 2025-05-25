# OnlineCenterTicketPurchaseOutput


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
from openapi_client.models.online_center_ticket_purchase_output import OnlineCenterTicketPurchaseOutput

# TODO update the JSON string below
json = "{}"
# create an instance of OnlineCenterTicketPurchaseOutput from a JSON string
online_center_ticket_purchase_output_instance = OnlineCenterTicketPurchaseOutput.from_json(json)
# print the JSON string representation of the object
print(OnlineCenterTicketPurchaseOutput.to_json())

# convert the object into a dict
online_center_ticket_purchase_output_dict = online_center_ticket_purchase_output_instance.to_dict()
# create an instance of OnlineCenterTicketPurchaseOutput from a dict
online_center_ticket_purchase_output_from_dict = OnlineCenterTicketPurchaseOutput.from_dict(online_center_ticket_purchase_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


