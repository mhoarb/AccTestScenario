# LotteryBlackListOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**level** | **str** |  | [optional] 
**create_date_time** | **datetime** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**lottery_title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.lottery_black_list_output import LotteryBlackListOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LotteryBlackListOutput from a JSON string
lottery_black_list_output_instance = LotteryBlackListOutput.from_json(json)
# print the JSON string representation of the object
print(LotteryBlackListOutput.to_json())

# convert the object into a dict
lottery_black_list_output_dict = lottery_black_list_output_instance.to_dict()
# create an instance of LotteryBlackListOutput from a dict
lottery_black_list_output_from_dict = LotteryBlackListOutput.from_dict(lottery_black_list_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


