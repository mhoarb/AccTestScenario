# UserPurchaseOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**family_name** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**donation_score** | **int** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**purchase_time** | **datetime** |  | [optional] 
**jalali_purchase_time** | **str** |  | [optional] 
**purchase_id** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_purchase_output import UserPurchaseOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserPurchaseOutput from a JSON string
user_purchase_output_instance = UserPurchaseOutput.from_json(json)
# print the JSON string representation of the object
print(UserPurchaseOutput.to_json())

# convert the object into a dict
user_purchase_output_dict = user_purchase_output_instance.to_dict()
# create an instance of UserPurchaseOutput from a dict
user_purchase_output_from_dict = UserPurchaseOutput.from_dict(user_purchase_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


