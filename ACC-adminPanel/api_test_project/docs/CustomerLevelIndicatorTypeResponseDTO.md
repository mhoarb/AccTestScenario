# CustomerLevelIndicatorTypeResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**allow_transfer** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.customer_level_indicator_type_response_dto import CustomerLevelIndicatorTypeResponseDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerLevelIndicatorTypeResponseDTO from a JSON string
customer_level_indicator_type_response_dto_instance = CustomerLevelIndicatorTypeResponseDTO.from_json(json)
# print the JSON string representation of the object
print(CustomerLevelIndicatorTypeResponseDTO.to_json())

# convert the object into a dict
customer_level_indicator_type_response_dto_dict = customer_level_indicator_type_response_dto_instance.to_dict()
# create an instance of CustomerLevelIndicatorTypeResponseDTO from a dict
customer_level_indicator_type_response_dto_from_dict = CustomerLevelIndicatorTypeResponseDTO.from_dict(customer_level_indicator_type_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


