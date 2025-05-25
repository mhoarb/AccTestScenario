# CharityOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**logo_id** | **int** |  | [optional] 
**image_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**charity_description** | **str** |  | [optional] 
**gift_description** | **str** |  | [optional] 
**required_score** | **int** |  | [optional] 
**donation_scores** | **int** |  | [optional] 
**user_level** | **str** |  | [optional] 
**display_order** | **int** |  | [optional] 
**complete** | **bool** |  | [optional] 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 
**active** | **bool** |  | [optional] 
**main** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.charity_output import CharityOutput

# TODO update the JSON string below
json = "{}"
# create an instance of CharityOutput from a JSON string
charity_output_instance = CharityOutput.from_json(json)
# print the JSON string representation of the object
print(CharityOutput.to_json())

# convert the object into a dict
charity_output_dict = charity_output_instance.to_dict()
# create an instance of CharityOutput from a dict
charity_output_from_dict = CharityOutput.from_dict(charity_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


