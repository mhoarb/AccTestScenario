# ChampionsLeagueHomeOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | **str** |  | [optional] 
**user_country_rank** | **int** |  | [optional] 
**gem_counter** | **int** |  | [optional] 
**profile_picture_id** | **int** |  | [optional] 
**badge_output** | [**ChampionsLeagueBadgeOutput**](ChampionsLeagueBadgeOutput.md) |  | [optional] 
**lottery_banners** | [**List[BannerOutput]**](BannerOutput.md) |  | [optional] 
**home_banners** | [**List[BannerOutput]**](BannerOutput.md) |  | [optional] 
**lucky_wheel_banners** | [**List[BannerOutput]**](BannerOutput.md) |  | [optional] 
**country_ranking_of_users** | [**ChampionsLeagueUserRankOutput**](ChampionsLeagueUserRankOutput.md) |  | [optional] 
**lucky_wheels** | [**List[ChampionsLeagueLuckyWheelOutput]**](ChampionsLeagueLuckyWheelOutput.md) |  | [optional] 
**missions** | [**List[MissionsBriefOutput]**](MissionsBriefOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.champions_league_home_output import ChampionsLeagueHomeOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ChampionsLeagueHomeOutput from a JSON string
champions_league_home_output_instance = ChampionsLeagueHomeOutput.from_json(json)
# print the JSON string representation of the object
print(ChampionsLeagueHomeOutput.to_json())

# convert the object into a dict
champions_league_home_output_dict = champions_league_home_output_instance.to_dict()
# create an instance of ChampionsLeagueHomeOutput from a dict
champions_league_home_output_from_dict = ChampionsLeagueHomeOutput.from_dict(champions_league_home_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


