# UserOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**username** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**family_name** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**score** | **int** |  | [optional] 
**gem** | **int** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**national_id** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**roles** | **List[str]** |  | [optional] 
**is_account_non_expired** | **bool** |  | [optional] 
**is_account_non_locked** | **bool** |  | [optional] 
**is_credentials_non_expired** | **bool** |  | [optional] 
**is_enabled** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.user_output import UserOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserOutput from a JSON string
user_output_instance = UserOutput.from_json(json)
# print the JSON string representation of the object
print(UserOutput.to_json())

# convert the object into a dict
user_output_dict = user_output_instance.to_dict()
# create an instance of UserOutput from a dict
user_output_from_dict = UserOutput.from_dict(user_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


