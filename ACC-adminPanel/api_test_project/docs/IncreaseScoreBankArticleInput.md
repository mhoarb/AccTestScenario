# IncreaseScoreBankArticleInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_id** | **int** |  | 
**logo_id** | **int** |  | 
**main** | **bool** |  | [optional] 
**show** | **bool** |  | [optional] 
**title** | **str** |  | 
**description** | **str** |  | 
**body** | **str** |  | 
**background_id** | **int** |  | [optional] 
**increase_score_bank_article_type** | **str** |  | 

## Example

```python
from openapi_client.models.increase_score_bank_article_input import IncreaseScoreBankArticleInput

# TODO update the JSON string below
json = "{}"
# create an instance of IncreaseScoreBankArticleInput from a JSON string
increase_score_bank_article_input_instance = IncreaseScoreBankArticleInput.from_json(json)
# print the JSON string representation of the object
print(IncreaseScoreBankArticleInput.to_json())

# convert the object into a dict
increase_score_bank_article_input_dict = increase_score_bank_article_input_instance.to_dict()
# create an instance of IncreaseScoreBankArticleInput from a dict
increase_score_bank_article_input_from_dict = IncreaseScoreBankArticleInput.from_dict(increase_score_bank_article_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


