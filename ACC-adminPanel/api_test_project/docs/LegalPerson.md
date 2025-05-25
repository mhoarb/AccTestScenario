# LegalPerson


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**company_name** | **str** |  | [optional] 
**registration_number** | **str** |  | [optional] 
**national_id** | **str** |  | [optional] 
**established_date** | **date** |  | [optional] 
**economic_code** | **str** |  | [optional] 
**ceo_name** | **str** |  | [optional] 
**company_address** | **str** |  | [optional] 
**company_phone** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.legal_person import LegalPerson

# TODO update the JSON string below
json = "{}"
# create an instance of LegalPerson from a JSON string
legal_person_instance = LegalPerson.from_json(json)
# print the JSON string representation of the object
print(LegalPerson.to_json())

# convert the object into a dict
legal_person_dict = legal_person_instance.to_dict()
# create an instance of LegalPerson from a dict
legal_person_from_dict = LegalPerson.from_dict(legal_person_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


