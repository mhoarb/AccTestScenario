# ReScoreType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | 
**description** | **str** |  | [optional] 
**transaction_type_id** | **int** |  | 
**active** | **bool** |  | 
**type_data** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.re_score_type import ReScoreType

# TODO update the JSON string below
json = "{}"
# create an instance of ReScoreType from a JSON string
re_score_type_instance = ReScoreType.from_json(json)
# print the JSON string representation of the object
print(ReScoreType.to_json())

# convert the object into a dict
re_score_type_dict = re_score_type_instance.to_dict()
# create an instance of ReScoreType from a dict
re_score_type_from_dict = ReScoreType.from_dict(re_score_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


