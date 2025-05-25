# IranCardResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | [**CardType**](CardType.md) |  | [optional] 
**type_id** | **int** |  | [optional] 
**type_name** | **str** |  | [optional] 
**front_image_id** | **int** |  | [optional] 
**back_image_id** | **int** |  | [optional] 
**create_date_time** | **datetime** |  | [optional] 
**last_modified_date_time** | **datetime** |  | [optional] 
**main** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.iran_card_response_dto import IranCardResponseDTO

# TODO update the JSON string below
json = "{}"
# create an instance of IranCardResponseDTO from a JSON string
iran_card_response_dto_instance = IranCardResponseDTO.from_json(json)
# print the JSON string representation of the object
print(IranCardResponseDTO.to_json())

# convert the object into a dict
iran_card_response_dto_dict = iran_card_response_dto_instance.to_dict()
# create an instance of IranCardResponseDTO from a dict
iran_card_response_dto_from_dict = IranCardResponseDTO.from_dict(iran_card_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


