# VersionNoteInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | 
**description** | **str** |  | 
**version_type** | **str** |  | 

## Example

```python
from openapi_client.models.version_note_input import VersionNoteInput

# TODO update the JSON string below
json = "{}"
# create an instance of VersionNoteInput from a JSON string
version_note_input_instance = VersionNoteInput.from_json(json)
# print the JSON string representation of the object
print(VersionNoteInput.to_json())

# convert the object into a dict
version_note_input_dict = version_note_input_instance.to_dict()
# create an instance of VersionNoteInput from a dict
version_note_input_from_dict = VersionNoteInput.from_dict(version_note_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


