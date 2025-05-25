# ClubInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**icon_url** | **str** |  | [optional] 
**logo_url** | **str** |  | [optional] 
**admin_name** | **str** |  | [optional] 
**admin_icon_url** | **str** |  | [optional] 
**admin_logo_url** | **str** |  | [optional] 
**theme** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.club_info import ClubInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ClubInfo from a JSON string
club_info_instance = ClubInfo.from_json(json)
# print the JSON string representation of the object
print(ClubInfo.to_json())

# convert the object into a dict
club_info_dict = club_info_instance.to_dict()
# create an instance of ClubInfo from a dict
club_info_from_dict = ClubInfo.from_dict(club_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


