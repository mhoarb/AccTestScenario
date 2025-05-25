# PrizeInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_rank** | **str** |  | 
**award_description** | **str** |  | 
**customer_id** | **str** |  | [optional] 
**prize_order** | **int** |  | 

## Example

```python
from openapi_client.models.prize_input import PrizeInput

# TODO update the JSON string below
json = "{}"
# create an instance of PrizeInput from a JSON string
prize_input_instance = PrizeInput.from_json(json)
# print the JSON string representation of the object
print(PrizeInput.to_json())

# convert the object into a dict
prize_input_dict = prize_input_instance.to_dict()
# create an instance of PrizeInput from a dict
prize_input_from_dict = PrizeInput.from_dict(prize_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


