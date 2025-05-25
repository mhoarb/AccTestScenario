# AccountScoreOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** |  | [optional] 
**score** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.account_score_output import AccountScoreOutput

# TODO update the JSON string below
json = "{}"
# create an instance of AccountScoreOutput from a JSON string
account_score_output_instance = AccountScoreOutput.from_json(json)
# print the JSON string representation of the object
print(AccountScoreOutput.to_json())

# convert the object into a dict
account_score_output_dict = account_score_output_instance.to_dict()
# create an instance of AccountScoreOutput from a dict
account_score_output_from_dict = AccountScoreOutput.from_dict(account_score_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


