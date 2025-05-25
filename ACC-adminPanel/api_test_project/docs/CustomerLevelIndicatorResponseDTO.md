# CustomerLevelIndicatorResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**customer_level_id** | **int** |  | [optional] 
**customer_level_indicator_type_id** | **int** |  | [optional] 
**customer_level_indicator_type** | [**CustomerLevelIndicatorTypeResponseDTO**](CustomerLevelIndicatorTypeResponseDTO.md) |  | [optional] 
**customer_level_indicator_type_name** | **str** |  | [optional] 
**customer_level_indicator_type_title** | **str** |  | [optional] 
**customer_level_indicator_type_allow_transfer** | **bool** |  | [optional] 
**value** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.customer_level_indicator_response_dto import CustomerLevelIndicatorResponseDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerLevelIndicatorResponseDTO from a JSON string
customer_level_indicator_response_dto_instance = CustomerLevelIndicatorResponseDTO.from_json(json)
# print the JSON string representation of the object
print(CustomerLevelIndicatorResponseDTO.to_json())

# convert the object into a dict
customer_level_indicator_response_dto_dict = customer_level_indicator_response_dto_instance.to_dict()
# create an instance of CustomerLevelIndicatorResponseDTO from a dict
customer_level_indicator_response_dto_from_dict = CustomerLevelIndicatorResponseDTO.from_dict(customer_level_indicator_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


