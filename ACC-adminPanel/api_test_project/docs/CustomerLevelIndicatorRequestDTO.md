# CustomerLevelIndicatorRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_level_id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**customer_level_indicator_type_id** | **int** |  | [optional] 
**value** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.customer_level_indicator_request_dto import CustomerLevelIndicatorRequestDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerLevelIndicatorRequestDTO from a JSON string
customer_level_indicator_request_dto_instance = CustomerLevelIndicatorRequestDTO.from_json(json)
# print the JSON string representation of the object
print(CustomerLevelIndicatorRequestDTO.to_json())

# convert the object into a dict
customer_level_indicator_request_dto_dict = customer_level_indicator_request_dto_instance.to_dict()
# create an instance of CustomerLevelIndicatorRequestDTO from a dict
customer_level_indicator_request_dto_from_dict = CustomerLevelIndicatorRequestDTO.from_dict(customer_level_indicator_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


