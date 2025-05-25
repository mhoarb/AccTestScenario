# PageAdminUserManagementOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_elements** | **int** |  | [optional] 
**total_pages** | **int** |  | [optional] 
**size** | **int** |  | [optional] 
**content** | [**List[AdminUserManagementOutput]**](AdminUserManagementOutput.md) |  | [optional] 
**number** | **int** |  | [optional] 
**sort** | [**Sort**](Sort.md) |  | [optional] 
**pageable** | [**Pageable**](Pageable.md) |  | [optional] 
**number_of_elements** | **int** |  | [optional] 
**first** | **bool** |  | [optional] 
**last** | **bool** |  | [optional] 
**empty** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.page_admin_user_management_output import PageAdminUserManagementOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PageAdminUserManagementOutput from a JSON string
page_admin_user_management_output_instance = PageAdminUserManagementOutput.from_json(json)
# print the JSON string representation of the object
print(PageAdminUserManagementOutput.to_json())

# convert the object into a dict
page_admin_user_management_output_dict = page_admin_user_management_output_instance.to_dict()
# create an instance of PageAdminUserManagementOutput from a dict
page_admin_user_management_output_from_dict = PageAdminUserManagementOutput.from_dict(page_admin_user_management_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


