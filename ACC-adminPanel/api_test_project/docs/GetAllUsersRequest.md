# GetAllUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | [**AdminClubAynSearchInput**](AdminClubAynSearchInput.md) |  | [optional] 
**pageable** | [**Pageable**](Pageable.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_all_users_request import GetAllUsersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllUsersRequest from a JSON string
get_all_users_request_instance = GetAllUsersRequest.from_json(json)
# print the JSON string representation of the object
print(GetAllUsersRequest.to_json())

# convert the object into a dict
get_all_users_request_dict = get_all_users_request_instance.to_dict()
# create an instance of GetAllUsersRequest from a dict
get_all_users_request_from_dict = GetAllUsersRequest.from_dict(get_all_users_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


