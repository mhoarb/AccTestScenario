# IranMallCinemaTicketPurchaseOutput


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
from openapi_client.models.iran_mall_cinema_ticket_purchase_output import IranMallCinemaTicketPurchaseOutput

# TODO update the JSON string below
json = "{}"
# create an instance of IranMallCinemaTicketPurchaseOutput from a JSON string
iran_mall_cinema_ticket_purchase_output_instance = IranMallCinemaTicketPurchaseOutput.from_json(json)
# print the JSON string representation of the object
print(IranMallCinemaTicketPurchaseOutput.to_json())

# convert the object into a dict
iran_mall_cinema_ticket_purchase_output_dict = iran_mall_cinema_ticket_purchase_output_instance.to_dict()
# create an instance of IranMallCinemaTicketPurchaseOutput from a dict
iran_mall_cinema_ticket_purchase_output_from_dict = IranMallCinemaTicketPurchaseOutput.from_dict(iran_mall_cinema_ticket_purchase_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


