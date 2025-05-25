# SpendScoreOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banner** | [**BannerOutput**](BannerOutput.md) |  | [optional] 
**user_spend_score** | [**UserSpendScoreOutput**](UserSpendScoreOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.spend_score_output import SpendScoreOutput

# TODO update the JSON string below
json = "{}"
# create an instance of SpendScoreOutput from a JSON string
spend_score_output_instance = SpendScoreOutput.from_json(json)
# print the JSON string representation of the object
print(SpendScoreOutput.to_json())

# convert the object into a dict
spend_score_output_dict = spend_score_output_instance.to_dict()
# create an instance of SpendScoreOutput from a dict
spend_score_output_from_dict = SpendScoreOutput.from_dict(spend_score_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


