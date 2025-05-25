# CustomerLevelRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**title** | **str** |  | 
**min_total_score** | **int** |  | 
**max_total_score** | **int** |  | 
**profile_logo_id** | **int** |  | 
**profile_icon_id** | **int** |  | 
**description** | **str** |  | [optional] 
**theme** | **str** |  | [optional] 
**effective_date** | **datetime** |  | 
**disable_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.customer_level_request_dto import CustomerLevelRequestDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerLevelRequestDTO from a JSON string
customer_level_request_dto_instance = CustomerLevelRequestDTO.from_json(json)
# print the JSON string representation of the object
print(CustomerLevelRequestDTO.to_json())

# convert the object into a dict
customer_level_request_dto_dict = customer_level_request_dto_instance.to_dict()
# create an instance of CustomerLevelRequestDTO from a dict
customer_level_request_dto_from_dict = CustomerLevelRequestDTO.from_dict(customer_level_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


