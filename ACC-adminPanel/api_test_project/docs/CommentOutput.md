# CommentOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**mobile_numbers** | **str** |  | [optional] 
**profile_picture_id** | **int** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**rate** | **int** |  | [optional] 
**message** | **str** |  | [optional] 
**shop_title** | **str** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**create_date** | **datetime** |  | [optional] 
**comment_condition** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.comment_output import CommentOutput

# TODO update the JSON string below
json = "{}"
# create an instance of CommentOutput from a JSON string
comment_output_instance = CommentOutput.from_json(json)
# print the JSON string representation of the object
print(CommentOutput.to_json())

# convert the object into a dict
comment_output_dict = comment_output_instance.to_dict()
# create an instance of CommentOutput from a dict
comment_output_from_dict = CommentOutput.from_dict(comment_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


