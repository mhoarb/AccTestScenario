# ManualUpdateScoreEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**his_date** | **int** |  | [optional] 
**process_status** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**processed_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.manual_update_score_entity import ManualUpdateScoreEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ManualUpdateScoreEntity from a JSON string
manual_update_score_entity_instance = ManualUpdateScoreEntity.from_json(json)
# print the JSON string representation of the object
print(ManualUpdateScoreEntity.to_json())

# convert the object into a dict
manual_update_score_entity_dict = manual_update_score_entity_instance.to_dict()
# create an instance of ManualUpdateScoreEntity from a dict
manual_update_score_entity_from_dict = ManualUpdateScoreEntity.from_dict(manual_update_score_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


