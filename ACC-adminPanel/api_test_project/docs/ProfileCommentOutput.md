# ProfileCommentOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**center_picture_id** | **int** |  | [optional] 
**message** | **str** |  | [optional] 
**rate** | **int** |  | [optional] 
**var_date** | **datetime** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.profile_comment_output import ProfileCommentOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileCommentOutput from a JSON string
profile_comment_output_instance = ProfileCommentOutput.from_json(json)
# print the JSON string representation of the object
print(ProfileCommentOutput.to_json())

# convert the object into a dict
profile_comment_output_dict = profile_comment_output_instance.to_dict()
# create an instance of ProfileCommentOutput from a dict
profile_comment_output_from_dict = ProfileCommentOutput.from_dict(profile_comment_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


