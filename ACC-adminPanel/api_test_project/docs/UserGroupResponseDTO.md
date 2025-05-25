# UserGroupResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **int** |  | [optional] 
**group_id** | **int** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**effective_date** | **datetime** |  | [optional] 
**expiration_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.user_group_response_dto import UserGroupResponseDTO

# TODO update the JSON string below
json = "{}"
# create an instance of UserGroupResponseDTO from a JSON string
user_group_response_dto_instance = UserGroupResponseDTO.from_json(json)
# print the JSON string representation of the object
print(UserGroupResponseDTO.to_json())

# convert the object into a dict
user_group_response_dto_dict = user_group_response_dto_instance.to_dict()
# create an instance of UserGroupResponseDTO from a dict
user_group_response_dto_from_dict = UserGroupResponseDTO.from_dict(user_group_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


