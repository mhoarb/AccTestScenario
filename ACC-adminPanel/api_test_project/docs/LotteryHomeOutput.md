# LotteryHomeOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lottery_banners** | [**List[BannerOutput]**](BannerOutput.md) |  | [optional] 
**lottery_tickets** | [**List[LotteryTicketOutput]**](LotteryTicketOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.lottery_home_output import LotteryHomeOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LotteryHomeOutput from a JSON string
lottery_home_output_instance = LotteryHomeOutput.from_json(json)
# print the JSON string representation of the object
print(LotteryHomeOutput.to_json())

# convert the object into a dict
lottery_home_output_dict = lottery_home_output_instance.to_dict()
# create an instance of LotteryHomeOutput from a dict
lottery_home_output_from_dict = LotteryHomeOutput.from_dict(lottery_home_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


