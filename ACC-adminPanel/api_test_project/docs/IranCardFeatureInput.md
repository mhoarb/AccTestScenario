# IranCardFeatureInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_id** | **int** |  | 
**title** | **str** |  | 
**description** | **str** |  | 
**category_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.iran_card_feature_input import IranCardFeatureInput

# TODO update the JSON string below
json = "{}"
# create an instance of IranCardFeatureInput from a JSON string
iran_card_feature_input_instance = IranCardFeatureInput.from_json(json)
# print the JSON string representation of the object
print(IranCardFeatureInput.to_json())

# convert the object into a dict
iran_card_feature_input_dict = iran_card_feature_input_instance.to_dict()
# create an instance of IranCardFeatureInput from a dict
iran_card_feature_input_from_dict = IranCardFeatureInput.from_dict(iran_card_feature_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


