# GiftToFriendInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** |  | 
**score_count** | **int** |  | 

## Example

```python
from openapi_client.models.gift_to_friend_input import GiftToFriendInput

# TODO update the JSON string below
json = "{}"
# create an instance of GiftToFriendInput from a JSON string
gift_to_friend_input_instance = GiftToFriendInput.from_json(json)
# print the JSON string representation of the object
print(GiftToFriendInput.to_json())

# convert the object into a dict
gift_to_friend_input_dict = gift_to_friend_input_instance.to_dict()
# create an instance of GiftToFriendInput from a dict
gift_to_friend_input_from_dict = GiftToFriendInput.from_dict(gift_to_friend_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


