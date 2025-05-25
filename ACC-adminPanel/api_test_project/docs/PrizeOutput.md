# PrizeOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**lottery_id** | **int** |  | [optional] 
**winner** | [**UserPrizeOutput**](UserPrizeOutput.md) |  | [optional] 
**user_id** | **int** |  | [optional] 
**user_name** | **str** |  | [optional] 
**user_family_name** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**user_score** | **int** |  | [optional] 
**user_gem** | **int** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**user_is_show_name** | **bool** |  | [optional] 
**user_national_id** | **str** |  | [optional] 
**user_mobile_phone** | **str** |  | [optional] 
**user_rank** | **str** |  | [optional] 
**award_description** | **str** |  | [optional] 
**prize_order** | **int** |  | [optional] 
**user_logged** | **bool** |  | [optional] 
**winner_index** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.prize_output import PrizeOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PrizeOutput from a JSON string
prize_output_instance = PrizeOutput.from_json(json)
# print the JSON string representation of the object
print(PrizeOutput.to_json())

# convert the object into a dict
prize_output_dict = prize_output_instance.to_dict()
# create an instance of PrizeOutput from a dict
prize_output_from_dict = PrizeOutput.from_dict(prize_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


