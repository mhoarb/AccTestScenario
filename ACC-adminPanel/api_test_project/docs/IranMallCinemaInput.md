# IranMallCinemaInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | 
**image_id** | **int** |  | 
**required_score** | **int** |  | 
**expire_date** | **datetime** |  | 
**ticket_help** | **str** |  | 
**discount_description** | **str** |  | 
**user_level** | **str** |  | 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 
**purchase_codes** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.iran_mall_cinema_input import IranMallCinemaInput

# TODO update the JSON string below
json = "{}"
# create an instance of IranMallCinemaInput from a JSON string
iran_mall_cinema_input_instance = IranMallCinemaInput.from_json(json)
# print the JSON string representation of the object
print(IranMallCinemaInput.to_json())

# convert the object into a dict
iran_mall_cinema_input_dict = iran_mall_cinema_input_instance.to_dict()
# create an instance of IranMallCinemaInput from a dict
iran_mall_cinema_input_from_dict = IranMallCinemaInput.from_dict(iran_mall_cinema_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


