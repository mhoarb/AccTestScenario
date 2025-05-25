# IncreaseScoreBankArticleOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**image_id** | **int** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**main** | **bool** |  | [optional] 
**show** | **bool** |  | [optional] 
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**body** | **str** |  | [optional] 
**background_id** | **int** |  | [optional] 
**increase_score_bank_article_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.increase_score_bank_article_output import IncreaseScoreBankArticleOutput

# TODO update the JSON string below
json = "{}"
# create an instance of IncreaseScoreBankArticleOutput from a JSON string
increase_score_bank_article_output_instance = IncreaseScoreBankArticleOutput.from_json(json)
# print the JSON string representation of the object
print(IncreaseScoreBankArticleOutput.to_json())

# convert the object into a dict
increase_score_bank_article_output_dict = increase_score_bank_article_output_instance.to_dict()
# create an instance of IncreaseScoreBankArticleOutput from a dict
increase_score_bank_article_output_from_dict = IncreaseScoreBankArticleOutput.from_dict(increase_score_bank_article_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


