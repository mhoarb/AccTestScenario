# ZoneOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**code** | **int** |  | [optional] 
**type** | **str** |  | [optional] 
**parent_zone_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.zone_output import ZoneOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ZoneOutput from a JSON string
zone_output_instance = ZoneOutput.from_json(json)
# print the JSON string representation of the object
print(ZoneOutput.to_json())

# convert the object into a dict
zone_output_dict = zone_output_instance.to_dict()
# create an instance of ZoneOutput from a dict
zone_output_from_dict = ZoneOutput.from_dict(zone_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


