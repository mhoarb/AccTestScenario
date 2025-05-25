# AdminClubAynSearchInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_number** | **int** |  | [optional] 
**customer_level** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**birth_day** | **int** |  | [optional] 
**sex** | **str** |  | [optional] 
**open_branch** | **int** |  | [optional] 
**from_date** | **int** |  | [optional] 
**until_date** | **int** |  | [optional] 
**var_field** | **str** |  | 
**min_value** | **int** |  | 
**max_value** | **int** |  | 

## Example

```python
from openapi_client.models.admin_club_ayn_search_input import AdminClubAynSearchInput

# TODO update the JSON string below
json = "{}"
# create an instance of AdminClubAynSearchInput from a JSON string
admin_club_ayn_search_input_instance = AdminClubAynSearchInput.from_json(json)
# print the JSON string representation of the object
print(AdminClubAynSearchInput.to_json())

# convert the object into a dict
admin_club_ayn_search_input_dict = admin_club_ayn_search_input_instance.to_dict()
# create an instance of AdminClubAynSearchInput from a dict
admin_club_ayn_search_input_from_dict = AdminClubAynSearchInput.from_dict(admin_club_ayn_search_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


