# UserLotteryParticipateOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lottery_id** | **int** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**national_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_lottery_participate_output import UserLotteryParticipateOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserLotteryParticipateOutput from a JSON string
user_lottery_participate_output_instance = UserLotteryParticipateOutput.from_json(json)
# print the JSON string representation of the object
print(UserLotteryParticipateOutput.to_json())

# convert the object into a dict
user_lottery_participate_output_dict = user_lottery_participate_output_instance.to_dict()
# create an instance of UserLotteryParticipateOutput from a dict
user_lottery_participate_output_from_dict = UserLotteryParticipateOutput.from_dict(user_lottery_participate_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


