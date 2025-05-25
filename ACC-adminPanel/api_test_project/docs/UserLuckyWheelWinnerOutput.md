# UserLuckyWheelWinnerOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**lucky_wheel_id** | **int** |  | [optional] 
**prize_id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**family_name** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**free_participate** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.user_lucky_wheel_winner_output import UserLuckyWheelWinnerOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserLuckyWheelWinnerOutput from a JSON string
user_lucky_wheel_winner_output_instance = UserLuckyWheelWinnerOutput.from_json(json)
# print the JSON string representation of the object
print(UserLuckyWheelWinnerOutput.to_json())

# convert the object into a dict
user_lucky_wheel_winner_output_dict = user_lucky_wheel_winner_output_instance.to_dict()
# create an instance of UserLuckyWheelWinnerOutput from a dict
user_lucky_wheel_winner_output_from_dict = UserLuckyWheelWinnerOutput.from_dict(user_lucky_wheel_winner_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


