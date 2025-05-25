# LotteryStartOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lottery_info** | [**LotteryOutput**](LotteryOutput.md) |  | [optional] 
**lottery_chance_output_list** | [**List[UserLotteryChanceOutput]**](UserLotteryChanceOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.lottery_start_output import LotteryStartOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LotteryStartOutput from a JSON string
lottery_start_output_instance = LotteryStartOutput.from_json(json)
# print the JSON string representation of the object
print(LotteryStartOutput.to_json())

# convert the object into a dict
lottery_start_output_dict = lottery_start_output_instance.to_dict()
# create an instance of LotteryStartOutput from a dict
lottery_start_output_from_dict = LotteryStartOutput.from_dict(lottery_start_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


