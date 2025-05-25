# Terminal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**terminal_code** | **str** |  | [optional] 
**user** | [**BankPerson**](BankPerson.md) |  | [optional] 
**account** | [**Account**](Account.md) |  | [optional] 

## Example

```python
from openapi_client.models.terminal import Terminal

# TODO update the JSON string below
json = "{}"
# create an instance of Terminal from a JSON string
terminal_instance = Terminal.from_json(json)
# print the JSON string representation of the object
print(Terminal.to_json())

# convert the object into a dict
terminal_dict = terminal_instance.to_dict()
# create an instance of Terminal from a dict
terminal_from_dict = Terminal.from_dict(terminal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


