# LotteryParticipateProfileOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**image_id** | **int** |  | [optional] 
**participate_time** | **datetime** |  | [optional] 
**lottery_title** | **str** |  | [optional] 
**chance_score** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.lottery_participate_profile_output import LotteryParticipateProfileOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LotteryParticipateProfileOutput from a JSON string
lottery_participate_profile_output_instance = LotteryParticipateProfileOutput.from_json(json)
# print the JSON string representation of the object
print(LotteryParticipateProfileOutput.to_json())

# convert the object into a dict
lottery_participate_profile_output_dict = lottery_participate_profile_output_instance.to_dict()
# create an instance of LotteryParticipateProfileOutput from a dict
lottery_participate_profile_output_from_dict = LotteryParticipateProfileOutput.from_dict(lottery_participate_profile_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


