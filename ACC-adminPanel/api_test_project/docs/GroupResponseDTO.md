# GroupResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**effective_date** | **datetime** |  | [optional] 
**expiration_date** | **datetime** |  | [optional] 
**user_groups** | [**List[UserGroupResponseDTO]**](UserGroupResponseDTO.md) |  | [optional] 

## Example

```python
from openapi_client.models.group_response_dto import GroupResponseDTO

# TODO update the JSON string below
json = "{}"
# create an instance of GroupResponseDTO from a JSON string
group_response_dto_instance = GroupResponseDTO.from_json(json)
# print the JSON string representation of the object
print(GroupResponseDTO.to_json())

# convert the object into a dict
group_response_dto_dict = group_response_dto_instance.to_dict()
# create an instance of GroupResponseDTO from a dict
group_response_dto_from_dict = GroupResponseDTO.from_dict(group_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


