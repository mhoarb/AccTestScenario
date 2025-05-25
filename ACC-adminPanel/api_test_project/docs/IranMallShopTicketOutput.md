# IranMallShopTicketOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**category_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**rate** | **float** |  | [optional] 
**contact_information** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.iran_mall_shop_ticket_output import IranMallShopTicketOutput

# TODO update the JSON string below
json = "{}"
# create an instance of IranMallShopTicketOutput from a JSON string
iran_mall_shop_ticket_output_instance = IranMallShopTicketOutput.from_json(json)
# print the JSON string representation of the object
print(IranMallShopTicketOutput.to_json())

# convert the object into a dict
iran_mall_shop_ticket_output_dict = iran_mall_shop_ticket_output_instance.to_dict()
# create an instance of IranMallShopTicketOutput from a dict
iran_mall_shop_ticket_output_from_dict = IranMallShopTicketOutput.from_dict(iran_mall_shop_ticket_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


