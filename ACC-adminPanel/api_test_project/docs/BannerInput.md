# BannerInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_id** | **int** |  | 
**title** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**uri** | **str** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.banner_input import BannerInput

# TODO update the JSON string below
json = "{}"
# create an instance of BannerInput from a JSON string
banner_input_instance = BannerInput.from_json(json)
# print the JSON string representation of the object
print(BannerInput.to_json())

# convert the object into a dict
banner_input_dict = banner_input_instance.to_dict()
# create an instance of BannerInput from a dict
banner_input_from_dict = BannerInput.from_dict(banner_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


