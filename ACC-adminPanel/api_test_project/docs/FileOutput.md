# FileOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**directory_id** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**content_type** | **str** |  | [optional] 
**size** | **int** |  | [optional] 
**extension** | **str** |  | [optional] 
**uri** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.file_output import FileOutput

# TODO update the JSON string below
json = "{}"
# create an instance of FileOutput from a JSON string
file_output_instance = FileOutput.from_json(json)
# print the JSON string representation of the object
print(FileOutput.to_json())

# convert the object into a dict
file_output_dict = file_output_instance.to_dict()
# create an instance of FileOutput from a dict
file_output_from_dict = FileOutput.from_dict(file_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


