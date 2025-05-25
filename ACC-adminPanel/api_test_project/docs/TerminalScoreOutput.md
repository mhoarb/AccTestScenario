# TerminalScoreOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terminal** | [**TerminalOutput**](TerminalOutput.md) |  | [optional] 
**score** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.terminal_score_output import TerminalScoreOutput

# TODO update the JSON string below
json = "{}"
# create an instance of TerminalScoreOutput from a JSON string
terminal_score_output_instance = TerminalScoreOutput.from_json(json)
# print the JSON string representation of the object
print(TerminalScoreOutput.to_json())

# convert the object into a dict
terminal_score_output_dict = terminal_score_output_instance.to_dict()
# create an instance of TerminalScoreOutput from a dict
terminal_score_output_from_dict = TerminalScoreOutput.from_dict(terminal_score_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


