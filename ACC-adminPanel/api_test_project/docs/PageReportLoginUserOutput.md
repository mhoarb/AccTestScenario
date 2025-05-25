# PageReportLoginUserOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_elements** | **int** |  | [optional] 
**total_pages** | **int** |  | [optional] 
**size** | **int** |  | [optional] 
**content** | [**List[ReportLoginUserOutput]**](ReportLoginUserOutput.md) |  | [optional] 
**number** | **int** |  | [optional] 
**sort** | [**Sort**](Sort.md) |  | [optional] 
**pageable** | [**Pageable**](Pageable.md) |  | [optional] 
**number_of_elements** | **int** |  | [optional] 
**first** | **bool** |  | [optional] 
**last** | **bool** |  | [optional] 
**empty** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.page_report_login_user_output import PageReportLoginUserOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PageReportLoginUserOutput from a JSON string
page_report_login_user_output_instance = PageReportLoginUserOutput.from_json(json)
# print the JSON string representation of the object
print(PageReportLoginUserOutput.to_json())

# convert the object into a dict
page_report_login_user_output_dict = page_report_login_user_output_instance.to_dict()
# create an instance of PageReportLoginUserOutput from a dict
page_report_login_user_output_from_dict = PageReportLoginUserOutput.from_dict(page_report_login_user_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


