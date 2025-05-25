# IranCardRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**front_image_id** | **int** |  | [optional] 
**back_image_id** | **int** |  | [optional] 
**effective_date** | **datetime** |  | [optional] 
**disable_date** | **datetime** |  | [optional] 
**main** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.iran_card_request_dto import IranCardRequestDTO

# TODO update the JSON string below
json = "{}"
# create an instance of IranCardRequestDTO from a JSON string
iran_card_request_dto_instance = IranCardRequestDTO.from_json(json)
# print the JSON string representation of the object
print(IranCardRequestDTO.to_json())

# convert the object into a dict
iran_card_request_dto_dict = iran_card_request_dto_instance.to_dict()
# create an instance of IranCardRequestDTO from a dict
iran_card_request_dto_from_dict = IranCardRequestDTO.from_dict(iran_card_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


