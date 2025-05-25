# GroupFileUploadResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.group_file_upload_response_dto import GroupFileUploadResponseDTO

# TODO update the JSON string below
json = "{}"
# create an instance of GroupFileUploadResponseDTO from a JSON string
group_file_upload_response_dto_instance = GroupFileUploadResponseDTO.from_json(json)
# print the JSON string representation of the object
print(GroupFileUploadResponseDTO.to_json())

# convert the object into a dict
group_file_upload_response_dto_dict = group_file_upload_response_dto_instance.to_dict()
# create an instance of GroupFileUploadResponseDTO from a dict
group_file_upload_response_dto_from_dict = GroupFileUploadResponseDTO.from_dict(group_file_upload_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


