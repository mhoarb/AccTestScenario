# ChampionsLeagueBadgeDetailOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badge_output** | [**ChampionsLeagueBadgeOutput**](ChampionsLeagueBadgeOutput.md) |  | [optional] 
**badge_description** | [**ChampionsLeagueBadgeDescriptionOutput**](ChampionsLeagueBadgeDescriptionOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.champions_league_badge_detail_output import ChampionsLeagueBadgeDetailOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ChampionsLeagueBadgeDetailOutput from a JSON string
champions_league_badge_detail_output_instance = ChampionsLeagueBadgeDetailOutput.from_json(json)
# print the JSON string representation of the object
print(ChampionsLeagueBadgeDetailOutput.to_json())

# convert the object into a dict
champions_league_badge_detail_output_dict = champions_league_badge_detail_output_instance.to_dict()
# create an instance of ChampionsLeagueBadgeDetailOutput from a dict
champions_league_badge_detail_output_from_dict = ChampionsLeagueBadgeDetailOutput.from_dict(champions_league_badge_detail_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


