# InsuranceInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logo_id** | **int** |  | 
**image_id** | **int** |  | [optional] 
**title** | **str** |  | 
**required_score** | **int** |  | 
**insurance_description** | **str** |  | 
**expires_date** | **datetime** |  | [optional] 
**category_id** | **int** |  | [optional] 
**ticket_help** | **str** |  | 
**user_level** | **str** |  | 
**purchase_codes** | **List[str]** |  | [optional] 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.insurance_input import InsuranceInput

# TODO update the JSON string below
json = "{}"
# create an instance of InsuranceInput from a JSON string
insurance_input_instance = InsuranceInput.from_json(json)
# print the JSON string representation of the object
print(InsuranceInput.to_json())

# convert the object into a dict
insurance_input_dict = insurance_input_instance.to_dict()
# create an instance of InsuranceInput from a dict
insurance_input_from_dict = InsuranceInput.from_dict(insurance_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


