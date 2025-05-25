# DirectoryInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**parent_directory_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.directory_input import DirectoryInput

# TODO update the JSON string below
json = "{}"
# create an instance of DirectoryInput from a JSON string
directory_input_instance = DirectoryInput.from_json(json)
# print the JSON string representation of the object
print(DirectoryInput.to_json())

# convert the object into a dict
directory_input_dict = directory_input_instance.to_dict()
# create an instance of DirectoryInput from a dict
directory_input_from_dict = DirectoryInput.from_dict(directory_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


