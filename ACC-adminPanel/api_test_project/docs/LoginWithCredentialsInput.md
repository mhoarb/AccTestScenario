# LoginWithCredentialsInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cif** | **str** |  | 
**password** | **str** |  | 

## Example

```python
from openapi_client.models.login_with_credentials_input import LoginWithCredentialsInput

# TODO update the JSON string below
json = "{}"
# create an instance of LoginWithCredentialsInput from a JSON string
login_with_credentials_input_instance = LoginWithCredentialsInput.from_json(json)
# print the JSON string representation of the object
print(LoginWithCredentialsInput.to_json())

# convert the object into a dict
login_with_credentials_input_dict = login_with_credentials_input_instance.to_dict()
# create an instance of LoginWithCredentialsInput from a dict
login_with_credentials_input_from_dict = LoginWithCredentialsInput.from_dict(login_with_credentials_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


