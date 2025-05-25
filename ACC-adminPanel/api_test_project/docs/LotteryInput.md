# LotteryInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_id** | **int** |  | 
**title** | **str** |  | [optional] 
**description** | **str** |  | 
**lottery_conditions** | **str** |  | 
**lottery_end_time** | **datetime** |  | 
**allow_show_winner** | **bool** |  | [optional] 
**required_score_for_each_chance** | **int** |  | [optional] 
**prizes** | [**List[PrizeInput]**](PrizeInput.md) |  | [optional] 
**prizes_title** | [**List[PrizeTitle]**](PrizeTitle.md) |  | [optional] 

## Example

```python
from openapi_client.models.lottery_input import LotteryInput

# TODO update the JSON string below
json = "{}"
# create an instance of LotteryInput from a JSON string
lottery_input_instance = LotteryInput.from_json(json)
# print the JSON string representation of the object
print(LotteryInput.to_json())

# convert the object into a dict
lottery_input_dict = lottery_input_instance.to_dict()
# create an instance of LotteryInput from a dict
lottery_input_from_dict = LotteryInput.from_dict(lottery_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


