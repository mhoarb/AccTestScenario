# Prize


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**lottery** | [**Lottery**](Lottery.md) |  | 
**prize_title** | [**PrizeTitle**](PrizeTitle.md) |  | 
**winner** | [**UserAccount**](UserAccount.md) |  | [optional] 
**user_rank** | **str** |  | 
**award_description** | **str** |  | 
**prize_order** | **int** |  | 
**user_logged** | **bool** |  | [optional] 
**national_id** | **str** |  | [optional] 
**winner_index** | **str** |  | [optional] 
**user_phone** | **str** |  | [optional] 
**user_full_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.prize import Prize

# TODO update the JSON string below
json = "{}"
# create an instance of Prize from a JSON string
prize_instance = Prize.from_json(json)
# print the JSON string representation of the object
print(Prize.to_json())

# convert the object into a dict
prize_dict = prize_instance.to_dict()
# create an instance of Prize from a dict
prize_from_dict = Prize.from_dict(prize_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


