# AdminOnlineCenterOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**url** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**discount_description** | **str** |  | [optional] 
**getpurchase_code_count** | **int** |  | [optional] 
**comment_count** | **int** |  | [optional] 
**category_id** | **int** |  | [optional] 
**user_level** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**rate** | **float** |  | [optional] 
**rate_count** | **int** |  | [optional] 
**required_score** | **int** |  | [optional] 
**ticket_help** | **str** |  | [optional] 
**expires_date** | **datetime** |  | [optional] 
**active** | **bool** |  | [optional] 
**online_center_description** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.admin_online_center_output import AdminOnlineCenterOutput

# TODO update the JSON string below
json = "{}"
# create an instance of AdminOnlineCenterOutput from a JSON string
admin_online_center_output_instance = AdminOnlineCenterOutput.from_json(json)
# print the JSON string representation of the object
print(AdminOnlineCenterOutput.to_json())

# convert the object into a dict
admin_online_center_output_dict = admin_online_center_output_instance.to_dict()
# create an instance of AdminOnlineCenterOutput from a dict
admin_online_center_output_from_dict = AdminOnlineCenterOutput.from_dict(admin_online_center_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


