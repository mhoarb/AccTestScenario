# ScoreTypeInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**transaction_type_id** | **int** |  | [optional] 
**type_data** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.score_type_input import ScoreTypeInput

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreTypeInput from a JSON string
score_type_input_instance = ScoreTypeInput.from_json(json)
# print the JSON string representation of the object
print(ScoreTypeInput.to_json())

# convert the object into a dict
score_type_input_dict = score_type_input_instance.to_dict()
# create an instance of ScoreTypeInput from a dict
score_type_input_from_dict = ScoreTypeInput.from_dict(score_type_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


