# SetFirstPasswordInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cif** | **str** |  | 
**password** | **str** |  | 
**confirm_password** | **str** |  | 
**key** | **str** |  | 

## Example

```python
from openapi_client.models.set_first_password_input import SetFirstPasswordInput

# TODO update the JSON string below
json = "{}"
# create an instance of SetFirstPasswordInput from a JSON string
set_first_password_input_instance = SetFirstPasswordInput.from_json(json)
# print the JSON string representation of the object
print(SetFirstPasswordInput.to_json())

# convert the object into a dict
set_first_password_input_dict = set_first_password_input_instance.to_dict()
# create an instance of SetFirstPasswordInput from a dict
set_first_password_input_from_dict = SetFirstPasswordInput.from_dict(set_first_password_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


