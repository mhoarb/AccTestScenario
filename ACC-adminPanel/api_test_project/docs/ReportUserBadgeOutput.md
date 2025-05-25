# ReportUserBadgeOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**dast_be_code** | **float** |  | [optional] 
**hatam_tayi** | **float** |  | [optional] 
**nokte_sanj** | **float** |  | [optional] 
**electro_baz** | **float** |  | [optional] 
**meh_tar** | **float** |  | [optional] 
**khosh_shans** | **float** |  | [optional] 
**hamrah** | **float** |  | [optional] 
**saheb_nazar** | **float** |  | [optional] 
**majarajoo** | **float** |  | [optional] 
**peygir** | **float** |  | [optional] 
**accelerator5** | **float** |  | [optional] 
**accelerator8** | **float** |  | [optional] 
**customer_number** | **int** |  | [optional] 
**mobile_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.report_user_badge_output import ReportUserBadgeOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportUserBadgeOutput from a JSON string
report_user_badge_output_instance = ReportUserBadgeOutput.from_json(json)
# print the JSON string representation of the object
print(ReportUserBadgeOutput.to_json())

# convert the object into a dict
report_user_badge_output_dict = report_user_badge_output_instance.to_dict()
# create an instance of ReportUserBadgeOutput from a dict
report_user_badge_output_from_dict = ReportUserBadgeOutput.from_dict(report_user_badge_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


