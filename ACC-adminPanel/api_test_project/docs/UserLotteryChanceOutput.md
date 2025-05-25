# UserLotteryChanceOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**national_id** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**chance** | **int** |  | [optional] 
**lottery_id** | **int** |  | [optional] 
**customer_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_lottery_chance_output import UserLotteryChanceOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserLotteryChanceOutput from a JSON string
user_lottery_chance_output_instance = UserLotteryChanceOutput.from_json(json)
# print the JSON string representation of the object
print(UserLotteryChanceOutput.to_json())

# convert the object into a dict
user_lottery_chance_output_dict = user_lottery_chance_output_instance.to_dict()
# create an instance of UserLotteryChanceOutput from a dict
user_lottery_chance_output_from_dict = UserLotteryChanceOutput.from_dict(user_lottery_chance_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


