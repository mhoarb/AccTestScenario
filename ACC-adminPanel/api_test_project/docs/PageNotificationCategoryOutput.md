# PageNotificationCategoryOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_elements** | **int** |  | [optional] 
**total_pages** | **int** |  | [optional] 
**size** | **int** |  | [optional] 
**content** | [**List[NotificationCategoryOutput]**](NotificationCategoryOutput.md) |  | [optional] 
**number** | **int** |  | [optional] 
**sort** | [**Sort**](Sort.md) |  | [optional] 
**pageable** | [**Pageable**](Pageable.md) |  | [optional] 
**number_of_elements** | **int** |  | [optional] 
**first** | **bool** |  | [optional] 
**last** | **bool** |  | [optional] 
**empty** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.page_notification_category_output import PageNotificationCategoryOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PageNotificationCategoryOutput from a JSON string
page_notification_category_output_instance = PageNotificationCategoryOutput.from_json(json)
# print the JSON string representation of the object
print(PageNotificationCategoryOutput.to_json())

# convert the object into a dict
page_notification_category_output_dict = page_notification_category_output_instance.to_dict()
# create an instance of PageNotificationCategoryOutput from a dict
page_notification_category_output_from_dict = PageNotificationCategoryOutput.from_dict(page_notification_category_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


