# ScoreReceiveDetailOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_score** | **int** |  | [optional] 
**score_receive_outputs** | [**List[MyScoreHistoryScoreReceivedDto]**](MyScoreHistoryScoreReceivedDto.md) |  | [optional] 

## Example

```python
from openapi_client.models.score_receive_detail_output import ScoreReceiveDetailOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreReceiveDetailOutput from a JSON string
score_receive_detail_output_instance = ScoreReceiveDetailOutput.from_json(json)
# print the JSON string representation of the object
print(ScoreReceiveDetailOutput.to_json())

# convert the object into a dict
score_receive_detail_output_dict = score_receive_detail_output_instance.to_dict()
# create an instance of ScoreReceiveDetailOutput from a dict
score_receive_detail_output_from_dict = ScoreReceiveDetailOutput.from_dict(score_receive_detail_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


