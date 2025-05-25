# LotteryParticipateOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**user_level** | **str** |  | [optional] 
**lottery_title** | **str** |  | [optional] 
**event_time** | **datetime** |  | [optional] 
**score_count** | **int** |  | [optional] 
**chance_score** | **int** |  | [optional] 
**participate_identifier** | **str** |  | [optional] 
**purchase_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.lottery_participate_output import LotteryParticipateOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LotteryParticipateOutput from a JSON string
lottery_participate_output_instance = LotteryParticipateOutput.from_json(json)
# print the JSON string representation of the object
print(LotteryParticipateOutput.to_json())

# convert the object into a dict
lottery_participate_output_dict = lottery_participate_output_instance.to_dict()
# create an instance of LotteryParticipateOutput from a dict
lottery_participate_output_from_dict = LotteryParticipateOutput.from_dict(lottery_participate_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


