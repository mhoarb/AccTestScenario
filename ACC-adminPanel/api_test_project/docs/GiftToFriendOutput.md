# GiftToFriendOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**score_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.gift_to_friend_output import GiftToFriendOutput

# TODO update the JSON string below
json = "{}"
# create an instance of GiftToFriendOutput from a JSON string
gift_to_friend_output_instance = GiftToFriendOutput.from_json(json)
# print the JSON string representation of the object
print(GiftToFriendOutput.to_json())

# convert the object into a dict
gift_to_friend_output_dict = gift_to_friend_output_instance.to_dict()
# create an instance of GiftToFriendOutput from a dict
gift_to_friend_output_from_dict = GiftToFriendOutput.from_dict(gift_to_friend_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


