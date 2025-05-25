# ScoreTypeOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**transaction_type_id** | **int** |  | [optional] 
**active** | **bool** |  | [optional] 
**type_data** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.score_type_output import ScoreTypeOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreTypeOutput from a JSON string
score_type_output_instance = ScoreTypeOutput.from_json(json)
# print the JSON string representation of the object
print(ScoreTypeOutput.to_json())

# convert the object into a dict
score_type_output_dict = score_type_output_instance.to_dict()
# create an instance of ScoreTypeOutput from a dict
score_type_output_from_dict = ScoreTypeOutput.from_dict(score_type_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


