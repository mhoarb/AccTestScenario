# LoginOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** |  | [optional] 
**expires_at** | **datetime** |  | [optional] 
**user_level** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.login_output import LoginOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LoginOutput from a JSON string
login_output_instance = LoginOutput.from_json(json)
# print the JSON string representation of the object
print(LoginOutput.to_json())

# convert the object into a dict
login_output_dict = login_output_instance.to_dict()
# create an instance of LoginOutput from a dict
login_output_from_dict = LoginOutput.from_dict(login_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


