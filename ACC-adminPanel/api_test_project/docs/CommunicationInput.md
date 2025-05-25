# CommunicationInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**sms** | **str** |  | [optional] 
**telegram_bot** | **str** |  | [optional] 
**websites** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.communication_input import CommunicationInput

# TODO update the JSON string below
json = "{}"
# create an instance of CommunicationInput from a JSON string
communication_input_instance = CommunicationInput.from_json(json)
# print the JSON string representation of the object
print(CommunicationInput.to_json())

# convert the object into a dict
communication_input_dict = communication_input_instance.to_dict()
# create an instance of CommunicationInput from a dict
communication_input_from_dict = CommunicationInput.from_dict(communication_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


