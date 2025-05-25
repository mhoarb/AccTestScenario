# PrizeWinnersInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prizes** | [**List[PrizeInput]**](PrizeInput.md) |  | 

## Example

```python
from openapi_client.models.prize_winners_input import PrizeWinnersInput

# TODO update the JSON string below
json = "{}"
# create an instance of PrizeWinnersInput from a JSON string
prize_winners_input_instance = PrizeWinnersInput.from_json(json)
# print the JSON string representation of the object
print(PrizeWinnersInput.to_json())

# convert the object into a dict
prize_winners_input_dict = prize_winners_input_instance.to_dict()
# create an instance of PrizeWinnersInput from a dict
prize_winners_input_from_dict = PrizeWinnersInput.from_dict(prize_winners_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


