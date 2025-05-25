# CardType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.card_type import CardType

# TODO update the JSON string below
json = "{}"
# create an instance of CardType from a JSON string
card_type_instance = CardType.from_json(json)
# print the JSON string representation of the object
print(CardType.to_json())

# convert the object into a dict
card_type_dict = card_type_instance.to_dict()
# create an instance of CardType from a dict
card_type_from_dict = CardType.from_dict(card_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


