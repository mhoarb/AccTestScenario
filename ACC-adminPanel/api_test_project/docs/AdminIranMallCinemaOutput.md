# AdminIranMallCinemaOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**image_id** | **int** |  | [optional] 
**required_score** | **int** |  | [optional] 
**expire_date** | **datetime** |  | [optional] 
**purchase_codes** | **List[str]** |  | [optional] 
**discount_description** | **str** |  | [optional] 
**ticket_help** | **str** |  | [optional] 
**user_level** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.admin_iran_mall_cinema_output import AdminIranMallCinemaOutput

# TODO update the JSON string below
json = "{}"
# create an instance of AdminIranMallCinemaOutput from a JSON string
admin_iran_mall_cinema_output_instance = AdminIranMallCinemaOutput.from_json(json)
# print the JSON string representation of the object
print(AdminIranMallCinemaOutput.to_json())

# convert the object into a dict
admin_iran_mall_cinema_output_dict = admin_iran_mall_cinema_output_instance.to_dict()
# create an instance of AdminIranMallCinemaOutput from a dict
admin_iran_mall_cinema_output_from_dict = AdminIranMallCinemaOutput.from_dict(admin_iran_mall_cinema_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


