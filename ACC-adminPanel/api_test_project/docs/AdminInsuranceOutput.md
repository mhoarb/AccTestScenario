# AdminInsuranceOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**image_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**rate** | **float** |  | [optional] 
**rate_count** | **int** |  | [optional] 
**user_level** | **str** |  | [optional] 
**required_score** | **int** |  | [optional] 
**insurance_description** | **str** |  | [optional] 
**ticket_help** | **str** |  | [optional] 
**expires_date** | **datetime** |  | [optional] 
**category_id** | **int** |  | [optional] 
**comments** | [**List[CommentOutput]**](CommentOutput.md) |  | [optional] 
**purchase_codes** | **List[str]** |  | [optional] 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.admin_insurance_output import AdminInsuranceOutput

# TODO update the JSON string below
json = "{}"
# create an instance of AdminInsuranceOutput from a JSON string
admin_insurance_output_instance = AdminInsuranceOutput.from_json(json)
# print the JSON string representation of the object
print(AdminInsuranceOutput.to_json())

# convert the object into a dict
admin_insurance_output_dict = admin_insurance_output_instance.to_dict()
# create an instance of AdminInsuranceOutput from a dict
admin_insurance_output_from_dict = AdminInsuranceOutput.from_dict(admin_insurance_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


