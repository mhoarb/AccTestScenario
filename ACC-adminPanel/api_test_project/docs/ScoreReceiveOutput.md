# ScoreReceiveOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **date** |  | [optional] 
**gain_score** | **int** |  | [optional] 
**score_type_name** | **str** |  | [optional] 
**score_type_title** | **str** |  | [optional] 
**score_type_logo** | **str** |  | [optional] 
**transaction_name** | **str** |  | [optional] 
**transaction_title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.score_receive_output import ScoreReceiveOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreReceiveOutput from a JSON string
score_receive_output_instance = ScoreReceiveOutput.from_json(json)
# print the JSON string representation of the object
print(ScoreReceiveOutput.to_json())

# convert the object into a dict
score_receive_output_dict = score_receive_output_instance.to_dict()
# create an instance of ScoreReceiveOutput from a dict
score_receive_output_from_dict = ScoreReceiveOutput.from_dict(score_receive_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


