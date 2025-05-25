# BannerOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**image_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**uri** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.banner_output import BannerOutput

# TODO update the JSON string below
json = "{}"
# create an instance of BannerOutput from a JSON string
banner_output_instance = BannerOutput.from_json(json)
# print the JSON string representation of the object
print(BannerOutput.to_json())

# convert the object into a dict
banner_output_dict = banner_output_instance.to_dict()
# create an instance of BannerOutput from a dict
banner_output_from_dict = BannerOutput.from_dict(banner_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


