# NotificationOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**seen** | **bool** |  | [optional] 
**create_date_time** | **datetime** |  | [optional] 
**seen_date** | **datetime** |  | [optional] 
**customer_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.notification_output import NotificationOutput

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationOutput from a JSON string
notification_output_instance = NotificationOutput.from_json(json)
# print the JSON string representation of the object
print(NotificationOutput.to_json())

# convert the object into a dict
notification_output_dict = notification_output_instance.to_dict()
# create an instance of NotificationOutput from a dict
notification_output_from_dict = NotificationOutput.from_dict(notification_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


