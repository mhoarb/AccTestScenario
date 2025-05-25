# PageUserChampionsLeagueRankOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_elements** | **int** |  | [optional] 
**total_pages** | **int** |  | [optional] 
**size** | **int** |  | [optional] 
**content** | [**List[UserChampionsLeagueRankOutput]**](UserChampionsLeagueRankOutput.md) |  | [optional] 
**number** | **int** |  | [optional] 
**sort** | [**Sort**](Sort.md) |  | [optional] 
**pageable** | [**Pageable**](Pageable.md) |  | [optional] 
**number_of_elements** | **int** |  | [optional] 
**first** | **bool** |  | [optional] 
**last** | **bool** |  | [optional] 
**empty** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.page_user_champions_league_rank_output import PageUserChampionsLeagueRankOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PageUserChampionsLeagueRankOutput from a JSON string
page_user_champions_league_rank_output_instance = PageUserChampionsLeagueRankOutput.from_json(json)
# print the JSON string representation of the object
print(PageUserChampionsLeagueRankOutput.to_json())

# convert the object into a dict
page_user_champions_league_rank_output_dict = page_user_champions_league_rank_output_instance.to_dict()
# create an instance of PageUserChampionsLeagueRankOutput from a dict
page_user_champions_league_rank_output_from_dict = PageUserChampionsLeagueRankOutput.from_dict(page_user_champions_league_rank_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


