# CommunicationOutput


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
from openapi_client.models.communication_output import CommunicationOutput

# TODO update the JSON string below
json = "{}"
# create an instance of CommunicationOutput from a JSON string
communication_output_instance = CommunicationOutput.from_json(json)
# print the JSON string representation of the object
print(CommunicationOutput.to_json())

# convert the object into a dict
communication_output_dict = communication_output_instance.to_dict()
# create an instance of CommunicationOutput from a dict
communication_output_from_dict = CommunicationOutput.from_dict(communication_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


