# InsuranceCategoryInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_id** | **int** |  | [optional] 
**logo_id** | **int** |  | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.insurance_category_input import InsuranceCategoryInput

# TODO update the JSON string below
json = "{}"
# create an instance of InsuranceCategoryInput from a JSON string
insurance_category_input_instance = InsuranceCategoryInput.from_json(json)
# print the JSON string representation of the object
print(InsuranceCategoryInput.to_json())

# convert the object into a dict
insurance_category_input_dict = insurance_category_input_instance.to_dict()
# create an instance of InsuranceCategoryInput from a dict
insurance_category_input_from_dict = InsuranceCategoryInput.from_dict(insurance_category_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


