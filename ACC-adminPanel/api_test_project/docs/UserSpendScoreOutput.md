# UserSpendScoreOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**score** | **int** |  | [optional] 
**level_picture_id** | **int** |  | [optional] 
**level_icon_id** | **int** |  | [optional] 
**level_name** | **str** |  | [optional] 
**level_title** | **str** |  | [optional] 
**theme** | **str** |  | [optional] 
**expires_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.user_spend_score_output import UserSpendScoreOutput

# TODO update the JSON string below
json = "{}"
# create an instance of UserSpendScoreOutput from a JSON string
user_spend_score_output_instance = UserSpendScoreOutput.from_json(json)
# print the JSON string representation of the object
print(UserSpendScoreOutput.to_json())

# convert the object into a dict
user_spend_score_output_dict = user_spend_score_output_instance.to_dict()
# create an instance of UserSpendScoreOutput from a dict
user_spend_score_output_from_dict = UserSpendScoreOutput.from_dict(user_spend_score_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


