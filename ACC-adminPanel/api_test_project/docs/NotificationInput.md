# NotificationInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | 
**message** | **str** |  | 
**type** | **str** |  | [optional] 
**customer_id** | **List[str]** |  | 

## Example

```python
from openapi_client.models.notification_input import NotificationInput

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationInput from a JSON string
notification_input_instance = NotificationInput.from_json(json)
# print the JSON string representation of the object
print(NotificationInput.to_json())

# convert the object into a dict
notification_input_dict = notification_input_instance.to_dict()
# create an instance of NotificationInput from a dict
notification_input_from_dict = NotificationInput.from_dict(notification_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


