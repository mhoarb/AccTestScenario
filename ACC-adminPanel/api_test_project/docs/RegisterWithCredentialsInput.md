# RegisterWithCredentialsInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**last_name** | **str** |  | 
**cif** | **str** |  | 
**id_number** | **str** |  | 
**mobile_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.register_with_credentials_input import RegisterWithCredentialsInput

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterWithCredentialsInput from a JSON string
register_with_credentials_input_instance = RegisterWithCredentialsInput.from_json(json)
# print the JSON string representation of the object
print(RegisterWithCredentialsInput.to_json())

# convert the object into a dict
register_with_credentials_input_dict = register_with_credentials_input_instance.to_dict()
# create an instance of RegisterWithCredentialsInput from a dict
register_with_credentials_input_from_dict = RegisterWithCredentialsInput.from_dict(register_with_credentials_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


