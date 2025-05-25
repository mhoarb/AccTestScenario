# IranMallCinemaOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**user_level** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**image_id** | **int** |  | [optional] 
**expire_date** | **datetime** |  | [optional] 
**required_score** | **int** |  | [optional] 
**ticket_help** | **str** |  | [optional] 
**discount_description** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 
**finish_purchase_codes** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.iran_mall_cinema_output import IranMallCinemaOutput

# TODO update the JSON string below
json = "{}"
# create an instance of IranMallCinemaOutput from a JSON string
iran_mall_cinema_output_instance = IranMallCinemaOutput.from_json(json)
# print the JSON string representation of the object
print(IranMallCinemaOutput.to_json())

# convert the object into a dict
iran_mall_cinema_output_dict = iran_mall_cinema_output_instance.to_dict()
# create an instance of IranMallCinemaOutput from a dict
iran_mall_cinema_output_from_dict = IranMallCinemaOutput.from_dict(iran_mall_cinema_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


