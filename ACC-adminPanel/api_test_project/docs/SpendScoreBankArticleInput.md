# SpendScoreBankArticleInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_id** | **int** |  | 
**logo_id** | **int** |  | 
**main** | **bool** |  | [optional] 
**title** | **str** |  | 
**description** | **str** |  | 
**body** | **str** |  | 
**background_id** | **int** |  | [optional] 
**user_level** | **str** |  | 

## Example

```python
from openapi_client.models.spend_score_bank_article_input import SpendScoreBankArticleInput

# TODO update the JSON string below
json = "{}"
# create an instance of SpendScoreBankArticleInput from a JSON string
spend_score_bank_article_input_instance = SpendScoreBankArticleInput.from_json(json)
# print the JSON string representation of the object
print(SpendScoreBankArticleInput.to_json())

# convert the object into a dict
spend_score_bank_article_input_dict = spend_score_bank_article_input_instance.to_dict()
# create an instance of SpendScoreBankArticleInput from a dict
spend_score_bank_article_input_from_dict = SpendScoreBankArticleInput.from_dict(spend_score_bank_article_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


