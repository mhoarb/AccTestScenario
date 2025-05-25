# UserProfileDetailsOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**profile_picture_id** | **int** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**is_show_name** | **bool** |  | [optional] 
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
**customer_type** | **str** |  | [optional] 
**branch_id** | **int** |  | [optional] 
**branch_code** | **str** |  | [optional] 
**branch_name** | **str** |  | [optional] 
**complete** | **str** |  | [optional] 
**is_acceptor** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.user_profile_details_output import UserProfileDetailsOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfileDetailsOutput from a JSON string
user_profile_details_output_instance = UserProfileDetailsOutput.from_json(json)
# print the JSON string representation of the object
print(UserProfileDetailsOutput.to_json())

# convert the object into a dict
user_profile_details_output_dict = user_profile_details_output_instance.to_dict()
# create an instance of UserProfileDetailsOutput from a dict
user_profile_details_output_from_dict = UserProfileDetailsOutput.from_dict(user_profile_details_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


