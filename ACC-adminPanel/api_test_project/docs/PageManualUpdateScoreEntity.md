# PageManualUpdateScoreEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_elements** | **int** |  | [optional] 
**total_pages** | **int** |  | [optional] 
**size** | **int** |  | [optional] 
**content** | [**List[ManualUpdateScoreEntity]**](ManualUpdateScoreEntity.md) |  | [optional] 
**number** | **int** |  | [optional] 
**sort** | [**Sort**](Sort.md) |  | [optional] 
**pageable** | [**Pageable**](Pageable.md) |  | [optional] 
**number_of_elements** | **int** |  | [optional] 
**first** | **bool** |  | [optional] 
**last** | **bool** |  | [optional] 
**empty** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.page_manual_update_score_entity import PageManualUpdateScoreEntity

# TODO update the JSON string below
json = "{}"
# create an instance of PageManualUpdateScoreEntity from a JSON string
page_manual_update_score_entity_instance = PageManualUpdateScoreEntity.from_json(json)
# print the JSON string representation of the object
print(PageManualUpdateScoreEntity.to_json())

# convert the object into a dict
page_manual_update_score_entity_dict = page_manual_update_score_entity_instance.to_dict()
# create an instance of PageManualUpdateScoreEntity from a dict
page_manual_update_score_entity_from_dict = PageManualUpdateScoreEntity.from_dict(page_manual_update_score_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


