# TerminalOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terminal_code** | **str** |  | [optional] 
**account_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.terminal_output import TerminalOutput

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalOutput from a JSON string
terminal_output_instance = TerminalOutput.from_json(json)
# print the JSON string representation of the object
print(TerminalOutput.to_json())

# convert the object into a dict
terminal_output_dict = terminal_output_instance.to_dict()
# create an instance of TerminalOutput from a dict
terminal_output_from_dict = TerminalOutput.from_dict(terminal_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


