# IranCardCategoryOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.iran_card_category_output import IranCardCategoryOutput

# TODO update the JSON string below
json = "{}"
# create an instance of IranCardCategoryOutput from a JSON string
iran_card_category_output_instance = IranCardCategoryOutput.from_json(json)
# print the JSON string representation of the object
print(IranCardCategoryOutput.to_json())

# convert the object into a dict
iran_card_category_output_dict = iran_card_category_output_instance.to_dict()
# create an instance of IranCardCategoryOutput from a dict
iran_card_category_output_from_dict = IranCardCategoryOutput.from_dict(iran_card_category_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


