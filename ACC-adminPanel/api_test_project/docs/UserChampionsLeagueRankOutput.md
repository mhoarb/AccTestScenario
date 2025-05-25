# UserChampionsLeagueRankOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | **str** |  | [optional] 
**rank** | **int** |  | [optional] 
**customer_level** | **str** |  | [optional] 
**customer_id** | **int** |  | [optional] 
**gem_counter** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.user_champions_league_rank_output import UserChampionsLeagueRankOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserChampionsLeagueRankOutput from a JSON string
user_champions_league_rank_output_instance = UserChampionsLeagueRankOutput.from_json(json)
# print the JSON string representation of the object
print(UserChampionsLeagueRankOutput.to_json())

# convert the object into a dict
user_champions_league_rank_output_dict = user_champions_league_rank_output_instance.to_dict()
# create an instance of UserChampionsLeagueRankOutput from a dict
user_champions_league_rank_output_from_dict = UserChampionsLeagueRankOutput.from_dict(user_champions_league_rank_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


