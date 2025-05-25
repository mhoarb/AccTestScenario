# IranMallShopOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**rate** | **float** |  | [optional] 
**rate_count** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**contact_information** | **str** |  | [optional] 
**display_order** | **int** |  | [optional] 
**category_id** | **int** |  | [optional] 
**comments** | [**List[CommentOutput]**](CommentOutput.md) |  | [optional] 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.iran_mall_shop_output import IranMallShopOutput

# TODO update the JSON string below
json = "{}"
# create an instance of IranMallShopOutput from a JSON string
iran_mall_shop_output_instance = IranMallShopOutput.from_json(json)
# print the JSON string representation of the object
print(IranMallShopOutput.to_json())

# convert the object into a dict
iran_mall_shop_output_dict = iran_mall_shop_output_instance.to_dict()
# create an instance of IranMallShopOutput from a dict
iran_mall_shop_output_from_dict = IranMallShopOutput.from_dict(iran_mall_shop_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


