# NotificationCategoryOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**create_date_time** | **datetime** |  | [optional] 
**count_seen_customer** | **int** |  | [optional] 
**count_customer** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.notification_category_output import NotificationCategoryOutput

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationCategoryOutput from a JSON string
notification_category_output_instance = NotificationCategoryOutput.from_json(json)
# print the JSON string representation of the object
print(NotificationCategoryOutput.to_json())

# convert the object into a dict
notification_category_output_dict = notification_category_output_instance.to_dict()
# create an instance of NotificationCategoryOutput from a dict
notification_category_output_from_dict = NotificationCategoryOutput.from_dict(notification_category_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


