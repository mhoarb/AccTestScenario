# UserPrizeOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**family_name** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**score** | **int** |  | [optional] 
**gem** | **int** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**is_show_name** | **bool** |  | [optional] 
**national_id** | **str** |  | [optional] 
**mobile_phone** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_prize_output import UserPrizeOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserPrizeOutput from a JSON string
user_prize_output_instance = UserPrizeOutput.from_json(json)
# print the JSON string representation of the object
print(UserPrizeOutput.to_json())

# convert the object into a dict
user_prize_output_dict = user_prize_output_instance.to_dict()
# create an instance of UserPrizeOutput from a dict
user_prize_output_from_dict = UserPrizeOutput.from_dict(user_prize_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


