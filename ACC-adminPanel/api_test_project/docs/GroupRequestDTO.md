# GroupRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**effective_date** | **datetime** |  | 
**expiration_date** | **datetime** |  | 

## Example

```python
from openapi_client.models.group_request_dto import GroupRequestDTO

# TODO update the JSON string below
json = "{}"
# create an instance of GroupRequestDTO from a JSON string
group_request_dto_instance = GroupRequestDTO.from_json(json)
# print the JSON string representation of the object
print(GroupRequestDTO.to_json())

# convert the object into a dict
group_request_dto_dict = group_request_dto_instance.to_dict()
# create an instance of GroupRequestDTO from a dict
group_request_dto_from_dict = GroupRequestDTO.from_dict(group_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


