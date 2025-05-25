# DirectoryOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**uri** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**parent_directory_id** | **int** |  | [optional] 
**files** | [**List[FileOutput]**](FileOutput.md) |  | [optional] 
**children** | [**List[DirectoryOutput]**](DirectoryOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.directory_output import DirectoryOutput

# TODO update the JSON string below
json = "{}"
# create an instance of DirectoryOutput from a JSON string
directory_output_instance = DirectoryOutput.from_json(json)
# print the JSON string representation of the object
print(DirectoryOutput.to_json())

# convert the object into a dict
directory_output_dict = directory_output_instance.to_dict()
# create an instance of DirectoryOutput from a dict
directory_output_from_dict = DirectoryOutput.from_dict(directory_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


