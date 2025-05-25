# LotteryTicketOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**image_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**lottery_end_time** | **datetime** |  | [optional] 
**finish** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.lottery_ticket_output import LotteryTicketOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LotteryTicketOutput from a JSON string
lottery_ticket_output_instance = LotteryTicketOutput.from_json(json)
# print the JSON string representation of the object
print(LotteryTicketOutput.to_json())

# convert the object into a dict
lottery_ticket_output_dict = lottery_ticket_output_instance.to_dict()
# create an instance of LotteryTicketOutput from a dict
lottery_ticket_output_from_dict = LotteryTicketOutput.from_dict(lottery_ticket_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


