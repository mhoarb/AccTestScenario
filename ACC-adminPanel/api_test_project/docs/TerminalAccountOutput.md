# TerminalAccountOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terminals** | [**List[TerminalScoreOutput]**](TerminalScoreOutput.md) |  | [optional] 
**accounts** | [**List[AccountScoreOutput]**](AccountScoreOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.terminal_account_output import TerminalAccountOutput

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalAccountOutput from a JSON string
terminal_account_output_instance = TerminalAccountOutput.from_json(json)
# print the JSON string representation of the object
print(TerminalAccountOutput.to_json())

# convert the object into a dict
terminal_account_output_dict = terminal_account_output_instance.to_dict()
# create an instance of TerminalAccountOutput from a dict
terminal_account_output_from_dict = TerminalAccountOutput.from_dict(terminal_account_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


