# CreateContactOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**value** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_contact_output import CreateContactOutput

# TODO update the JSON string below
json = "{}"
# create an instance of CreateContactOutput from a JSON string
create_contact_output_instance = CreateContactOutput.from_json(json)
# print the JSON string representation of the object
print(CreateContactOutput.to_json())

# convert the object into a dict
create_contact_output_dict = create_contact_output_instance.to_dict()
# create an instance of CreateContactOutput from a dict
create_contact_output_from_dict = CreateContactOutput.from_dict(create_contact_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


