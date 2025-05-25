# SpendScoreBankArticleOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**image_id** | **int** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**main** | **bool** |  | [optional] 
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**body** | **str** |  | [optional] 
**background_id** | **int** |  | [optional] 
**user_level** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.spend_score_bank_article_output import SpendScoreBankArticleOutput

# TODO update the JSON string below
json = "{}"
# create an instance of SpendScoreBankArticleOutput from a JSON string
spend_score_bank_article_output_instance = SpendScoreBankArticleOutput.from_json(json)
# print the JSON string representation of the object
print(SpendScoreBankArticleOutput.to_json())

# convert the object into a dict
spend_score_bank_article_output_dict = spend_score_bank_article_output_instance.to_dict()
# create an instance of SpendScoreBankArticleOutput from a dict
spend_score_bank_article_output_from_dict = SpendScoreBankArticleOutput.from_dict(spend_score_bank_article_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


