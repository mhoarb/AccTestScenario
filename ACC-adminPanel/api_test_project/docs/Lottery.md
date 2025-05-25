# Lottery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**title** | **str** |  | 
**required_score** | **int** |  | [optional] 
**description** | **str** |  | 
**user_level** | **str** |  | 
**purchase_center_type** | **str** |  | 
**image_id** | **int** |  | 
**lottery_conditions** | **str** |  | 
**lottery_end_time** | **datetime** |  | 
**is_finish** | **bool** |  | [optional] 
**lottery_type** | **str** |  | 
**allow_show_winner** | **bool** |  | [optional] 
**prize_titles** | [**List[PrizeTitle]**](PrizeTitle.md) |  | [optional] 
**prizes** | [**List[Prize]**](Prize.md) |  | [optional] 

## Example

```python
from openapi_client.models.lottery import Lottery

# TODO update the JSON string below
json = "{}"
# create an instance of Lottery from a JSON string
lottery_instance = Lottery.from_json(json)
# print the JSON string representation of the object
print(Lottery.to_json())

# convert the object into a dict
lottery_dict = lottery_instance.to_dict()
# create an instance of Lottery from a dict
lottery_from_dict = Lottery.from_dict(lottery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


