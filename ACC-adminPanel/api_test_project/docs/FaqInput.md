# FaqInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question** | **str** |  | 
**answer** | **str** |  | 

## Example

```python
from openapi_client.models.faq_input import FaqInput

# TODO update the JSON string below
json = "{}"
# create an instance of FaqInput from a JSON string
faq_input_instance = FaqInput.from_json(json)
# print the JSON string representation of the object
print(FaqInput.to_json())

# convert the object into a dict
faq_input_dict = faq_input_instance.to_dict()
# create an instance of FaqInput from a dict
faq_input_from_dict = FaqInput.from_dict(faq_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


