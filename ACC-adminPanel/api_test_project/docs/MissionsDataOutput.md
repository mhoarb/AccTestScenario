# MissionsDataOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**possible_score_types** | **Dict[str, List[str]]** |  | [optional] 
**all_purchase_centers** | **Dict[str, List[PurchaseCenterBriefOutput]]** |  | [optional] 

## Example

```python
from openapi_client.models.missions_data_output import MissionsDataOutput

# TODO update the JSON string below
json = "{}"
# create an instance of MissionsDataOutput from a JSON string
missions_data_output_instance = MissionsDataOutput.from_json(json)
# print the JSON string representation of the object
print(MissionsDataOutput.to_json())

# convert the object into a dict
missions_data_output_dict = missions_data_output_instance.to_dict()
# create an instance of MissionsDataOutput from a dict
missions_data_output_from_dict = MissionsDataOutput.from_dict(missions_data_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


