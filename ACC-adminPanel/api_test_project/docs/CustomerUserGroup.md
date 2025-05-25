# CustomerUserGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**UserGroupKey**](UserGroupKey.md) |  | [optional] 
**user** | [**UserAccount**](UserAccount.md) |  | [optional] 
**customer_group** | [**CustomerGroup**](CustomerGroup.md) |  | [optional] 
**customer_number** | **str** |  | [optional] 
**effective_date** | **datetime** |  | [optional] 
**expiration_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.customer_user_group import CustomerUserGroup

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerUserGroup from a JSON string
customer_user_group_instance = CustomerUserGroup.from_json(json)
# print the JSON string representation of the object
print(CustomerUserGroup.to_json())

# convert the object into a dict
customer_user_group_dict = customer_user_group_instance.to_dict()
# create an instance of CustomerUserGroup from a dict
customer_user_group_from_dict = CustomerUserGroup.from_dict(customer_user_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


