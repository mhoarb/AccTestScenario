# LotteryOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**image_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**lottery_conditions** | **str** |  | [optional] 
**lottery_end_time** | **datetime** |  | [optional] 
**required_score_for_each_chance** | **int** |  | [optional] 
**finish** | **bool** |  | [optional] 
**allow_show_winner** | **bool** |  | [optional] 
**prizes** | [**List[PrizeOutput]**](PrizeOutput.md) |  | [optional] 
**prizes_title** | [**List[PrizeTitleOutput]**](PrizeTitleOutput.md) |  | [optional] 
**total_participants** | **int** |  | [optional] 
**total_chance** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.lottery_output import LotteryOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LotteryOutput from a JSON string
lottery_output_instance = LotteryOutput.from_json(json)
# print the JSON string representation of the object
print(LotteryOutput.to_json())

# convert the object into a dict
lottery_output_dict = lottery_output_instance.to_dict()
# create an instance of LotteryOutput from a dict
lottery_output_from_dict = LotteryOutput.from_dict(lottery_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


