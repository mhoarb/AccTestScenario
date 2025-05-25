# LoginLogOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**date_time** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.login_log_output import LoginLogOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LoginLogOutput from a JSON string
login_log_output_instance = LoginLogOutput.from_json(json)
# print the JSON string representation of the object
print(LoginLogOutput.to_json())

# convert the object into a dict
login_log_output_dict = login_log_output_instance.to_dict()
# create an instance of LoginLogOutput from a dict
login_log_output_from_dict = LoginLogOutput.from_dict(login_log_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


