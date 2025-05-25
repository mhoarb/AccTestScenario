# UserProfileDetailsInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**profile_picture_id** | **int** |  | [optional] 
**customer_number** | **int** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**is_show_name** | **bool** |  | 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**national_id** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**birthday** | **datetime** |  | [optional] 
**father_name** | **str** |  | [optional] 
**job** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**address** | **str** |  | [optional] 
**education** | **str** |  | [optional] 
**postal_code** | **str** |  | [optional] 
**telephone** | **str** |  | [optional] 
**marital_status** | **str** |  | [optional] 
**married_time** | **datetime** |  | [optional] 
**children_count** | **int** |  | [optional] 
**children_birthday_time** | **List[datetime]** |  | [optional] 
**complete** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_profile_details_input import UserProfileDetailsInput

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfileDetailsInput from a JSON string
user_profile_details_input_instance = UserProfileDetailsInput.from_json(json)
# print the JSON string representation of the object
print(UserProfileDetailsInput.to_json())

# convert the object into a dict
user_profile_details_input_dict = user_profile_details_input_instance.to_dict()
# create an instance of UserProfileDetailsInput from a dict
user_profile_details_input_from_dict = UserProfileDetailsInput.from_dict(user_profile_details_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


