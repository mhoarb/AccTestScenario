# OnlineCenterOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**rate** | **float** |  | [optional] 
**rate_count** | **int** |  | [optional] 
**user_level** | **str** |  | [optional] 
**required_score** | **int** |  | [optional] 
**discount_description** | **str** |  | [optional] 
**online_center_description** | **str** |  | [optional] 
**ticket_help** | **str** |  | [optional] 
**display_order** | **int** |  | [optional] 
**expires_date** | **datetime** |  | [optional] 
**category_id** | **int** |  | [optional] 
**comments** | [**List[CommentOutput]**](CommentOutput.md) |  | [optional] 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 
**active** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.online_center_output import OnlineCenterOutput

# TODO update the JSON string below
json = "{}"
# create an instance of OnlineCenterOutput from a JSON string
online_center_output_instance = OnlineCenterOutput.from_json(json)
# print the JSON string representation of the object
print(OnlineCenterOutput.to_json())

# convert the object into a dict
online_center_output_dict = online_center_output_instance.to_dict()
# create an instance of OnlineCenterOutput from a dict
online_center_output_from_dict = OnlineCenterOutput.from_dict(online_center_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


