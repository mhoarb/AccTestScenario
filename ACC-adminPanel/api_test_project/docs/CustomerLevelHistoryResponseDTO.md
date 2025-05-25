# CustomerLevelHistoryResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**user_id** | **int** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**old_level** | **str** |  | [optional] 
**new_level** | **str** |  | [optional] 
**change_date** | **datetime** |  | [optional] 
**score** | **int** |  | [optional] 
**changed_by_user_id** | **int** |  | [optional] 
**change_reason** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.customer_level_history_response_dto import CustomerLevelHistoryResponseDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerLevelHistoryResponseDTO from a JSON string
customer_level_history_response_dto_instance = CustomerLevelHistoryResponseDTO.from_json(json)
# print the JSON string representation of the object
print(CustomerLevelHistoryResponseDTO.to_json())

# convert the object into a dict
customer_level_history_response_dto_dict = customer_level_history_response_dto_instance.to_dict()
# create an instance of CustomerLevelHistoryResponseDTO from a dict
customer_level_history_response_dto_from_dict = CustomerLevelHistoryResponseDTO.from_dict(customer_level_history_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


