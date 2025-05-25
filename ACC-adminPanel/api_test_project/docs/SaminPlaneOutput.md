# SaminPlaneOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insert_rate** | **str** |  | [optional] 
**averaging_period_month** | **str** |  | [optional] 
**repayment_period** | **str** |  | [optional] 
**facilities_coefficient_current** | **str** |  | [optional] 
**facilities_coefficient_short_term** | **str** |  | [optional] 
**loan_value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.samin_plane_output import SaminPlaneOutput

# TODO update the JSON string below
json = "{}"
# create an instance of SaminPlaneOutput from a JSON string
samin_plane_output_instance = SaminPlaneOutput.from_json(json)
# print the JSON string representation of the object
print(SaminPlaneOutput.to_json())

# convert the object into a dict
samin_plane_output_dict = samin_plane_output_instance.to_dict()
# create an instance of SaminPlaneOutput from a dict
samin_plane_output_from_dict = SaminPlaneOutput.from_dict(samin_plane_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


