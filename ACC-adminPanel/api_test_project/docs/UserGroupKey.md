# UserGroupKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **int** |  | [optional] 
**group_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.user_group_key import UserGroupKey

# TODO update the JSON string below
json = "{}"
# create an instance of UserGroupKey from a JSON string
user_group_key_instance = UserGroupKey.from_json(json)
# print the JSON string representation of the object
print(UserGroupKey.to_json())

# convert the object into a dict
user_group_key_dict = user_group_key_instance.to_dict()
# create an instance of UserGroupKey from a dict
user_group_key_from_dict = UserGroupKey.from_dict(user_group_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


