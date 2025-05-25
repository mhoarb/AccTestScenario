# CustomerLevel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**min_total_score** | **int** |  | [optional] 
**max_total_score** | **int** |  | [optional] 
**profile_logo_id** | **int** |  | [optional] 
**profile_icon_id** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**effective_date** | **datetime** |  | [optional] 
**disable_date** | **datetime** |  | [optional] 
**theme** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.customer_level import CustomerLevel

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerLevel from a JSON string
customer_level_instance = CustomerLevel.from_json(json)
# print the JSON string representation of the object
print(CustomerLevel.to_json())

# convert the object into a dict
customer_level_dict = customer_level_instance.to_dict()
# create an instance of CustomerLevel from a dict
customer_level_from_dict = CustomerLevel.from_dict(customer_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


