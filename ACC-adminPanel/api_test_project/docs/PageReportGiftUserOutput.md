# PageReportGiftUserOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_elements** | **int** |  | [optional] 
**total_pages** | **int** |  | [optional] 
**size** | **int** |  | [optional] 
**content** | [**List[ReportGiftUserOutput]**](ReportGiftUserOutput.md) |  | [optional] 
**number** | **int** |  | [optional] 
**sort** | [**Sort**](Sort.md) |  | [optional] 
**pageable** | [**Pageable**](Pageable.md) |  | [optional] 
**number_of_elements** | **int** |  | [optional] 
**first** | **bool** |  | [optional] 
**last** | **bool** |  | [optional] 
**empty** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.page_report_gift_user_output import PageReportGiftUserOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PageReportGiftUserOutput from a JSON string
page_report_gift_user_output_instance = PageReportGiftUserOutput.from_json(json)
# print the JSON string representation of the object
print(PageReportGiftUserOutput.to_json())

# convert the object into a dict
page_report_gift_user_output_dict = page_report_gift_user_output_instance.to_dict()
# create an instance of PageReportGiftUserOutput from a dict
page_report_gift_user_output_from_dict = PageReportGiftUserOutput.from_dict(page_report_gift_user_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


