# RequestCalculateScoreResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**effective_date** | **datetime** |  | [optional] 
**expiration_date** | **datetime** |  | [optional] 
**user_groups** | [**List[UserGroupResponseDTO]**](UserGroupResponseDTO.md) |  | [optional] 

## Example

```python
from openapi_client.models.request_calculate_score_response_dto import RequestCalculateScoreResponseDTO

# TODO update the JSON string below
json = "{}"
# create an instance of RequestCalculateScoreResponseDTO from a JSON string
request_calculate_score_response_dto_instance = RequestCalculateScoreResponseDTO.from_json(json)
# print the JSON string representation of the object
print(RequestCalculateScoreResponseDTO.to_json())

# convert the object into a dict
request_calculate_score_response_dto_dict = request_calculate_score_response_dto_instance.to_dict()
# create an instance of RequestCalculateScoreResponseDTO from a dict
request_calculate_score_response_dto_from_dict = RequestCalculateScoreResponseDTO.from_dict(request_calculate_score_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


