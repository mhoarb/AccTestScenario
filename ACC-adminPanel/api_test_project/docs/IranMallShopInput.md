# IranMallShopInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logo_id** | **int** |  | 
**title** | **str** |  | 
**description** | **str** |  | 
**contact_information** | **str** |  | 
**display_order** | **int** |  | [optional] 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.iran_mall_shop_input import IranMallShopInput

# TODO update the JSON string below
json = "{}"
# create an instance of IranMallShopInput from a JSON string
iran_mall_shop_input_instance = IranMallShopInput.from_json(json)
# print the JSON string representation of the object
print(IranMallShopInput.to_json())

# convert the object into a dict
iran_mall_shop_input_dict = iran_mall_shop_input_instance.to_dict()
# create an instance of IranMallShopInput from a dict
iran_mall_shop_input_from_dict = IranMallShopInput.from_dict(iran_mall_shop_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


