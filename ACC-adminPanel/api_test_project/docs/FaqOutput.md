# FaqOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**question** | **str** |  | [optional] 
**answer** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.faq_output import FaqOutput

# TODO update the JSON string below
json = "{}"
# create an instance of FaqOutput from a JSON string
faq_output_instance = FaqOutput.from_json(json)
# print the JSON string representation of the object
print(FaqOutput.to_json())

# convert the object into a dict
faq_output_dict = faq_output_instance.to_dict()
# create an instance of FaqOutput from a dict
faq_output_from_dict = FaqOutput.from_dict(faq_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


