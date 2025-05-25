# PageUserScoreRankOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_elements** | **int** |  | [optional] 
**total_pages** | **int** |  | [optional] 
**size** | **int** |  | [optional] 
**content** | [**List[UserScoreRankOutput]**](UserScoreRankOutput.md) |  | [optional] 
**number** | **int** |  | [optional] 
**sort** | [**Sort**](Sort.md) |  | [optional] 
**pageable** | [**Pageable**](Pageable.md) |  | [optional] 
**number_of_elements** | **int** |  | [optional] 
**first** | **bool** |  | [optional] 
**last** | **bool** |  | [optional] 
**empty** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.page_user_score_rank_output import PageUserScoreRankOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PageUserScoreRankOutput from a JSON string
page_user_score_rank_output_instance = PageUserScoreRankOutput.from_json(json)
# print the JSON string representation of the object
print(PageUserScoreRankOutput.to_json())

# convert the object into a dict
page_user_score_rank_output_dict = page_user_score_rank_output_instance.to_dict()
# create an instance of PageUserScoreRankOutput from a dict
page_user_score_rank_output_from_dict = PageUserScoreRankOutput.from_dict(page_user_score_rank_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


