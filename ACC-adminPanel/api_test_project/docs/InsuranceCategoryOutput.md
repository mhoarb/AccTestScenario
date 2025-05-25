# InsuranceCategoryOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**image_id** | **int** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.insurance_category_output import InsuranceCategoryOutput

# TODO update the JSON string below
json = "{}"
# create an instance of InsuranceCategoryOutput from a JSON string
insurance_category_output_instance = InsuranceCategoryOutput.from_json(json)
# print the JSON string representation of the object
print(InsuranceCategoryOutput.to_json())

# convert the object into a dict
insurance_category_output_dict = insurance_category_output_instance.to_dict()
# create an instance of InsuranceCategoryOutput from a dict
insurance_category_output_from_dict = InsuranceCategoryOutput.from_dict(insurance_category_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


