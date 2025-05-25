# IranCardFeatureOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**image_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**rate** | **float** |  | [optional] 
**rate_count** | **int** |  | [optional] 
**category_id** | **int** |  | [optional] 
**comments** | [**List[CommentOutput]**](CommentOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.iran_card_feature_output import IranCardFeatureOutput

# TODO update the JSON string below
json = "{}"
# create an instance of IranCardFeatureOutput from a JSON string
iran_card_feature_output_instance = IranCardFeatureOutput.from_json(json)
# print the JSON string representation of the object
print(IranCardFeatureOutput.to_json())

# convert the object into a dict
iran_card_feature_output_dict = iran_card_feature_output_instance.to_dict()
# create an instance of IranCardFeatureOutput from a dict
iran_card_feature_output_from_dict = IranCardFeatureOutput.from_dict(iran_card_feature_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


