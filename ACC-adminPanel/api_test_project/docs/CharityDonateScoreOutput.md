# CharityDonateScoreOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**user_level** | **str** |  | [optional] 
**event_time** | **datetime** |  | [optional] 
**donated_score** | **int** |  | [optional] 
**finish** | **bool** |  | [optional] 
**donated_identifier** | **str** |  | [optional] 
**purchase_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.charity_donate_score_output import CharityDonateScoreOutput

# TODO update the JSON string below
json = "{}"
# create an instance of CharityDonateScoreOutput from a JSON string
charity_donate_score_output_instance = CharityDonateScoreOutput.from_json(json)
# print the JSON string representation of the object
print(CharityDonateScoreOutput.to_json())

# convert the object into a dict
charity_donate_score_output_dict = charity_donate_score_output_instance.to_dict()
# create an instance of CharityDonateScoreOutput from a dict
charity_donate_score_output_from_dict = CharityDonateScoreOutput.from_dict(charity_donate_score_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


