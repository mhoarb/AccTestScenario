# PrizeTitle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**lottery** | [**Lottery**](Lottery.md) |  | 
**title** | **str** |  | 
**count** | **int** |  | 
**status** | **str** |  | 
**lottery_code** | **int** |  | 

## Example

```python
from openapi_client.models.prize_title import PrizeTitle

# TODO update the JSON string below
json = "{}"
# create an instance of PrizeTitle from a JSON string
prize_title_instance = PrizeTitle.from_json(json)
# print the JSON string representation of the object
print(PrizeTitle.to_json())

# convert the object into a dict
prize_title_dict = prize_title_instance.to_dict()
# create an instance of PrizeTitle from a dict
prize_title_from_dict = PrizeTitle.from_dict(prize_title_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


