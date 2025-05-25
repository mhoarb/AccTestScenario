# CharityInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logo_id** | **int** |  | 
**image_id** | **int** |  | [optional] 
**title** | **str** |  | 
**charity_description** | **str** |  | 
**gift_description** | **str** |  | 
**required_score** | **int** |  | 
**user_level** | **str** |  | 
**main** | **bool** |  | [optional] 
**display_order** | **int** |  | [optional] 
**complete** | **bool** |  | [optional] 
**url** | **str** |  | [optional] 
**url_title** | **str** |  | [optional] 
**active** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.charity_input import CharityInput

# TODO update the JSON string below
json = "{}"
# create an instance of CharityInput from a JSON string
charity_input_instance = CharityInput.from_json(json)
# print the JSON string representation of the object
print(CharityInput.to_json())

# convert the object into a dict
charity_input_dict = charity_input_instance.to_dict()
# create an instance of CharityInput from a dict
charity_input_from_dict = CharityInput.from_dict(charity_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


