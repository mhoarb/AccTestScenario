# GiftToFriendBillOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_level** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**reference_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**score_count** | **int** |  | [optional] 
**date_time** | **datetime** |  | [optional] 
**purchase_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.gift_to_friend_bill_output import GiftToFriendBillOutput

# TODO update the JSON string below
json = "{}"
# create an instance of GiftToFriendBillOutput from a JSON string
gift_to_friend_bill_output_instance = GiftToFriendBillOutput.from_json(json)
# print the JSON string representation of the object
print(GiftToFriendBillOutput.to_json())

# convert the object into a dict
gift_to_friend_bill_output_dict = gift_to_friend_bill_output_instance.to_dict()
# create an instance of GiftToFriendBillOutput from a dict
gift_to_friend_bill_output_from_dict = GiftToFriendBillOutput.from_dict(gift_to_friend_bill_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


