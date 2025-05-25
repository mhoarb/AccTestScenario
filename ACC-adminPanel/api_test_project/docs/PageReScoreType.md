# PageReScoreType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_elements** | **int** |  | [optional] 
**total_pages** | **int** |  | [optional] 
**size** | **int** |  | [optional] 
**content** | [**List[ReScoreType]**](ReScoreType.md) |  | [optional] 
**number** | **int** |  | [optional] 
**sort** | [**Sort**](Sort.md) |  | [optional] 
**pageable** | [**Pageable**](Pageable.md) |  | [optional] 
**number_of_elements** | **int** |  | [optional] 
**first** | **bool** |  | [optional] 
**last** | **bool** |  | [optional] 
**empty** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.page_re_score_type import PageReScoreType

# TODO update the JSON string below
json = "{}"
# create an instance of PageReScoreType from a JSON string
page_re_score_type_instance = PageReScoreType.from_json(json)
# print the JSON string representation of the object
print(PageReScoreType.to_json())

# convert the object into a dict
page_re_score_type_dict = page_re_score_type_instance.to_dict()
# create an instance of PageReScoreType from a dict
page_re_score_type_from_dict = PageReScoreType.from_dict(page_re_score_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


