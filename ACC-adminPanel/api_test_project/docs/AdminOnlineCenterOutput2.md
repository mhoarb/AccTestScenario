# AdminOnlineCenterOutput2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**rate** | **float** |  | [optional] 
**rate_count** | **int** |  | [optional] 
**required_score** | **int** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**discount_description** | **str** |  | [optional] 
**online_center_description** | **str** |  | [optional] 
**ticket_help** | **str** |  | [optional] 
**expires_date** | **datetime** |  | [optional] 
**category_id** | **int** |  | [optional] 
**user_level** | **str** |  | [optional] 
**comment_count** | **int** |  | [optional] 
**purchase_code_count** | **int** |  | [optional] 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 
**active** | **bool** |  | [optional] 
**purchase_codes** | **List[str]** |  | [optional] 
**comments** | [**List[CommentOutput]**](CommentOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.admin_online_center_output2 import AdminOnlineCenterOutput2

# TODO update the JSON string below
json = "{}"
# create an instance of AdminOnlineCenterOutput2 from a JSON string
admin_online_center_output2_instance = AdminOnlineCenterOutput2.from_json(json)
# print the JSON string representation of the object
print(AdminOnlineCenterOutput2.to_json())

# convert the object into a dict
admin_online_center_output2_dict = admin_online_center_output2_instance.to_dict()
# create an instance of AdminOnlineCenterOutput2 from a dict
admin_online_center_output2_from_dict = AdminOnlineCenterOutput2.from_dict(admin_online_center_output2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


