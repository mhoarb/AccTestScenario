# OnlineCenterTicketOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**category_id** | **int** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**rate** | **float** |  | [optional] 
**required_score** | **int** |  | [optional] 
**discount_description** | **str** |  | [optional] 
**expires_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.online_center_ticket_output import OnlineCenterTicketOutput

# TODO update the JSON string below
json = "{}"
# create an instance of OnlineCenterTicketOutput from a JSON string
online_center_ticket_output_instance = OnlineCenterTicketOutput.from_json(json)
# print the JSON string representation of the object
print(OnlineCenterTicketOutput.to_json())

# convert the object into a dict
online_center_ticket_output_dict = online_center_ticket_output_instance.to_dict()
# create an instance of OnlineCenterTicketOutput from a dict
online_center_ticket_output_from_dict = OnlineCenterTicketOutput.from_dict(online_center_ticket_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


