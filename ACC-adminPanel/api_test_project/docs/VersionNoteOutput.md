# VersionNoteOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**version_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.version_note_output import VersionNoteOutput

# TODO update the JSON string below
json = "{}"
# create an instance of VersionNoteOutput from a JSON string
version_note_output_instance = VersionNoteOutput.from_json(json)
# print the JSON string representation of the object
print(VersionNoteOutput.to_json())

# convert the object into a dict
version_note_output_dict = version_note_output_instance.to_dict()
# create an instance of VersionNoteOutput from a dict
version_note_output_from_dict = VersionNoteOutput.from_dict(version_note_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


