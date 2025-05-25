# PagePurchaseTicketOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_elements** | **int** |  | [optional] 
**total_pages** | **int** |  | [optional] 
**size** | **int** |  | [optional] 
**content** | [**List[PurchaseTicketOutput]**](PurchaseTicketOutput.md) |  | [optional] 
**number** | **int** |  | [optional] 
**sort** | [**Sort**](Sort.md) |  | [optional] 
**pageable** | [**Pageable**](Pageable.md) |  | [optional] 
**number_of_elements** | **int** |  | [optional] 
**first** | **bool** |  | [optional] 
**last** | **bool** |  | [optional] 
**empty** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.page_purchase_ticket_output import PagePurchaseTicketOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PagePurchaseTicketOutput from a JSON string
page_purchase_ticket_output_instance = PagePurchaseTicketOutput.from_json(json)
# print the JSON string representation of the object
print(PagePurchaseTicketOutput.to_json())

# convert the object into a dict
page_purchase_ticket_output_dict = page_purchase_ticket_output_instance.to_dict()
# create an instance of PagePurchaseTicketOutput from a dict
page_purchase_ticket_output_from_dict = PagePurchaseTicketOutput.from_dict(page_purchase_ticket_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


