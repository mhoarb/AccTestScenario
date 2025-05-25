# FileUploadListResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**file_name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**owner_name** | **str** |  | [optional] 
**owner_id** | **int** |  | [optional] 
**create_date_time** | **datetime** |  | [optional] 
**validation_date_time** | **datetime** |  | [optional] 
**process_time** | **datetime** |  | [optional] 
**validation_error_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.file_upload_list_response_dto import FileUploadListResponseDTO

# TODO update the JSON string below
json = "{}"
# create an instance of FileUploadListResponseDTO from a JSON string
file_upload_list_response_dto_instance = FileUploadListResponseDTO.from_json(json)
# print the JSON string representation of the object
print(FileUploadListResponseDTO.to_json())

# convert the object into a dict
file_upload_list_response_dto_dict = file_upload_list_response_dto_instance.to_dict()
# create an instance of FileUploadListResponseDTO from a dict
file_upload_list_response_dto_from_dict = FileUploadListResponseDTO.from_dict(file_upload_list_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


