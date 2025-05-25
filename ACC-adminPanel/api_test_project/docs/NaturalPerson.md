# NaturalPerson


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**national_code** | **str** |  | [optional] 
**father_name** | **str** |  | [optional] 
**gender** | **str** |  | [optional] 
**birth_date** | **date** |  | [optional] 
**marital_status** | **str** |  | [optional] 
**children_count** | **int** |  | [optional] 
**job** | **str** |  | [optional] 
**education** | **str** |  | [optional] 
**address** | **str** |  | [optional] 
**postal_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.natural_person import NaturalPerson

# TODO update the JSON string below
json = "{}"
# create an instance of NaturalPerson from a JSON string
natural_person_instance = NaturalPerson.from_json(json)
# print the JSON string representation of the object
print(NaturalPerson.to_json())

# convert the object into a dict
natural_person_dict = natural_person_instance.to_dict()
# create an instance of NaturalPerson from a dict
natural_person_from_dict = NaturalPerson.from_dict(natural_person_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


