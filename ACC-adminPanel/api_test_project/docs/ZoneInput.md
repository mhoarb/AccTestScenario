# ZoneInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**code** | **int** |  | 
**zone_type** | **str** |  | 
**parent_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.zone_input import ZoneInput

# TODO update the JSON string below
json = "{}"
# create an instance of ZoneInput from a JSON string
zone_input_instance = ZoneInput.from_json(json)
# print the JSON string representation of the object
print(ZoneInput.to_json())

# convert the object into a dict
zone_input_dict = zone_input_instance.to_dict()
# create an instance of ZoneInput from a dict
zone_input_from_dict = ZoneInput.from_dict(zone_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


