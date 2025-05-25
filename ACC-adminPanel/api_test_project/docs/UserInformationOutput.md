# UserInformationOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**mobile** | **str** |  | [optional] 
**national_id** | **str** |  | [optional] 
**point** | **int** |  | [optional] 
**cust_type_persian** | **str** |  | [optional] 
**all_point_ebanking** | **int** |  | [optional] 
**all_point_gifts** | **int** |  | [optional] 
**cust_kind** | **int** |  | [optional] 
**all_points_maintenance** | **int** |  | [optional] 
**level** | **str** |  | [optional] 
**spent_points** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.user_information_output import UserInformationOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserInformationOutput from a JSON string
user_information_output_instance = UserInformationOutput.from_json(json)
# print the JSON string representation of the object
print(UserInformationOutput.to_json())

# convert the object into a dict
user_information_output_dict = user_information_output_instance.to_dict()
# create an instance of UserInformationOutput from a dict
user_information_output_from_dict = UserInformationOutput.from_dict(user_information_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


