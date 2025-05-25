# ChampionsLeagueUserRankOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_logged_in_rank** | **int** |  | [optional] 
**users_rank** | [**PageUserChampionsLeagueRankOutput**](PageUserChampionsLeagueRankOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.champions_league_user_rank_output import ChampionsLeagueUserRankOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ChampionsLeagueUserRankOutput from a JSON string
champions_league_user_rank_output_instance = ChampionsLeagueUserRankOutput.from_json(json)
# print the JSON string representation of the object
print(ChampionsLeagueUserRankOutput.to_json())

# convert the object into a dict
champions_league_user_rank_output_dict = champions_league_user_rank_output_instance.to_dict()
# create an instance of ChampionsLeagueUserRankOutput from a dict
champions_league_user_rank_output_from_dict = ChampionsLeagueUserRankOutput.from_dict(champions_league_user_rank_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


