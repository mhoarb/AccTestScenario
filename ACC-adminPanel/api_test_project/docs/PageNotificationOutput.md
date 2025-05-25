# PageNotificationOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_elements** | **int** |  | [optional] 
**total_pages** | **int** |  | [optional] 
**size** | **int** |  | [optional] 
**content** | [**List[NotificationOutput]**](NotificationOutput.md) |  | [optional] 
**number** | **int** |  | [optional] 
**sort** | [**Sort**](Sort.md) |  | [optional] 
**pageable** | [**Pageable**](Pageable.md) |  | [optional] 
**number_of_elements** | **int** |  | [optional] 
**first** | **bool** |  | [optional] 
**last** | **bool** |  | [optional] 
**empty** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.page_notification_output import PageNotificationOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PageNotificationOutput from a JSON string
page_notification_output_instance = PageNotificationOutput.from_json(json)
# print the JSON string representation of the object
print(PageNotificationOutput.to_json())

# convert the object into a dict
page_notification_output_dict = page_notification_output_instance.to_dict()
# create an instance of PageNotificationOutput from a dict
page_notification_output_from_dict = PageNotificationOutput.from_dict(page_notification_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


