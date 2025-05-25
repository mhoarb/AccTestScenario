# OnlineCenterInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logo_id** | **int** |  | 
**title** | **str** |  | 
**required_score** | **int** |  | 
**discount_description** | **str** |  | 
**expires_date** | **datetime** |  | [optional] 
**online_center_description** | **str** |  | 
**ticket_help** | **str** |  | 
**display_order** | **int** |  | [optional] 
**category_id** | **int** |  | [optional] 
**user_level** | **str** |  | 
**purchase_codes** | **List[str]** |  | [optional] 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 
**active** | **bool** |  | [optional] 
**internal_vip** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.online_center_input import OnlineCenterInput

# TODO update the JSON string below
json = "{}"
# create an instance of OnlineCenterInput from a JSON string
online_center_input_instance = OnlineCenterInput.from_json(json)
# print the JSON string representation of the object
print(OnlineCenterInput.to_json())

# convert the object into a dict
online_center_input_dict = online_center_input_instance.to_dict()
# create an instance of OnlineCenterInput from a dict
online_center_input_from_dict = OnlineCenterInput.from_dict(online_center_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


