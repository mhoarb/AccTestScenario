# SaminPlaneGroupOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**murabahah_loan** | [**List[SaminPlaneOutput]**](SaminPlaneOutput.md) |  | [optional] 
**qarz_al_hasana_loan** | [**List[SaminPlaneOutput]**](SaminPlaneOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.samin_plane_group_output import SaminPlaneGroupOutput

# TODO update the JSON string below
json = "{}"
# create an instance of SaminPlaneGroupOutput from a JSON string
samin_plane_group_output_instance = SaminPlaneGroupOutput.from_json(json)
# print the JSON string representation of the object
print(SaminPlaneGroupOutput.to_json())

# convert the object into a dict
samin_plane_group_output_dict = samin_plane_group_output_instance.to_dict()
# create an instance of SaminPlaneGroupOutput from a dict
samin_plane_group_output_from_dict = SaminPlaneGroupOutput.from_dict(samin_plane_group_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


